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
  r = n.parcelRequireab20;
null == r &&
  (((r = function (e) {
    if (e in i) return i[e].exports;
    if (e in s) {
      var t = s[e];
      delete s[e];
      var n = { id: e, exports: {} };
      return (i[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var r = new Error("Cannot find module '" + e + "'");
    throw ((r.code = 'MODULE_NOT_FOUND'), r);
  }).register = function (e, t) {
    s[e] = t;
  }),
  (n.parcelRequireab20 = r)),
  r.register('27Lyk', function (t, n) {
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
    var r = {};
    (i = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) r[t[n]] = e[t[n]];
    }),
      (s = function (e) {
        var t = r[e];
        if (null == t) throw new Error('Could not resolve bundle with id ' + e);
        return t;
      });
  }),
  r('27Lyk').register(
    JSON.parse(
      '{"1LzKV":"index.c187bdac.js","gSBIs":"send-icon.42b7d5de.svg","kM7MO":"attach-icon.25f0941c.svg","7cSvV":"lens-icon.53091bd3.svg","b3wcV":"index.5a00c179.css"}',
    ),
  );
class a {
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
var o = {
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
  if (o.randomUUID && !t && !e) return o.randomUUID();
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
    const n = new a(),
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
    this._removeEvents(),
      (this._element.innerHTML = ''),
      this._element.append(e),
      this._addEvents();
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
    const r = (e) => {
      const t = s.content.querySelector(`[data-id="${e.id}"]`);
      t &&
        (e.getContent()?.append(...Array.from(t.childNodes)),
        t.replaceWith(e.getContent()));
    };
    return (
      Object.entries(this.children).forEach(([e, t]) => {
        Array.isArray(t) ? t.forEach(r) : r(t);
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
  _removeEvents() {
    const { events: e = {} } = this.props;
    e &&
      this._element &&
      Object.keys(e).forEach((t) => {
        this._element.removeEventListener(t, e[t]);
      });
  }
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
      ? (n && (t = y(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function v(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, i = '', s = '', r = Array.isArray(t), a = 0;
          a < e.length;
          a++
        )
          (n = v(e[a])) &&
            (r && t[a] && (n = y(n)), (i = i + s + n), (s = ' '));
        return i;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var i in e)
          i && e[i] && g.call(e, i) && ((t = t + n + i), (n = ' '));
        return t;
      })(e)
    : e || '';
}
function y(e) {
  var t = '' + e,
    n = b.exec(t);
  if (!n) return e;
  var i,
    s,
    r,
    a = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        r = '&quot;';
        break;
      case 38:
        r = '&amp;';
        break;
      case 60:
        r = '&lt;';
        break;
      case 62:
        r = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
  }
  return s !== i ? a + t.substring(s, i) : a;
}
var g = Object.prototype.hasOwnProperty,
  b = /["&<>]/;
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
        y(null == (t = e) ? '' : t) +
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
class w extends h {
  constructor(e) {
    super('div', e);
  }
  render() {
    return this.compile(_, this.props);
  }
}
function k(e) {
  var t = '' + e,
    n = C.exec(t);
  if (!n) return e;
  var i,
    s,
    r,
    a = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        r = '&quot;';
        break;
      case 38:
        r = '&amp;';
        break;
      case 60:
        r = '&lt;';
        break;
      case 62:
        r = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
  }
  return s !== i ? a + t.substring(s, i) : a;
}
var C = /["&<>]/;
var x = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s) {
      n =
        n +
        '<script type="module" src="~/src/layouts/main-layout/main-layout.ts"></script><div class="main-layout"><div class="error-message"><div class="error-message__code">' +
        k(null == (t = e) ? '' : t) +
        '</div><div class="error-message__text">' +
        k(null == (t = i) ? '' : t) +
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
    this.children.link = new w({ content: 'Назад к чатам', href: '/' });
  }
  render() {
    return this.compile(x, this.props);
  }
}
class E extends h {
  constructor(e) {
    super('main', e);
  }
  init() {
    this.children.link = new w({ content: 'Назад к чатам', href: '/' });
  }
  render() {
    return this.compile(x, this.props);
  }
}
function L(e, t, n, i) {
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
function O(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, i = '', s = '', r = Array.isArray(t), a = 0;
          a < e.length;
          a++
        )
          (n = O(e[a])) &&
            (r && t[a] && (n = S(n)), (i = i + s + n), (s = ' '));
        return i;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var i in e)
          i && e[i] && A.call(e, i) && ((t = t + n + i), (n = ' '));
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
    r,
    a = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        r = '&quot;';
        break;
      case 38:
        r = '&amp;';
        break;
      case 60:
        r = '&lt;';
        break;
      case 62:
        r = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
  }
  return s !== i ? a + t.substring(s, i) : a;
}
var A = Object.prototype.hasOwnProperty,
  P = /["&<>]/;
var M = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s) {
      n =
        n +
        '<button' +
        (L('class', O([`form-button ${e}`], [!0]), !1, !1) +
          L('type', s || 'submit', !0, !1)) +
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
class D extends h {
  constructor(e) {
    super('div', e), this.element.classList.add('form-button');
  }
  render() {
    return this.compile(M, this.props);
  }
}
function U(e, t, n, i) {
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
      ? (n && (t = I(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function j(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, i = '', s = '', r = Array.isArray(t), a = 0;
          a < e.length;
          a++
        )
          (n = j(e[a])) &&
            (r && t[a] && (n = I(n)), (i = i + s + n), (s = ' '));
        return i;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var i in e)
          i && e[i] && R.call(e, i) && ((t = t + n + i), (n = ' '));
        return t;
      })(e)
    : e || '';
}
function I(e) {
  var t = '' + e,
    n = B.exec(t);
  if (!n) return e;
  var i,
    s,
    r,
    a = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        r = '&quot;';
        break;
      case 38:
        r = '&amp;';
        break;
      case 60:
        r = '&lt;';
        break;
      case 62:
        r = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
  }
  return s !== i ? a + t.substring(s, i) : a;
}
var R = Object.prototype.hasOwnProperty,
  B = /["&<>]/;
var T = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r, a) {
      n =
        n +
        '<label' +
        U('class', j([`input__label ${s}`], [!0]), !1, !1) +
        '>' +
        I(null == (t = i || '') ? '' : t) +
        '</label><input' +
        (U('class', j([`input__field-${s}`], [!0]), !1, !1) +
          U('type', `${a}`, !0, !1) +
          U('name', `${s}`, !0, !1) +
          U('placeholder', `${r || ''}`, !0, !1) +
          U('required', !0, !0, !1) +
          U('autofocus', !0, !0, !1)) +
        '/><label' +
        U('class', j([`error error-${s}`], [!0]), !1, !1) +
        '>' +
        I(null == (t = e || '') ? '' : t) +
        '</label>';
    }.call(
      this,
      'error' in i ? i.error : 'undefined' != typeof error ? error : void 0,
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
class $ extends h {
  constructor(e) {
    super('div', e), this.element.classList.add('input');
  }
  render() {
    return this.compile(T, this.props);
  }
}
let J;
var q;
function F(e) {
  const { name: t, value: n } = e;
  if (t === J.Login) {
    const e = /^([0-9]*[a-zA-Z\-_][0-9]*)+$/.test(n);
    return !(n.length >= 3 && n.length < 20) || !e || null;
  }
  if (
    t === J.Password ||
    t === J.RepeatPassword ||
    t === J.OldPassword ||
    t === J.NewPassword
  ) {
    const e = /^(.*([A-Z]+.*[0-9]+|[0-9]+.*[A-Z]+).*)+$/.test(n),
      t = n.length >= 8 && n.length < 40;
    return !e || !t || null;
  }
  if (t === J.FirstName || t === J.SecondName) {
    return !/^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/.test(n) || null;
  }
  if (t === J.Email) {
    return !/^([\w-.]+@[a-zA-Z]+.[a-z]+)$/.test(n) || null;
  }
  if (t === J.Phone) {
    return !/^\+*[\d]{10,15}$/.test(n) || null;
  }
  if (t === J.Message) {
    return !(n.length > 0) || null;
  }
}
function V(e) {
  const t = e.target;
  F(t)
    ? (t.classList.add('invalid'),
      (document.getElementsByClassName(`error-${t.name}`)[0].style.display =
        'block'))
    : (t.classList.remove('invalid'),
      (document.getElementsByClassName(`error-${t.name}`)[0].style.display =
        'none'));
}
function H(e, t) {
  e.preventDefault();
  const n = {};
  let i = !0;
  t.map((e) => {
    const t = document.getElementsByName(e)[0];
    if (F(t)) i = !1;
    else {
      const e = t.getAttribute('name'),
        { value: i } = t;
      e && (n[e] = i);
    }
  }),
    i && console.log(n);
}
((q = J || (J = {})).Login = 'login'),
  (q.Password = 'password'),
  (q.Email = 'email'),
  (q.RepeatPassword = 'repeatPassword'),
  (q.FirstName = 'first_name'),
  (q.SecondName = 'second_name'),
  (q.Phone = 'phone'),
  (q.OldPassword = 'oldPassword'),
  (q.NewPassword = 'newPassword'),
  (q.Message = 'message');
var W = /["&<>]/;
var Z = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r, a) {
      n =
        n +
        '<script type="module" src="~/src/layouts/main-layout/main-layout.ts"></script><div class="main-layout"><main class="sign-in"><form class="sign-in__block" action="../../chat/chat.html"><div class="sign-in__block-title"><span class="sign-in__block-title-text">' +
        (function (e) {
          var t = '' + e,
            n = W.exec(t);
          if (!n) return e;
          var i,
            s,
            r,
            a = '';
          for (i = n.index, s = 0; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
              case 34:
                r = '&quot;';
                break;
              case 38:
                r = '&amp;';
                break;
              case 60:
                r = '&lt;';
                break;
              case 62:
                r = '&gt;';
                break;
              default:
                continue;
            }
            s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
          }
          return s !== i ? a + t.substring(s, i) : a;
        })(null == (t = a) ? '' : t) +
        '</span></div><div class="sign-in__block-login-input">' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = r) ? '' : t) +
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
class z extends h {
  constructor(e) {
    super('main', e);
  }
  init() {
    (this.children.login = new $({
      name: 'login',
      type: 'text',
      label: 'Логин',
      placeholder: '',
      error: 'Логин должен содержать больше 3х символов',
      events: { focusout: (e) => V(e), focusin: (e) => V(e) },
    })),
      (this.children.password = new $({
        name: 'password',
        type: 'password',
        label: 'Пароль',
        placeholder: '',
        error: 'Недопустимые символы',
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.button = new D({
        type: 'submit',
        content: 'Авторизоваться',
        btnClass: 'sign-in-btn',
        events: { click: (e) => this.onSubmit(e) },
      })),
      (this.children.link = new w({
        content: 'Нет аккаунта?',
        href: 'src/views/auth/signUp/signUp.pug',
      }));
  }
  onSubmit(e) {
    H(e, ['login', 'password']);
  }
  render() {
    return this.compile(Z, this.props);
  }
}
var K = /["&<>]/;
var G = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r, a, o, l, d, c, u) {
      n =
        n +
        '<script type="module" src="~/src/layouts/main-layout/main-layout.ts"></script><div class="main-layout"><main class="signUp"><form class="signUp__block" action="../../chat/chat.html"><div class="signUp__block-title"><span class="sign-in__title">' +
        (function (e) {
          var t = '' + e,
            n = K.exec(t);
          if (!n) return e;
          var i,
            s,
            r,
            a = '';
          for (i = n.index, s = 0; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
              case 34:
                r = '&quot;';
                break;
              case 38:
                r = '&amp;';
                break;
              case 60:
                r = '&lt;';
                break;
              case 62:
                r = '&gt;';
                break;
              default:
                continue;
            }
            s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
          }
          return s !== i ? a + t.substring(s, i) : a;
        })(null == (t = u) ? '' : t) +
        '</span></div><div class="signUp__block-user-info-input">' +
        (null == (t = i) ? '' : t) +
        '\n' +
        (null == (t = a) ? '' : t) +
        '\n' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = c) ? '' : t) +
        '\n' +
        (null == (t = l) ? '' : t) +
        '\n' +
        (null == (t = o) ? '' : t) +
        '\n' +
        (null == (t = d) ? '' : t) +
        '</div><div class="signUp__block-auth-btn">' +
        (null == (t = e) ? '' : t) +
        '</div><div class="signUp__block-signUp">' +
        (null == (t = r) ? '' : t) +
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
class Q extends h {
  constructor(e) {
    super('main', e);
  }
  init() {
    (this.children.email = new $({
      name: 'email',
      type: 'text',
      label: 'Почта',
      placeholder: '',
      error: 'Неверный формат',
      events: { focusout: (e) => V(e), focusin: (e) => V(e) },
    })),
      (this.children.login = new $({
        name: 'login',
        type: 'text',
        label: 'Логин',
        placeholder: '',
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.firstName = new $({
        name: 'first_name',
        type: 'text',
        label: 'Имя',
        placeholder: '',
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.secondName = new $({
        name: 'second_name',
        type: 'text',
        label: 'Фамилия',
        placeholder: '',
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.phone = new $({
        name: 'phone',
        type: 'text',
        label: 'Телефон',
        placeholder: '',
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.password = new $({
        name: 'password',
        type: 'password',
        label: 'Пароль',
        placeholder: '',
        error: 'Пароль должен быть как минимум из 8 символов',
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.repeatPassword = new $({
        name: 'repeatPassword',
        type: 'password',
        label: 'Пароль (ещё раз)',
        placeholder: '',
        error: 'Пароль не совпадают',
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.button = new D({
        type: 'submit',
        content: 'Зарегистрироваться',
        btnClass: 'sign-up',
        events: { click: (e) => this.onSubmit(e) },
      })),
      (this.children.link = new w({
        content: 'Войти',
        href: '../../chat/chat.pug',
      }));
  }
  onSubmit(e) {
    e.preventDefault();
    H(e, [
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
    return this.compile(G, this.props);
  }
}
function X(e) {
  var t = '' + e,
    n = Y.exec(t);
  if (!n) return e;
  var i,
    s,
    r,
    a = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        r = '&quot;';
        break;
      case 38:
        r = '&amp;';
        break;
      case 60:
        r = '&lt;';
        break;
      case 62:
        r = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
  }
  return s !== i ? a + t.substring(s, i) : a;
}
var Y = /["&<>]/;
var ee = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r, a, o) {
      n =
        n +
        '<header class="sidebar__header"><div class="sidebar__header-profile"><div class="sidebar__header-profile-block"><div class="sidebar__header-profile-block-text"><a class="sidebar__header-profile-block-link" href="../profile/profile.pug">' +
        X(null == (t = r) ? '' : t) +
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
              ? (n && (t = X(t)), ' ' + e + '="' + t + '"')
              : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
          );
        })('src', e, !0, !1) +
        ' alt="icon"/></div>' +
        (null == (t = s) ? '' : t) +
        '</div><div class="sidebar__header-search-block-text">' +
        X(null == (t = i) ? '' : t) +
        '</div></div></div></header><section class="user-chats">' +
        (null == (t = a) ? '' : t) +
        '\n' +
        (null == (t = o) ? '' : t) +
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
function te(e) {
  var t = '' + e,
    n = ne.exec(t);
  if (!n) return e;
  var i,
    s,
    r,
    a = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        r = '&quot;';
        break;
      case 38:
        r = '&amp;';
        break;
      case 60:
        r = '&lt;';
        break;
      case 62:
        r = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
  }
  return s !== i ? a + t.substring(s, i) : a;
}
var ne = /["&<>]/;
var ie = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r, a) {
      n =
        n +
        '<div class="user-chats__container"><div class="user-chats__img">' +
        te(null == (t = e) ? '' : t) +
        '</div><div class="user-chats__content"><div class="user-chats__content-name">' +
        te(null == (t = s) ? '' : t) +
        '</div><div class="user-chats__content-message">' +
        te(null == (t = i) ? '' : t) +
        '</div></div><div class="user-chats__notify"><div class="user-chats__notify-time">' +
        te(null == (t = a) ? '' : t) +
        '</div><div class="user-chats__notify-new-messages">' +
        te(null == (t = r) ? '' : t) +
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
class se extends h {
  constructor(e) {
    super('div', e), this.element.classList.add('user-chats__block');
  }
  render() {
    return this.compile(ie, this.props);
  }
}
class re extends h {
  constructor(e) {
    super('main', e), this.element.classList.add('sidebar');
  }
  init() {
    (this.children.profileLink = new w({
      content: '',
      href: '../signUp/signUp.pug',
      extraClass: 'sidebar__link',
    })),
      (this.children.searchLink = new $({
        name: 'search',
        type: 'text',
        placeholder: 'Поиск',
      })),
      (this.children.userChat1 = new se({
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
      (this.children.userChat2 = new se({
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
    return this.compile(ee, this.props);
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
var le = function (e) {
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
            r,
            a = '';
          for (i = n.index, s = 0; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
              case 34:
                r = '&quot;';
                break;
              case 38:
                r = '&amp;';
                break;
              case 60:
                r = '&lt;';
                break;
              case 62:
                r = '&gt;';
                break;
              default:
                continue;
            }
            s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
          }
          return s !== i ? a + t.substring(s, i) : a;
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
class de extends h {
  constructor(e) {
    super('div', e), this.element.classList.add('main-chat-header__block');
  }
  render() {
    return this.compile(le, this.props);
  }
}
function ce(e, t, n, i) {
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
              n = ue.exec(t);
            if (!n) return e;
            var i,
              s,
              r,
              a = '';
            for (i = n.index, s = 0; i < t.length; i++) {
              switch (t.charCodeAt(i)) {
                case 34:
                  r = '&quot;';
                  break;
                case 38:
                  r = '&amp;';
                  break;
                case 60:
                  r = '&lt;';
                  break;
                case 62:
                  r = '&gt;';
                  break;
                default:
                  continue;
              }
              s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
            }
            return s !== i ? a + t.substring(s, i) : a;
          })(t)),
        ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
var ue = /["&<>]/;
var pe = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r, a) {
      n =
        n +
        '<section class="main-chat-bottom__block"><div class="main-chat-bottom__items"><div class="main-chat-bottom__attach-btn"></div><img' +
        ce('src', i, !0, !1) +
        ' alt="icon"/>' +
        (null == (t = e) ? '' : t) +
        '<div class="main-chat-bottom__message-panel"><div class="main-chat-bottom__message-panel_text"> </div>' +
        (null == (t = r) ? '' : t) +
        '</div><div class="main-chat-bottom__send-btn"> <img' +
        ce('src', s, !0, !1) +
        ' alt="icon"/>' +
        (null == (t = a) ? '' : t) +
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
class fe extends h {
  constructor(e) {
    super('footer', e), this.element.classList.add('main-chat__bottom');
  }
  validateBlock(e) {
    const t = e.target;
    F(t) ? t.classList.add('invalid') : t.classList.remove('invalid');
  }
  init() {
    (this.children.input = new $({
      name: 'message',
      type: 'textarea',
      label: '',
      placeholder: 'Сообщение',
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    })),
      (this.children.attachLink = new w({})),
      (this.children.sendLink = new w({
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
      if (F(i)) n = !1;
      else {
        const e = i.getAttribute('name'),
          { value: n } = i;
        e && (t[e] = n);
      }
    }),
      n && console.log(t);
  }
  render() {
    return this.compile(pe, this.props);
  }
}
var he = /["&<>]/;
var me = function (e) {
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
            n = he.exec(t);
          if (!n) return e;
          var i,
            s,
            r,
            a = '';
          for (i = n.index, s = 0; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
              case 34:
                r = '&quot;';
                break;
              case 38:
                r = '&amp;';
                break;
              case 60:
                r = '&lt;';
                break;
              case 62:
                r = '&gt;';
                break;
              default:
                continue;
            }
            s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
          }
          return s !== i ? a + t.substring(s, i) : a;
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
class ve extends h {
  constructor(e) {
    super('div', e), this.element.classList.add('main-chat-dialogs__block');
  }
  render() {
    return this.compile(me, this.props);
  }
}
var ye;
ye = new URL(r('27Lyk').resolve('gSBIs'), import.meta.url).toString();
var ge;
ge = new URL(r('27Lyk').resolve('kM7MO'), import.meta.url).toString();
class be extends h {
  constructor() {
    super('main', {}), this.element.classList.add('main-chat');
  }
  init() {
    (this.children.header = new de({ username: 'Unknown' })),
      (this.children.dialogs = new ve({
        content: 'Выберите чат чтобы отправить сообщение',
      })),
      (this.children.bottom = new fe({ imgSend: t(ye), imgAttach: t(ge) }));
  }
  render() {
    return this.compile(ae, this.props);
  }
}
var _e,
  we = function (e) {
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
_e = new URL(r('27Lyk').resolve('7cSvV'), import.meta.url).toString();
class ke extends h {
  constructor(e) {
    super('main', e), this.element.classList.add('chat');
  }
  init() {
    (this.children.sidebar = new re({ title: 'Профиль', img: t(_e) })),
      (this.children.mainChat = new be());
  }
  render() {
    return this.compile(we, this.props);
  }
}
function Ce(e, t, n, i) {
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
      ? (n && (t = Ne(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function xe(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, i = '', s = '', r = Array.isArray(t), a = 0;
          a < e.length;
          a++
        )
          (n = xe(e[a])) &&
            (r && t[a] && (n = Ne(n)), (i = i + s + n), (s = ' '));
        return i;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var i in e)
          i && e[i] && Ee.call(e, i) && ((t = t + n + i), (n = ' '));
        return t;
      })(e)
    : e || '';
}
function Ne(e) {
  var t = '' + e,
    n = Le.exec(t);
  if (!n) return e;
  var i,
    s,
    r,
    a = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        r = '&quot;';
        break;
      case 38:
        r = '&amp;';
        break;
      case 60:
        r = '&lt;';
        break;
      case 62:
        r = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
  }
  return s !== i ? a + t.substring(s, i) : a;
}
var Ee = Object.prototype.hasOwnProperty,
  Le = /["&<>]/;
var Oe = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r, a, o) {
      (n =
        n +
        '<span class="profile-card__field__title">' +
        Ne(null == (t = r) ? '' : t) +
        '</span>'),
        (n = s
          ? n +
            '<input class="input__field profile-card__field__body"' +
            Ce('type', `${o}`, !0, !1) +
            Ce('name', a, !0, !1) +
            Ce('value', `${e || ''}`, !0, !1) +
            Ce('required', !0, !0, !1) +
            Ce('autofocus', !0, !0, !1) +
            '/><label' +
            Ce('class', xe([`error error-${a}`], [!0]), !1, !1) +
            '>' +
            Ne(null == (t = i || '') ? '' : t) +
            '</label>'
          : n +
            '<span class="profile-card__field__body">' +
            Ne(null == (t = e) ? '' : t) +
            '</span>');
    }.call(
      this,
      'body' in i ? i.body : 'undefined' != typeof body ? body : void 0,
      'error' in i ? i.error : 'undefined' != typeof error ? error : void 0,
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
class Se extends h {
  constructor(e) {
    super('div', e), this.element.classList.add('profile-card__field');
  }
  render() {
    return this.compile(Oe, this.props);
  }
}
function Ae(e) {
  var t = '' + e,
    n = Pe.exec(t);
  if (!n) return e;
  var i,
    s,
    r,
    a = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        r = '&quot;';
        break;
      case 38:
        r = '&amp;';
        break;
      case 60:
        r = '&lt;';
        break;
      case 62:
        r = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
  }
  return s !== i ? a + t.substring(s, i) : a;
}
var Pe = /["&<>]/;
var Me = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r, a, o, l, d, c, u) {
      n =
        n +
        '<div class="profile-card__user-info"><div class="profile-card__user-info-avatar">' +
        Ae(null == (t = r) ? '' : t) +
        '</div><div class="profile-card__user-info-name">' +
        Ae(null == (t = c) ? '' : t) +
        '</div></div><div class="profile-card__block"><div class="profile-card__fields"> ' +
        (null == (t = e) ? '' : t) +
        '\n' +
        (null == (t = a) ? '' : t) +
        '\n' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = o) ? '' : t) +
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
class De extends h {
  constructor(e) {
    super('main', e), this.element.classList.add('profile-card');
  }
  init() {
    (this.children.email = new Se({
      name: 'email',
      type: 'text',
      label: 'Почта',
      body: 'temp@a.ru',
    })),
      (this.children.login = new Se({
        name: 'login',
        type: 'text',
        label: 'Логин',
        body: 'ivan',
      })),
      (this.children.name = new Se({
        name: 'name',
        type: 'text',
        label: 'Имя',
        body: 'iv',
      })),
      (this.children.secondName = new Se({
        name: 'second_name',
        type: 'text',
        label: 'Фамилия',
        body: 'test',
      })),
      (this.children.username = new Se({
        name: 'username',
        type: 'text',
        label: 'Имя в чате',
        body: 'tester',
      })),
      (this.children.phone = new Se({
        name: 'phone',
        type: 'text',
        label: 'Телефон',
        body: '+7 (123) 123 12 32',
      })),
      (this.children.updateInfoLink = new w({
        content: 'Изменить данные',
        href: '../../views/profile/profile-update-info/profile-update-info.pug',
        extraClass: 'profile__link',
      })),
      (this.children.updatePasswordLink = new w({
        content: 'Изменить пароль',
        href: '../../views/profile/profile-update-password/profile-update-password.pug',
        extraClass: 'profile__link',
      })),
      (this.children.exitLink = new w({
        content: 'Выйти',
        href: '../../views/chat/chat.pug',
        extraClass: 'profile__link_exit',
      }));
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
class je extends h {
  constructor() {
    super('main', {});
  }
  init() {
    this.children.profileCard = new De({ userInfoName: 'testers', img: 'src' });
  }
  render() {
    return this.compile(Ue, this.props);
  }
}
var Ie = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r, a, o, l) {
      n =
        n +
        '<script type="module" src="~/src/layouts/profile-layout/profile-layout.ts"></script><div class="profile-layout"><section class="profile-layout__sidebar"><a class="profile-layout__sidebar-btn" href="/"> <p>Назад </a></p></a></section><section class="profile-layout__main"><div class="profile-card"><section class="profile-card__user-info"><div class="profile-card__user-info-avatar"><img src = "~/src/assets/icons/empty-avatar-icon.svg" alt="empty-avatar-icon"/></div></section><form class="profile-card__block" action="../../chat/chat.html"><div class="profile-card__fields"> ' +
        (null == (t = i) ? '' : t) +
        '\n' +
        (null == (t = r) ? '' : t) +
        '\n' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = o) ? '' : t) +
        '\n' +
        (null == (t = l) ? '' : t) +
        '\n' +
        (null == (t = a) ? '' : t) +
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
class Re extends h {
  constructor() {
    super('main', {});
  }
  init() {
    (this.children.email = new Se({
      name: 'email',
      type: 'text',
      label: 'Почта',
      body: 'temp@a.ru',
      is_input: !0,
      error: 'Неверный формат',
      events: { focusout: (e) => V(e), focusin: (e) => V(e) },
    })),
      (this.children.login = new Se({
        name: 'login',
        type: 'text',
        label: 'Логин',
        body: 'ivan',
        is_input: !0,
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.firstName = new Se({
        name: 'first_name',
        type: 'text',
        label: 'Имя',
        body: 'iv',
        is_input: !0,
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.secondName = new Se({
        name: 'second_name',
        type: 'text',
        label: 'Фамилия',
        body: 'test',
        error: 'Недостаточное количество символов или неверный формат',
        is_input: !0,
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.username = new Se({
        name: 'username',
        type: 'text',
        label: 'Имя в чате',
        body: 'tester',
        is_input: !0,
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.phone = new Se({
        name: 'phone',
        type: 'text',
        label: 'Телефон',
        body: '+7 (123) 123 12 32',
        error: 'Недостаточное количество символов или неверный формат',
        is_input: !0,
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.button = new D({
        type: 'submit',
        btnClass: 'save-changes',
        content: 'Сохранить',
        events: { click: (e) => this.onSubmit(e) },
      }));
  }
  onSubmit(e) {
    console.log('sad');
    H(e, ['email', 'login', 'first_name', 'second_name', 'phone']);
  }
  render() {
    return this.compile(Ie, this.props);
  }
}
var Be = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r) {
      n =
        n +
        '<script type="module" src="~/src/layouts/profile-layout/profile-layout.ts"></script><div class="profile-layout"><section class="profile-layout__sidebar"><a class="profile-layout__sidebar-btn" href="/"> <p>Назад </a></p></a></section><section class="profile-layout__main"><div class="profile-card"><section class="profile-card__user-info"><div class="profile-card__user-info-avatar"><img src = "~/src/assets/icons/empty-avatar-icon.svg" alt="empty-avatar-icon"/></div></section><form class="profile-card__block" action="../../chat/chat.html"><div class="profile-card__fields"> ' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = i) ? '' : t) +
        '\n' +
        (null == (t = r) ? '' : t) +
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
class Te extends h {
  constructor() {
    super('main', {});
  }
  init() {
    (this.children.oldPassword = new Se({
      name: 'oldPassword',
      type: 'password',
      label: 'Старый пароль',
      error: 'Неверный паорль',
      body: 'temp@a.ru',
      is_input: !0,
      events: { focusout: (e) => V(e), focusin: (e) => V(e) },
    })),
      (this.children.newPassword = new Se({
        name: 'newPassword',
        type: 'password',
        error: 'Недостаточное количество символов',
        label: 'Новый пароль',
        body: 'ivan',
        is_input: !0,
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.repeatPassword = new Se({
        name: 'repeatPassword',
        type: 'password',
        label: 'Повтороите новый пароль',
        error: 'Пароли не совпадают',
        body: 'iv',
        is_input: !0,
        events: { focusout: (e) => V(e), focusin: (e) => V(e) },
      })),
      (this.children.button = new D({
        type: 'submit',
        btnClass: 'save-changes-password',
        content: 'Сохранить',
        events: { click: (e) => this.onSubmit(e) },
      }));
  }
  onSubmit(e) {
    H(e, ['oldPassword', 'newPassword', 'repeatPassword']);
  }
  render() {
    return this.compile(Be, this.props);
  }
}
function $e(e) {
  var t = '' + e,
    n = Je.exec(t);
  if (!n) return e;
  var i,
    s,
    r,
    a = '';
  for (i = n.index, s = 0; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        r = '&quot;';
        break;
      case 38:
        r = '&amp;';
        break;
      case 60:
        r = '&lt;';
        break;
      case 62:
        r = '&gt;';
        break;
      default:
        continue;
    }
    s !== i && (a += t.substring(s, i)), (s = i + 1), (a += r);
  }
  return s !== i ? a + t.substring(s, i) : a;
}
var Je = /["&<>]/;
var qe = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i) {
      n =
        n +
        '<ui><li><a' +
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
              ? (n && (t = $e(t)), ' ' + e + '="' + t + '"')
              : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
          );
        })('href', e, !0, !1) +
        '>' +
        $e(null == (t = i) ? '' : t) +
        '</a></li></ui>';
    }.call(
      this,
      'href' in i ? i.href : 'undefined' != typeof href ? href : void 0,
      'value' in i ? i.value : 'undefined' != typeof value ? value : void 0,
    ),
    n
  );
};
class Fe extends h {
  constructor(e) {
    super('div', e);
  }
  render() {
    return this.compile(qe, this.props);
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const e = document.querySelector('#app'),
    t = document.location.pathname,
    n = new z({ title: 'Войти' }),
    i = new Q({ title: 'Регистрация' }),
    s = new ke({ title: 'Регистрация' }),
    r = new je(),
    a = new Re(),
    o = new Te(),
    l = new N({
      errorMessageCode: '404',
      errorMessageText: 'Не туда попали',
      href: '/',
      message: 'Назад',
    }),
    d = new E({
      errorMessageCode: '500',
      errorMessageText: 'Мы уже фиксим',
      href: '/',
      message: 'Назад',
    }),
    c = new Fe({ href: '/src/views/auth/signIn/', value: 'signIn' }),
    u = new Fe({ href: 'src/views/auth/signUp/signUp.pug', value: 'signUp' }),
    p = new Fe({ href: 'src/views/chat/chat.pug', value: 'chat' }),
    f = new Fe({ href: 'src/viewsprofile/profile.pug', value: 'profile' }),
    h = new Fe({
      href: 'src/views/profile/profile-update-info/profile-update-info.pug',
      value: 'update profile',
    }),
    m = new Fe({
      href: 'src/views/profile/profile-update-password/profile-update-password.pug',
      value: 'update password',
    }),
    v = new Fe({ href: 'src/views/404/404.pug', value: 'page 404' }),
    y = new Fe({ href: 'src/views/500/500.pug', value: 'page 500' });
  switch (
    (e.append(c.getContent()),
    e.append(u.getContent()),
    e.append(p.getContent()),
    e.append(f.getContent()),
    e.append(m.getContent()),
    e.append(h.getContent()),
    e.append(v.getContent()),
    e.append(y.getContent()),
    t)
  ) {
    case 'src/views/auth/signIn/':
      console.log('asdasd'), n.dispatchComponentDidMount();
      break;
    case '/src/views/auth/signUp/signUp.pug':
      e.replaceChildren(i.getContent()), i.dispatchComponentDidMount();
      break;
    case '/src/views/404/404.pug':
      e.replaceChildren(l.getContent()), l.dispatchComponentDidMount();
      break;
    case '/src/views/500/500.pug':
      e.replaceChildren(d.getContent()), d.dispatchComponentDidMount();
      break;
    case '/src/views/chat/chat.pug':
      e.replaceChildren(s.getContent()), s.dispatchComponentDidMount();
      break;
    case '/src/viewsprofile/profile.pug':
      e.replaceChildren(r.getContent()), r.dispatchComponentDidMount();
      break;
    case '/src/views/profile/profile-update-info/profile-update-info.pug':
      e.replaceChildren(a.getContent()), a.dispatchComponentDidMount();
      break;
    case '/src/views/profile/profile-update-password/profile-update-password.pug':
      e.replaceChildren(o.getContent()), o.dispatchComponentDidMount();
  }
});
//# sourceMappingURL=index.c187bdac.js.map
