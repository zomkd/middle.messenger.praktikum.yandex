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
      '{"1LzKV":"index.ce1ccc22.js","bdUWo":"send-icon.8eb67051.png","b3wcV":"index.6d13b5e8.css"}',
    ),
  );
var a = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i) {
      n = n + ((null == (t = i) ? '' : t) + '\n') + (null == (t = e) ? '' : t);
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
var c = {
  randomUUID:
    'undefined' != typeof crypto &&
    crypto.randomUUID &&
    crypto.randomUUID.bind(crypto),
};
let d;
const l = new Uint8Array(16);
function u() {
  if (
    !d &&
    ((d =
      'undefined' != typeof crypto &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !d)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
    );
  return d(l);
}
const h = [];
for (let e = 0; e < 256; ++e) h.push((e + 256).toString(16).slice(1));
function f(e, t = 0) {
  return (
    h[e[t + 0]] +
    h[e[t + 1]] +
    h[e[t + 2]] +
    h[e[t + 3]] +
    '-' +
    h[e[t + 4]] +
    h[e[t + 5]] +
    '-' +
    h[e[t + 6]] +
    h[e[t + 7]] +
    '-' +
    h[e[t + 8]] +
    h[e[t + 9]] +
    '-' +
    h[e[t + 10]] +
    h[e[t + 11]] +
    h[e[t + 12]] +
    h[e[t + 13]] +
    h[e[t + 14]] +
    h[e[t + 15]]
  ).toLowerCase();
}
var p = function (e, t, n) {
  if (c.randomUUID && !t && !e) return c.randomUUID();
  const i = (e = e || {}).random || (e.rng || u)();
  if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) {
    n = n || 0;
    for (let e = 0; e < 16; ++e) t[n + e] = i[e];
    return t;
  }
  return f(i);
};
class m {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };
  id = p();
  _element = null;
  constructor(e = 'div', t) {
    const n = new o(),
      { props: i, children: s } = this._getChildrenAndProps(t);
    (this._meta = { tagName: e, props: i }),
      (this.children = s),
      (this.props = this._makePropsProxy(i)),
      (this.eventBus = () => n),
      this._registerEvents(n),
      n.emit(m.EVENTS.INIT);
  }
  _getChildrenAndProps(e) {
    const t = {},
      n = {};
    return (
      Object.entries(e).forEach(([e, i]) => {
        (Array.isArray(i) && i.every((e) => e instanceof m)) || i instanceof m
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
    e.on(m.EVENTS.INIT, this._init.bind(this)),
      e.on(m.EVENTS.FLOW_CDM, this._componentDidMount.bind(this)),
      e.on(m.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this)),
      e.on(m.EVENTS.FLOW_RENDER, this._render.bind(this));
  }
  _createResources() {
    const { tagName: e } = this._meta;
    this._element = this._createDocumentElement(e);
  }
  _init() {
    this._createResources(),
      this.init(),
      this.eventBus().emit(m.EVENTS.FLOW_RENDER);
  }
  init() {}
  _componentDidMount() {
    this.componentDidMount();
  }
  componentDidMount() {}
  dispatchComponentDidMount() {
    this.eventBus().emit(m.EVENTS.FLOW_CDM),
      Object.values(this.children).forEach((e) => {
        Array.isArray(e)
          ? e.forEach((e) => e.dispatchComponentDidMount())
          : e.dispatchComponentDidMount();
      });
  }
  _componentDidUpdate(e, t) {
    this.componentDidUpdate(e, t) && this.eventBus().emit(m.EVENTS.FLOW_RENDER);
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
        return (e[n] = i), t.eventBus().emit(m.EVENTS.FLOW_CDU, s, e), !0;
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
function v(e) {
  var t = '' + e,
    n = g.exec(t);
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
var g = /["&<>]/;
var _ = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r) {
      n =
        n +
        '<header class="sidebar__header"><div class="sidebar__header-profile"><div class="sidebar__header-profile-block"><div class="sidebar__header-profile-block-text"><a class="sidebar__header-profile-block-link" href="../profile/profile.pug">' +
        v(null == (t = i) ? '' : t) +
        '</a></div><i class="sidebar__header-profile-block-arrow"></i></div></div><div class="sidebar__header-search"><div class="sidebar__header-search-block"><div class="sidebar__header-search-block-icon"><img src = "~/src/assets/icons/lens-icon.svg" alt="lens-icon"/></div><div class="sidebar__header-search-block-text">' +
        v(null == (t = e) ? '' : t) +
        '</div></div></div></header><section class="user-chats">' +
        (null == (t = s) ? '' : t) +
        '\n' +
        (null == (t = r) ? '' : t) +
        '</section>';
    }.call(
      this,
      'search' in i ? i.search : 'undefined' != typeof search ? search : void 0,
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
function b(e, t, n, i) {
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
      ? (n && (t = w(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function y(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, i = '', s = '', r = Array.isArray(t), a = 0;
          a < e.length;
          a++
        )
          (n = y(e[a])) &&
            (r && t[a] && (n = w(n)), (i = i + s + n), (s = ' '));
        return i;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var i in e)
          i && e[i] && k.call(e, i) && ((t = t + n + i), (n = ' '));
        return t;
      })(e)
    : e || '';
}
function w(e) {
  var t = '' + e,
    n = E.exec(t);
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
var k = Object.prototype.hasOwnProperty,
  E = /["&<>]/;
var C = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r) {
      (n = n + '<div' + b('class', y([`link ${i || ''}`], [!0]), !1, !1) + '>'),
        r
          ? (n += "<img src=imgSrc  alt='icon'/>")
          : (n =
              n +
              '<a' +
              b('href', s, !0, !1) +
              '>' +
              w(null == (t = e) ? '' : t) +
              '</a>'),
        (n += '</div>');
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
      'imgSrc' in i ? i.imgSrc : 'undefined' != typeof imgSrc ? imgSrc : void 0,
    ),
    n
  );
};
class x extends m {
  constructor(e) {
    super('div', e);
  }
  render() {
    return this.compile(C, this.props);
  }
}
function N(e) {
  var t = '' + e,
    n = O.exec(t);
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
var O = /["&<>]/;
var A = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r, a) {
      n =
        n +
        '<div class="user-chats__container"><div class="user-chats__img">' +
        N(null == (t = e) ? '' : t) +
        '</div><div class="user-chats__content"><div class="user-chats__content-name">' +
        N(null == (t = s) ? '' : t) +
        '</div><div class="user-chats__content-message">' +
        N(null == (t = i) ? '' : t) +
        '</div></div><div class="user-chats__notify"><div class="user-chats__notify-time">' +
        N(null == (t = a) ? '' : t) +
        '</div><div class="user-chats__notify-new-messages">' +
        N(null == (t = r) ? '' : t) +
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
class D extends m {
  constructor(e) {
    super('div', e), this.element.classList.add('user-chats__block');
  }
  render() {
    return this.compile(A, this.props);
  }
}
class S extends m {
  constructor(e) {
    super('main', e), this.element.classList.add('sidebar');
  }
  init() {
    (this.children.link = new x({
      content: '',
      href: '../signUp/signUp.pug',
      extraClass: 'sidebar__link',
    })),
      (this.children.userChat1 = new D({
        href: 'img',
        name: 'Dean',
        message: 'whats up!',
        time: '11:12',
        newMessageCount: 3,
      })),
      (this.children.userChat2 = new D({
        href: 'img',
        name: 'Fox',
        message: 'yo',
        time: '11:42',
        newMessageCount: 1,
      }));
  }
  render() {
    return this.compile(_, this.props);
  }
}
var L = function (e) {
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
var U = /["&<>]/;
var P = function (e) {
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
            n = U.exec(t);
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
class M extends m {
  constructor(e) {
    super('div', e), this.element.classList.add('main-chat-header__block');
  }
  render() {
    return this.compile(P, this.props);
  }
}
function R(e, t, n, i) {
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
      ? (n && (t = T(t)), ' ' + e + '="' + t + '"')
      : ' ' + e + "='" + t.replace(/'/g, '&#39;') + "'"
  );
}
function F(e, t) {
  return Array.isArray(e)
    ? (function (e, t) {
        for (
          var n, i = '', s = '', r = Array.isArray(t), a = 0;
          a < e.length;
          a++
        )
          (n = F(e[a])) &&
            (r && t[a] && (n = T(n)), (i = i + s + n), (s = ' '));
        return i;
      })(e, t)
    : e && 'object' == typeof e
    ? (function (e) {
        var t = '',
          n = '';
        for (var i in e)
          i && e[i] && j.call(e, i) && ((t = t + n + i), (n = ' '));
        return t;
      })(e)
    : e || '';
}
function T(e) {
  var t = '' + e,
    n = V.exec(t);
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
var j = Object.prototype.hasOwnProperty,
  V = /["&<>]/;
var $ = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i, s, r) {
      n =
        n +
        '<label' +
        R('class', F([`input__label ${i}`], [!0]), !1, !1) +
        '>' +
        T(null == (t = e || '') ? '' : t) +
        '</label><input' +
        (R('class', F([`input__field-${i}`], [!0]), !1, !1) +
          R('type', `${r}`, !0, !1) +
          R('name', `${i}`, !0, !1) +
          R('placeholder', `${s || ''}`, !0, !1) +
          R('required', !0, !0, !1) +
          R('autofocus', !0, !0, !1)) +
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
class W extends m {
  constructor(e) {
    super('div', e), this.element.classList.add('input');
  }
  getName() {
    return this.element.name;
  }
  getValue() {
    return this.element.value;
  }
  render() {
    return this.compile($, this.props);
  }
}
let q;
var I;
function B(e) {
  const { name: t, value: n } = e;
  if (t === q.Login) {
    console.log(t);
    const e = /^([0-9]*[a-zA-Z\-_][0-9]*)+$/.test(n);
    return n.length >= 3 && n.length < 20 && e ? null : 0 !== n.length;
  }
  if (
    t === q.Password ||
    t === q.RepeatPassword ||
    t === q.OldPassword ||
    t === q.NewPassword
  ) {
    const e = /^(.*([A-Z]+.*[0-9]+|[0-9]+.*[A-Z]+).*)+$/.test(n),
      t = n.length >= 8 && n.length < 40;
    return e && t ? null : 0 !== n.length;
  }
  if (t === q.FirstName || t === q.SecondName) {
    return /^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/.test(n) ? null : 0 !== n.length;
  }
  if (t === q.Email) {
    return /^([\w-.]+@[a-zA-Z]+.[a-z]+)$/.test(n) ? null : 0 !== n.length;
  }
  if (t === q.Phone) {
    return /^\+*[\d]{10,15}$/.test(n) ? null : 0 !== n.length;
  }
  if (t === q.Message) {
    return n.length > 0 ? null : 0 !== n.length;
  }
}
((I = q || (q = {})).Login = 'login'),
  (I.Password = 'password'),
  (I.Email = 'email'),
  (I.RepeatPassword = 'repeatPassword'),
  (I.FirstName = 'first_name'),
  (I.SecondName = 'second_name'),
  (I.Phone = 'phone'),
  (I.OldPassword = 'oldPassword'),
  (I.NewPassword = 'newPassword'),
  (I.Message = 'message');
var H;
H = new URL(r('27Lyk').resolve('bdUWo'), import.meta.url).toString();
var J = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e, i) {
      n =
        n +
        '<section class="main-chat-bottom__block"><div class="main-chat-bottom__items"><div class="main-chat-bottom__attach-btn"> </div><img src=\'/assets/icons/attach-icon.svg\'  alt=\'attach-icon\'/><div class="main-chat-bottom__message-panel"><div class="main-chat-bottom__message-panel_text"> </div>' +
        (null == (t = e) ? '' : t) +
        '</div><div class="main-chat-bottom__send-btn"> ' +
        (null == (t = i) ? '' : t) +
        '</div></div></section>';
    }.call(
      this,
      'input' in i ? i.input : 'undefined' != typeof input ? input : void 0,
      'link' in i ? i.link : 'undefined' != typeof link ? link : void 0,
    ),
    n
  );
};
class Z extends m {
  constructor() {
    super('footer', {}), this.element.classList.add('main-chat__bottom');
  }
  validateBlock(e) {
    const t = e.target;
    B(t) ? t.classList.add('invalid') : t.classList.remove('invalid');
  }
  init() {
    (this.children.input = new W({
      name: 'message',
      type: 'text',
      label: '',
      placeholder: 'Сообщение',
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    })),
      (this.children.link = new x({
        extraClass: '',
        content: 'ss',
        href: '',
        imgSrc: t(H),
        events: { click: (e) => this.onSubmit(e) },
      }));
  }
  onSubmit(e) {
    e.preventDefault();
    const t = {};
    let n = !0;
    ['message'].map((e) => {
      const i = document.getElementsByName(e)[0];
      if (B(i)) n = !1;
      else {
        const e = i.getAttribute('name'),
          { value: n } = i;
        e && (t[e] = n);
      }
    }),
      n && console.log(t);
  }
  render() {
    return this.compile(J, this.props);
  }
}
var z = /["&<>]/;
var K = function (e) {
  var t,
    n = '',
    i = e || {};
  return (
    function (e) {
      n =
        n +
        '<div class="main-chat-dialogs__block">' +
        (function (e) {
          var t = '' + e,
            n = z.exec(t);
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
        '</div>';
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
class G extends m {
  constructor(e) {
    super('div', e), this.element.classList.add('main-chat-dialogs__block');
  }
  render() {
    return this.compile(K, this.props);
  }
}
class Q extends m {
  constructor() {
    super('main', {}), this.element.classList.add('main-chat');
  }
  init() {
    (this.children.header = new M({ username: 'Unknown' })),
      (this.children.dialogs = new G({
        content: 'Выберите чат чтобы отправить сообщение',
      })),
      (this.children.bottom = new Z());
  }
  render() {
    return this.compile(L, this.props);
  }
}
class X extends m {
  constructor(e) {
    super('main', e), this.element.classList.add('chat');
  }
  init() {
    (this.children.sidebar = new S({ title: 'Профиль' })),
      (this.children.mainChat = new Q());
  }
  render() {
    return this.compile(a, this.props);
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const e = document.querySelector('#app'),
    t = new X({ title: 'Регистрация' });
  console.log(t.getContent()),
    e.append(t.getContent()),
    t.dispatchComponentDidMount();
});
//# sourceMappingURL=index.ce1ccc22.js.map
