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
    '4ibyE': [
      function (require, module, exports) {
        'use strict';
        var global = arguments[3];
        var HMR_HOST = null;
        var HMR_PORT = null;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = 'd6ea1d42532a7575';
        module.bundle.HMR_BUNDLE_ID = '0cf78e626b815632';
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
    kuM8f: [
      function (require, module, exports) {
        var _linkList = require('./components/link-list/link-list');
        window.addEventListener('DOMContentLoaded', () => {
          const root = document.querySelector('#app');
          const linkList = new (0, _linkList.LinkList)({
            href: 'src/views/404/404.pug',
            value: '404',
          });
          root.append(linkList.getContent());
          linkList.dispatchComponentDidMount();
        });
      },
      { './components/link-list/link-list': '9vMSc' },
    ],
    '9vMSc': [
      function (require, module, exports) {
        var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'LinkList', () => LinkList);
        var _block = require('../../utils/block/block');
        var _linkListPug = require('./link-list.pug');
        var _linkListPugDefault = parcelHelpers.interopDefault(_linkListPug);
        var _linkListScss = require('./link-list.scss');
        class LinkList extends (0, _block.Block) {
          constructor(propsObj) {
            super('div', propsObj);
          }
          render() {
            return this.compile((0, _linkListPugDefault.default), this.props);
          }
        }
      },
      {
        '../../utils/block/block': '7JIRe',
        './link-list.pug': 'jTrAH',
        './link-list.scss': 'eD96B',
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
          /** JSDoc
           * @param {string} tagName
           * @param {Object} props
           *
           * @returns {void}
           */ constructor(tagName = 'div', propsWithChildren) {
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
              if (value instanceof Block) children[key] = value;
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
            Object.values(this.children).forEach((child) =>
              child.dispatchComponentDidMount(),
            );
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
              contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
            });
            const html = template(contextAndStubs);
            const temp = document.createElement('template');
            temp.innerHTML = html;
            Object.entries(this.children).forEach(([_, component]) => {
              const stub = temp.content.querySelector(
                `[data-id="${component.id}"]`,
              );
              if (!stub) return;
              component.getContent()?.append(...Array.from(stub.childNodes));
              stub.replaceWith(component.getContent());
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
    jTrAH: [
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
          (function (href1, value1) {
            pug_html =
              pug_html +
              '<ul><li><a' +
              pug_attr('href', href1, true, false) +
              '>' +
              pug_escape(null == (pug_interp = value1) ? '' : pug_interp) +
              '</a></li></ul>';
          }.call(
            this,
            'href' in locals_for_with
              ? locals_for_with.href
              : typeof href !== 'undefined'
              ? href
              : undefined,
            'value' in locals_for_with
              ? locals_for_with.value
              : typeof value !== 'undefined'
              ? value
              : undefined,
          ));
          return pug_html;
        }
        exports.default = template;
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'gkKU3' },
    ],
    eD96B: [function () {}, {}],
  },
  ['4ibyE', 'kuM8f'],
  'kuM8f',
  'parcelRequireab20',
);

//# sourceMappingURL=index.6b815632.js.map
