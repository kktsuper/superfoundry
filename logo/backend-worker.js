// SuperFoundry logo publish endpoint — Cloudflare Worker
// Receives {password, config} from the logo editor and commits logo-config.json to the repo.
// Secrets (set via `wrangler secret put` or dashboard → Settings → Variables):
//   GH_TOKEN         fine-grained PAT, Contents: read & write, scoped to the one site repo
//   PUBLISH_PASSWORD shared password the editor sends
// Vars (plain): GH_REPO = "owner/repo", GH_PATH = "logo/logo-config.json"
// Accepts {password, config} → commits GH_PATH, or {password, presets} → commits
// logo-presets.json next to GH_PATH. {password, verify:true} just checks the password.

export default {
  async fetch(req, env) {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (req.method !== 'POST') return new Response('POST only', { status: 405, headers: cors });
    let body;
    try { body = await req.json(); } catch (e) { return new Response('bad json', { status: 400, headers: cors }); }
    if (!body || body.password !== env.PUBLISH_PASSWORD) {
      return new Response(JSON.stringify({ error: 'wrong password' }), { status: 401, headers: { ...cors, 'Content-Type': 'application/json' } });
    }
    // verify-only: the editor gate checks the password here without committing
    if (body.verify) {
      return new Response(JSON.stringify({ ok: true }), { headers: { ...cors, 'Content-Type': 'application/json' } });
    }
    const isPresets = body.presets && typeof body.presets === 'object';
    const path = isPresets ? env.GH_PATH.replace(/[^/]+$/, 'logo-presets.json') : env.GH_PATH;
    const payload = isPresets ? body.presets : body.config;
    const api = `https://api.github.com/repos/${env.GH_REPO}/contents/${path}`;
    const hdrs = {
      Authorization: 'Bearer ' + env.GH_TOKEN,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'sf-logo-publish',
      'Content-Type': 'application/json'
    };
    let sha;
    const r0 = await fetch(api, { headers: hdrs });
    if (r0.ok) sha = (await r0.json()).sha;
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(payload, null, 2))));
    const put = { message: isPresets ? 'Update logo presets' : 'Publish logo config', content };
    if (sha) put.sha = sha;
    const r1 = await fetch(api, { method: 'PUT', headers: hdrs, body: JSON.stringify(put) });
    const out = await r1.json();
    if (!r1.ok) {
      return new Response(JSON.stringify({ error: out.message || r1.status }), { status: 502, headers: { ...cors, 'Content-Type': 'application/json' } });
    }
    return new Response(JSON.stringify({ ok: true, commit: out.commit && out.commit.sha }), { headers: { ...cors, 'Content-Type': 'application/json' } });
  }
};
