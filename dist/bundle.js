/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './src/components/avatar/avatar.pug':
      /*!******************************************!*\
  !*** ./src/components/avatar/avatar.pug ***!
  \******************************************/
      /***/ (module) => {
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

          (function (img) {
            pug_html =
              pug_html +
              '\u003Cform id="profile-avatar"\u003E\u003Cimg' +
              (' class="avatar-img"' +
                pug_attr('src', `${img}`, true, true) +
                ' alt="avatar"') +
              '\u003E\u003Cdiv class="avatar-overlay"\u003E\u003Cdiv class="avatar-overlay__text"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class="image-container"\u003E\u003Cinput id="avatar" type="file" name="avatar" accept="image\u002F*"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E ';
          }.call(
            this,
            'img' in locals_for_with
              ? locals_for_with.img
              : typeof img !== 'undefined'
              ? img
              : undefined,
          ));
          return pug_html;
        }
        module.exports = template;

        /***/
      },

    /***/ './src/components/buttons/button-mixin.pug':
      /*!*************************************************!*\
  !*** ./src/components/buttons/button-mixin.pug ***!
  \*************************************************/
      /***/ (module) => {
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

          (function (btnClass, content, type) {
            pug_html =
              pug_html +
              '\u003Cdiv class="form-button"\u003E\u003Cbutton' +
              (pug_attr(
                'class',
                pug_classes([`form-button ${btnClass}`], [true]),
                false,
                true,
              ) +
                pug_attr('type', type || 'submit', true, true)) +
              '\u003E' +
              pug_escape(null == (pug_interp = content) ? '' : pug_interp) +
              '\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E';
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
        module.exports = template;

        /***/
      },

    /***/ './src/components/inputs/input-mixin.pug':
      /*!***********************************************!*\
  !*** ./src/components/inputs/input-mixin.pug ***!
  \***********************************************/
      /***/ (module) => {
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

          (function (error, label, name, placeholder, type) {
            pug_html = pug_html + '\u003Cdiv class="input"\u003E';
            if (label) {
              pug_html =
                pug_html +
                '\u003Clabel' +
                pug_attr(
                  'class',
                  pug_classes([`input__label ${name}`], [true]),
                  false,
                  true,
                ) +
                '\u003E' +
                pug_escape(
                  null == (pug_interp = label || '') ? '' : pug_interp,
                ) +
                '\u003C\u002Flabel\u003E';
            }
            pug_html =
              pug_html +
              '\u003Cinput' +
              (pug_attr(
                'class',
                pug_classes([`input__field-${name}`], [true]),
                false,
                true,
              ) +
                pug_attr('type', `${type}`, true, true) +
                pug_attr('name', `${name}`, true, true) +
                pug_attr('placeholder', `${placeholder || ''}`, true, true) +
                pug_attr('required', true, true, true) +
                pug_attr('autofocus', true, true, true)) +
              '\u003E\u003Clabel' +
              pug_attr(
                'class',
                pug_classes([`error error-${name}`], [true]),
                false,
                true,
              ) +
              '\u003E' +
              pug_escape(null == (pug_interp = error || '') ? '' : pug_interp) +
              '\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E';
          }.call(
            this,
            'error' in locals_for_with
              ? locals_for_with.error
              : typeof error !== 'undefined'
              ? error
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
        module.exports = template;

        /***/
      },

    /***/ './src/components/inputs/profile-inputs/profile-input-mixin.pug':
      /*!**********************************************************************!*\
  !*** ./src/components/inputs/profile-inputs/profile-input-mixin.pug ***!
  \**********************************************************************/
      /***/ (module) => {
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

          (function (body, error, is_input, label, name, type) {
            pug_html =
              pug_html +
              '\u003Cdiv class="profile-card__field"\u003E\u003Cspan class="profile-card__field__title"\u003E' +
              pug_escape(null == (pug_interp = label) ? '' : pug_interp) +
              '\u003C\u002Fspan\u003E';
            if (is_input) {
              pug_html =
                pug_html +
                '\u003Cinput' +
                (' class="input__field profile-card__field__body"' +
                  pug_attr('type', `${type}`, true, true) +
                  pug_attr('name', name, true, true) +
                  pug_attr('value', `${body || ''}`, true, true) +
                  pug_attr('required', true, true, true) +
                  pug_attr('autofocus', true, true, true)) +
                '\u003E\u003Clabel' +
                pug_attr(
                  'class',
                  pug_classes([`error error-${name}`], [true]),
                  false,
                  true,
                ) +
                '\u003E' +
                pug_escape(
                  null == (pug_interp = error || '') ? '' : pug_interp,
                ) +
                '\u003C\u002Flabel\u003E';
            } else {
              pug_html =
                pug_html +
                '\u003Cspan class="profile-card__field__body"\u003E' +
                pug_escape(null == (pug_interp = body) ? '' : pug_interp) +
                '\u003C\u002Fspan\u003E';
            }
            pug_html = pug_html + '\u003C\u002Fdiv\u003E';
          }.call(
            this,
            'body' in locals_for_with
              ? locals_for_with.body
              : typeof body !== 'undefined'
              ? body
              : undefined,
            'error' in locals_for_with
              ? locals_for_with.error
              : typeof error !== 'undefined'
              ? error
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
        module.exports = template;

        /***/
      },

    /***/ './src/components/links/link-mixin.pug':
      /*!*********************************************!*\
  !*** ./src/components/links/link-mixin.pug ***!
  \*********************************************/
      /***/ (module) => {
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

          (function (content, extraClass, href) {
            pug_html =
              pug_html +
              '\u003Cdiv' +
              pug_attr(
                'class',
                pug_classes([`link ${extraClass || ''}`], [true]),
                false,
                true,
              ) +
              '\u003E\u003Ca' +
              pug_attr('href', href, true, true) +
              '\u003E' +
              pug_escape(null == (pug_interp = content) ? '' : pug_interp) +
              '\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E';
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
        module.exports = template;

        /***/
      },

    /***/ './src/components/messages/message.pug':
      /*!*********************************************!*\
  !*** ./src/components/messages/message.pug ***!
  \*********************************************/
      /***/ (module) => {
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

          (function (content, isMine) {
            if (isMine) {
              pug_html =
                pug_html +
                '\u003Cdiv class="message--mine"\u003E' +
                pug_escape(null == (pug_interp = content) ? '' : pug_interp) +
                '\u003C\u002Fdiv\u003E';
            } else {
              pug_html =
                pug_html +
                '\u003Cdiv class="message"\u003E' +
                pug_escape(null == (pug_interp = content) ? '' : pug_interp) +
                '\u003C\u002Fdiv\u003E';
            }
          }.call(
            this,
            'content' in locals_for_with
              ? locals_for_with.content
              : typeof content !== 'undefined'
              ? content
              : undefined,
            'isMine' in locals_for_with
              ? locals_for_with.isMine
              : typeof isMine !== 'undefined'
              ? isMine
              : undefined,
          ));
          return pug_html;
        }
        module.exports = template;

        /***/
      },

    /***/ './src/components/profile-card/profile-card-mixin.pug':
      /*!************************************************************!*\
  !*** ./src/components/profile-card/profile-card-mixin.pug ***!
  \************************************************************/
      /***/ (module) => {
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};

          (function (
            avatar,
            displayName,
            email,
            exitLink,
            firstName,
            login,
            phone,
            secondName,
            updateInfoLink,
            updatePasswordLink,
          ) {
            pug_html =
              pug_html +
              '\u003Cdiv class="profile-layout"\u003E\u003Csection class="profile-layout__sidebar"\u003E\u003Ca class="profile-layout__sidebar-btn" href="\u002Fmessanger"\u003E\u003Cp\u003EНазад\u003C\u002Fp\u003E\u003C\u002Fa\u003E\u003C\u002Fsection\u003E\u003Csection class="profile-layout__main"\u003E\u003Cdiv class="profile-card"\u003E\u003Cdiv class="profile-card__user-info"\u003E' +
              (null == (pug_interp = avatar) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="profile-card__block"\u003E\u003Cdiv class="profile-card__fields"\u003E ' +
              (null == (pug_interp = email) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = login) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = firstName) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = secondName) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = displayName) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = phone) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="profile-card__actions"\u003E\u003Cdiv class="profile-card__field"\u003E' +
              (null == (pug_interp = updateInfoLink) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="profile-card__field"\u003E' +
              (null == (pug_interp = updatePasswordLink) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="profile-card__field"\u003E   ' +
              (null == (pug_interp = exitLink) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E';
          }.call(
            this,
            'avatar' in locals_for_with
              ? locals_for_with.avatar
              : typeof avatar !== 'undefined'
              ? avatar
              : undefined,
            'displayName' in locals_for_with
              ? locals_for_with.displayName
              : typeof displayName !== 'undefined'
              ? displayName
              : undefined,
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
          ));
          return pug_html;
        }
        module.exports = template;

        /***/
      },

    /***/ './src/modules/chat/components/main-chat/main-chat-header/main-chat-header.pug':
      /*!*************************************************************************************!*\
  !*** ./src/modules/chat/components/main-chat/main-chat-header/main-chat-header.pug ***!
  \*************************************************************************************/
      /***/ (module) => {
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

          (function (deleteLink, deleteUserToChat, img, username) {
            pug_html =
              pug_html +
              '\u003Cdiv class="main-chat-header__block"\u003E\u003Cdiv class="main-chat-header__items"\u003E\u003Cdiv class="main-chat-header__user-info"\u003E\u003Cdiv class="main-chat-header__icon"\u003E\u003Cimg' +
              (' class="avatar-img"' +
                pug_attr('src', `${img}`, true, true) +
                ' alt="avatar"') +
              '\u003E\u003C\u002Fdiv\u003E\u003Cdiv class="main-chat-header__name"\u003E' +
              pug_escape(null == (pug_interp = username) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="delete-user"\u003E' +
              (null == (pug_interp = deleteLink) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = deleteUserToChat) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E';
          }.call(
            this,
            'deleteLink' in locals_for_with
              ? locals_for_with.deleteLink
              : typeof deleteLink !== 'undefined'
              ? deleteLink
              : undefined,
            'deleteUserToChat' in locals_for_with
              ? locals_for_with.deleteUserToChat
              : typeof deleteUserToChat !== 'undefined'
              ? deleteUserToChat
              : undefined,
            'img' in locals_for_with
              ? locals_for_with.img
              : typeof img !== 'undefined'
              ? img
              : undefined,
            'username' in locals_for_with
              ? locals_for_with.username
              : typeof username !== 'undefined'
              ? username
              : undefined,
          ));
          return pug_html;
        }
        module.exports = template;

        /***/
      },

    /***/ './src/modules/chat/components/main-chat/main-chat.pug':
      /*!*************************************************************!*\
  !*** ./src/modules/chat/components/main-chat/main-chat.pug ***!
  \*************************************************************/
      /***/ (module) => {
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};

          (function (dialogs, header, input, selectedChat, sendLink) {
            pug_html = pug_html + '\u003Cmain class="main-chat"\u003E';
            if (selectedChat) {
              pug_html =
                pug_html +
                '\u003Cheader class="main-chat__header"\u003E' +
                (null == (pug_interp = header) ? '' : pug_interp) +
                '\u003C\u002Fheader\u003E\u003Cmain class="main-chat__dialogs"\u003E' +
                (null == (pug_interp = dialogs) ? '' : pug_interp) +
                '\u003C\u002Fmain\u003E\u003Csection class="main-chat__bottom"\u003E   \u003Csection class="main-chat-bottom__block"\u003E\u003Cdiv class="main-chat-bottom__items"\u003E\u003Cdiv class="main-chat-bottom__message-panel"\u003E\u003Cdiv class="main-chat-bottom__message-panel_text"\u003E \u003C\u002Fdiv\u003E' +
                (null == (pug_interp = input) ? '' : pug_interp) +
                '\u003C\u002Fdiv\u003E\u003Cdiv class="main-chat-bottom__send-btn"\u003E ' +
                (null == (pug_interp = sendLink) ? '' : pug_interp) +
                '\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fsection\u003E';
            } else {
              pug_html =
                pug_html +
                '\u003Cdiv class="no-selected"\u003E\u003Cp\u003EВыберите чат\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E';
            }
            pug_html = pug_html + '\u003C\u002Fmain\u003E';
          }.call(
            this,
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
            'input' in locals_for_with
              ? locals_for_with.input
              : typeof input !== 'undefined'
              ? input
              : undefined,
            'selectedChat' in locals_for_with
              ? locals_for_with.selectedChat
              : typeof selectedChat !== 'undefined'
              ? selectedChat
              : undefined,
            'sendLink' in locals_for_with
              ? locals_for_with.sendLink
              : typeof sendLink !== 'undefined'
              ? sendLink
              : undefined,
          ));
          return pug_html;
        }
        module.exports = template;

        /***/
      },

    /***/ './src/modules/chat/components/sidebar/sidebar.pug':
      /*!*********************************************************!*\
  !*** ./src/modules/chat/components/sidebar/sidebar.pug ***!
  \*********************************************************/
      /***/ (module) => {
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
            addChat,
            addLink,
            addUserToChat,
            chats,
            img,
            profileLink,
            search,
            searchLink,
          ) {
            pug_html =
              pug_html +
              '\u003Cmain class="sidebar"\u003E\u003Cheader class="sidebar__header"\u003E\u003Cdiv class="sidebar__header-profile"\u003E\u003Cdiv class="sidebar__header-profile-block"\u003E\u003Cdiv class="sidebar__header-profile-block-text"\u003E\u003C\u002Fdiv\u003E' +
              (null == (pug_interp = profileLink) ? '' : pug_interp) +
              '\u003Ci class="sidebar__header-profile-block-arrow"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class="sidebar__header-search"\u003E\u003Cdiv class="sidebar__header-search-block"\u003E\u003Cdiv class="sidebar__header-search-block-icon"\u003E \u003Cdiv class="search-icon"\u003E \u003Cimg' +
              (pug_attr('src', img, true, true) + ' alt="icon"') +
              '\u003E\u003C\u002Fdiv\u003E' +
              (null == (pug_interp = searchLink) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="sidebar__header-search-block-text"\u003E' +
              pug_escape(null == (pug_interp = search) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003Cdiv class="create-chat"\u003E' +
              (null == (pug_interp = addChat) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="add-user-to-chat"\u003E' +
              (null == (pug_interp = addLink) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = addUserToChat) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Csection class="user-chats"\u003E' +
              (null == (pug_interp = chats) ? '' : pug_interp) +
              '\u003C\u002Fsection\u003E\u003C\u002Fmain\u003E';
          }.call(
            this,
            'addChat' in locals_for_with
              ? locals_for_with.addChat
              : typeof addChat !== 'undefined'
              ? addChat
              : undefined,
            'addLink' in locals_for_with
              ? locals_for_with.addLink
              : typeof addLink !== 'undefined'
              ? addLink
              : undefined,
            'addUserToChat' in locals_for_with
              ? locals_for_with.addUserToChat
              : typeof addUserToChat !== 'undefined'
              ? addUserToChat
              : undefined,
            'chats' in locals_for_with
              ? locals_for_with.chats
              : typeof chats !== 'undefined'
              ? chats
              : undefined,
            'img' in locals_for_with
              ? locals_for_with.img
              : typeof img !== 'undefined'
              ? img
              : undefined,
            'profileLink' in locals_for_with
              ? locals_for_with.profileLink
              : typeof profileLink !== 'undefined'
              ? profileLink
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
          ));
          return pug_html;
        }
        module.exports = template;

        /***/
      },

    /***/ './src/modules/chat/components/sidebar/user-chats/user-chats.pug':
      /*!***********************************************************************!*\
  !*** ./src/modules/chat/components/sidebar/user-chats/user-chats.pug ***!
  \***********************************************************************/
      /***/ (module) => {
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

          (function (id, last_message) {
            pug_html =
              pug_html +
              '\u003Cdiv class="user-chats__block"\u003E\u003Cdiv class="user-chats__container"\u003E\u003Cdiv class="user-chats__img"\u003E' +
              pug_escape(null == (pug_interp = id) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="user-chats__content"\u003E';
            if (last_message) {
              pug_html =
                pug_html +
                '\u003Cdiv class="user-chats__content-name"\u003E' +
                pug_escape(
                  null == (pug_interp = last_message.user.first_name)
                    ? ''
                    : pug_interp,
                ) +
                '\u003C\u002Fdiv\u003E\u003Cdiv class="user-chats__content-message"\u003E' +
                pug_escape(
                  null == (pug_interp = last_message.content) ? '' : pug_interp,
                ) +
                '\u003C\u002Fdiv\u003E';
            } else {
              pug_html =
                pug_html +
                '\u003Cdiv class="user-chats__content-name"\u003E' +
                pug_escape(null == (pug_interp = '') ? '' : pug_interp) +
                '\u003C\u002Fdiv\u003E\u003Cdiv class="user-chats__content-message"\u003E' +
                pug_escape(null == (pug_interp = '') ? '' : pug_interp) +
                '\u003C\u002Fdiv\u003E';
            }
            pug_html =
              pug_html +
              '\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E';
          }.call(
            this,
            'id' in locals_for_with
              ? locals_for_with.id
              : typeof id !== 'undefined'
              ? id
              : undefined,
            'last_message' in locals_for_with
              ? locals_for_with.last_message
              : typeof last_message !== 'undefined'
              ? last_message
              : undefined,
          ));
          return pug_html;
        }
        module.exports = template;

        /***/
      },

    /***/ './src/views/404/404.pug':
      /*!*******************************!*\
  !*** ./src/views/404/404.pug ***!
  \*******************************/
      /***/ (module) => {
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

          (function (link) {
            pug_html =
              pug_html +
              '\u003Cdiv class="error-message-wrapper"\u003E\u003Cdiv class="error-message"\u003E\u003Cdiv class="error-message__code"\u003E' +
              pug_escape(null == (pug_interp = 404) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="error-message__text"\u003E' +
              pug_escape(
                null == (pug_interp = 'Страница не найдена') ? '' : pug_interp,
              ) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="error-message__link"\u003E' +
              (null == (pug_interp = link) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E';
          }.call(
            this,
            'link' in locals_for_with
              ? locals_for_with.link
              : typeof link !== 'undefined'
              ? link
              : undefined,
          ));
          return pug_html;
        }
        module.exports = template;

        /***/
      },

    /***/ './src/views/auth/signIn/signIn.pug':
      /*!******************************************!*\
  !*** ./src/views/auth/signIn/signIn.pug ***!
  \******************************************/
      /***/ (module) => {
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

          (function (button, link, login, password, title) {
            pug_html =
              pug_html +
              '\u003Cdiv class="auth-layout"\u003E\u003Cmain class="sign-in"\u003E\u003Cform class="sign-in__block" action="..\u002F..\u002Fchat\u002Fchat.html"\u003E\u003Cdiv class="sign-in__block-title"\u003E\u003Cspan class="sign-in__block-title-text"\u003E' +
              pug_escape(null == (pug_interp = title) ? '' : pug_interp) +
              '\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class="sign-in__block-login-input"\u003E' +
              (null == (pug_interp = login) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = password) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="sign-in__block-auth-btn"\u003E' +
              (null == (pug_interp = button) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="sign-in__block-sign-up"\u003E' +
              (null == (pug_interp = link) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fmain\u003E\u003C\u002Fdiv\u003E';
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
        module.exports = template;

        /***/
      },

    /***/ './src/views/auth/signUp/signUp.pug':
      /*!******************************************!*\
  !*** ./src/views/auth/signUp/signUp.pug ***!
  \******************************************/
      /***/ (module) => {
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
            button,
            email,
            firstName,
            login,
            password,
            phone,
            repeatPassword,
            secondName,
            title,
          ) {
            pug_html =
              pug_html +
              '\u003Cdiv class="auth-layout"\u003E\u003Cmain class="signUp"\u003E\u003Cform class="signUp__block" action="..\u002F..\u002Fchat\u002Fchat.html"\u003E\u003Cdiv class="signUp__block-title"\u003E\u003Cspan class="sign-in__title"\u003E' +
              pug_escape(null == (pug_interp = title) ? '' : pug_interp) +
              '\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class="signUp__block-user-info-input"\u003E' +
              (null == (pug_interp = email) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = login) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = firstName) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = secondName) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = phone) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = password) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = repeatPassword) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="signUp__block-auth-btn"\u003E' +
              (null == (pug_interp = button) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fmain\u003E\u003C\u002Fdiv\u003E';
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
        module.exports = template;

        /***/
      },

    /***/ './src/views/chat/chat.pug':
      /*!*********************************!*\
  !*** ./src/views/chat/chat.pug ***!
  \*********************************/
      /***/ (module) => {
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};

          (function (mainChat, sidebar) {
            pug_html =
              pug_html +
              '\u003Cdiv class="chat"\u003E' +
              (null == (pug_interp = sidebar) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = mainChat) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E';
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
        module.exports = template;

        /***/
      },

    /***/ './src/views/profile/profile-update-info/profile-update-info.pug':
      /*!***********************************************************************!*\
  !*** ./src/views/profile/profile-update-info/profile-update-info.pug ***!
  \***********************************************************************/
      /***/ (module) => {
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};

          (function (
            button,
            displayName,
            email,
            firstName,
            login,
            phone,
            secondName,
          ) {
            pug_html =
              pug_html +
              '\u003Cdiv class="profile-layout"\u003E\u003Csection class="profile-layout__sidebar"\u003E\u003Ca class="profile-layout__sidebar-btn" href="\u002Fmessanger"\u003E\u003Cp\u003EНазад\u003C\u002Fp\u003E\u003C\u002Fa\u003E\u003C\u002Fsection\u003E\u003Csection class="profile-layout__main"\u003E\u003Cdiv class="profile-card"\u003E\u003Cform class="profile-card__block" action="..\u002F..\u002Fchat\u002Fchat.html"\u003E\u003Cdiv class="profile-card__fields"\u003E ' +
              (null == (pug_interp = email) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = login) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = firstName) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = secondName) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = displayName) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = phone) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="profile-card__actions"\u003E\u003Cdiv class="profile-card__actions-btn"\u003E' +
              (null == (pug_interp = button) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E';
          }.call(
            this,
            'button' in locals_for_with
              ? locals_for_with.button
              : typeof button !== 'undefined'
              ? button
              : undefined,
            'displayName' in locals_for_with
              ? locals_for_with.displayName
              : typeof displayName !== 'undefined'
              ? displayName
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
          ));
          return pug_html;
        }
        module.exports = template;

        /***/
      },

    /***/ './src/views/profile/profile-update-password/profile-update-password.pug':
      /*!*******************************************************************************!*\
  !*** ./src/views/profile/profile-update-password/profile-update-password.pug ***!
  \*******************************************************************************/
      /***/ (module) => {
        function template(locals) {
          var pug_html = '',
            pug_mixins = {},
            pug_interp;
          var locals_for_with = locals || {};

          (function (button, newPassword, oldPassword, repeatPassword) {
            pug_html =
              pug_html +
              '\u003Cdiv class="profile-layout"\u003E\u003Csection class="profile-layout__sidebar"\u003E\u003Ca class="profile-layout__sidebar-btn" href="\u002Fmessanger"\u003E\u003Cp\u003EНазад\u003C\u002Fp\u003E\u003C\u002Fa\u003E\u003C\u002Fsection\u003E\u003Csection class="profile-layout__main"\u003E\u003Cdiv class="profile-card"\u003E\u003Cform class="profile-card__block" action="..\u002F..\u002Fchat\u002Fchat.html"\u003E\u003Cdiv class="profile-card__fields"\u003E ' +
              (null == (pug_interp = oldPassword) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = newPassword) ? '' : pug_interp) +
              '\n' +
              (null == (pug_interp = repeatPassword) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003Cdiv class="profile-card__actions"\u003E\u003Cdiv class="profile-card__actions-btn"\u003E' +
              (null == (pug_interp = button) ? '' : pug_interp) +
              '\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E';
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
        module.exports = template;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/avatar/avatar.scss':
      /*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/avatar/avatar.scss ***!
  \***********************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n#profile-avatar {\n  width: 8.125rem;\n  height: 8.125rem;\n  border-radius: 50%;\n  background-color: #efefef;\n  display: flex;\n  position: relative;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n}\n#profile-avatar:hover {\n  opacity: 1;\n}\n\n.avatar-overlay {\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.avatar-container:hover .avatar-image {\n  opacity: 0.3;\n}\n\n.avatar-container:hover .avatar-overlay {\n  opacity: 1;\n}\n\n.avatar-overlay__text {\n  width: 200px;\n  height: 200px;\n  border-radius: 100%;\n  background-color: #4caf50;\n  color: white;\n  font-size: 16px;\n  text-align: center;\n}\n\n.image-container {\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n}\n\n.avatar-img {\n  display: block;\n  max-width: 100%;\n  height: 100%;\n}\n\n#avatar {\n  width: 100%;\n  height: 100%;\n}',
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/avatar/avatar.scss'],
            names: [],
            mappings:
              'AACA,sBAAA;AACA;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;EACA,4BAAA;EACA,2BAAA;EACA,uBAAA;EACA,mBAAA;AAAF;AACE;EACE,UAAA;AACJ;;AAEA;EACE,qBAAA;EACA,UAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,oCAAA;AACF;;AACA;EACE,YAAA;AAEF;;AACA;EACE,UAAA;AAEF;;AAAA;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;AAGF;;AAAA;EACE,QAAA;EACA,SAAA;EACA,kBAAA;EACA,gCAAA;EACA,WAAA;EACA,YAAA;AAGF;;AAAA;EACE,cAAA;EACA,eAAA;EACA,YAAA;AAGF;;AADA;EACE,WAAA;EACA,YAAA;AAIF',
            sourcesContent: [
              "@import '../../assets/styles/colors';\n/* stylelint-disable */\n#profile-avatar {\n  width: 8.125rem;\n  height: 8.125rem;\n  border-radius: 50%;\n  background-color: $color-bg-avatar;\n  display: flex;\n  position: relative;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    opacity: 1;\n  }\n}\n.avatar-overlay {\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n.avatar-container:hover .avatar-image {\n  opacity: 0.3;\n}\n\n.avatar-container:hover .avatar-overlay {\n  opacity: 1;\n}\n.avatar-overlay__text {\n  width: 200px;\n  height: 200px;\n  border-radius: 100%;\n  background-color: #4caf50;\n  color: white;\n  font-size: 16px;\n  text-align: center;\n}\n\n.image-container {\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n}\n\n.avatar-img {\n  display: block;\n  max-width: 100%;\n  height: 100%;\n}\n#avatar {\n  width: 100%;\n  height: 100%;\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/buttons/button-mixin.scss':
      /*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/buttons/button-mixin.scss ***!
  \******************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.form-button {\n  font-size: 0.8125rem;\n  line-height: 0.8125rem;\n  color: #fff;\n  max-width: 17.5rem;\n  width: 100%;\n  height: 2.3125rem;\n  background: #3369f3;\n  border-radius: 0.5rem;\n  border: 0.0625rem solid #eaeaea;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/components/buttons/button-mixin.scss',
              'webpack://./src/assets/styles/colors.scss',
            ],
            names: [],
            mappings:
              'AAEA;EACE,oBAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,mBCTc;EDUd,qBAAA;EACA,+BAAA;AADF',
            sourcesContent: [
              "@import '../../assets/styles/colors';\n\n.form-button {\n  font-size: 0.8125rem;\n  line-height: 0.8125rem;\n  color: $color-white;\n  max-width: 17.5rem;\n  width: 100%;\n  height: 2.3125rem;\n  background: $color-primary;\n  border-radius: 0.5rem;\n  border: 0.0625rem solid $color-border;\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/inputs/input-mixin.scss':
      /*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/inputs/input-mixin.scss ***!
  \****************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n.input {\n  width: 17.5rem;\n  height: 1.875rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.8125rem;\n  line-height: 0.8125rem;\n}\n.input__field {\n  border: 0;\n}\n.input__field-message, .input__field-search {\n  border: 0;\n}\n.input__field-message:focus, .input__field-search:focus {\n  outline: none;\n}\n.input__label {\n  font-size: 0.5625rem;\n  line-height: 0.5625rem;\n  color: #999;\n}\n\n.invalid {\n  color: #f00;\n}\n\n.error {\n  font-size: 0.5rem;\n  color: #f00;\n}\n.error-login, .error-email, .error-first_name, .error-second_name, .error-phone, .error-password {\n  display: none;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/components/inputs/input-mixin.scss',
              'webpack://./src/assets/styles/colors.scss',
            ],
            names: [],
            mappings:
              'AACA,sBAAA;AACA;EACE,cAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,sBAAA;AAAF;AAEE;EACE,SAAA;AAAJ;AAEI;EAEE,SAAA;AADN;AAEM;EACE,aAAA;AAAR;AAKE;EACE,oBAAA;EACA,sBAAA;EACA,WClBc;ADelB;;AAMA;EACE,WCrBU;ADkBZ;;AAMA;EACE,iBAAA;EACA,WC1BU;ADuBZ;AAIE;EAME,aAAA;AAPJ',
            sourcesContent: [
              "@import '../../assets/styles/colors';\n/* stylelint-disable */\n.input {\n  width: 17.5rem;\n  height: 1.875rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.8125rem;\n  line-height: 0.8125rem;\n\n  &__field {\n    border: 0;\n\n    &-message,\n    &-search {\n      border: 0;\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n\n  &__label {\n    font-size: 0.5625rem;\n    line-height: 0.5625rem;\n    color: $color-dark-gray;\n  }\n}\n.invalid {\n  color: $color-red;\n}\n\n.error {\n  font-size: 0.5rem;\n  color: $color-red;\n  &-login,\n  &-email,\n  &-first_name,\n  &-second_name,\n  &-phone,\n  &-password {\n    display: none;\n  }\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/inputs/profile-inputs/profile-input-mixin.scss':
      /*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/inputs/profile-inputs/profile-input-mixin.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n.profile-card__field {\n  max-width: 31.875rem;\n  width: 100%;\n  max-height: 2.0625rem;\n  height: 100%;\n  display: flex;\n  border-bottom: 1px #eaeaea solid;\n  align-items: center;\n}\n.profile-card__field__title {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n}\n.profile-card__field__body {\n  margin-left: auto;\n  border: 0;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #999;\n}\n.profile-card__field input {\n  border: 0;\n}\n.profile-card__field input:focus {\n  outline: none;\n}\n\n.invalid {\n  color: #f00;\n}\n\n.error {\n  font-size: 0.5rem;\n  color: #f00;\n}\n.error-repeatPassword, .error-oldPassword, .error-newPassword {\n  display: none;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/components/inputs/profile-inputs/profile-input-mixin.scss',
              'webpack://./src/assets/styles/colors.scss',
            ],
            names: [],
            mappings:
              'AACA,sBAAA;AACA;EACE,oBAAA;EACA,WAAA;EACA,qBAAA;EACA,YAAA;EACA,aAAA;EACA,gCAAA;EACA,mBAAA;AAAF;AAEE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAAJ;AAGE;EACE,iBAAA;EACA,SAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,WChBc;ADelB;AAGE;EACE,SAAA;AADJ;AAEI;EACE,aAAA;AAAN;;AAIA;EACE,WCzBU;ADwBZ;;AAIA;EACE,iBAAA;EACA,WC9BU;AD6BZ;AAEE;EAGE,aAAA;AAFJ',
            sourcesContent: [
              "@import '../../../assets/styles/colors';\n/* stylelint-disable */\n.profile-card__field {\n  max-width: 31.875rem;\n  width: 100%;\n  max-height: 2.0625rem;\n  height: 100%;\n  display: flex;\n  border-bottom: 1px $color-border solid;\n  align-items: center;\n\n  &__title {\n    font-weight: 500;\n    font-size: 13px;\n    line-height: 13px;\n  }\n\n  &__body {\n    margin-left: auto;\n    border: 0;\n    font-weight: 500;\n    font-size: 13px;\n    line-height: 13px;\n    color: $color-dark-gray;\n  }\n  input {\n    border: 0;\n    &:focus {\n      outline: none;\n    }\n  }\n}\n.invalid {\n  color: $color-red;\n}\n\n.error {\n  font-size: 0.5rem;\n  color: $color-red;\n  &-repeatPassword,\n  &-oldPassword,\n  &-newPassword {\n    display: none;\n  }\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/links/link-mixin.scss':
      /*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/links/link-mixin.scss ***!
  \**************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n.link {\n  font-size: 0.6875rem;\n  line-height: 0.6875rem;\n}\n.link a {\n  text-decoration: none;\n  color: #3369f3;\n}\n\n.profile__link {\n  font-size: 0.8125rem;\n}\n.profile__link_exit {\n  font-size: 0.8125rem;\n}\n.profile__link_exit a {\n  text-decoration: none;\n  color: #f00;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/components/links/link-mixin.scss',
              'webpack://./src/assets/styles/colors.scss',
            ],
            names: [],
            mappings:
              'AACA,sBAAA;AACA;EACE,oBAAA;EACA,sBAAA;AAAF;AAEE;EACE,qBAAA;EACA,cCRY;ADQhB;;AAIA;EACE,oBAAA;AADF;AAGE;EACE,oBAAA;AADJ;AAGI;EACE,qBAAA;EACA,WCZM;ADWZ',
            sourcesContent: [
              "@import '../../assets/styles/colors';\n/* stylelint-disable */\n.link {\n  font-size: 0.6875rem;\n  line-height: 0.6875rem;\n\n  a {\n    text-decoration: none;\n    color: $color-primary;\n  }\n}\n\n.profile__link {\n  font-size: 0.8125rem;\n\n  &_exit {\n    font-size: 0.8125rem;\n\n    a {\n      text-decoration: none;\n      color: $color-red;\n    }\n  }\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/messages/message.scss':
      /*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/messages/message.scss ***!
  \**************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n.message {\n  padding: 15px 10px;\n  margin: 15px 0;\n  border-radius: 11px;\n  border-bottom-right-radius: 0;\n  box-sizing: border-box;\n  padding: 11px;\n  margin: 5px;\n  max-width: 150px;\n  max-width: 400px;\n  background: #e9ffff;\n  align-self: flex-start;\n  border-radius: 6px;\n}\n\n.message--mine {\n  border-radius: 11px;\n  border-bottom-right-radius: 0;\n  background-color: #e4edfd;\n  box-sizing: border-box;\n  padding: 11px;\n  margin: 5px;\n  align-self: flex-end;\n  max-width: 400px;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/components/messages/message.scss',
              'webpack://./src/assets/styles/colors.scss',
            ],
            names: [],
            mappings:
              'AACA,sBAAA;AACA;EACE,kBAAA;EACA,cAAA;EACA,mBAAA;EACA,6BAAA;EACA,sBAAA;EACA,aAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,mBAAA;EACA,6BAAA;EACA,yBCXc;EDYd,sBAAA;EACA,aAAA;EACA,WAAA;EACA,oBAAA;EACA,gBAAA;AAAF',
            sourcesContent: [
              "@import '../../assets/styles/colors';\n/* stylelint-disable */\n.message {\n  padding: 15px 10px;\n  margin: 15px 0;\n  border-radius: 11px;\n  border-bottom-right-radius: 0;\n  box-sizing: border-box;\n  padding: 11px;\n  margin: 5px;\n  max-width: 150px;\n  max-width: 400px;\n  background: #e9ffff;\n  align-self: flex-start;\n  border-radius: 6px;\n}\n\n.message--mine {\n  border-radius: 11px;\n  border-bottom-right-radius: 0;\n  background-color: $color-message;\n  box-sizing: border-box;\n  padding: 11px;\n  margin: 5px;\n  align-self: flex-end;\n  max-width: 400px;\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/profile-card/profile-card-mixin.scss':
      /*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/profile-card/profile-card-mixin.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n/**\n   * Remove the margin in all browsers.\n   */\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Remove the gray background on active links in IE 10.\n   */\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove the border on images inside links in IE 10.\n   */\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n[type=search] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n[type=search]::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n/**\n   * Add the correct display in IE 10+.\n   */\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n[hidden] {\n  display: none;\n}\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: #1e1e1e;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.profile-layout {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n}\n.profile-layout__sidebar {\n  height: 100%;\n  width: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #fbfbfb;\n  border-right: 0.0625rem #eaeaea solid;\n}\n.profile-layout__main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.profile-card {\n  max-width: 31.875rem;\n  max-height: 40rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.profile-card__user-info {\n  max-width: 8.125rem;\n  max-height: 11rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  margin-top: 2rem;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.profile-card__user-info-name {\n  font-weight: 600;\n}\n.profile-card__block {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  justify-content: space-between;\n}\n.profile-card__fields {\n  margin-top: 1rem;\n}\n.profile-card__actions {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 35%;\n}\n.profile-card__actions-btn {\n  display: flex;\n  justify-content: center;\n}\n.profile-card input {\n  width: 8rem;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/components/profile-card/profile-card-mixin.scss',
              'webpack://./src/assets/styles/normalize.css',
              'webpack://./src/assets/styles/base.scss',
              'webpack://./src/assets/styles/colors.scss',
            ],
            names: [],
            mappings:
              'AACA,sBAAA;ACDA,sBAAA;AACA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;ADDF;;ACIA;iFAAA;AAGA;;IAAA;AAIA;EACE,SAAA;ADHF;;ACMA;;IAAA;AAIA;EACE,cAAA;ADJF;;ACOA;;;IAAA;AAKA;EACE,gBAAA;EACA,cAAA;ADLF;;ACQA;iFAAA;AAGA;;;IAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ADPF;;ACUA;;;IAAA;AAKA;EACE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ADRF;;ACWA;iFAAA;AAGA;;IAAA;AAIA;EACE,6BAAA;ADVF;;ACaA;;;IAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;ADXF;;ACcA;;IAAA;AAIA;;EAEE,mBAAA;ADZF;;ACeA;;;IAAA;AAKA;;;EAGE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ADbF;;ACgBA;;IAAA;AAIA;EACE,cAAA;ADdF;;ACiBA;;;IAAA;AAKA;;EAEE,kBAAA;EACA,cAAA;EACA,cAAA;EACA,wBAAA;ADfF;;ACkBA;EACE,eAAA;ADfF;;ACkBA;EACE,WAAA;ADfF;;ACkBA;iFAAA;AAGA;;IAAA;AAIA;EACE,kBAAA;ADjBF;;ACoBA;iFAAA;AAGA;;;IAAA;AAKA;;;;;EAKE,SAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ADnBF;;ACsBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,iBAAA;ADpBF;;ACuBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,oBAAA;ADrBF;;ACwBA;;IAAA;AAIA;;;;EAIE,kBAAA;ADtBF;;ACyBA;;IAAA;AAIA;;;;EAIE,UAAA;EACA,kBAAA;ADvBF;;AC0BA;;IAAA;AAIA;;;;EAIE,8BAAA;ADxBF;;AC2BA;;IAAA;AAIA;EACE,8BAAA;ADzBF;;AC4BA;;;;;IAAA;AAOA;EACE,cAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AD1BF;;AC6BA;;IAAA;AAIA;EACE,wBAAA;AD3BF;;AC8BA;;IAAA;AAIA;EACE,cAAA;AD5BF;;AC+BA;;;IAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AD7BF;;ACgCA;;IAAA;AAIA;;EAEE,YAAA;AD9BF;;ACiCA;;;IAAA;AAKA;EACE,oBAAA,EAAA,MAAA;EACA,qBAAA,EAAA,MAAA;AD/BF;;ACkCA;;IAAA;AAIA;EACE,gBAAA;ADhCF;;ACmCA;;;IAAA;AAKA;EACE,aAAA,EAAA,MAAA;EACA,kBAAA,EAAA,MAAA;ADjCF;;ACoCA;iFAAA;AAGA;;IAAA;AAIA;EACE,cAAA;ADnCF;;ACsCA;;IAAA;AAIA;EACE,kBAAA;ADpCF;;ACuCA;iFAAA;AAGA;;IAAA;AAIA;EACE,aAAA;ADtCF;;ACyCA;;IAAA;AAIA;EACE,aAAA;ADvCF;;AEnTA;EACE,kBAAA;EACA,kBAAA;EACA,cCJW;EDKX,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;AFsTF;;AA5TA;EACE,aAAA;EACA,WAAA;EACA,aAAA;AA+TF;AA7TE;EACE,YAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBGhBe;EHiBf,qCAAA;AA+TJ;AAxTE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AA0TJ;;AAvTA;EACE,oBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AA0TF;AAxTE;EACE,mBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;AA0TJ;AAxTI;EACE,gBAAA;AA0TN;AAtTE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,8BAAA;AAwTJ;AArTE;EACE,gBAAA;AAuTJ;AArTE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;AAuTJ;AArTI;EACE,aAAA;EACA,uBAAA;AAuTN;AApTE;EACE,WAAA;AAsTJ',
            sourcesContent: [
              "@import '../../assets/styles/colors';\n/* stylelint-disable */\n@import '../../assets/styles/colors';\n@import '../../assets/styles/base';\n\n.profile-layout {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n\n  &__sidebar {\n    height: 100%;\n    width: 10%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: $color-bg-sidebar;\n    border-right: 0.0625rem $color-border solid;\n\n    // &-btn {\n    //   transform: rotate(-180deg);\n    // }\n  }\n\n  &__main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n}\n.profile-card {\n  max-width: 31.875rem;\n  max-height: 40rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  &__user-info {\n    max-width: 8.125rem;\n    max-height: 11rem;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    margin-top: 2rem;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n\n    &-name {\n      font-weight: 600;\n    }\n  }\n\n  &__block {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n    justify-content: space-between;\n  }\n\n  &__fields {\n    margin-top: 1rem;\n  }\n  &__actions {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 35%;\n\n    &-btn {\n      display: flex;\n      justify-content: center;\n    }\n  }\n  input {\n    width: 8rem;\n  }\n}\n",
              "/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n",
              "@use 'normalize.css';\n@import 'colors';\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: $color-dark;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/modules/chat/components/sidebar/user-chats/user-chats.scss':
      /*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/modules/chat/components/sidebar/user-chats/user-chats.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n.user-chats__block {\n  max-height: 4.1875rem;\n  height: 100%;\n  min-width: 18.125rem;\n  border-bottom: 0.0625rem #eaeaea solid;\n}\n.user-chats__block .user-chats__container {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.625rem;\n  margin-bottom: 0.625rem;\n}\n.user-chats__block .user-chats__img {\n  background-color: #efefef;\n  width: 2.9375rem;\n  height: 2.9375rem;\n  border-radius: 50%;\n}\n.user-chats__block .user-chats__content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.user-chats__block .user-chats__content-name {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 13px;\n}\n.user-chats__block .user-chats__content-message {\n  width: 12.0625rem;\n  height: 1.875rem;\n  color: #999;\n}\n.user-chats__block .user-chats__notify {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.user-chats__block .user-chats__notify-time {\n  font-weight: 500;\n  font-size: 9px;\n  line-height: 13px;\n  color: #999;\n}\n.user-chats__block .user-chats__notify-new-messages {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #3369f3;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n  color: #efefef;\n  font-size: 11px;\n  line-height: 12px;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/modules/chat/components/sidebar/user-chats/user-chats.scss',
              'webpack://./src/assets/styles/colors.scss',
            ],
            names: [],
            mappings:
              'AACA,sBAAA;AACA;EACE,qBAAA;EACA,YAAA;EACA,oBAAA;EACA,sCAAA;AAAF;AAIE;EACE,aAAA;EACA,8BAAA;EACA,oBAAA;EACA,uBAAA;AAFJ;AAKE;EACE,yBCZc;EDad,gBAAA;EACA,iBAAA;EACA,kBAAA;AAHJ;AAME;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;AAJJ;AAMI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAJN;AAOI;EACE,iBAAA;EACA,gBAAA;EACA,WC/BY;AD0BlB;AASE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;AAPJ;AASI;EACE,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,WC7CY;ADsClB;AAUI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBC3DU;ED4DV,cAAA;EACA,eAAA;EACA,kBAAA;EACA,cCzDY;ED0DZ,eAAA;EACA,iBAAA;AARN',
            sourcesContent: [
              "@import '../../../../../assets/styles/colors';\n/* stylelint-disable */\n.user-chats__block {\n  max-height: 4.1875rem;\n  height: 100%;\n  min-width: 18.125rem;\n  border-bottom: 0.0625rem $color-border solid;\n  // &--selected {\n  //   background-color: aqua;\n  // }\n  .user-chats__container {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 0.625rem;\n    margin-bottom: 0.625rem;\n  }\n\n  .user-chats__img {\n    background-color: $color-bg-avatar;\n    width: 2.9375rem;\n    height: 2.9375rem;\n    border-radius: 50%;\n  }\n\n  .user-chats__content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    &-name {\n      font-weight: 600;\n      font-size: 13px;\n      line-height: 13px;\n    }\n\n    &-message {\n      width: 12.0625rem;\n      height: 1.875rem;\n      color: $color-dark-gray;\n    }\n  }\n\n  .user-chats__notify {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n\n    &-time {\n      font-weight: 500;\n      font-size: 9px;\n      line-height: 13px;\n      color: $color-dark-gray;\n    }\n\n    &-new-messages {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: $color-primary;\n      width: 1.25rem;\n      height: 1.25rem;\n      border-radius: 50%;\n      color: $color-bg-avatar;\n      font-size: 11px;\n      line-height: 12px;\n    }\n  }\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/404/404.scss':
      /*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/404/404.scss ***!
  \************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n/**\n   * Remove the margin in all browsers.\n   */\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Remove the gray background on active links in IE 10.\n   */\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove the border on images inside links in IE 10.\n   */\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n[type=search] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n[type=search]::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n/**\n   * Add the correct display in IE 10+.\n   */\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n[hidden] {\n  display: none;\n}\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: #1e1e1e;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.main-layout {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.error-message-wrapper {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.error-message {\n  width: 14.5rem;\n  height: 14.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.error-message__code {\n  font-size: 2.5rem;\n  line-height: 2.5rem;\n  color: #1e1e1e;\n  margin-bottom: 0.3125rem;\n}\n.error-message__text {\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n  color: #1e1e1e;\n  margin-bottom: 4rem;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/assets/styles/normalize.css',
              'webpack://./src/views/404/404.scss',
              'webpack://./src/assets/styles/base.scss',
              'webpack://./src/assets/styles/colors.scss',
              'webpack://./src/layouts/main-layout/main-layout.scss',
            ],
            names: [],
            mappings:
              'AAAA,sBAAA;AACA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;ACFF;;ADKA;iFAAA;AAGA;;IAAA;AAIA;EACE,SAAA;ACJF;;ADOA;;IAAA;AAIA;EACE,cAAA;ACLF;;ADQA;;;IAAA;AAKA;EACE,gBAAA;EACA,cAAA;ACNF;;ADSA;iFAAA;AAGA;;;IAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACRF;;ADWA;;;IAAA;AAKA;EACE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ACTF;;ADYA;iFAAA;AAGA;;IAAA;AAIA;EACE,6BAAA;ACXF;;ADcA;;;IAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;ACZF;;ADeA;;IAAA;AAIA;;EAEE,mBAAA;ACbF;;ADgBA;;;IAAA;AAKA;;;EAGE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ACdF;;ADiBA;;IAAA;AAIA;EACE,cAAA;ACfF;;ADkBA;;;IAAA;AAKA;;EAEE,kBAAA;EACA,cAAA;EACA,cAAA;EACA,wBAAA;AChBF;;ADmBA;EACE,eAAA;AChBF;;ADmBA;EACE,WAAA;AChBF;;ADmBA;iFAAA;AAGA;;IAAA;AAIA;EACE,kBAAA;AClBF;;ADqBA;iFAAA;AAGA;;;IAAA;AAKA;;;;;EAKE,SAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACpBF;;ADuBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,iBAAA;ACrBF;;ADwBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,oBAAA;ACtBF;;ADyBA;;IAAA;AAIA;;;;EAIE,kBAAA;ACvBF;;AD0BA;;IAAA;AAIA;;;;EAIE,UAAA;EACA,kBAAA;ACxBF;;AD2BA;;IAAA;AAIA;;;;EAIE,8BAAA;ACzBF;;AD4BA;;IAAA;AAIA;EACE,8BAAA;AC1BF;;AD6BA;;;;;IAAA;AAOA;EACE,cAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AC3BF;;AD8BA;;IAAA;AAIA;EACE,wBAAA;AC5BF;;AD+BA;;IAAA;AAIA;EACE,cAAA;AC7BF;;ADgCA;;;IAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AC9BF;;ADiCA;;IAAA;AAIA;;EAEE,YAAA;AC/BF;;ADkCA;;;IAAA;AAKA;EACE,oBAAA,EAAA,MAAA;EACA,qBAAA,EAAA,MAAA;AChCF;;ADmCA;;IAAA;AAIA;EACE,gBAAA;ACjCF;;ADoCA;;;IAAA;AAKA;EACE,aAAA,EAAA,MAAA;EACA,kBAAA,EAAA,MAAA;AClCF;;ADqCA;iFAAA;AAGA;;IAAA;AAIA;EACE,cAAA;ACpCF;;ADuCA;;IAAA;AAIA;EACE,kBAAA;ACrCF;;ADwCA;iFAAA;AAGA;;IAAA;AAIA;EACE,aAAA;ACvCF;;AD0CA;;IAAA;AAIA;EACE,aAAA;ACxCF;;AClTA;EACE,kBAAA;EACA,kBAAA;EACA,cCJW;EDKX,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;ADqTF;;AG9TA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AHiUF;;AArUA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAwUF;;AArUA;EACE,cAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAwUF;AAtUE;EACE,iBAAA;EACA,mBAAA;EACA,cEnBS;EFoBT,wBAAA;AAwUJ;AArUE;EACE,kBAAA;EACA,oBAAA;EACA,cE1BS;EF2BT,mBAAA;AAuUJ',
            sourcesContent: [
              "/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n",
              "@import '../../assets/styles/colors';\n@import '../../layouts/main-layout/main-layout';\n\n.error-message-wrapper {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.error-message {\n  width: 14.5rem;\n  height: 14.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  &__code {\n    font-size: 2.5rem;\n    line-height: 2.5rem;\n    color: $color-dark;\n    margin-bottom: 0.3125rem;\n  }\n\n  &__text {\n    font-size: 1.25rem;\n    line-height: 1.25rem;\n    color: $color-dark;\n    margin-bottom: 4rem;\n  }\n}\n",
              "@use 'normalize.css';\n@import 'colors';\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: $color-dark;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
              "@import '../../assets/styles/base';\n\n.main-layout {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/auth/signIn/signIn.scss':
      /*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/auth/signIn/signIn.scss ***!
  \***********************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n/**\n   * Remove the margin in all browsers.\n   */\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Remove the gray background on active links in IE 10.\n   */\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove the border on images inside links in IE 10.\n   */\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n[type=search] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n[type=search]::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n/**\n   * Add the correct display in IE 10+.\n   */\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n[hidden] {\n  display: none;\n}\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: #1e1e1e;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.main-layout {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/* stylelint-disable */\n.auth-layout {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.sign-in {\n  height: 28.125rem;\n  width: 21.25rem;\n  border-radius: 0.75rem;\n  box-shadow: 0rem 0rem 0.375rem rgba(0, 0, 0, 0.14);\n}\n.sign-in__block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 3rem;\n}\n.sign-in__block-title {\n  font-weight: 500;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n  color: #1e1e1e;\n}\n.sign-in__block-login-input {\n  display: flex;\n  flex-direction: column;\n  margin-top: 3rem;\n  height: 4.5rem;\n  justify-content: space-between;\n}\n.sign-in__block-auth-btn {\n  max-width: 17.5rem;\n  width: 100%;\n  margin-top: 11rem;\n}\n.sign-in__block-sign-up {\n  margin-top: 0.5rem;\n}\n.sign-in__block .input__field-login, .sign-in__block .input__field-password {\n  border: 0;\n  border-bottom: 0.0625rem #3369f3 solid;\n}\n.sign-in__block .input__field-login:focus, .sign-in__block .input__field-password:focus {\n  outline: none;\n}\n.sign-in__block .invalid {\n  border-bottom: 0.0625rem #f00 solid;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/assets/styles/normalize.css',
              'webpack://./src/views/auth/signIn/signIn.scss',
              'webpack://./src/assets/styles/base.scss',
              'webpack://./src/assets/styles/colors.scss',
              'webpack://./src/layouts/main-layout/main-layout.scss',
            ],
            names: [],
            mappings:
              'AAAA,sBAAA;AACA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;ACFF;;ADKA;iFAAA;AAGA;;IAAA;AAIA;EACE,SAAA;ACJF;;ADOA;;IAAA;AAIA;EACE,cAAA;ACLF;;ADQA;;;IAAA;AAKA;EACE,gBAAA;EACA,cAAA;ACNF;;ADSA;iFAAA;AAGA;;;IAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACRF;;ADWA;;;IAAA;AAKA;EACE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ACTF;;ADYA;iFAAA;AAGA;;IAAA;AAIA;EACE,6BAAA;ACXF;;ADcA;;;IAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;ACZF;;ADeA;;IAAA;AAIA;;EAEE,mBAAA;ACbF;;ADgBA;;;IAAA;AAKA;;;EAGE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ACdF;;ADiBA;;IAAA;AAIA;EACE,cAAA;ACfF;;ADkBA;;;IAAA;AAKA;;EAEE,kBAAA;EACA,cAAA;EACA,cAAA;EACA,wBAAA;AChBF;;ADmBA;EACE,eAAA;AChBF;;ADmBA;EACE,WAAA;AChBF;;ADmBA;iFAAA;AAGA;;IAAA;AAIA;EACE,kBAAA;AClBF;;ADqBA;iFAAA;AAGA;;;IAAA;AAKA;;;;;EAKE,SAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACpBF;;ADuBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,iBAAA;ACrBF;;ADwBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,oBAAA;ACtBF;;ADyBA;;IAAA;AAIA;;;;EAIE,kBAAA;ACvBF;;AD0BA;;IAAA;AAIA;;;;EAIE,UAAA;EACA,kBAAA;ACxBF;;AD2BA;;IAAA;AAIA;;;;EAIE,8BAAA;ACzBF;;AD4BA;;IAAA;AAIA;EACE,8BAAA;AC1BF;;AD6BA;;;;;IAAA;AAOA;EACE,cAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AC3BF;;AD8BA;;IAAA;AAIA;EACE,wBAAA;AC5BF;;AD+BA;;IAAA;AAIA;EACE,cAAA;AC7BF;;ADgCA;;;IAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AC9BF;;ADiCA;;IAAA;AAIA;;EAEE,YAAA;AC/BF;;ADkCA;;;IAAA;AAKA;EACE,oBAAA,EAAA,MAAA;EACA,qBAAA,EAAA,MAAA;AChCF;;ADmCA;;IAAA;AAIA;EACE,gBAAA;ACjCF;;ADoCA;;;IAAA;AAKA;EACE,aAAA,EAAA,MAAA;EACA,kBAAA,EAAA,MAAA;AClCF;;ADqCA;iFAAA;AAGA;;IAAA;AAIA;EACE,cAAA;ACpCF;;ADuCA;;IAAA;AAIA;EACE,kBAAA;ACrCF;;ADwCA;iFAAA;AAGA;;IAAA;AAIA;EACE,aAAA;ACvCF;;AD0CA;;IAAA;AAIA;EACE,aAAA;ACxCF;;AClTA;EACE,kBAAA;EACA,kBAAA;EACA,cCJW;EDKX,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;ADqTF;;AG9TA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AHiUF;;AAtUA,sBAAA;AACA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAyUF;;AAvUA;EACE,iBAAA;EACA,eAAA;EACA,sBAAA;EACA,kDAAA;AA0UF;AAxUE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AA0UJ;AAxUI;EACE,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,cExBO;AFkWb;AAvUI;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,cAAA;EACA,8BAAA;AAyUN;AAtUI;EACE,kBAAA;EACA,WAAA;EACA,iBAAA;AAwUN;AArUI;EACE,kBAAA;AAuUN;AAnUM;EAEE,SAAA;EACA,sCAAA;AAoUR;AAnUQ;EACE,aAAA;AAqUV;AAjUI;EACE,mCAAA;AAmUN',
            sourcesContent: [
              "/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n",
              "@import '../../../assets/styles/colors';\n@import '../../../layouts/main-layout/main-layout';\n/* stylelint-disable */\n.auth-layout {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.sign-in {\n  height: 28.125rem;\n  width: 21.25rem;\n  border-radius: 0.75rem;\n  box-shadow: 0rem 0rem 0.375rem rgba(0, 0, 0, 0.14);\n\n  &__block {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 3rem;\n\n    &-title {\n      font-weight: 500;\n      font-size: 1.25rem;\n      line-height: 1.25rem;\n      color: $color-dark;\n    }\n\n    &-login-input {\n      display: flex;\n      flex-direction: column;\n      margin-top: 3rem;\n      height: 4.5rem;\n      justify-content: space-between;\n    }\n\n    &-auth-btn {\n      max-width: 17.5rem;\n      width: 100%;\n      margin-top: 11rem;\n    }\n\n    &-sign-up {\n      margin-top: 0.5rem;\n    }\n\n    .input__field {\n      &-login,\n      &-password {\n        border: 0;\n        border-bottom: 0.0625rem $color-primary solid;\n        &:focus {\n          outline: none;\n        }\n      }\n    }\n    .invalid {\n      border-bottom: 0.0625rem $color-red solid;\n    }\n  }\n}\n",
              "@use 'normalize.css';\n@import 'colors';\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: $color-dark;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
              "@import '../../assets/styles/base';\n\n.main-layout {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/auth/signUp/signUp.scss':
      /*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/auth/signUp/signUp.scss ***!
  \***********************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n/**\n   * Remove the margin in all browsers.\n   */\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Remove the gray background on active links in IE 10.\n   */\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove the border on images inside links in IE 10.\n   */\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n[type=search] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n[type=search]::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n/**\n   * Add the correct display in IE 10+.\n   */\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n[hidden] {\n  display: none;\n}\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: #1e1e1e;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.main-layout {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/* stylelint-disable */\n.signUp {\n  height: 30rem;\n  width: 21.25rem;\n  border-radius: 0.75rem;\n  box-shadow: 0rem 0rem 0.375rem rgba(0, 0, 0, 0.14);\n}\n.signUp__block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 2rem;\n}\n.signUp__block-block {\n  font-weight: 500;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n  color: #1e1e1e;\n}\n.signUp__block-user-info-input {\n  margin-top: 1rem;\n  height: 19rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.signUp__block-auth-btn {\n  max-width: 17.5rem;\n  width: 100%;\n  margin-top: 2.5rem;\n}\n.signUp__block-signUp {\n  margin-top: 0.5rem;\n}\n.signUp__block .input__field-login, .signUp__block .input__field-password, .signUp__block .input__field-email, .signUp__block .input__field-first_name, .signUp__block .input__field-second_name, .signUp__block .input__field-phone, .signUp__block .input__field-repeatPassword {\n  border: 0;\n  border-bottom: 0.0625rem #3369f3 solid;\n}\n.signUp__block .input__field-login:focus, .signUp__block .input__field-password:focus, .signUp__block .input__field-email:focus, .signUp__block .input__field-first_name:focus, .signUp__block .input__field-second_name:focus, .signUp__block .input__field-phone:focus, .signUp__block .input__field-repeatPassword:focus {\n  outline: none;\n}\n.signUp__block .invalid {\n  border-bottom: 0.0625rem #f00 solid;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/assets/styles/normalize.css',
              'webpack://./src/views/auth/signUp/signUp.scss',
              'webpack://./src/assets/styles/base.scss',
              'webpack://./src/assets/styles/colors.scss',
              'webpack://./src/layouts/main-layout/main-layout.scss',
            ],
            names: [],
            mappings:
              'AAAA,sBAAA;AACA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;ACFF;;ADKA;iFAAA;AAGA;;IAAA;AAIA;EACE,SAAA;ACJF;;ADOA;;IAAA;AAIA;EACE,cAAA;ACLF;;ADQA;;;IAAA;AAKA;EACE,gBAAA;EACA,cAAA;ACNF;;ADSA;iFAAA;AAGA;;;IAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACRF;;ADWA;;;IAAA;AAKA;EACE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ACTF;;ADYA;iFAAA;AAGA;;IAAA;AAIA;EACE,6BAAA;ACXF;;ADcA;;;IAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;ACZF;;ADeA;;IAAA;AAIA;;EAEE,mBAAA;ACbF;;ADgBA;;;IAAA;AAKA;;;EAGE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ACdF;;ADiBA;;IAAA;AAIA;EACE,cAAA;ACfF;;ADkBA;;;IAAA;AAKA;;EAEE,kBAAA;EACA,cAAA;EACA,cAAA;EACA,wBAAA;AChBF;;ADmBA;EACE,eAAA;AChBF;;ADmBA;EACE,WAAA;AChBF;;ADmBA;iFAAA;AAGA;;IAAA;AAIA;EACE,kBAAA;AClBF;;ADqBA;iFAAA;AAGA;;;IAAA;AAKA;;;;;EAKE,SAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACpBF;;ADuBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,iBAAA;ACrBF;;ADwBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,oBAAA;ACtBF;;ADyBA;;IAAA;AAIA;;;;EAIE,kBAAA;ACvBF;;AD0BA;;IAAA;AAIA;;;;EAIE,UAAA;EACA,kBAAA;ACxBF;;AD2BA;;IAAA;AAIA;;;;EAIE,8BAAA;ACzBF;;AD4BA;;IAAA;AAIA;EACE,8BAAA;AC1BF;;AD6BA;;;;;IAAA;AAOA;EACE,cAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AC3BF;;AD8BA;;IAAA;AAIA;EACE,wBAAA;AC5BF;;AD+BA;;IAAA;AAIA;EACE,cAAA;AC7BF;;ADgCA;;;IAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AC9BF;;ADiCA;;IAAA;AAIA;;EAEE,YAAA;AC/BF;;ADkCA;;;IAAA;AAKA;EACE,oBAAA,EAAA,MAAA;EACA,qBAAA,EAAA,MAAA;AChCF;;ADmCA;;IAAA;AAIA;EACE,gBAAA;ACjCF;;ADoCA;;;IAAA;AAKA;EACE,aAAA,EAAA,MAAA;EACA,kBAAA,EAAA,MAAA;AClCF;;ADqCA;iFAAA;AAGA;;IAAA;AAIA;EACE,cAAA;ACpCF;;ADuCA;;IAAA;AAIA;EACE,kBAAA;ACrCF;;ADwCA;iFAAA;AAGA;;IAAA;AAIA;EACE,aAAA;ACvCF;;AD0CA;;IAAA;AAIA;EACE,aAAA;ACxCF;;AClTA;EACE,kBAAA;EACA,kBAAA;EACA,cCJW;EDKX,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;ADqTF;;AG9TA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AHiUF;;AAtUA,sBAAA;AACA;EACE,aAAA;EACA,eAAA;EACA,sBAAA;EACA,kDAAA;AAyUF;AAvUE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AAyUJ;AAvUI;EACE,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,cEjBO;AF0Vb;AAtUI;EACE,gBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AAwUN;AArUI;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;AAuUN;AApUI;EACE,kBAAA;AAsUN;AAlUM;EAOE,SAAA;EACA,sCAAA;AA8TR;AA7TQ;EACE,aAAA;AA+TV;AA3TI;EACE,mCAAA;AA6TN',
            sourcesContent: [
              "/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n",
              "@import '../../../assets/styles/colors';\n@import '../../../layouts/main-layout/main-layout';\n/* stylelint-disable */\n.signUp {\n  height: 30rem;\n  width: 21.25rem;\n  border-radius: 0.75rem;\n  box-shadow: 0rem 0rem 0.375rem rgba(0, 0, 0, 0.14);\n\n  &__block {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 2rem;\n\n    &-block {\n      font-weight: 500;\n      font-size: 1.25rem;\n      line-height: 1.25rem;\n      color: $color-dark;\n    }\n\n    &-user-info-input {\n      margin-top: 1rem;\n      height: 19rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    }\n\n    &-auth-btn {\n      max-width: 17.5rem;\n      width: 100%;\n      margin-top: 2.5rem;\n    }\n\n    &-signUp {\n      margin-top: 0.5rem;\n    }\n\n    .input__field {\n      &-login,\n      &-password,\n      &-email,\n      &-first_name,\n      &-second_name,\n      &-phone,\n      &-repeatPassword {\n        border: 0;\n        border-bottom: 0.0625rem $color-primary solid;\n        &:focus {\n          outline: none;\n        }\n      }\n    }\n    .invalid {\n      border-bottom: 0.0625rem $color-red solid;\n    }\n  }\n}\n",
              "@use 'normalize.css';\n@import 'colors';\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: $color-dark;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
              "@import '../../assets/styles/base';\n\n.main-layout {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/chat/chat.scss':
      /*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/chat/chat.scss ***!
  \**************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n/**\n   * Remove the margin in all browsers.\n   */\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Remove the gray background on active links in IE 10.\n   */\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove the border on images inside links in IE 10.\n   */\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n[type=search] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n[type=search]::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n/**\n   * Add the correct display in IE 10+.\n   */\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n[hidden] {\n  display: none;\n}\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: #1e1e1e;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.chat-layout {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 15px;\n}\n\n/* stylelint-disable */\n.user-chats__block {\n  max-height: 4.1875rem;\n  height: 100%;\n  min-width: 18.125rem;\n  border-bottom: 0.0625rem #eaeaea solid;\n}\n.user-chats__block .user-chats__container {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.625rem;\n  margin-bottom: 0.625rem;\n}\n.user-chats__block .user-chats__img {\n  background-color: #efefef;\n  width: 2.9375rem;\n  height: 2.9375rem;\n  border-radius: 50%;\n}\n.user-chats__block .user-chats__content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.user-chats__block .user-chats__content-name {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 13px;\n}\n.user-chats__block .user-chats__content-message {\n  width: 12.0625rem;\n  height: 1.875rem;\n  color: #999;\n}\n.user-chats__block .user-chats__notify {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.user-chats__block .user-chats__notify-time {\n  font-weight: 500;\n  font-size: 9px;\n  line-height: 13px;\n  color: #999;\n}\n.user-chats__block .user-chats__notify-new-messages {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #3369f3;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n  color: #efefef;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n/* stylelint-disable */\n.sidebar__header {\n  height: 6.375rem;\n  display: flex;\n  flex-direction: column;\n  border-bottom: 0.0625rem #eaeaea solid;\n}\n.sidebar__header-profile {\n  height: 50%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.sidebar__header-profile-block {\n  display: flex;\n  max-width: 4.375rem;\n  max-height: 3.375rem;\n  justify-content: space-around;\n  margin-right: 0.5rem;\n}\n.sidebar__header-profile-block a {\n  text-decoration: none;\n  color: #999;\n}\n.sidebar__header-profile-block-text, .sidebar__header-profile-block-arrow {\n  font-weight: 500;\n  font-size: 0.75rem;\n  line-height: 0.75rem;\n  color: #999;\n  margin-right: 0.2rem;\n}\n.sidebar__header-profile-block-arrow {\n  display: inline-block;\n  border: 0.0625rem solid #999;\n  border-width: 0 0.0625rem 0.0625rem 0;\n  width: 0.3rem;\n  height: 0.3rem;\n  margin-top: 0.25rem;\n  transform: rotate(-45deg);\n}\n.sidebar__header-search {\n  display: flex;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.sidebar__header-search-block {\n  max-width: 18.125rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  max-height: 2rem;\n  height: 100%;\n  background: #efefef;\n  border-radius: 0.3125rem;\n  font-weight: 500;\n  font-size: 0.75rem;\n  line-height: 0.75rem;\n  color: #999;\n}\n.sidebar__header-search-block-icon {\n  padding-left: 5%;\n  display: flex;\n  align-items: center;\n}\n.sidebar__header-search-block-icon input {\n  height: 80%;\n  background: #efefef;\n  border: 0;\n  width: 80%;\n}\n\n.user-chats {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n/* stylelint-disable */\n.main-chat-header__block {\n  display: flex;\n  align-items: center;\n  margin-right: 1.25rem;\n  margin-left: 1.25rem;\n  width: 100%;\n  height: 100%;\n  border-bottom: 1px solid #eaeaea;\n}\n\n.delete-user {\n  display: flex;\n  width: 100%;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n\n.main-chat-header__items {\n  display: flex;\n  width: 100%;\n}\n\n.main-chat-header__user-info {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.main-chat-header__icon {\n  width: 2.125rem;\n  height: 2.125rem;\n  background: #efefef;\n  border-radius: 50%;\n}\n\n.main-chat-header__name {\n  margin-left: 0.5rem;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  line-height: 0.8125rem;\n}\n\n/* stylelint-disable */\n.main-chat-bottom__block {\n  display: flex;\n  align-items: center;\n  margin-right: 1.25rem;\n  margin-left: 1.25rem;\n  width: 100%;\n  border-top: 1px solid #eaeaea;\n}\n\n.main-chat-bottom__items {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.main-chat-bottom__message-panel {\n  width: 95%;\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n  background: #efefef;\n  display: flex;\n  align-items: center;\n  border-radius: 1.875rem;\n}\n.main-chat-bottom__message-panel_text {\n  margin-left: 1rem;\n}\n.main-chat-bottom__message-panel input {\n  border: 0;\n  background: #efefef;\n}\n.main-chat-bottom__message-panel input:focus {\n  outline: none;\n}\n.main-chat-bottom__message-panel .invalid {\n  color: #f00;\n}\n\n/* stylelint-disable */\n.main-chat__header, .main-chat__bottom {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  max-height: 3.375rem;\n}\n.main-chat__dialogs {\n  height: 89%;\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n  font-size: 0.75rem;\n  line-height: 0.75rem;\n  overflow-y: scroll;\n}\n\n.no-selected {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.main-chat-bottom__block {\n  display: flex;\n  align-items: center;\n  margin-right: 1.25rem;\n  margin-left: 1.25rem;\n  width: 100%;\n  border-top: 1px solid #eaeaea;\n}\n\n.main-chat-bottom__items {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.main-chat-bottom__message-panel {\n  width: 95%;\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n  background: #efefef;\n  display: flex;\n  align-items: center;\n  border-radius: 1.875rem;\n}\n.main-chat-bottom__message-panel_text {\n  margin-left: 1rem;\n}\n.main-chat-bottom__message-panel input {\n  border: 0;\n  background: #efefef;\n}\n.main-chat-bottom__message-panel input:focus {\n  outline: none;\n}\n.main-chat-bottom__message-panel .invalid {\n  color: #f00;\n}\n\n.chat {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 15px;\n}\n\n.sidebar {\n  max-width: 19.375rem;\n  width: 100%;\n  background: #fbfbfb;\n  display: flex;\n  flex-direction: column;\n}\n\n.main-chat {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/assets/styles/normalize.css',
              'webpack://./src/views/chat/chat.scss',
              'webpack://./src/assets/styles/base.scss',
              'webpack://./src/assets/styles/colors.scss',
              'webpack://./src/layouts/chat-layout/chat-layout.scss',
              'webpack://./src/modules/chat/components/sidebar/user-chats/user-chats.scss',
              'webpack://./src/modules/chat/components/sidebar/sidebar.scss',
              'webpack://./src/modules/chat/components/main-chat/main-chat-header/main-chat-header.scss',
              'webpack://./src/modules/chat/components/main-chat/main-chat-bottom/main-chat-bottom.scss',
              'webpack://./src/modules/chat/components/main-chat/main-chat.scss',
            ],
            names: [],
            mappings:
              'AAAA,sBAAA;AACA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;ACFF;;ADKA;iFAAA;AAGA;;IAAA;AAIA;EACE,SAAA;ACJF;;ADOA;;IAAA;AAIA;EACE,cAAA;ACLF;;ADQA;;;IAAA;AAKA;EACE,gBAAA;EACA,cAAA;ACNF;;ADSA;iFAAA;AAGA;;;IAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACRF;;ADWA;;;IAAA;AAKA;EACE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ACTF;;ADYA;iFAAA;AAGA;;IAAA;AAIA;EACE,6BAAA;ACXF;;ADcA;;;IAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;ACZF;;ADeA;;IAAA;AAIA;;EAEE,mBAAA;ACbF;;ADgBA;;;IAAA;AAKA;;;EAGE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ACdF;;ADiBA;;IAAA;AAIA;EACE,cAAA;ACfF;;ADkBA;;;IAAA;AAKA;;EAEE,kBAAA;EACA,cAAA;EACA,cAAA;EACA,wBAAA;AChBF;;ADmBA;EACE,eAAA;AChBF;;ADmBA;EACE,WAAA;AChBF;;ADmBA;iFAAA;AAGA;;IAAA;AAIA;EACE,kBAAA;AClBF;;ADqBA;iFAAA;AAGA;;;IAAA;AAKA;;;;;EAKE,SAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACpBF;;ADuBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,iBAAA;ACrBF;;ADwBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,oBAAA;ACtBF;;ADyBA;;IAAA;AAIA;;;;EAIE,kBAAA;ACvBF;;AD0BA;;IAAA;AAIA;;;;EAIE,UAAA;EACA,kBAAA;ACxBF;;AD2BA;;IAAA;AAIA;;;;EAIE,8BAAA;ACzBF;;AD4BA;;IAAA;AAIA;EACE,8BAAA;AC1BF;;AD6BA;;;;;IAAA;AAOA;EACE,cAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AC3BF;;AD8BA;;IAAA;AAIA;EACE,wBAAA;AC5BF;;AD+BA;;IAAA;AAIA;EACE,cAAA;AC7BF;;ADgCA;;;IAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AC9BF;;ADiCA;;IAAA;AAIA;;EAEE,YAAA;AC/BF;;ADkCA;;;IAAA;AAKA;EACE,oBAAA,EAAA,MAAA;EACA,qBAAA,EAAA,MAAA;AChCF;;ADmCA;;IAAA;AAIA;EACE,gBAAA;ACjCF;;ADoCA;;;IAAA;AAKA;EACE,aAAA,EAAA,MAAA;EACA,kBAAA,EAAA,MAAA;AClCF;;ADqCA;iFAAA;AAGA;;IAAA;AAIA;EACE,cAAA;ACpCF;;ADuCA;;IAAA;AAIA;EACE,kBAAA;ACrCF;;ADwCA;iFAAA;AAGA;;IAAA;AAIA;EACE,aAAA;ACvCF;;AD0CA;;IAAA;AAIA;EACE,aAAA;ACxCF;;AClTA;EACE,kBAAA;EACA,kBAAA;EACA,cCJW;EDKX,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;ADqTF;;AG9TA;EACE,aAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AHiUF;;AIzUA,sBAAA;AACA;EACE,qBAAA;EACA,YAAA;EACA,oBAAA;EACA,sCAAA;AJ4UF;AIxUE;EACE,aAAA;EACA,8BAAA;EACA,oBAAA;EACA,uBAAA;AJ0UJ;AIvUE;EACE,yBFZc;EEad,gBAAA;EACA,iBAAA;EACA,kBAAA;AJyUJ;AItUE;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;AJwUJ;AItUI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AJwUN;AIrUI;EACE,iBAAA;EACA,gBAAA;EACA,WF/BY;AFsWlB;AInUE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;AJqUJ;AInUI;EACE,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,WF7CY;AFkXlB;AIlUI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBF3DU;EE4DV,cAAA;EACA,eAAA;EACA,kBAAA;EACA,cFzDY;EE0DZ,eAAA;EACA,iBAAA;AJoUN;;AKnYA,sBAAA;AAEE;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,sCAAA;ALqYJ;AKlYE;EACE,WAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;ALoYJ;AKlYI;EACE,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,6BAAA;EACA,oBAAA;ALoYN;AKlYM;EACE,qBAAA;EACA,WHnBU;AFuZlB;AKlYM;EAEE,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,WH1BU;EG2BV,oBAAA;ALmYR;AKhYM;EACE,qBAAA;EACA,4BAAA;EACA,qCAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,yBAAA;ALkYR;AK9XE;EACE,aAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ALgYJ;AK9XI;EACE,oBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,mBHzDY;EG0DZ,wBAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,WH7DY;AF6blB;AK9XM;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;ALgYR;AK/XQ;EACE,WAAA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;ALiYV;;AK1XA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AL6XF;;AMtdA,sBAAA;AACA;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,gCAAA;ANydF;;AMvdA;EACE,aAAA;EACA,WAAA;EACA,qBAAA;EACA,yBAAA;AN0dF;;AMxdA;EACE,aAAA;EACA,WAAA;AN2dF;;AMxdA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AN2dF;;AMxdA;EACE,eAAA;EACA,gBAAA;EACA,mBJzBgB;EI0BhB,kBAAA;AN2dF;;AMxdA;EACE,mBAAA;EACA,gBAAA;EACA,oBAAA;EACA,sBAAA;AN2dF;;AOjgBA,sBAAA;AACA;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,oBAAA;EACA,WAAA;EACA,6BAAA;APogBF;;AOjgBA;EACE,aAAA;EACA,WAAA;EACA,8BAAA;APogBF;;AOjgBA;EACE,UAAA;EACA,oBAAA;EACA,mBAAA;EACA,mBLfgB;EKgBhB,aAAA;EACA,mBAAA;EACA,uBAAA;APogBF;AOlgBE;EACE,iBAAA;APogBJ;AOlgBE;EACE,SAAA;EACA,mBLzBc;AF6hBlB;AOngBI;EACE,aAAA;APqgBN;AOjgBE;EACE,WL9BQ;AFiiBZ;;AQtiBA,sBAAA;AAEE;EAEE,aAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;ARuiBJ;AQpiBE;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,kBAAA;ARsiBJ;;AQliBA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;ARqiBF;;AQniBA;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,oBAAA;EACA,WAAA;EACA,6BAAA;ARsiBF;;AQniBA;EACE,aAAA;EACA,WAAA;EACA,8BAAA;ARsiBF;;AQniBA;EACE,UAAA;EACA,oBAAA;EACA,mBAAA;EACA,mBN7CgB;EM8ChB,aAAA;EACA,mBAAA;EACA,uBAAA;ARsiBF;AQpiBE;EACE,iBAAA;ARsiBJ;AQpiBE;EACE,SAAA;EACA,mBNvDc;AF6lBlB;AQriBI;EACE,aAAA;ARuiBN;AQniBE;EACE,WN5DQ;AFimBZ;;AApmBA;EACE,aAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAumBF;;AApmBA;EACE,oBAAA;EACA,WAAA;EACA,mBEjBiB;EFkBjB,aAAA;EACA,sBAAA;AAumBF;;AApmBA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AAumBF',
            sourcesContent: [
              "/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n",
              "@import '../../layouts/chat-layout/chat-layout';\n@import '../../assets/styles/colors';\n@import '../../modules/chat/components/sidebar/sidebar';\n@import '../../modules/chat/components/main-chat/main-chat';\n\n.chat {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 15px;\n}\n\n.sidebar {\n  max-width: 19.375rem;\n  width: 100%;\n  background: $color-bg-sidebar;\n  display: flex;\n  flex-direction: column;\n}\n\n.main-chat {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n",
              "@use 'normalize.css';\n@import 'colors';\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: $color-dark;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
              "@import '../../assets/styles/base';\n\n.chat-layout {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 15px;\n}\n",
              "@import '../../../../../assets/styles/colors';\n/* stylelint-disable */\n.user-chats__block {\n  max-height: 4.1875rem;\n  height: 100%;\n  min-width: 18.125rem;\n  border-bottom: 0.0625rem $color-border solid;\n  // &--selected {\n  //   background-color: aqua;\n  // }\n  .user-chats__container {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 0.625rem;\n    margin-bottom: 0.625rem;\n  }\n\n  .user-chats__img {\n    background-color: $color-bg-avatar;\n    width: 2.9375rem;\n    height: 2.9375rem;\n    border-radius: 50%;\n  }\n\n  .user-chats__content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    &-name {\n      font-weight: 600;\n      font-size: 13px;\n      line-height: 13px;\n    }\n\n    &-message {\n      width: 12.0625rem;\n      height: 1.875rem;\n      color: $color-dark-gray;\n    }\n  }\n\n  .user-chats__notify {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n\n    &-time {\n      font-weight: 500;\n      font-size: 9px;\n      line-height: 13px;\n      color: $color-dark-gray;\n    }\n\n    &-new-messages {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: $color-primary;\n      width: 1.25rem;\n      height: 1.25rem;\n      border-radius: 50%;\n      color: $color-bg-avatar;\n      font-size: 11px;\n      line-height: 12px;\n    }\n  }\n}\n",
              "@import '../../../../assets/styles/colors';\n@import './user-chats/user-chats';\n/* stylelint-disable */\n.sidebar {\n  &__header {\n    height: 6.375rem;\n    display: flex;\n    flex-direction: column;\n    border-bottom: 0.0625rem $color-border solid;\n  }\n\n  &__header-profile {\n    height: 50%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n\n    &-block {\n      display: flex;\n      max-width: 4.375rem;\n      max-height: 3.375rem;\n      justify-content: space-around;\n      margin-right: 0.5rem;\n\n      a {\n        text-decoration: none;\n        color: $color-dark-gray;\n      }\n      &-text,\n      &-arrow {\n        font-weight: 500;\n        font-size: 0.75rem;\n        line-height: 0.75rem;\n        color: $color-dark-gray;\n        margin-right: 0.2rem;\n      }\n\n      &-arrow {\n        display: inline-block;\n        border: 0.0625rem solid $color-dark-gray;\n        border-width: 0 0.0625rem 0.0625rem 0;\n        width: 0.3rem;\n        height: 0.3rem;\n        margin-top: 0.25rem;\n        transform: rotate(-45deg);\n      }\n    }\n  }\n  &__header-search {\n    display: flex;\n    height: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &-block {\n      max-width: 18.125rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      max-height: 2rem;\n      height: 100%;\n      background: $color-bg-avatar;\n      border-radius: 0.3125rem;\n      font-weight: 500;\n      font-size: 0.75rem;\n      line-height: 0.75rem;\n      color: $color-dark-gray;\n\n      &-icon {\n        padding-left: 5%;\n        display: flex;\n        align-items: center;\n        input {\n          height: 80%;\n          background: #efefef;\n          border: 0;\n          width: 80%;\n        }\n      }\n    }\n  }\n}\n\n.user-chats {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n",
              "@import '../../../../../assets/styles/colors';\n/* stylelint-disable */\n.main-chat-header__block {\n  display: flex;\n  align-items: center;\n  margin-right: 1.25rem;\n  margin-left: 1.25rem;\n  width: 100%;\n  height: 100%;\n  border-bottom: 1px solid $color-border;\n}\n.delete-user {\n  display: flex;\n  width: 100%;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.main-chat-header__items {\n  display: flex;\n  width: 100%;\n}\n\n.main-chat-header__user-info {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.main-chat-header__icon {\n  width: 2.125rem;\n  height: 2.125rem;\n  background: $color-bg-avatar;\n  border-radius: 50%;\n}\n\n.main-chat-header__name {\n  margin-left: 0.5rem;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  line-height: 0.8125rem;\n}\n",
              "@import '../../../../../assets/styles/colors';\n/* stylelint-disable */\n.main-chat-bottom__block {\n  display: flex;\n  align-items: center;\n  margin-right: 1.25rem;\n  margin-left: 1.25rem;\n  width: 100%;\n  border-top: 1px solid $color-border;\n}\n\n.main-chat-bottom__items {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.main-chat-bottom__message-panel {\n  width: 95%;\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n  background: $color-bg-avatar;\n  display: flex;\n  align-items: center;\n  border-radius: 1.875rem;\n\n  &_text {\n    margin-left: 1rem;\n  }\n  input {\n    border: 0;\n    background: $color-bg-avatar;\n    &:focus {\n      outline: none;\n    }\n  }\n\n  .invalid {\n    color: $color-red;\n  }\n}\n",
              "@import './main-chat-header/main-chat-header';\n@import './main-chat-bottom/main-chat-bottom';\n\n/* stylelint-disable */\n.main-chat {\n  &__header,\n  &__bottom {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    max-height: 3.375rem;\n  }\n\n  &__dialogs {\n    height: 89%;\n    display: flex;\n    flex-direction: column;\n    font-weight: 500;\n    font-size: 0.75rem;\n    line-height: 0.75rem;\n    overflow-y: scroll;\n  }\n}\n\n.no-selected {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.main-chat-bottom__block {\n  display: flex;\n  align-items: center;\n  margin-right: 1.25rem;\n  margin-left: 1.25rem;\n  width: 100%;\n  border-top: 1px solid $color-border;\n}\n\n.main-chat-bottom__items {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.main-chat-bottom__message-panel {\n  width: 95%;\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n  background: $color-bg-avatar;\n  display: flex;\n  align-items: center;\n  border-radius: 1.875rem;\n\n  &_text {\n    margin-left: 1rem;\n  }\n  input {\n    border: 0;\n    background: $color-bg-avatar;\n    &:focus {\n      outline: none;\n    }\n  }\n\n  .invalid {\n    color: $color-red;\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/profile/profile-update-info/profile-update-info.scss':
      /*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/profile/profile-update-info/profile-update-info.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n/**\n   * Remove the margin in all browsers.\n   */\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Remove the gray background on active links in IE 10.\n   */\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove the border on images inside links in IE 10.\n   */\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n[type=search] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n[type=search]::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n/**\n   * Add the correct display in IE 10+.\n   */\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n[hidden] {\n  display: none;\n}\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: #1e1e1e;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.profile-layout {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n}\n.profile-layout__sidebar {\n  height: 100%;\n  width: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #fbfbfb;\n  border-right: 0.0625rem #eaeaea solid;\n}\n.profile-layout__sidebar-btn {\n  transform: rotate(-180deg);\n}\n.profile-layout__main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/assets/styles/normalize.css',
              'webpack://./src/views/profile/profile-update-info/profile-update-info.scss',
              'webpack://./src/assets/styles/base.scss',
              'webpack://./src/assets/styles/colors.scss',
              'webpack://./src/layouts/profile-layout/profile-layout.scss',
            ],
            names: [],
            mappings:
              'AAAA,sBAAA;AACA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;ACFF;;ADKA;iFAAA;AAGA;;IAAA;AAIA;EACE,SAAA;ACJF;;ADOA;;IAAA;AAIA;EACE,cAAA;ACLF;;ADQA;;;IAAA;AAKA;EACE,gBAAA;EACA,cAAA;ACNF;;ADSA;iFAAA;AAGA;;;IAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACRF;;ADWA;;;IAAA;AAKA;EACE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ACTF;;ADYA;iFAAA;AAGA;;IAAA;AAIA;EACE,6BAAA;ACXF;;ADcA;;;IAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;ACZF;;ADeA;;IAAA;AAIA;;EAEE,mBAAA;ACbF;;ADgBA;;;IAAA;AAKA;;;EAGE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ACdF;;ADiBA;;IAAA;AAIA;EACE,cAAA;ACfF;;ADkBA;;;IAAA;AAKA;;EAEE,kBAAA;EACA,cAAA;EACA,cAAA;EACA,wBAAA;AChBF;;ADmBA;EACE,eAAA;AChBF;;ADmBA;EACE,WAAA;AChBF;;ADmBA;iFAAA;AAGA;;IAAA;AAIA;EACE,kBAAA;AClBF;;ADqBA;iFAAA;AAGA;;;IAAA;AAKA;;;;;EAKE,SAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACpBF;;ADuBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,iBAAA;ACrBF;;ADwBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,oBAAA;ACtBF;;ADyBA;;IAAA;AAIA;;;;EAIE,kBAAA;ACvBF;;AD0BA;;IAAA;AAIA;;;;EAIE,UAAA;EACA,kBAAA;ACxBF;;AD2BA;;IAAA;AAIA;;;;EAIE,8BAAA;ACzBF;;AD4BA;;IAAA;AAIA;EACE,8BAAA;AC1BF;;AD6BA;;;;;IAAA;AAOA;EACE,cAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AC3BF;;AD8BA;;IAAA;AAIA;EACE,wBAAA;AC5BF;;AD+BA;;IAAA;AAIA;EACE,cAAA;AC7BF;;ADgCA;;;IAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AC9BF;;ADiCA;;IAAA;AAIA;;EAEE,YAAA;AC/BF;;ADkCA;;;IAAA;AAKA;EACE,oBAAA,EAAA,MAAA;EACA,qBAAA,EAAA,MAAA;AChCF;;ADmCA;;IAAA;AAIA;EACE,gBAAA;ACjCF;;ADoCA;;;IAAA;AAKA;EACE,aAAA,EAAA,MAAA;EACA,kBAAA,EAAA,MAAA;AClCF;;ADqCA;iFAAA;AAGA;;IAAA;AAIA;EACE,cAAA;ACpCF;;ADuCA;;IAAA;AAIA;EACE,kBAAA;ACrCF;;ADwCA;iFAAA;AAGA;;IAAA;AAIA;EACE,aAAA;ACvCF;;AD0CA;;IAAA;AAIA;EACE,aAAA;ACxCF;;AClTA;EACE,kBAAA;EACA,kBAAA;EACA,cCJW;EDKX,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;ADqTF;;AG7TA;EACE,aAAA;EACA,WAAA;EACA,aAAA;AHgUF;AG9TE;EACE,YAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBDde;ECef,qCAAA;AHgUJ;AG9TI;EACE,0BAAA;AHgUN;AG5TE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AH8TJ',
            sourcesContent: [
              "/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n",
              '/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n/**\n   * Remove the margin in all browsers.\n   */\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Remove the gray background on active links in IE 10.\n   */\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove the border on images inside links in IE 10.\n   */\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n[type=search] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n[type=search]::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n/**\n   * Add the correct display in IE 10+.\n   */\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n[hidden] {\n  display: none;\n}\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: #1e1e1e;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.profile-layout {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n}\n.profile-layout__sidebar {\n  height: 100%;\n  width: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #fbfbfb;\n  border-right: 0.0625rem #eaeaea solid;\n}\n.profile-layout__sidebar-btn {\n  transform: rotate(-180deg);\n}\n.profile-layout__main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}',
              "@use 'normalize.css';\n@import 'colors';\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: $color-dark;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
              "@import '../../assets/styles/colors';\n@import '../../assets/styles/base';\n\n.profile-layout {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n\n  &__sidebar {\n    height: 100%;\n    width: 10%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: $color-bg-sidebar;\n    border-right: 0.0625rem $color-border solid;\n\n    &-btn {\n      transform: rotate(-180deg);\n    }\n  }\n\n  &__main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/profile/profile-update-password/profile-update-password.scss':
      /*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/profile/profile-update-password/profile-update-password.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n/**\n   * Remove the margin in all browsers.\n   */\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Remove the gray background on active links in IE 10.\n   */\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove the border on images inside links in IE 10.\n   */\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n[type=search] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n[type=search]::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n/**\n   * Add the correct display in IE 10+.\n   */\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n[hidden] {\n  display: none;\n}\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: #1e1e1e;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.profile-layout {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n}\n.profile-layout__sidebar {\n  height: 100%;\n  width: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #fbfbfb;\n  border-right: 0.0625rem #eaeaea solid;\n}\n.profile-layout__sidebar-btn {\n  transform: rotate(-180deg);\n}\n.profile-layout__main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/assets/styles/normalize.css',
              'webpack://./src/views/profile/profile-update-password/profile-update-password.scss',
              'webpack://./src/assets/styles/base.scss',
              'webpack://./src/assets/styles/colors.scss',
              'webpack://./src/layouts/profile-layout/profile-layout.scss',
            ],
            names: [],
            mappings:
              'AAAA,sBAAA;AACA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;ACFF;;ADKA;iFAAA;AAGA;;IAAA;AAIA;EACE,SAAA;ACJF;;ADOA;;IAAA;AAIA;EACE,cAAA;ACLF;;ADQA;;;IAAA;AAKA;EACE,gBAAA;EACA,cAAA;ACNF;;ADSA;iFAAA;AAGA;;;IAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACRF;;ADWA;;;IAAA;AAKA;EACE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ACTF;;ADYA;iFAAA;AAGA;;IAAA;AAIA;EACE,6BAAA;ACXF;;ADcA;;;IAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;ACZF;;ADeA;;IAAA;AAIA;;EAEE,mBAAA;ACbF;;ADgBA;;;IAAA;AAKA;;;EAGE,cAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;ACdF;;ADiBA;;IAAA;AAIA;EACE,cAAA;ACfF;;ADkBA;;;IAAA;AAKA;;EAEE,kBAAA;EACA,cAAA;EACA,cAAA;EACA,wBAAA;AChBF;;ADmBA;EACE,eAAA;AChBF;;ADmBA;EACE,WAAA;AChBF;;ADmBA;iFAAA;AAGA;;IAAA;AAIA;EACE,kBAAA;AClBF;;ADqBA;iFAAA;AAGA;;;IAAA;AAKA;;;;;EAKE,SAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACpBF;;ADuBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,iBAAA;ACrBF;;ADwBA;;;IAAA;AAKA;;EAEE,MAAA;EACA,oBAAA;ACtBF;;ADyBA;;IAAA;AAIA;;;;EAIE,kBAAA;ACvBF;;AD0BA;;IAAA;AAIA;;;;EAIE,UAAA;EACA,kBAAA;ACxBF;;AD2BA;;IAAA;AAIA;;;;EAIE,8BAAA;ACzBF;;AD4BA;;IAAA;AAIA;EACE,8BAAA;AC1BF;;AD6BA;;;;;IAAA;AAOA;EACE,cAAA,EAAA,MAAA;EACA,sBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AC3BF;;AD8BA;;IAAA;AAIA;EACE,wBAAA;AC5BF;;AD+BA;;IAAA;AAIA;EACE,cAAA;AC7BF;;ADgCA;;;IAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AC9BF;;ADiCA;;IAAA;AAIA;;EAEE,YAAA;AC/BF;;ADkCA;;;IAAA;AAKA;EACE,oBAAA,EAAA,MAAA;EACA,qBAAA,EAAA,MAAA;AChCF;;ADmCA;;IAAA;AAIA;EACE,gBAAA;ACjCF;;ADoCA;;;IAAA;AAKA;EACE,aAAA,EAAA,MAAA;EACA,kBAAA,EAAA,MAAA;AClCF;;ADqCA;iFAAA;AAGA;;IAAA;AAIA;EACE,cAAA;ACpCF;;ADuCA;;IAAA;AAIA;EACE,kBAAA;ACrCF;;ADwCA;iFAAA;AAGA;;IAAA;AAIA;EACE,aAAA;ACvCF;;AD0CA;;IAAA;AAIA;EACE,aAAA;ACxCF;;AClTA;EACE,kBAAA;EACA,kBAAA;EACA,cCJW;EDKX,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;ADqTF;;AG7TA;EACE,aAAA;EACA,WAAA;EACA,aAAA;AHgUF;AG9TE;EACE,YAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBDde;ECef,qCAAA;AHgUJ;AG9TI;EACE,0BAAA;AHgUN;AG5TE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AH8TJ',
            sourcesContent: [
              "/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n",
              '/* stylelint-disable */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n/**\n   * Remove the margin in all browsers.\n   */\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\nh1 {\n  margin: 0.67em 0;\n  font-size: 2em;\n}\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\npre {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Remove the gray background on active links in IE 10.\n   */\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n  border-bottom: none; /* 1 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\ncode,\nkbd,\nsamp {\n  font-size: 1em; /* 2 */\n  font-family: monospace, monospace; /* 1 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove the border on images inside links in IE 10.\n   */\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0; /* 2 */\n  font-size: 100%; /* 1 */\n  font-family: inherit; /* 1 */\n  line-height: 1.15; /* 1 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\nlegend {\n  display: table; /* 1 */\n  box-sizing: border-box; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  color: inherit; /* 2 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n[type=search] {\n  outline-offset: -2px; /* 2 */\n  appearance: textfield; /* 1 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n[type=search]::-webkit-search-decoration {\n  appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n::-webkit-file-upload-button {\n  font: inherit; /* 2 */\n  appearance: button; /* 1 */\n}\n\n/* Interactive\n     ========================================================================== */\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n/**\n   * Add the correct display in IE 10+.\n   */\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n[hidden] {\n  display: none;\n}\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: #1e1e1e;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.profile-layout {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n}\n.profile-layout__sidebar {\n  height: 100%;\n  width: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #fbfbfb;\n  border-right: 0.0625rem #eaeaea solid;\n}\n.profile-layout__sidebar-btn {\n  transform: rotate(-180deg);\n}\n.profile-layout__main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}',
              "@use 'normalize.css';\n@import 'colors';\n\nhtml {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: $color-dark;\n  font-weight: 400;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n",
              '$color-primary: #3369f3;\n$color-bg-sidebar: #fbfbfb;\n$color-dark: #1e1e1e;\n$color-border: #eaeaea;\n$color-gray: #c9c9cf;\n$color-white: #fff;\n$color-bg-avatar: #efefef;\n$color-dark-gray: #999;\n$color-red: #f00;\n$color-message: #e4edfd;\n',
              "@import '../../assets/styles/colors';\n@import '../../assets/styles/base';\n\n.profile-layout {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n\n  &__sidebar {\n    height: 100%;\n    width: 10%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: $color-bg-sidebar;\n    border-right: 0.0625rem $color-border solid;\n\n    &-btn {\n      transform: rotate(-180deg);\n    }\n  }\n\n  &__main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        'use strict';

        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = '';
              var needLayer = typeof item[5] !== 'undefined';
              if (item[4]) {
                content += '@supports ('.concat(item[4], ') {');
              }
              if (item[2]) {
                content += '@media '.concat(item[2], ' {');
              }
              if (needLayer) {
                content += '@layer'.concat(
                  item[5].length > 0 ? ' '.concat(item[5]) : '',
                  ' {',
                );
              }
              content += cssWithMappingToString(item);
              if (needLayer) {
                content += '}';
              }
              if (item[2]) {
                content += '}';
              }
              if (item[4]) {
                content += '}';
              }
              return content;
            }).join('');
          };

          // import a list of modules into the list
          list.i = function i(modules, media, dedupe, supports, layer) {
            if (typeof modules === 'string') {
              modules = [[null, modules, undefined]];
            }
            var alreadyImportedModules = {};
            if (dedupe) {
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);
              if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
              }
              if (typeof layer !== 'undefined') {
                if (typeof item[5] === 'undefined') {
                  item[5] = layer;
                } else {
                  item[1] = '@layer'
                    .concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {')
                    .concat(item[1], '}');
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = '@media '
                    .concat(item[2], ' {')
                    .concat(item[1], '}');
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = ''.concat(supports);
                } else {
                  item[1] = '@supports ('
                    .concat(item[4], ') {')
                    .concat(item[1], '}');
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        'use strict';

        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === 'function') {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping))),
            );
            var data =
              'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                base64,
              );
            var sourceMapping = '/*# '.concat(data, ' */');
            return [content].concat([sourceMapping]).join('\n');
          }
          return [content].join('\n');
        };

        /***/
      },

    /***/ './src/components/avatar/avatar.scss':
      /*!*******************************************!*\
  !*** ./src/components/avatar/avatar.scss ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_avatar_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./avatar.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/avatar/avatar.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_avatar_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_avatar_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_avatar_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_avatar_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/components/buttons/button-mixin.scss':
      /*!**************************************************!*\
  !*** ./src/components/buttons/button-mixin.scss ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_button_mixin_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./button-mixin.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/buttons/button-mixin.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_button_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_button_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_button_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_button_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/components/inputs/input-mixin.scss':
      /*!************************************************!*\
  !*** ./src/components/inputs/input-mixin.scss ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_input_mixin_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./input-mixin.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/inputs/input-mixin.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_input_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_input_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_input_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_input_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/components/inputs/profile-inputs/profile-input-mixin.scss':
      /*!***********************************************************************!*\
  !*** ./src/components/inputs/profile-inputs/profile-input-mixin.scss ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_input_mixin_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./profile-input-mixin.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/inputs/profile-inputs/profile-input-mixin.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_input_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_input_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_input_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_input_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/components/links/link-mixin.scss':
      /*!**********************************************!*\
  !*** ./src/components/links/link-mixin.scss ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_link_mixin_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./link-mixin.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/links/link-mixin.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_link_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_link_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_link_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_link_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/components/messages/message.scss':
      /*!**********************************************!*\
  !*** ./src/components/messages/message.scss ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_message_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./message.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/messages/message.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_message_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_message_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_message_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_message_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/components/profile-card/profile-card-mixin.scss':
      /*!*************************************************************!*\
  !*** ./src/components/profile-card/profile-card-mixin.scss ***!
  \*************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_card_mixin_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./profile-card-mixin.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/profile-card/profile-card-mixin.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_card_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_card_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_card_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_card_mixin_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/modules/chat/components/sidebar/user-chats/user-chats.scss':
      /*!************************************************************************!*\
  !*** ./src/modules/chat/components/sidebar/user-chats/user-chats.scss ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_user_chats_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/resolve-url-loader/index.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./user-chats.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/modules/chat/components/sidebar/user-chats/user-chats.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_user_chats_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_user_chats_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_user_chats_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_user_chats_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/views/404/404.scss':
      /*!********************************!*\
  !*** ./src/views/404/404.scss ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_404_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./404.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/404/404.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_404_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_404_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_404_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_404_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/views/auth/signIn/signIn.scss':
      /*!*******************************************!*\
  !*** ./src/views/auth/signIn/signIn.scss ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_signIn_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./signIn.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/auth/signIn/signIn.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_signIn_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_signIn_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_signIn_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_signIn_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/views/auth/signUp/signUp.scss':
      /*!*******************************************!*\
  !*** ./src/views/auth/signUp/signUp.scss ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_signUp_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./signUp.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/auth/signUp/signUp.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_signUp_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_signUp_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_signUp_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_signUp_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/views/chat/chat.scss':
      /*!**********************************!*\
  !*** ./src/views/chat/chat.scss ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_chat_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./chat.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/chat/chat.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_chat_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_chat_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_chat_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_chat_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/views/profile/profile-update-info/profile-update-info.scss':
      /*!************************************************************************!*\
  !*** ./src/views/profile/profile-update-info/profile-update-info.scss ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_update_info_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./profile-update-info.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/profile/profile-update-info/profile-update-info.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_update_info_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_update_info_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_update_info_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_update_info_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './src/views/profile/profile-update-password/profile-update-password.scss':
      /*!********************************************************************************!*\
  !*** ./src/views/profile/profile-update-password/profile-update-password.scss ***!
  \********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_update_password_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./profile-update-password.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/views/profile/profile-update-password/profile-update-password.scss',
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_update_password_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_update_password_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_update_password_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_profile_update_password_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        'use strict';

        var stylesInDOM = [];

        function getIndexByIdentifier(identifier) {
          var result = -1;

          for (var i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i;
              break;
            }
          }

          return result;
        }

        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = ''.concat(id, ' ').concat(count);
            idCountMap[id] = count + 1;
            var indexByIdentifier = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };

            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++;
              stylesInDOM[indexByIdentifier].updater(obj);
            } else {
              var updater = addElementStyle(obj, options);
              options.byIndex = i;
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1,
              });
            }

            identifiers.push(identifier);
          }

          return identifiers;
        }

        function addElementStyle(obj, options) {
          var api = options.domAPI(options);
          api.update(obj);

          var updater = function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }

              api.update((obj = newObj));
            } else {
              api.remove();
            }
          };

          return updater;
        }

        module.exports = function (list, options) {
          options = options || {};
          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];

            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDOM[index].references--;
            }

            var newLastIdentifiers = modulesToDom(newList, options);

            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];

              var _index = getIndexByIdentifier(_identifier);

              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater();

                stylesInDOM.splice(_index, 1);
              }
            }

            lastIdentifiers = newLastIdentifiers;
          };
        };

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        'use strict';

        var memo = {};
        /* istanbul ignore next  */

        function getTarget(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        }
        /* istanbul ignore next  */

        function insertBySelector(insert, style) {
          var target = getTarget(insert);

          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          }

          target.appendChild(style);
        }

        module.exports = insertBySelector;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        'use strict';

        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement('style');
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }

        module.exports = insertStyleElement;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict';

        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            styleElement.setAttribute('nonce', nonce);
          }
        }

        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        'use strict';

        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          var css = '';

          if (obj.supports) {
            css += '@supports ('.concat(obj.supports, ') {');
          }

          if (obj.media) {
            css += '@media '.concat(obj.media, ' {');
          }

          var needLayer = typeof obj.layer !== 'undefined';

          if (needLayer) {
            css += '@layer'.concat(
              obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
              ' {',
            );
          }

          css += obj.css;

          if (needLayer) {
            css += '}';
          }

          if (obj.media) {
            css += '}';
          }

          if (obj.supports) {
            css += '}';
          }

          var sourceMap = obj.sourceMap;

          if (sourceMap && typeof btoa !== 'undefined') {
            css +=
              '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                ' */',
              );
          } // For old IE

          /* istanbul ignore if  */

          options.styleTagTransform(css, styleElement, options.options);
        }

        function removeStyleElement(styleElement) {
          // istanbul ignore if
          if (styleElement.parentNode === null) {
            return false;
          }

          styleElement.parentNode.removeChild(styleElement);
        }
        /* istanbul ignore next  */

        function domAPI(options) {
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }

        module.exports = domAPI;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        'use strict';

        /* istanbul ignore next  */
        function styleTagTransform(css, styleElement) {
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild);
            }

            styleElement.appendChild(document.createTextNode(css));
          }
        }

        module.exports = styleTagTransform;

        /***/
      },

    /***/ './src/api/AuthAPI.ts':
      /*!****************************!*\
  !*** ./src/api/AuthAPI.ts ***!
  \****************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.AuthAPI = void 0;
        const BaseAPI_1 = __importDefault(
          __webpack_require__(/*! ./BaseAPI */ './src/api/BaseAPI.ts'),
        );
        class AuthAPI extends BaseAPI_1.default {
          constructor() {
            super('/auth');
          }
          signin(data) {
            return this.http.post('/signin', data);
          }
          signup(data) {
            return this.http.post('/signup', data);
          }
          read() {
            return this.http.get('/user');
          }
          logout() {
            return this.http.post('/logout');
          }
        }
        exports.AuthAPI = AuthAPI;
        exports['default'] = new AuthAPI();

        /***/
      },

    /***/ './src/api/BaseAPI.ts':
      /*!****************************!*\
  !*** ./src/api/BaseAPI.ts ***!
  \****************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        const http_transport_1 = __importDefault(
          __webpack_require__(
            /*! ../utils/httpTrasnsport/http-transport */ './src/utils/httpTrasnsport/http-transport.ts',
          ),
        );
        class BaseAPI {
          constructor(endpoint) {
            this.http = new http_transport_1.default(endpoint);
          }
        }
        exports['default'] = BaseAPI;

        /***/
      },

    /***/ './src/api/ChatsAPI.ts':
      /*!*****************************!*\
  !*** ./src/api/ChatsAPI.ts ***!
  \*****************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              );
            });
          };
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.ChatsAPI = void 0;
        const BaseAPI_1 = __importDefault(
          __webpack_require__(/*! ./BaseAPI */ './src/api/BaseAPI.ts'),
        );
        class ChatsAPI extends BaseAPI_1.default {
          constructor() {
            super('/chats');
          }
          create(title) {
            return this.http.post('/', { title });
          }
          delete(id) {
            return this.http.delete('/', { chatId: id });
          }
          read() {
            return this.http.get('/');
          }
          getUsers(id) {
            return this.http.get(`/${id}/users`);
          }
          addUsers(id, users) {
            return this.http.put('/users', { users, chatId: id });
          }
          deleteUsers(id, users) {
            debugger;
            return this.http.delete('/users', { users, chatId: id });
          }
          getToken(id) {
            return __awaiter(this, void 0, void 0, function* () {
              const response = yield this.http.post(`/token/${id}`);
              return response.token;
            });
          }
        }
        exports.ChatsAPI = ChatsAPI;
        exports['default'] = new ChatsAPI();

        /***/
      },

    /***/ './src/api/UserAPI.ts':
      /*!****************************!*\
  !*** ./src/api/UserAPI.ts ***!
  \****************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.UserAPI = void 0;
        const BaseAPI_1 = __importDefault(
          __webpack_require__(/*! ./BaseAPI */ './src/api/BaseAPI.ts'),
        );
        class UserAPI extends BaseAPI_1.default {
          constructor() {
            super('/user');
          }
          update(data) {
            return this.http.put('/profile', data);
          }
          password(data) {
            return this.http.put('/password', data);
          }
          avatar(data) {
            return this.http.put('/profile/avatar', data);
          }
          getUser(id) {
            return this.http.get(`/${id}`);
          }
        }
        exports.UserAPI = UserAPI;
        exports['default'] = new UserAPI();

        /***/
      },

    /***/ './src/components/avatar/avatar.ts':
      /*!*****************************************!*\
  !*** ./src/components/avatar/avatar.ts ***!
  \*****************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Avatar = void 0;
        const block_1 = __webpack_require__(
          /*! ../../utils/block/block */ './src/utils/block/block.ts',
        );
        const avatar_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./avatar.pug */ './src/components/avatar/avatar.pug',
          ),
        );
        __webpack_require__(
          /*! ./avatar.scss */ './src/components/avatar/avatar.scss',
        );
        class Avatar extends block_1.Block {
          constructor(props) {
            super(props);
          }
          render() {
            return this.compile(avatar_pug_1.default, this.props);
          }
        }
        exports.Avatar = Avatar;

        /***/
      },

    /***/ './src/components/buttons/button-mixin.ts':
      /*!************************************************!*\
  !*** ./src/components/buttons/button-mixin.ts ***!
  \************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Button = void 0;
        const block_1 = __webpack_require__(
          /*! ../../utils/block/block */ './src/utils/block/block.ts',
        );
        const button_mixin_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./button-mixin.pug */ './src/components/buttons/button-mixin.pug',
          ),
        );
        __webpack_require__(
          /*! ./button-mixin.scss */ './src/components/buttons/button-mixin.scss',
        );
        class Button extends block_1.Block {
          constructor(props) {
            super(props);
          }
          render() {
            return this.compile(button_mixin_pug_1.default, this.props);
          }
        }
        exports.Button = Button;

        /***/
      },

    /***/ './src/components/inputs/input-mixin.ts':
      /*!**********************************************!*\
  !*** ./src/components/inputs/input-mixin.ts ***!
  \**********************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Input = void 0;
        const block_1 = __webpack_require__(
          /*! ../../utils/block/block */ './src/utils/block/block.ts',
        );
        const input_mixin_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./input-mixin.pug */ './src/components/inputs/input-mixin.pug',
          ),
        );
        __webpack_require__(
          /*! ./input-mixin.scss */ './src/components/inputs/input-mixin.scss',
        );
        class Input extends block_1.Block {
          constructor(props) {
            super(props);
          }
          setValue(value) {
            return (this.element.childNodes[0].value = value);
          }
          getName() {
            return this.element.name;
          }
          getValue() {
            return this.element.childNodes[0].value;
          }
          render() {
            return this.compile(input_mixin_pug_1.default, this.props);
          }
        }
        exports.Input = Input;

        /***/
      },

    /***/ './src/components/inputs/profile-inputs/profile-input-mixin.ts':
      /*!*********************************************************************!*\
  !*** ./src/components/inputs/profile-inputs/profile-input-mixin.ts ***!
  \*********************************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.ProfileCardInput = void 0;
        const block_1 = __webpack_require__(
          /*! ../../../utils/block/block */ './src/utils/block/block.ts',
        );
        const profile_input_mixin_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./profile-input-mixin.pug */ './src/components/inputs/profile-inputs/profile-input-mixin.pug',
          ),
        );
        __webpack_require__(
          /*! ./profile-input-mixin.scss */ './src/components/inputs/profile-inputs/profile-input-mixin.scss',
        );
        class ProfileCardInput extends block_1.Block {
          constructor(props) {
            super(props);
          }
          render() {
            return this.compile(profile_input_mixin_pug_1.default, this.props);
          }
        }
        exports.ProfileCardInput = ProfileCardInput;

        /***/
      },

    /***/ './src/components/links/link-mixin.ts':
      /*!********************************************!*\
  !*** ./src/components/links/link-mixin.ts ***!
  \********************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Link = exports.BaseLink = void 0;
        const block_1 = __webpack_require__(
          /*! ../../utils/block/block */ './src/utils/block/block.ts',
        );
        const link_mixin_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./link-mixin.pug */ './src/components/links/link-mixin.pug',
          ),
        );
        const withRouter_1 = __webpack_require__(
          /*! ../../hocs/withRouter */ './src/hocs/withRouter.ts',
        );
        __webpack_require__(
          /*! ./link-mixin.scss */ './src/components/links/link-mixin.scss',
        );
        class BaseLink extends block_1.Block {
          constructor(props) {
            super(
              Object.assign(Object.assign({}, props), {
                events: {
                  click: (e) => this.navigate(),
                },
              }),
            );
          }
          navigate() {
            this.props.router.go(this.props.to);
          }
          render() {
            return this.compile(link_mixin_pug_1.default, this.props);
          }
        }
        exports.BaseLink = BaseLink;
        exports.Link = (0, withRouter_1.withRouter)(BaseLink);

        /***/
      },

    /***/ './src/components/messages/message.ts':
      /*!********************************************!*\
  !*** ./src/components/messages/message.ts ***!
  \********************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Message = void 0;
        const block_1 = __webpack_require__(
          /*! ../../utils/block/block */ './src/utils/block/block.ts',
        );
        const message_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./message.pug */ './src/components/messages/message.pug',
          ),
        );
        __webpack_require__(
          /*! ./message.scss */ './src/components/messages/message.scss',
        );
        class Message extends block_1.Block {
          constructor(props) {
            super(props);
          }
          render() {
            return this.compile(message_pug_1.default, this.props);
          }
        }
        exports.Message = Message;

        /***/
      },

    /***/ './src/components/profile-card/profile-card-mixin.ts':
      /*!***********************************************************!*\
  !*** ./src/components/profile-card/profile-card-mixin.ts ***!
  \***********************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.ProfilePage = exports.ProfileCard = void 0;
        const block_1 = __webpack_require__(
          /*! ../../utils/block/block */ './src/utils/block/block.ts',
        );
        const profile_input_mixin_1 = __webpack_require__(
          /*! ../inputs/profile-inputs/profile-input-mixin */ './src/components/inputs/profile-inputs/profile-input-mixin.ts',
        );
        const link_mixin_1 = __webpack_require__(
          /*! ../links/link-mixin */ './src/components/links/link-mixin.ts',
        );
        const AuthController_1 = __importDefault(
          __webpack_require__(
            /*! ../../controllers/AuthController */ './src/controllers/AuthController.ts',
          ),
        );
        const UserController_1 = __importDefault(
          __webpack_require__(
            /*! ../../controllers/UserController */ './src/controllers/UserController.ts',
          ),
        );
        const avatar_1 = __webpack_require__(
          /*! ../avatar/avatar */ './src/components/avatar/avatar.ts',
        );
        const store_1 = __importDefault(
          __webpack_require__(/*! ../../store/store */ './src/store/store.ts'),
        );
        const button_mixin_1 = __webpack_require__(
          /*! ../buttons/button-mixin */ './src/components/buttons/button-mixin.ts',
        );
        const withStore_1 = __webpack_require__(
          /*! ../../hocs/withStore */ './src/hocs/withStore.ts',
        );
        const profile_card_mixin_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./profile-card-mixin.pug */ './src/components/profile-card/profile-card-mixin.pug',
          ),
        );
        __webpack_require__(
          /*! ./profile-card-mixin.scss */ './src/components/profile-card/profile-card-mixin.scss',
        );
        class ProfileCard extends block_1.Block {
          constructor(props) {
            super(props);
          }
          init() {
            this.children.avatar = new avatar_1.Avatar({
              img: !this.props.avatar
                ? ''
                : `https://ya-praktikum.tech/api/v2/resources${
                    store_1.default.getState().user.data.avatar
                  }`,
              events: {
                change: (e) => {
                  e.preventDefault();
                  const formData = new FormData();
                  const input = document.querySelector('#avatar');
                  formData.append(
                    'avatar',
                    input === null || input === void 0
                      ? void 0
                      : input.files[0],
                  );
                  UserController_1.default.avatar(formData);
                },
              },
            });
            this.children.email = new profile_input_mixin_1.ProfileCardInput({
              name: 'email',
              type: 'text',
              label: 'Почта',
              body: store_1.default.getState().user.data.email,
            });
            this.children.login = new profile_input_mixin_1.ProfileCardInput({
              name: 'login',
              type: 'text',
              label: 'Логин',
              body: store_1.default.getState().user.data.login,
            });
            this.children.firstName =
              new profile_input_mixin_1.ProfileCardInput({
                name: 'first_name',
                type: 'text',
                label: 'Имя',
                body: store_1.default.getState().user.data.first_name,
              });
            this.children.secondName =
              new profile_input_mixin_1.ProfileCardInput({
                name: 'second_name',
                type: 'text',
                label: 'Фамилия',
                body: store_1.default.getState().user.data.second_name,
              });
            this.children.displayName =
              new profile_input_mixin_1.ProfileCardInput({
                name: 'display_name',
                type: 'text',
                label: 'Имя в чате',
                body: store_1.default.getState().user.data.display_name,
              });
            this.children.phone = new profile_input_mixin_1.ProfileCardInput({
              name: 'phone',
              type: 'text',
              label: 'Телефон',
              body: store_1.default.getState().user.data.phone,
            });
            this.children.updateInfoLink = new link_mixin_1.Link({
              content: 'Изменить данные',
              to: '/settings',
              extraClass: 'profile__link',
            });
            this.children.updatePasswordLink = new link_mixin_1.Link({
              content: 'Изменить пароль',
              to: '/change-password',
              extraClass: 'profile__link',
            });
            this.children.exitLink = new button_mixin_1.Button({
              content: 'Выйти',
              events: {
                click: () => {
                  AuthController_1.default.logout();
                },
              },
              btnClass: 'profile__link_exit',
            });
          }
          componentDidUpdate(oldProps, newProps) {
            this.children.avatar.setProps({
              img:
                newProps.avatar === null
                  ? ''
                  : `https://ya-praktikum.tech/api/v2/resources${
                      store_1.default.getState().user.data.avatar
                    }`,
            });
          }
          render() {
            return this.compile(profile_card_mixin_pug_1.default, this.props);
          }
        }
        exports.ProfileCard = ProfileCard;
        const withUser = (0, withStore_1.withStore)((store) =>
          Object.assign({}, store.user),
        );
        exports.ProfilePage = withUser(ProfileCard);

        /***/
      },

    /***/ './src/controllers/AuthController.ts':
      /*!*******************************************!*\
  !*** ./src/controllers/AuthController.ts ***!
  \*******************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              );
            });
          };
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.AuthController = void 0;
        const AuthAPI_1 = __importDefault(
          __webpack_require__(/*! ../api/AuthAPI */ './src/api/AuthAPI.ts'),
        );
        const store_1 = __importDefault(
          __webpack_require__(/*! ../store/store */ './src/store/store.ts'),
        );
        const router_1 = __importDefault(
          __webpack_require__(/*! ../router/router */ './src/router/router.ts'),
        );
        class AuthController {
          constructor() {
            this.api = AuthAPI_1.default;
          }
          signin(data) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                store_1.default.set('user.error', null);
                yield this.api.signin(data);
                yield this.fetchUser();
                if (!store_1.default.user.data)
                  router_1.default.go('/messanger');
              } catch (e) {
                store_1.default.set('user.error', e);
              }
            });
          }
          signup(data) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                store_1.default.set('user.error', null);
                yield this.api.signup(data);
                yield this.fetchUser();
                router_1.default.go('/messanger');
              } catch (e) {
                store_1.default.set('user.error', e);
              }
            });
          }
          fetchUser() {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                const user = yield this.api.read();
                if (!user.reason) store_1.default.set('user.data', user);
              } catch (e) {
                store_1.default.set('user.error', e);
              }
            });
          }
          logout() {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                yield this.api.logout();
                router_1.default.go('/');
              } catch (e) {
                store_1.default.set('user.error', e);
              }
            });
          }
        }
        exports.AuthController = AuthController;
        exports['default'] = new AuthController();

        /***/
      },

    /***/ './src/controllers/ChatsController.ts':
      /*!********************************************!*\
  !*** ./src/controllers/ChatsController.ts ***!
  \********************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              );
            });
          };
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        const ChatsAPI_1 = __importDefault(
          __webpack_require__(/*! ../api/ChatsAPI */ './src/api/ChatsAPI.ts'),
        );
        const store_1 = __importDefault(
          __webpack_require__(/*! ../store/store */ './src/store/store.ts'),
        );
        const MessagesController_1 = __importDefault(
          __webpack_require__(
            /*! ./MessagesController */ './src/controllers/MessagesController.ts',
          ),
        );
        const AuthController_1 = __importDefault(
          __webpack_require__(
            /*! ./AuthController */ './src/controllers/AuthController.ts',
          ),
        );
        class ChatsController {
          constructor() {
            this.api = ChatsAPI_1.default;
          }
          create(title) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                yield this.api.create(title);
                this.fetchChats();
              } catch (e) {
                store_1.default.set('user.error', e);
              }
            });
          }
          fetchChats() {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                yield AuthController_1.default.fetchUser();
                const chats = yield this.api.read();
                chats.map((chat) =>
                  __awaiter(this, void 0, void 0, function* () {
                    const token = yield this.getToken(chat.id);
                    yield MessagesController_1.default.connect(chat.id, token);
                  }),
                );
                store_1.default.set('chats', chats);
              } catch (e) {
                store_1.default.set('user.error', e);
              }
            });
          }
          addUserToChat(id, userId) {
            try {
              this.api.addUsers(id, [userId]);
            } catch (e) {
              store_1.default.set('user.error', e);
            }
          }
          deleteUserToChat(id, userId) {
            try {
              this.api.deleteUsers(id, [userId]);
            } catch (e) {
              store_1.default.set('user.error', e);
            }
          }
          delete(id) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                yield this.api.delete(id);
                this.fetchChats();
              } catch (e) {
                store_1.default.set('user.error', e);
              }
            });
          }
          getToken(id) {
            try {
              return this.api.getToken(id);
            } catch (e) {
              store_1.default.set('user.error', e);
            }
          }
          selectChat(id) {
            store_1.default.set('selectedChat', id);
          }
        }
        exports['default'] = new ChatsController();

        /***/
      },

    /***/ './src/controllers/MessagesController.ts':
      /*!***********************************************!*\
  !*** ./src/controllers/MessagesController.ts ***!
  \***********************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                var desc = Object.getOwnPropertyDescriptor(m, k);
                if (
                  !desc ||
                  ('get' in desc
                    ? !m.__esModule
                    : desc.writable || desc.configurable)
                ) {
                  desc = {
                    enumerable: true,
                    get: function () {
                      return m[k];
                    },
                  };
                }
                Object.defineProperty(o, k2, desc);
              }
            : function (o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                o[k2] = m[k];
              });
        var __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', {
                  enumerable: true,
                  value: v,
                });
              }
            : function (o, v) {
                o['default'] = v;
              });
        var __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
              for (var k in mod)
                if (
                  k !== 'default' &&
                  Object.prototype.hasOwnProperty.call(mod, k)
                )
                  __createBinding(result, mod, k);
            __setModuleDefault(result, mod);
            return result;
          };
        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              );
            });
          };
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        const WSTransport_1 = __importStar(
          __webpack_require__(
            /*! ../utils/wsTransport/WSTransport */ './src/utils/wsTransport/WSTransport.ts',
          ),
        );
        const store_1 = __importDefault(
          __webpack_require__(/*! ../store/store */ './src/store/store.ts'),
        );
        class MessagesController {
          constructor() {
            this.sockets = new Map();
          }
          connect(id, token) {
            return __awaiter(this, void 0, void 0, function* () {
              if (this.sockets.has(id)) {
                return;
              }
              const userId = store_1.default.getState().user.data.id;
              const wsTransport = new WSTransport_1.default(
                `wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`,
              );
              this.sockets.set(id, wsTransport);
              yield wsTransport.connect();
              this.subscribe(wsTransport, id);
              this.fetchOldMessages(id);
            });
          }
          sendMessage(id, message) {
            const socket = this.sockets.get(id);
            if (!socket) {
              throw new Error(`Chat ${id} is not connected`);
            }
            socket.send({
              type: 'message',
              content: message,
            });
          }
          fetchOldMessages(id) {
            const socket = this.sockets.get(id);
            if (!socket) {
              throw new Error(`Chat ${id} is not connected`);
            }
            socket.send({ type: 'get old', content: '0' });
          }
          closeAll() {
            Array.from(this.sockets.values()).forEach((socket) =>
              socket.close(),
            );
          }
          onMessage(id, messages) {
            let type;
            if (Array.isArray(messages)) {
              type = 'messages';
            } else {
              type = messages.type;
            }
            const oldMessages =
              (store_1.default.getState().messages || {})[id] || [];
            switch (type) {
              case 'message': {
                store_1.default.set(`messages.${id}`, [
                  ...oldMessages,
                  messages,
                ]);
                break;
              }
              case 'messages': {
                store_1.default.set(`messages.${id}`, [
                  ...oldMessages,
                  ...messages,
                ]);
                break;
              }
            }
          }
          onClose(id) {
            this.sockets.delete(id);
          }
          subscribe(transport, id) {
            transport.on(WSTransport_1.WSTransportEvents.Message, (message) =>
              this.onMessage(id, message),
            );
            transport.on(WSTransport_1.WSTransportEvents.Close, () =>
              this.onClose(id),
            );
          }
        }
        const controller = new MessagesController();
        exports['default'] = controller;

        /***/
      },

    /***/ './src/controllers/UserController.ts':
      /*!*******************************************!*\
  !*** ./src/controllers/UserController.ts ***!
  \*******************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              );
            });
          };
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.UserController = void 0;
        const UserAPI_1 = __importDefault(
          __webpack_require__(/*! ../api/UserAPI */ './src/api/UserAPI.ts'),
        );
        const store_1 = __importDefault(
          __webpack_require__(/*! ../store/store */ './src/store/store.ts'),
        );
        const AuthController_1 = __importDefault(
          __webpack_require__(
            /*! ./AuthController */ './src/controllers/AuthController.ts',
          ),
        );
        const router_1 = __importDefault(
          __webpack_require__(/*! ../router/router */ './src/router/router.ts'),
        );
        class UserController {
          constructor() {
            this.api = UserAPI_1.default;
          }
          profile(data) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                yield AuthController_1.default.fetchUser();
                store_1.default.set('user.error', null);
                yield this.api.update(data);
                router_1.default.go('/profile');
              } catch (e) {
                store_1.default.set('user.error', e);
              }
            });
          }
          password(data) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                store_1.default.set('user.error', null);
                yield this.api.password(data);
                yield AuthController_1.default.fetchUser();
                router_1.default.go('/profile');
              } catch (e) {
                store_1.default.set('user.error', e);
              }
            });
          }
          avatar(data) {
            return __awaiter(this, void 0, void 0, function* () {
              try {
                yield this.api.avatar(data);
                yield AuthController_1.default.fetchUser();
              } catch (e) {
                console.error(e.message);
              }
            });
          }
        }
        exports.UserController = UserController;
        exports['default'] = new UserController();

        /***/
      },

    /***/ './src/hocs/withRouter.ts':
      /*!********************************!*\
  !*** ./src/hocs/withRouter.ts ***!
  \********************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.withRouter = void 0;
        const router_1 = __importDefault(
          __webpack_require__(/*! ../router/router */ './src/router/router.ts'),
        );
        function withRouter(Component) {
          return class WithRouter extends Component {
            constructor(props) {
              super(
                Object.assign(Object.assign({}, props), {
                  router: router_1.default,
                }),
              );
            }
          };
        }
        exports.withRouter = withRouter;

        /***/
      },

    /***/ './src/hocs/withStore.ts':
      /*!*******************************!*\
  !*** ./src/hocs/withStore.ts ***!
  \*******************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                var desc = Object.getOwnPropertyDescriptor(m, k);
                if (
                  !desc ||
                  ('get' in desc
                    ? !m.__esModule
                    : desc.writable || desc.configurable)
                ) {
                  desc = {
                    enumerable: true,
                    get: function () {
                      return m[k];
                    },
                  };
                }
                Object.defineProperty(o, k2, desc);
              }
            : function (o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                o[k2] = m[k];
              });
        var __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', {
                  enumerable: true,
                  value: v,
                });
              }
            : function (o, v) {
                o['default'] = v;
              });
        var __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
              for (var k in mod)
                if (
                  k !== 'default' &&
                  Object.prototype.hasOwnProperty.call(mod, k)
                )
                  __createBinding(result, mod, k);
            __setModuleDefault(result, mod);
            return result;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.withStore = void 0;
        const helpers_1 = __webpack_require__(
          /*! ../router/helpers */ './src/router/helpers.ts',
        );
        const store_1 = __importStar(
          __webpack_require__(/*! ../store/store */ './src/store/store.ts'),
        );
        function withStore(mapStateToProps) {
          return function wrap(Component) {
            let previousState = null;
            return class WithStore extends Component {
              constructor(props) {
                previousState = mapStateToProps(store_1.default.getState());
                super(Object.assign(Object.assign({}, props), previousState));
                store_1.default.on(store_1.StoreEvents.Updated, () => {
                  const stateProps = mapStateToProps(
                    store_1.default.getState(),
                  );
                  if ((0, helpers_1.isEqual)(previousState, stateProps)) {
                    return;
                  }
                  this.setProps(Object.assign({}, stateProps));
                });
              }
            };
          };
        }
        exports.withStore = withStore;

        /***/
      },

    /***/ './src/index.ts':
      /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              );
            });
          };
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        const _404_1 = __webpack_require__(
          /*! ./views/404/404 */ './src/views/404/404.ts',
        );
        const _500_1 = __webpack_require__(
          /*! ./views/500/500 */ './src/views/500/500.ts',
        );
        const signIn_1 = __webpack_require__(
          /*! ./views/auth/signIn/signIn */ './src/views/auth/signIn/signIn.ts',
        );
        const signUp_1 = __webpack_require__(
          /*! ./views/auth/signUp/signUp */ './src/views/auth/signUp/signUp.ts',
        );
        const chat_1 = __webpack_require__(
          /*! ./views/chat/chat */ './src/views/chat/chat.ts',
        );
        const profile_card_mixin_1 = __webpack_require__(
          /*! ./components/profile-card/profile-card-mixin */ './src/components/profile-card/profile-card-mixin.ts',
        );
        const store_1 = __importDefault(
          __webpack_require__(/*! ./store/store */ './src/store/store.ts'),
        );
        const profile_update_info_1 = __webpack_require__(
          /*! ./views/profile/profile-update-info/profile-update-info */ './src/views/profile/profile-update-info/profile-update-info.ts',
        );
        const profile_update_password_1 = __webpack_require__(
          /*! ./views/profile/profile-update-password/profile-update-password */ './src/views/profile/profile-update-password/profile-update-password.ts',
        );
        __webpack_require__(
          /*! ./controllers/MessagesController */ './src/controllers/MessagesController.ts',
        );
        const AuthController_1 = __importDefault(
          __webpack_require__(
            /*! ./controllers/AuthController */ './src/controllers/AuthController.ts',
          ),
        );
        const router_1 = __importDefault(
          __webpack_require__(/*! ./router/router */ './src/router/router.ts'),
        );
        var Routes;
        (function (Routes) {
          Routes['Index'] = '/';
          Routes['SignUp'] = '/signup';
          Routes['Chat'] = '/messanger';
          Routes['Profile'] = '/profile';
          Routes['Settings'] = '/settings';
          Routes['ChangePassword'] = '/change-password';
          Routes['Page404'] = '/404';
          Routes['Page500'] = '/500';
        })(Routes || (Routes = {}));
        window.addEventListener('DOMContentLoaded', () =>
          __awaiter(void 0, void 0, void 0, function* () {
            router_1.default
              .use(Routes.Index, signIn_1.SignIn)
              .use(Routes.SignUp, signUp_1.SignUp)
              .use(Routes.Chat, chat_1.Chat)
              .use(Routes.Profile, profile_card_mixin_1.ProfilePage)
              .use(Routes.Settings, profile_update_info_1.ProfileUpdateInfo)
              .use(
                Routes.ChangePassword,
                profile_update_password_1.ProfileUpdatePassword,
              )
              .use(Routes.Page404, _404_1.Page404)
              .use(Routes.Page500, _500_1.Page500);
            let isProtectedRoute = true;
            switch (window.location.pathname) {
              case Routes.Index:
                break;
              case Routes.SignUp:
                isProtectedRoute = false;
                break;
            }
            try {
              yield AuthController_1.default.fetchUser();
              router_1.default.start();
              if (!isProtectedRoute || store_1.default.getState().user.data) {
                router_1.default.go(Routes.Chat);
              }
            } catch (e) {
              router_1.default.start();
              if (isProtectedRoute) {
                router_1.default.go(Routes.Index);
              }
            }
          }),
        );

        /***/
      },

    /***/ './src/modules/chat/components/main-chat/main-chat-header/main-chat-header.ts':
      /*!************************************************************************************!*\
  !*** ./src/modules/chat/components/main-chat/main-chat-header/main-chat-header.ts ***!
  \************************************************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              );
            });
          };
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.MainChatHeader = void 0;
        const block_1 = __webpack_require__(
          /*! ../../../../../utils/block/block */ './src/utils/block/block.ts',
        );
        const input_mixin_1 = __webpack_require__(
          /*! ../../../../../components/inputs/input-mixin */ './src/components/inputs/input-mixin.ts',
        );
        const button_mixin_1 = __webpack_require__(
          /*! ../../../../../components/buttons/button-mixin */ './src/components/buttons/button-mixin.ts',
        );
        const store_1 = __importDefault(
          __webpack_require__(
            /*! ../../../../../store/store */ './src/store/store.ts',
          ),
        );
        const ChatsController_1 = __importDefault(
          __webpack_require__(
            /*! ../../../../../controllers/ChatsController */ './src/controllers/ChatsController.ts',
          ),
        );
        const main_chat_header_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./main-chat-header.pug */ './src/modules/chat/components/main-chat/main-chat-header/main-chat-header.pug',
          ),
        );
        class MainChatHeader extends block_1.Block {
          constructor(props) {
            super(props);
          }
          init() {
            this.children.deleteLink = new input_mixin_1.Input({
              name: 'search',
              type: 'text',
              placeholder: 'Удалить пользователя по id',
            });
            this.children.deleteUserToChat = new button_mixin_1.Button({
              type: 'submit',
              content: 'Удалить',
              events: {
                click: () =>
                  __awaiter(this, void 0, void 0, function* () {
                    const input = this.children.deleteLink;
                    const deleteUserId = input.getValue();
                    ChatsController_1.default.deleteUserToChat(
                      store_1.default.getState().selectedChat,
                      deleteUserId,
                    );
                    input.setValue('');
                  }),
              },
            });
          }
          render() {
            return this.compile(main_chat_header_pug_1.default, this.props);
          }
        }
        exports.MainChatHeader = MainChatHeader;

        /***/
      },

    /***/ './src/modules/chat/components/main-chat/main-chat.ts':
      /*!************************************************************!*\
  !*** ./src/modules/chat/components/main-chat/main-chat.ts ***!
  \************************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              );
            });
          };
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.MainChat = exports.MainChatBase = void 0;
        const block_1 = __webpack_require__(
          /*! ../../../../utils/block/block */ './src/utils/block/block.ts',
        );
        const main_chat_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./main-chat.pug */ './src/modules/chat/components/main-chat/main-chat.pug',
          ),
        );
        const main_chat_header_1 = __webpack_require__(
          /*! ./main-chat-header/main-chat-header */ './src/modules/chat/components/main-chat/main-chat-header/main-chat-header.ts',
        );
        const MessagesController_1 = __importDefault(
          __webpack_require__(
            /*! ../../../../controllers/MessagesController */ './src/controllers/MessagesController.ts',
          ),
        );
        const AuthController_1 = __importDefault(
          __webpack_require__(
            /*! ../../../../controllers/AuthController */ './src/controllers/AuthController.ts',
          ),
        );
        const store_1 = __importDefault(
          __webpack_require__(
            /*! ../../../../store/store */ './src/store/store.ts',
          ),
        );
        const link_mixin_1 = __webpack_require__(
          /*! ../../../../components/links/link-mixin */ './src/components/links/link-mixin.ts',
        );
        const button_mixin_1 = __webpack_require__(
          /*! ../../../../components/buttons/button-mixin */ './src/components/buttons/button-mixin.ts',
        );
        const input_mixin_1 = __webpack_require__(
          /*! ../../../../components/inputs/input-mixin */ './src/components/inputs/input-mixin.ts',
        );
        const validator_1 = __webpack_require__(
          /*! ../../../../utils/validator/validator */ './src/utils/validator/validator.ts',
        );
        const withStore_1 = __webpack_require__(
          /*! ../../../../hocs/withStore */ './src/hocs/withStore.ts',
        );
        const message_1 = __webpack_require__(
          /*! ../../../../components/messages/message */ './src/components/messages/message.ts',
        );
        class MainChatBase extends block_1.Block {
          constructor(props) {
            super(props);
          }
          init() {
            AuthController_1.default.fetchUser();
            this.children.header = new main_chat_header_1.MainChatHeader({
              username: store_1.default.getState().user.data.first_name,
              img: !store_1.default.getState().user.data.avatar
                ? ''
                : `https://ya-praktikum.tech/api/v2/resources${
                    store_1.default.getState().user.data.avatar
                  }`,
            });
            this.children.dialogs = this.createMessages(this.props);
            this.children.input = new input_mixin_1.Input({
              name: 'message',
              type: 'textarea',
              placeholder: 'Сообщение',
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.attachLink = new link_mixin_1.BaseLink({});
            this.children.sendLink = new button_mixin_1.Button({
              content: 'Отправить',
              events: {
                click: () => {
                  const input = this.children.input;
                  const message = input.getValue();
                  MessagesController_1.default.sendMessage(
                    this.props.selectedChat,
                    message,
                  );
                  input.setValue('');
                },
              },
            });
          }
          componentDidMount() {
            return __awaiter(this, void 0, void 0, function* () {
              yield AuthController_1.default.fetchUser();
            });
          }
          componentDidUpdate(oldProps, newProps) {
            this.children.dialogs = this.createMessages(newProps);
            return true;
          }
          createMessages(props) {
            return props.messages.map((data) => {
              return new message_1.Message(
                Object.assign(Object.assign({}, data), {
                  isMine: props.userId === data.user_id,
                }),
              );
            });
          }
          render() {
            return this.compile(main_chat_pug_1.default, this.props);
          }
        }
        exports.MainChatBase = MainChatBase;
        const withSelectedChatMessages = (0, withStore_1.withStore)((state) => {
          const selectedChatId = state.selectedChat;
          if (!selectedChatId) {
            return {
              messages: [],
              selectedChat: undefined,
              userId:
                (state === null || state === void 0
                  ? void 0
                  : state.user.data.id) || 0,
            };
          }
          return {
            messages: (state.messages || {})[selectedChatId] || [],
            selectedChat: state.selectedChat,
            userId:
              (state === null || state === void 0
                ? void 0
                : state.user.data.id) || 0,
          };
        });
        exports.MainChat = withSelectedChatMessages(MainChatBase);

        /***/
      },

    /***/ './src/modules/chat/components/sidebar/sidebar.ts':
      /*!********************************************************!*\
  !*** ./src/modules/chat/components/sidebar/sidebar.ts ***!
  \********************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
              );
            });
          };
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Sidebar = void 0;
        const block_1 = __webpack_require__(
          /*! ../../../../utils/block/block */ './src/utils/block/block.ts',
        );
        const sidebar_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./sidebar.pug */ './src/modules/chat/components/sidebar/sidebar.pug',
          ),
        );
        const link_mixin_1 = __webpack_require__(
          /*! ../../../../components/links/link-mixin */ './src/components/links/link-mixin.ts',
        );
        const input_mixin_1 = __webpack_require__(
          /*! ../../../../components/inputs/input-mixin */ './src/components/inputs/input-mixin.ts',
        );
        const user_chats_1 = __webpack_require__(
          /*! ./user-chats/user-chats */ './src/modules/chat/components/sidebar/user-chats/user-chats.ts',
        );
        const store_1 = __importDefault(
          __webpack_require__(
            /*! ../../../../store/store */ './src/store/store.ts',
          ),
        );
        const ChatsController_1 = __importDefault(
          __webpack_require__(
            /*! ../../../../controllers/ChatsController */ './src/controllers/ChatsController.ts',
          ),
        );
        const AuthController_1 = __importDefault(
          __webpack_require__(
            /*! ../../../../controllers/AuthController */ './src/controllers/AuthController.ts',
          ),
        );
        const withStore_1 = __webpack_require__(
          /*! ../../../../hocs/withStore */ './src/hocs/withStore.ts',
        );
        const button_mixin_1 = __webpack_require__(
          /*! ../../../../components/buttons/button-mixin */ './src/components/buttons/button-mixin.ts',
        );
        class SidebarBase extends block_1.Block {
          constructor(props) {
            super(Object.assign({}, props));
          }
          init() {
            ChatsController_1.default.fetchChats();
            AuthController_1.default.fetchUser();
            this.children.profileLink = new link_mixin_1.Link({
              content: 'Профиль',
              to: '/profile',
              extraClass: 'sidebar__link',
            });
            this.children.addChat = new button_mixin_1.Button({
              type: 'submit',
              content: 'Создать чат',
              btnClass: 'create-chat',
              events: {
                click: () =>
                  __awaiter(this, void 0, void 0, function* () {
                    yield ChatsController_1.default.create('test chat');
                  }),
              },
            });
            this.children.chats = this.createChats(this.props);
            this.children.addLink = new input_mixin_1.Input({
              name: 'search',
              type: 'text',
              placeholder: 'Добавить пользователя по id',
            });
            this.children.addUserToChat = new button_mixin_1.Button({
              type: 'submit',
              content: 'Добавить',
              events: {
                click: () =>
                  __awaiter(this, void 0, void 0, function* () {
                    const input = this.children.addLink;
                    const addUserId = input.getValue();
                    ChatsController_1.default.addUserToChat(
                      store_1.default.getState().selectedChat,
                      addUserId,
                    );
                    input.setValue('');
                  }),
              },
            });
          }
          componentDidUpdate(oldProps, newProps) {
            this.children.chats = this.createChats(newProps);
            return true;
          }
          createChats(props) {
            return props.chats.map((data) => {
              return new user_chats_1.UserChats(
                Object.assign(Object.assign({}, data), {
                  events: {
                    click: () => {
                      ChatsController_1.default.selectChat(data.id);
                    },
                  },
                }),
              );
            });
          }
          render() {
            return this.compile(sidebar_pug_1.default, this.props);
          }
        }
        const withChats = (0, withStore_1.withStore)((state) => ({
          chats: [...(state.chats || [])],
        }));
        exports.Sidebar = withChats(SidebarBase);

        /***/
      },

    /***/ './src/modules/chat/components/sidebar/user-chats/user-chats.ts':
      /*!**********************************************************************!*\
  !*** ./src/modules/chat/components/sidebar/user-chats/user-chats.ts ***!
  \**********************************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.UserChats =
          exports.withSelectedChat =
          exports.UserChatsBase =
            void 0;
        const block_1 = __webpack_require__(
          /*! ../../../../../utils/block/block */ './src/utils/block/block.ts',
        );
        const user_chats_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./user-chats.pug */ './src/modules/chat/components/sidebar/user-chats/user-chats.pug',
          ),
        );
        __webpack_require__(
          /*! ./user-chats.scss */ './src/modules/chat/components/sidebar/user-chats/user-chats.scss',
        );
        const withStore_1 = __webpack_require__(
          /*! ../../../../../hocs/withStore */ './src/hocs/withStore.ts',
        );
        class UserChatsBase extends block_1.Block {
          constructor(props) {
            super(props);
          }
          render() {
            return this.compile(user_chats_pug_1.default, this.props);
          }
        }
        exports.UserChatsBase = UserChatsBase;
        exports.withSelectedChat = (0, withStore_1.withStore)((state) => ({
          selectedChat: (state.chats || []).find(
            ({ id }) => id === state.selectedChat,
          ),
        }));
        exports.UserChats = (0, exports.withSelectedChat)(UserChatsBase);

        /***/
      },

    /***/ './src/router/helpers.ts':
      /*!*******************************!*\
  !*** ./src/router/helpers.ts ***!
  \*******************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        exports.isEqual = void 0;
        function isEqual(newPath, oldPath) {
          return newPath === oldPath;
        }
        exports.isEqual = isEqual;

        /***/
      },

    /***/ './src/router/route.ts':
      /*!*****************************!*\
  !*** ./src/router/route.ts ***!
  \*****************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Route = void 0;
        const helpers_1 = __webpack_require__(
          /*! ./helpers */ './src/router/helpers.ts',
        );
        function render(query, block) {
          const root = document.querySelector(query);
          if (root === null) {
            throw new Error(`root not found by selector "${query}"`);
          }
          root.innerHTML = '';
          root.append(block.getContent());
          return root;
        }
        class Route {
          constructor(pathname, view, props) {
            this._pathname = pathname;
            this._blockClass = view;
            this._block = null;
            this._props = props;
          }
          navigate(pathname) {
            if (this.match(pathname)) {
              this.render();
            }
          }
          leave() {
            this._block = null;
          }
          match(pathname) {
            return (0, helpers_1.isEqual)(pathname, this._pathname);
          }
          render() {
            if (!this._block) {
              this._block = new this._blockClass({});
              render(this._props, this._block);
              return;
            }
          }
        }
        exports.Route = Route;

        /***/
      },

    /***/ './src/router/router.ts':
      /*!******************************!*\
  !*** ./src/router/router.ts ***!
  \******************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        const route_1 = __webpack_require__(
          /*! ./route */ './src/router/route.ts',
        );
        const _404_1 = __webpack_require__(
          /*! ../views/404/404 */ './src/views/404/404.ts',
        );
        class Router {
          constructor(rootQuery) {
            this.rootQuery = rootQuery;
            this._routes = [];
            this._currentRoute = null;
            this._history = window.history;
            if (Router.__instance) {
              return Router.__instance;
            }
            this._routes = [];
            Router.__instance = this;
          }
          use(pathname, block) {
            const route = new route_1.Route(pathname, block, this.rootQuery);
            this._routes.push(route);
            return this;
          }
          start() {
            window.onpopstate = (event) => {
              const target = event.currentTarget;
              this._onRoute(target.location.pathname);
            };
            this._onRoute(window.location.pathname);
          }
          _onRoute(pathname) {
            const route = this.getRoute(pathname);
            if (!route) {
              const errorPage = new route_1.Route(
                '/error-404',
                _404_1.Page404,
                this.rootQuery,
              );
              console.log(errorPage);
              errorPage.render();
              return;
            }
            if (this._currentRoute && this._currentRoute !== route) {
              this._currentRoute.leave();
            }
            this._currentRoute = route;
            route.render();
          }
          go(pathname) {
            this._history.pushState({}, '', pathname);
            this._onRoute(pathname);
          }
          reset() {
            this._routes = [];
            this._currentRoute = null;
          }
          back() {
            this._history.back();
          }
          forward() {
            this._history.forward();
          }
          getRoute(pathname) {
            return this._routes.find((route) => route.match(pathname));
          }
        }
        exports['default'] = new Router('#app');

        /***/
      },

    /***/ './src/store/helpers.ts':
      /*!******************************!*\
  !*** ./src/store/helpers.ts ***!
  \******************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        exports.set = exports.merge = void 0;
        function merge(lhs, rhs) {
          for (let p in rhs) {
            if (!rhs.hasOwnProperty(p)) {
              continue;
            }
            try {
              if (rhs[p].constructor === Object) {
                rhs[p] = merge(lhs[p], rhs[p]);
              } else {
                lhs[p] = rhs[p];
              }
            } catch (e) {
              lhs[p] = rhs[p];
            }
          }
          return lhs;
        }
        exports.merge = merge;
        function set(object, path, value) {
          if (typeof object !== 'object' || object === null) {
            return object;
          }
          if (typeof path !== 'string') {
            throw new Error('path must be string');
          }
          const result = path.split('.').reduceRight(
            (acc, key) => ({
              [key]: acc,
            }),
            value,
          );
          return merge(object, result);
        }
        exports.set = set;

        /***/
      },

    /***/ './src/store/store.ts':
      /*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Store = exports.StoreEvents = void 0;
        const helpers_1 = __webpack_require__(
          /*! ./helpers */ './src/store/helpers.ts',
        );
        const event_bus_1 = __webpack_require__(
          /*! ../utils/event-bus/event-bus */ './src/utils/event-bus/event-bus.ts',
        );
        var StoreEvents;
        (function (StoreEvents) {
          StoreEvents['Updated'] = 'updated';
        })((StoreEvents = exports.StoreEvents || (exports.StoreEvents = {})));
        class Store extends event_bus_1.EventBus {
          constructor() {
            super(...arguments);
            this.state = {};
          }
          set(keypath, data) {
            (0, helpers_1.set)(this.state, keypath, data);
            this.emit(StoreEvents.Updated, this.getState());
          }
          getState() {
            return this.state;
          }
        }
        exports.Store = Store;
        const store = new Store();
        exports['default'] = store;

        /***/
      },

    /***/ './src/utils/block/block.ts':
      /*!**********************************!*\
  !*** ./src/utils/block/block.ts ***!
  \**********************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Block = void 0;
        const event_bus_1 = __webpack_require__(
          /*! ../event-bus/event-bus */ './src/utils/event-bus/event-bus.ts',
        );
        const uuid_1 = __webpack_require__(
          /*! uuid */ './node_modules/uuid/dist/commonjs-browser/index.js',
        );
        class Block {
          constructor(propsWithChildren) {
            this.id = (0, uuid_1.v4)();
            this._element = null;
            this.setProps = (nextProps) => {
              if (!nextProps) {
                return;
              }
              Object.assign(this.props, nextProps);
            };
            const eventBus = new event_bus_1.EventBus();
            const { props, children } =
              this._getChildrenAndProps(propsWithChildren);
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
                value.length > 0 &&
                value.every((v) => v instanceof Block)
              ) {
                children[key] = value;
              } else if (value instanceof Block) {
                children[key] = value;
              } else {
                props[key] = value;
              }
            });
            return { props: props, children };
          }
          _addEvents() {
            const { events = {} } = this.props;
            Object.keys(events).forEach((eventName) => {
              var _a;
              (_a = this._element) === null || _a === void 0
                ? void 0
                : _a.addEventListener(eventName, events[eventName]);
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
          _init() {
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
              if (Array.isArray(child)) {
                child.forEach((ch) => ch.dispatchComponentDidMount());
              } else {
                child.dispatchComponentDidMount();
              }
            });
          }
          _componentDidUpdate(oldProps, newProps) {
            if (this.componentDidUpdate(oldProps, newProps)) {
              this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
            }
          }
          /* @ts-ignore */
          componentDidUpdate(oldProps, newProps) {
            return true;
          }
          get element() {
            return this._element;
          }
          _render() {
            const fragment = this.render();
            const newElement = fragment.firstElementChild;
            if (this._element && newElement) {
              this._element.replaceWith(newElement);
            }
            this._element = newElement;
            this._addEvents();
          }
          compile(template, context) {
            const contextAndStubs = Object.assign({}, context);
            Object.entries(this.children).forEach(([name, component]) => {
              if (Array.isArray(component)) {
                contextAndStubs[name] = component.map(
                  (child) => `<div data-id="${child.id}"></div>`,
                );
              } else {
                contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
              }
            });
            const html = template(contextAndStubs);
            const temp = document.createElement('template');
            temp.innerHTML = html;
            const replaceStub = (component) => {
              var _a;
              const stub = temp.content.querySelector(
                `[data-id="${component.id}"]`,
              );
              if (!stub) {
                return;
              }
              (_a = component.getContent()) === null || _a === void 0
                ? void 0
                : _a.append(...Array.from(stub.childNodes));
              stub.replaceWith(component.getContent());
            };
            Object.entries(this.children).forEach(([_, component]) => {
              if (Array.isArray(component)) {
                component.forEach(replaceStub);
              } else {
                replaceStub(component);
              }
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
                const oldTarget = Object.assign({}, target);
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
        }
        exports.Block = Block;
        Block.EVENTS = {
          INIT: 'init',
          FLOW_CDM: 'flow:component-did-mount',
          FLOW_CDU: 'flow:component-did-update',
          FLOW_RENDER: 'flow:render',
        };

        /***/
      },

    /***/ './src/utils/event-bus/event-bus.ts':
      /*!******************************************!*\
  !*** ./src/utils/event-bus/event-bus.ts ***!
  \******************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        exports.EventBus = void 0;
        class EventBus {
          constructor() {
            this.listeners = {};
          }
          on(event, handler) {
            if (!this.listeners[event]) {
              this.listeners[event] = [];
            }
            this.listeners[event].push(handler);
          }
          off(event, handler) {
            if (!this.listeners[event]) {
              throw new Event(`Нет события: ${event}`);
            }
            this.listeners[event] = this.listeners[event].filter(
              (listener) => listener !== handler,
            );
          }
          emit(event, ...args) {
            if (!this.listeners[event]) {
              return;
            }
            this.listeners[event].forEach((listener) => listener(...args));
          }
        }
        exports.EventBus = EventBus;

        /***/
      },

    /***/ './src/utils/httpTrasnsport/http-transport.ts':
      /*!****************************************************!*\
  !*** ./src/utils/httpTrasnsport/http-transport.ts ***!
  \****************************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Method = void 0;
        var Method;
        (function (Method) {
          Method['GET'] = 'GET';
          Method['POST'] = 'POST';
          Method['PUT'] = 'PUT';
          Method['PATCH'] = 'PATCH';
          Method['DELETE'] = 'DELETE';
        })((Method = exports.Method || (exports.Method = {})));
        class HttpTransport {
          constructor(endpoint) {
            this.get = (path = '/') => {
              return this.request(this.endpoint + path);
            };
            this.post = (path, data) => {
              return this.request(this.endpoint + path, {
                method: Method.POST,
                data,
              });
            };
            this.put = (path, data) => {
              return this.request(this.endpoint + path, {
                method: Method.PUT,
                data,
              });
            };
            this.patch = (path, data) => {
              return this.request(this.endpoint + path, {
                method: Method.PATCH,
                data,
              });
            };
            this.delete = (path, data) => {
              return this.request(this.endpoint + path, {
                method: Method.DELETE,
                data,
              });
            };
            this.endpoint = `${HttpTransport.API_URL}${endpoint}`;
          }
          request(url, optinos = { method: Method.GET }) {
            const { method, data } = optinos;
            return new Promise((resolve, reject) => {
              const xhr = new XMLHttpRequest();
              xhr.open(method, url);
              xhr.onload = () => {
                resolve(xhr.response);
              };
              xhr.onabort = () => reject({ reason: 'abort' });
              xhr.onerror = () => reject({ reason: 'network error' });
              xhr.ontimeout = () => reject({ reason: 'timeout' });
              if (!(data instanceof FormData)) {
                xhr.setRequestHeader('Content-Type', 'application/json');
              }
              xhr.withCredentials = true;
              xhr.responseType = 'json';
              if (method === Method.GET || !data) {
                xhr.send();
              } else {
                xhr.send(
                  data instanceof FormData ? data : JSON.stringify(data),
                );
              }
            });
          }
        }
        exports['default'] = HttpTransport;
        HttpTransport.API_URL = 'https://ya-praktikum.tech/api/v2';

        /***/
      },

    /***/ './src/utils/serializer/serializer.ts':
      /*!********************************************!*\
  !*** ./src/utils/serializer/serializer.ts ***!
  \********************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        exports.serializer = void 0;
        const validator_1 = __webpack_require__(
          /*! ../validator/validator */ './src/utils/validator/validator.ts',
        );
        function serializer(event, fields) {
          event.preventDefault();
          const formData = {};
          let isFormValid = true;
          fields.map((field) => {
            const el = document.getElementsByName(field)[0];
            if ((0, validator_1.validate)(el)) {
              isFormValid = false;
              // el.classList.add(this.props.styles['input-error']);
            } else {
              const name = el.getAttribute('name');
              const { value } = el;
              if (name) {
                formData[name] = value;
              }
            }
          });
          if (isFormValid) {
            return formData;
          }
          return;
        }
        exports.serializer = serializer;

        /***/
      },

    /***/ './src/utils/validator/validator.ts':
      /*!******************************************!*\
  !*** ./src/utils/validator/validator.ts ***!
  \******************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        exports.validateBlock = exports.validate = exports.FieldName = void 0;
        var FieldName;
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
          FieldName['DisplayName'] = 'display_name';
        })((FieldName = exports.FieldName || (exports.FieldName = {})));
        function validate(element) {
          const { name, value } = element;
          if (name === FieldName.Login) {
            const isTextLoginValid = /^([0-9]*[a-zA-Z\-_][0-9]*)+$/.test(value);
            const isLengthLoginValid = value.length >= 3 && value.length < 20;
            if (!isLengthLoginValid || !isTextLoginValid) {
              return true;
            }
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
            if (!isValidText || !isValidLength) {
              return true;
            }
            return null;
          }
          if (name === FieldName.FirstName || name === FieldName.SecondName) {
            const isValidValue = /^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/.test(value);
            if (!isValidValue) {
              return true;
            }
            return null;
          }
          if (name === FieldName.Email) {
            const isValidValue = /^([\w-.]+@[a-zA-Z]+.[a-z]+)$/.test(value);
            if (!isValidValue) {
              return true;
            }
            return null;
          }
          if (name === FieldName.Phone) {
            const isValidValue = /^\+*[\d]{10,15}$/.test(value);
            if (!isValidValue) {
              return true;
            }
            return null;
          }
          if (name === FieldName.Message) {
            const isValidLength = value.length > 0;
            if (!isValidLength) {
              return true;
            }
            return null;
          }
        }
        exports.validate = validate;
        function validateBlock(event) {
          const element = event.target;
          if (validate(element)) {
            element.classList.add('invalid');
            document.getElementsByClassName(
              `error-${element.name}`,
            )[0].style.display = 'block';
          } else {
            element.classList.remove('invalid');
            document.getElementsByClassName(
              `error-${element.name}`,
            )[0].style.display = 'none';
          }
        }
        exports.validateBlock = validateBlock;

        /***/
      },

    /***/ './src/utils/wsTransport/WSTransport.ts':
      /*!**********************************************!*\
  !*** ./src/utils/wsTransport/WSTransport.ts ***!
  \**********************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        exports.WSTransportEvents = void 0;
        const event_bus_1 = __webpack_require__(
          /*! ../event-bus/event-bus */ './src/utils/event-bus/event-bus.ts',
        );
        var WSTransportEvents;
        (function (WSTransportEvents) {
          WSTransportEvents['Connected'] = 'connected';
          WSTransportEvents['Error'] = 'error';
          WSTransportEvents['Message'] = 'message';
          WSTransportEvents['Close'] = 'close';
        })(
          (WSTransportEvents =
            exports.WSTransportEvents || (exports.WSTransportEvents = {})),
        );
        class WSTransport extends event_bus_1.EventBus {
          constructor(url) {
            super();
            this.url = url;
            this.socket = null;
            this.pingInterval = 0;
          }
          send(data) {
            if (!this.socket) {
              throw new Error('Socket is not connected');
            }
            this.socket.send(JSON.stringify(data));
          }
          connect() {
            this.socket = new WebSocket(this.url);
            this.subscribe(this.socket);
            this.setupPing();
            return new Promise((resolve) => {
              this.on(WSTransportEvents.Connected, () => {
                resolve();
              });
            });
          }
          close() {
            var _a;
            (_a = this.socket) === null || _a === void 0 ? void 0 : _a.close();
          }
          setupPing() {
            this.pingInterval = setInterval(() => {
              this.send({ type: 'ping' });
            }, 5000);
            this.on(WSTransportEvents.Close, () => {
              clearInterval(this.pingInterval);
              this.pingInterval = 0;
            });
          }
          subscribe(socket) {
            socket.addEventListener('open', () => {
              this.emit(WSTransportEvents.Connected);
            });
            socket.addEventListener('close', () => {
              this.emit(WSTransportEvents.Close);
            });
            socket.addEventListener('error', (e) => {
              this.emit(WSTransportEvents.Error, e);
            });
            socket.addEventListener('message', (message) => {
              const data = JSON.parse(message.data);
              if (data.type && data.type === 'pong') {
                return;
              }
              this.emit(WSTransportEvents.Message, data);
            });
          }
        }
        exports['default'] = WSTransport;

        /***/
      },

    /***/ './src/views/404/404.ts':
      /*!******************************!*\
  !*** ./src/views/404/404.ts ***!
  \******************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Page404 = void 0;
        const block_1 = __webpack_require__(
          /*! ../../utils/block/block */ './src/utils/block/block.ts',
        );
        const link_mixin_1 = __webpack_require__(
          /*! ../../components/links/link-mixin */ './src/components/links/link-mixin.ts',
        );
        const _404_pug_1 = __importDefault(
          __webpack_require__(/*! ./404.pug */ './src/views/404/404.pug'),
        );
        __webpack_require__(/*! ./404.scss */ './src/views/404/404.scss');
        class Page404 extends block_1.Block {
          constructor(props) {
            super(props);
          }
          init() {
            this.children.link = new link_mixin_1.Link({
              content: 'Назад к чатам',
              to: '/',
            });
          }
          render() {
            return this.compile(_404_pug_1.default, this.props);
          }
        }
        exports.Page404 = Page404;

        /***/
      },

    /***/ './src/views/500/500.ts':
      /*!******************************!*\
  !*** ./src/views/500/500.ts ***!
  \******************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Page500 = void 0;
        const block_1 = __webpack_require__(
          /*! ../../utils/block/block */ './src/utils/block/block.ts',
        );
        const link_mixin_1 = __webpack_require__(
          /*! ../../components/links/link-mixin */ './src/components/links/link-mixin.ts',
        );
        const _404_pug_1 = __importDefault(
          __webpack_require__(/*! ../404/404.pug */ './src/views/404/404.pug'),
        );
        __webpack_require__(/*! ../404/404.scss */ './src/views/404/404.scss');
        class Page500 extends block_1.Block {
          constructor(props) {
            super(props);
          }
          init() {
            this.children.link = new link_mixin_1.BaseLink({
              content: 'Назад к чатам',
              to: '/',
            });
          }
          render() {
            return this.compile(_404_pug_1.default, this.props);
          }
        }
        exports.Page500 = Page500;

        /***/
      },

    /***/ './src/views/auth/signIn/signIn.ts':
      /*!*****************************************!*\
  !*** ./src/views/auth/signIn/signIn.ts ***!
  \*****************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.SignIn = void 0;
        const button_mixin_1 = __webpack_require__(
          /*! ../../../components/buttons/button-mixin */ './src/components/buttons/button-mixin.ts',
        );
        const block_1 = __webpack_require__(
          /*! ../../../utils/block/block */ './src/utils/block/block.ts',
        );
        const input_mixin_1 = __webpack_require__(
          /*! ../../../components/inputs/input-mixin */ './src/components/inputs/input-mixin.ts',
        );
        const link_mixin_1 = __webpack_require__(
          /*! ../../../components/links/link-mixin */ './src/components/links/link-mixin.ts',
        );
        const validator_1 = __webpack_require__(
          /*! ../../../utils/validator/validator */ './src/utils/validator/validator.ts',
        );
        const serializer_1 = __webpack_require__(
          /*! ../../../utils/serializer/serializer */ './src/utils/serializer/serializer.ts',
        );
        const AuthController_1 = __importDefault(
          __webpack_require__(
            /*! ../../../controllers/AuthController */ './src/controllers/AuthController.ts',
          ),
        );
        const signIn_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./signIn.pug */ './src/views/auth/signIn/signIn.pug',
          ),
        );
        __webpack_require__(
          /*! ./signIn.scss */ './src/views/auth/signIn/signIn.scss',
        );
        class SignIn extends block_1.Block {
          constructor(props) {
            super(props);
          }
          init() {
            this.children.login = new input_mixin_1.Input({
              name: 'login',
              type: 'text',
              label: 'Логин',
              placeholder: '',
              error: 'Логин должен содержать больше 3х символов',
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.password = new input_mixin_1.Input({
              name: 'password',
              type: 'password',
              label: 'Пароль',
              placeholder: '',
              error: 'Недопустимые символы',
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.button = new button_mixin_1.Button({
              type: 'submit',
              content: 'Авторизоваться',
              btnClass: 'sign-in-btn',
              events: {
                click: (e) => this.onSubmit(e),
              },
            });
            this.children.link = new link_mixin_1.Link({
              content: 'Нет аккаунта?',
              to: '/signup',
            });
          }
          onSubmit(e) {
            const fields = ['login', 'password'];
            const dataForm = (0, serializer_1.serializer)(e, fields);
            AuthController_1.default.signin(dataForm);
          }
          render() {
            return this.compile(signIn_pug_1.default, this.props);
          }
        }
        exports.SignIn = SignIn;

        /***/
      },

    /***/ './src/views/auth/signUp/signUp.ts':
      /*!*****************************************!*\
  !*** ./src/views/auth/signUp/signUp.ts ***!
  \*****************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.SignUp = void 0;
        const block_1 = __webpack_require__(
          /*! ../../../utils/block/block */ './src/utils/block/block.ts',
        );
        const button_mixin_1 = __webpack_require__(
          /*! ../../../components/buttons/button-mixin */ './src/components/buttons/button-mixin.ts',
        );
        const input_mixin_1 = __webpack_require__(
          /*! ../../../components/inputs/input-mixin */ './src/components/inputs/input-mixin.ts',
        );
        const link_mixin_1 = __webpack_require__(
          /*! ../../../components/links/link-mixin */ './src/components/links/link-mixin.ts',
        );
        const validator_1 = __webpack_require__(
          /*! ../../../utils/validator/validator */ './src/utils/validator/validator.ts',
        );
        const serializer_1 = __webpack_require__(
          /*! ../../../utils/serializer/serializer */ './src/utils/serializer/serializer.ts',
        );
        const AuthController_1 = __importDefault(
          __webpack_require__(
            /*! ../../../controllers/AuthController */ './src/controllers/AuthController.ts',
          ),
        );
        const signUp_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./signUp.pug */ './src/views/auth/signUp/signUp.pug',
          ),
        );
        __webpack_require__(
          /*! ./signUp.scss */ './src/views/auth/signUp/signUp.scss',
        );
        class SignUp extends block_1.Block {
          constructor(props) {
            super(props);
          }
          init() {
            this.children.email = new input_mixin_1.Input({
              name: 'email',
              type: 'text',
              label: 'Почта',
              placeholder: '',
              error: 'Неверный формат',
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.login = new input_mixin_1.Input({
              name: 'login',
              type: 'text',
              label: 'Логин',
              placeholder: '',
              error: 'Недостаточное количество символов или неверный формат',
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.firstName = new input_mixin_1.Input({
              name: 'first_name',
              type: 'text',
              label: 'Имя',
              placeholder: '',
              error: 'Недостаточное количество символов или неверный формат',
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.secondName = new input_mixin_1.Input({
              name: 'second_name',
              type: 'text',
              label: 'Фамилия',
              placeholder: '',
              error: 'Недостаточное количество символов или неверный формат',
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.phone = new input_mixin_1.Input({
              name: 'phone',
              type: 'text',
              label: 'Телефон',
              placeholder: '',
              error: 'Недостаточное количество символов или неверный формат',
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.password = new input_mixin_1.Input({
              name: 'password',
              type: 'password',
              label: 'Пароль',
              placeholder: '',
              error: 'Пароль должен быть как минимум из 8 символов',
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.repeatPassword = new input_mixin_1.Input({
              name: 'repeatPassword',
              type: 'password',
              label: 'Пароль (ещё раз)',
              placeholder: '',
              error: 'Пароль не совпадают',
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.button = new button_mixin_1.Button({
              type: 'submit',
              content: 'Зарегистрироваться',
              btnClass: 'sign-up',
              events: {
                click: (e) => this.onSubmit(e),
              },
            });
            this.children.link = new link_mixin_1.Link({
              content: 'Войти',
              to: '/messanger',
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
            (0, serializer_1.serializer)(e, fields);
            const dataForm = (0, serializer_1.serializer)(e, fields);
            AuthController_1.default.signup(dataForm);
          }
          render() {
            return this.compile(signUp_pug_1.default, this.props);
          }
        }
        exports.SignUp = SignUp;

        /***/
      },

    /***/ './src/views/chat/chat.ts':
      /*!********************************!*\
  !*** ./src/views/chat/chat.ts ***!
  \********************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Chat = void 0;
        const block_1 = __webpack_require__(
          /*! ../../utils/block/block */ './src/utils/block/block.ts',
        );
        const sidebar_1 = __webpack_require__(
          /*! ../../modules/chat/components/sidebar/sidebar */ './src/modules/chat/components/sidebar/sidebar.ts',
        );
        const main_chat_1 = __webpack_require__(
          /*! ../../modules/chat/components/main-chat/main-chat */ './src/modules/chat/components/main-chat/main-chat.ts',
        );
        const chat_pug_1 = __importDefault(
          __webpack_require__(/*! ./chat.pug */ './src/views/chat/chat.pug'),
        );
        const lens_icon_svg_1 = __importDefault(
          __webpack_require__(
            /*! ../../assets/icons/lens-icon.svg */ './src/assets/icons/lens-icon.svg',
          ),
        );
        const ChatsController_1 = __importDefault(
          __webpack_require__(
            /*! ../../controllers/ChatsController */ './src/controllers/ChatsController.ts',
          ),
        );
        const AuthController_1 = __importDefault(
          __webpack_require__(
            /*! ../../controllers/AuthController */ './src/controllers/AuthController.ts',
          ),
        );
        __webpack_require__(/*! ./chat.scss */ './src/views/chat/chat.scss');
        class Chat extends block_1.Block {
          constructor(props) {
            super(props);
          }
          init() {
            ChatsController_1.default.fetchChats();
            AuthController_1.default.fetchUser();
            this.children.sidebar = new sidebar_1.Sidebar({
              title: 'Профиль',
              img: lens_icon_svg_1.default,
            });
            this.children.mainChat = new main_chat_1.MainChat({});
            ChatsController_1.default.fetchChats().finally(() => {
              this.children.sidebar.setProps({});
            });
          }
          render() {
            return this.compile(chat_pug_1.default, this.props);
          }
        }
        exports.Chat = Chat;

        /***/
      },

    /***/ './src/views/profile/profile-update-info/profile-update-info.ts':
      /*!**********************************************************************!*\
  !*** ./src/views/profile/profile-update-info/profile-update-info.ts ***!
  \**********************************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.ProfileUpdateInfo = void 0;
        const block_1 = __webpack_require__(
          /*! ../../../utils/block/block */ './src/utils/block/block.ts',
        );
        const profile_input_mixin_1 = __webpack_require__(
          /*! ../../../components/inputs/profile-inputs/profile-input-mixin */ './src/components/inputs/profile-inputs/profile-input-mixin.ts',
        );
        const button_mixin_1 = __webpack_require__(
          /*! ../../../components/buttons/button-mixin */ './src/components/buttons/button-mixin.ts',
        );
        const validator_1 = __webpack_require__(
          /*! ../../../utils/validator/validator */ './src/utils/validator/validator.ts',
        );
        const serializer_1 = __webpack_require__(
          /*! ../../../utils/serializer/serializer */ './src/utils/serializer/serializer.ts',
        );
        const profile_update_info_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./profile-update-info.pug */ './src/views/profile/profile-update-info/profile-update-info.pug',
          ),
        );
        __webpack_require__(
          /*! ../../../components/profile-card/profile-card-mixin.scss */ './src/components/profile-card/profile-card-mixin.scss',
        );
        __webpack_require__(
          /*! ./profile-update-info.scss */ './src/views/profile/profile-update-info/profile-update-info.scss',
        );
        const store_1 = __importDefault(
          __webpack_require__(
            /*! ../../../store/store */ './src/store/store.ts',
          ),
        );
        const UserController_1 = __importDefault(
          __webpack_require__(
            /*! ../../../controllers/UserController */ './src/controllers/UserController.ts',
          ),
        );
        class ProfileUpdateInfo extends block_1.Block {
          constructor() {
            super({});
          }
          init() {
            this.children.email = new profile_input_mixin_1.ProfileCardInput({
              name: 'email',
              type: 'text',
              label: 'Почта',
              body: store_1.default.getState().user.data.email,
              is_input: true,
              error: 'Неверный формат',
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.login = new profile_input_mixin_1.ProfileCardInput({
              name: 'login',
              type: 'text',
              label: 'Логин',
              body: store_1.default.getState().user.data.login,
              is_input: true,
              error: 'Недостаточное количество символов или неверный формат',
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.firstName =
              new profile_input_mixin_1.ProfileCardInput({
                name: 'first_name',
                type: 'text',
                label: 'Имя',
                body: store_1.default.getState().user.data.first_name,
                is_input: true,
                error: 'Недостаточное количество символов или неверный формат',
                events: {
                  focusout: (event) => (0, validator_1.validateBlock)(event),
                  focusin: (event) => (0, validator_1.validateBlock)(event),
                },
              });
            this.children.secondName =
              new profile_input_mixin_1.ProfileCardInput({
                name: 'second_name',
                type: 'text',
                label: 'Фамилия',
                body: store_1.default.getState().user.data.second_name,
                error: 'Недостаточное количество символов или неверный формат',
                is_input: true,
                events: {
                  focusout: (event) => (0, validator_1.validateBlock)(event),
                  focusin: (event) => (0, validator_1.validateBlock)(event),
                },
              });
            this.children.displayName =
              new profile_input_mixin_1.ProfileCardInput({
                name: 'display_name',
                type: 'text',
                label: 'Имя в чате',
                body: store_1.default.getState().user.data.display_name,
                is_input: true,
                error: 'Недостаточное количество символов или неверный формат',
                events: {
                  focusout: (event) => (0, validator_1.validateBlock)(event),
                  focusin: (event) => (0, validator_1.validateBlock)(event),
                },
              });
            this.children.phone = new profile_input_mixin_1.ProfileCardInput({
              name: 'phone',
              type: 'text',
              label: 'Телефон',
              body: store_1.default.getState().user.data.phone,
              error: 'Недостаточное количество символов или неверный формат',
              is_input: true,
              events: {
                focusout: (event) => (0, validator_1.validateBlock)(event),
                focusin: (event) => (0, validator_1.validateBlock)(event),
              },
            });
            this.children.button = new button_mixin_1.Button({
              type: 'submit',
              btnClass: 'save-changes',
              content: 'Сохранить',
              events: {
                click: (e) => this.onSubmit(e),
              },
            });
          }
          onSubmit(e) {
            const fields = [
              'email',
              'login',
              'first_name',
              'second_name',
              'phone',
              'display_name',
            ];
            const dataForm = (0, serializer_1.serializer)(e, fields);
            UserController_1.default.profile(dataForm);
          }
          render() {
            return this.compile(profile_update_info_pug_1.default, this.props);
          }
        }
        exports.ProfileUpdateInfo = ProfileUpdateInfo;

        /***/
      },

    /***/ './src/views/profile/profile-update-password/profile-update-password.ts':
      /*!******************************************************************************!*\
  !*** ./src/views/profile/profile-update-password/profile-update-password.ts ***!
  \******************************************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.ProfileUpdatePassword = void 0;
        const block_1 = __webpack_require__(
          /*! ../../../utils/block/block */ './src/utils/block/block.ts',
        );
        const profile_input_mixin_1 = __webpack_require__(
          /*! ../../../components/inputs/profile-inputs/profile-input-mixin */ './src/components/inputs/profile-inputs/profile-input-mixin.ts',
        );
        const button_mixin_1 = __webpack_require__(
          /*! ../../../components/buttons/button-mixin */ './src/components/buttons/button-mixin.ts',
        );
        const validator_1 = __webpack_require__(
          /*! ../../../utils/validator/validator */ './src/utils/validator/validator.ts',
        );
        const serializer_1 = __webpack_require__(
          /*! ../../../utils/serializer/serializer */ './src/utils/serializer/serializer.ts',
        );
        const UserController_1 = __importDefault(
          __webpack_require__(
            /*! ../../../controllers/UserController */ './src/controllers/UserController.ts',
          ),
        );
        const profile_update_password_pug_1 = __importDefault(
          __webpack_require__(
            /*! ./profile-update-password.pug */ './src/views/profile/profile-update-password/profile-update-password.pug',
          ),
        );
        __webpack_require__(
          /*! ../../../components/profile-card/profile-card-mixin.scss */ './src/components/profile-card/profile-card-mixin.scss',
        );
        __webpack_require__(
          /*! ./profile-update-password.scss */ './src/views/profile/profile-update-password/profile-update-password.scss',
        );
        class ProfileUpdatePassword extends block_1.Block {
          constructor() {
            super({});
          }
          init() {
            this.children.oldPassword =
              new profile_input_mixin_1.ProfileCardInput({
                name: 'oldPassword',
                type: 'password',
                label: 'Старый пароль',
                error: 'Неверный паорль',
                is_input: true,
                events: {
                  focusout: (event) => (0, validator_1.validateBlock)(event),
                  focusin: (event) => (0, validator_1.validateBlock)(event),
                },
              });
            this.children.newPassword =
              new profile_input_mixin_1.ProfileCardInput({
                name: 'newPassword',
                type: 'password',
                error: 'Недостаточное количество символов',
                label: 'Новый пароль',
                is_input: true,
                events: {
                  focusout: (event) => (0, validator_1.validateBlock)(event),
                  focusin: (event) => (0, validator_1.validateBlock)(event),
                },
              });
            this.children.repeatPassword =
              new profile_input_mixin_1.ProfileCardInput({
                name: 'repeatPassword',
                type: 'password',
                label: 'Повтороите новый пароль',
                error: 'Пароли не совпадают',
                is_input: true,
                events: {
                  focusout: (event) => (0, validator_1.validateBlock)(event),
                  focusin: (event) => (0, validator_1.validateBlock)(event),
                },
              });
            this.children.button = new button_mixin_1.Button({
              type: 'submit',
              btnClass: 'save-changes-password',
              content: 'Сохранить',
              events: {
                click: (e) => this.onSubmit(e),
              },
            });
          }
          onSubmit(e) {
            const fields = ['oldPassword', 'newPassword'];
            (0, serializer_1.serializer)(e, fields);
            const dataForm = (0, serializer_1.serializer)(e, fields);
            UserController_1.default.password(dataForm);
          }
          render() {
            return this.compile(
              profile_update_password_pug_1.default,
              this.props,
            );
          }
        }
        exports.ProfileUpdatePassword = ProfileUpdatePassword;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/index.js':
      /*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/index.js ***!
  \**********************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        Object.defineProperty(exports, 'NIL', {
          enumerable: true,
          get: function get() {
            return _nil.default;
          },
        });
        Object.defineProperty(exports, 'parse', {
          enumerable: true,
          get: function get() {
            return _parse.default;
          },
        });
        Object.defineProperty(exports, 'stringify', {
          enumerable: true,
          get: function get() {
            return _stringify.default;
          },
        });
        Object.defineProperty(exports, 'v1', {
          enumerable: true,
          get: function get() {
            return _v.default;
          },
        });
        Object.defineProperty(exports, 'v3', {
          enumerable: true,
          get: function get() {
            return _v2.default;
          },
        });
        Object.defineProperty(exports, 'v4', {
          enumerable: true,
          get: function get() {
            return _v3.default;
          },
        });
        Object.defineProperty(exports, 'v5', {
          enumerable: true,
          get: function get() {
            return _v4.default;
          },
        });
        Object.defineProperty(exports, 'validate', {
          enumerable: true,
          get: function get() {
            return _validate.default;
          },
        });
        Object.defineProperty(exports, 'version', {
          enumerable: true,
          get: function get() {
            return _version.default;
          },
        });

        var _v = _interopRequireDefault(
          __webpack_require__(
            /*! ./v1.js */ './node_modules/uuid/dist/commonjs-browser/v1.js',
          ),
        );

        var _v2 = _interopRequireDefault(
          __webpack_require__(
            /*! ./v3.js */ './node_modules/uuid/dist/commonjs-browser/v3.js',
          ),
        );

        var _v3 = _interopRequireDefault(
          __webpack_require__(
            /*! ./v4.js */ './node_modules/uuid/dist/commonjs-browser/v4.js',
          ),
        );

        var _v4 = _interopRequireDefault(
          __webpack_require__(
            /*! ./v5.js */ './node_modules/uuid/dist/commonjs-browser/v5.js',
          ),
        );

        var _nil = _interopRequireDefault(
          __webpack_require__(
            /*! ./nil.js */ './node_modules/uuid/dist/commonjs-browser/nil.js',
          ),
        );

        var _version = _interopRequireDefault(
          __webpack_require__(
            /*! ./version.js */ './node_modules/uuid/dist/commonjs-browser/version.js',
          ),
        );

        var _validate = _interopRequireDefault(
          __webpack_require__(
            /*! ./validate.js */ './node_modules/uuid/dist/commonjs-browser/validate.js',
          ),
        );

        var _stringify = _interopRequireDefault(
          __webpack_require__(
            /*! ./stringify.js */ './node_modules/uuid/dist/commonjs-browser/stringify.js',
          ),
        );

        var _parse = _interopRequireDefault(
          __webpack_require__(
            /*! ./parse.js */ './node_modules/uuid/dist/commonjs-browser/parse.js',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/md5.js':
      /*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/md5.js ***!
  \********************************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;

        /*
         * Browser-compatible JavaScript MD5
         *
         * Modification of JavaScript MD5
         * https://github.com/blueimp/JavaScript-MD5
         *
         * Copyright 2011, Sebastian Tschan
         * https://blueimp.net
         *
         * Licensed under the MIT license:
         * https://opensource.org/licenses/MIT
         *
         * Based on
         * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
         * Digest Algorithm, as defined in RFC 1321.
         * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
         * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
         * Distributed under the BSD License
         * See http://pajhome.org.uk/crypt/md5 for more info.
         */
        function md5(bytes) {
          if (typeof bytes === 'string') {
            const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

            bytes = new Uint8Array(msg.length);

            for (let i = 0; i < msg.length; ++i) {
              bytes[i] = msg.charCodeAt(i);
            }
          }

          return md5ToHexEncodedArray(
            wordsToMd5(bytesToWords(bytes), bytes.length * 8),
          );
        }
        /*
         * Convert an array of little-endian words to an array of bytes
         */

        function md5ToHexEncodedArray(input) {
          const output = [];
          const length32 = input.length * 32;
          const hexTab = '0123456789abcdef';

          for (let i = 0; i < length32; i += 8) {
            const x = (input[i >> 5] >>> i % 32) & 0xff;
            const hex = parseInt(
              hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f),
              16,
            );
            output.push(hex);
          }

          return output;
        }
        /**
         * Calculate output length with padding and bit length
         */

        function getOutputLength(inputLength8) {
          return (((inputLength8 + 64) >>> 9) << 4) + 14 + 1;
        }
        /*
         * Calculate the MD5 of an array of little-endian words, and a bit length.
         */

        function wordsToMd5(x, len) {
          /* append padding */
          x[len >> 5] |= 0x80 << len % 32;
          x[getOutputLength(len) - 1] = len;
          let a = 1732584193;
          let b = -271733879;
          let c = -1732584194;
          let d = 271733878;

          for (let i = 0; i < x.length; i += 16) {
            const olda = a;
            const oldb = b;
            const oldc = c;
            const oldd = d;
            a = md5ff(a, b, c, d, x[i], 7, -680876936);
            d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5gg(b, c, d, a, x[i], 20, -373897302);
            a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5hh(d, a, b, c, x[i], 11, -358537222);
            c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5ii(a, b, c, d, x[i], 6, -198630844);
            d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safeAdd(a, olda);
            b = safeAdd(b, oldb);
            c = safeAdd(c, oldc);
            d = safeAdd(d, oldd);
          }

          return [a, b, c, d];
        }
        /*
         * Convert an array bytes to an array of little-endian words
         * Characters >255 have their high-byte silently ignored.
         */

        function bytesToWords(input) {
          if (input.length === 0) {
            return [];
          }

          const length8 = input.length * 8;
          const output = new Uint32Array(getOutputLength(length8));

          for (let i = 0; i < length8; i += 8) {
            output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
          }

          return output;
        }
        /*
         * Add integers, wrapping at 2^32. This uses 16-bit operations internally
         * to work around bugs in some JS interpreters.
         */

        function safeAdd(x, y) {
          const lsw = (x & 0xffff) + (y & 0xffff);
          const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
          return (msw << 16) | (lsw & 0xffff);
        }
        /*
         * Bitwise rotate a 32-bit number to the left.
         */

        function bitRotateLeft(num, cnt) {
          return (num << cnt) | (num >>> (32 - cnt));
        }
        /*
         * These functions implement the four basic operations the algorithm uses.
         */

        function md5cmn(q, a, b, x, s, t) {
          return safeAdd(
            bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s),
            b,
          );
        }

        function md5ff(a, b, c, d, x, s, t) {
          return md5cmn((b & c) | (~b & d), a, b, x, s, t);
        }

        function md5gg(a, b, c, d, x, s, t) {
          return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
        }

        function md5hh(a, b, c, d, x, s, t) {
          return md5cmn(b ^ c ^ d, a, b, x, s, t);
        }

        function md5ii(a, b, c, d, x, s, t) {
          return md5cmn(c ^ (b | ~d), a, b, x, s, t);
        }

        var _default = md5;
        exports['default'] = _default;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/native.js':
      /*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/native.js ***!
  \***********************************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;
        const randomUUID =
          typeof crypto !== 'undefined' &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto);
        var _default = {
          randomUUID,
        };
        exports['default'] = _default;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/nil.js':
      /*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/nil.js ***!
  \********************************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;
        var _default = '00000000-0000-0000-0000-000000000000';
        exports['default'] = _default;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/parse.js':
      /*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/parse.js ***!
  \**********************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;

        var _validate = _interopRequireDefault(
          __webpack_require__(
            /*! ./validate.js */ './node_modules/uuid/dist/commonjs-browser/validate.js',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function parse(uuid) {
          if (!(0, _validate.default)(uuid)) {
            throw TypeError('Invalid UUID');
          }

          let v;
          const arr = new Uint8Array(16); // Parse ########-....-....-....-............

          arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
          arr[1] = (v >>> 16) & 0xff;
          arr[2] = (v >>> 8) & 0xff;
          arr[3] = v & 0xff; // Parse ........-####-....-....-............

          arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
          arr[5] = v & 0xff; // Parse ........-....-####-....-............

          arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
          arr[7] = v & 0xff; // Parse ........-....-....-####-............

          arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
          arr[9] = v & 0xff; // Parse ........-....-....-....-############
          // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

          arr[10] =
            ((v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000) & 0xff;
          arr[11] = (v / 0x100000000) & 0xff;
          arr[12] = (v >>> 24) & 0xff;
          arr[13] = (v >>> 16) & 0xff;
          arr[14] = (v >>> 8) & 0xff;
          arr[15] = v & 0xff;
          return arr;
        }

        var _default = parse;
        exports['default'] = _default;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/regex.js':
      /*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/regex.js ***!
  \**********************************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;
        var _default =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        exports['default'] = _default;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/rng.js':
      /*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/rng.js ***!
  \********************************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = rng;
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

            if (!getRandomValues) {
              throw new Error(
                'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
              );
            }
          }

          return getRandomValues(rnds8);
        }

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/sha1.js':
      /*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/sha1.js ***!
  \*********************************************************/
      /***/ (__unused_webpack_module, exports) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;

        // Adapted from Chris Veness' SHA1 code at
        // http://www.movable-type.co.uk/scripts/sha1.html
        function f(s, x, y, z) {
          switch (s) {
            case 0:
              return (x & y) ^ (~x & z);

            case 1:
              return x ^ y ^ z;

            case 2:
              return (x & y) ^ (x & z) ^ (y & z);

            case 3:
              return x ^ y ^ z;
          }
        }

        function ROTL(x, n) {
          return (x << n) | (x >>> (32 - n));
        }

        function sha1(bytes) {
          const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
          const H = [
            0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
          ];

          if (typeof bytes === 'string') {
            const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

            bytes = [];

            for (let i = 0; i < msg.length; ++i) {
              bytes.push(msg.charCodeAt(i));
            }
          } else if (!Array.isArray(bytes)) {
            // Convert Array-like to Array
            bytes = Array.prototype.slice.call(bytes);
          }

          bytes.push(0x80);
          const l = bytes.length / 4 + 2;
          const N = Math.ceil(l / 16);
          const M = new Array(N);

          for (let i = 0; i < N; ++i) {
            const arr = new Uint32Array(16);

            for (let j = 0; j < 16; ++j) {
              arr[j] =
                (bytes[i * 64 + j * 4] << 24) |
                (bytes[i * 64 + j * 4 + 1] << 16) |
                (bytes[i * 64 + j * 4 + 2] << 8) |
                bytes[i * 64 + j * 4 + 3];
            }

            M[i] = arr;
          }

          M[N - 1][14] = ((bytes.length - 1) * 8) / Math.pow(2, 32);
          M[N - 1][14] = Math.floor(M[N - 1][14]);
          M[N - 1][15] = ((bytes.length - 1) * 8) & 0xffffffff;

          for (let i = 0; i < N; ++i) {
            const W = new Uint32Array(80);

            for (let t = 0; t < 16; ++t) {
              W[t] = M[i][t];
            }

            for (let t = 16; t < 80; ++t) {
              W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
            }

            let a = H[0];
            let b = H[1];
            let c = H[2];
            let d = H[3];
            let e = H[4];

            for (let t = 0; t < 80; ++t) {
              const s = Math.floor(t / 20);
              const T = (ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t]) >>> 0;
              e = d;
              d = c;
              c = ROTL(b, 30) >>> 0;
              b = a;
              a = T;
            }

            H[0] = (H[0] + a) >>> 0;
            H[1] = (H[1] + b) >>> 0;
            H[2] = (H[2] + c) >>> 0;
            H[3] = (H[3] + d) >>> 0;
            H[4] = (H[4] + e) >>> 0;
          }

          return [
            (H[0] >> 24) & 0xff,
            (H[0] >> 16) & 0xff,
            (H[0] >> 8) & 0xff,
            H[0] & 0xff,
            (H[1] >> 24) & 0xff,
            (H[1] >> 16) & 0xff,
            (H[1] >> 8) & 0xff,
            H[1] & 0xff,
            (H[2] >> 24) & 0xff,
            (H[2] >> 16) & 0xff,
            (H[2] >> 8) & 0xff,
            H[2] & 0xff,
            (H[3] >> 24) & 0xff,
            (H[3] >> 16) & 0xff,
            (H[3] >> 8) & 0xff,
            H[3] & 0xff,
            (H[4] >> 24) & 0xff,
            (H[4] >> 16) & 0xff,
            (H[4] >> 8) & 0xff,
            H[4] & 0xff,
          ];
        }

        var _default = sha1;
        exports['default'] = _default;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/stringify.js':
      /*!**************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/stringify.js ***!
  \**************************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;
        exports.unsafeStringify = unsafeStringify;

        var _validate = _interopRequireDefault(
          __webpack_require__(
            /*! ./validate.js */ './node_modules/uuid/dist/commonjs-browser/validate.js',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /**
         * Convert array of 16 byte values to UUID string format of the form:
         * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
         */
        const byteToHex = [];

        for (let i = 0; i < 256; ++i) {
          byteToHex.push((i + 0x100).toString(16).slice(1));
        }

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

          if (!(0, _validate.default)(uuid)) {
            throw TypeError('Stringified UUID is invalid');
          }

          return uuid;
        }

        var _default = stringify;
        exports['default'] = _default;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/v1.js':
      /*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v1.js ***!
  \*******************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;

        var _rng = _interopRequireDefault(
          __webpack_require__(
            /*! ./rng.js */ './node_modules/uuid/dist/commonjs-browser/rng.js',
          ),
        );

        var _stringify = __webpack_require__(
          /*! ./stringify.js */ './node_modules/uuid/dist/commonjs-browser/stringify.js',
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        // **`v1()` - Generate time-based UUID**
        //
        // Inspired by https://github.com/LiosK/UUID.js
        // and http://docs.python.org/library/uuid.html
        let _nodeId;

        let _clockseq; // Previous uuid creation time

        let _lastMSecs = 0;
        let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

        function v1(options, buf, offset) {
          let i = (buf && offset) || 0;
          const b = buf || new Array(16);
          options = options || {};
          let node = options.node || _nodeId;
          let clockseq =
            options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
          // specified.  We do this lazily to minimize issues related to insufficient
          // system entropy.  See #189

          if (node == null || clockseq == null) {
            const seedBytes = options.random || (options.rng || _rng.default)();

            if (node == null) {
              // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
              node = _nodeId = [
                seedBytes[0] | 0x01,
                seedBytes[1],
                seedBytes[2],
                seedBytes[3],
                seedBytes[4],
                seedBytes[5],
              ];
            }

            if (clockseq == null) {
              // Per 4.2.2, randomize (14 bit) clockseq
              clockseq = _clockseq =
                ((seedBytes[6] << 8) | seedBytes[7]) & 0x3fff;
            }
          } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
          // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
          // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
          // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.

          let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
          // cycle to simulate higher resolution clock

          let nsecs =
            options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

          const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

          if (dt < 0 && options.clockseq === undefined) {
            clockseq = (clockseq + 1) & 0x3fff;
          } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
          // time interval

          if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
            nsecs = 0;
          } // Per 4.2.1.2 Throw error if too many uuids are requested

          if (nsecs >= 10000) {
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          }

          _lastMSecs = msecs;
          _lastNSecs = nsecs;
          _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

          msecs += 12219292800000; // `time_low`

          const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
          b[i++] = (tl >>> 24) & 0xff;
          b[i++] = (tl >>> 16) & 0xff;
          b[i++] = (tl >>> 8) & 0xff;
          b[i++] = tl & 0xff; // `time_mid`

          const tmh = ((msecs / 0x100000000) * 10000) & 0xfffffff;
          b[i++] = (tmh >>> 8) & 0xff;
          b[i++] = tmh & 0xff; // `time_high_and_version`

          b[i++] = ((tmh >>> 24) & 0xf) | 0x10; // include version

          b[i++] = (tmh >>> 16) & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

          b[i++] = (clockseq >>> 8) | 0x80; // `clock_seq_low`

          b[i++] = clockseq & 0xff; // `node`

          for (let n = 0; n < 6; ++n) {
            b[i + n] = node[n];
          }

          return buf || (0, _stringify.unsafeStringify)(b);
        }

        var _default = v1;
        exports['default'] = _default;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/v3.js':
      /*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v3.js ***!
  \*******************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;

        var _v = _interopRequireDefault(
          __webpack_require__(
            /*! ./v35.js */ './node_modules/uuid/dist/commonjs-browser/v35.js',
          ),
        );

        var _md = _interopRequireDefault(
          __webpack_require__(
            /*! ./md5.js */ './node_modules/uuid/dist/commonjs-browser/md5.js',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        const v3 = (0, _v.default)('v3', 0x30, _md.default);
        var _default = v3;
        exports['default'] = _default;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/v35.js':
      /*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v35.js ***!
  \********************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.URL = exports.DNS = void 0;
        exports['default'] = v35;

        var _stringify = __webpack_require__(
          /*! ./stringify.js */ './node_modules/uuid/dist/commonjs-browser/stringify.js',
        );

        var _parse = _interopRequireDefault(
          __webpack_require__(
            /*! ./parse.js */ './node_modules/uuid/dist/commonjs-browser/parse.js',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function stringToBytes(str) {
          str = unescape(encodeURIComponent(str)); // UTF8 escape

          const bytes = [];

          for (let i = 0; i < str.length; ++i) {
            bytes.push(str.charCodeAt(i));
          }

          return bytes;
        }

        const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
        exports.DNS = DNS;
        const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
        exports.URL = URL;

        function v35(name, version, hashfunc) {
          function generateUUID(value, namespace, buf, offset) {
            var _namespace;

            if (typeof value === 'string') {
              value = stringToBytes(value);
            }

            if (typeof namespace === 'string') {
              namespace = (0, _parse.default)(namespace);
            }

            if (
              ((_namespace = namespace) === null || _namespace === void 0
                ? void 0
                : _namespace.length) !== 16
            ) {
              throw TypeError(
                'Namespace must be array-like (16 iterable integer values, 0-255)',
              );
            } // Compute hash of namespace and value, Per 4.3
            // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
            // hashfunc([...namespace, ... value])`

            let bytes = new Uint8Array(16 + value.length);
            bytes.set(namespace);
            bytes.set(value, namespace.length);
            bytes = hashfunc(bytes);
            bytes[6] = (bytes[6] & 0x0f) | version;
            bytes[8] = (bytes[8] & 0x3f) | 0x80;

            if (buf) {
              offset = offset || 0;

              for (let i = 0; i < 16; ++i) {
                buf[offset + i] = bytes[i];
              }

              return buf;
            }

            return (0, _stringify.unsafeStringify)(bytes);
          } // Function#name is not settable on some platforms (#270)

          try {
            generateUUID.name = name; // eslint-disable-next-line no-empty
          } catch (err) {} // For CommonJS default export support

          generateUUID.DNS = DNS;
          generateUUID.URL = URL;
          return generateUUID;
        }

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/v4.js':
      /*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v4.js ***!
  \*******************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;

        var _native = _interopRequireDefault(
          __webpack_require__(
            /*! ./native.js */ './node_modules/uuid/dist/commonjs-browser/native.js',
          ),
        );

        var _rng = _interopRequireDefault(
          __webpack_require__(
            /*! ./rng.js */ './node_modules/uuid/dist/commonjs-browser/rng.js',
          ),
        );

        var _stringify = __webpack_require__(
          /*! ./stringify.js */ './node_modules/uuid/dist/commonjs-browser/stringify.js',
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function v4(options, buf, offset) {
          if (_native.default.randomUUID && !buf && !options) {
            return _native.default.randomUUID();
          }

          options = options || {};

          const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

          rnds[6] = (rnds[6] & 0x0f) | 0x40;
          rnds[8] = (rnds[8] & 0x3f) | 0x80; // Copy bytes to buffer, if provided

          if (buf) {
            offset = offset || 0;

            for (let i = 0; i < 16; ++i) {
              buf[offset + i] = rnds[i];
            }

            return buf;
          }

          return (0, _stringify.unsafeStringify)(rnds);
        }

        var _default = v4;
        exports['default'] = _default;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/v5.js':
      /*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v5.js ***!
  \*******************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;

        var _v = _interopRequireDefault(
          __webpack_require__(
            /*! ./v35.js */ './node_modules/uuid/dist/commonjs-browser/v35.js',
          ),
        );

        var _sha = _interopRequireDefault(
          __webpack_require__(
            /*! ./sha1.js */ './node_modules/uuid/dist/commonjs-browser/sha1.js',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        const v5 = (0, _v.default)('v5', 0x50, _sha.default);
        var _default = v5;
        exports['default'] = _default;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/validate.js':
      /*!*************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/validate.js ***!
  \*************************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;

        var _regex = _interopRequireDefault(
          __webpack_require__(
            /*! ./regex.js */ './node_modules/uuid/dist/commonjs-browser/regex.js',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function validate(uuid) {
          return typeof uuid === 'string' && _regex.default.test(uuid);
        }

        var _default = validate;
        exports['default'] = _default;

        /***/
      },

    /***/ './node_modules/uuid/dist/commonjs-browser/version.js':
      /*!************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/version.js ***!
  \************************************************************/
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports['default'] = void 0;

        var _validate = _interopRequireDefault(
          __webpack_require__(
            /*! ./validate.js */ './node_modules/uuid/dist/commonjs-browser/validate.js',
          ),
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function version(uuid) {
          if (!(0, _validate.default)(uuid)) {
            throw TypeError('Invalid UUID');
          }

          return parseInt(uuid.slice(14, 15), 16);
        }

        var _default = version;
        exports['default'] = _default;

        /***/
      },

    /***/ './src/assets/icons/lens-icon.svg':
      /*!****************************************!*\
  !*** ./src/assets/icons/lens-icon.svg ***!
  \****************************************/
      /***/ (module) => {
        'use strict';
        module.exports =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxMyAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjU5MjM5IDguNDEzODJDNi4xNjA0NyA5Ljg0NTc0IDMuODM4ODYgOS44NDU3NCAyLjQwNjk0IDguNDEzODJDMC45NzUwMTcgNi45ODE5IDAuOTc1MDE3IDQuNjYwMyAyLjQwNjk0IDMuMjI4MzdDMy44Mzg4NiAxLjc5NjQ1IDYuMTYwNDcgMS43OTY0NSA3LjU5MjM5IDMuMjI4MzdDOS4wMjQzMSA0LjY2MDMgOS4wMjQzMSA2Ljk4MTkgNy41OTIzOSA4LjQxMzgyWk04LjAzMjc3IDkuNzk2NzhDNi4wNzI1NSAxMS4yOTYyIDMuMjU2OTYgMTEuMTQ5NSAxLjQ2NDEzIDkuMzU2NjNDLTAuNDg4NDkxIDcuNDA0MDEgLTAuNDg4NDkxIDQuMjM4MTkgMS40NjQxMyAyLjI4NTU2QzMuNDE2NzUgMC4zMzI5NDMgNi41ODI1OCAwLjMzMjk0MyA4LjUzNTIgMi4yODU1NkMxMC4zMjc5IDQuMDc4MzEgMTAuNDc0NyA2Ljg5MzczIDguOTc1NTUgOC44NTM5NEwxMi41NDIzIDEyLjQyMDZMMTEuNTk5NCAxMy4zNjM1TDguMDMyNzcgOS43OTY3OFoiIGZpbGw9IiM5OTk5OTkiLz4KPC9zdmc+Cg==';

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__('./src/index.ts');
  /******/
  /******/
})();