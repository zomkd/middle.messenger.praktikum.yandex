function e(e, t, n, i) {
  Object.defineProperty(e, t, {
    get: n,
    set: i,
    enumerable: !0,
    configurable: !0,
  });
}
function t(e) {
  return e && e.__esModule ? e.default : e;
}
var n =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : {},
  i = {},
  s = {},
  a = n.parcelRequireab20;
null == a &&
  (((a = function (e) {
    if (e in i) return i[e].exports;
    if (e in s) {
      var t = s[e];
      delete s[e];
      var n = { id: e, exports: {} };
      return (i[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var a = new Error("Cannot find module '" + e + "'");
    throw ((a.code = 'MODULE_NOT_FOUND'), a);
  }).register = function (e, t) {
    s[e] = t;
  }),
  (n.parcelRequireab20 = a)),
  a.register('27Lyk', function (t, n) {
    var i, s;
    e(
      t.exports,
      'register',
      () => i,
      (e) => (i = e),
    ),
      e(
        t.exports,
        'resolve',
        () => s,
        (e) => (s = e),
      );
    var a = {};
    (i = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) a[t[n]] = e[t[n]];
    }),
      (s = function (e) {
        var t = a[e];
        if (null == t) throw new Error('Could not resolve bundle with id ' + e);
        return t;
      });
  }),
  a('27Lyk').register(
    JSON.parse(
      '{"1LzKV":"index.da7324a1.js","gSBIs":"send-icon.42b7d5de.svg","kM7MO":"attach-icon.25f0941c.svg","7cSvV":"lens-icon.53091bd3.svg","b3wcV":"index.1c4e2918.css"}',
    ),
  );
class o {
  constructor() {
    this.listeners = {};
  }
  on(e, t) {
    this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t);
  }
  off(e, t) {
    if (!this.listeners[e]) throw new Event(`Нет события: ${e}`);
    this.listeners[e] = this.listeners[e].filter((e) => e !== t);
  }
  emit(e, ...t) {
    if (!this.listeners[e]) throw new Event(`Нет события: ${e}`);
    this.listeners[e].forEach((e) => e(...t));
  }
}
var r = {
  randomUUID:
    'undefined' != typeof crypto &&
    crypto.randomUUID &&
    crypto.randomUUID.bind(crypto),
};
let l;
const d = new Uint8Array(16);
function c() {
  if (
    !l &&
    ((l =
      'undefined' != typeof crypto &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !l)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
    );
  return l(d);
}
const u = [];
for (let e = 0; e < 256; ++e) u.push((e + 256).toString(16).slice(1));
function p(e, t = 0) {
  return (
    u[e[t + 0]] +
    u[e[t + 1]] +
    u[e[t + 2]] +
    u[e[t + 3]] +
    '-' +
    u[e[t + 4]] +
    u[e[t + 5]] +
    '-' +
    u[e[t + 6]] +
    u[e[t + 7]] +
    '-' +
    u[e[t + 8]] +
    u[e[t + 9]] +
    '-' +
    u[e[t + 10]] +
    u[e[t + 11]] +
    u[e[t + 12]] +
    u[e[t + 13]] +
    u[e[t + 14]] +
    u[e[t + 15]]
  ).toLowerCase();
}
var f = function (e, t, n) {
  if (r.randomUUID && !t && !e) return r.randomUUID();
  const i = (e = e || {}).random || (e.rng || c)();
  if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) {
    n = n || 0;
    for (let e = 0; e < 16; ++e) t[n + e] = i[e];
    return t;
  }
  return p(i);
};
class h {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };
  id = f();
  _element = null;
  constructor(e = 'div', t) {
    const n = new o(),
      { props: i, children: s } = this._getChildrenAndProps(t);
    (this._meta = { tagName: e, props: i }),
      (this.children = s),
      (this.props = this._makePropsProxy(i)),
      (this.eventBus = () => n),
      this._registerEvents(n),
      n.emit(h.EVENTS.INIT);
  }
  _getChildrenAndProps(e) {
    const t = {},
      n = {};
    return (
      Object.entries(e).forEach(([e, i]) => {
        (Array.isArray(i) && i.every((e) => e instanceof h)) || i instanceof h
          ? (n[e] = i)
          : (t[e] = i);
      }),
      { props: t, children: n }
    );
  }
  _addEvents() {
    const { events: e = {} } = this.props;
    Object.keys(e).forEach((t) => {
      this._element?.addEventListener(t, e[t]);
    });
  }
  _registerEvents(e) {
    e.on(h.EVENTS.INIT, this._init.bind(this)),
      e.on(h.EVENTS.FLOW_CDM, this._componentDidMount.bind(this)),
      e.on(h.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this)),
      e.on(h.EVENTS.FLOW_RENDER, this._render.bind(this));
  }
  _createResources() {
    const { tagName: e } = this._meta;
    this._element = this._createDocumentElement(e);
  }
  _init() {
    this._createResources(),
      this.init(),
      this.eventBus().emit(h.EVENTS.FLOW_RENDER);
  }
  init() {}
  _componentDidMount() {
    this.componentDidMount();
  }
  componentDidMount() {}
  dispatchComponentDidMount() {
    this.eventBus().emit(h.EVENTS.FLOW_CDM),
      Object.values(this.children).forEach((e) => {
        Array.isArray(e)
          ? e.forEach((e) => e.dispatchComponentDidMount())
          : e.dispatchComponentDidMount();
      });
  }
  _componentDidUpdate(e, t) {
    this.componentDidUpdate(e, t) && this.eventBus().emit(h.EVENTS.FLOW_RENDER);
  }
  componentDidUpdate(e, t) {
    return !0;
  }
  setProps = (e) => {
    e && Object.assign(this.props, e);
  };
  get element() {
    return this._element;
  }
  _render() {
    const e = this.render();
    (this._element.innerHTML = ''), this._element.append(e), this._addEvents();
  }
  compile(e, t) {
    const n = { ...t };
    Object.entries(this.children).forEach(([e, t]) => {
      Array.isArray(t)
        ? (n[e] = t.map((e) => `<div data-id="${e.id}"></div>`))
        : (n[e] = `<div data-id="${t.id}"></div>`);
    });
    const i = e(n),
      s = document.createElement('template');
    s.innerHTML = i;
    const a = (e) => {
      const t = s.content.querySelector(`[data-id="${e.id}"]`);
      t &&
        (e.getContent()?.append(...Array.from(t.childNodes)),
        t.replaceWith(e.getContent()));
    };
    return (
      Object.entries(this.children).forEach(([e, t]) => {
        Array.isArray(t) ? t.forEach(a) : a(t);
      }),
      s.content
    );
  }
  render() {
    return new DocumentFragment();
  }
  getContent() {
    return this.element;
  }
  _makePropsProxy(e) {
    const t = this;
    return new Proxy(e, {
      get(e, t) {
        const n = e[t];
        return 'function' == typeof n ? n.bind(e) : n;
      },
      set(e, n, i) {
        const s = { ...e };
        return (e[n] = i), t.eventBus().emit(h.EVENTS.FLOW_CDU, s, e), !0;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }
  _createDocumentElement(e) {
    return document.createElement(e);
  }
  show() {
    this.getContent().style.display = 'block';
  }
  hide() {
    this.getContent().style.display = 'none';
  }
  validateBlock(e) {}
}
function m(e, t, n, i) {
  if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
    return '';
  if (!0 === t) return ' ' + (i ? e : e + '="' + e + '"');
  var s = typeof t;
  return (
    ('object' !== s && 'function' !== s) ||
      'function' != typeof t.toJSON ||
      (t = t.toJSON()),
    'string' == typeof t ||
    ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
      ? (n && (t = b(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function v(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, i = '', s = '', a = Array.isArray(t), o = 0;
          o < e.length;
          o++
        )
          (n = v(e[o])) &&
            (a && t[o] && (n = b(n)), (i = i + s + n), (s = ' '));
        return i;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var i in e)
          i && e[i] && y.call(e, i) && ((t = t + n + i), (n = ' '));
        return t;
      })(e)
    : e || '';
}
function b(e) {
  var t = '' + e,
    n = g.exec(t);
  if (!n) return e;
  var i,
    s,
    a,
    o = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        a = '&quot;';
        break;
      case 38:
        a = '&amp;';
        break;
      case 60:
        a = '&lt;';
        break;
      case 62:
        a = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
  }
  return s !== i ? o + t.substring(s, i) : o;
}
var y = Object.prototype.hasOwnProperty,
  g = /["&<>]/;
var _ = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s) {
      n =
        n +
        '<div' +
        m('class', v([`link ${i || ''}`], [!0]), !1, !1) +
        '><a' +
        m('href', s, !0, !1) +
        '>' +
        b(null == (t = e) ? '' : t) +
        '</a></div>';
    }.call(
      this,
      'content' in i
        ? i.content
        : 'undefined' != typeof content
        ? content
        : void 0,
      'extraClass' in i
        ? i.extraClass
        : 'undefined' != typeof extraClass
        ? extraClass
        : void 0,
      'href' in i ? i.href : 'undefined' != typeof href ? href : void 0,
    ),
    n
  );
};
class k extends h {
  constructor(e) {
    super('div', e);
  }
  render() {
    return this.compile(_, this.props);
  }
}
function w(e) {
  var t = '' + e,
    n = x.exec(t);
  if (!n) return e;
  var i,
    s,
    a,
    o = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        a = '&quot;';
        break;
      case 38:
        a = '&amp;';
        break;
      case 60:
        a = '&lt;';
        break;
      case 62:
        a = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
  }
  return s !== i ? o + t.substring(s, i) : o;
}
var x = /["&<>]/;
var C = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s) {
      n =
        n +
        '<script type="module" src="~/src/layouts/main-layout/main-layout.ts"></script><div class="main-layout"><div class="error-message"><div class="error-message__code">' +
        w(null == (t = e) ? '' : t) +
        '</div><div class="error-message__text">' +
        w(null == (t = i) ? '' : t) +
        '</div><div class="error-message__link">' +
        (null == (t = s) ? '' : t) +
        '</div></div></div>';
    }.call(
      this,
      'errorMessageCode' in i
        ? i.errorMessageCode
        : 'undefined' != typeof errorMessageCode
        ? errorMessageCode
        : void 0,
      'errorMessageText' in i
        ? i.errorMessageText
        : 'undefined' != typeof errorMessageText
        ? errorMessageText
        : void 0,
      'link' in i ? i.link : 'undefined' != typeof link ? link : void 0,
    ),
    n
  );
};
class N extends h {
  constructor(e) {
    super('main', e);
  }
  init() {
    this.children.link = new k({ content: 'Назад к чатам', href: '/' });
  }
  render() {
    return this.compile(C, this.props);
  }
}
class L extends h {
  constructor(e) {
    super('main', e);
  }
  init() {
    this.children.link = new k({ content: 'Назад к чатам', href: '/' });
  }
  render() {
    return this.compile(C, this.props);
  }
}
function E(e, t, n, i) {
  if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
    return '';
  if (!0 === t) return ' ' + (i ? e : e + '="' + e + '"');
  var s = typeof t;
  return (
    ('object' !== s && 'function' !== s) ||
      'function' != typeof t.toJSON ||
      (t = t.toJSON()),
    'string' == typeof t ||
    ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
      ? (n && (t = S(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function B(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, i = '', s = '', a = Array.isArray(t), o = 0;
          o < e.length;
          o++
        )
          (n = B(e[o])) &&
            (a && t[o] && (n = S(n)), (i = i + s + n), (s = ' '));
        return i;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var i in e)
          i && e[i] && O.call(e, i) && ((t = t + n + i), (n = ' '));
        return t;
      })(e)
    : e || '';
}
function S(e) {
  var t = '' + e,
    n = P.exec(t);
  if (!n) return e;
  var i,
    s,
    a,
    o = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        a = '&quot;';
        break;
      case 38:
        a = '&amp;';
        break;
      case 60:
        a = '&lt;';
        break;
      case 62:
        a = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
  }
  return s !== i ? o + t.substring(s, i) : o;
}
var O = Object.prototype.hasOwnProperty,
  P = /["&<>]/;
var A = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s) {
      n =
        n +
        '<button' +
        (E('class', B([`form-button ${e}`], [!0]), !1, !1) +
          E('type', s || 'submit', !0, !1)) +
        '>' +
        S(null == (t = i) ? '' : t) +
        '</button>';
    }.call(
      this,
      'btnClass' in i
        ? i.btnClass
        : 'undefined' != typeof btnClass
        ? btnClass
        : void 0,
      'content' in i
        ? i.content
        : 'undefined' != typeof content
        ? content
        : void 0,
      'type' in i ? i.type : 'undefined' != typeof type ? type : void 0,
    ),
    n
  );
};
class M extends h {
  constructor(e) {
    super('div', e), this.element.classList.add('form-button');
  }
  render() {
    return this.compile(A, this.props);
  }
}
function D(e, t, n, i) {
  if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
    return '';
  if (!0 === t) return ' ' + (i ? e : e + '="' + e + '"');
  var s = typeof t;
  return (
    ('object' !== s && 'function' !== s) ||
      'function' != typeof t.toJSON ||
      (t = t.toJSON()),
    'string' == typeof t ||
    ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
      ? (n && (t = R(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function U(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, i = '', s = '', a = Array.isArray(t), o = 0;
          o < e.length;
          o++
        )
          (n = U(e[o])) &&
            (a && t[o] && (n = R(n)), (i = i + s + n), (s = ' '));
        return i;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var i in e)
          i && e[i] && T.call(e, i) && ((t = t + n + i), (n = ' '));
        return t;
      })(e)
    : e || '';
}
function R(e) {
  var t = '' + e,
    n = I.exec(t);
  if (!n) return e;
  var i,
    s,
    a,
    o = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        a = '&quot;';
        break;
      case 38:
        a = '&amp;';
        break;
      case 60:
        a = '&lt;';
        break;
      case 62:
        a = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
  }
  return s !== i ? o + t.substring(s, i) : o;
}
var T = Object.prototype.hasOwnProperty,
  I = /["&<>]/;
var j = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, a) {
      n =
        n +
        '<label' +
        D('class', U([`input__label ${i}`], [!0]), !1, !1) +
        '>' +
        R(null == (t = e || '') ? '' : t) +
        '</label><input' +
        (D('class', U([`input__field-${i}`], [!0]), !1, !1) +
          D('type', `${a}`, !0, !1) +
          D('name', `${i}`, !0, !1) +
          D('placeholder', `${s || ''}`, !0, !1) +
          D('required', !0, !0, !1) +
          D('autofocus', !0, !0, !1)) +
        '/>';
    }.call(
      this,
      'label' in i ? i.label : 'undefined' != typeof label ? label : void 0,
      'name' in i ? i.name : 'undefined' != typeof name ? name : void 0,
      'placeholder' in i
        ? i.placeholder
        : 'undefined' != typeof placeholder
        ? placeholder
        : void 0,
      'type' in i ? i.type : 'undefined' != typeof type ? type : void 0,
    ),
    n
  );
};
class F extends h {
  constructor(e) {
    super('div', e), this.element.classList.add('input');
  }
  render() {
    return this.compile(j, this.props);
  }
}
let q;
var J;
function $(e) {
  const { name: t, value: n } = e;
  if (t === q.Login) {
    const e = /^([0-9]*[a-zA-Z\-_][0-9]*)+$/.test(n);
    return !(n.length >= 3 && n.length < 20) || !e || null;
  }
  if (
    t === q.Password ||
    t === q.RepeatPassword ||
    t === q.OldPassword ||
    t === q.NewPassword
  ) {
    const e = /^(.*([A-Z]+.*[0-9]+|[0-9]+.*[A-Z]+).*)+$/.test(n),
      t = n.length >= 8 && n.length < 40;
    return !e || !t || null;
  }
  if (t === q.FirstName || t === q.SecondName) {
    return !/^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/.test(n) || null;
  }
  if (t === q.Email) {
    return !/^([\w-.]+@[a-zA-Z]+.[a-z]+)$/.test(n) || null;
  }
  if (t === q.Phone) {
    return !/^\+*[\d]{10,15}$/.test(n) || null;
  }
  if (t === q.Message) {
    return !(n.length > 0) || null;
  }
}
function V(e, t) {
  e.preventDefault();
  const n = {};
  let i = !0;
  t.map((e) => {
    const t = document.getElementsByName(e)[0];
    if ($(t)) i = !1;
    else {
      const e = t.getAttribute('name'),
        { value: i } = t;
      e && (n[e] = i);
    }
  }),
    i && console.log(n);
}
((J = q || (q = {})).Login = 'login'),
  (J.Password = 'password'),
  (J.Email = 'email'),
  (J.RepeatPassword = 'repeatPassword'),
  (J.FirstName = 'first_name'),
  (J.SecondName = 'second_name'),
  (J.Phone = 'phone'),
  (J.OldPassword = 'oldPassword'),
  (J.NewPassword = 'newPassword'),
  (J.Message = 'message');
var H = /["&<>]/;
var W = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, a, o) {
      n =
        n +
        '<script type="module" src="~/src/layouts/main-layout/main-layout.ts"></script><div class="main-layout"><main class="sign-in"><form class="sign-in__block" action="../../chat/chat.html"><div class="sign-in__block-title"><span class="sign-in__block-title-text">' +
        (function (e) {
          var t = '' + e,
            n = H.exec(t);
          if (!n) return e;
          var i,
            s,
            a,
            o = '';
          for (i = n.index, s = 0; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
              case 34:
                a = '&quot;';
                break;
              case 38:
                a = '&amp;';
                break;
              case 60:
                a = '&lt;';
                break;
              case 62:
                a = '&gt;';
                break;
              default:
                continue;
            }
            s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
          }
          return s !== i ? o + t.substring(s, i) : o;
        })(null == (t = o) ? '' : t) +
        '</span></div><div class="sign-in__block-login-input">' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = a) ? '' : t) +
        '</div><div class="sign-in__block-auth-btn">' +
        (null == (t = e) ? '' : t) +
        '</div><div class="sign-in__block-sign-up">' +
        (null == (t = i) ? '' : t) +
        '</div></form></main></div>';
    }.call(
      this,
      'button' in i ? i.button : 'undefined' != typeof button ? button : void 0,
      'link' in i ? i.link : 'undefined' != typeof link ? link : void 0,
      'login' in i ? i.login : 'undefined' != typeof login ? login : void 0,
      'password' in i
        ? i.password
        : 'undefined' != typeof password
        ? password
        : void 0,
      'title' in i ? i.title : 'undefined' != typeof title ? title : void 0,
    ),
    n
  );
};
class Z extends h {
  constructor(e) {
    super('main', e);
  }
  validateBlock(e) {
    const t = e.target;
    $(t) ? t.classList.add('invalid') : t.classList.remove('invalid');
  }
  init() {
    (this.children.login = new F({
      name: 'login',
      type: 'text',
      label: 'Логин',
      placeholder: '',
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    })),
      (this.children.password = new F({
        name: 'password',
        type: 'password',
        label: 'Пароль',
        placeholder: '',
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.button = new M({
        type: 'submit',
        content: 'Авторизоваться',
        btnClass: 'sign-in-btn',
        events: { click: (e) => this.onSubmit(e) },
      })),
      (this.children.link = new k({
        content: 'Нет аккаунта?',
        href: '../signUp/signUp.pug',
      }));
  }
  onSubmit(e) {
    V(e, ['login', 'password']);
  }
  render() {
    return this.compile(W, this.props);
  }
}
var z = /["&<>]/;
var K = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, a, o, r, l, d, c, u) {
      n =
        n +
        '<script type="module" src="~/src/layouts/main-layout/main-layout.ts"></script><div class="main-layout"><main class="signUp"><form class="signUp__block" action="../../chat/chat.html"><div class="signUp__block-title"><span class="sign-in__title">' +
        (function (e) {
          var t = '' + e,
            n = z.exec(t);
          if (!n) return e;
          var i,
            s,
            a,
            o = '';
          for (i = n.index, s = 0; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
              case 34:
                a = '&quot;';
                break;
              case 38:
                a = '&amp;';
                break;
              case 60:
                a = '&lt;';
                break;
              case 62:
                a = '&gt;';
                break;
              default:
                continue;
            }
            s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
          }
          return s !== i ? o + t.substring(s, i) : o;
        })(null == (t = u) ? '' : t) +
        '</span></div><div class="signUp__block-user-info-input">' +
        (null == (t = i) ? '' : t) +
        '\n' +
        (null == (t = o) ? '' : t) +
        '\n' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = c) ? '' : t) +
        '\n' +
        (null == (t = l) ? '' : t) +
        '\n' +
        (null == (t = r) ? '' : t) +
        '\n' +
        (null == (t = d) ? '' : t) +
        '</div><div class="signUp__block-auth-btn">' +
        (null == (t = e) ? '' : t) +
        '</div><div class="signUp__block-signUp">' +
        (null == (t = a) ? '' : t) +
        '</div></form></main></div>';
    }.call(
      this,
      'button' in i ? i.button : 'undefined' != typeof button ? button : void 0,
      'email' in i ? i.email : 'undefined' != typeof email ? email : void 0,
      'firstName' in i
        ? i.firstName
        : 'undefined' != typeof firstName
        ? firstName
        : void 0,
      'link' in i ? i.link : 'undefined' != typeof link ? link : void 0,
      'login' in i ? i.login : 'undefined' != typeof login ? login : void 0,
      'password' in i
        ? i.password
        : 'undefined' != typeof password
        ? password
        : void 0,
      'phone' in i ? i.phone : 'undefined' != typeof phone ? phone : void 0,
      'repeatPassword' in i
        ? i.repeatPassword
        : 'undefined' != typeof repeatPassword
        ? repeatPassword
        : void 0,
      'secondName' in i
        ? i.secondName
        : 'undefined' != typeof secondName
        ? secondName
        : void 0,
      'title' in i ? i.title : 'undefined' != typeof title ? title : void 0,
    ),
    n
  );
};
class G extends h {
  constructor(e) {
    super('main', e);
  }
  validateBlock(e) {
    const t = e.target;
    $(t) ? t.classList.add('invalid') : t.classList.remove('invalid');
  }
  init() {
    (this.children.email = new F({
      name: 'email',
      type: 'text',
      label: 'Почта',
      placeholder: '',
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    })),
      (this.children.login = new F({
        name: 'login',
        type: 'text',
        label: 'Логин',
        placeholder: '',
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.firstName = new F({
        name: 'first_name',
        type: 'text',
        label: 'Имя',
        placeholder: '',
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.secondName = new F({
        name: 'second_name',
        type: 'text',
        label: 'Фамилия',
        placeholder: '',
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.phone = new F({
        name: 'phone',
        type: 'text',
        label: 'Телефон',
        placeholder: '',
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.password = new F({
        name: 'password',
        type: 'password',
        label: 'Пароль',
        placeholder: '',
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.repeatPassword = new F({
        name: 'repeatPassword',
        type: 'password',
        label: 'Пароль (ещё раз)',
        placeholder: '',
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.button = new M({
        type: 'submit',
        content: 'Зарегистрироваться',
        btnClass: 'sign-up',
        events: { click: (e) => this.onSubmit(e) },
      })),
      (this.children.link = new k({
        content: 'Войти',
        href: '../../chat/chat.pug',
      }));
  }
  onSubmit(e) {
    e.preventDefault();
    V(e, [
      'email',
      'login',
      'first_name',
      'second_name',
      'phone',
      'password',
      'repeatPassword',
    ]);
  }
  render() {
    return this.compile(K, this.props);
  }
}
function Q(e) {
  var t = '' + e,
    n = X.exec(t);
  if (!n) return e;
  var i,
    s,
    a,
    o = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        a = '&quot;';
        break;
      case 38:
        a = '&amp;';
        break;
      case 60:
        a = '&lt;';
        break;
      case 62:
        a = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
  }
  return s !== i ? o + t.substring(s, i) : o;
}
var X = /["&<>]/;
var Y = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, a, o, r) {
      n =
        n +
        '<header class="sidebar__header"><div class="sidebar__header-profile"><div class="sidebar__header-profile-block"><div class="sidebar__header-profile-block-text"><a class="sidebar__header-profile-block-link" href="../profile/profile.pug">' +
        Q(null == (t = a) ? '' : t) +
        '</a></div><i class="sidebar__header-profile-block-arrow"></i></div></div><div class="sidebar__header-search"><div class="sidebar__header-search-block"><div class="sidebar__header-search-block-icon"> <div class="search-icon"> <img' +
        (function (e, t, n, i) {
          if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
            return '';
          if (!0 === t) return ' ' + (i ? e : e + '="' + e + '"');
          var s = typeof t;
          return (
            ('object' !== s && 'function' !== s) ||
              'function' != typeof t.toJSON ||
              (t = t.toJSON()),
            'string' == typeof t ||
            ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
              ? (n && (t = Q(t)), ' ' + e + '="' + t + '"')
              : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
          );
        })('src', e, !0, !1) +
        ' alt="icon"/></div>' +
        (null == (t = s) ? '' : t) +
        '</div><div class="sidebar__header-search-block-text">' +
        Q(null == (t = i) ? '' : t) +
        '</div></div></div></header><section class="user-chats">' +
        (null == (t = o) ? '' : t) +
        '\n' +
        (null == (t = r) ? '' : t) +
        '</section>';
    }.call(
      this,
      'img' in i ? i.img : 'undefined' != typeof img ? img : void 0,
      'search' in i ? i.search : 'undefined' != typeof search ? search : void 0,
      'searchLink' in i
        ? i.searchLink
        : 'undefined' != typeof searchLink
        ? searchLink
        : void 0,
      'title' in i ? i.title : 'undefined' != typeof title ? title : void 0,
      'userChat1' in i
        ? i.userChat1
        : 'undefined' != typeof userChat1
        ? userChat1
        : void 0,
      'userChat2' in i
        ? i.userChat2
        : 'undefined' != typeof userChat2
        ? userChat2
        : void 0,
    ),
    n
  );
};
function ee(e) {
  var t = '' + e,
    n = te.exec(t);
  if (!n) return e;
  var i,
    s,
    a,
    o = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        a = '&quot;';
        break;
      case 38:
        a = '&amp;';
        break;
      case 60:
        a = '&lt;';
        break;
      case 62:
        a = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
  }
  return s !== i ? o + t.substring(s, i) : o;
}
var te = /["&<>]/;
var ne = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, a, o) {
      n =
        n +
        '<div class="user-chats__container"><div class="user-chats__img">' +
        ee(null == (t = e) ? '' : t) +
        '</div><div class="user-chats__content"><div class="user-chats__content-name">' +
        ee(null == (t = s) ? '' : t) +
        '</div><div class="user-chats__content-message">' +
        ee(null == (t = i) ? '' : t) +
        '</div></div><div class="user-chats__notify"><div class="user-chats__notify-time">' +
        ee(null == (t = o) ? '' : t) +
        '</div><div class="user-chats__notify-new-messages">' +
        ee(null == (t = a) ? '' : t) +
        '</div></div></div>';
    }.call(
      this,
      'href' in i ? i.href : 'undefined' != typeof href ? href : void 0,
      'message' in i
        ? i.message
        : 'undefined' != typeof message
        ? message
        : void 0,
      'name' in i ? i.name : 'undefined' != typeof name ? name : void 0,
      'newMessageCount' in i
        ? i.newMessageCount
        : 'undefined' != typeof newMessageCount
        ? newMessageCount
        : void 0,
      'time' in i ? i.time : 'undefined' != typeof time ? time : void 0,
    ),
    n
  );
};
class ie extends h {
  constructor(e) {
    super('div', e), this.element.classList.add('user-chats__block');
  }
  render() {
    return this.compile(ne, this.props);
  }
}
class se extends h {
  constructor(e) {
    super('main', e), this.element.classList.add('sidebar');
  }
  init() {
    (this.children.profileLink = new k({
      content: '',
      href: '../signUp/signUp.pug',
      extraClass: 'sidebar__link',
    })),
      (this.children.searchLink = new F({
        name: 'search',
        type: 'text',
        placeholder: 'Поиск',
      })),
      (this.children.userChat1 = new ie({
        href: 'img',
        name: 'Dean',
        message: 'whats up!',
        time: '11:12',
        newMessageCount: 3,
        events: {
          click: () => {
            'none' !==
            document.getElementsByClassName('empty-chat')[0].style.display
              ? ((document.getElementsByClassName(
                  'empty-chat',
                )[0].style.display = 'none'),
                (document.getElementsByClassName('messages')[0].style.display =
                  'block'))
              : ((document.getElementsByClassName(
                  'empty-chat',
                )[0].style.display = 'flex'),
                (document.getElementsByClassName('messages')[0].style.display =
                  'none'));
          },
        },
      })),
      (this.children.userChat2 = new ie({
        href: 'img',
        name: 'Fox',
        message: 'yo',
        time: '11:42',
        newMessageCount: 1,
        events: {
          click: () => {
            'none' !==
            document.getElementsByClassName('empty-chat')[0].style.display
              ? ((document.getElementsByClassName(
                  'empty-chat',
                )[0].style.display = 'none'),
                (document.getElementsByClassName('messages')[0].style.display =
                  'block'))
              : ((document.getElementsByClassName(
                  'empty-chat',
                )[0].style.display = 'flex'),
                (document.getElementsByClassName('messages')[0].style.display =
                  'none'));
          },
        },
      }));
  }
  render() {
    return this.compile(Y, this.props);
  }
}
var ae = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s) {
      n =
        n +
        '<header class="main-chat__header">' +
        (null == (t = s) ? '' : t) +
        '</header><main class="main-chat__dialogs">' +
        (null == (t = i) ? '' : t) +
        '</main><section class="main-chat__bottom">   ' +
        (null == (t = e) ? '' : t) +
        '</section>';
    }.call(
      this,
      'bottom' in i ? i.bottom : 'undefined' != typeof bottom ? bottom : void 0,
      'dialogs' in i
        ? i.dialogs
        : 'undefined' != typeof dialogs
        ? dialogs
        : void 0,
      'header' in i ? i.header : 'undefined' != typeof header ? header : void 0,
    ),
    n
  );
};
var oe = /["&<>]/;
var re = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e) {
      n =
        n +
        '<div class="main-chat-header__items"><div class="main-chat-header__user-info"><div class="main-chat-header__icon"></div><div class="main-chat-header__name">' +
        (function (e) {
          var t = '' + e,
            n = oe.exec(t);
          if (!n) return e;
          var i,
            s,
            a,
            o = '';
          for (i = n.index, s = 0; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
              case 34:
                a = '&quot;';
                break;
              case 38:
                a = '&amp;';
                break;
              case 60:
                a = '&lt;';
                break;
              case 62:
                a = '&gt;';
                break;
              default:
                continue;
            }
            s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
          }
          return s !== i ? o + t.substring(s, i) : o;
        })(null == (t = e) ? '' : t) +
        '</div></div><div class="main-chat-header__user-action-btn"><div class="main-chat-header__user-action-dot"></div><div class="main-chat-header__user-action-dot"></div><div class="main-chat-header__user-action-dot"></div></div></div>';
    }.call(
      this,
      'username' in i
        ? i.username
        : 'undefined' != typeof username
        ? username
        : void 0,
    ),
    n
  );
};
class le extends h {
  constructor(e) {
    super('div', e), this.element.classList.add('main-chat-header__block');
  }
  render() {
    return this.compile(re, this.props);
  }
}
function de(e, t, n, i) {
  if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
    return '';
  if (!0 === t) return ' ' + (i ? e : e + '="' + e + '"');
  var s = typeof t;
  return (
    ('object' !== s && 'function' !== s) ||
      'function' != typeof t.toJSON ||
      (t = t.toJSON()),
    'string' == typeof t ||
    ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
      ? (n &&
          (t = (function (e) {
            var t = '' + e,
              n = ce.exec(t);
            if (!n) return e;
            var i,
              s,
              a,
              o = '';
            for (i = n.index, s = 0; i < t.length; i++) {
              switch (t.charCodeAt(i)) {
                case 34:
                  a = '&quot;';
                  break;
                case 38:
                  a = '&amp;';
                  break;
                case 60:
                  a = '&lt;';
                  break;
                case 62:
                  a = '&gt;';
                  break;
                default:
                  continue;
              }
              s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
            }
            return s !== i ? o + t.substring(s, i) : o;
          })(t)),
        ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
var ce = /["&<>]/;
var ue = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, a, o) {
      n =
        n +
        '<section class="main-chat-bottom__block"><div class="main-chat-bottom__items"><div class="main-chat-bottom__attach-btn"></div><img' +
        de('src', i, !0, !1) +
        ' alt="icon"/>' +
        (null == (t = e) ? '' : t) +
        '<div class="main-chat-bottom__message-panel"><div class="main-chat-bottom__message-panel_text"> </div>' +
        (null == (t = a) ? '' : t) +
        '</div><div class="main-chat-bottom__send-btn"> <img' +
        de('src', s, !0, !1) +
        ' alt="icon"/>' +
        (null == (t = o) ? '' : t) +
        '</div></div></section>';
    }.call(
      this,
      'attachLink' in i
        ? i.attachLink
        : 'undefined' != typeof attachLink
        ? attachLink
        : void 0,
      'imgAttach' in i
        ? i.imgAttach
        : 'undefined' != typeof imgAttach
        ? imgAttach
        : void 0,
      'imgSend' in i
        ? i.imgSend
        : 'undefined' != typeof imgSend
        ? imgSend
        : void 0,
      'input' in i ? i.input : 'undefined' != typeof input ? input : void 0,
      'sendLink' in i
        ? i.sendLink
        : 'undefined' != typeof sendLink
        ? sendLink
        : void 0,
    ),
    n
  );
};
class pe extends h {
  constructor(e) {
    super('footer', e), this.element.classList.add('main-chat__bottom');
  }
  validateBlock(e) {
    const t = e.target;
    $(t) ? t.classList.add('invalid') : t.classList.remove('invalid');
  }
  init() {
    (this.children.input = new F({
      name: 'message',
      type: 'textarea',
      label: '',
      placeholder: 'Сообщение',
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    })),
      (this.children.attachLink = new k({})),
      (this.children.sendLink = new k({
        href: '',
        events: { click: (e) => this.onSubmit(e) },
      }));
  }
  onSubmit(e) {
    e.preventDefault();
    const t = {};
    let n = !0;
    ['message'].map((e) => {
      const i = document.getElementsByName(e)[0];
      if ($(i)) n = !1;
      else {
        const e = i.getAttribute('name'),
          { value: n } = i;
        e && (t[e] = n);
      }
    }),
      n && console.log(t);
  }
  render() {
    return this.compile(ue, this.props);
  }
}
var fe = /["&<>]/;
var he = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e) {
      n =
        n +
        '<div class="empty-chat">' +
        (function (e) {
          var t = '' + e,
            n = fe.exec(t);
          if (!n) return e;
          var i,
            s,
            a,
            o = '';
          for (i = n.index, s = 0; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
              case 34:
                a = '&quot;';
                break;
              case 38:
                a = '&amp;';
                break;
              case 60:
                a = '&lt;';
                break;
              case 62:
                a = '&gt;';
                break;
              default:
                continue;
            }
            s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
          }
          return s !== i ? o + t.substring(s, i) : o;
        })(null == (t = e) ? '' : t) +
        '</div><div class="messages"><div class="message-date">1 января</div><div class="message-mine"><div class="message-mine-block"><div class="message-text-mine">orem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel obcaecati iste<div class="message-time-mine">23:59</div></div></div></div><div class="message-your"><div class="message-your-block"><div class="message-text-your">orem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel obcaecati iste<div class="message-time-your">11:21</div></div></div></div></div>';
    }.call(
      this,
      'content' in i
        ? i.content
        : 'undefined' != typeof content
        ? content
        : void 0,
    ),
    n
  );
};
class me extends h {
  constructor(e) {
    super('div', e), this.element.classList.add('main-chat-dialogs__block');
  }
  render() {
    return this.compile(he, this.props);
  }
}
var ve;
ve = new URL(a('27Lyk').resolve('gSBIs'), import.meta.url).toString();
var be;
be = new URL(a('27Lyk').resolve('kM7MO'), import.meta.url).toString();
class ye extends h {
  constructor() {
    super('main', {}), this.element.classList.add('main-chat');
  }
  init() {
    (this.children.header = new le({ username: 'Unknown' })),
      (this.children.dialogs = new me({
        content: 'Выберите чат чтобы отправить сообщение',
      })),
      (this.children.bottom = new pe({ imgSend: t(ve), imgAttach: t(be) }));
  }
  render() {
    return this.compile(ae, this.props);
  }
}
var ge,
  _e = function (e) {
    var t,
      n = '',
      i = e || {};
    return (
      function (e, i) {
        n =
          n + ((null == (t = i) ? '' : t) + '\n') + (null == (t = e) ? '' : t);
      }.call(
        this,
        'mainChat' in i
          ? i.mainChat
          : 'undefined' != typeof mainChat
          ? mainChat
          : void 0,
        'sidebar' in i
          ? i.sidebar
          : 'undefined' != typeof sidebar
          ? sidebar
          : void 0,
      ),
      n
    );
  };
ge = new URL(a('27Lyk').resolve('7cSvV'), import.meta.url).toString();
class ke extends h {
  constructor(e) {
    super('main', e), this.element.classList.add('chat');
  }
  init() {
    (this.children.sidebar = new se({ title: 'Профиль', img: t(ge) })),
      (this.children.mainChat = new ye());
  }
  render() {
    return this.compile(_e, this.props);
  }
}
function we(e, t, n, i) {
  if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
    return '';
  if (!0 === t) return ' ' + (i ? e : e + '="' + e + '"');
  var s = typeof t;
  return (
    ('object' !== s && 'function' !== s) ||
      'function' != typeof t.toJSON ||
      (t = t.toJSON()),
    'string' == typeof t ||
    ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
      ? (n && (t = xe(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function xe(e) {
  var t = '' + e,
    n = Ce.exec(t);
  if (!n) return e;
  var i,
    s,
    a,
    o = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        a = '&quot;';
        break;
      case 38:
        a = '&amp;';
        break;
      case 60:
        a = '&lt;';
        break;
      case 62:
        a = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
  }
  return s !== i ? o + t.substring(s, i) : o;
}
var Ce = /["&<>]/;
var Ne = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, a, o) {
      (n =
        n +
        '<span class="profile-card__field__title">' +
        xe(null == (t = s) ? '' : t) +
        '</span>'),
        (n = i
          ? n +
            '<input class="input__field profile-card__field__body"' +
            we('type', `${o}`, !0, !1) +
            we('name', a, !0, !1) +
            we('value', `${e || ''}`, !0, !1) +
            we('required', !0, !0, !1) +
            we('autofocus', !0, !0, !1) +
            '/>'
          : n +
            '<span class="profile-card__field__body">' +
            xe(null == (t = e) ? '' : t) +
            '</span>');
    }.call(
      this,
      'body' in i ? i.body : 'undefined' != typeof body ? body : void 0,
      'is_input' in i
        ? i.is_input
        : 'undefined' != typeof is_input
        ? is_input
        : void 0,
      'label' in i ? i.label : 'undefined' != typeof label ? label : void 0,
      'name' in i ? i.name : 'undefined' != typeof name ? name : void 0,
      'type' in i ? i.type : 'undefined' != typeof type ? type : void 0,
    ),
    n
  );
};
class Le extends h {
  constructor(e) {
    super('div', e), this.element.classList.add('profile-card__field');
  }
  render() {
    return this.compile(Ne, this.props);
  }
}
function Ee(e) {
  var t = '' + e,
    n = Be.exec(t);
  if (!n) return e;
  var i,
    s,
    a,
    o = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        a = '&quot;';
        break;
      case 38:
        a = '&amp;';
        break;
      case 60:
        a = '&lt;';
        break;
      case 62:
        a = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (o += t.substring(s, i)), (s = i + 1), (o += a);
  }
  return s !== i ? o + t.substring(s, i) : o;
}
var Be = /["&<>]/;
var Se = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, a, o, r, l, d, c, u) {
      n =
        n +
        '<div class="profile-card__user-info"><div class="profile-card__user-info-avatar">' +
        Ee(null == (t = a) ? '' : t) +
        '</div><div class="profile-card__user-info-name">' +
        Ee(null == (t = c) ? '' : t) +
        '</div></div><div class="profile-card__block"><div class="profile-card__fields"> ' +
        (null == (t = e) ? '' : t) +
        '\n' +
        (null == (t = o) ? '' : t) +
        '\n' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = r) ? '' : t) +
        '\n' +
        (null == (t = u) ? '' : t) +
        '</div><div class="profile-card__actions"><div class="profile-card__field">' +
        (null == (t = l) ? '' : t) +
        '</div><div class="profile-card__field">' +
        (null == (t = d) ? '' : t) +
        '</div><div class="profile-card__field">   ' +
        (null == (t = i) ? '' : t) +
        '</div></div></div>';
    }.call(
      this,
      'email' in i ? i.email : 'undefined' != typeof email ? email : void 0,
      'exitLink' in i
        ? i.exitLink
        : 'undefined' != typeof exitLink
        ? exitLink
        : void 0,
      'firstName' in i
        ? i.firstName
        : 'undefined' != typeof firstName
        ? firstName
        : void 0,
      'img' in i ? i.img : 'undefined' != typeof img ? img : void 0,
      'login' in i ? i.login : 'undefined' != typeof login ? login : void 0,
      'secondName' in i
        ? i.secondName
        : 'undefined' != typeof secondName
        ? secondName
        : void 0,
      'updateInfoLink' in i
        ? i.updateInfoLink
        : 'undefined' != typeof updateInfoLink
        ? updateInfoLink
        : void 0,
      'updatePasswordLink' in i
        ? i.updatePasswordLink
        : 'undefined' != typeof updatePasswordLink
        ? updatePasswordLink
        : void 0,
      'userInfoName' in i
        ? i.userInfoName
        : 'undefined' != typeof userInfoName
        ? userInfoName
        : void 0,
      'username' in i
        ? i.username
        : 'undefined' != typeof username
        ? username
        : void 0,
    ),
    n
  );
};
class Oe extends h {
  constructor(e) {
    super('main', e), this.element.classList.add('profile-card');
  }
  init() {
    (this.children.email = new Le({
      name: 'email',
      type: 'text',
      label: 'Почта',
      body: 'temp@a.ru',
    })),
      (this.children.login = new Le({
        name: 'login',
        type: 'text',
        label: 'Логин',
        body: 'ivan',
      })),
      (this.children.name = new Le({
        name: 'name',
        type: 'text',
        label: 'Имя',
        body: 'iv',
      })),
      (this.children.secondName = new Le({
        name: 'second_name',
        type: 'text',
        label: 'Фамилия',
        body: 'test',
      })),
      (this.children.username = new Le({
        name: 'username',
        type: 'text',
        label: 'Имя в чате',
        body: 'tester',
      })),
      (this.children.phone = new Le({
        name: 'phone',
        type: 'text',
        label: 'Телефон',
        body: '+7 (123) 123 12 32',
      })),
      (this.children.updateInfoLink = new k({
        content: 'Изменить данные',
        href: '../../views/profile/profile-update-info/profile-update-info.pug',
        extraClass: 'profile__link',
      })),
      (this.children.updatePasswordLink = new k({
        content: 'Изменить пароль',
        href: '../../views/profile/profile-update-password/profile-update-password.pug',
        extraClass: 'profile__link',
      })),
      (this.children.exitLink = new k({
        content: 'Выйти',
        href: '../../views/chat/chat.pug',
        extraClass: 'profile__link_exit',
      }));
  }
  render() {
    return this.compile(Se, this.props);
  }
}
var Pe = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e) {
      n =
        n +
        '<script type="module" src="~/src/layouts/profile-layout/profile-layout.ts"></script><div class="profile-layout"><section class="profile-layout__sidebar"><a class="profile-layout__sidebar-btn" href="/"> <p>Назад </a></p></a></section><section class="profile-layout__main">' +
        (null == (t = e) ? '' : t) +
        ' </section></div>';
    }.call(
      this,
      'profileCard' in i
        ? i.profileCard
        : 'undefined' != typeof profileCard
        ? profileCard
        : void 0,
    ),
    n
  );
};
class Ae extends h {
  constructor() {
    super('main', {});
  }
  init() {
    this.children.profileCard = new Oe({ userInfoName: 'testers', img: 'src' });
  }
  render() {
    return this.compile(Pe, this.props);
  }
}
var Me = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, a, o, r, l) {
      n =
        n +
        '<script type="module" src="~/src/layouts/profile-layout/profile-layout.ts"></script><div class="profile-layout"><section class="profile-layout__sidebar"><a class="profile-layout__sidebar-btn" href="/"> <p>Назад </a></p></a></section><section class="profile-layout__main"><div class="profile-card"><section class="profile-card__user-info"><div class="profile-card__user-info-avatar"><img src = "~/src/assets/icons/empty-avatar-icon.svg" alt="empty-avatar-icon"/></div></section><form class="profile-card__block" action="../../chat/chat.html"><div class="profile-card__fields"> ' +
        (null == (t = i) ? '' : t) +
        '\n' +
        (null == (t = a) ? '' : t) +
        '\n' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = r) ? '' : t) +
        '\n' +
        (null == (t = l) ? '' : t) +
        '\n' +
        (null == (t = o) ? '' : t) +
        '</div><div class="profile-card__actions"><div class="profile-card__actions-btn">' +
        (null == (t = e) ? '' : t) +
        '</div></div></form></div></section></div>';
    }.call(
      this,
      'button' in i ? i.button : 'undefined' != typeof button ? button : void 0,
      'email' in i ? i.email : 'undefined' != typeof email ? email : void 0,
      'firstName' in i
        ? i.firstName
        : 'undefined' != typeof firstName
        ? firstName
        : void 0,
      'login' in i ? i.login : 'undefined' != typeof login ? login : void 0,
      'phone' in i ? i.phone : 'undefined' != typeof phone ? phone : void 0,
      'secondName' in i
        ? i.secondName
        : 'undefined' != typeof secondName
        ? secondName
        : void 0,
      'username' in i
        ? i.username
        : 'undefined' != typeof username
        ? username
        : void 0,
    ),
    n
  );
};
class De extends h {
  constructor() {
    super('main', {});
  }
  validateBlock(e) {
    const t = e.target;
    $(t) ? t.classList.add('invalid') : t.classList.remove('invalid');
  }
  init() {
    (this.children.email = new Le({
      name: 'email',
      type: 'text',
      label: 'Почта',
      body: 'temp@a.ru',
      is_input: !0,
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    })),
      (this.children.login = new Le({
        name: 'login',
        type: 'text',
        label: 'Логин',
        body: 'ivan',
        is_input: !0,
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.firstName = new Le({
        name: 'first_name',
        type: 'text',
        label: 'Имя',
        body: 'iv',
        is_input: !0,
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.secondName = new Le({
        name: 'second_name',
        type: 'text',
        label: 'Фамилия',
        body: 'test',
        is_input: !0,
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.username = new Le({
        name: 'username',
        type: 'text',
        label: 'Имя в чате',
        body: 'tester',
        is_input: !0,
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.phone = new Le({
        name: 'phone',
        type: 'text',
        label: 'Телефон',
        body: '+7 (123) 123 12 32',
        is_input: !0,
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.button = new M({
        type: 'submit',
        btnClass: 'save-changes',
        content: 'Сохранить',
        events: { click: (e) => this.onSubmit(e) },
      }));
  }
  onSubmit(e) {
    console.log('sad');
    V(e, ['email', 'login', 'first_name', 'second_name', 'phone']);
  }
  render() {
    return this.compile(Me, this.props);
  }
}
var Ue = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, a) {
      n =
        n +
        '<script type="module" src="~/src/layouts/profile-layout/profile-layout.ts"></script><div class="profile-layout"><section class="profile-layout__sidebar"><a class="profile-layout__sidebar-btn" href="/"> <p>Назад </a></p></a></section><section class="profile-layout__main"><div class="profile-card"><section class="profile-card__user-info"><div class="profile-card__user-info-avatar"><img src = "~/src/assets/icons/empty-avatar-icon.svg" alt="empty-avatar-icon"/></div></section><form class="profile-card__block" action="../../chat/chat.html"><div class="profile-card__fields"> ' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = i) ? '' : t) +
        '\n' +
        (null == (t = a) ? '' : t) +
        '</div><div class="profile-card__actions"><div class="profile-card__actions-btn">' +
        (null == (t = e) ? '' : t) +
        '</div></div></form></div></section></div>';
    }.call(
      this,
      'button' in i ? i.button : 'undefined' != typeof button ? button : void 0,
      'newPassword' in i
        ? i.newPassword
        : 'undefined' != typeof newPassword
        ? newPassword
        : void 0,
      'oldPassword' in i
        ? i.oldPassword
        : 'undefined' != typeof oldPassword
        ? oldPassword
        : void 0,
      'repeatPassword' in i
        ? i.repeatPassword
        : 'undefined' != typeof repeatPassword
        ? repeatPassword
        : void 0,
    ),
    n
  );
};
class Re extends h {
  constructor() {
    super('main', {});
  }
  validateBlock(e) {
    const t = e.target;
    $(t) ? t.classList.add('invalid') : t.classList.remove('invalid');
  }
  init() {
    (this.children.oldPassword = new Le({
      name: 'oldPassword',
      type: 'password',
      label: 'Старый пароль',
      body: 'temp@a.ru',
      is_input: !0,
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    })),
      (this.children.newPassword = new Le({
        name: 'newPassword',
        type: 'password',
        label: 'Новый пароль',
        body: 'ivan',
        is_input: !0,
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.repeatPassword = new Le({
        name: 'repeatPassword',
        type: 'password',
        label: 'Повтороите новый пароль',
        body: 'iv',
        is_input: !0,
        events: {
          focusout: this.validateBlock.bind(this),
          focusin: this.validateBlock.bind(this),
        },
      })),
      (this.children.button = new M({
        type: 'submit',
        btnClass: 'save-changes-password',
        content: 'Сохранить',
        events: { click: (e) => this.onSubmit(e) },
      }));
  }
  onSubmit(e) {
    V(e, ['oldPassword', 'newPassword', 'repeatPassword']);
  }
  render() {
    return this.compile(Ue, this.props);
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const e = document.querySelector('#app'),
    t = new N({
      errorMessageCode: '404',
      errorMessageText: 'Не туда попали',
      href: '/',
      message: 'Назад',
    });
  e.append(t.getContent()), t.dispatchComponentDidMount();
  const n = new L({
    errorMessageCode: '500',
    errorMessageText: 'Мы уже фиксим',
    href: '/',
    message: 'Назад',
  });
  e.append(n.getContent()), n.dispatchComponentDidMount();
  const i = new Z({ title: 'Войти' });
  e.append(i.getContent()), i.dispatchComponentDidMount();
  const s = new G({ title: 'Регистрация' });
  e.append(s.getContent()), s.dispatchComponentDidMount();
  const a = new ke({ title: 'Регистрация' });
  e.append(a.getContent()), a.dispatchComponentDidMount();
  const o = new Ae();
  e.append(o.getContent()), o.dispatchComponentDidMount();
  const r = new De();
  e.append(r.getContent()), r.dispatchComponentDidMount();
  const l = new Re();
  e.append(l.getContent()), l.dispatchComponentDidMount();
});
//# sourceMappingURL=index.da7324a1.js.map
