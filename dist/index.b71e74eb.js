// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})(
  {
    iJYvl: [
      function (require, module, exports) {
        'use strict';
        var global = arguments[3];
        var HMR_HOST = null;
        var HMR_PORT = null;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = 'd6ea1d42532a7575';
        module.bundle.HMR_BUNDLE_ID = '5c1b77e3b71e74eb';
        /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
        var OldModule = module.bundle.Module;
        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function (fn) {
              this._acceptCallbacks.push(fn || function () {});
            },
            dispose: function (fn) {
              this._disposeCallbacks.push(fn);
            },
          };
          module.bundle.hotData = undefined;
        }
        module.bundle.Module = Module;
        var checkedAssets,
          acceptedAssets,
          assetsToAccept /*: Array<[ParcelRequire, string]> */;
        function getHostname() {
          return (
            HMR_HOST ||
            (location.protocol.indexOf('http') === 0
              ? location.hostname
              : 'localhost')
          );
        }
        function getPort() {
          return HMR_PORT || location.port;
        } // eslint-disable-next-line no-redeclare
        var parent = module.bundle.parent;
        if (
          (!parent || !parent.isParcelRequire) &&
          typeof WebSocket !== 'undefined'
        ) {
          var hostname = getHostname();
          var port = getPort();
          var protocol =
            HMR_SECURE ||
            (location.protocol == 'https:' &&
              !/localhost|127.0.0.1|0.0.0.0/.test(hostname))
              ? 'wss'
              : 'ws';
          var ws = new WebSocket(
            protocol + '://' + hostname + (port ? ':' + port : '') + '/',
          ); // Web extension context
          var extCtx =
            typeof chrome === 'undefined'
              ? typeof browser === 'undefined'
                ? null
                : browser
              : chrome; // Safari doesn't support sourceURL in error stacks.
          // eval may also be disabled via CSP, so do a quick check.
          var supportsSourceURL = false;
          try {
            (0, eval)('throw new Error("test"); //# sourceURL=test.js');
          } catch (err) {
            supportsSourceURL = err.stack.includes('test.js');
          } // $FlowFixMe
          ws.onmessage = async function (event) {
            checkedAssets = {} /*: {|[string]: boolean|} */;
            acceptedAssets = {} /*: {|[string]: boolean|} */;
            assetsToAccept = [];
            var data = JSON.parse(event.data);
            if (data.type === 'update') {
              // Remove error overlay if there is one
              if (typeof document !== 'undefined') removeErrorOverlay();
              let assets = data.assets.filter(
                (asset) => asset.envHash === HMR_ENV_HASH,
              ); // Handle HMR Update
              let handled = assets.every((asset) => {
                return (
                  asset.type === 'css' ||
                  (asset.type === 'js' &&
                    hmrAcceptCheck(
                      module.bundle.root,
                      asset.id,
                      asset.depsByBundle,
                    ))
                );
              });
              if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (
                  typeof window !== 'undefined' &&
                  typeof CustomEvent !== 'undefined'
                )
                  window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                for (var i = 0; i < assetsToAccept.length; i++) {
                  var id = assetsToAccept[i][1];
                  if (!acceptedAssets[id])
                    hmrAcceptRun(assetsToAccept[i][0], id);
                }
              } else fullReload();
            }
            if (data.type === 'error') {
              // Log parcel errors to console
              for (let ansiDiagnostic of data.diagnostics.ansi) {
                let stack = ansiDiagnostic.codeframe
                  ? ansiDiagnostic.codeframe
                  : ansiDiagnostic.stack;
                console.error(
                  '\uD83D\uDEA8 [parcel]: ' +
                    ansiDiagnostic.message +
                    '\n' +
                    stack +
                    '\n\n' +
                    ansiDiagnostic.hints.join('\n'),
                );
              }
              if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
              }
            }
          };
          ws.onerror = function (e) {
            console.error(e.message);
          };
          ws.onclose = function () {
            console.warn(
              '[parcel] \uD83D\uDEA8 Connection to the HMR server was lost',
            );
          };
        }
        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);
          if (overlay) {
            overlay.remove();
            console.log('[parcel] ✨ Error resolved');
          }
        }
        function createErrorOverlay(diagnostics) {
          var overlay = document.createElement('div');
          overlay.id = OVERLAY_ID;
          let errorHTML =
            '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
          for (let diagnostic of diagnostics) {
            let stack = diagnostic.frames.length
              ? diagnostic.frames.reduce((p, frame) => {
                  return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(
                    frame.location,
                  )}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${
                    frame.location
                  }</a>
${frame.code}`;
                }, '')
              : diagnostic.stack;
            errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints
            .map((hint) => '<div>\uD83D\uDCA1 ' + hint + '</div>')
            .join('')}
        </div>
        ${
          diagnostic.documentation
            ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>`
            : ''
        }
      </div>
    `;
          }
          errorHTML += '</div>';
          overlay.innerHTML = errorHTML;
          return overlay;
        }
        function fullReload() {
          if ('reload' in location) location.reload();
          else if (extCtx && extCtx.runtime && extCtx.runtime.reload)
            extCtx.runtime.reload();
        }
        function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
          var modules = bundle.modules;
          if (!modules) return [];
          var parents = [];
          var k, d, dep;
          for (k in modules)
            for (d in modules[k][1]) {
              dep = modules[k][1][d];
              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              )
                parents.push([bundle, k]);
            }
          if (bundle.parent)
            parents = parents.concat(getParents(bundle.parent, id));
          return parents;
        }
        function updateLink(link) {
          var newLink = link.cloneNode();
          newLink.onload = function () {
            if (link.parentNode !== null)
              // $FlowFixMe
              link.parentNode.removeChild(link);
          };
          newLink.setAttribute(
            'href',
            link.getAttribute('href').split('?')[0] + '?' + Date.now(),
          ); // $FlowFixMe
          link.parentNode.insertBefore(newLink, link.nextSibling);
        }
        var cssTimeout = null;
        function reloadCSS() {
          if (cssTimeout) return;
          cssTimeout = setTimeout(function () {
            var links = document.querySelectorAll('link[rel="stylesheet"]');
            for (var i = 0; i < links.length; i++) {
              // $FlowFixMe[incompatible-type]
              var href = links[i].getAttribute('href');
              var hostname = getHostname();
              var servedFromHMRServer =
                hostname === 'localhost'
                  ? new RegExp(
                      '^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' +
                        getPort(),
                    ).test(href)
                  : href.indexOf(hostname + ':' + getPort());
              var absolute =
                /^https?:\/\//i.test(href) &&
                href.indexOf(location.origin) !== 0 &&
                !servedFromHMRServer;
              if (!absolute) updateLink(links[i]);
            }
            cssTimeout = null;
          }, 50);
        }
        function hmrDownload(asset) {
          if (asset.type === 'js') {
            if (typeof document !== 'undefined') {
              let script = document.createElement('script');
              script.src = asset.url + '?t=' + Date.now();
              if (asset.outputFormat === 'esmodule') script.type = 'module';
              return new Promise((resolve, reject) => {
                var _document$head;
                script.onload = () => resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null ||
                  _document$head === void 0 ||
                  _document$head.appendChild(script);
              });
            } else if (typeof importScripts === 'function') {
              // Worker scripts
              if (asset.outputFormat === 'esmodule')
                return import(asset.url + '?t=' + Date.now());
              else
                return new Promise((resolve, reject) => {
                  try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                  } catch (err) {
                    reject(err);
                  }
                });
            }
          }
        }
        async function hmrApplyUpdates(assets) {
          global.parcelHotUpdate = Object.create(null);
          let scriptsToRemove;
          try {
            // If sourceURL comments aren't supported in eval, we need to load
            // the update from the dev server over HTTP so that stack traces
            // are correct in errors/logs. This is much slower than eval, so
            // we only do it if needed (currently just Safari).
            // https://bugs.webkit.org/show_bug.cgi?id=137297
            // This path is also taken if a CSP disallows eval.
            if (!supportsSourceURL) {
              let promises = assets.map((asset) => {
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null ||
                  _hmrDownload === void 0
                  ? void 0
                  : _hmrDownload.catch((err) => {
                      // Web extension bugfix for Chromium
                      // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                      if (
                        extCtx &&
                        extCtx.runtime &&
                        extCtx.runtime.getManifest().manifest_version == 3
                      ) {
                        if (
                          typeof ServiceWorkerGlobalScope != 'undefined' &&
                          global instanceof ServiceWorkerGlobalScope
                        ) {
                          extCtx.runtime.reload();
                          return;
                        }
                        asset.url = extCtx.runtime.getURL(
                          '/__parcel_hmr_proxy__?url=' +
                            encodeURIComponent(asset.url + '?t=' + Date.now()),
                        );
                        return hmrDownload(asset);
                      }
                      throw err;
                    });
              });
              scriptsToRemove = await Promise.all(promises);
            }
            assets.forEach(function (asset) {
              hmrApply(module.bundle.root, asset);
            });
          } finally {
            delete global.parcelHotUpdate;
            if (scriptsToRemove)
              scriptsToRemove.forEach((script) => {
                if (script) {
                  var _document$head2;
                  (_document$head2 = document.head) === null ||
                    _document$head2 === void 0 ||
                    _document$head2.removeChild(script);
                }
              });
          }
        }
        function hmrApply(bundle, asset) {
          var modules = bundle.modules;
          if (!modules) return;
          if (asset.type === 'css') reloadCSS();
          else if (asset.type === 'js') {
            let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
            if (deps) {
              if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for (let dep in oldDeps)
                  if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                  }
              }
              if (supportsSourceURL)
                // Global eval. We would use `new Function` here but browser
                // support for source maps is better with eval.
                (0, eval)(asset.output);
              // $FlowFixMe
              let fn = global.parcelHotUpdate[asset.id];
              modules[asset.id] = [fn, deps];
            } else if (bundle.parent) hmrApply(bundle.parent, asset);
          }
        }
        function hmrDelete(bundle, id) {
          let modules = bundle.modules;
          if (!modules) return;
          if (modules[id]) {
            // Collect dependencies that will become orphaned when this module is deleted.
            let deps = modules[id][1];
            let orphans = [];
            for (let dep in deps) {
              let parents = getParents(module.bundle.root, deps[dep]);
              if (parents.length === 1) orphans.push(deps[dep]);
            } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
            delete modules[id];
            delete bundle.cache[id]; // Now delete the orphans.
            orphans.forEach((id) => {
              hmrDelete(module.bundle.root, id);
            });
          } else if (bundle.parent) hmrDelete(bundle.parent, id);
        }
        function hmrAcceptCheck(bundle, id, depsByBundle) {
          if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
          // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
          let parents = getParents(module.bundle.root, id);
          let accepted = false;
          while (parents.length > 0) {
            let v = parents.shift();
            let a = hmrAcceptCheckOne(v[0], v[1], null);
            if (a)
              // If this parent accepts, stop traversing upward, but still consider siblings.
              accepted = true;
            else {
              // Otherwise, queue the parents in the next level upward.
              let p = getParents(module.bundle.root, v[1]);
              if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
              }
              parents.push(...p);
            }
          }
          return accepted;
        }
        function hmrAcceptCheckOne(bundle, id, depsByBundle) {
          var modules = bundle.modules;
          if (!modules) return;
          if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
            // If we reached the root bundle without finding where the asset should go,
            // there's nothing to do. Mark as "accepted" so we don't reload the page.
            if (!bundle.parent) return true;
            return hmrAcceptCheck(bundle.parent, id, depsByBundle);
          }
          if (checkedAssets[id]) return true;
          checkedAssets[id] = true;
          var cached = bundle.cache[id];
          assetsToAccept.push([bundle, id]);
          if (!cached || (cached.hot && cached.hot._acceptCallbacks.length))
            return true;
        }
        function hmrAcceptRun(bundle, id) {
          var cached = bundle.cache[id];
          bundle.hotData = {};
          if (cached && cached.hot) cached.hot.data = bundle.hotData;
          if (cached && cached.hot && cached.hot._disposeCallbacks.length)
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData);
            });
          delete bundle.cache[id];
          bundle(id);
          cached = bundle.cache[id];
          if (cached && cached.hot && cached.hot._acceptCallbacks.length)
            cached.hot._acceptCallbacks.forEach(function (cb) {
              var assetsToAlsoAccept = cb(function () {
                return getParents(module.bundle.root, id);
              });
              if (assetsToAlsoAccept && assetsToAccept.length)
                // $FlowFixMe[method-unbinding]
                assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
            });
          acceptedAssets[id] = true;
        }
      },
      {},
    ],
    h7u1C: [
      function (require, module, exports) {
        var _404 = require('./views/404/404');
        var _500 = require('./views/500/500');
        var _signIn = require('./views/auth/signIn/signIn');
        var _signUp = require('./views/auth/signUp/signUp');
        var _chat = require('./views/chat/chat');
        var _profile = require('./views/profile/profile');
        var _profileUpdateInfo = require('./views/profile/profile-update-info/profile-update-info');
        var _profileUpdatePassword = require('./views/profile/profile-update-password/profile-update-password');
        window.addEventListener('DOMContentLoaded', () => {
          const root = document.querySelector('#app');
          const page404 = new (0, _404.Page404)({
            errorMessageCode: '404',
            errorMessageText: 'Не туда попали',
            href: '/',
            message: 'Назад',
          });
          root.append(page404.getContent());
          page404.dispatchComponentDidMount();
          const page500 = new (0, _500.Page500)({
            errorMessageCode: '500',
            errorMessageText: 'Мы уже фиксим',
            href: '/',
            message: 'Назад',
          });
          root.append(page500.getContent());
          page500.dispatchComponentDidMount();
          const signIn = new (0, _signIn.SignIn)({
            title: 'Войти',
          });
          root.append(signIn.getContent());
          signIn.dispatchComponentDidMount();
          const signUp = new (0, _signUp.SignUp)({
            title: 'Регистрация',
          });
          root.append(signUp.getContent());
          signUp.dispatchComponentDidMount();
          const chat = new (0, _chat.Chat)({
            title: 'Регистрация',
          });
          root.append(chat.getContent());
          chat.dispatchComponentDidMount();
          const profile = new (0, _profile.Profile)();
          root.append(profile.getContent());
          profile.dispatchComponentDidMount();
          const profileInfo = new (0, _profileUpdateInfo.ProfileUpdateInfo)();
          root.append(profileInfo.getContent());
          profileInfo.dispatchComponentDidMount();
          const profilePassword = new (0,
          _profileUpdatePassword.ProfileUpdatePassword)();
          root.append(profilePassword.getContent());
          profilePassword.dispatchComponentDidMount();
        });
      },
      {
        './views/404/404': 'jdYBb',
        './views/500/500': 'duaVG',
        './views/auth/signIn/signIn': '3obpV',
        './views/auth/signUp/signUp': 'a0k7a',
        './views/profile/profile': 'atLqU',
        './views/profile/profile-update-info/profile-update-info': 'ccqqq',
        './views/profile/profile-update-password/profile-update-password':
          '9xaGY',
        './views/chat/chat': '7K3pv',
      },
    ],
    jdYBb: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'Page404', () => Page404);
        var _block = require('../../utils/block/block');
        var _linkMixin = require('../../components/links/link-mixin');
        var _404Pug = require('./404.pug');
        var _404PugDefault = parcelHelpers.interopDefault(_404Pug);
        var _404Scss = require('./404.scss');
        class Page404 extends (0, _block.Block) {
          constructor(props) {
            super('main', props);
          }
          init() {
            this.children.link = new (0, _linkMixin.BaseLink)({
              content: 'Назад к чатам',
              href: '/',
            });
          }
          render() {
            return this.compile((0, _404PugDefault.default), this.props);
          }
        }
      },
      {
        '../../utils/block/block': '7JIRe',
        '../../components/links/link-mixin': 'hFVRB',
        './404.pug': '3Y3MW',
        './404.scss': 'j0zNP',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '7JIRe': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        // Нельзя создавать экземпляр данного класса
        parcelHelpers.export(exports, 'Block', () => Block);
        var _eventBus = require('../event-bus/event-bus');
        var _uuid = require('uuid');
        class Block {
          static EVENTS = {
            INIT: 'init',
            FLOW_CDM: 'flow:component-did-mount',
            FLOW_CDU: 'flow:component-did-update',
            FLOW_RENDER: 'flow:render',
          };
          id = (0, _uuid.v4)();
          _element = null;
          constructor(tagName = 'div', propsWithChildren) {
            const eventBus = new (0, _eventBus.EventBus)();
            const { props, children } =
              this._getChildrenAndProps(propsWithChildren);
            this._meta = {
              tagName,
              props: props,
            };
            this.children = children;
            this.props = this._makePropsProxy(props);
            this.eventBus = () => eventBus;
            this._registerEvents(eventBus);
            eventBus.emit(Block.EVENTS.INIT);
          }
          _getChildrenAndProps(childrenAndProps) {
            const props = {};
            const children = {};
            Object.entries(childrenAndProps).forEach(([key, value]) => {
              if (
                Array.isArray(value) &&
                value.every((v) => v instanceof Block)
              )
                children[key] = value;
              else if (value instanceof Block) children[key] = value;
              else props[key] = value;
            });
            return {
              props: props,
              children,
            };
          }
          _addEvents() {
            const { events = {} } = this.props;
            Object.keys(events).forEach((eventName) => {
              this._element?.addEventListener(eventName, events[eventName]);
            });
          }
          _registerEvents(eventBus) {
            eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
            eventBus.on(
              Block.EVENTS.FLOW_CDM,
              this._componentDidMount.bind(this),
            );
            eventBus.on(
              Block.EVENTS.FLOW_CDU,
              this._componentDidUpdate.bind(this),
            );
            eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
          }
          _createResources() {
            const { tagName } = this._meta;
            this._element = this._createDocumentElement(tagName);
          }
          _init() {
            this._createResources();
            this.init();
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
          }
          init() {}
          _componentDidMount() {
            this.componentDidMount();
          }
          componentDidMount() {}
          dispatchComponentDidMount() {
            this.eventBus().emit(Block.EVENTS.FLOW_CDM);
            Object.values(this.children).forEach((child) => {
              if (Array.isArray(child))
                child.forEach((ch) => ch.dispatchComponentDidMount());
              else child.dispatchComponentDidMount();
            });
          }
          _componentDidUpdate(oldProps, newProps) {
            if (this.componentDidUpdate(oldProps, newProps))
              this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
          }
          componentDidUpdate(oldProps, newProps) {
            return true;
          }
          setProps = (nextProps) => {
            if (!nextProps) return;
            Object.assign(this.props, nextProps);
          };
          get element() {
            return this._element;
          }
          _render() {
            const fragment = this.render();
            this._element.innerHTML = '';
            this._element.append(fragment);
            this._addEvents();
          }
          compile(template, context) {
            const contextAndStubs = {
              ...context,
            };
            Object.entries(this.children).forEach(([name, component]) => {
              if (Array.isArray(component))
                contextAndStubs[name] = component.map(
                  (child) => `<div data-id="${child.id}"></div>`,
                );
              else
                contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
            });
            const html = template(contextAndStubs);
            const temp = document.createElement('template');
            temp.innerHTML = html;
            const replaceStub = (component) => {
              const stub = temp.content.querySelector(
                `[data-id="${component.id}"]`,
              );
              if (!stub) return;
              component.getContent()?.append(...Array.from(stub.childNodes));
              stub.replaceWith(component.getContent());
            };
            Object.entries(this.children).forEach(([_, component]) => {
              if (Array.isArray(component)) component.forEach(replaceStub);
              else replaceStub(component);
            });
            return temp.content;
          }
          render() {
            return new DocumentFragment();
          }
          getContent() {
            return this.element;
          }
          _makePropsProxy(props) {
            // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
            const self = this;
            return new Proxy(props, {
              get(target, prop) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
              },
              set(target, prop, value) {
                const oldTarget = {
                  ...target,
                };
                target[prop] = value;
                // Запускаем обновление компоненты
                // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
              },
              deleteProperty() {
                throw new Error('Нет доступа');
              },
            });
          }
          _createDocumentElement(tagName) {
            // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
            return document.createElement(tagName);
          }
          show() {
            this.getContent().style.display = 'block';
          }
          hide() {
            this.getContent().style.display = 'none';
          }
          validateBlock(event) {}
        }
      },
      {
        '../event-bus/event-bus': 'cG5FF',
        uuid: 'j4KJi',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    cG5FF: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'EventBus', () => EventBus);
        class EventBus {
          constructor() {
            this.listeners = {};
          }
          on(event, handler) {
            if (!this.listeners[event]) this.listeners[event] = [];
            this.listeners[event].push(handler);
          }
          off(event, handler) {
            if (!this.listeners[event])
              throw new Event(`Нет события: ${event}`);
            this.listeners[event] = this.listeners[event].filter(
              (listener) => listener !== handler,
            );
          }
          emit(event, ...args) {
            if (!this.listeners[event])
              throw new Event(`Нет события: ${event}`);
            this.listeners[event].forEach((listener) => listener(...args));
          }
        }
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    gkKU3: [
      function (require, module, exports) {
        exports.interopDefault = function (a) {
          return a && a.__esModule
            ? a
            : {
                default: a,
              };
        };
        exports.defineInteropFlag = function (a) {
          Object.defineProperty(a, '__esModule', {
            value: true,
          });
        };
        exports.exportAll = function (source, dest) {
          Object.keys(source).forEach(function (key) {
            if (
              key === 'default' ||
              key === '__esModule' ||
              dest.hasOwnProperty(key)
            )
              return;
            Object.defineProperty(dest, key, {
              enumerable: true,
              get: function () {
                return source[key];
              },
            });
          });
          return dest;
        };
        exports.export = function (dest, destName, get) {
          Object.defineProperty(dest, destName, {
            enumerable: true,
            get: get,
          });
        };
      },
      {},
    ],
    j4KJi: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'v1', () => (0, _v1JsDefault.default));
        parcelHelpers.export(exports, 'v3', () => (0, _v3JsDefault.default));
        parcelHelpers.export(exports, 'v4', () => (0, _v4JsDefault.default));
        parcelHelpers.export(exports, 'v5', () => (0, _v5JsDefault.default));
        parcelHelpers.export(exports, 'NIL', () => (0, _nilJsDefault.default));
        parcelHelpers.export(
          exports,
          'version',
          () => (0, _versionJsDefault.default),
        );
        parcelHelpers.export(
          exports,
          'validate',
          () => (0, _validateJsDefault.default),
        );
        parcelHelpers.export(
          exports,
          'stringify',
          () => (0, _stringifyJsDefault.default),
        );
        parcelHelpers.export(
          exports,
          'parse',
          () => (0, _parseJsDefault.default),
        );
        var _v1Js = require('./v1.js');
        var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
        var _v3Js = require('./v3.js');
        var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
        var _v4Js = require('./v4.js');
        var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
        var _v5Js = require('./v5.js');
        var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
        var _nilJs = require('./nil.js');
        var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
        var _versionJs = require('./version.js');
        var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
        var _validateJs = require('./validate.js');
        var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
        var _stringifyJs = require('./stringify.js');
        var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
        var _parseJs = require('./parse.js');
        var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
      },
      {
        './v1.js': false,
        './v3.js': false,
        './v4.js': '8zJtu',
        './v5.js': false,
        './nil.js': false,
        './version.js': false,
        './validate.js': 'eHPgI',
        './stringify.js': '5Y9F1',
        './parse.js': false,
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '8zJtu': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _nativeJs = require('./native.js');
        var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
        var _rngJs = require('./rng.js');
        var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
        var _stringifyJs = require('./stringify.js');
        function v4(options, buf, offset) {
          if ((0, _nativeJsDefault.default).randomUUID && !buf && !options)
            return (0, _nativeJsDefault.default).randomUUID();
          options = options || {};
          const rnds =
            options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
          rnds[6] = (rnds[6] & 0x0f) | 0x40;
          rnds[8] = (rnds[8] & 0x3f) | 0x80; // Copy bytes to buffer, if provided
          if (buf) {
            offset = offset || 0;
            for (let i = 0; i < 16; ++i) buf[offset + i] = rnds[i];
            return buf;
          }
          return (0, _stringifyJs.unsafeStringify)(rnds);
        }
        exports.default = v4;
      },
      {
        './native.js': 'lYayS',
        './rng.js': '2psyE',
        './stringify.js': '5Y9F1',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    lYayS: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        const randomUUID =
          typeof crypto !== 'undefined' &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto);
        exports.default = {
          randomUUID,
        };
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '2psyE': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        // Unique ID creation requires a high quality random # generator. In the browser we therefore
        // require the crypto API and do not support built-in fallback to lower quality random number
        // generators (like Math.random()).
        let getRandomValues;
        const rnds8 = new Uint8Array(16);
        function rng() {
          // lazy load so that environments that need to polyfill have a chance to do so
          if (!getRandomValues) {
            // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
            getRandomValues =
              typeof crypto !== 'undefined' &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto);
            if (!getRandomValues)
              throw new Error(
                'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
              );
          }
          return getRandomValues(rnds8);
        }
        exports.default = rng;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '5Y9F1': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'unsafeStringify', () => unsafeStringify);
        var _validateJs = require('./validate.js');
        var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
        /**
         * Convert array of 16 byte values to UUID string format of the form:
         * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
         */ const byteToHex = [];
        for (let i = 0; i < 256; ++i)
          byteToHex.push((i + 0x100).toString(16).slice(1));
        function unsafeStringify(arr, offset = 0) {
          // Note: Be careful editing this code!  It's been tuned for performance
          // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
          return (
            byteToHex[arr[offset + 0]] +
            byteToHex[arr[offset + 1]] +
            byteToHex[arr[offset + 2]] +
            byteToHex[arr[offset + 3]] +
            '-' +
            byteToHex[arr[offset + 4]] +
            byteToHex[arr[offset + 5]] +
            '-' +
            byteToHex[arr[offset + 6]] +
            byteToHex[arr[offset + 7]] +
            '-' +
            byteToHex[arr[offset + 8]] +
            byteToHex[arr[offset + 9]] +
            '-' +
            byteToHex[arr[offset + 10]] +
            byteToHex[arr[offset + 11]] +
            byteToHex[arr[offset + 12]] +
            byteToHex[arr[offset + 13]] +
            byteToHex[arr[offset + 14]] +
            byteToHex[arr[offset + 15]]
          ).toLowerCase();
        }
        function stringify(arr, offset = 0) {
          const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
          // of the following:
          // - One or more input array values don't map to a hex octet (leading to
          // "undefined" in the uuid)
          // - Invalid input values for the RFC `version` or `variant` fields
          if (!(0, _validateJsDefault.default)(uuid))
            throw TypeError('Stringified UUID is invalid');
          return uuid;
        }
        exports.default = stringify;
      },
      {
        './validate.js': 'eHPgI',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    eHPgI: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        var _regexJs = require('./regex.js');
        var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
        function validate(uuid) {
          return (
            typeof uuid === 'string' && (0, _regexJsDefault.default).test(uuid)
          );
        }
        exports.default = validate;
      },
      {
        './regex.js': 'bUa5g',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    bUa5g: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        exports.default =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    hFVRB: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'BaseLink', () => BaseLink);
        var _block = require('../../utils/block/block');
        var _linkMixinPug = require('./link-mixin.pug');
        var _linkMixinPugDefault = parcelHelpers.interopDefault(_linkMixinPug);
        var _linkMixinScss = require('./link-mixin.scss');
        class BaseLink extends (0, _block.Block) {
          constructor(props) {
            super('div', props);
          }
          render() {
            return this.compile((0, _linkMixinPugDefault.default), this.props);
          }
        }
      },
      {
        '../../utils/block/block': '7JIRe',
        './link-mixin.pug': '8DFGZ',
        './link-mixin.scss': '1RH0k',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '8DFGZ': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_attr(t, e, n, r) {
          if (!1 === e || null == e || (!e && ('class' === t || 'style' === t)))
            return '';
          if (!0 === e) return ' ' + (r ? t : t + '="' + t + '"');
          var f = typeof e;
          return (
            ('object' !== f && 'function' !== f) ||
              'function' != typeof e.toJSON ||
              (e = e.toJSON()),
            'string' == typeof e ||
            ((e = JSON.stringify(e)), n || -1 === e.indexOf('"'))
              ? (n && (e = pug_escape(e)), ' ' + t + '="' + e + '"')
              : ' ' + t + "='" + e.replace(/'/g, '&#39;') + "'"
          );
        }
        function pug_classes(s, r) {
          return Array.isArray(s)
            ? pug_classes_array(s, r)
            : s && 'object' == typeof s
            ? pug_classes_object(s)
            : s || '';
        }
        function pug_classes_array(r, a) {
          for (
            var s, e = '', u = '', c = Array.isArray(a), g = 0;
            g < r.length;
            g++
          )
            (s = pug_classes(r[g])) &&
              (c && a[g] && (s = pug_escape(s)), (e = e + u + s), (u = ' '));
          return e;
        }
        function pug_classes_object(r) {
          var a = '',
            n = '';
          for (var o in r)
            o &&
              r[o] &&
              pug_has_own_property.call(r, o) &&
              ((a = a + n + o), (n = ' '));
          return a;
        }
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_has_own_property = Object.prototype.hasOwnProperty;
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (content1, extraClass1, href1) {
            pug_html =
              pug_html +
              '<div' +
              pug_attr(
                'class',
                pug_classes([`link ${extraClass1 || ''}`], [true]),
                false,
                false,
              ) +
              '><a' +
              pug_attr('href', href1, true, false) +
              '>' +
              pug_escape(null == (pug_interp = content1) ? '' : pug_interp) +
              '</a></div>';
          }.call(
            this,
            'content' in locals_for_with
              ? locals_for_with.content
              : typeof content !== 'undefined'
              ? content
              : undefined,
            'extraClass' in locals_for_with
              ? locals_for_with.extraClass
              : typeof extraClass !== 'undefined'
              ? extraClass
              : undefined,
            'href' in locals_for_with
              ? locals_for_with.href
              : typeof href !== 'undefined'
              ? href
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '1RH0k': [function () {}, {}],
    '3Y3MW': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (errorMessageCode1, errorMessageText1, link1) {
            pug_html =
              pug_html +
              '<script type="module" src="~/src/layouts/main-layout/main-layout.ts"></script><div class="main-layout"><div class="error-message"><div class="error-message__code">' +
              pug_escape(
                null == (pug_interp = errorMessageCode1) ? '' : pug_interp,
              ) +
              '</div><div class="error-message__text">' +
              pug_escape(
                null == (pug_interp = errorMessageText1) ? '' : pug_interp,
              ) +
              '</div><div class="error-message__link">' +
              (null == (pug_interp = link1) ? '' : pug_interp) +
              '</div></div></div>';
          }.call(
            this,
            'errorMessageCode' in locals_for_with
              ? locals_for_with.errorMessageCode
              : typeof errorMessageCode !== 'undefined'
              ? errorMessageCode
              : undefined,
            'errorMessageText' in locals_for_with
              ? locals_for_with.errorMessageText
              : typeof errorMessageText !== 'undefined'
              ? errorMessageText
              : undefined,
            'link' in locals_for_with
              ? locals_for_with.link
              : typeof link !== 'undefined'
              ? link
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    j0zNP: [function () {}, {}],
    duaVG: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'Page500', () => Page500);
        var _block = require('../../utils/block/block');
        var _linkMixin = require('../../components/links/link-mixin');
        var _404Pug = require('../404/404.pug');
        var _404PugDefault = parcelHelpers.interopDefault(_404Pug);
        var _404Scss = require('../404/404.scss');
        class Page500 extends (0, _block.Block) {
          constructor(props) {
            super('main', props);
          }
          init() {
            this.children.link = new (0, _linkMixin.BaseLink)({
              content: 'Назад к чатам',
              href: '/',
            });
          }
          render() {
            return this.compile((0, _404PugDefault.default), this.props);
          }
        }
      },
      {
        '../../utils/block/block': '7JIRe',
        '../../components/links/link-mixin': 'hFVRB',
        '../404/404.pug': '3Y3MW',
        '../404/404.scss': 'j0zNP',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    j0zNP: [function () {}, {}],
    '3obpV': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'SignIn', () => SignIn);
        var _buttonMixin = require('../../../components/buttons/button-mixin');
        var _block = require('../../../utils/block/block');
        var _inputMixin = require('../../../components/inputs/input-mixin');
        var _linkMixin = require('../../../components/links/link-mixin');
        var _validator = require('../../../utils/validator/validator');
        var _serializer = require('../../../utils/serializer/serializer');
        var _signInPug = require('./signIn.pug');
        var _signInPugDefault = parcelHelpers.interopDefault(_signInPug);
        var _signInScss = require('./signIn.scss');
        class SignIn extends (0, _block.Block) {
          constructor(props) {
            super('main', props);
          }
          validateBlock(event) {
            const element = event.target;
            if ((0, _validator.validate)(element))
              element.classList.add('invalid');
            else element.classList.remove('invalid');
          }
          init() {
            this.children.login = new (0, _inputMixin.Input)({
              name: 'login',
              type: 'text',
              label: 'Логин',
              placeholder: '',
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.password = new (0, _inputMixin.Input)({
              name: 'password',
              type: 'password',
              label: 'Пароль',
              placeholder: '',
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.button = new (0, _buttonMixin.Button)({
              type: 'submit',
              content: 'Авторизоваться',
              btnClass: 'sign-in-btn',
              events: {
                click: (e) => this.onSubmit(e),
              },
            });
            this.children.link = new (0, _linkMixin.BaseLink)({
              content: 'Нет аккаунта?',
              href: '../signUp/signUp.pug',
            });
          }
          onSubmit(e) {
            const fields = ['login', 'password'];
            (0, _serializer.serializer)(e, fields);
          }
          render() {
            return this.compile((0, _signInPugDefault.default), this.props);
          }
        }
      },
      {
        '../../../components/buttons/button-mixin': 'b2XOX',
        '../../../utils/block/block': '7JIRe',
        '../../../components/inputs/input-mixin': '620c8',
        '../../../components/links/link-mixin': 'hFVRB',
        '../../../utils/validator/validator': '8Bbbi',
        '../../../utils/serializer/serializer': 'bnv1C',
        './signIn.pug': 'auXk3',
        './signIn.scss': 'agBBH',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    b2XOX: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'Button', () => Button);
        var _block = require('../../utils/block/block');
        var _buttonMixinPug = require('./button-mixin.pug');
        var _buttonMixinPugDefault =
          parcelHelpers.interopDefault(_buttonMixinPug);
        var _buttonMixinScss = require('./button-mixin.scss');
        class Button extends (0, _block.Block) {
          constructor(props) {
            super('div', props);
            this.element.classList.add('form-button');
          }
          render() {
            return this.compile(
              (0, _buttonMixinPugDefault.default),
              this.props,
            );
          }
        }
      },
      {
        '../../utils/block/block': '7JIRe',
        './button-mixin.pug': '7KZRY',
        './button-mixin.scss': 'gcuRt',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '7KZRY': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_attr(t, e, n, r) {
          if (!1 === e || null == e || (!e && ('class' === t || 'style' === t)))
            return '';
          if (!0 === e) return ' ' + (r ? t : t + '="' + t + '"');
          var f = typeof e;
          return (
            ('object' !== f && 'function' !== f) ||
              'function' != typeof e.toJSON ||
              (e = e.toJSON()),
            'string' == typeof e ||
            ((e = JSON.stringify(e)), n || -1 === e.indexOf('"'))
              ? (n && (e = pug_escape(e)), ' ' + t + '="' + e + '"')
              : ' ' + t + "='" + e.replace(/'/g, '&#39;') + "'"
          );
        }
        function pug_classes(s, r) {
          return Array.isArray(s)
            ? pug_classes_array(s, r)
            : s && 'object' == typeof s
            ? pug_classes_object(s)
            : s || '';
        }
        function pug_classes_array(r, a) {
          for (
            var s, e = '', u = '', c = Array.isArray(a), g = 0;
            g < r.length;
            g++
          )
            (s = pug_classes(r[g])) &&
              (c && a[g] && (s = pug_escape(s)), (e = e + u + s), (u = ' '));
          return e;
        }
        function pug_classes_object(r) {
          var a = '',
            n = '';
          for (var o in r)
            o &&
              r[o] &&
              pug_has_own_property.call(r, o) &&
              ((a = a + n + o), (n = ' '));
          return a;
        }
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_has_own_property = Object.prototype.hasOwnProperty;
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (btnClass1, content1, type1) {
            pug_html =
              pug_html +
              '<button' +
              (pug_attr(
                'class',
                pug_classes([`form-button ${btnClass1}`], [true]),
                false,
                false,
              ) +
                pug_attr('type', type1 || 'submit', true, false)) +
              '>' +
              pug_escape(null == (pug_interp = content1) ? '' : pug_interp) +
              '</button>';
          }.call(
            this,
            'btnClass' in locals_for_with
              ? locals_for_with.btnClass
              : typeof btnClass !== 'undefined'
              ? btnClass
              : undefined,
            'content' in locals_for_with
              ? locals_for_with.content
              : typeof content !== 'undefined'
              ? content
              : undefined,
            'type' in locals_for_with
              ? locals_for_with.type
              : typeof type !== 'undefined'
              ? type
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    gcuRt: [function () {}, {}],
    '620c8': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'Input', () => Input);
        var _block = require('../../utils/block/block');
        var _inputMixinPug = require('./input-mixin.pug');
        var _inputMixinPugDefault =
          parcelHelpers.interopDefault(_inputMixinPug);
        var _inputMixinScss = require('./input-mixin.scss');
        class Input extends (0, _block.Block) {
          constructor(props) {
            super('div', props);
            this.element.classList.add('input');
          }
          render() {
            return this.compile((0, _inputMixinPugDefault.default), this.props);
          }
        }
      },
      {
        '../../utils/block/block': '7JIRe',
        './input-mixin.pug': '1NLvE',
        './input-mixin.scss': 'aRzpE',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '1NLvE': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_attr(t, e, n, r) {
          if (!1 === e || null == e || (!e && ('class' === t || 'style' === t)))
            return '';
          if (!0 === e) return ' ' + (r ? t : t + '="' + t + '"');
          var f = typeof e;
          return (
            ('object' !== f && 'function' !== f) ||
              'function' != typeof e.toJSON ||
              (e = e.toJSON()),
            'string' == typeof e ||
            ((e = JSON.stringify(e)), n || -1 === e.indexOf('"'))
              ? (n && (e = pug_escape(e)), ' ' + t + '="' + e + '"')
              : ' ' + t + "='" + e.replace(/'/g, '&#39;') + "'"
          );
        }
        function pug_classes(s, r) {
          return Array.isArray(s)
            ? pug_classes_array(s, r)
            : s && 'object' == typeof s
            ? pug_classes_object(s)
            : s || '';
        }
        function pug_classes_array(r, a) {
          for (
            var s, e = '', u = '', c = Array.isArray(a), g = 0;
            g < r.length;
            g++
          )
            (s = pug_classes(r[g])) &&
              (c && a[g] && (s = pug_escape(s)), (e = e + u + s), (u = ' '));
          return e;
        }
        function pug_classes_object(r) {
          var a = '',
            n = '';
          for (var o in r)
            o &&
              r[o] &&
              pug_has_own_property.call(r, o) &&
              ((a = a + n + o), (n = ' '));
          return a;
        }
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_has_own_property = Object.prototype.hasOwnProperty;
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (label1, name1, placeholder1, type1) {
            pug_html =
              pug_html +
              '<label' +
              pug_attr(
                'class',
                pug_classes([`input__label ${name1}`], [true]),
                false,
                false,
              ) +
              '>' +
              pug_escape(
                null == (pug_interp = label1 || '') ? '' : pug_interp,
              ) +
              '</label><input' +
              (pug_attr(
                'class',
                pug_classes([`input__field-${name1}`], [true]),
                false,
                false,
              ) +
                pug_attr('type', `${type1}`, true, false) +
                pug_attr('name', `${name1}`, true, false) +
                pug_attr('placeholder', `${placeholder1 || ''}`, true, false) +
                pug_attr('required', true, true, false) +
                pug_attr('autofocus', true, true, false)) +
              '/>';
          }.call(
            this,
            'label' in locals_for_with
              ? locals_for_with.label
              : typeof label !== 'undefined'
              ? label
              : undefined,
            'name' in locals_for_with
              ? locals_for_with.name
              : typeof name !== 'undefined'
              ? name
              : undefined,
            'placeholder' in locals_for_with
              ? locals_for_with.placeholder
              : typeof placeholder !== 'undefined'
              ? placeholder
              : undefined,
            'type' in locals_for_with
              ? locals_for_with.type
              : typeof type !== 'undefined'
              ? type
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    aRzpE: [function () {}, {}],
    '8Bbbi': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'FieldName', () => FieldName);
        parcelHelpers.export(exports, 'validate', () => validate);
        let FieldName;
        (function (FieldName) {
          FieldName['Login'] = 'login';
          FieldName['Password'] = 'password';
          FieldName['Email'] = 'email';
          FieldName['RepeatPassword'] = 'repeatPassword';
          FieldName['FirstName'] = 'first_name';
          FieldName['SecondName'] = 'second_name';
          FieldName['Phone'] = 'phone';
          FieldName['OldPassword'] = 'oldPassword';
          FieldName['NewPassword'] = 'newPassword';
          FieldName['Message'] = 'message';
        })(FieldName || (FieldName = {}));
        function validate(element) {
          const { name, value } = element;
          if (name === FieldName.Login) {
            const isTextLoginValid = /^([0-9]*[a-zA-Z\-_][0-9]*)+$/.test(value);
            const isLengthLoginValid = value.length >= 3 && value.length < 20;
            if (!isLengthLoginValid || !isTextLoginValid)
              // if (value.length === 0) return false;
              return true;
            return null;
          }
          if (
            name === FieldName.Password ||
            name === FieldName.RepeatPassword ||
            name === FieldName.OldPassword ||
            name === FieldName.NewPassword
          ) {
            const isValidText = /^(.*([A-Z]+.*[0-9]+|[0-9]+.*[A-Z]+).*)+$/.test(
              value,
            );
            const isValidLength = value.length >= 8 && value.length < 40;
            if (!isValidText || !isValidLength)
              // if (value.length === 0) return false;
              return true;
            return null;
          }
          if (name === FieldName.FirstName || name === FieldName.SecondName) {
            const isValidValue = /^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/.test(value);
            if (!isValidValue)
              // if (value.length === 0) return false;
              return true;
            return null;
          }
          if (name === FieldName.Email) {
            const isValidValue1 = /^([\w-.]+@[a-zA-Z]+.[a-z]+)$/.test(value);
            if (!isValidValue1)
              // if (value.length === 0) return false;
              return true;
            return null;
          }
          if (name === FieldName.Phone) {
            const isValidValue2 = /^\+*[\d]{10,15}$/.test(value);
            if (!isValidValue2)
              // if (value.length === 0) return false;
              return true;
            return null;
          }
          if (name === FieldName.Message) {
            const isValidLength1 = value.length > 0;
            if (!isValidLength1)
              // if (value.length === 0) return false;
              return true;
            return null;
          }
        }
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    bnv1C: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'serializer', () => serializer);
        var _validator = require('../validator/validator');
        function serializer(event, fields) {
          debugger;
          event.preventDefault();
          const formData = {};
          let isFormValid = true;
          fields.map((field) => {
            const el = document.getElementsByName(field)[0];
            if ((0, _validator.validate)(el)) isFormValid = false;
            else {
              const name = el.getAttribute('name');
              const { value } = el;
              if (name) formData[name] = value;
            }
          });
          if (isFormValid) console.log(formData);
        }
      },
      {
        '../validator/validator': '8Bbbi',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    auXk3: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (button1, link1, login1, password1, title1) {
            pug_html =
              pug_html +
              '<script type="module" src="~/src/layouts/main-layout/main-layout.ts"></script><div class="main-layout"><main class="sign-in"><form class="sign-in__block" action="../../chat/chat.html"><div class="sign-in__block-title"><span class="sign-in__block-title-text">' +
              pug_escape(null == (pug_interp = title1) ? '' : pug_interp) +
              '</span></div><div class="sign-in__block-login-input">' +
              (null == (pug_interp = login1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = password1) ? '' : pug_interp) +
              '</div><div class="sign-in__block-auth-btn">' +
              (null == (pug_interp = button1) ? '' : pug_interp) +
              '</div><div class="sign-in__block-sign-up">' +
              (null == (pug_interp = link1) ? '' : pug_interp) +
              '</div></form></main></div>';
          }.call(
            this,
            'button' in locals_for_with
              ? locals_for_with.button
              : typeof button !== 'undefined'
              ? button
              : undefined,
            'link' in locals_for_with
              ? locals_for_with.link
              : typeof link !== 'undefined'
              ? link
              : undefined,
            'login' in locals_for_with
              ? locals_for_with.login
              : typeof login !== 'undefined'
              ? login
              : undefined,
            'password' in locals_for_with
              ? locals_for_with.password
              : typeof password !== 'undefined'
              ? password
              : undefined,
            'title' in locals_for_with
              ? locals_for_with.title
              : typeof title !== 'undefined'
              ? title
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    agBBH: [function () {}, {}],
    a0k7a: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'SignUp', () => SignUp);
        var _block = require('../../../utils/block/block');
        var _buttonMixin = require('../../../components/buttons/button-mixin');
        var _inputMixin = require('../../../components/inputs/input-mixin');
        var _linkMixin = require('../../../components/links/link-mixin');
        var _validator = require('../../../utils/validator/validator');
        var _serializer = require('../../../utils/serializer/serializer');
        var _signUpPug = require('./signUp.pug');
        var _signUpPugDefault = parcelHelpers.interopDefault(_signUpPug);
        var _signUpScss = require('./signUp.scss');
        class SignUp extends (0, _block.Block) {
          constructor(props) {
            super('main', props);
          }
          validateBlock(event) {
            const element = event.target;
            if ((0, _validator.validate)(element))
              element.classList.add('invalid');
            else element.classList.remove('invalid');
          }
          init() {
            this.children.email = new (0, _inputMixin.Input)({
              name: 'email',
              type: 'text',
              label: 'Почта',
              placeholder: '',
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.login = new (0, _inputMixin.Input)({
              name: 'login',
              type: 'text',
              label: 'Логин',
              placeholder: '',
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.firstName = new (0, _inputMixin.Input)({
              name: 'first_name',
              type: 'text',
              label: 'Имя',
              placeholder: '',
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.secondName = new (0, _inputMixin.Input)({
              name: 'second_name',
              type: 'text',
              label: 'Фамилия',
              placeholder: '',
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.phone = new (0, _inputMixin.Input)({
              name: 'phone',
              type: 'text',
              label: 'Телефон',
              placeholder: '',
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.password = new (0, _inputMixin.Input)({
              name: 'password',
              type: 'password',
              label: 'Пароль',
              placeholder: '',
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.repeatPassword = new (0, _inputMixin.Input)({
              name: 'repeatPassword',
              type: 'password',
              label: 'Пароль (ещё раз)',
              placeholder: '',
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.button = new (0, _buttonMixin.Button)({
              type: 'submit',
              content: 'Зарегистрироваться',
              btnClass: 'sign-up',
              events: {
                click: (e) => this.onSubmit(e),
              },
            });
            this.children.link = new (0, _linkMixin.BaseLink)({
              content: 'Войти',
              href: '../../chat/chat.pug',
            });
          }
          onSubmit(e) {
            e.preventDefault();
            const fields = [
              'email',
              'login',
              'first_name',
              'second_name',
              'phone',
              'password',
              'repeatPassword',
            ];
            (0, _serializer.serializer)(e, fields);
          }
          render() {
            return this.compile((0, _signUpPugDefault.default), this.props);
          }
        }
      },
      {
        '../../../utils/block/block': '7JIRe',
        '../../../components/buttons/button-mixin': 'b2XOX',
        '../../../components/inputs/input-mixin': '620c8',
        '../../../components/links/link-mixin': 'hFVRB',
        '../../../utils/validator/validator': '8Bbbi',
        '../../../utils/serializer/serializer': 'bnv1C',
        './signUp.pug': '25UI5',
        './signUp.scss': '7T7S7',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '25UI5': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (
            button1,
            email1,
            firstName1,
            link1,
            login1,
            password1,
            phone1,
            repeatPassword1,
            secondName1,
            title1,
          ) {
            pug_html =
              pug_html +
              '<script type="module" src="~/src/layouts/main-layout/main-layout.ts"></script><div class="main-layout"><main class="signUp"><form class="signUp__block" action="../../chat/chat.html"><div class="signUp__block-title"><span class="sign-in__title">' +
              pug_escape(null == (pug_interp = title1) ? '' : pug_interp) +
              '</span></div><div class="signUp__block-user-info-input">' +
              (null == (pug_interp = email1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = login1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = firstName1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = secondName1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = phone1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = password1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = repeatPassword1) ? '' : pug_interp) +
              '</div><div class="signUp__block-auth-btn">' +
              (null == (pug_interp = button1) ? '' : pug_interp) +
              '</div><div class="signUp__block-signUp">' +
              (null == (pug_interp = link1) ? '' : pug_interp) +
              '</div></form></main></div>';
          }.call(
            this,
            'button' in locals_for_with
              ? locals_for_with.button
              : typeof button !== 'undefined'
              ? button
              : undefined,
            'email' in locals_for_with
              ? locals_for_with.email
              : typeof email !== 'undefined'
              ? email
              : undefined,
            'firstName' in locals_for_with
              ? locals_for_with.firstName
              : typeof firstName !== 'undefined'
              ? firstName
              : undefined,
            'link' in locals_for_with
              ? locals_for_with.link
              : typeof link !== 'undefined'
              ? link
              : undefined,
            'login' in locals_for_with
              ? locals_for_with.login
              : typeof login !== 'undefined'
              ? login
              : undefined,
            'password' in locals_for_with
              ? locals_for_with.password
              : typeof password !== 'undefined'
              ? password
              : undefined,
            'phone' in locals_for_with
              ? locals_for_with.phone
              : typeof phone !== 'undefined'
              ? phone
              : undefined,
            'repeatPassword' in locals_for_with
              ? locals_for_with.repeatPassword
              : typeof repeatPassword !== 'undefined'
              ? repeatPassword
              : undefined,
            'secondName' in locals_for_with
              ? locals_for_with.secondName
              : typeof secondName !== 'undefined'
              ? secondName
              : undefined,
            'title' in locals_for_with
              ? locals_for_with.title
              : typeof title !== 'undefined'
              ? title
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '7T7S7': [function () {}, {}],
    atLqU: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'Profile', () => Profile);
        var _block = require('../../utils/block/block');
        var _profileCardMixin = require('../../components/profile-card/profile-card-mixin');
        var _profilePug = require('./profile.pug');
        var _profilePugDefault = parcelHelpers.interopDefault(_profilePug);
        var _profileScss = require('./profile.scss');
        class Profile extends (0, _block.Block) {
          constructor() {
            super('main', {});
          }
          init() {
            this.children.profileCard = new (0, _profileCardMixin.ProfileCard)({
              userInfoName: 'testers',
              img: 'src',
            });
          }
          render() {
            return this.compile((0, _profilePugDefault.default), this.props);
          }
        }
      },
      {
        '../../utils/block/block': '7JIRe',
        '../../components/profile-card/profile-card-mixin': '7LaZX',
        './profile.pug': '9EdaA',
        './profile.scss': 'd6Zzk',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '7LaZX': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'ProfileCard', () => ProfileCard);
        var _block = require('../../utils/block/block');
        var _profileInputMixin = require('../inputs/profile-inputs/profile-input-mixin');
        var _linkMixin = require('../links/link-mixin');
        var _profileCardMixinPug = require('./profile-card-mixin.pug');
        var _profileCardMixinPugDefault =
          parcelHelpers.interopDefault(_profileCardMixinPug);
        var _profileCardMixinScss = require('./profile-card-mixin.scss');
        class ProfileCard extends (0, _block.Block) {
          constructor(props) {
            super('main', props);
            this.element.classList.add('profile-card');
          }
          init() {
            this.children.email = new (0, _profileInputMixin.ProfileCardInput)({
              name: 'email',
              type: 'text',
              label: 'Почта',
              body: 'temp@a.ru',
            });
            this.children.login = new (0, _profileInputMixin.ProfileCardInput)({
              name: 'login',
              type: 'text',
              label: 'Логин',
              body: 'ivan',
            });
            this.children.name = new (0, _profileInputMixin.ProfileCardInput)({
              name: 'name',
              type: 'text',
              label: 'Имя',
              body: 'iv',
            });
            this.children.secondName = new (0,
            _profileInputMixin.ProfileCardInput)({
              name: 'second_name',
              type: 'text',
              label: 'Фамилия',
              body: 'test',
            });
            this.children.username = new (0,
            _profileInputMixin.ProfileCardInput)({
              name: 'username',
              type: 'text',
              label: 'Имя в чате',
              body: 'tester',
            });
            this.children.phone = new (0, _profileInputMixin.ProfileCardInput)({
              name: 'phone',
              type: 'text',
              label: 'Телефон',
              body: '+7 (123) 123 12 32',
            });
            this.children.updateInfoLink = new (0, _linkMixin.BaseLink)({
              content: 'Изменить данные',
              href: '../../views/profile/profile-update-info/profile-update-info.pug',
              extraClass: 'profile__link',
            });
            this.children.updatePasswordLink = new (0, _linkMixin.BaseLink)({
              content: 'Изменить пароль',
              href: '../../views/profile/profile-update-password/profile-update-password.pug',
              extraClass: 'profile__link',
            });
            this.children.exitLink = new (0, _linkMixin.BaseLink)({
              content: 'Выйти',
              href: '../../views/chat/chat.pug',
              extraClass: 'profile__link_exit',
            });
          }
          // onSubmit() {
          //   const values = Object
          //     .values(this.children)
          //     .filter(child => child instanceof Input)
          //     .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))
          //   const data = Object.fromEntries(values);
          //   AuthController.signin(data as SignupData);
          // }
          render() {
            return this.compile(
              (0, _profileCardMixinPugDefault.default),
              this.props,
            );
          }
        }
      },
      {
        '../../utils/block/block': '7JIRe',
        '../inputs/profile-inputs/profile-input-mixin': '8Zck1',
        '../links/link-mixin': 'hFVRB',
        './profile-card-mixin.pug': '8h4qM',
        './profile-card-mixin.scss': 'e2MiP',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '8Zck1': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(
          exports,
          'ProfileCardInput',
          () => ProfileCardInput,
        );
        var _block = require('../../../utils/block/block');
        var _profileInputMixinPug = require('./profile-input-mixin.pug');
        var _profileInputMixinPugDefault = parcelHelpers.interopDefault(
          _profileInputMixinPug,
        );
        var _profileInputMixinScss = require('./profile-input-mixin.scss');
        class ProfileCardInput extends (0, _block.Block) {
          constructor(props) {
            super('div', props);
            this.element.classList.add('profile-card__field');
          }
          // onSubmit() {
          //   const values = Object
          //     .values(this.children)
          //     .filter(child => child instanceof Input)
          //     .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))
          //   const data = Object.fromEntries(values);
          //   AuthController.signin(data as SignupData);
          // }
          render() {
            return this.compile(
              (0, _profileInputMixinPugDefault.default),
              this.props,
            );
          }
        }
      },
      {
        '../../../utils/block/block': '7JIRe',
        './profile-input-mixin.pug': 'k6H16',
        './profile-input-mixin.scss': '8aVxu',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    k6H16: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_attr(t, e, n, r) {
          if (!1 === e || null == e || (!e && ('class' === t || 'style' === t)))
            return '';
          if (!0 === e) return ' ' + (r ? t : t + '="' + t + '"');
          var f = typeof e;
          return (
            ('object' !== f && 'function' !== f) ||
              'function' != typeof e.toJSON ||
              (e = e.toJSON()),
            'string' == typeof e ||
            ((e = JSON.stringify(e)), n || -1 === e.indexOf('"'))
              ? (n && (e = pug_escape(e)), ' ' + t + '="' + e + '"')
              : ' ' + t + "='" + e.replace(/'/g, '&#39;') + "'"
          );
        }
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (body1, is_input1, label1, name1, type1) {
            pug_html =
              pug_html +
              '<span class="profile-card__field__title">' +
              pug_escape(null == (pug_interp = label1) ? '' : pug_interp) +
              '</span>';
            if (is_input1)
              pug_html =
                pug_html +
                '<input' +
                (' class="input__field profile-card__field__body"' +
                  pug_attr('type', `${type1}`, true, false) +
                  pug_attr('name', name1, true, false) +
                  pug_attr('value', `${body1 || ''}`, true, false) +
                  pug_attr('required', true, true, false) +
                  pug_attr('autofocus', true, true, false)) +
                '/>';
            else
              pug_html =
                pug_html +
                '<span class="profile-card__field__body">' +
                pug_escape(null == (pug_interp = body1) ? '' : pug_interp) +
                '</span>';
          }.call(
            this,
            'body' in locals_for_with
              ? locals_for_with.body
              : typeof body !== 'undefined'
              ? body
              : undefined,
            'is_input' in locals_for_with
              ? locals_for_with.is_input
              : typeof is_input !== 'undefined'
              ? is_input
              : undefined,
            'label' in locals_for_with
              ? locals_for_with.label
              : typeof label !== 'undefined'
              ? label
              : undefined,
            'name' in locals_for_with
              ? locals_for_with.name
              : typeof name !== 'undefined'
              ? name
              : undefined,
            'type' in locals_for_with
              ? locals_for_with.type
              : typeof type !== 'undefined'
              ? type
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '8aVxu': [function () {}, {}],
    '8h4qM': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (
            email1,
            exitLink1,
            firstName1,
            img1,
            login1,
            secondName1,
            updateInfoLink1,
            updatePasswordLink1,
            userInfoName1,
            username1,
          ) {
            pug_html =
              pug_html +
              '<div class="profile-card__user-info"><div class="profile-card__user-info-avatar">' +
              pug_escape(null == (pug_interp = img1) ? '' : pug_interp) +
              '</div><div class="profile-card__user-info-name">' +
              pug_escape(
                null == (pug_interp = userInfoName1) ? '' : pug_interp,
              ) +
              '</div></div><div class="profile-card__block"><div class="profile-card__fields"> ' +
              (null == (pug_interp = email1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = login1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = firstName1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = secondName1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = username1) ? '' : pug_interp) +
              '</div><div class="profile-card__actions"><div class="profile-card__field">' +
              (null == (pug_interp = updateInfoLink1) ? '' : pug_interp) +
              '</div><div class="profile-card__field">' +
              (null == (pug_interp = updatePasswordLink1) ? '' : pug_interp) +
              '</div><div class="profile-card__field">   ' +
              (null == (pug_interp = exitLink1) ? '' : pug_interp) +
              '</div></div></div>';
          }.call(
            this,
            'email' in locals_for_with
              ? locals_for_with.email
              : typeof email !== 'undefined'
              ? email
              : undefined,
            'exitLink' in locals_for_with
              ? locals_for_with.exitLink
              : typeof exitLink !== 'undefined'
              ? exitLink
              : undefined,
            'firstName' in locals_for_with
              ? locals_for_with.firstName
              : typeof firstName !== 'undefined'
              ? firstName
              : undefined,
            'img' in locals_for_with
              ? locals_for_with.img
              : typeof img !== 'undefined'
              ? img
              : undefined,
            'login' in locals_for_with
              ? locals_for_with.login
              : typeof login !== 'undefined'
              ? login
              : undefined,
            'secondName' in locals_for_with
              ? locals_for_with.secondName
              : typeof secondName !== 'undefined'
              ? secondName
              : undefined,
            'updateInfoLink' in locals_for_with
              ? locals_for_with.updateInfoLink
              : typeof updateInfoLink !== 'undefined'
              ? updateInfoLink
              : undefined,
            'updatePasswordLink' in locals_for_with
              ? locals_for_with.updatePasswordLink
              : typeof updatePasswordLink !== 'undefined'
              ? updatePasswordLink
              : undefined,
            'userInfoName' in locals_for_with
              ? locals_for_with.userInfoName
              : typeof userInfoName !== 'undefined'
              ? userInfoName
              : undefined,
            'username' in locals_for_with
              ? locals_for_with.username
              : typeof username !== 'undefined'
              ? username
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    e2MiP: [function () {}, {}],
    '9EdaA': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (profileCard1) {
            pug_html =
              pug_html +
              '<script type="module" src="~/src/layouts/profile-layout/profile-layout.ts"></script><div class="profile-layout"><section class="profile-layout__sidebar"><a class="profile-layout__sidebar-btn" href="/"> <p>Назад </a></p></a></section><section class="profile-layout__main">' +
              (null == (pug_interp = profileCard1) ? '' : pug_interp) +
              ' </section></div>';
          }.call(
            this,
            'profileCard' in locals_for_with
              ? locals_for_with.profileCard
              : typeof profileCard !== 'undefined'
              ? profileCard
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    d6Zzk: [function () {}, {}],
    ccqqq: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(
          exports,
          'ProfileUpdateInfo',
          () => ProfileUpdateInfo,
        );
        var _block = require('../../../utils/block/block');
        var _profileInputMixin = require('../../../components/inputs/profile-inputs/profile-input-mixin');
        var _buttonMixin = require('../../../components/buttons/button-mixin');
        var _validator = require('../../../utils/validator/validator');
        var _serializer = require('../../../utils/serializer/serializer');
        var _profileUpdateInfoPug = require('./profile-update-info.pug');
        var _profileUpdateInfoPugDefault = parcelHelpers.interopDefault(
          _profileUpdateInfoPug,
        );
        var _profileCardMixinScss = require('../../../components/profile-card/profile-card-mixin.scss');
        var _profileUpdateInfoScss = require('./profile-update-info.scss');
        class ProfileUpdateInfo extends (0, _block.Block) {
          constructor() {
            super('main', {});
          }
          validateBlock(event) {
            const element = event.target;
            if ((0, _validator.validate)(element))
              element.classList.add('invalid');
            else element.classList.remove('invalid');
          }
          init() {
            this.children.email = new (0, _profileInputMixin.ProfileCardInput)({
              name: 'email',
              type: 'text',
              label: 'Почта',
              body: 'temp@a.ru',
              is_input: true,
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.login = new (0, _profileInputMixin.ProfileCardInput)({
              name: 'login',
              type: 'text',
              label: 'Логин',
              body: 'ivan',
              is_input: true,
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.firstName = new (0,
            _profileInputMixin.ProfileCardInput)({
              name: 'first_name',
              type: 'text',
              label: 'Имя',
              body: 'iv',
              is_input: true,
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.secondName = new (0,
            _profileInputMixin.ProfileCardInput)({
              name: 'second_name',
              type: 'text',
              label: 'Фамилия',
              body: 'test',
              is_input: true,
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.username = new (0,
            _profileInputMixin.ProfileCardInput)({
              name: 'username',
              type: 'text',
              label: 'Имя в чате',
              body: 'tester',
              is_input: true,
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.phone = new (0, _profileInputMixin.ProfileCardInput)({
              name: 'phone',
              type: 'text',
              label: 'Телефон',
              body: '+7 (123) 123 12 32',
              is_input: true,
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.button = new (0, _buttonMixin.Button)({
              type: 'submit',
              btnClass: 'save-changes',
              content: 'Сохранить',
              events: {
                click: (e) => this.onSubmit(e),
              },
            });
          }
          onSubmit(e) {
            console.log('sad');
            const fields = [
              'email',
              'login',
              'first_name',
              'second_name',
              'phone',
            ];
            (0, _serializer.serializer)(e, fields);
          }
          render() {
            return this.compile(
              (0, _profileUpdateInfoPugDefault.default),
              this.props,
            );
          }
        }
      },
      {
        '../../../utils/block/block': '7JIRe',
        '../../../components/inputs/profile-inputs/profile-input-mixin':
          '8Zck1',
        '../../../components/buttons/button-mixin': 'b2XOX',
        '../../../utils/validator/validator': '8Bbbi',
        '../../../utils/serializer/serializer': 'bnv1C',
        './profile-update-info.pug': 'gfPyz',
        '../../../components/profile-card/profile-card-mixin.scss': 'e2MiP',
        './profile-update-info.scss': '4ooft',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    gfPyz: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (
            button1,
            email1,
            firstName1,
            login1,
            phone1,
            secondName1,
            username1,
          ) {
            pug_html =
              pug_html +
              '<script type="module" src="~/src/layouts/profile-layout/profile-layout.ts"></script><div class="profile-layout"><section class="profile-layout__sidebar"><a class="profile-layout__sidebar-btn" href="/"> <p>Назад </a></p></a></section><section class="profile-layout__main"><div class="profile-card"><section class="profile-card__user-info"><div class="profile-card__user-info-avatar"><img src = "~/src/assets/icons/empty-avatar-icon.svg" alt="empty-avatar-icon"/></div></section><form class="profile-card__block" action="../../chat/chat.html"><div class="profile-card__fields"> ' +
              (null == (pug_interp = email1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = login1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = firstName1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = secondName1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = username1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = phone1) ? '' : pug_interp) +
              '</div><div class="profile-card__actions"><div class="profile-card__actions-btn">' +
              (null == (pug_interp = button1) ? '' : pug_interp) +
              '</div></div></form></div></section></div>';
          }.call(
            this,
            'button' in locals_for_with
              ? locals_for_with.button
              : typeof button !== 'undefined'
              ? button
              : undefined,
            'email' in locals_for_with
              ? locals_for_with.email
              : typeof email !== 'undefined'
              ? email
              : undefined,
            'firstName' in locals_for_with
              ? locals_for_with.firstName
              : typeof firstName !== 'undefined'
              ? firstName
              : undefined,
            'login' in locals_for_with
              ? locals_for_with.login
              : typeof login !== 'undefined'
              ? login
              : undefined,
            'phone' in locals_for_with
              ? locals_for_with.phone
              : typeof phone !== 'undefined'
              ? phone
              : undefined,
            'secondName' in locals_for_with
              ? locals_for_with.secondName
              : typeof secondName !== 'undefined'
              ? secondName
              : undefined,
            'username' in locals_for_with
              ? locals_for_with.username
              : typeof username !== 'undefined'
              ? username
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    e2MiP: [function () {}, {}],
    '4ooft': [function () {}, {}],
    '9xaGY': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(
          exports,
          'ProfileUpdatePassword',
          () => ProfileUpdatePassword,
        );
        var _block = require('../../../utils/block/block');
        var _profileInputMixin = require('../../../components/inputs/profile-inputs/profile-input-mixin');
        var _buttonMixin = require('../../../components/buttons/button-mixin');
        var _validator = require('../../../utils/validator/validator');
        var _serializer = require('../../../utils/serializer/serializer');
        var _profileUpdatePasswordPug = require('./profile-update-password.pug');
        var _profileUpdatePasswordPugDefault = parcelHelpers.interopDefault(
          _profileUpdatePasswordPug,
        );
        var _profileCardMixinScss = require('../../../components/profile-card/profile-card-mixin.scss');
        var _profileUpdatePasswordScss = require('./profile-update-password.scss');
        class ProfileUpdatePassword extends (0, _block.Block) {
          constructor() {
            super('main', {});
          }
          validateBlock(event) {
            const element = event.target;
            if ((0, _validator.validate)(element))
              element.classList.add('invalid');
            else element.classList.remove('invalid');
          }
          init() {
            this.children.oldPassword = new (0,
            _profileInputMixin.ProfileCardInput)({
              name: 'oldPassword',
              type: 'password',
              label: 'Старый пароль',
              body: 'temp@a.ru',
              is_input: true,
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.newPassword = new (0,
            _profileInputMixin.ProfileCardInput)({
              name: 'newPassword',
              type: 'password',
              label: 'Новый пароль',
              body: 'ivan',
              is_input: true,
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.repeatPassword = new (0,
            _profileInputMixin.ProfileCardInput)({
              name: 'repeatPassword',
              type: 'password',
              label: 'Повтороите новый пароль',
              body: 'iv',
              is_input: true,
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.button = new (0, _buttonMixin.Button)({
              type: 'submit',
              btnClass: 'save-changes-password',
              content: 'Сохранить',
              events: {
                click: (e) => this.onSubmit(e),
              },
            });
          }
          onSubmit(e) {
            const fields = ['oldPassword', 'newPassword', 'repeatPassword'];
            (0, _serializer.serializer)(e, fields);
          }
          render() {
            return this.compile(
              (0, _profileUpdatePasswordPugDefault.default),
              this.props,
            );
          }
        }
      },
      {
        '../../../utils/block/block': '7JIRe',
        '../../../components/inputs/profile-inputs/profile-input-mixin':
          '8Zck1',
        '../../../components/buttons/button-mixin': 'b2XOX',
        '../../../utils/validator/validator': '8Bbbi',
        '../../../utils/serializer/serializer': 'bnv1C',
        './profile-update-password.pug': '8O0Rh',
        '../../../components/profile-card/profile-card-mixin.scss': 'e2MiP',
        './profile-update-password.scss': 'aNNDa',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '8O0Rh': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (button1, newPassword1, oldPassword1, repeatPassword1) {
            pug_html =
              pug_html +
              '<script type="module" src="~/src/layouts/profile-layout/profile-layout.ts"></script><div class="profile-layout"><section class="profile-layout__sidebar"><a class="profile-layout__sidebar-btn" href="/"> <p>Назад </a></p></a></section><section class="profile-layout__main"><div class="profile-card"><section class="profile-card__user-info"><div class="profile-card__user-info-avatar"><img src = "~/src/assets/icons/empty-avatar-icon.svg" alt="empty-avatar-icon"/></div></section><form class="profile-card__block" action="../../chat/chat.html"><div class="profile-card__fields"> ' +
              (null == (pug_interp = oldPassword1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = newPassword1) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = repeatPassword1) ? '' : pug_interp) +
              '</div><div class="profile-card__actions"><div class="profile-card__actions-btn">' +
              (null == (pug_interp = button1) ? '' : pug_interp) +
              '</div></div></form></div></section></div>';
          }.call(
            this,
            'button' in locals_for_with
              ? locals_for_with.button
              : typeof button !== 'undefined'
              ? button
              : undefined,
            'newPassword' in locals_for_with
              ? locals_for_with.newPassword
              : typeof newPassword !== 'undefined'
              ? newPassword
              : undefined,
            'oldPassword' in locals_for_with
              ? locals_for_with.oldPassword
              : typeof oldPassword !== 'undefined'
              ? oldPassword
              : undefined,
            'repeatPassword' in locals_for_with
              ? locals_for_with.repeatPassword
              : typeof repeatPassword !== 'undefined'
              ? repeatPassword
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    e2MiP: [function () {}, {}],
    aNNDa: [function () {}, {}],
    '7K3pv': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'Chat', () => Chat);
        var _block = require('../../utils/block/block');
        var _sidebar = require('../../modules/chat/components/sidebar/sidebar');
        var _mainChat = require('../../modules/chat/components/main-chat/main-chat');
        var _chatPug = require('./chat.pug');
        var _chatPugDefault = parcelHelpers.interopDefault(_chatPug);
        var _lensIconSvg = require('../../assets/icons/lens-icon.svg');
        var _lensIconSvgDefault = parcelHelpers.interopDefault(_lensIconSvg);
        var _chatScss = require('./chat.scss');
        class Chat extends (0, _block.Block) {
          constructor(props) {
            super('main', props);
            this.element.classList.add('chat');
          }
          init() {
            this.children.sidebar = new (0, _sidebar.Sidebar)({
              title: 'Профиль',
              img: (0, _lensIconSvgDefault.default),
            });
            this.children.mainChat = new (0, _mainChat.MainChat)();
          }
          render() {
            return this.compile((0, _chatPugDefault.default), this.props);
          }
        }
      },
      {
        '../../utils/block/block': '7JIRe',
        '../../modules/chat/components/sidebar/sidebar': 'c1twg',
        '../../modules/chat/components/main-chat/main-chat': '7PqJe',
        './chat.pug': 'luuuy',
        '../../assets/icons/lens-icon.svg': '85TvP',
        './chat.scss': '2JqZY',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    c1twg: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'Sidebar', () => Sidebar);
        var _block = require('../../../../utils/block/block');
        var _sidebarPug = require('./sidebar.pug');
        var _sidebarPugDefault = parcelHelpers.interopDefault(_sidebarPug);
        var _linkMixin = require('../../../../components/links/link-mixin');
        var _inputMixin = require('../../../..//components/inputs/input-mixin');
        var _userChats = require('./user-chats/user-chats');
        class Sidebar extends (0, _block.Block) {
          constructor(props) {
            super('main', props);
            this.element.classList.add('sidebar');
          }
          init() {
            this.children.profileLink = new (0, _linkMixin.BaseLink)({
              content: '',
              href: '../signUp/signUp.pug',
              extraClass: 'sidebar__link',
            });
            this.children.searchLink = new (0, _inputMixin.Input)({
              name: 'search',
              type: 'text',
              placeholder: 'Поиск',
            });
            this.children.userChat1 = new (0, _userChats.UserChats)({
              href: 'img',
              name: 'Dean',
              message: 'whats up!',
              time: '11:12',
              newMessageCount: 3,
              events: {
                click: () => {
                  if (
                    document.getElementsByClassName('empty-chat')[0].style
                      .display !== 'none'
                  ) {
                    document.getElementsByClassName(
                      'empty-chat',
                    )[0].style.display = 'none';
                    document.getElementsByClassName(
                      'messages',
                    )[0].style.display = 'block';
                  } else {
                    document.getElementsByClassName(
                      'empty-chat',
                    )[0].style.display = 'flex';
                    document.getElementsByClassName(
                      'messages',
                    )[0].style.display = 'none';
                  }
                },
              },
            });
            this.children.userChat2 = new (0, _userChats.UserChats)({
              href: 'img',
              name: 'Fox',
              message: 'yo',
              time: '11:42',
              newMessageCount: 1,
              events: {
                click: () => {
                  if (
                    document.getElementsByClassName('empty-chat')[0].style
                      .display !== 'none'
                  ) {
                    document.getElementsByClassName(
                      'empty-chat',
                    )[0].style.display = 'none';
                    document.getElementsByClassName(
                      'messages',
                    )[0].style.display = 'block';
                  } else {
                    document.getElementsByClassName(
                      'empty-chat',
                    )[0].style.display = 'flex';
                    document.getElementsByClassName(
                      'messages',
                    )[0].style.display = 'none';
                  }
                },
              },
            });
          }
          render() {
            return this.compile((0, _sidebarPugDefault.default), this.props);
          }
        }
      },
      {
        '../../../../utils/block/block': '7JIRe',
        './sidebar.pug': '11M5T',
        '../../../../components/links/link-mixin': 'hFVRB',
        '../../../..//components/inputs/input-mixin': '620c8',
        './user-chats/user-chats': 'eefRq',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '11M5T': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_attr(t, e, n, r) {
          if (!1 === e || null == e || (!e && ('class' === t || 'style' === t)))
            return '';
          if (!0 === e) return ' ' + (r ? t : t + '="' + t + '"');
          var f = typeof e;
          return (
            ('object' !== f && 'function' !== f) ||
              'function' != typeof e.toJSON ||
              (e = e.toJSON()),
            'string' == typeof e ||
            ((e = JSON.stringify(e)), n || -1 === e.indexOf('"'))
              ? (n && (e = pug_escape(e)), ' ' + t + '="' + e + '"')
              : ' ' + t + "='" + e.replace(/'/g, '&#39;') + "'"
          );
        }
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (
            img1,
            search1,
            searchLink1,
            title1,
            userChat11,
            userChat21,
          ) {
            pug_html =
              pug_html +
              '<header class="sidebar__header"><div class="sidebar__header-profile"><div class="sidebar__header-profile-block"><div class="sidebar__header-profile-block-text"><a class="sidebar__header-profile-block-link" href="../profile/profile.pug">' +
              pug_escape(null == (pug_interp = title1) ? '' : pug_interp) +
              '</a></div><i class="sidebar__header-profile-block-arrow"></i></div></div><div class="sidebar__header-search"><div class="sidebar__header-search-block"><div class="sidebar__header-search-block-icon"> <div class="search-icon"> <img' +
              (pug_attr('src', img1, true, false) + ' alt="icon"') +
              '/></div>' +
              (null == (pug_interp = searchLink1) ? '' : pug_interp) +
              '</div><div class="sidebar__header-search-block-text">' +
              pug_escape(null == (pug_interp = search1) ? '' : pug_interp) +
              '</div></div></div></header><section class="user-chats">' +
              (null == (pug_interp = userChat11) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = userChat21) ? '' : pug_interp) +
              '</section>';
          }.call(
            this,
            'img' in locals_for_with
              ? locals_for_with.img
              : typeof img !== 'undefined'
              ? img
              : undefined,
            'search' in locals_for_with
              ? locals_for_with.search
              : typeof search !== 'undefined'
              ? search
              : undefined,
            'searchLink' in locals_for_with
              ? locals_for_with.searchLink
              : typeof searchLink !== 'undefined'
              ? searchLink
              : undefined,
            'title' in locals_for_with
              ? locals_for_with.title
              : typeof title !== 'undefined'
              ? title
              : undefined,
            'userChat1' in locals_for_with
              ? locals_for_with.userChat1
              : typeof userChat1 !== 'undefined'
              ? userChat1
              : undefined,
            'userChat2' in locals_for_with
              ? locals_for_with.userChat2
              : typeof userChat2 !== 'undefined'
              ? userChat2
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    eefRq: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'UserChats', () => UserChats);
        var _block = require('../../../../../utils/block/block');
        var _userChatsPug = require('./user-chats.pug');
        var _userChatsPugDefault = parcelHelpers.interopDefault(_userChatsPug);
        var _userChatsScss = require('./user-chats.scss');
        class UserChats extends (0, _block.Block) {
          constructor(props) {
            super('div', props);
            this.element.classList.add('user-chats__block');
          }
          // onSubmit() {
          //   const values = Object
          //     .values(this.children)
          //     .filter(child => child instanceof Input)
          //     .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))
          //   const data = Object.fromEntries(values);
          //   AuthController.signin(data as SignupData);
          // }
          render() {
            return this.compile((0, _userChatsPugDefault.default), this.props);
          }
        }
      },
      {
        '../../../../../utils/block/block': '7JIRe',
        './user-chats.pug': 'SoGsY',
        './user-chats.scss': '4IAYP',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    SoGsY: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (href1, message1, name1, newMessageCount1, time1) {
            pug_html =
              pug_html +
              '<div class="user-chats__container"><div class="user-chats__img">' +
              pug_escape(null == (pug_interp = href1) ? '' : pug_interp) +
              '</div><div class="user-chats__content"><div class="user-chats__content-name">' +
              pug_escape(null == (pug_interp = name1) ? '' : pug_interp) +
              '</div><div class="user-chats__content-message">' +
              pug_escape(null == (pug_interp = message1) ? '' : pug_interp) +
              '</div></div><div class="user-chats__notify"><div class="user-chats__notify-time">' +
              pug_escape(null == (pug_interp = time1) ? '' : pug_interp) +
              '</div><div class="user-chats__notify-new-messages">' +
              pug_escape(
                null == (pug_interp = newMessageCount1) ? '' : pug_interp,
              ) +
              '</div></div></div>';
          }.call(
            this,
            'href' in locals_for_with
              ? locals_for_with.href
              : typeof href !== 'undefined'
              ? href
              : undefined,
            'message' in locals_for_with
              ? locals_for_with.message
              : typeof message !== 'undefined'
              ? message
              : undefined,
            'name' in locals_for_with
              ? locals_for_with.name
              : typeof name !== 'undefined'
              ? name
              : undefined,
            'newMessageCount' in locals_for_with
              ? locals_for_with.newMessageCount
              : typeof newMessageCount !== 'undefined'
              ? newMessageCount
              : undefined,
            'time' in locals_for_with
              ? locals_for_with.time
              : typeof time !== 'undefined'
              ? time
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '4IAYP': [function () {}, {}],
    '7PqJe': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'MainChat', () => MainChat);
        var _block = require('../../../../utils/block/block');
        var _mainChatPug = require('./main-chat.pug');
        var _mainChatPugDefault = parcelHelpers.interopDefault(_mainChatPug);
        var _mainChatHeader = require('./main-chat-header/main-chat-header');
        var _mainChatBottom = require('./main-chat-bottom/main-chat-bottom');
        var _mainChatDialogs = require('./main-chat-dialogs/main-chat-dialogs');
        var _sendIconSvg = require('../../../../assets/icons/send-icon.svg');
        var _sendIconSvgDefault = parcelHelpers.interopDefault(_sendIconSvg);
        var _attachIconSvg = require('../../../../assets/icons/attach-icon.svg');
        var _attachIconSvgDefault =
          parcelHelpers.interopDefault(_attachIconSvg);
        class MainChat extends (0, _block.Block) {
          constructor() {
            super('main', {});
            this.element.classList.add('main-chat');
          }
          init() {
            this.children.header = new (0, _mainChatHeader.MainChatHeader)({
              username: 'Unknown',
            });
            this.children.dialogs = new (0, _mainChatDialogs.MainChatDialogs)({
              content: 'Выберите чат чтобы отправить сообщение',
            });
            this.children.bottom = new (0, _mainChatBottom.MainChatBottom)({
              imgSend: (0, _sendIconSvgDefault.default),
              imgAttach: (0, _attachIconSvgDefault.default),
            });
          }
          render() {
            return this.compile((0, _mainChatPugDefault.default), this.props);
          }
        }
      },
      {
        '../../../../utils/block/block': '7JIRe',
        './main-chat.pug': 'd2xSv',
        './main-chat-header/main-chat-header': '1hNeM',
        './main-chat-bottom/main-chat-bottom': 'aKBnd',
        './main-chat-dialogs/main-chat-dialogs': '6J2wJ',
        '../../../../assets/icons/send-icon.svg': '9KgGA',
        '../../../../assets/icons/attach-icon.svg': '4IWfL',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    d2xSv: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (bottom1, dialogs1, header1) {
            pug_html =
              pug_html +
              '<header class="main-chat__header">' +
              (null == (pug_interp = header1) ? '' : pug_interp) +
              '</header><main class="main-chat__dialogs">' +
              (null == (pug_interp = dialogs1) ? '' : pug_interp) +
              '</main><section class="main-chat__bottom">   ' +
              (null == (pug_interp = bottom1) ? '' : pug_interp) +
              '</section>';
          }.call(
            this,
            'bottom' in locals_for_with
              ? locals_for_with.bottom
              : typeof bottom !== 'undefined'
              ? bottom
              : undefined,
            'dialogs' in locals_for_with
              ? locals_for_with.dialogs
              : typeof dialogs !== 'undefined'
              ? dialogs
              : undefined,
            'header' in locals_for_with
              ? locals_for_with.header
              : typeof header !== 'undefined'
              ? header
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '1hNeM': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'MainChatHeader', () => MainChatHeader);
        var _block = require('../../../../../utils/block/block');
        var _mainChatHeaderPug = require('./main-chat-header.pug');
        var _mainChatHeaderPugDefault =
          parcelHelpers.interopDefault(_mainChatHeaderPug);
        class MainChatHeader extends (0, _block.Block) {
          constructor(props) {
            super('div', props);
            this.element.classList.add('main-chat-header__block');
          }
          render() {
            return this.compile(
              (0, _mainChatHeaderPugDefault.default),
              this.props,
            );
          }
        }
      },
      {
        '../../../../../utils/block/block': '7JIRe',
        './main-chat-header.pug': 'gMj51',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    gMj51: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (username1) {
            pug_html =
              pug_html +
              '<div class="main-chat-header__items"><div class="main-chat-header__user-info"><div class="main-chat-header__icon"></div><div class="main-chat-header__name">' +
              pug_escape(null == (pug_interp = username1) ? '' : pug_interp) +
              '</div></div><div class="main-chat-header__user-action-btn"><div class="main-chat-header__user-action-dot"></div><div class="main-chat-header__user-action-dot"></div><div class="main-chat-header__user-action-dot"></div></div></div>';
          }.call(
            this,
            'username' in locals_for_with
              ? locals_for_with.username
              : typeof username !== 'undefined'
              ? username
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    aKBnd: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'MainChatBottom', () => MainChatBottom);
        var _block = require('../../../../../utils/block/block');
        var _inputMixin = require('../../../../../components/inputs/input-mixin');
        var _validator = require('../../../../../utils/validator/validator');
        var _linkMixin = require('../../../../../components/links/link-mixin');
        var _mainChatBottomPug = require('./main-chat-bottom.pug');
        var _mainChatBottomPugDefault =
          parcelHelpers.interopDefault(_mainChatBottomPug);
        class MainChatBottom extends (0, _block.Block) {
          constructor(props) {
            super('footer', props);
            this.element.classList.add('main-chat__bottom');
          }
          validateBlock(event) {
            const element = event.target;
            if ((0, _validator.validate)(element))
              element.classList.add('invalid');
            else element.classList.remove('invalid');
          }
          init() {
            this.children.input = new (0, _inputMixin.Input)({
              name: 'message',
              type: 'textarea',
              label: '',
              placeholder: 'Сообщение',
              events: {
                focusout: this.validateBlock.bind(this),
                focusin: this.validateBlock.bind(this),
              },
            });
            this.children.attachLink = new (0, _linkMixin.BaseLink)({});
            this.children.sendLink = new (0, _linkMixin.BaseLink)({
              href: '',
              events: {
                click: (e) => this.onSubmit(e),
              },
            });
          }
          onSubmit(e) {
            e.preventDefault();
            const inputs = ['message'];
            const formData = {};
            let isFormValid = true;
            inputs.map((input) => {
              const el = document.getElementsByName(input)[0];
              if ((0, _validator.validate)(el)) isFormValid = false;
              else {
                const name = el.getAttribute('name');
                const { value } = el;
                if (name) formData[name] = value;
              }
            });
            if (isFormValid) console.log(formData);
          }
          render() {
            return this.compile(
              (0, _mainChatBottomPugDefault.default),
              this.props,
            );
          }
        }
      },
      {
        '../../../../../utils/block/block': '7JIRe',
        '../../../../../components/inputs/input-mixin': '620c8',
        '../../../../../utils/validator/validator': '8Bbbi',
        '../../../../../components/links/link-mixin': 'hFVRB',
        './main-chat-bottom.pug': 'aHDMK',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    aHDMK: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_attr(t, e, n, r) {
          if (!1 === e || null == e || (!e && ('class' === t || 'style' === t)))
            return '';
          if (!0 === e) return ' ' + (r ? t : t + '="' + t + '"');
          var f = typeof e;
          return (
            ('object' !== f && 'function' !== f) ||
              'function' != typeof e.toJSON ||
              (e = e.toJSON()),
            'string' == typeof e ||
            ((e = JSON.stringify(e)), n || -1 === e.indexOf('"'))
              ? (n && (e = pug_escape(e)), ' ' + t + '="' + e + '"')
              : ' ' + t + "='" + e.replace(/'/g, '&#39;') + "'"
          );
        }
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (attachLink1, imgAttach1, imgSend1, input1, sendLink1) {
            pug_html =
              pug_html +
              '<section class="main-chat-bottom__block"><div class="main-chat-bottom__items"><div class="main-chat-bottom__attach-btn"></div><img' +
              (pug_attr('src', imgAttach1, true, false) + ' alt="icon"') +
              '/>' +
              (null == (pug_interp = attachLink1) ? '' : pug_interp) +
              '<div class="main-chat-bottom__message-panel"><div class="main-chat-bottom__message-panel_text"> </div>' +
              (null == (pug_interp = input1) ? '' : pug_interp) +
              '</div><div class="main-chat-bottom__send-btn"> <img' +
              (pug_attr('src', imgSend1, true, false) + ' alt="icon"') +
              '/>' +
              (null == (pug_interp = sendLink1) ? '' : pug_interp) +
              '</div></div></section>';
          }.call(
            this,
            'attachLink' in locals_for_with
              ? locals_for_with.attachLink
              : typeof attachLink !== 'undefined'
              ? attachLink
              : undefined,
            'imgAttach' in locals_for_with
              ? locals_for_with.imgAttach
              : typeof imgAttach !== 'undefined'
              ? imgAttach
              : undefined,
            'imgSend' in locals_for_with
              ? locals_for_with.imgSend
              : typeof imgSend !== 'undefined'
              ? imgSend
              : undefined,
            'input' in locals_for_with
              ? locals_for_with.input
              : typeof input !== 'undefined'
              ? input
              : undefined,
            'sendLink' in locals_for_with
              ? locals_for_with.sendLink
              : typeof sendLink !== 'undefined'
              ? sendLink
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '6J2wJ': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'MainChatDialogs', () => MainChatDialogs);
        var _block = require('../../../../../utils/block/block');
        var _mainChatDialogsPug = require('./main-chat-dialogs.pug');
        var _mainChatDialogsPugDefault =
          parcelHelpers.interopDefault(_mainChatDialogsPug);
        class MainChatDialogs extends (0, _block.Block) {
          constructor(props) {
            super('div', props);
            this.element.classList.add('main-chat-dialogs__block');
          }
          render() {
            return this.compile(
              (0, _mainChatDialogsPugDefault.default),
              this.props,
            );
          }
        }
      },
      {
        '../../../../../utils/block/block': '7JIRe',
        './main-chat-dialogs.pug': '8aXDb',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3',
      },
    ],
    '8aXDb': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function pug_escape(e) {
          var a = '' + e,
            t = pug_match_html.exec(a);
          if (!t) return e;
          var r,
            c,
            n,
            s = '';
          for (r = t.index, c = 0; r < a.length; r++) {
            switch (a.charCodeAt(r)) {
              case 34:
                n = '&quot;';
                break;
              case 38:
                n = '&amp;';
                break;
              case 60:
                n = '&lt;';
                break;
              case 62:
                n = '&gt;';
                break;
              default:
                continue;
            }
            c !== r && (s += a.substring(c, r)), (c = r + 1), (s += n);
          }
          return c !== r ? s + a.substring(c, r) : s;
        }
        var pug_match_html = /["&<>]/;
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (content1) {
            pug_html =
              pug_html +
              '<div class="empty-chat">' +
              pug_escape(null == (pug_interp = content1) ? '' : pug_interp) +
              '</div><div class="messages"><div class="message-date">1 января</div><div class="message-mine"><div class="message-mine-block"><div class="message-text-mine">orem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel obcaecati iste<div class="message-time-mine">23:59</div></div></div></div><div class="message-your"><div class="message-your-block"><div class="message-text-your">orem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel obcaecati iste<div class="message-time-your">11:21</div></div></div></div></div>';
          }.call(
            this,
            'content' in locals_for_with
              ? locals_for_with.content
              : typeof content !== 'undefined'
              ? content
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '9KgGA': [
      function (require, module, exports) {
        module.exports =
          require('./helpers/bundle-url').getBundleURL('7UhFu') +
          'send-icon.452d0586.svg' +
          '?' +
          Date.now();
      },
      { './helpers/bundle-url': 'lgJ39' },
    ],
    lgJ39: [
      function (require, module, exports) {
        'use strict';
        var bundleURL = {};
        function getBundleURLCached(id) {
          var value = bundleURL[id];
          if (!value) {
            value = getBundleURL();
            bundleURL[id] = value;
          }
          return value;
        }
        function getBundleURL() {
          try {
            throw new Error();
          } catch (err) {
            var matches = ('' + err.stack).match(
              /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g,
            );
            if (matches)
              // The first two stack frames will be this function and getBundleURLCached.
              // Use the 3rd one, which will be a runtime in the original bundle.
              return getBaseURL(matches[2]);
          }
          return '/';
        }
        function getBaseURL(url) {
          return (
            ('' + url).replace(
              /^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,
              '$1',
            ) + '/'
          );
        } // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
        function getOrigin(url) {
          var matches = ('' + url).match(
            /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/,
          );
          if (!matches) throw new Error('Origin not found');
          return matches[0];
        }
        exports.getBundleURL = getBundleURLCached;
        exports.getBaseURL = getBaseURL;
        exports.getOrigin = getOrigin;
      },
      {},
    ],
    '4IWfL': [
      function (require, module, exports) {
        module.exports =
          require('./helpers/bundle-url').getBundleURL('7UhFu') +
          'attach-icon.278a62a0.svg' +
          '?' +
          Date.now();
      },
      { './helpers/bundle-url': 'lgJ39' },
    ],
    luuuy: [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};
          (function (mainChat1, sidebar1) {
            pug_html =
              pug_html +
              ((null == (pug_interp = sidebar1) ? '' : pug_interp) +
                '\n' +
                (null == (pug_interp = mainChat1) ? '' : pug_interp));
          }.call(
            this,
            'mainChat' in locals_for_with
              ? locals_for_with.mainChat
              : typeof mainChat !== 'undefined'
              ? mainChat
              : undefined,
            'sidebar' in locals_for_with
              ? locals_for_with.sidebar
              : typeof sidebar !== 'undefined'
              ? sidebar
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    '85TvP': [
      function (require, module, exports) {
        module.exports =
          require('./helpers/bundle-url').getBundleURL('7UhFu') +
          'lens-icon.44d86849.svg' +
          '?' +
          Date.now();
      },
      { './helpers/bundle-url': 'lgJ39' },
    ],
    '2JqZY': [function () {}, {}],
  },
  ['iJYvl', 'h7u1C'],
  'h7u1C',
  'parcelRequireab20',
);

//# sourceMappingURL=index.b71e74eb.js.map
