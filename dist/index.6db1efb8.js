function e(e, t, n, s) {
  Object.defineProperty(e, t, {
    get: n,
    set: s,
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
  s = {},
  i = {},
  r = n.parcelRequireab20;
null == r &&
  (((r = function (e) {
    if (e in s) return s[e].exports;
    if (e in i) {
      var t = i[e];
      delete i[e];
      var n = { id: e, exports: {} };
      return (s[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var r = new Error("Cannot find module '" + e + "'");
    throw ((r.code = 'MODULE_NOT_FOUND'), r);
  }).register = function (e, t) {
    i[e] = t;
  }),
  (n.parcelRequireab20 = r)),
  r.register('27Lyk', function (t, n) {
    var s, i;
    e(
      t.exports,
      'register',
      () => s,
      (e) => (s = e),
    ),
      e(
        t.exports,
        'resolve',
        () => i,
        (e) => (i = e),
      );
    var r = {};
    (s = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) r[t[n]] = e[t[n]];
    }),
      (i = function (e) {
        var t = r[e];
        if (null == t) throw new Error('Could not resolve bundle with id ' + e);
        return t;
      });
  }),
  r('27Lyk').register(
    JSON.parse(
      '{"1LzKV":"index.6db1efb8.js","7cSvV":"lens-icon.53091bd3.svg","b3wcV":"index.d09f43ab.css"}',
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
    this.listeners[e] && this.listeners[e].forEach((e) => e(...t));
  }
}
var o = {
  randomUUID:
    'undefined' != typeof crypto &&
    crypto.randomUUID &&
    crypto.randomUUID.bind(crypto),
};
let c;
const d = new Uint8Array(16);
function l() {
  if (
    !c &&
    ((c =
      'undefined' != typeof crypto &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !c)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
    );
  return c(d);
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
var h = function (e, t, n) {
  if (o.randomUUID && !t && !e) return o.randomUUID();
  const s = (e = e || {}).random || (e.rng || l)();
  if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t)) {
    n = n || 0;
    for (let e = 0; e < 16; ++e) t[n + e] = s[e];
    return t;
  }
  return p(s);
};
class f {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };
  id = h();
  _element = null;
  constructor(e) {
    const t = new a(),
      { props: n, children: s } = this._getChildrenAndProps(e);
    (this.children = s),
      (this.props = this._makePropsProxy(n)),
      (this.eventBus = () => t),
      this._registerEvents(t),
      t.emit(f.EVENTS.INIT);
  }
  _getChildrenAndProps(e) {
    const t = {},
      n = {};
    return (
      Object.entries(e).forEach(([e, s]) => {
        (Array.isArray(s) && s.length > 0 && s.every((e) => e instanceof f)) ||
        s instanceof f
          ? (n[e] = s)
          : (t[e] = s);
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
    e.on(f.EVENTS.INIT, this._init.bind(this)),
      e.on(f.EVENTS.FLOW_CDM, this._componentDidMount.bind(this)),
      e.on(f.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this)),
      e.on(f.EVENTS.FLOW_RENDER, this._render.bind(this));
  }
  _init() {
    this.init(), this.eventBus().emit(f.EVENTS.FLOW_RENDER);
  }
  init() {}
  _componentDidMount() {
    this.componentDidMount();
  }
  componentDidMount() {}
  dispatchComponentDidMount() {
    this.eventBus().emit(f.EVENTS.FLOW_CDM),
      Object.values(this.children).forEach((e) => {
        Array.isArray(e)
          ? e.forEach((e) => e.dispatchComponentDidMount())
          : e.dispatchComponentDidMount();
      });
  }
  _componentDidUpdate(e, t) {
    this.componentDidUpdate(e, t) && this.eventBus().emit(f.EVENTS.FLOW_RENDER);
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
    const e = this.render().firstElementChild;
    this._element && e && this._element.replaceWith(e),
      (this._element = e),
      this._addEvents();
  }
  compile(e, t) {
    const n = { ...t };
    Object.entries(this.children).forEach(([e, t]) => {
      Array.isArray(t)
        ? (n[e] = t.map((e) => `<div data-id="${e.id}"></div>`))
        : (n[e] = `<div data-id="${t.id}"></div>`);
    });
    const s = e(n),
      i = document.createElement('template');
    i.innerHTML = s;
    const r = (e) => {
      const t = i.content.querySelector(`[data-id="${e.id}"]`);
      t &&
        (e.getContent()?.append(...Array.from(t.childNodes)),
        t.replaceWith(e.getContent()));
    };
    return (
      Object.entries(this.children).forEach(([e, t]) => {
        Array.isArray(t) ? t.forEach(r) : r(t);
      }),
      i.content
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
      set(e, n, s) {
        const i = { ...e };
        return (e[n] = s), t.eventBus().emit(f.EVENTS.FLOW_CDU, i, e), !0;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }
}
function v(e, t, n, s) {
  if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
    return '';
  if (!0 === t) return ' ' + (s ? e : e + '="' + e + '"');
  var i = typeof t;
  return (
    ('object' !== i && 'function' !== i) ||
      'function' != typeof t.toJSON ||
      (t = t.toJSON()),
    'string' == typeof t ||
    ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
      ? (n && (t = g(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function m(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, s = '', i = '', r = Array.isArray(t), a = 0;
          a < e.length;
          a++
        )
          (n = m(e[a])) &&
            (r && t[a] && (n = g(n)), (s = s + i + n), (i = ' '));
        return s;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var s in e)
          s && e[s] && y.call(e, s) && ((t = t + n + s), (n = ' '));
        return t;
      })(e)
    : e || '';
}
function g(e) {
  var t = '' + e,
    n = b.exec(t);
  if (!n) return e;
  var s,
    i,
    r,
    a = '';
  for (s = n.index, i = 0; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
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
    i !== s && (a += t.substring(i, s)), (i = s + 1), (a += r);
  }
  return i !== s ? a + t.substring(i, s) : a;
}
var y = Object.prototype.hasOwnProperty,
  b = /["&<>]/;
var _ = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s, i) {
      n =
        n +
        '<div' +
        v('class', m([`link ${s || ''}`], [!0]), !1, !1) +
        '><a' +
        v('href', i, !0, !1) +
        '>' +
        g(null == (t = e) ? '' : t) +
        '</a></div>';
    }.call(
      this,
      'content' in s
        ? s.content
        : 'undefined' != typeof content
        ? content
        : void 0,
      'extraClass' in s
        ? s.extraClass
        : 'undefined' != typeof extraClass
        ? extraClass
        : void 0,
      'href' in s ? s.href : 'undefined' != typeof href ? href : void 0,
    ),
    n
  );
};
function w(e, t) {
  return e === t;
}
class k {
  constructor(e, t, n) {
    (this._pathname = e),
      (this._blockClass = t),
      (this._block = null),
      (this._props = n);
  }
  navigate(e) {
    this.match(e) && this.render();
  }
  leave() {
    this._block = null;
  }
  match(e) {
    return w(e, this._pathname);
  }
  render() {
    if (!this._block)
      return (
        (this._block = new this._blockClass('div', {})),
        void (function (e, t) {
          const n = document.querySelector(e);
          if (null === n) throw new Error(`root not found by selector "${e}"`);
          (n.innerHTML = ''), n.append(t.getContent());
        })(this._props, this._block)
      );
  }
}
class C {
  constructor(e) {
    if (
      ((this.rootQuery = e),
      (this._routes = []),
      (this._currentRoute = null),
      (this._history = window.history),
      C.__instance)
    )
      return C.__instance;
    (this._routes = []), (C.__instance = this);
  }
  use(e, t) {
    const n = new k(e, t, this.rootQuery);
    return this._routes.push(n), this;
  }
  start() {
    (window.onpopstate = (e) => {
      const t = e.currentTarget;
      this._onRoute(t.location.pathname);
    }),
      this._onRoute(window.location.pathname);
  }
  _onRoute(e) {
    const t = this.getRoute(e);
    t &&
      (this._currentRoute &&
        this._currentRoute !== t &&
        this._currentRoute.leave(),
      (this._currentRoute = t),
      t.render());
  }
  go(e) {
    this._history.pushState({}, '', e), this._onRoute(e);
  }
  back() {
    this._history.back();
  }
  forward() {
    this._history.forward();
  }
  getRoute(e) {
    return this._routes.find((t) => t.match(e));
  }
}
var x = new C('#app');
class N extends f {
  constructor(e) {
    super({ ...e, events: { click: () => this.navigate() } });
  }
  navigate() {
    this.props.router.go(this.props.to);
  }
  render() {
    return this.compile(_, this.props);
  }
}
const S =
  ((P = N),
  class extends P {
    constructor(e) {
      super({ ...e, router: x });
    }
  });
var P;
function E(e) {
  var t = '' + e,
    n = L.exec(t);
  if (!n) return e;
  var s,
    i,
    r,
    a = '';
  for (s = n.index, i = 0; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
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
    i !== s && (a += t.substring(i, s)), (i = s + 1), (a += r);
  }
  return i !== s ? a + t.substring(i, s) : a;
}
var L = /["&<>]/;
var O = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s, i) {
      n =
        n +
        '<script type="module" src="~/src/layouts/main-layout/main-layout.ts"></script><div class="main-layout"><div class="error-message"><div class="error-message__code">' +
        E(null == (t = e) ? '' : t) +
        '</div><div class="error-message__text">' +
        E(null == (t = s) ? '' : t) +
        '</div><div class="error-message__link">' +
        (null == (t = i) ? '' : t) +
        '</div></div></div>';
    }.call(
      this,
      'errorMessageCode' in s
        ? s.errorMessageCode
        : 'undefined' != typeof errorMessageCode
        ? errorMessageCode
        : void 0,
      'errorMessageText' in s
        ? s.errorMessageText
        : 'undefined' != typeof errorMessageText
        ? errorMessageText
        : void 0,
      'link' in s ? s.link : 'undefined' != typeof link ? link : void 0,
    ),
    n
  );
};
class U extends f {
  constructor(e) {
    super(e);
  }
  init() {
    this.children.link = new N({ content: 'Назад к чатам', href: '/' });
  }
  render() {
    return this.compile(O, this.props);
  }
}
class A extends f {
  constructor(e) {
    super('main', e);
  }
  init() {
    this.children.link = new N({ content: 'Назад к чатам', href: '/' });
  }
  render() {
    return this.compile(O, this.props);
  }
}
function T(e, t, n, s) {
  if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
    return '';
  if (!0 === t) return ' ' + (s ? e : e + '="' + e + '"');
  var i = typeof t;
  return (
    ('object' !== i && 'function' !== i) ||
      'function' != typeof t.toJSON ||
      (t = t.toJSON()),
    'string' == typeof t ||
    ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
      ? (n && (t = D(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function M(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, s = '', i = '', r = Array.isArray(t), a = 0;
          a < e.length;
          a++
        )
          (n = M(e[a])) &&
            (r && t[a] && (n = D(n)), (s = s + i + n), (i = ' '));
        return s;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var s in e)
          s && e[s] && $.call(e, s) && ((t = t + n + s), (n = ' '));
        return t;
      })(e)
    : e || '';
}
function D(e) {
  var t = '' + e,
    n = R.exec(t);
  if (!n) return e;
  var s,
    i,
    r,
    a = '';
  for (s = n.index, i = 0; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
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
    i !== s && (a += t.substring(i, s)), (i = s + 1), (a += r);
  }
  return i !== s ? a + t.substring(i, s) : a;
}
var $ = Object.prototype.hasOwnProperty,
  R = /["&<>]/;
var I = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s, i) {
      n =
        n +
        '<div class="form-button"><button' +
        (T('class', M([`form-button ${e}`], [!0]), !1, !1) +
          T('type', i || 'submit', !0, !1)) +
        '>' +
        D(null == (t = s) ? '' : t) +
        '</button></div>';
    }.call(
      this,
      'btnClass' in s
        ? s.btnClass
        : 'undefined' != typeof btnClass
        ? btnClass
        : void 0,
      'content' in s
        ? s.content
        : 'undefined' != typeof content
        ? content
        : void 0,
      'type' in s ? s.type : 'undefined' != typeof type ? type : void 0,
    ),
    n
  );
};
class j extends f {
  constructor(e) {
    super(e);
  }
  render() {
    return this.compile(I, this.props);
  }
}
function q(e, t, n, s) {
  if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
    return '';
  if (!0 === t) return ' ' + (s ? e : e + '="' + e + '"');
  var i = typeof t;
  return (
    ('object' !== i && 'function' !== i) ||
      'function' != typeof t.toJSON ||
      (t = t.toJSON()),
    'string' == typeof t ||
    ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
      ? (n && (t = V(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function J(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, s = '', i = '', r = Array.isArray(t), a = 0;
          a < e.length;
          a++
        )
          (n = J(e[a])) &&
            (r && t[a] && (n = V(n)), (s = s + i + n), (i = ' '));
        return s;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var s in e)
          s && e[s] && F.call(e, s) && ((t = t + n + s), (n = ' '));
        return t;
      })(e)
    : e || '';
}
function V(e) {
  var t = '' + e,
    n = H.exec(t);
  if (!n) return e;
  var s,
    i,
    r,
    a = '';
  for (s = n.index, i = 0; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
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
    i !== s && (a += t.substring(i, s)), (i = s + 1), (a += r);
  }
  return i !== s ? a + t.substring(i, s) : a;
}
var F = Object.prototype.hasOwnProperty,
  H = /["&<>]/;
var W = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s, i, r, a) {
      (n += '<div class="input">'),
        s &&
          (n =
            n +
            '<label' +
            q('class', J([`input__label ${i}`], [!0]), !1, !1) +
            '>' +
            V(null == (t = s || '') ? '' : t) +
            '</label>'),
        (n =
          n +
          '<input' +
          (q('class', J([`input__field-${i}`], [!0]), !1, !1) +
            q('type', `${a}`, !0, !1) +
            q('name', `${i}`, !0, !1) +
            q('placeholder', `${r || ''}`, !0, !1) +
            q('required', !0, !0, !1) +
            q('autofocus', !0, !0, !1)) +
          '/><label' +
          q('class', J([`error error-${i}`], [!0]), !1, !1) +
          '>' +
          V(null == (t = e || '') ? '' : t) +
          '</label></div>');
    }.call(
      this,
      'error' in s ? s.error : 'undefined' != typeof error ? error : void 0,
      'label' in s ? s.label : 'undefined' != typeof label ? label : void 0,
      'name' in s ? s.name : 'undefined' != typeof name ? name : void 0,
      'placeholder' in s
        ? s.placeholder
        : 'undefined' != typeof placeholder
        ? placeholder
        : void 0,
      'type' in s ? s.type : 'undefined' != typeof type ? type : void 0,
    ),
    n
  );
};
class B extends f {
  constructor(e) {
    super(e);
  }
  setValue(e) {
    return (this.element.childNodes[0].value = e);
  }
  getName() {
    return this.element.name;
  }
  getValue() {
    return this.element.childNodes[0].value;
  }
  render() {
    return this.compile(W, this.props);
  }
}
let Z;
var z;
function G(e) {
  const { name: t, value: n } = e;
  if (t === Z.Login) {
    const e = /^([0-9]*[a-zA-Z\-_][0-9]*)+$/.test(n);
    return !(n.length >= 3 && n.length < 20) || !e || null;
  }
  if (
    t === Z.Password ||
    t === Z.RepeatPassword ||
    t === Z.OldPassword ||
    t === Z.NewPassword
  ) {
    const e = /^(.*([A-Z]+.*[0-9]+|[0-9]+.*[A-Z]+).*)+$/.test(n),
      t = n.length >= 8 && n.length < 40;
    return !e || !t || null;
  }
  if (t === Z.FirstName || t === Z.SecondName) {
    return !/^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/.test(n) || null;
  }
  if (t === Z.Email) {
    return !/^([\w-.]+@[a-zA-Z]+.[a-z]+)$/.test(n) || null;
  }
  if (t === Z.Phone) {
    return !/^\+*[\d]{10,15}$/.test(n) || null;
  }
  if (t === Z.Message) {
    return !(n.length > 0) || null;
  }
}
function Q(e) {
  const t = e.target;
  G(t)
    ? (t.classList.add('invalid'),
      (document.getElementsByClassName(`error-${t.name}`)[0].style.display =
        'block'))
    : (t.classList.remove('invalid'),
      (document.getElementsByClassName(`error-${t.name}`)[0].style.display =
        'none'));
}
function K(e, t) {
  e.preventDefault();
  const n = {};
  let s = !0;
  if (
    (t.map((e) => {
      const t = document.getElementsByName(e)[0];
      if (G(t)) s = !1;
      else {
        const e = t.getAttribute('name'),
          { value: s } = t;
        e && (n[e] = s);
      }
    }),
    s)
  )
    return console.log(n), n;
}
let X;
var Y;
((z = Z || (Z = {})).Login = 'login'),
  (z.Password = 'password'),
  (z.Email = 'email'),
  (z.RepeatPassword = 'repeatPassword'),
  (z.FirstName = 'first_name'),
  (z.SecondName = 'second_name'),
  (z.Phone = 'phone'),
  (z.OldPassword = 'oldPassword'),
  (z.NewPassword = 'newPassword'),
  (z.Message = 'message'),
  (z.DisplayName = 'display_name'),
  ((Y = X || (X = {})).GET = 'GET'),
  (Y.POST = 'POST'),
  (Y.PUT = 'PUT'),
  (Y.PATCH = 'PATCH'),
  (Y.DELETE = 'DELETE');
class ee {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  constructor(e) {
    this.endpoint = `${ee.API_URL}${e}`;
  }
  get(e = '/') {
    return this.request(this.endpoint + e);
  }
  post = (e, t) => this.request(this.endpoint + e, { method: X.POST, data: t });
  put = (e, t) => this.request(this.endpoint + e, { method: X.PUT, data: t });
  patch = (e, t) =>
    this.request(this.endpoint + e, { method: X.PATCH, data: t });
  delete = (e) => this.request(this.endpoint + e, { method: X.DELETE });
  request(e, t = { method: X.GET }) {
    const { method: n, data: s } = t;
    return new Promise((t, i) => {
      const r = new XMLHttpRequest();
      r.open(n, e),
        (r.onload = () => {
          t(r.response);
        }),
        (r.onabort = () => i({ reason: 'abort' })),
        (r.onerror = () => i({ reason: 'network error' })),
        (r.ontimeout = () => i({ reason: 'timeout' })),
        s instanceof FormData ||
          r.setRequestHeader('Content-Type', 'application/json'),
        (r.withCredentials = !0),
        (r.responseType = 'json'),
        n !== X.GET && s
          ? r.send(s instanceof FormData ? s : JSON.stringify(s))
          : r.send();
    });
  }
}
class te {
  constructor(e) {
    this.http = new ee(e);
  }
}
var ne = new (class extends te {
  constructor() {
    super('/auth');
  }
  signin(e) {
    return this.http.post('/signin', e);
  }
  signup(e) {
    return this.http.post('/signup', e);
  }
  read() {
    return this.http.get('/user');
  }
  logout() {
    return this.http.post('/logout');
  }
  create = void 0;
  update = void 0;
  delete = void 0;
})();
function se(e, t) {
  for (let n in t)
    if (t.hasOwnProperty(n))
      try {
        t[n].constructor === Object ? (t[n] = se(e[n], t[n])) : (e[n] = t[n]);
      } catch (s) {
        e[n] = t[n];
      }
  return e;
}
function ie(e, t, n) {
  if ('object' != typeof e || null === e) return e;
  if ('string' != typeof t) throw new Error('path must be string');
  return se(
    e,
    t.split('.').reduceRight((e, t) => ({ [t]: e }), n),
  );
}
let re;
(re || (re = {})).Updated = 'updated';
var ae = new (class extends a {
  state = {};
  set(e, t) {
    ie(this.state, e, t), this.emit(re.Updated, this.getState());
  }
  getState() {
    return this.state;
  }
})();
var oe = new (class {
  constructor() {
    this.api = ne;
  }
  async signin(e) {
    try {
      ae.set('user.error', null),
        await this.api.signin(e),
        await this.fetchUser(),
        x.go('/messanger');
    } catch (e) {
      ae.set('user.error', e);
    }
  }
  async signup(e) {
    try {
      ae.set('user.error', null),
        await this.api.signup(e),
        await this.fetchUser(),
        x.go('/messanger');
    } catch (e) {
      ae.set('user.error', e);
    } finally {
      ae.set('user.isLoading', !1);
    }
  }
  async fetchUser() {
    try {
      const e = await this.api.read();
      ae.set('user.data', e);
    } catch (e) {
      ae.set('user.error', e);
    }
  }
  async logout() {
    try {
      await this.api.logout(), x.go('/');
    } catch (e) {
      ae.set('user.error', e);
    }
  }
})();
var ce = /["&<>]/;
var de = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s, i, r, a) {
      n =
        n +
        '<div class="auth-layout"><main class="sign-in"><form class="sign-in__block" action="../../chat/chat.html"><div class="sign-in__block-title"><span class="sign-in__block-title-text">' +
        (function (e) {
          var t = '' + e,
            n = ce.exec(t);
          if (!n) return e;
          var s,
            i,
            r,
            a = '';
          for (s = n.index, i = 0; s < t.length; s++) {
            switch (t.charCodeAt(s)) {
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
            i !== s && (a += t.substring(i, s)), (i = s + 1), (a += r);
          }
          return i !== s ? a + t.substring(i, s) : a;
        })(null == (t = a) ? '' : t) +
        '</span></div><div class="sign-in__block-login-input">' +
        (null == (t = i) ? '' : t) +
        '\n' +
        (null == (t = r) ? '' : t) +
        '</div><div class="sign-in__block-auth-btn">' +
        (null == (t = e) ? '' : t) +
        '</div><div class="sign-in__block-sign-up">' +
        (null == (t = s) ? '' : t) +
        '</div></form></main></div>';
    }.call(
      this,
      'button' in s ? s.button : 'undefined' != typeof button ? button : void 0,
      'link' in s ? s.link : 'undefined' != typeof link ? link : void 0,
      'login' in s ? s.login : 'undefined' != typeof login ? login : void 0,
      'password' in s
        ? s.password
        : 'undefined' != typeof password
        ? password
        : void 0,
      'title' in s ? s.title : 'undefined' != typeof title ? title : void 0,
    ),
    n
  );
};
class le extends f {
  constructor(e) {
    super(e);
  }
  init() {
    (this.children.login = new B({
      name: 'login',
      type: 'text',
      label: 'Логин',
      placeholder: '',
      error: 'Логин должен содержать больше 3х символов',
      events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
    })),
      (this.children.password = new B({
        name: 'password',
        type: 'password',
        label: 'Пароль',
        placeholder: '',
        error: 'Недопустимые символы',
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.button = new j({
        type: 'submit',
        content: 'Авторизоваться',
        btnClass: 'sign-in-btn',
        events: { click: (e) => this.onSubmit(e) },
      })),
      (this.children.link = new S({ content: 'Нет аккаунта?', to: '/signup' }));
  }
  onSubmit(e) {
    let t = {};
    (t = K(e, ['login', 'password'])), console.log(t), oe.signin(t);
  }
  render() {
    return this.compile(de, this.props);
  }
}
var ue = /["&<>]/;
var pe = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s, i, r, a, o, c, d, l) {
      n =
        n +
        '<div class="auth-layout"><main class="signUp"><form class="signUp__block" action="../../chat/chat.html"><div class="signUp__block-title"><span class="sign-in__title">' +
        (function (e) {
          var t = '' + e,
            n = ue.exec(t);
          if (!n) return e;
          var s,
            i,
            r,
            a = '';
          for (s = n.index, i = 0; s < t.length; s++) {
            switch (t.charCodeAt(s)) {
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
            i !== s && (a += t.substring(i, s)), (i = s + 1), (a += r);
          }
          return i !== s ? a + t.substring(i, s) : a;
        })(null == (t = l) ? '' : t) +
        '</span></div><div class="signUp__block-user-info-input">' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = r) ? '' : t) +
        '\n' +
        (null == (t = i) ? '' : t) +
        '\n' +
        (null == (t = d) ? '' : t) +
        '\n' +
        (null == (t = o) ? '' : t) +
        '\n' +
        (null == (t = a) ? '' : t) +
        '\n' +
        (null == (t = c) ? '' : t) +
        '</div><div class="signUp__block-auth-btn">' +
        (null == (t = e) ? '' : t) +
        '</div></form></main></div>';
    }.call(
      this,
      'button' in s ? s.button : 'undefined' != typeof button ? button : void 0,
      'email' in s ? s.email : 'undefined' != typeof email ? email : void 0,
      'firstName' in s
        ? s.firstName
        : 'undefined' != typeof firstName
        ? firstName
        : void 0,
      'login' in s ? s.login : 'undefined' != typeof login ? login : void 0,
      'password' in s
        ? s.password
        : 'undefined' != typeof password
        ? password
        : void 0,
      'phone' in s ? s.phone : 'undefined' != typeof phone ? phone : void 0,
      'repeatPassword' in s
        ? s.repeatPassword
        : 'undefined' != typeof repeatPassword
        ? repeatPassword
        : void 0,
      'secondName' in s
        ? s.secondName
        : 'undefined' != typeof secondName
        ? secondName
        : void 0,
      'title' in s ? s.title : 'undefined' != typeof title ? title : void 0,
    ),
    n
  );
};
class he extends f {
  constructor(e) {
    super(e);
  }
  init() {
    (this.children.email = new B({
      name: 'email',
      type: 'text',
      label: 'Почта',
      placeholder: '',
      error: 'Неверный формат',
      events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
    })),
      (this.children.login = new B({
        name: 'login',
        type: 'text',
        label: 'Логин',
        placeholder: '',
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.firstName = new B({
        name: 'first_name',
        type: 'text',
        label: 'Имя',
        placeholder: '',
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.secondName = new B({
        name: 'second_name',
        type: 'text',
        label: 'Фамилия',
        placeholder: '',
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.phone = new B({
        name: 'phone',
        type: 'text',
        label: 'Телефон',
        placeholder: '',
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.password = new B({
        name: 'password',
        type: 'password',
        label: 'Пароль',
        placeholder: '',
        error: 'Пароль должен быть как минимум из 8 символов',
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.repeatPassword = new B({
        name: 'repeatPassword',
        type: 'password',
        label: 'Пароль (ещё раз)',
        placeholder: '',
        error: 'Пароль не совпадают',
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.button = new j({
        type: 'submit',
        content: 'Зарегистрироваться',
        btnClass: 'sign-up',
        events: { click: (e) => this.onSubmit(e) },
      })),
      (this.children.link = new S({ content: 'Войти', to: '/messanger' }));
  }
  onSubmit(e) {
    e.preventDefault();
    const t = [
      'email',
      'login',
      'first_name',
      'second_name',
      'phone',
      'password',
      'repeatPassword',
    ];
    K(e, t);
    let n = {};
    (n = K(e, t)), console.log(n), oe.signup(n);
  }
  render() {
    return this.compile(pe, this.props);
  }
}
function fe(e) {
  var t = '' + e,
    n = ve.exec(t);
  if (!n) return e;
  var s,
    i,
    r,
    a = '';
  for (s = n.index, i = 0; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
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
    i !== s && (a += t.substring(i, s)), (i = s + 1), (a += r);
  }
  return i !== s ? a + t.substring(i, s) : a;
}
var ve = /["&<>]/;
var me = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s, i, r, a, o, c, d) {
      n =
        n +
        '<main class="sidebar"><header class="sidebar__header"><div class="sidebar__header-profile"><div class="sidebar__header-profile-block"><div class="sidebar__header-profile-block-text"></div>' +
        (null == (t = o) ? '' : t) +
        '<i class="sidebar__header-profile-block-arrow"></i></div></div><div class="sidebar__header-search"><div class="sidebar__header-search-block"><div class="sidebar__header-search-block-icon"> <div class="search-icon"> <img' +
        (function (e, t, n, s) {
          if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
            return '';
          if (!0 === t) return ' ' + (s ? e : e + '="' + e + '"');
          var i = typeof t;
          return (
            ('object' !== i && 'function' !== i) ||
              'function' != typeof t.toJSON ||
              (t = t.toJSON()),
            'string' == typeof t ||
            ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
              ? (n && (t = fe(t)), ' ' + e + '="' + t + '"')
              : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
          );
        })('src', a, !0, !1) +
        ' alt="icon"/></div>' +
        (null == (t = d) ? '' : t) +
        '</div><div class="sidebar__header-search-block-text">' +
        fe(null == (t = c) ? '' : t) +
        '</div></div></div></header><div class="create-chat">' +
        (null == (t = e) ? '' : t) +
        '</div><div class="add-user-to-chat">' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = i) ? '' : t) +
        '</div><section class="user-chats">' +
        (null == (t = r) ? '' : t) +
        '</section></main>';
    }.call(
      this,
      'addChat' in s
        ? s.addChat
        : 'undefined' != typeof addChat
        ? addChat
        : void 0,
      'addLink' in s
        ? s.addLink
        : 'undefined' != typeof addLink
        ? addLink
        : void 0,
      'addUserToChat' in s
        ? s.addUserToChat
        : 'undefined' != typeof addUserToChat
        ? addUserToChat
        : void 0,
      'chats' in s ? s.chats : 'undefined' != typeof chats ? chats : void 0,
      'img' in s ? s.img : 'undefined' != typeof img ? img : void 0,
      'profileLink' in s
        ? s.profileLink
        : 'undefined' != typeof profileLink
        ? profileLink
        : void 0,
      'search' in s ? s.search : 'undefined' != typeof search ? search : void 0,
      'searchLink' in s
        ? s.searchLink
        : 'undefined' != typeof searchLink
        ? searchLink
        : void 0,
    ),
    n
  );
};
function ge(e) {
  var t = '' + e,
    n = ye.exec(t);
  if (!n) return e;
  var s,
    i,
    r,
    a = '';
  for (s = n.index, i = 0; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
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
    i !== s && (a += t.substring(i, s)), (i = s + 1), (a += r);
  }
  return i !== s ? a + t.substring(i, s) : a;
}
var ye = /["&<>]/;
var be = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s) {
      n =
        n +
        '<div class="user-chats__block"><div class="user-chats__container"><div class="user-chats__img">' +
        ge(null == (t = e) ? '' : t) +
        '</div><div class="user-chats__content"><div class="user-chats__content-name">' +
        ge(null == (t = s.user.first_name) ? '' : t) +
        '</div><div class="user-chats__content-message">' +
        ge(null == (t = s.content) ? '' : t) +
        '</div></div></div></div>';
    }.call(
      this,
      'id' in s ? s.id : 'undefined' != typeof id ? id : void 0,
      'last_message' in s
        ? s.last_message
        : 'undefined' != typeof last_message
        ? last_message
        : void 0,
    ),
    n
  );
};
function _e(e) {
  return function (t) {
    let n = null;
    return class extends t {
      constructor(t) {
        (n = e(ae.getState())),
          super({ ...t, ...n }),
          ae.on(re.Updated, () => {
            const t = e(ae.getState());
            w(n, t) || this.setProps({ ...t });
          });
      }
    };
  };
}
const we = _e((e) => ({
  selectedChat: (e.chats || []).find(({ id: t }) => t === e.selectedChat),
}))(
  class extends f {
    constructor(e) {
      super(e);
    }
    render() {
      return this.compile(be, this.props);
    }
  },
);
var ke = new (class extends te {
  constructor() {
    super('/chats');
  }
  create(e) {
    return this.http.post('/', { title: e });
  }
  delete(e) {
    return this.http.delete('/', { chatId: e });
  }
  read() {
    return this.http.get('/');
  }
  getUsers(e) {
    return this.http.get(`/${e}/users`);
  }
  addUsers(e, t) {
    return this.http.put('/users', { users: t, chatId: e });
  }
  async getToken(e) {
    return (await this.http.post(`/token/${e}`)).token;
  }
  update = void 0;
})();
let Ce;
var xe;
((xe = Ce || (Ce = {})).Connected = 'connected'),
  (xe.Error = 'error'),
  (xe.Message = 'message'),
  (xe.Close = 'close');
class Ne extends a {
  constructor(e) {
    super(), (this.url = e), (this.socket = null), (this.pingInterval = 0);
  }
  send(e) {
    if (!this.socket) throw new Error('Socket is not connected');
    this.socket.send(JSON.stringify(e));
  }
  connect() {
    return (
      (this.socket = new WebSocket(this.url)),
      this.subscribe(this.socket),
      this.setupPing(),
      new Promise((e) => {
        this.on(Ce.Connected, () => {
          e();
        });
      })
    );
  }
  close() {
    this.socket?.close();
  }
  setupPing() {
    (this.pingInterval = setInterval(() => {
      this.send({ type: 'ping' });
    }, 5e3)),
      this.on(Ce.Close, () => {
        clearInterval(this.pingInterval), (this.pingInterval = 0);
      });
  }
  subscribe(e) {
    e.addEventListener('open', () => {
      this.emit(Ce.Connected);
    }),
      e.addEventListener('close', () => {
        this.emit(Ce.Close);
      }),
      e.addEventListener('error', (e) => {
        this.emit(Ce.Error, e);
      }),
      e.addEventListener('message', (e) => {
        const t = JSON.parse(e.data);
        (t.type && 'pong' === t.type) || this.emit(Ce.Message, t);
      });
  }
}
var Se = new (class {
  sockets = new Map();
  async connect(e, t) {
    if (this.sockets.has(e)) return;
    const n = ae.getState().user.data.id,
      s = new Ne(`wss://ya-praktikum.tech/ws/chats/${n}/${e}/${t}`);
    this.sockets.set(e, s),
      await s.connect(),
      this.subscribe(s, e),
      this.fetchOldMessages(e);
  }
  sendMessage(e, t) {
    const n = this.sockets.get(e);
    if (!n) throw new Error(`Chat ${e} is not connected`);
    n.send({ type: 'message', content: t });
  }
  fetchOldMessages(e) {
    const t = this.sockets.get(e);
    if (!t) throw new Error(`Chat ${e} is not connected`);
    t.send({ type: 'get old', content: '0' });
  }
  closeAll() {
    Array.from(this.sockets.values()).forEach((e) => e.close());
  }
  onMessage(e, t) {
    let n;
    n = Array.isArray(t) ? 'messages' : t.type;
    const s = (ae.getState().messages || {})[e] || [];
    switch (n) {
      case 'message':
        ae.set(`messages.${e}`, [...s, t]);
        break;
      case 'messages':
        ae.set(`messages.${e}`, [...s, ...t]);
    }
  }
  onClose(e) {
    this.sockets.delete(e);
  }
  subscribe(e, t) {
    e.on(Ce.Message, (e) => this.onMessage(t, e)),
      e.on(Ce.Close, () => this.onClose(t));
  }
})();
class Pe {
  constructor() {
    this.api = ke;
  }
  async create(e) {
    await this.api.create(e), this.fetchChats();
  }
  async fetchChats() {
    await oe.fetchUser();
    const e = await this.api.read();
    e.map(async (e) => {
      const t = await this.getToken(e.id);
      await Se.connect(e.id, t);
    }),
      ae.set('chats', e),
      console.log(ae);
  }
  addUserToChat(e, t) {
    this.api.addUsers(e, [t]);
  }
  async delete(e) {
    await this.api.delete(e), this.fetchChats();
  }
  getToken(e) {
    return this.api.getToken(e);
  }
  selectChat(e) {
    ae.set('selectedChat', e);
  }
}
var Ee = new Pe();
new Pe();
const Le = _e((e) => ({ chats: [...(e.chats || [])] }))(
  class extends f {
    constructor(e) {
      super({ ...e });
    }
    init() {
      (this.children.profileLink = new S({
        content: 'Профиль',
        to: '/profile',
        extraClass: 'sidebar__link',
      })),
        (this.children.addChat = new j({
          type: 'submit',
          content: 'Создать чат',
          btnClass: 'create-chat',
          events: {
            click: async () => {
              await Ee.create('test chat');
            },
          },
        })),
        (this.children.chats = this.createChats(this.props)),
        (this.children.addLink = new B({
          name: 'search',
          type: 'text',
          placeholder: 'Добавить пользователя по id',
        })),
        (this.children.addUserToChat = new j({
          type: 'submit',
          content: 'Добавить',
          events: {
            click: async () => {
              const e = this.children.addLink,
                t = e.getValue();
              Ee.addUserToChat(ae.getState().selectedChat, t), e.setValue('');
            },
          },
        }));
    }
    componentDidUpdate(e, t) {
      return (this.children.chats = this.createChats(t)), !0;
    }
    createChats(e) {
      return e.chats.map(
        (e) =>
          new we({
            ...e,
            events: {
              click: () => {
                Ee.selectChat(e.id);
              },
            },
          }),
      );
    }
    render() {
      return this.compile(me, this.props);
    }
  },
);
var Oe = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s, i, r, a) {
      (n += '<main class="main-chat">'),
        r
          ? (n =
              n +
              '<header class="main-chat__header">' +
              (null == (t = s) ? '' : t) +
              '</header><main class="main-chat__dialogs">' +
              (null == (t = e) ? '' : t) +
              '</main><section class="main-chat__bottom">   <section class="main-chat-bottom__block"><div class="main-chat-bottom__items"><div class="main-chat-bottom__message-panel"><div class="main-chat-bottom__message-panel_text"> </div>' +
              (null == (t = i) ? '' : t) +
              '</div><div class="main-chat-bottom__send-btn"> ' +
              (null == (t = a) ? '' : t) +
              '</div></div></section></section>')
          : (n += '<div class="no-selected"><p>Выберите чат</p></div>'),
        (n += '</main>');
    }.call(
      this,
      'dialogs' in s
        ? s.dialogs
        : 'undefined' != typeof dialogs
        ? dialogs
        : void 0,
      'header' in s ? s.header : 'undefined' != typeof header ? header : void 0,
      'input' in s ? s.input : 'undefined' != typeof input ? input : void 0,
      'selectedChat' in s
        ? s.selectedChat
        : 'undefined' != typeof selectedChat
        ? selectedChat
        : void 0,
      'sendLink' in s
        ? s.sendLink
        : 'undefined' != typeof sendLink
        ? sendLink
        : void 0,
    ),
    n
  );
};
function Ue(e) {
  var t = '' + e,
    n = Ae.exec(t);
  if (!n) return e;
  var s,
    i,
    r,
    a = '';
  for (s = n.index, i = 0; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
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
    i !== s && (a += t.substring(i, s)), (i = s + 1), (a += r);
  }
  return i !== s ? a + t.substring(i, s) : a;
}
var Ae = /["&<>]/;
var Te = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s) {
      n =
        n +
        '<div class="main-chat-header__block"><div class="main-chat-header__items"><div class="main-chat-header__user-info"><div class="main-chat-header__icon"><img class="avatar-img"' +
        (function (e, t, n, s) {
          if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
            return '';
          if (!0 === t) return ' ' + (s ? e : e + '="' + e + '"');
          var i = typeof t;
          return (
            ('object' !== i && 'function' !== i) ||
              'function' != typeof t.toJSON ||
              (t = t.toJSON()),
            'string' == typeof t ||
            ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
              ? (n && (t = Ue(t)), ' ' + e + '="' + t + '"')
              : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
          );
        })('src', `${e}`, !0, !1) +
        ' alt="avatar"/></div><div class="main-chat-header__name">' +
        Ue(null == (t = s) ? '' : t) +
        '</div></div><div class="main-chat-header__user-action-btn"><div class="main-chat-header__user-action-dot"></div><div class="main-chat-header__user-action-dot"></div><div class="main-chat-header__user-action-dot"></div></div></div></div>';
    }.call(
      this,
      'img' in s ? s.img : 'undefined' != typeof img ? img : void 0,
      'username' in s
        ? s.username
        : 'undefined' != typeof username
        ? username
        : void 0,
    ),
    n
  );
};
class Me extends f {
  constructor(e) {
    super(e);
  }
  render() {
    return this.compile(Te, this.props);
  }
}
function De(e) {
  var t = '' + e,
    n = $e.exec(t);
  if (!n) return e;
  var s,
    i,
    r,
    a = '';
  for (s = n.index, i = 0; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
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
    i !== s && (a += t.substring(i, s)), (i = s + 1), (a += r);
  }
  return i !== s ? a + t.substring(i, s) : a;
}
var $e = /["&<>]/;
var Re = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s) {
      n = s
        ? n +
          '<div class="message--mine">' +
          De(null == (t = e) ? '' : t) +
          '</div>'
        : n + '<div class="message">' + De(null == (t = e) ? '' : t) + '</div>';
    }.call(
      this,
      'content' in s
        ? s.content
        : 'undefined' != typeof content
        ? content
        : void 0,
      'isMine' in s ? s.isMine : 'undefined' != typeof isMine ? isMine : void 0,
    ),
    n
  );
};
class Ie extends f {
  constructor(e) {
    super(e);
  }
  render() {
    return this.compile(Re, this.props);
  }
}
const je = _e((e) => {
  Object.keys(ae.getState()).length;
  const t = e.selectedChat || null;
  return t
    ? {
        messages: (e.messages || {})[t] || [],
        selectedChat: e.selectedChat,
        userId: e?.user?.data.id || 0,
      }
    : { messages: [], selectedChat: void 0, userId: e?.user.data.id || 0 };
})(
  class extends f {
    constructor(e) {
      super(e);
    }
    init() {
      (this.children.header = new Me({
        username: ae.getState().user.data.first_name,
        img:
          null === ae.getState().user.data.avatar
            ? ''
            : `https://ya-praktikum.tech/api/v2/resources${
                ae.getState().user.data.avatar
              }`,
      })),
        (this.children.dialogs = this.createMessages(this.props)),
        (this.children.input = new B({
          name: 'message',
          type: 'textarea',
          placeholder: 'Сообщение',
          events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
        })),
        (this.children.attachLink = new N({})),
        (this.children.sendLink = new j({
          content: 'Отправить',
          events: {
            click: () => {
              const e = this.children.input,
                t = e.getValue();
              Se.sendMessage(this.props.selectedChat, t), e.setValue('');
            },
          },
        }));
    }
    async componentDidMount() {
      await oe.fetchUser();
    }
    componentDidUpdate(e, t) {
      return (this.children.dialogs = this.createMessages(t)), !0;
    }
    createMessages(e) {
      return e.messages.map(
        (t) => new Ie({ ...t, isMine: e.userId === t.user_id }),
      );
    }
    render() {
      return this.compile(Oe, this.props);
    }
  },
);
var qe,
  Je = function (e) {
    var t,
      n = '',
      s = e || {};
    return (
      function (e, s) {
        n =
          n +
          '<div class="chat">' +
          (null == (t = s) ? '' : t) +
          '\n' +
          (null == (t = e) ? '' : t) +
          '</div>';
      }.call(
        this,
        'mainChat' in s
          ? s.mainChat
          : 'undefined' != typeof mainChat
          ? mainChat
          : void 0,
        'sidebar' in s
          ? s.sidebar
          : 'undefined' != typeof sidebar
          ? sidebar
          : void 0,
      ),
      n
    );
  };
qe = new URL(r('27Lyk').resolve('7cSvV'), import.meta.url).toString();
class Ve extends f {
  constructor(e) {
    super(e);
  }
  init() {
    Ee.fetchChats(),
      oe.fetchUser(),
      (this.children.sidebar = new Le({ title: 'Профиль', img: t(qe) })),
      (this.children.mainChat = new je({})),
      Ee.fetchChats().finally(() => {
        this.children.sidebar.setProps({});
      });
  }
  render() {
    return this.compile(Je, this.props);
  }
}
function Fe(e, t, n, s) {
  if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
    return '';
  if (!0 === t) return ' ' + (s ? e : e + '="' + e + '"');
  var i = typeof t;
  return (
    ('object' !== i && 'function' !== i) ||
      'function' != typeof t.toJSON ||
      (t = t.toJSON()),
    'string' == typeof t ||
    ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
      ? (n && (t = We(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function He(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, s = '', i = '', r = Array.isArray(t), a = 0;
          a < e.length;
          a++
        )
          (n = He(e[a])) &&
            (r && t[a] && (n = We(n)), (s = s + i + n), (i = ' '));
        return s;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var s in e)
          s && e[s] && Be.call(e, s) && ((t = t + n + s), (n = ' '));
        return t;
      })(e)
    : e || '';
}
function We(e) {
  var t = '' + e,
    n = Ze.exec(t);
  if (!n) return e;
  var s,
    i,
    r,
    a = '';
  for (s = n.index, i = 0; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
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
    i !== s && (a += t.substring(i, s)), (i = s + 1), (a += r);
  }
  return i !== s ? a + t.substring(i, s) : a;
}
var Be = Object.prototype.hasOwnProperty,
  Ze = /["&<>]/;
var ze = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s, i, r, a, o) {
      (n =
        n +
        '<div class="profile-card__field"><span class="profile-card__field__title">' +
        We(null == (t = r) ? '' : t) +
        '</span>'),
        (n = i
          ? n +
            '<input class="input__field profile-card__field__body"' +
            Fe('type', `${o}`, !0, !1) +
            Fe('name', a, !0, !1) +
            Fe('value', `${e || ''}`, !0, !1) +
            Fe('required', !0, !0, !1) +
            Fe('autofocus', !0, !0, !1) +
            '/><label' +
            Fe('class', He([`error error-${a}`], [!0]), !1, !1) +
            '>' +
            We(null == (t = s || '') ? '' : t) +
            '</label>'
          : n +
            '<span class="profile-card__field__body">' +
            We(null == (t = e) ? '' : t) +
            '</span>'),
        (n += '</div>');
    }.call(
      this,
      'body' in s ? s.body : 'undefined' != typeof body ? body : void 0,
      'error' in s ? s.error : 'undefined' != typeof error ? error : void 0,
      'is_input' in s
        ? s.is_input
        : 'undefined' != typeof is_input
        ? is_input
        : void 0,
      'label' in s ? s.label : 'undefined' != typeof label ? label : void 0,
      'name' in s ? s.name : 'undefined' != typeof name ? name : void 0,
      'type' in s ? s.type : 'undefined' != typeof type ? type : void 0,
    ),
    n
  );
};
class Ge extends f {
  constructor(e) {
    super(e);
  }
  render() {
    return this.compile(ze, this.props);
  }
}
var Qe = new (class extends te {
  constructor() {
    super('/user');
  }
  update(e) {
    return this.http.put('/profile', e);
  }
  password(e) {
    return this.http.put('/password', e);
  }
  avatar(e) {
    return this.http.put('/profile/avatar', e);
  }
  getUser(e) {
    return this.http.get(`/${e}`);
  }
  create = void 0;
  delete = void 0;
  read = void 0;
})();
var Ke = new (class {
  constructor() {
    this.api = Qe;
  }
  async profile(e) {
    try {
      await oe.fetchUser(),
        ae.set('user.error', null),
        await this.api.update(e),
        x.go('/profile');
    } catch (e) {
      ae.set('user.error', e);
    }
  }
  async password(e) {
    try {
      ae.set('user.error', null),
        await this.api.password(e),
        await oe.fetchUser(),
        x.go('/profile');
    } catch (e) {
      ae.set('user.error', e);
    }
  }
  async avatar(e) {
    try {
      await this.api.avatar(e), await oe.fetchUser();
    } catch (e) {
      console.error(e.message);
    }
  }
})();
function Xe(e, t, n, s) {
  if (!1 === t || null == t || (!t && ('class' === e || 'style' === e)))
    return '';
  if (!0 === t) return ' ' + (s ? e : e + '="' + e + '"');
  var i = typeof t;
  return (
    ('object' !== i && 'function' !== i) ||
      'function' != typeof t.toJSON ||
      (t = t.toJSON()),
    'string' == typeof t ||
    ((t = JSON.stringify(t)), n || -1 === t.indexOf('"'))
      ? (n &&
          (t = (function (e) {
            var t = '' + e,
              n = Ye.exec(t);
            if (!n) return e;
            var s,
              i,
              r,
              a = '';
            for (s = n.index, i = 0; s < t.length; s++) {
              switch (t.charCodeAt(s)) {
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
              i !== s && (a += t.substring(i, s)), (i = s + 1), (a += r);
            }
            return i !== s ? a + t.substring(i, s) : a;
          })(t)),
        ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
var Ye = /["&<>]/;
var et = function (e) {
  var t = '',
    n = e || {};
  return (
    function (e) {
      t =
        t +
        '<form id="profile-avatar"><img class="avatar-img"' +
        Xe('src', `${e}`, !0, !1) +
        ' alt="avatar"/><div class="avatar-overlay"><div class="avatar-overlay__text"></div><div class="image-container"><input id="avatar" type="file" name="avatar" accept="image/*"></div></div></form> ';
    }.call(this, 'img' in n ? n.img : 'undefined' != typeof img ? img : void 0),
    t
  );
};
class tt extends f {
  constructor(e) {
    super(e);
  }
  render() {
    return this.compile(et, this.props);
  }
}
var nt = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s, i, r, a, o, c, d, l, u) {
      n =
        n +
        '<div class="profile-layout"><section class="profile-layout__sidebar"><a class="profile-layout__sidebar-btn" href="/messanger"><p>Назад</p></a></section><section class="profile-layout__main"><div class="profile-card"><div class="profile-card__user-info">' +
        (null == (t = e) ? '' : t) +
        '</div><div class="profile-card__block"><div class="profile-card__fields"> ' +
        (null == (t = i) ? '' : t) +
        '\n' +
        (null == (t = o) ? '' : t) +
        '\n' +
        (null == (t = a) ? '' : t) +
        '\n' +
        (null == (t = d) ? '' : t) +
        '\n' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = c) ? '' : t) +
        '</div><div class="profile-card__actions"><div class="profile-card__field">' +
        (null == (t = l) ? '' : t) +
        '</div><div class="profile-card__field">' +
        (null == (t = u) ? '' : t) +
        '</div><div class="profile-card__field">   ' +
        (null == (t = r) ? '' : t) +
        '</div></div></div></div></section></div>';
    }.call(
      this,
      'avatar' in s ? s.avatar : 'undefined' != typeof avatar ? avatar : void 0,
      'displayName' in s
        ? s.displayName
        : 'undefined' != typeof displayName
        ? displayName
        : void 0,
      'email' in s ? s.email : 'undefined' != typeof email ? email : void 0,
      'exitLink' in s
        ? s.exitLink
        : 'undefined' != typeof exitLink
        ? exitLink
        : void 0,
      'firstName' in s
        ? s.firstName
        : 'undefined' != typeof firstName
        ? firstName
        : void 0,
      'login' in s ? s.login : 'undefined' != typeof login ? login : void 0,
      'phone' in s ? s.phone : 'undefined' != typeof phone ? phone : void 0,
      'secondName' in s
        ? s.secondName
        : 'undefined' != typeof secondName
        ? secondName
        : void 0,
      'updateInfoLink' in s
        ? s.updateInfoLink
        : 'undefined' != typeof updateInfoLink
        ? updateInfoLink
        : void 0,
      'updatePasswordLink' in s
        ? s.updatePasswordLink
        : 'undefined' != typeof updatePasswordLink
        ? updatePasswordLink
        : void 0,
    ),
    n
  );
};
class st extends f {
  constructor(e) {
    super(e);
  }
  init() {
    (this.children.avatar = new tt({
      img:
        null === this.props.avatar
          ? ''
          : `https://ya-praktikum.tech/api/v2/resources${
              ae.getState().user.data.avatar
            }`,
      events: {
        change: (e) => {
          e.preventDefault();
          const t = new FormData(),
            n = document.querySelector('#avatar');
          t.append('avatar', n?.files[0]), Ke.avatar(t);
        },
      },
    })),
      (this.children.email = new Ge({
        name: 'email',
        type: 'text',
        label: 'Почта',
        body: ae.getState().user.data.email,
      })),
      (this.children.login = new Ge({
        name: 'login',
        type: 'text',
        label: 'Логин',
        body: ae.getState().user.data.login,
      })),
      (this.children.firstName = new Ge({
        name: 'first_name',
        type: 'text',
        label: 'Имя',
        body: ae.getState().user.data.first_name,
      })),
      (this.children.secondName = new Ge({
        name: 'second_name',
        type: 'text',
        label: 'Фамилия',
        body: ae.getState().user.data.second_name,
      })),
      (this.children.displayName = new Ge({
        name: 'display_name',
        type: 'text',
        label: 'Имя в чате',
        body: ae.getState().user.data.display_name,
      })),
      (this.children.phone = new Ge({
        name: 'phone',
        type: 'text',
        label: 'Телефон',
        body: ae.getState().user.data.phone,
      })),
      (this.children.updateInfoLink = new S({
        content: 'Изменить данные',
        to: '/settings',
        extraClass: 'profile__link',
      })),
      (this.children.updatePasswordLink = new S({
        content: 'Изменить пароль',
        to: '/change-password',
        extraClass: 'profile__link',
      })),
      (this.children.exitLink = new j({
        content: 'Выйти',
        events: {
          click: () => {
            oe.logout();
          },
        },
        btnClass: 'profile__link_exit',
      }));
  }
  componentDidUpdate(e, t) {
    this.children.avatar.setProps({
      img:
        null === t.avatar
          ? ''
          : `https://ya-praktikum.tech/api/v2/resources${
              ae.getState().user.data.avatar
            }`,
    });
  }
  render() {
    return this.compile(nt, this.props);
  }
}
const it = _e((e) => ({ ...e.user }))(st);
var rt = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s, i, r, a, o, c) {
      n =
        n +
        '<div class="profile-layout"><section class="profile-layout__sidebar"><a class="profile-layout__sidebar-btn" href="/messanger"><p>Назад</p></a></section><section class="profile-layout__main"><div class="profile-card"><form class="profile-card__block" action="../../chat/chat.html"><div class="profile-card__fields"> ' +
        (null == (t = i) ? '' : t) +
        '\n' +
        (null == (t = a) ? '' : t) +
        '\n' +
        (null == (t = r) ? '' : t) +
        '\n' +
        (null == (t = c) ? '' : t) +
        '\n' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = o) ? '' : t) +
        '</div><div class="profile-card__actions"><div class="profile-card__actions-btn">' +
        (null == (t = e) ? '' : t) +
        '</div></div></form></div></section></div>';
    }.call(
      this,
      'button' in s ? s.button : 'undefined' != typeof button ? button : void 0,
      'displayName' in s
        ? s.displayName
        : 'undefined' != typeof displayName
        ? displayName
        : void 0,
      'email' in s ? s.email : 'undefined' != typeof email ? email : void 0,
      'firstName' in s
        ? s.firstName
        : 'undefined' != typeof firstName
        ? firstName
        : void 0,
      'login' in s ? s.login : 'undefined' != typeof login ? login : void 0,
      'phone' in s ? s.phone : 'undefined' != typeof phone ? phone : void 0,
      'secondName' in s
        ? s.secondName
        : 'undefined' != typeof secondName
        ? secondName
        : void 0,
    ),
    n
  );
};
class at extends f {
  constructor() {
    super({});
  }
  init() {
    (this.children.email = new Ge({
      name: 'email',
      type: 'text',
      label: 'Почта',
      body: ae.getState().user.data.email,
      is_input: !0,
      error: 'Неверный формат',
      events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
    })),
      (this.children.login = new Ge({
        name: 'login',
        type: 'text',
        label: 'Логин',
        body: ae.getState().user.data.login,
        is_input: !0,
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.firstName = new Ge({
        name: 'first_name',
        type: 'text',
        label: 'Имя',
        body: ae.getState().user.data.first_name,
        is_input: !0,
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.secondName = new Ge({
        name: 'second_name',
        type: 'text',
        label: 'Фамилия',
        body: ae.getState().user.data.second_name,
        error: 'Недостаточное количество символов или неверный формат',
        is_input: !0,
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.displayName = new Ge({
        name: 'display_name',
        type: 'text',
        label: 'Имя в чате',
        body: ae.getState().user.data.display_name,
        is_input: !0,
        error: 'Недостаточное количество символов или неверный формат',
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.phone = new Ge({
        name: 'phone',
        type: 'text',
        label: 'Телефон',
        body: ae.getState().user.data.phone,
        error: 'Недостаточное количество символов или неверный формат',
        is_input: !0,
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.button = new j({
        type: 'submit',
        btnClass: 'save-changes',
        content: 'Сохранить',
        events: { click: (e) => this.onSubmit(e) },
      }));
  }
  onSubmit(e) {
    let t = {};
    (t = K(e, [
      'email',
      'login',
      'first_name',
      'second_name',
      'phone',
      'display_name',
    ])),
      console.log(t),
      Ke.profile(t);
  }
  render() {
    return this.compile(rt, this.props);
  }
}
var ot = function (e) {
  var t,
    n = '',
    s = e || {};
  return (
    function (e, s, i, r) {
      n =
        n +
        '<div class="profile-layout"><section class="profile-layout__sidebar"><a class="profile-layout__sidebar-btn" href="/messanger"><p>Назад</p></a></section><section class="profile-layout__main"><div class="profile-card"><form class="profile-card__block" action="../../chat/chat.html"><div class="profile-card__fields"> ' +
        (null == (t = i) ? '' : t) +
        '\n' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = r) ? '' : t) +
        '</div><div class="profile-card__actions"><div class="profile-card__actions-btn">' +
        (null == (t = e) ? '' : t) +
        '</div></div></form></div></section></div>';
    }.call(
      this,
      'button' in s ? s.button : 'undefined' != typeof button ? button : void 0,
      'newPassword' in s
        ? s.newPassword
        : 'undefined' != typeof newPassword
        ? newPassword
        : void 0,
      'oldPassword' in s
        ? s.oldPassword
        : 'undefined' != typeof oldPassword
        ? oldPassword
        : void 0,
      'repeatPassword' in s
        ? s.repeatPassword
        : 'undefined' != typeof repeatPassword
        ? repeatPassword
        : void 0,
    ),
    n
  );
};
class ct extends f {
  constructor() {
    super({});
  }
  init() {
    (this.children.oldPassword = new Ge({
      name: 'oldPassword',
      type: 'password',
      label: 'Старый пароль',
      error: 'Неверный паорль',
      is_input: !0,
      events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
    })),
      (this.children.newPassword = new Ge({
        name: 'newPassword',
        type: 'password',
        error: 'Недостаточное количество символов',
        label: 'Новый пароль',
        is_input: !0,
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.repeatPassword = new Ge({
        name: 'repeatPassword',
        type: 'password',
        label: 'Повтороите новый пароль',
        error: 'Пароли не совпадают',
        is_input: !0,
        events: { focusout: (e) => Q(e), focusin: (e) => Q(e) },
      })),
      (this.children.button = new j({
        type: 'submit',
        btnClass: 'save-changes-password',
        content: 'Сохранить',
        events: { click: (e) => this.onSubmit(e) },
      }));
  }
  onSubmit(e) {
    const t = ['oldPassword', 'newPassword'];
    K(e, t);
    let n = {};
    (n = K(e, t)), console.log(n), Ke.password(n);
  }
  render() {
    return this.compile(ot, this.props);
  }
}
let dt;
var lt;
((lt = dt || (dt = {})).Index = '/'),
  (lt.SignUp = '/signup'),
  (lt.Chat = '/messanger'),
  (lt.Profile = '/profile'),
  (lt.Settings = '/settings'),
  (lt.ChangePassword = '/change-password'),
  (lt.Page404 = '/404'),
  (lt.Page500 = '/500'),
  window.addEventListener('DOMContentLoaded', async () => {
    x.use(dt.Index, le)
      .use(dt.SignUp, he)
      .use(dt.Chat, Ve)
      .use(dt.Profile, it)
      .use(dt.Settings, at)
      .use(dt.ChangePassword, ct)
      .use(dt.Page404, U)
      .use(dt.Page500, A);
    let e = !0;
    switch (window.location.pathname) {
      case dt.Index:
      case dt.SignUp:
        e = !1;
    }
    try {
      await oe.fetchUser(), x.start(), e || x.go(dt.Index);
    } catch (t) {
      x.start(), e && x.go(dt.Index);
    }
  });
//# sourceMappingURL=index.6db1efb8.js.map
