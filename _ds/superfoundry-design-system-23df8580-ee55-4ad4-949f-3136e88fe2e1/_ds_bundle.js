/* @ds-bundle: {"format":4,"namespace":"SuperintelligenceFoundryDesignSystem_d9143e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7130d136f043","components/core/Button.jsx":"2243eae661e7","components/core/Card.jsx":"703d947fa9c2","components/core/IconButton.jsx":"b82bd3733a51","components/core/Tag.jsx":"14211cbdc661","components/feedback/Dialog.jsx":"0fa311bb4a97","components/feedback/Toast.jsx":"f1cfbf68f049","components/feedback/Tooltip.jsx":"8e65d1516453","components/forms/Checkbox.jsx":"20b9eb5d6193","components/forms/Input.jsx":"e67b7df2e770","components/forms/Radio.jsx":"8854594e71ca","components/forms/Select.jsx":"05eba5f3bc83","components/forms/Switch.jsx":"41abc1586efb","components/navigation/NavLink.jsx":"c83da45a032d","components/navigation/Tabs.jsx":"94d2d3f83dc5","ui_kits/marketing/About.jsx":"3039abfed449","ui_kits/marketing/Footer.jsx":"23a3d7a40ef1","ui_kits/marketing/Home.jsx":"21ed45c36b00","ui_kits/marketing/Nav.jsx":"83e23dfeec26","ui_kits/marketing/Research.jsx":"12937df518ce"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SuperintelligenceFoundryDesignSystem_d9143e = window.SuperintelligenceFoundryDesignSystem_d9143e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const toneColors = {
  neutral: {
    bg: 'var(--surface-raised)',
    fg: 'var(--text-secondary)',
    border: 'var(--border-default)'
  },
  accent: {
    bg: 'var(--accent-muted)',
    fg: 'var(--text-accent)',
    border: 'transparent'
  },
  ai: {
    bg: 'var(--accent-ai-muted)',
    fg: 'var(--text-ai)',
    border: 'transparent'
  },
  olive: {
    bg: 'var(--accent-olive-muted)',
    fg: 'var(--text-olive)',
    border: 'transparent'
  },
  success: {
    bg: 'rgba(78,139,92,0.18)',
    fg: '#7FBC8C',
    border: 'transparent'
  },
  warning: {
    bg: 'rgba(217,164,65,0.18)',
    fg: '#E3BC6E',
    border: 'transparent'
  },
  error: {
    bg: 'rgba(192,67,46,0.18)',
    fg: '#E28572',
    border: 'transparent'
  }
};
function Badge({
  children,
  tone = 'neutral'
}) {
  const c = toneColors[tone] || toneColors.neutral;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--text-caption)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      fontSize: '11px',
      background: c.bg,
      color: c.fg,
      border: `1px solid ${c.border}`,
      whiteSpace: 'nowrap'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  sm: {
    padding: '6px 12px',
    font: 'var(--text-label)'
  },
  md: {
    padding: '10px 18px',
    font: 'var(--text-body-s)'
  },
  lg: {
    padding: '13px 24px',
    font: 'var(--text-body-m)'
  }
};
function variantStyle(variant) {
  switch (variant) {
    case 'secondary':
      return {
        background: 'transparent',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-strong)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--text-primary)',
        border: '1px solid transparent'
      };
    case 'destructive':
      return {
        background: 'var(--sf-signal-error)',
        color: 'var(--sf-white)',
        border: '1px solid transparent'
      };
    case 'primary':
    default:
      return {
        background: 'var(--accent-default)',
        color: 'var(--text-on-accent)',
        border: '1px solid transparent'
      };
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  onClick,
  type = 'button'
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const base = variantStyle(variant);
  let background = base.background;
  if (!disabled && hover) {
    if (variant === 'primary') background = 'var(--accent-hover)';
    if (variant === 'secondary' || variant === 'ghost') background = 'var(--surface-raised)';
    if (variant === 'destructive') background = '#D65038';
  }
  if (!disabled && active) {
    if (variant === 'primary') background = 'var(--accent-active)';
  }
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)',
      font: sizeStyles[size].font,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-normal)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: `transform var(--duration-fast) var(--ease-press), background var(--duration-base) var(--ease-standard)`,
      transform: !disabled && active ? 'scale(0.97)' : 'scale(1)',
      opacity: disabled ? 0.4 : 1,
      padding: sizeStyles[size].padding,
      ...base,
      background
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  interactive = false,
  padding = 'lg',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const pad = padding === 'sm' ? '16px' : padding === 'md' ? '20px' : '28px';
  return React.createElement('div', {
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: `1px solid ${interactive && hover ? 'var(--border-strong)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: pad,
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'all var(--duration-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  onClick,
  disabled = false
}) {
  const [hover, setHover] = React.useState(false);
  const dim = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  const isSolid = variant === 'solid';
  return React.createElement('button', {
    type: 'button',
    onClick,
    disabled,
    'aria-label': label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      border: isSolid ? '1px solid transparent' : '1px solid var(--border-default)',
      background: isSolid ? hover ? 'var(--accent-hover)' : 'var(--accent-default)' : hover ? 'var(--surface-raised)' : 'transparent',
      color: isSolid ? 'var(--text-on-accent)' : 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 8px 4px 10px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-caption)',
      color: 'var(--text-secondary)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)'
    }
  }, children, onRemove && React.createElement('button', {
    type: 'button',
    onClick: onRemove,
    'aria-label': 'Remove',
    style: {
      all: 'unset',
      cursor: 'pointer',
      color: 'var(--text-tertiary)',
      fontFamily: 'var(--font-mono)',
      lineHeight: 1,
      padding: '2px'
    }
  }, '\u00D7'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: '24px',
      width: 380,
      maxWidth: '90vw',
      fontFamily: 'var(--font-body)'
    }
  }, title && React.createElement('div', {
    style: {
      font: 'var(--text-heading-m)',
      color: 'var(--text-primary)',
      marginBottom: 12
    }
  }, title), React.createElement('div', {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)',
      marginBottom: 20
    }
  }, children), actions && React.createElement('div', {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const toneAccent = {
  info: 'var(--sf-ember-500)',
  success: 'var(--sf-signal-success)',
  warning: 'var(--sf-signal-warning)',
  error: 'var(--sf-signal-error)'
};
function Toast({
  children,
  tone = 'info',
  onDismiss
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      padding: '12px 14px',
      background: 'var(--surface-inverse)',
      border: '1px solid var(--border-default)',
      borderLeft: `2px solid ${toneAccent[tone] || toneAccent.info}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      maxWidth: 340,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-inverse)',
      flex: 1
    }
  }, children), onDismiss && React.createElement('button', {
    onClick: onDismiss,
    'aria-label': 'Dismiss',
    style: {
      all: 'unset',
      cursor: 'pointer',
      color: 'var(--text-inverse)',
      opacity: 0.55,
      fontFamily: 'var(--font-mono)',
      lineHeight: 1
    }
  }, '\u00D7'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  content,
  side = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const posStyle = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    }
  }[side];
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      ...posStyle,
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      font: 'var(--text-caption)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 20
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    disabled,
    style: {
      display: 'none'
    }
  }), React.createElement('span', {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${checked ? 'var(--accent-default)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--accent-default)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-on-accent)',
      fontSize: 12,
      transition: 'all var(--duration-fast) var(--ease-press)',
      flexShrink: 0
    }
  }, checked ? '\u2713' : ''), label && React.createElement('span', {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-secondary)'
    }
  }, label), React.createElement('input', {
    type,
    value,
    placeholder,
    disabled,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-primary)',
      background: 'var(--surface-raised)',
      border: `1px solid ${error ? 'var(--sf-signal-error)' : focus ? 'var(--border-accent)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--shadow-focus-ring)' : 'none',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)'
    }
  }), error && React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--sf-signal-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('input', {
    type: 'radio',
    checked,
    onChange,
    name,
    disabled,
    style: {
      display: 'none'
    }
  }), React.createElement('span', {
    style: {
      width: 18,
      height: 18,
      boxSizing: 'border-box',
      borderRadius: '50%',
      border: `1px solid ${checked ? 'var(--accent-default)' : 'var(--border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'border-color var(--duration-fast) var(--ease-press)'
    }
  }, checked && React.createElement('span', {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent-default)'
    }
  })), label && React.createElement('span', {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-secondary)'
    }
  }, label), React.createElement('select', {
    value,
    onChange,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-primary)',
      background: 'var(--surface-raised)',
      border: `1px solid ${focus ? 'var(--border-accent)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      outline: 'none',
      opacity: disabled ? 0.5 : 1
    }
  }, options.map(opt => React.createElement('option', {
    key: opt.value,
    value: opt.value
  }, opt.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    disabled,
    style: {
      display: 'none'
    }
  }), React.createElement('span', {
    style: {
      width: 36,
      height: 20,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent-default)' : 'var(--surface-raised)',
      border: `1px solid ${checked ? 'var(--accent-default)' : 'var(--border-strong)'}`,
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: checked ? 19 : 1,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: checked ? 'var(--text-on-accent)' : 'var(--sf-char-300)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label && React.createElement('span', {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function NavLink({
  children,
  active = false,
  href = '#',
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('a', {
    href,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      font: 'var(--text-body-s)',
      fontWeight: 500,
      textDecoration: 'none',
      color: active || hover ? 'var(--text-primary)' : 'var(--text-secondary)',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  value,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, tabs.map(tab => {
    const active = tab.value === value;
    return React.createElement('button', {
      key: tab.value,
      type: 'button',
      onClick: () => onChange && onChange(tab.value),
      style: {
        all: 'unset',
        cursor: 'pointer',
        padding: '10px 4px',
        marginRight: '20px',
        font: 'var(--text-body-s)',
        fontWeight: 600,
        color: active ? 'var(--text-primary)' : 'var(--text-tertiary)',
        borderBottom: `2px solid ${active ? 'var(--accent-default)' : 'transparent'}`,
        transition: 'color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)'
      }
    }, tab.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/About.jsx
try { (() => {
function About() {
  const {
    Badge
  } = window.SuperintelligenceFoundryDesignSystem_d9143e;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-narrow)',
      margin: '0 auto',
      padding: '120px var(--page-margin) 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-accent)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      marginBottom: 20
    }
  }, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-display-l)',
      fontWeight: 'var(--font-weight-display-l)',
      lineHeight: 'var(--line-height-display-l)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 32px'
    }
  }, "Moving from Generative AI to ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-ai)'
    }
  }, "Creative AGI.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      margin: '0 0 24px'
    }
  }, "Generative AI combines and imagines new data; what comes next is AI that creates. That's what we're driving at Superintelligence Foundry \u2014 moving from Generative AI to Creative AGI."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      margin: '0 0 24px'
    }
  }, "Today the system works as an embodied scientist and engineer, making discoveries, inventions, and solving the hardest technical challenges. Each solution makes the system better at the next one, and that loop is the real product: an open-ended intelligence that eventually creates not products but whole companies. Including itself."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '48px 0 20px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Discovery"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Invention"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Compounding systems")), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-heading-l)',
      color: 'var(--text-primary)',
      margin: '0 0 12px'
    }
  }, "Why a foundry"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "A foundry doesn't display finished goods \u2014 it's where things get made: poured, cast, shaped under heat and pressure, one run feeding the next. That's the posture of the system we're building \u2014 always mid-production, always turning today's result into tomorrow's capability."));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px var(--page-margin) 32px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: "../../assets/logo/sf-logo.webm",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    style: {
      height: 22,
      width: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-tertiary)'
    }
  }, "Superintelligence Foundry")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-tertiary)',
      fontFamily: 'var(--font-mono)'
    }
  }, "\xA9 2026 \u2014 the loop is the product."));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Home.jsx
try { (() => {
function Home({
  onNavigate
}) {
  const {
    Button,
    Card,
    Badge
  } = window.SuperintelligenceFoundryDesignSystem_d9143e;
  const capabilities = [{
    tag: 'Discovery',
    title: 'Forms and tests its own hypotheses',
    body: 'Runs experiments end to end — designs the test, reads the result, decides what to try next.',
    outputs: '3 published results'
  }, {
    tag: 'Invention',
    title: 'Builds the tools it needs',
    body: 'When no existing method solves the problem, it engineers a new one rather than waiting for one.',
    outputs: '2 instruments built'
  }, {
    tag: 'Compounding',
    title: 'Feeds every result back in',
    body: 'Each solved problem becomes training signal for the next one — the loop is the actual product.',
    outputs: '11 capabilities gained'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '140px var(--page-margin) 100px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 900,
      height: 900,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(232,112,58,0.16) 0%, rgba(232,112,58,0) 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-accent)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      marginBottom: 20
    }
  }, "Superintelligence Foundry"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-display-xl)',
      fontWeight: 'var(--font-weight-display-xl)',
      lineHeight: 'var(--line-height-display-xl)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 24px',
      maxWidth: 900
    }
  }, "From Generative AI to ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-ai)'
    }
  }, "Creative AGI.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      maxWidth: 620,
      margin: '0 0 36px'
    }
  }, "Generative AI combines and imagines new data. What comes next is AI that creates \u2014 an embodied scientist and engineer that makes discoveries, invents what it needs, and solves the hardest technical challenges."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('research')
  }, "See the work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('about')
  }, "Read our thesis"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginLeft: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--accent-olive)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono-s)',
      color: 'var(--text-olive)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "SYSTEM RUNNING \xB7 14 EXPERIMENTS IN FLIGHT"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px var(--page-margin) 100px',
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-tertiary)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      marginBottom: 16
    }
  }, "The loop"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-display-m)',
      fontWeight: 'var(--font-weight-display-m)',
      lineHeight: 'var(--line-height-display-m)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 48px',
      maxWidth: 720
    }
  }, "Each solution makes the system better at the next one."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, capabilities.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, c.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-heading-l)',
      color: 'var(--text-primary)',
      margin: '16px 0 10px'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)',
      margin: '0 0 14px'
    }
  }, c.body), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-mono-s)',
      color: 'var(--text-ai)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 12
    }
  }, c.outputs))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--page-margin) 120px',
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24,
      background: 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-display-s)',
      color: 'var(--text-primary)',
      margin: '0 0 8px',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Eventually, it builds companies. Including itself."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "An open-ended intelligence, still early \u2014 read where we're headed.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('about')
  }, "Read our thesis"))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
function Nav({
  page,
  onNavigate
}) {
  const {
    NavLink,
    Button
  } = window.SuperintelligenceFoundryDesignSystem_d9143e;
  const links = [{
    key: 'home',
    label: 'Home'
  }, {
    key: 'research',
    label: 'Research'
  }, {
    key: 'about',
    label: 'About'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px var(--page-margin)',
      background: 'var(--surface-nav-blur)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer'
    },
    onClick: () => onNavigate('home')
  }, /*#__PURE__*/React.createElement("video", {
    src: "../../assets/logo/sf-logo.webm",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    style: {
      height: 30,
      width: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-heading-s)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Superintelligence Foundry")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.key,
    active: page === l.key,
    onClick: e => {
      e.preventDefault();
      onNavigate(l.key);
    }
  }, l.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNavigate('research')
  }, "See the work")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Research.jsx
try { (() => {
function Research() {
  const {
    Card,
    Badge,
    Tag
  } = window.SuperintelligenceFoundryDesignSystem_d9143e;
  const posts = [{
    tag: 'Discovery',
    title: 'Autonomous synthesis loop reaches convergence on a new catalyst class',
    date: '2026.06',
    domains: ['Materials science'],
    bySystem: true
  }, {
    tag: 'Invention',
    title: 'The system designed its own measurement rig when no existing instrument fit',
    date: '2026.05',
    domains: ['Robotics', 'Tooling'],
    bySystem: true
  }, {
    tag: 'Engineering',
    title: 'Notes on running thousands of parallel hypotheses without losing the thread',
    date: '2026.04',
    domains: ['Systems'],
    bySystem: false
  }, {
    tag: 'Discovery',
    title: 'A failed experiment that improved the next ten',
    date: '2026.03',
    domains: ['Chemistry'],
    bySystem: true
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '120px var(--page-margin) 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-accent)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      marginBottom: 20
    }
  }, "Research"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--font-size-display-l)',
      fontWeight: 'var(--font-weight-display-l)',
      lineHeight: 'var(--line-height-display-l)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 20px'
    }
  }, "The work, as it happens."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      margin: '0 0 56px',
      maxWidth: 640
    }
  }, "Notes from the loop \u2014 what the system discovered, what it had to invent to get there, and what it changed about itself afterward."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, posts.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    interactive: true,
    padding: "lg",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, p.tag), p.bySystem && /*#__PURE__*/React.createElement(Badge, {
    tone: "ai"
  }, "By the system"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono-s)',
      color: 'var(--text-tertiary)'
    }
  }, p.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-heading-l)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, p.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, p.domains.map(d => /*#__PURE__*/React.createElement(Tag, {
    key: d
  }, d)))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Research.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
