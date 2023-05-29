"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/ossaui/dist/index.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/ossaui/dist/index.esm.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OsButton": function() { return /* binding */ Button; },
/* harmony export */   "OsCountdown": function() { return /* binding */ CountDown; },
/* harmony export */   "OsIcon": function() { return /* binding */ Icon; },
/* harmony export */   "OsLoading": function() { return /* binding */ Loading; },
/* harmony export */   "OsStepper": function() { return /* binding */ Stepper; },
/* harmony export */   "OsSwitch": function() { return /* binding */ Index$a; }
/* harmony export */ });
/* unused harmony exports OsActionsheet, OsActionsheetItem, OsAnimate, OsBadge, OsCarousel, OsCheckbox, OsCheckboxOption, OsCol, OsDatePicker, OsImagePreview, OsInput, OsList, OsModal, OsNavBar, OsNoticeBar, OsPicker, OsRadio, OsRadioOption, OsRate, OsRow, OsSearch, OsSwipeCell, OsTabBar, OsTabs, OsTabsHeader, OsTabsHeaderItem, OsTabsPanel, OsTag, OsToast, OsUpload */
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["window"];
/* provided dependency */ var navigator = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["navigator"];
/* provided dependency */ var requestAnimationFrame = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["requestAnimationFrame"];
/* provided dependency */ var cancelAnimationFrame = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["cancelAnimationFrame"];




var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function require(path, base) {
      return commonjsRequire(path, base === undefined || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}
var classnames = createCommonjsModule(function (module) {
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
        var argType = (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arg);
        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === 'object') {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(' ');
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});

//
function getStyleObj$m(props) {
  var _styleObj = {};
  return _styleObj;
}
function getClassObject$w(props) {
  var _a;
  var type = props.type;
  var _type = "css-animate--".concat(handleType(type));
  var _animated = "css-animate--animated";
  var _classObject = (_a = {}, _a[_type] = type, _a[_animated] = "animated", _a);
  return _classObject;
}
function handleType(s) {
  if (s) {
    return s.replace(/([A-Z])/g, "-$1").toLowerCase();
  }
}
function onClick$a(e, props) {
  var _a;
  (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
}
function Index$d(props) {
  var rootClassName = "css-animate"; //组件
  var classObject = getClassObject$w(props); //组件修饰
  var styleObject = getStyleObj$m();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, props.className),
    style: styleObject,
    onClick: function onClick(e) {
      return onClick$a(e, props);
    }
  }, props.children);
}
Index$d.defaultProps = {
  type: "fadeIn"
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return _extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  _extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
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
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function getStyleObj$l(props) {
  var _styleObj = {};
  var color = props.color,
    size = props.size,
    type = props.type;
  if (color) {
    _styleObj["color"] = color;
  }
  if (size) {
    _styleObj["fontSize"] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(size);
  }
  //set 特殊颜色，不在css写死
  if (type === "home" || type === "subject" || type === "classify" || type === "cart" || type === "user") {
    _styleObj["color"] = "#666";
  } else if (type === "grade" || type === "add-photo" || type === "check") {
    _styleObj["color"] = "#ccc";
  } else if (type === "collect-selected") {
    _styleObj["color"] = "#f48f18";
  } else if (type === "grade-selected") {
    _styleObj["color"] = "#fab646";
  } else if (type === "record") {
    _styleObj["color"] = "#ff8462";
  }
  return _styleObj;
}
function getClassObject$v(props) {
  var _a;
  var type = props.type;
  var classObject = (_a = {}, _a["ossa-icon--".concat(type)] = type, _a);
  return classObject;
}
function onClick$9(e, props) {
  var _a;
  (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
}
function Icon(props) {
  var rootClassName = "ossa-icon"; //组件
  var classObject = getClassObject$v(props); //组件修饰
  var styleObject = Object.assign(getStyleObj$l(props), props.customStyle);
  var type = props.type,
    className = props.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, className),
    style: styleObject,
    onClick: function onClick(e) {
      return onClick$9(e, props);
    }
  }, type === "avatar" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  })), type === "delete-input" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  })), type === "cart" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path5'
  })), type === "cart-pressed" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path5'
  })), type === "check-irrevocable" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  })), type === "check-selected" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  })), type === "close-h5" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  })), type === "close-native-pressed" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path5'
  })), type === "close-native" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path5'
  })), type === "invisible" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path5'
  })), type === "like-selected" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  })), type === "sort-high" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  })), type === "sort-low" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  })), type === "subject-pressed" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  })), type === "subject" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  })), type === "voice" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  })), type === "voice-close" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  })), type === "upload-delete" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  })), type === "classify" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  })), type === "classify-pressed" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  })), type === "share-circle" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path5'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path6'
  })), type === "share-circle-pressed" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path5'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path6'
  })), type === "detail-cart-pressed" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path5'
  })), type === "detail-cart" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path5'
  })), type === "my-group-buying-select" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  })), type === "shopping-mall-select" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path5'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path6'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path7'
  })), type === "shopping-mall" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path1'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path2'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path3'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path4'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path5'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path6'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'path7'
  })));
}
Icon.defaultProps = {
  type: "",
  size: 40
};
Icon.options = {
  addGlobalClass: true
};

//组件属性
var TYPE_CLASS$1 = {
  default: "default",
  primary: "primary",
  special1: "special1",
  special2: "special2"
};
var SIZE_CLASS = {
  min: "min",
  small: "small",
  normal: "normal",
  large: "large",
  block: "block"
};
var initialActive$1 = false;
function getClassObject$u(props, active) {
  var _a;
  var _b = props.size,
    size = _b === void 0 ? "normal" : _b,
    _c = props.type,
    type = _c === void 0 ? "default" : _c,
    _d = props.disabled,
    disabled = _d === void 0 ? false : _d,
    _e = props.shape,
    shape = _e === void 0 ? "round" : _e;
  var _isDisabled = "ossa-button--is-disabled";
  var _buttonCircle = "ossa-button--circle";
  var _isActive = "ossa-button--is-active";
  var _buttonSize = "ossa-button--".concat(SIZE_CLASS[size]);
  var _buttonType = "ossa-button--".concat(TYPE_CLASS$1[type]);
  var _classObject = (_a = {}, _a[_buttonSize] = getSize(props, SIZE_CLASS[size]), _a[_isDisabled] = disabled, _a[_buttonType] = TYPE_CLASS$1[type], _a[_buttonCircle] = shape === "round", _a[_isActive] = active, _a);
  return _classObject;
}
function getStyleObj$k(props) {
  var type = props.type,
    color = props.color,
    bdColor = props.bdColor,
    bgColor = props.bgColor,
    startBgColor = props.startBgColor,
    endBgColor = props.endBgColor;
  var _styleObj = {};
  if (color) {
    _styleObj["color"] = color;
  }
  if (bdColor) {
    _styleObj["border-color"] = bdColor;
  }
  if (bgColor) {
    _styleObj["background"] = bgColor;
  }
  if (startBgColor && endBgColor && type === "primary") {
    _styleObj["background-image"] = "linear-gradient(225deg, ".concat(startBgColor, " 0%, ").concat(endBgColor, " 100%)");
  }
  return _styleObj;
}
function getSize(props, size) {
  var type = props.type;
  if (type === "special1" || type === "special2") {
    return "";
  }
  return size;
}
function onClick$8(e, props) {
  var _a;
  if (!props.disabled) {
    (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
  }
}
function _onTouchStart(props, setActive, active) {
  if (!props.disabled) {
    setActive(!active);
  }
}
function onTouchEnd$1(props, setActive, active) {
  if (!props.disabled) {
    setActive(!active);
  }
}
function Button(props) {
  var rootClassName = "";
  var _a = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialActive$1), 2),
    active = _a[0],
    setActive = _a[1];
  var classObject = getClassObject$u(props, active);
  var styleObject = Object.assign(getStyleObj$k(props), props.customStyle);
  var icon = props.icon,
    className = props.className,
    size = props.size;
  props.type;
  var otherProps = __rest(props, ["icon", "className", "size", "type"]);
  var iconComponent = icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    type: icon,
    customStyle: {
      color: "inherit",
      marginRight: size === "block" || size === "large" ? _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(16) : _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(4)
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Button, _assign({}, otherProps, {
    className: classnames("ossa-button", "ossa-button2", rootClassName, classObject, className),
    style: styleObject,
    onClick: function onClick(e) {
      return onClick$8(e, props);
    },
    onTouchStart: function onTouchStart() {
      return _onTouchStart(props, setActive, active);
    },
    onTouchEnd: function onTouchEnd() {
      return onTouchEnd$1(props, setActive, active);
    }
  }), iconComponent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-button__text'
  }, props.children));
}
Button.defaultProps = {
  type: "default",
  size: "normal",
  disabled: false,
  circle: true,
  shape: "square"
};
Button.options = {
  addGlobalClass: true
};

// 组件属性
var TYPE_CLASS = {
  dot: "dot",
  info: "info",
  text: "text",
  list: "list"
};
/**
 *  get or set start
 *
 */
function getClassObjectRoot(props) {
  var _a;
  var _b = props.type,
    type = _b === void 0 ? "dot" : _b;
  var classObject = (_a = {}, _a["ossa-badge--".concat(TYPE_CLASS[type])] = TYPE_CLASS[type], _a);
  return classObject;
}
function getClassObjectChild(props) {
  var _a;
  var _b = props.type,
    type = _b === void 0 ? "dot" : _b,
    _c = props.info,
    info = _c === void 0 ? "0" : _c;
  var classObject = (_a = {}, _a["ossa-badge__info--".concat(TYPE_CLASS[type])] = type, _a["ossa-ph-badge--is-widthAuto"] = info.length > 1 || info > 9, _a);
  return classObject;
}
/**
 * 判断当前类型是否为无内容类型
 */
function isEmptyType(type) {
  return type === "dot" || type === "text" || type === "list";
}
/**
 * 获取徽标中显示的实际内容
 * @param {OsBadgeProps} props
 * @returns
 */
function getInfo(props) {
  var _info = "0";
  var type = props.type,
    _a = props.max,
    max = _a === void 0 ? 99 : _a,
    _b = props.info,
    info = _b === void 0 ? 0 : _b;
  if (isEmptyType(type)) {
    return "";
  } else if (max) {
    _info = String(info > max ? max + "+" : info);
  } else {
    _info = String(info);
  }
  return _info;
}
/**
 *  事件 start
 *
 */
function onClick$7(props, e) {
  var _a;
  (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
}
function Badge(props) {
  /**
   *  渲染 start
   *
   */
  var rootClassName = "ossa-badge";
  var classObjectRoot = getClassObjectRoot(props);
  var classObjectChild = getClassObjectChild(props);
  var info = getInfo(props);
  var _a = props.type,
    type = _a === void 0 ? 'dot' : _a;
  // 当未传 info 或 info 值为 '0' 或 0 时应该隐藏角标
  var mergedShow = props.isShow && (isEmptyType(type) || !!info && info !== "0");
  var style = props.customStyle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObjectRoot, props.className),
    onClick: onClick$7.bind(this, props),
    style: style
  }, props.children, mergedShow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(classObjectChild)
  }, info));
}
Badge.defaultProps = {
  isShow: true,
  type: 'dot'
};
Badge.options = {
  addGlobalClass: true
};
function getStyleObj$j(props) {
  var _a = props.type,
    type = _a === void 0 ? "" : _a,
    _b = props.color,
    color = _b === void 0 ? "normal" : _b,
    bgColor = props.bgColor,
    startBgColor = props.startBgColor,
    endBgColor = props.endBgColor;
  var _styleObj = {};
  if (TagColor[color] === undefined) {
    if (type === "primary") {
      _styleObj["borderColor"] = color;
      _styleObj["backgroundColor"] = color;
    } else {
      _styleObj["color"] = color;
      _styleObj["borderColor"] = color;
    }
  }
  if (bgColor) {
    _styleObj["background"] = bgColor;
  }
  if (startBgColor && endBgColor) {
    _styleObj["background-image"] = "linear-gradient(225deg, ".concat(startBgColor, " 0%, ").concat(endBgColor, " 100%)");
  }
  _styleObj = _assign(_assign({}, _styleObj), props.customStyle);
  return _styleObj;
}
function getClassObject$t(props) {
  var _a;
  var _b = props.type,
    type = _b === void 0 ? "radius" : _b,
    _c = props.color,
    color = _c === void 0 ? "normal" : _c,
    bgColor = props.bgColor,
    startBgColor = props.startBgColor,
    endBgColor = props.endBgColor;
  var classObject = (_a = {}, _a["ossa-tag--type-".concat(type)] = TagType[type], _a["ossa-tag--color-".concat(color)] = TagColor[color], _a["ossa-tag--border-none"] = bgColor || startBgColor || endBgColor, _a);
  return classObject;
}
function Tag(props) {
  var className = props.className,
    customStyle = props.customStyle;
  var rootClassName = "ossa-tag"; //组件
  var classObject = getClassObject$t(props); //组件修饰
  var styleObject = Object.assign(getStyleObj$j(props), customStyle);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, className),
    style: styleObject,
    onClick: function onClick(e) {
      var _a;
      (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
  }, props.type === "radius" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-border',
    style: {
      borderColor: props.color ? props.color : "#B4B4B4"
    }
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-tag__title'
  }, props.children), props.showArrow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    className: 'ossa-tag--arrow',
    type: 'arrows',
    color: 'inherit',
    size: 18
  }));
}
Tag.defaultProps = {
  type: "radius"
};
Tag.options = {
  addGlobalClass: true
};
var TagType = {
  primary: "primary",
  radius: "radius"
};
var TagColor = {
  normal: "normal",
  warning: "warning",
  error: "error"
};
var cache = new Set();
/**
 * 当使用了了过期属性时显示警告
 * @param moduleName 模块名称
 * @param newPropName 新的属性名
 * @param oldPropName 旧的属性名
 */
function warnDeprecatedProp(moduleName, newPropName, oldPropName) {
  var msg = "\u5728 ".concat(moduleName, " \u7EC4\u4EF6\u5F53\u4E2D\u7684 '").concat(oldPropName, "' \u5C5E\u6027\u5C06\u5728\u672A\u6765\u7684\u7248\u672C\u4E2D\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 '").concat(newPropName, "' \u4EE3\u66FF!");
  if (cache.has(msg)) return;
  cache.add(msg);
  console.warn("%c\uD83D\uDEA8 ".concat(msg), 'font-weight: 800;');
}
/**
 * 安全地使用过期属性
 * @param newProp 新属性值
 * @param oldProp 旧属性值
 * @param waringInfo 当用户传入了过期的属性值时，如果如果传入了相关警告信息，将会自动在开发时显示警告
 * @returns
 */
function deprecatedProp(newProp, oldProp, waringInfo, defaultVal) {
  var _a;
  if (typeof oldProp !== 'undefined' && waringInfo && waringInfo.oldPropName && "development" === "development") {
    warnDeprecatedProp(waringInfo.moduleName, waringInfo.newPropName, waringInfo.oldPropName);
  }
  return (_a = newProp !== null && newProp !== void 0 ? newProp : oldProp) !== null && _a !== void 0 ? _a : defaultVal;
}

// function getStyleObj(props: Props) {
//   let _styleObj = {}
//   return _styleObj;
// }
function getClassObject$s(props) {
  var _a;
  var classObject = (_a = {}, _a["ossa-radio__option--disabled"] = props.isDisabled, _a["ossa-radio__option--unexec"] = props.isReadonly, _a["ossa-radio__option--custom-label"] = props.isCustom, _a["ossa-radio__option--dir-".concat(props.type)] = true, _a);
  return classObject;
}
function RadioOption(props) {
  var rootClassName = "ossa-radio__option"; //组件
  var classObject = getClassObject$s(props); //组件修饰
  //const styleObject = getStyleObj(props);
  var unClickable = function unClickable(optionProps) {
    var mergedDisabled = deprecatedProp(optionProps.disabled, optionProps.isDisabled, {
      newPropName: "disabled",
      oldPropName: "isDisabled",
      moduleName: "Radio"
    });
    var mergedReadonly = deprecatedProp(optionProps.readonly, optionProps.isReadonly, {
      newPropName: "readonly",
      oldPropName: "isReadonly",
      moduleName: "Radio"
    });
    return mergedDisabled || mergedReadonly;
  };
  var mergedReadonly = deprecatedProp(props.readonly, props.isReadonly, {
    newPropName: "readonly",
    oldPropName: "isReadonly",
    moduleName: "Radio"
  });
  var onClickOption = function onClickOption(optionProps) {
    var _a;
    if (unClickable(optionProps)) return;
    (_a = optionProps.onClick) === null || _a === void 0 ? void 0 : _a.call(optionProps, optionProps.optionValue);
  };
  var iconType = "check";
  if (props.value === props.optionValue) {
    if (mergedReadonly) {
      iconType = "check-irrevocable";
    } else if (props.value === props.optionValue) {
      iconType = "check-selected";
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames([rootClassName, "ossa-radio-option-root-class", classObject, props.className]),
    onClick: function onClick() {
      return onClickOption(props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    type: iconType,
    size: 36
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("ossa-radio__option-label")
  }, props.children));
}
RadioOption.defaultProps = {
  type: "column"
};
RadioOption.options = {
  addGlobalClass: true
};
function getStyleObj$i(props) {
  var _styleObj = {};
  return _styleObj;
}
function getClassObject$r(props) {
  var _a;
  var classObject = (_a = {}, _a["ossa-radio--dir-".concat(props.type)] = true, _a);
  return classObject;
}
function getCommonChildProps(props) {
  var childProps = {};
  ["value", "disabled", "readonly", "isDisabled", "isReadonly"].forEach(function (key) {
    if (props[key] !== undefined) {
      childProps[key] = props[key];
    }
  });
  return childProps;
}
function Index$c(props) {
  var rootClassName = "ossa-radio"; //组件
  var classObject = getClassObject$r(props); //组件修饰
  var styleObject = getStyleObj$i();
  var coommonChildProps = getCommonChildProps(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, "ossa-radio-root-class", classObject, props.className),
    style: styleObject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("ossa-radio__options", props.type === "row" ? "ossa-radio__options--row" : "")
  }, react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(props.children, function (child) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(child) && child.type === RadioOption ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(child.type, _assign(_assign(_assign({}, child.props), coommonChildProps), {
      onClick: function onClick(v) {
        var _a;
        var onClick = child.props.onClick;
        onClick === null || onClick === void 0 ? void 0 : onClick(v);
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, v);
      }
    })) : child;
  })));
}
Index$c.defaultProps = {
  type: "column"
};
Index$c.options = {
  addGlobalClass: true
};
function getStyleObj$h(props) {
  var _styleObj = {};
  return _styleObj;
}
function getClassObject$q(props) {
  var classObject = {};
  return classObject;
}
function Index$b(props) {
  var className = props.className,
    customStyle = props.customStyle;
  var rootClassName = "ossa-checkbox"; //组件
  var classObject = getClassObject$q(); //组件修饰
  var styleObject = Object.assign(getStyleObj$h(), customStyle);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, className),
    style: styleObject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-checkbox__options'
  }, props.children));
}
Index$b.options = {
  addGlobalClass: true
};
function getStyleObj$g(props) {
  var _styleObj = {};
  return _styleObj;
}
var mergeDisabled$2 = function mergeDisabled$2(optionProps) {
  return deprecatedProp(optionProps.disabled, optionProps.isDisabled, {
    newPropName: "disabled",
    oldPropName: "isDisabled",
    moduleName: "Checkbox"
  });
};
function getClassObject$p(props) {
  var _a;
  var classObject = (_a = {}, _a["ossa-checkbox__option--disabled"] = mergeDisabled$2(props), _a["ossa-checkbox__option--custom-label"] = typeof props.children !== "string", _a);
  return classObject;
}
function CheckboxOption(props) {
  var className = props.className,
    customStyle = props.customStyle;
  var rootClassName = "ossa-checkbox__option"; //组件
  var classObject = getClassObject$p(props); //组件修饰
  var styleObject = Object.assign(getStyleObj$g(), customStyle);
  var _a = props.value,
    value = _a === void 0 ? [] : _a;
  var mergedDisabled = mergeDisabled$2(props);
  var onClickOption = function onClickOption(optionProps) {
    if (mergeDisabled$2(optionProps)) return;
    var newValues = value.slice(0);
    if (value.includes(optionProps.optionValue)) {
      newValues = value.filter(function (v) {
        return v !== optionProps.optionValue;
      });
    } else {
      newValues.push(optionProps.optionValue);
    }
    optionProps.onClick(newValues, optionProps.optionValue);
  };
  var iconType = "choose";
  var color;
  if (mergedDisabled) {
    iconType = "choose-disable";
  } else if (value.includes(props.optionValue)) {
    iconType = "choose-selected";
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, className),
    style: styleObject,
    onClick: function onClick() {
      return onClickOption(props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    type: iconType,
    color: color,
    size: 36
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("ossa-checkbox__option-label")
  }, props.children));
}
CheckboxOption.options = {
  addGlobalClass: true
};
function getStyleObj$f(props) {
  var _styleObj = {};
  return _styleObj;
}
function getClassObject$o(props) {
  var _a;
  var type = props.type,
    showSplitLine = props.showSplitLine;
  var classObject = (_a = {}, _a["ossa-navbar--".concat(type)] = type, _a["ossa-navbar--show-split-line"] = showSplitLine, _a);
  return classObject;
}
function onLeftIconClick(props, item) {
  var _a;
  (_a = props.onLeftIconClick) === null || _a === void 0 ? void 0 : _a.call(props, item);
}
function onLeftTextClick(props, id) {
  var _a;
  (_a = props.onLeftTextClick) === null || _a === void 0 ? void 0 : _a.call(props, id);
}
function onRightIconClick(props, item) {
  var _a;
  (_a = props.onRightIconClick) === null || _a === void 0 ? void 0 : _a.call(props, item);
}
function onRightTextClick(props, id) {
  var _a;
  (_a = props.onRightTextClick) === null || _a === void 0 ? void 0 : _a.call(props, id);
}
var NavBar = /** @class */function (_super) {
  __extends(NavBar, _super);
  function NavBar(props) {
    return _super.call(this, props) || this;
  }
  NavBar.prototype.renderSideContent = function (props, whichSide) {
    if (whichSide === void 0) {
      whichSide = "left";
    }
    var type = props.type,
      iconColor = props.iconColor,
      leftIcons = props.leftIcons,
      leftTexts = props.leftTexts,
      leftSlot = props.leftSlot,
      rightIcons = props.rightIcons,
      rightTexts = props.rightTexts,
      rightSlot = props.rightSlot;
    var icon = {
      left: leftIcons,
      right: rightIcons
    };
    var text = {
      left: leftTexts,
      right: rightTexts
    };
    var slot = {
      left: leftSlot,
      right: rightSlot
    };
    var iconHandler = {
      left: onLeftIconClick,
      right: onRightIconClick
    };
    var textHandler = {
      left: onLeftTextClick,
      right: onRightTextClick
    };
    if (type !== "custom" && slot[whichSide]) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "ossa-navbar--".concat(whichSide)
      }, slot[whichSide]);
    }
    if (type !== "custom") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "ossa-navbar--".concat(whichSide)
      }, icon[whichSide] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "ossa-navbar__".concat(whichSide, "Icons")
      }, icon[whichSide].map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
          type: item,
          color: iconColor,
          key: item,
          size: 40,
          customStyle: {
            verticalAlign: "top"
          },
          onClick: function onClick() {
            return iconHandler[whichSide](props, item);
          }
        });
      })), text[whichSide] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "ossa-navbar__".concat(whichSide, "Txts")
      }, text[whichSide].map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "ossa-navbar__".concat(whichSide, "Txt"),
          key: item.id,
          onClick: function onClick() {
            return textHandler[whichSide](props, item.id);
          }
        }, item.text);
      })));
    }
  };
  NavBar.prototype.render = function () {
    var props = this.props;
    var rootClassName = "ossa-navbar"; //组件
    var classObject = getClassObject$o(props); //组件修饰
    var styleObject = Object.assign(getStyleObj$f(), props.customStyle);
    var type = props.type,
      title = props.title,
      middleSlot = props.middleSlot;
    var mergedTitle = deprecatedProp(title, middleSlot, {
      newPropName: "title",
      oldPropName: "middleSlot",
      moduleName: "NavBar"
    });
    var isSimpleTitle = typeof mergedTitle === "string";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: classnames(rootClassName, classObject, props.className),
      style: styleObject
    }, this.renderSideContent(props, "left"), type !== "2column" && type !== "custom" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-navbar--middle'
    }, isSimpleTitle ? title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-navbar__title'
    }, title) : title), this.renderSideContent(props, "right"), type === "custom" && props.children);
  };
  NavBar.options = {
    addGlobalClass: true
  };
  NavBar.defaultProps = {
    type: "3column",
    showSplitLine: true,
    title: "",
    iconColor: ""
  };
  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
function getItemStyleObj(props, index, current) {
  var _styleObj = {};
  var activeColor = props.activeColor,
    defaultColor = props.defaultColor;
  if (index === current) {
    _styleObj["color"] = activeColor;
  } else {
    _styleObj["color"] = defaultColor;
  }
  return _styleObj;
}
function getClassObject$n(props) {
  var _a;
  var isfixedBt = props.isfixedBt;
  var _classObject = (_a = {}, _a["ossa-tabbar--is-fixedBt"] = isfixedBt, _a);
  return _classObject;
}
function getTextStyleObj(props) {
  var space = props.space;
  var _styleObj = {};
  if (space) {
    _styleObj["marginTop"] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(space) + "px";
  }
  return _styleObj;
}
function onClick$6(props, item, index) {
  var _a;
  (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, item, index);
}
function TabBar(props) {
  var rootClassName = "ossa-tabbar"; //组件
  var classObject = getClassObject$n(props); //组件修饰
  var textStyle = getTextStyleObj(props);
  var styleObject = props.customStyle,
    tabsArr = props.tabsArr,
    current = props.value,
    activeTabIdx = props.activeTabIdx;
  var mergedActiveTabIdx = deprecatedProp(activeTabIdx, current, {
    newPropName: "activeTabIdx",
    oldPropName: "value",
    moduleName: "TabBar"
  }, 0) || 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, props.className),
    style: styleObject
  }, tabsArr.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-tabbar__item',
      key: index,
      style: getItemStyleObj(props, index, mergedActiveTabIdx),
      onClick: function onClick() {
        return onClick$6(props, item, index);
      }
    }, item.useCustomIcon ? index === mergedActiveTabIdx ? item.selectedIcon : item.icon : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
      size: 40,
      type: index === mergedActiveTabIdx ? item.selectedIcon : item.icon,
      color: 'inherit'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
      className: 'ossa-tabbar__txt',
      style: textStyle
    }, item.text));
  }));
}
TabBar.defaultProps = {
  isfixedBt: false,
  tabsArr: [],
  activeColor: "#DD1A21",
  defaultColor: "#7f7f7f",
  space: 0
};
TabBar.options = {
  addGlobalClass: true
};
var colorDisabled = "#f4f4f4";
var mergeDisabled$1 = function mergeDisabled$1(props) {
  return deprecatedProp(props.disabled, props.isDisabled, {
    newPropName: "disabled",
    oldPropName: "isDisabled",
    moduleName: "Switch"
  });
};
var mergeChecked = function mergeChecked(props) {
  return deprecatedProp(props.checked, props.isChecked, {
    newPropName: "checked",
    oldPropName: "isChecked",
    moduleName: "Switch"
  });
};
function getStyleObj$e(props) {
  var _styleObj = {};
  var mergedDisabled = mergeDisabled$1(props);
  var mergedChecked = mergeChecked(props);
  if (!mergedDisabled && mergedChecked && props.onColor) {
    _styleObj["backgroundColor"] = props.onColor;
    _styleObj["borderColor"] = props.onColor;
  }
  if (mergedDisabled) {
    _styleObj["backgroundColor"] = colorDisabled;
    _styleObj["borderColor"] = colorDisabled;
  }
  return _styleObj;
}
function getBgOffStyleObj(props) {
  var mergedDisabled = mergeDisabled$1(props);
  var _styleObj = {};
  if (props.offColor) {
    _styleObj["backgroundColor"] = props.offColor;
    _styleObj["borderColor"] = props.offColor;
  }
  if (mergedDisabled) {
    _styleObj["backgroundColor"] = colorDisabled;
    _styleObj["borderColor"] = colorDisabled;
  }
  return _styleObj;
}
function getNodeObj(props) {
  var _styleObj = {};
  if (props.nodeColor) {
    _styleObj["backgroundColor"] = props.nodeColor;
    _styleObj["borderColor"] = props.nodeColor;
  }
  return _styleObj;
}
function getClassObject$m(props) {
  var _a;
  var mergedDisabled = mergeDisabled$1(props);
  var mergedChecked = mergeChecked(props);
  var classObject = (_a = {}, _a["ossa-switch--checked"] = mergedChecked, _a["ossa-switch--disabled"] = mergedDisabled, _a);
  return classObject;
}
function Index$a(props) {
  var className = props.className,
    customStyle = props.customStyle;
  var rootClassName = "ossa-switch"; //组件
  var classObject = getClassObject$m(props); //组件修饰
  var styleObject = Object.assign(getStyleObj$e(props), customStyle);
  var styleBgOff = getBgOffStyleObj(props);
  var styleNode = getNodeObj(props);
  var mergedDisabled = mergeDisabled$1(props);
  var mergedChecked = mergeChecked(props);
  var onClick = function onClick(e) {
    if (mergedDisabled) {
      return;
    }
    props.onChange(!mergedChecked);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, className),
    style: styleObject,
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-switch__bg-off',
    style: styleBgOff
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-switch__node',
    style: styleNode
  }));
}
Index$a.options = {
  addGlobalClass: true
};
function isAndroid() {
  return /(android)/i.test(navigator.userAgent);
}
function getClassObject$l(props) {
  var _a;
  var classObject = (_a = {}, _a["ossa-input--type-".concat(props.type)] = true, _a["ossa-input--underline"] = props.showSplitLine && props.type !== "bankcard", _a["ossa-input--disabled"] = props.isDisabled, _a);
  return classObject;
}
var _onInput = function onInput(props, e) {
  var _a;
  var value = e.detail.value;
  if (props.type === "bankcard") {
    value = value.replace(/(\s)/g, "");
  }
  (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, value);
};
var onClickDeleteIcon = function onClickDeleteIcon(props) {
  var _a;
  (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, "");
};
function OsInput(props) {
  var _a, _b, _c;
  var _d, _e;
  var rootClassName = ["ossa-input"]; //组件
  var classObject = getClassObject$l(props); //组件修饰
  var _f = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2),
    showPassword = _f[0],
    setShowPassword = _f[1];
  var value = props.value || "";
  var iptType = "text";
  if (props.type === "number" || props.type === "bankcard") {
    iptType = "digit";
  }
  var mergedDisabled = deprecatedProp(props.disabled, props.isDisabled, {
    newPropName: "disabled",
    oldPropName: "isDisabled",
    moduleName: "Input"
  }, false);
  var mergedReadonly = deprecatedProp(props.readonly, props.isReadonly, {
    newPropName: "readonly",
    oldPropName: "isReadonly",
    moduleName: "Input"
  }, false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _a;
    if (!(props.type === "textarea" && props.maxLength && props.maxLength > 0)) {
      return;
    }
    if (props.maxLength >= value.length) {
      return;
    }
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, value.slice(0, props.maxLength));
  }, [props.value, props.type, props.maxLength, props, value]);
  var onClickVisibleIcon = function onClickVisibleIcon() {
    setShowPassword(!showPassword);
  };
  var onFocus = function onFocus(e) {
    var _a;
    if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getEnv() === (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().ENV_TYPE.WEB) && isAndroid() && props.type === "password") {
      setTimeout(function () {
        e.currentTarget && e.currentTarget.scrollIntoView && e.currentTarget.scrollIntoView(true);
      }, 1);
    }
    (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };
  var onBlur = function onBlur(e) {
    var _a;
    (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };
  var showDelIcon = !props.disabledClear && !mergedDisabled && !mergedReadonly && props.value && props.type !== "textarea";
  var editable = !mergedReadonly && !mergedDisabled;
  var mergedShowCount = deprecatedProp(props.showCount, props.countDown, {
    newPropName: "showCount",
    oldPropName: "countDown",
    moduleName: "Input"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, props.className),
    style: props.customStyle
  }, props.label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: classnames((_a = {}, _a["ossa-input__label"] = true, _a))
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-input__input-wrapper'
  }, props.type === "textarea" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Textarea, _assign({}, ((_d = props === null || props === void 0 ? void 0 : props.taroProps) === null || _d === void 0 ? void 0 : _d.textareaProps) || {}, {
    value: value,
    className: classnames((_b = {}, _b["ossa-input__input--textarea"] = true, _b)),
    maxlength: props.maxLength,
    autoHeight: false,
    showConfirmBar: true,
    disabled: !editable,
    placeholder: props.placeholder,
    placeholderStyle: props.placeholderStyle,
    placeholderClass: props.placeholderClass,
    onInput: function onInput(e) {
      _onInput(props, e);
    },
    onFocus: onFocus,
    onBlur: onBlur
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, _assign({}, ((_e = props === null || props === void 0 ? void 0 : props.taroProps) === null || _e === void 0 ? void 0 : _e.inputProps) || {}, {
    value: value,
    type: iptType,
    password: !showPassword && props.type === "password",
    className: classnames((_c = {}, _c["ossa-input__input"] = true, _c["ossa-input__input--type-password"] = !showPassword && props.type === "password" && value.length, _c)),
    disabled: !editable,
    placeholder: props.placeholder,
    placeholderStyle: props.placeholderStyle,
    placeholderClass: props.placeholderClass,
    onInput: function onInput(e) {
      _onInput(props, e);
    },
    onFocus: onFocus,
    onBlur: onBlur
  })), showDelIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-input__del-ico'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    size: 28,
    type: 'delete-input',
    onClick: function onClick() {
      onClickDeleteIcon(props);
    }
  }))), props.type === "textarea" && mergedShowCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-input__count-down'
  }, Number(props.maxLength) - value.length), props.type === "password" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    className: 'ossa-input__visible-ico',
    customStyle: {
      marginLeft: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(16)
    },
    size: 40,
    type: showPassword ? "visible" : "invisible",
    onClick: function onClick() {
      onClickVisibleIcon();
    }
  }));
}
OsInput.defaultProps = {
  type: "text",
  placeholder: "",
  placeholderStyle: "",
  title: "",
  maxLength: 500,
  disabledClear: false,
  showSplitLine: true,
  value: ""
};
OsInput.options = {
  addGlobalClass: true
};
var initialActive = false;
function getStyleObj$d(props, active) {
  var _styleObj = {};
  var color = props.color,
    activeBgColor = props.activeBgColor,
    bgColor = props.bgColor;
  if (color) {
    _styleObj["color"] = color;
  }
  if (active) {
    _styleObj["background"] = activeBgColor;
  } else {
    _styleObj["background"] = bgColor;
  }
  return _styleObj;
}
function getColorStyleObject(props) {
  var descColor = props.descColor;
  var _styleObj = {};
  if (descColor) {
    _styleObj["color"] = descColor;
  }
  return _styleObj;
}
function getClassObject$k(props, active) {
  var _a;
  var type = props.type,
    subTitle = props.subTitle,
    rightIcon = props.rightIcon,
    leftIcon = props.leftIcon,
    desc = props.desc,
    showSplitLine = props.showSplitLine;
  var _classObject = (_a = {}, _a["ossa-list--".concat(type)] = type, _a["ossa-list--is-hasSubTitle"] = subTitle, _a["ossa-list--is-hasIcon"] = rightIcon, _a["ossa-list--is-hasLeftIcon"] = leftIcon, _a["ossa-list--is-hasDesc"] = desc, _a["ossa-list--is-active"] = active, _a["ossa-list--is-show-split-line"] = showSplitLine, _a);
  return _classObject;
}
function onClick$5(e, props) {
  var _a;
  (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
}
function onTouchstart(props, setActive, active) {
  setActive(true);
}
function _onTouchEnd(props, setActive, active) {
  setActive(false);
}
function List(props) {
  var rootClassName = "ossa-list"; //组件
  var _a = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialActive), 2),
    active = _a[0],
    setActive = _a[1];
  var classObject = getClassObject$k(props, active); //组件修饰
  var styleObject = Object.assign(getStyleObj$d(props, active), props.customStyle);
  var colorStyleObject = getColorStyleObject(props);
  var leftIcon = props.leftIcon,
    leftIconSize = props.leftIconSize,
    title = props.title,
    subTitle = props.subTitle,
    desc = props.desc,
    rightIcon = props.rightIcon,
    className = props.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, className),
    style: styleObject,
    onClick: function onClick(e) {
      return onClick$5(e, props);
    },
    onTouchStart: function onTouchStart() {
      return onTouchstart(props, setActive);
    },
    onTouchEnd: function onTouchEnd() {
      return _onTouchEnd(props, setActive);
    }
  }, leftIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-list__leftIcon'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    type: leftIcon,
    size: leftIconSize,
    customStyle: {
      verticalAlign: "top"
    }
  })), (title || subTitle) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-list__box'
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("ossa-list__title", "ossa-title-class")
  }, title), subTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("ossa-list__subTitle", "ossa-subtitle-class"),
    style: colorStyleObject
  }, subTitle)), props.children, desc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-list__desc',
    style: colorStyleObject
  }, desc), rightIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-list__rightIcon'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    size: 28,
    type: rightIcon,
    customStyle: {
      verticalAlign: "top"
    }
  })));
}
List.defaultProps = {
  showSplitLine: true,
  color: "",
  activeBgColor: "",
  bgColor: "",
  leftIconSize: 36
};
List.options = {
  addGlobalClass: true
};
List.externalClasses = ["title-class", "subtitle-class"];
function getStyleObj$c(props) {
  var _styleObj = {};
  return _styleObj;
}
function getClassObject$j(props) {
  var _a;
  var _classObject = {};
  var type = props.type,
    size = props.size;
  var mergedSize = deprecatedProp(size, type, {
    moduleName: "Rate",
    oldPropName: "type",
    newPropName: "size"
  }, "default");
  _classObject = (_a = {}, _a["ossa-rate--is-".concat(mergedSize)] = mergedSize, _a);
  return _classObject;
}
function getCounts(props, current) {
  var _a = props.options,
    options = _a === void 0 ? [] : _a;
  var _counts = [];
  for (var i = 0; i < options.length; i++) {
    _counts.push({
      value: i,
      selected: i <= current ? true : false,
      txt: options[i]
    });
  }
  return _counts;
}
function getResult(props, current) {
  var _a = props.options,
    options = _a === void 0 ? [] : _a;
  return options[current];
}
function onClick$4(props, item, index, setCurrent) {
  var onChange = props.onChange;
  setCurrent(index);
  onChange === null || onChange === void 0 ? void 0 : onChange(item);
}
function Rate(props) {
  var rootClassName = "ossa-rate"; //组件
  var classObject = getClassObject$j(props); //组件修饰
  var styleObject = Object.assign(getStyleObj$c(), props.customStyle);
  var _a = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value), 2),
    current = _a[0],
    setCurrent = _a[1];
  var counts = getCounts(props, current || 0);
  var result = getResult(props, current || 0);
  var type = props.type,
    size = props.size,
    title = props.title,
    icon = props.icon,
    selectedIcon = props.selectedIcon,
    color = props.color,
    selectedIconColor = props.selectedIconColor,
    className = props.className,
    isShowResult = props.isShowResult;
  var mergedSize = deprecatedProp(size, type, {
    moduleName: "Rate",
    oldPropName: "type",
    newPropName: "size"
  }, "default");
  var _size = mergedSize === "small" ? 24 : 48;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, className),
    style: styleObject
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'ossa-rate__title'
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-rate__list',
    style: {
      height: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(_size)
    }
  }, counts.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-rate__icon',
      key: item.value,
      onClick: function onClick() {
        onClick$4(props, item, index, setCurrent);
      },
      style: {
        width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(_size)
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
      size: _size,
      type: item.selected ? selectedIcon : icon,
      color: item.selected ? selectedIconColor : color,
      customStyle: {
        verticalAlign: "top"
      }
    }));
  })), isShowResult && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'ossa-rate__txt'
  }, result));
}
Rate.defaultProps = {
  selectedIcon: "grade-selected",
  icon: "grade",
  color: "#CCCCCC",
  selectedIconColor: "#FAB646",
  options: ["非常差", "差", "一般吧", "满意", "非常满意"],
  value: 0,
  isShowResult: true
};
Rate.options = {
  addGlobalClass: true
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = (typeof self === "undefined" ? "undefined" : (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;
var _Symbol = Symbol$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
var isArray_1 = isArray;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
    tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? _getRawTag(value) : _objectToString(value);
}
var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) == 'object';
}
var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
}
var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}
var toString_1 = toString;
var mergeReadonly = function mergeReadonly(optionProps) {
  return deprecatedProp(optionProps.readonly, optionProps.isReadonly, {
    newPropName: "readonly",
    oldPropName: "isReadonly",
    moduleName: "Stepper"
  }, false);
};
var mergeDisabled = function mergeDisabled(optionProps) {
  return deprecatedProp(optionProps.disabled, optionProps.isDisabled, {
    newPropName: "disabled",
    oldPropName: "isDisabled",
    moduleName: "Stepper"
  }, false);
};
// 实现两数相加并保留小数点后最短尾数
function addNum(num1, num2) {
  var sq1, sq2;
  try {
    sq1 = toString_1(num1).split(".")[1].length;
  } catch (e) {
    sq1 = 0;
  }
  try {
    sq2 = toString_1(num2).split(".")[1].length;
  } catch (e) {
    sq2 = 0;
  }
  var m = Math.pow(10, Math.max(sq1, sq2));
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
}
// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue(num) {
  if (num === "") return "0";
  var numStr = toString_1(num);
  if (numStr.indexOf("0") === 0 && numStr.indexOf(".") === -1) {
    // 处理01变成1,并且不处理1.
    return toString_1(parseFloat(num));
  }
  return toString_1(num);
}
function Stepper(props) {
  var _a, _b;
  var mergedDisabled = mergeDisabled(props);
  var mergedReadonly = mergeReadonly(props);
  function _onClick(clickType) {
    var _a, _b, _c, _d;
    var value = props.value,
      _e = props.min,
      min = _e === void 0 ? 1 : _e,
      _f = props.max,
      max = _f === void 0 ? 99 : _f,
      _g = props.step,
      step = _g === void 0 ? 1 : _g;
    var lowThanMin = clickType === "minus" && value <= min;
    var overThanMax = clickType === "plus" && value >= max;
    if (lowThanMin || overThanMax || mergedDisabled || mergedReadonly) {
      var deltaValue_1 = clickType === "minus" ? -step : step;
      var errorValue = addNum(value, deltaValue_1);
      if (mergedDisabled) {
        handleError({
          type: "DISABLED",
          errorValue: errorValue
        });
      } else {
        lowThanMin ? (_a = props.onDisabledSubtract) === null || _a === void 0 ? void 0 : _a.call(props, value) : (_b = props.onDisabledAdd) === null || _b === void 0 ? void 0 : _b.call(props, value);
        handleError({
          type: lowThanMin ? "LOW" : "OVER",
          errorValue: errorValue
        });
      }
      return;
    }
    var deltaValue = clickType === "minus" ? -step : step;
    var newValue = addNum(value, deltaValue);
    newValue = handleValue(newValue);
    props.onChange(newValue);
    if (clickType === "minus") {
      (_c = props.onSubtract) === null || _c === void 0 ? void 0 : _c.call(props, newValue);
    } else {
      (_d = props.onAdd) === null || _d === void 0 ? void 0 : _d.call(props, newValue);
    }
  }
  function handleValue(value) {
    var _a = props.max,
      max = _a === void 0 ? 99 : _a,
      _b = props.min,
      min = _b === void 0 ? 1 : _b;
    var resultValue = value === "" ? min : value;
    // 此处不能使用 Math.max，会是字符串变数字，并丢失 .
    if (resultValue > max) {
      resultValue = max;
      handleError({
        type: "OVER",
        errorValue: resultValue
      });
    }
    if (resultValue < min) {
      resultValue = min;
      handleError({
        type: "LOW",
        errorValue: resultValue
      });
    }
    resultValue = parseValue(resultValue);
    return resultValue;
  }
  function onInput(e) {
    var value = e.detail.value;
    if (mergedDisabled || mergedReadonly) return;
    // input时只做数字转换，且允许删空，改在blur时处理值
    var newValue = value === "" ? "" : parseValue(value);
    if (props.max && +newValue > props.max) {
      newValue = max;
    }
    newValue && newValue !== 0 && props.onChange(newValue);
    return newValue;
  }
  function onBlur(event) {
    var _a;
    var value = event.detail.value;
    var newValue = handleValue(value);
    value !== newValue && props.onChange(newValue);
    (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, event);
  }
  function handleError(errorValue) {
    if (!props.onErrorInput) {
      return;
    }
    props.onErrorInput(errorValue);
  }
  function getContentClassObject(stepperProps) {
    var _a;
    var _classObject = (_a = {}, _a["ossa-stepper__input--is-readonly"] = mergedReadonly, _a["ossa-stepper__input--is-disabled"] = mergedDisabled, _a);
    return _classObject;
  }
  var customStyle = props.customStyle,
    value = props.value,
    _c = props.min,
    min = _c === void 0 ? 1 : _c,
    _d = props.max,
    max = _d === void 0 ? 99 : _d;
  var inputValue = handleValue(value);
  var rootClassName = ["ossa-stepper", "ossa-stepper__bts stepper__minus", "ossa-stepper__content", "ossa-stepper__input", "ossa-stepper__bts stepper__plus"]; //组件
  var contentClassObject = getContentClassObject();
  var minusBtnCls = classnames("ossa-stepper__bts", "ossa-stepper__minus", (_a = {}, _a["ossa-stepper__bts--is-readonly"] = inputValue <= min || mergedDisabled || mergedReadonly, _a["ossa-stepper__bts--is-disabled"] = mergedDisabled, _a));
  var plusBtnCls = classnames("ossa-stepper__bts", "ossa-stepper__plus", (_b = {}, _b["ossa-stepper__bts--is-readonly"] = inputValue >= max || mergedReadonly || mergedDisabled, _b["ossa-stepper__bts--is-disabled"] = mergedDisabled, _b));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName[0], props.className),
    style: customStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: minusBtnCls,
    onClick: function onClick() {
      return _onClick("minus");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    type: inputValue <= min || mergedReadonly || mergedDisabled ? "subtract-disable" : "subtract",
    size: 18
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName[2], contentClassObject)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, {
    className: classnames(rootClassName[3]),
    value: inputValue,
    disabled: mergedDisabled || mergedReadonly,
    type: 'number',
    onInput: onInput,
    onBlur: onBlur
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: plusBtnCls,
    onClick: function onClick() {
      return _onClick("plus");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    type: inputValue >= max || mergedReadonly || mergedDisabled ? "add-disable" : "add",
    size: 18
  })));
}
Stepper.defaultProps = {
  max: 99,
  min: 1,
  step: 1,
  value: 1,
  customStyle: {}
};
Stepper.options = {
  addGlobalClass: true
};
function getStyleObj$b(props) {
  var size = props.size;
  var _styleObj = {};
  if (size) {
    _styleObj["width"] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(size);
    _styleObj["height"] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(size);
  }
  return _styleObj;
}
function getClassObject$i(props) {
  var classObject = {};
  return classObject;
}
function getRingStyle(props) {
  var color = props.color,
    size = props.size;
  var _styleObject = {
    border: color ? "1PX solid ".concat(color) : "",
    borderColor: color ? "".concat(color, " transparent transparent transparent") : "",
    width: size ? "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(size)) : "",
    height: size ? "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(size)) : ""
  };
  return _styleObject;
}
function Loading(props) {
  var className = props.className,
    customStyle = props.customStyle;
  var rootClassName = ["ossa-loading", "ossa-loading__ring"]; //组件
  var classObject = getClassObject$i(); //组件修饰
  var styleObject = Object.assign(getStyleObj$b(props), customStyle);
  var ringStyle = getRingStyle(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName[0], classObject, className),
    style: styleObject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName[1]),
    style: ringStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName[1]),
    style: ringStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName[1]),
    style: ringStyle
  }));
}
Loading.defaultProps = {
  size: 34,
  color: "#DD1A21"
};
Loading.options = {
  addGlobalClass: true
};
var tabsConfigContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var TabsConfigProvider = tabsConfigContext.Provider;
tabsConfigContext.Consumer;
function getClassObject$h(props) {
  var _a;
  var type = props.type;
  var _classObject = (_a = {}, _a["ossa-tabs--".concat(type)] = type, _a);
  return _classObject;
}
function Tabs(props) {
  var rootClassName = "ossa-tabs"; //组件
  var classObject = getClassObject$h(props);
  var styleObject = props.customStyle;
  //let lineStyle = null;
  var className = props.className,
    type = props.type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabsConfigProvider, {
    value: {
      type: props.type,
      size: props.size
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, className),
    style: styleObject
  }, props.renderHeader, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("ossa-tabs__body", "ossa-tabs--".concat(type, "__body"))
  }, props.children)));
}
Tabs.defaultProps = {
  type: "horizontal",
  size: "default",
  showSplitLine: false
};
Tabs.options = {
  addGlobalClass: true,
  styleIsolation: "apply-shared"
};
function getStyleObject$2(props) {
  var space = props.space,
    type = props.type;
  var _styleObject = {};
  if (space) {
    _styleObject["padding"] = "".concat(type === "vertical" ? _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(space) : 0, " ").concat(type === "horizontal" ? _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(space) : 0);
  }
  return _styleObject;
}
function getClassObject$g(props) {
  var _a;
  var showSplitLine = props.showSplitLine,
    scroll = props.scroll,
    type = props.type,
    size = props.size;
  var _classObject = (_a = {}, _a["ossa-tabs-header--".concat(type)] = size, _a["ossa-tabs-header--".concat(type, "--").concat(size)] = size, _a["ossa-tabs-header--show-split-line"] = showSplitLine, _a["ossa-tabs-header--is-scroll"] = scroll, _a);
  return _classObject;
}
function Index$9(props) {
  var className = props.className,
    customStyle = props.customStyle,
    bgColor = props.bgColor;
  var tabsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(tabsConfigContext);
  var classObject = getClassObject$g(_assign(_assign({}, props), tabsConfig));
  var styleObject = getStyleObject$2(_assign(_assign({}, props), tabsConfig));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("ossa-tabs-header", classObject, className),
    style: customStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("ossa-tabs-header__tab"),
    style: Object.assign({
      background: bgColor
    }, styleObject)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("ossa-tabs-header__overflow")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("ossa-tabs-header__scroll")
  }, props.children))));
}
Index$9.defaultProps = {
  type: "horizontal",
  size: "default",
  space: 0,
  scroll: false,
  bgColor: "#fafafa",
  showSplitLine: false
};
Index$9.options = {
  addGlobalClass: true,
  styleIsolation: "apply-shared"
};
function getStyleObject$1(props) {
  var index = props.index,
    current = props.current,
    selectedColor = props.selectedColor,
    color = props.color;
  var _styleObject = {};
  if (index === current) {
    _styleObject["color"] = selectedColor;
  } else {
    _styleObject["color"] = color;
  }
  return _styleObject;
}
function getClassObject$f(props, active) {
  var _a;
  var type = props.type,
    size = props.size;
  var _classObject = (_a = {}, _a["ossa-tabs-item--".concat(type)] = type, _a["ossa-tabs-item--".concat(type, "--").concat(size)] = true, _a["ossa-tabs-item--is-active"] = active, _a);
  return _classObject;
}
function getText(text) {
  if (text.length > 5) {
    return text.slice(0, 5) + "...";
  }
  return text;
}
function onClick$3(props) {
  var _a;
  var index = props.index;
  (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, index);
}
function Index$8(props) {
  var className = props.className,
    customStyle = props.customStyle,
    index = props.index,
    _a = props.current,
    current = _a === void 0 ? 0 : _a,
    _b = props.text,
    text = _b === void 0 ? "" : _b,
    custom = props.custom,
    selectedColor = props.selectedColor,
    icon = props.icon,
    selectedIcon = props.selectedIcon;
  var rootClassName = "ossa-tabs-item";
  var tabConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(tabsConfigContext);
  var styleObject = Object.assign(getStyleObject$1(props), customStyle);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, getClassObject$f(_assign(_assign({}, props), tabConfig), index === current), className),
    style: styleObject,
    onClick: function onClick() {
      return onClick$3(props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-tabs-item__underline',
    style: {
      borderBottomColor: current === index ? selectedColor : "transparent"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-tabs-item__texts'
  }, custom ? index === current ? props.renderSelectedCustom : props.renderCustom : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Block, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'ossa-tabs-item__text'
  }, getText(text)), icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    customStyle: {
      marginLeft: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(8),
      verticalAlign: "initial"
    },
    size: 26,
    color: 'inherit',
    type: index !== current ? icon : selectedIcon
  })))));
}
Index$8.defaultProps = {
  type: "horizontal",
  size: "default",
  color: "#333333",
  selectedColor: "#dd1a21",
  text: "",
  custom: false
};
Index$8.options = {
  addGlobalClass: true
};
function getStyleObj$a(props) {
  var _styleObj = {};
  return _styleObj;
}
function getClassObject$e(props) {
  var _a;
  var index = props.index,
    _b = props.current,
    current = _b === void 0 ? 0 : _b;
  var classObject = (_a = {}, _a["ossa-tabs-panel--active"] = index === current, _a);
  return classObject;
}
function Index$7(props) {
  var className = props.className,
    customStyle = props.customStyle;
  var rootClassName = "ossa-tabs-panel"; //组件
  var classObject = getClassObject$e(props); //组件修饰
  var styleObject = Object.assign(getStyleObj$a(), customStyle);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, className),
    style: styleObject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-tabs-panel__content'
  }, props.children));
}
Index$7.defaultProps = {
  current: 0,
  index: 0
};
Index$7.options = {
  addGlobalClass: true
};
function getStyleObj$9(props) {
  var color = props.color,
    bgColor = props.bgColor,
    _a = props.padding,
    padding = _a === void 0 ? 30 : _a;
  var _styleObj = {
    color: color,
    background: bgColor,
    paddingRight: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(padding),
    paddingLeft: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(padding)
  };
  return _styleObj;
}
function getClassObject$d(props) {
  var _a;
  var showSplitLine = props.showSplitLine;
  var _classObject = (_a = {}, _a["ossa-search--show-split-line"] = showSplitLine, _a);
  return _classObject;
}
function onClear(setCurrent, setFocus) {
  setFocus(false);
  setCurrent("");
}
function onCancel(setCurrent, setFocus) {
  setCurrent("");
  setFocus(false);
}
function onChange(e, props, setCurrent) {
  var _a;
  //alert(1);
  setCurrent(e.target.value);
  (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e, e.target.value);
}
function _onConfirm(e, props, current) {
  var _a;
  (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props, e, current);
}
function _onBlur(e, props) {
  var _a;
  (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
}
function _onFocus(e, props, setFocus) {
  var _a;
  setFocus(true);
  (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
}
function Index$6(props) {
  var rootClassName = "ossa-search"; //组件
  var classObject = getClassObject$d(props); //组件修饰
  var styleObject = Object.assign(getStyleObj$9(props), props.customStyle);
  var _a = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value), 2),
    _b = _a[0],
    current = _b === void 0 ? "" : _b,
    setCurrent = _a[1];
  var _c = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2),
    focus = _c[0],
    setFocus = _c[1];
  var color = props.color,
    placeholder = props.placeholder,
    className = props.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, className),
    style: styleObject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-search__wrap'
  }, focus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    type: 'search-little',
    customStyle: {
      marginLeft: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(20),
      marginRight: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(8),
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)"
    },
    size: 28
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-search__form',
    onClick: function onClick() {
      setFocus(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, _assign({}, props.taroProps || {}, {
    className: classnames("ossa-search__input"),
    type: 'text',
    focus: focus,
    confirmType: 'search',
    value: current,
    placeholder: focus ? placeholder : "",
    // onKeyup={(e)=>onChange(e, props, setCurrent)}
    onInput: function onInput(e) {
      return onChange(e, props, setCurrent);
    },
    onConfirm: function onConfirm(e) {
      return _onConfirm(e, props, current);
    },
    onBlur: function onBlur(e) {
      return _onBlur(e, props);
    },
    onFocus: function onFocus(e) {
      return _onFocus(e, props, setFocus);
    },
    style: {
      color: color
    },
    placeholderClass: 'ossa-search__input--placehoder-style'
  })), !current && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-search__placeholder',
    style: {
      textAlign: focus ? "left" : "center"
    }
  }, !focus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    type: 'search-little',
    customStyle: {
      marginLeft: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(20),
      marginRight: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(8)
    },
    size: 28
  }), !focus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, null, placeholder))), current.length > 0 && focus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    type: 'delete-input',
    customStyle: {
      marginLeft: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(20),
      marginRight: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(20)
    },
    size: 28,
    color: '#cccccc',
    onClick: function onClick() {
      return onClear(setCurrent, setFocus);
    }
  })), focus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'ossa-search--cancel',
    style: {
      color: color
    },
    onClick: function onClick() {
      return onCancel(setCurrent, setFocus);
    }
  }, "\u53D6\u6D88"));
}
Index$6.defaultProps = {
  padding: 30,
  showSplitLine: true,
  current: "",
  color: "#333333",
  placeholder: "搜索商品，共X款好物",
  bgColor: "#FAFAFA"
};
Index$6.options = {
  addGlobalClass: true
};
var _toastTimer = 0;
// let _toast_duration = 3000
// let _toast_onClose;
function getStyleObj$8(props) {
  var _styleObj = {};
  return _styleObj;
}
function getClassObject$c(props, show) {
  var _a;
  var _classObject = (_a = {}, _a["ossa-toast--show"] = show, _a["ossa-toast--hidden"] = !show, _a);
  return _classObject;
}
//export default
function Toast(props) {
  var rootClassName = "ossa-toast"; //组件
  var styleObject = Object.assign(getStyleObj$8(), props.customStyle);
  var _a = props.duration,
    duration = _a === void 0 ? 2000 : _a;
  var _b = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(duration), 2),
    setDuration = _b[1];
  var _c = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.isShow), 2),
    _d = _c[0],
    show = _d === void 0 ? false : _d,
    setShow = _c[1];
  var classObject = getClassObject$c(props, show); //组件修饰
  function onClose() {
    var _a;
    (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setShow(props.isShow);
    setDuration(duration);
    clearTimeout(_toastTimer);
    if (props.isShow) {
      _toastTimer = setTimeout(function () {
        setShow(false);
        onClose();
      }, +duration);
    }
  }, [props.isShow]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, props.className),
    style: styleObject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'ossa-toast__text'
  }, props.text));
}
Toast.defaultProps = {
  text: "",
  duration: 2000,
  isShow: false
};
Toast.options = {
  addGlobalClass: true
};
function getStyleObject(props) {
  var width = props.width,
    height = props.height;
  var _styleObject = {};
  if (width) {
    _styleObject["width"] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(width);
  }
  if (height) {
    _styleObject["height"] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(height);
  }
  return _styleObject;
}
function getClassObject$b(props) {
  var _isWeb = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getEnv() === (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().ENV_TYPE.WEB);
  var type = props.type,
    gap = props.gap;
  var _classObject = {};
  if (_isWeb) {
    _classObject["ossa-carousel-h5"] = true;
    if (gap && type === "image") _classObject["ossa-carousel-h5--space"] = true;
  } else {
    if (gap && type === "image") _classObject["ossa-carousel--space"] = true;
  }
  return _classObject;
}
function getSwiperStyleObject(props) {
  var _isWeb = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getEnv() === (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().ENV_TYPE.WEB);
  var type = props.type,
    _a = props.width,
    width = _a === void 0 ? 750 : _a,
    _b = props.height,
    height = _b === void 0 ? 375 : _b,
    gap = props.gap,
    _c = props.gapWidth,
    gapWidth = _c === void 0 ? 20 : _c,
    _d = props.prevMargin,
    prevMargin = _d === void 0 ? 15 : _d,
    _e = props.nextMargin,
    nextMargin = _e === void 0 ? 15 : _e,
    vertical = props.vertical;
  var _styleObject = {};
  if (_isWeb && gap && type === "image") {
    // H5 端手动实现间距
    if (vertical) {
      var carouselHeight = height - gapWidth - prevMargin - nextMargin;
      _styleObject["height"] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(carouselHeight);
      _styleObject["margin-top"] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(prevMargin + gapWidth);
      _styleObject["margin-bottom"] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(nextMargin + gapWidth);
    } else {
      var carouselWidth = width - gapWidth - prevMargin - nextMargin;
      _styleObject["width"] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(carouselWidth);
      _styleObject["margin-left"] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(prevMargin + gapWidth);
      _styleObject["margin-right"] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(nextMargin + gapWidth);
    }
  }
  return _styleObject;
}
function onChangeCarousel(e, props, setActiveIndex) {
  var onChange = props.onChange;
  setActiveIndex(e.detail.current);
  onChange === null || onChange === void 0 ? void 0 : onChange(e.detail.current);
}
function onClickCarousel(e, props, currentIndex) {
  var _a;
  if (currentIndex === void 0) {
    currentIndex = 0;
  }
  (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, currentIndex, e);
}
function Carousel(props) {
  var _isWeb = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getEnv() === (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().ENV_TYPE.WEB);
  var rootClassName = "ossa-carousel"; // 组件
  var classObject = getClassObject$b(props); // 组件修饰
  var styleObject = Object.assign(getStyleObject(props), props.customStyle);
  var type = props.type,
    data = props.data,
    vertical = props.vertical,
    autoPlay = props.autoPlay,
    circular = props.circular,
    interval = props.interval,
    current = props.current,
    indicatorDots = props.indicatorDots,
    gap = props.gap,
    _a = props.gapWidth,
    gapWidth = _a === void 0 ? 20 : _a,
    indicatorColor = props.indicatorColor,
    indicatorActiveColor = props.indicatorActiveColor,
    _b = props.prevMargin,
    prevMargin = _b === void 0 ? 15 : _b,
    _c = props.nextMargin,
    nextMargin = _c === void 0 ? 15 : _c;
  var _d = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(current && current >= 0 && current < data.length ? current : 0), 2),
    activeIndex = _d[0],
    setActiveIndex = _d[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, props.className),
    style: styleObject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
    style: getSwiperStyleObject(props),
    autoplay: autoPlay,
    vertical: vertical,
    interval: interval,
    circular: circular,
    current: activeIndex,
    indicatorDots: _isWeb && indicatorDots,
    indicatorColor: indicatorColor,
    indicatorActiveColor: indicatorActiveColor,
    previousMargin: gap && type === "image" && "".concat(prevMargin + gapWidth / 2, "px") || "0",
    nextMargin: gap && type === "image" && "".concat(nextMargin + gapWidth / 2, "px") || "0",
    duration: 500,
    onChange: function onChange(e) {
      return onChangeCarousel(e, props, setActiveIndex);
    },
    onClick: function onClick(e) {
      return onClickCarousel(e, props, activeIndex);
    },
    className: 'ossa-carousel-swiper'
  }, data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.SwiperItem, {
      key: item.content
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "ossa-carousel-swiper-item ".concat(vertical ? "ossa-carousel-swiper__item--vertical" : "ossa-carousel-swiper__item"),
      style: gap && type === "image" && {
        padding: vertical ? "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(gapWidth / 2), " 0") : "0 ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(gapWidth / 2))
      } || {}
    }, type === "image" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
      src: item.content,
      className: "ossa-carousel-swiper__item__image ".concat(item.className),
      style: item.style
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "ossa-carousel-swiper__item__text ".concat(item.className),
      style: item.style
    }, item.content)));
  })), !_isWeb && indicatorDots && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-carousel-indicatorWrap'
  }, data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      key: item,
      className: activeIndex === index ? classnames("ossa-carousel-indicator", "active") : "ossa-carousel-indicator"
    });
  })));
}
Carousel.defaultProps = {
  type: "image",
  width: 750,
  height: 375,
  autoPlay: true,
  vertical: false,
  interval: 4000,
  circular: true,
  indicatorDots: false,
  indicatorColor: "rgba(0, 0, 0, 0.3)",
  indicatorActiveColor: "#000000",
  current: 0,
  gap: false,
  gapWidth: 20,
  prevMargin: 15,
  nextMargin: 15,
  itemClasses: []
};
Carousel.options = {
  addGlobalClass: true
};
var openTypeRelatedProps = ['lang', 'sessionFrom', 'sendMessageTitle', 'sendMessagePath', 'sendMessageImg', 'showMessageCard', 'appParameter', 'onContact', 'onGetUserInfo', 'onGetPhoneNumber', 'onOpenSetting', 'scope', 'onGetAuthorize', 'onGetRealNameAuthInfo', 'onError', 'onLaunchApp', 'onChooseAvatar'];
/**
 * 获取和openType相关的属性和方法
 *
 * @param {object} props
 * @returns {object}
 */
function getOpenTypeRelatedProps(props) {
  return openTypeRelatedProps.reduce(function (result, propKey) {
    var _a;
    return props[propKey] !== undefined ? _assign(_assign({}, result), (_a = {}, _a[propKey] = props[propKey], _a)) : result;
  }, {});
}
var closeIconImg = "https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9d2d6d39f7.png?imageView";
function getStyleObj$7(props) {
  var _styleObj = {};
  return _styleObj;
}
function getClassObject$a(props) {
  var _a;
  var _classObject = (_a = {}, _a["ossa-modal--show"] = props.isShow, _a);
  return _classObject;
}
function onClose$1(props) {
  var _a;
  (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
}
function onClickMask$1(props) {
  if (props.closeOnClickMask) {
    onClose$1(props);
  }
}
function onClickCancelBtn(props) {
  var _a;
  if (props.disableCancelBtn) {
    return;
  }
  (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props);
  onClose$1(props);
}
function onClickConfirmBtn(props) {
  var _a;
  if (props.disableConfirmBtn) {
    return;
  }
  (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props);
  props.closeOnConfirm && onClose$1(props);
}
function Index$5(props) {
  var _a, _b, _c, _d;
  var rootClassName = "ossa-modal"; //组件
  var classObject = getClassObject$a(props); //组件修饰
  var styleObject = getStyleObj$7();
  var className = classnames(rootClassName, classObject, props.className);
  var openTypeRelatedProps = getOpenTypeRelatedProps(props);
  var title = props.title,
    content = props.content,
    confirmText = props.confirmText,
    cancelText = props.cancelText,
    custom = props.custom,
    showCloseIcon = props.showCloseIcon,
    closeable = props.closeable,
    closeIconPosition = props.closeIconPosition,
    confirmOpenType = props.confirmOpenType;
  var isRenderAction = confirmText || cancelText;
  var mergedcloseable = deprecatedProp(closeable, showCloseIcon, {
    newPropName: "closeable",
    oldPropName: "showCloseIcon",
    moduleName: "Modal"
  }, true);
  var _isAbsoluteCloseIcon = closeIconPosition !== "top" && closeIconPosition !== "bottom";
  var _closeIcon = mergedcloseable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
    className: "ossa-modal-closer ossa-modal-closer--".concat(closeIconPosition),
    src: closeIconImg,
    onClick: function onClick() {
      return onClose$1(props);
    }
  });
  if (props.title || props.content) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: className,
      style: styleObject
    }, _isAbsoluteCloseIcon && _closeIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      onClick: function onClick(e) {
        return onClickMask$1(props);
      },
      className: 'ossa-modal__mask'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-modal__container'
    }, !_isAbsoluteCloseIcon && _closeIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-modal__container-inner'
    }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-modal__header'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
      className: 'ossa-modal__title'
    }, title)), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-modal__content'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, null, content)), isRenderAction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-modal__footer'
    }, cancelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: classnames((_a = {}, _a["ossa-action-btn"] = true, _a["ossa-action-btn--cancel"] = true, _a["ossa-action-btn--disabled"] = props.disableCancelBtn, _a)),
      onClick: function onClick(e) {
        return onClickCancelBtn(props);
      }
    }, cancelText), confirmText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Button, _assign({
      className: classnames((_b = {}, _b["ossa-action-btn"] = true, _b["ossa-action-btn--confirm"] = true, _b["ossa-action-btn--disabled"] = props.disableConfirmBtn, _b)),
      openType: confirmOpenType
    }, openTypeRelatedProps, {
      onClick: function onClick(e) {
        return onClickConfirmBtn(props);
      }
    }), confirmText)))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: className,
    style: styleObject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-modal__mask',
    onClick: function onClick(e) {
      return onClickMask$1(props);
    }
  }), _isAbsoluteCloseIcon && _closeIcon, custom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-modal__customWrapper'
  }, !_isAbsoluteCloseIcon && _closeIcon, props.children), !custom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-modal__container'
  }, !_isAbsoluteCloseIcon && _closeIcon, props.children, isRenderAction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-modal__footer'
  }, cancelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: classnames((_c = {}, _c["ossa-action-btn"] = true, _c["ossa-action-btn--cancel"] = true, _c["ossa-action-btn--disabled"] = props.disableCancelBtn, _c)),
    onClick: function onClick(e) {
      return onClickCancelBtn(props);
    }
  }, cancelText), confirmText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Button, _assign({
    className: classnames((_d = {}, _d["ossa-action-btn"] = true, _d["ossa-action-btn--confirm"] = true, _d["ossa-action-btn--disabled"] = props.disableConfirmBtn, _d)),
    openType: confirmOpenType
  }, openTypeRelatedProps, {
    onClick: function onClick(e) {
      return onClickConfirmBtn(props);
    }
  }), confirmText))));
}
Index$5.defaultProps = {
  isShow: false,
  title: null,
  content: null,
  cancelText: null,
  confirmText: null,
  closeOnClickMask: true,
  closeOnConfirm: false,
  closeIconPosition: "top-right",
  onClose: null,
  onCancel: null,
  onConfirm: null
};
Index$5.options = {
  addGlobalClass: true
};
function getClassObject$9(props) {
  var _a;
  var _classObject = (_a = {}, _a["ossa-actionsheet--show"] = props.isShow, _a);
  return _classObject;
}
var onClose = function onClose(props) {
  var _a;
  (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
};
var onClickMask = function onClickMask(props) {
  onClose(props);
};
function Index$4(props) {
  var rootClassName = "ossa-actionsheet"; //组件
  var classObject = getClassObject$9(props); //组件修饰
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, props.className),
    style: props.customStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-actionsheet__mask',
    onClick: function onClick() {
      return onClickMask(props);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-actionsheet__container'
  }, props.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-actionsheet__header'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
    className: 'ossa-actionsheet__title'
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    className: 'ossa-actionsheet__close-btn',
    size: 40,
    type: 'close',
    onClick: function onClick() {
      onClose(props);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-actionsheet__content'
  }, props.children), props.cancelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-actionsheet__footer'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-actionsheet__cancel-btn',
    onClick: function onClick() {
      onClose(props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, null, props.cancelText)))));
}
Index$4.defaultProps = {
  title: null,
  isShow: false,
  cancelText: null
};
// Index.Item = OsActionsheetItem
Index$4.options = {
  addGlobalClass: true
};
function getClassObject$8(props) {
  var _a;
  var _classObject = (_a = {}, _a["ossa-actionsheet-item--disabled"] = props.disabled, _a);
  return _classObject;
}
function onCLickItem(props) {
  var _a;
  if (props.disabled) {
    return;
  }
  (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props);
}
function ActionsheetItem(props) {
  var rootClassName = "ossa-actionsheet-item"; //组件
  var classObject = getClassObject$8(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, props.className),
    onClick: function onClick() {
      onCLickItem(props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, null, props.title));
}
ActionsheetItem.options = {
  addGlobalClass: true
};
function getStyleObj$6(props) {
  var _styleObj = {};
  return _styleObj;
}
function getClassObject$7(props) {
  var _classObject = {};
  return _classObject;
}
var ENV = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getEnv();
function onRemoveImg(props, index, files, setFiles, setUpload) {
  var _a;
  var _b = props.max,
    max = _b === void 0 ? 99 : _b;
  if (ENV === (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().ENV_TYPE.WEB)) {
    window.URL.revokeObjectURL(files[index].path);
  }
  var newFiles = files.filter(function (file, i) {
    return i !== index;
  });
  setFiles(newFiles);
  if (newFiles.length >= max) {
    setUpload(false);
  } else {
    setUpload(true);
  }
  (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, newFiles, "remove", index);
}
var initialUploads = true;
function onClick$2(props, files, setFiles, setUpload) {
  var multiple = props.multiple,
    _a = props.max,
    max = _a === void 0 ? 99 : _a;
  var params = {};
  if (multiple) {
    warnDeprecatedProp('Upload', 'max', 'multiple');
    params["count"] = 99;
  }
  if (max) {
    params["count"] = max;
  }
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage(params).then(function (res) {
    var targetFiles = res.tempFiles;
    setNewFiles(props, files, max, targetFiles, setFiles, setUpload);
  }).catch(props.onFail);
}
function setNewFiles(props, files, max, targetFiles, setFiles, setUpload) {
  var _a;
  var newFiles = __spreadArray(__spreadArray([], __read(files), false), __read(targetFiles), false);
  setFiles(newFiles);
  if (newFiles.length >= max) {
    setUpload(false);
  }
  (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, newFiles.slice(0, max), "add", 0);
}
function onImageClick(props, index, file) {
  var _a;
  (_a = props.onImageClick) === null || _a === void 0 ? void 0 : _a.call(props, index, file);
}
function Upload(props) {
  var rootClassName = "ossa-upload"; //组件
  var classObject = getClassObject$7(); //组件修饰
  var styleObject = Object.assign(getStyleObj$6(), props.customStyle);
  var _a = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialUploads), 2),
    upload = _a[0],
    setUpload = _a[1];
  var _b = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.files), 2),
    _c = _b[0],
    files = _c === void 0 ? [] : _c,
    setFiles = _b[1];
  var _deleteIconStyle = {
    position: "absolute",
    right: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(-18),
    top: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(-18),
    zIndex: 1
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, props.className),
    style: styleObject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-upload__list'
  }, files && files.length > 0 && files.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-upload__item',
      key: item.path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
      className: 'ossa-upload__item__img',
      src: item.path,
      onClick: function onClick() {
        return onImageClick(props, index, item);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
      size: 36,
      type: 'upload-delete',
      customStyle: _deleteIconStyle,
      onClick: function onClick() {
        return onRemoveImg(props, index, files, setFiles, setUpload);
      }
    }));
  }), upload && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-upload__btn',
    onClick: function onClick() {
      onClick$2(props, files, setFiles, setUpload);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    type: 'photo',
    size: 48,
    color: '#d8d8d8',
    customStyle: {
      margin: "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(25), " auto ").concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(8))
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-upload__input'
  }))));
}
Upload.defaultProps = {
  max: 99,
  multiple: true,
  length: 4,
  file: []
};
Upload.options = {
  addGlobalClass: true
};
function getStyleObj$5(props) {
  var show = props.show;
  var _styleObj = {};
  if (show) {
    // setShow(true);
    _styleObj["display"] = "block";
  } else {
    // setShow(false);
    _styleObj["display"] = "none";
  }
  return _styleObj;
}
function getClassObject$6(props) {
  var _classObject = {};
  return _classObject;
}
function getPageInfo(props, index) {
  var _a = props.imagesArr,
    imagesArr = _a === void 0 ? [] : _a;
  return "".concat(index + 1, "/").concat(imagesArr.length);
}
var initialBaseWidth = function initialBaseWidth() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getSystemInfoSync().windowWidth;
};
function getSwipeStyle(offset, swiping, totalWidth) {
  return {
    width: "".concat(totalWidth, "px"),
    transform: "translateX(".concat(offset, "px)"),
    transitionDuration: "".concat(swiping ? 0 : 500, "ms")
  };
}
function getSwipeItemStyle(swipes, baseWidth) {
  var styleList = swipes.map(function (swipe) {
    return {
      width: baseWidth + "px",
      height: "100%",
      transform: "translateX(".concat(swipe.offset, "px)")
    };
  });
  return styleList;
}
function getTotalWidth(imagesArr, baseWidth) {
  return baseWidth * imagesArr.length;
}
function Index$3(props) {
  var rootClassName = "ossa-image-preview"; //组件
  var classObject = getClassObject$6(); //组件修饰
  var showBack = props.showBack,
    touchable = props.touchable,
    _a = props.imagesArr,
    imagesArr = _a === void 0 ? [] : _a,
    showPagination = props.showPagination,
    loop = props.loop,
    customStyle = props.customStyle,
    customHeaderStyle = props.customHeaderStyle;
  var _b = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value), 2),
    _c = _b[0],
    index = _c === void 0 ? 0 : _c,
    setIndex = _b[1];
  var _d = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialBaseWidth), 1),
    baseWidth = _d[0];
  var _e = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(imagesArr.length > 1 ? -baseWidth * index : 0), 2),
    offset = _e[0],
    setOffset = _e[1];
  var _f = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(imagesArr.map(function (img) {
      return {
        img: img,
        offset: 0
      };
    })), 2),
    swipes = _f[0],
    setSwipes = _f[1];
  var _g = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2),
    swiping = _g[0],
    setSwiping = _g[1];
  var _h = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getTotalWidth(imagesArr, baseWidth)), 1),
    totalWidth = _h[0];
  var _j = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), 2),
    deltaX = _j[0],
    setDeltaX = _j[1];
  var _k = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), 2),
    deltaY = _k[0],
    setDeltaY = _k[1];
  var _l = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), 2),
    offsetX = _l[0],
    setOffsetX = _l[1];
  var _m = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), 2),
    offsetY = _m[0],
    setOffsetY = _m[1];
  var _o = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), 2),
    startX = _o[0],
    setStartX = _o[1];
  var _p = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), 2),
    startY = _p[0],
    setStartY = _p[1];
  var styleObject = Object.assign(getStyleObj$5(props), customStyle);
  var _pageInfo = getPageInfo(props, index);
  var swipeStyle = getSwipeStyle(offset, swiping, totalWidth);
  function resetTouchStatus() {
    setDeltaX(0);
    setDeltaY(0);
    setOffsetX(0);
    setOffsetY(0);
  }
  function onTouchStart(event) {
    resetTouchStatus();
    setStartX(event.touches[0].clientX);
    setStartY(event.touches[0].clientY);
  }
  function onImgTouchStart(event) {
    setSwiping(true);
    onTouchStart(event);
    correctPosition();
  }
  function correctPosition() {
    var length = imagesArr.length;
    if (index <= -1) {
      move({
        pace: length
      });
    }
    if (index >= length) {
      move({
        pace: -length
      });
    }
  }
  function move(_a) {
    var _b = _a.pace,
      pace = _b === void 0 ? 0 : _b,
      _c = _a._offset,
      _offset = _c === void 0 ? 0 : _c,
      _d = _a.emitChange,
      emitChange = _d === void 0 ? false : _d;
    var size = baseWidth;
    var count = swipes.length;
    var atFirst = index === 0;
    var atLast = index === count - 1;
    var outOfBounds = !loop && (atFirst && (_offset > 0 || pace < 0) || atLast && (_offset < 0 || pace > 0));
    //禁止上下滑动
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      return;
    }
    if (outOfBounds || count <= 1) {
      return;
    }
    if (swipes[0]) {
      swipes[0].offset = atLast && (deltaX < 0 || pace > 0) ? totalWidth : 0;
    }
    if (swipes[count - 1]) {
      swipes[count - 1].offset = atFirst && (deltaX > 0 || pace < 0) ? -totalWidth : 0;
    }
    // let _timer:any = null
    // clearTimeout(_timer)
    if (pace && index + pace >= -1 && index + pace <= count) {
      setIndex(index += pace);
      if (emitChange) {
        // _timer = setTimeout(() => {
        //   setIndex((index + count) % count)
        // }, 0);
        setIndex((index + count) % count);
      }
    }
    setOffset(Math.round(_offset - index * size));
  }
  function onImgTouchMove(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!swiping) return;
    //禁止上下滑动
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      return;
    }
    touchMove(event);
    move({
      _offset: Math.min(Math.max(deltaX, -baseWidth), baseWidth)
    });
  }
  function touchMove(event) {
    var touch = event.touches[0];
    setDeltaX(touch.clientX - startX);
    setDeltaY(touch.clientY - startY);
    setOffsetX(Math.abs(deltaX));
    setOffsetY(Math.abs(deltaY));
  }
  function onImgTouchEnd(event) {
    var _a;
    if (!swiping) return;
    // event.stopPropagation();
    if (deltaX) {
      var _offset = offsetX;
      move({
        pace: _offset > 0 ? deltaX > 0 ? -1 : 1 : 0,
        emitChange: true
      });
    }
    setSwiping(false);
    var _index = index >= imagesArr.length ? 0 : index;
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, {
      index: _index,
      url: imagesArr[_index],
      item: imagesArr[_index]
    });
  }
  function onWrapperClick(event) {
    var _a;
    if (touchable && offsetX < 10 && offsetY < 10) {
      clearStates();
      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, {
        index: index,
        url: imagesArr[index],
        item: imagesArr[index]
      });
    }
  }
  function onGoback() {
    var _a;
    clearStates();
    (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, {
      index: index,
      url: imagesArr[index],
      item: imagesArr[index]
    });
  }
  function clearStates() {
    setIndex(0);
    resetTouchStatus();
    setOffset(0);
    setSwipes(imagesArr.map(function (img) {
      return {
        img: img,
        offset: 0
      };
    }));
  }
  function getImgStyle(item, previewProps) {
    var width = item.width,
      height = item.height;
    var _style = {};
    if (width && height) {
      var _imgH = baseWidth * height / width;
      _style.height = _imgH + "px";
    }
    if (previewProps.imagesBgColor) {
      _style["background"] = previewProps.imagesBgColor;
    }
    return _style;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, props.className),
    style: styleObject,
    onClick: function onClick(e) {
      onWrapperClick();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-image-preview__header',
    style: customHeaderStyle
  }, (showBack || !touchable) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-image-preview__back',
    onClick: function onClick() {
      return onGoback();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    color: '#fff',
    type: 'return'
  })), showPagination && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-image-preview__index'
  }, _pageInfo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-image-preview__swipe'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-image-preview__swipe__track',
    style: swipeStyle,
    onTouchStart: function onTouchStart(e) {
      onImgTouchStart(e);
    },
    onTouchMove: function onTouchMove(e) {
      onImgTouchMove(e);
    },
    onTouchEnd: function onTouchEnd(e) {
      onImgTouchEnd();
    }
  }, imagesArr.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      key: item.img,
      className: 'ossa-image-preview__swipe-item',
      style: getSwipeItemStyle(swipes, baseWidth)[i]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
      style: getImgStyle(item, props),
      mode: 'widthFix',
      className: 'ossa-image-preview__swipe-item--image',
      src: item.img
    }));
  }))));
}
Index$3.defaultProps = {
  showBack: true,
  touchable: true,
  showPagination: true,
  loop: true,
  show: false,
  imagesArr: []
};
Index$3.options = {
  addGlobalClass: true
};
var LINE_HEIGHT = 43;
var TOP$1 = LINE_HEIGHT * 2;
// const MASK_HEIGHT = LINE_HEIGHT * 5;
function getStyleObj$4(props) {
  var _styleObj = {};
  return Object.assign({}, _styleObj, props.customStyle);
}
function getClassObject$5(props) {
  var _classObject = {};
  return _classObject;
}
var PickerGroup = /** @class */function (_super) {
  __extends(PickerGroup, _super);
  function PickerGroup(props) {
    var _this = _super.call(this, props) || this;
    _this.touchEnd = false;
    return _this;
  }
  PickerGroup.prototype.getPosition = function () {
    var transition = this.touchEnd ? 0.3 : 0;
    var translateY = (this.props.height || 0) + "px";
    return "transform: translate3d(0, ".concat(translateY, ", 0);transition: transform ").concat(transition, "s;");
  };
  PickerGroup.prototype.formulaUnlimitedScroll = function (range, absoluteHeight, direction) {
    var _this = this;
    var _a = this.props,
      _b = _a.height,
      height = _b === void 0 ? 0 : _b,
      onUpdateHeight = _a.onUpdateHeight,
      _c = _a.columnId,
      columnId = _c === void 0 ? "0" : _c;
    var factor = direction === "up" ? 1 : -1;
    this.touchEnd = false;
    // 点击超过范围，点击到补帧时，先跳到另一端的补帧
    onUpdateHeight === null || onUpdateHeight === void 0 ? void 0 : onUpdateHeight(-range * factor * LINE_HEIGHT + height, columnId);
    // 再做过渡动画
    setTimeout(function () {
      _this.touchEnd = true;
      var index = Math.round(absoluteHeight / -LINE_HEIGHT) + range * factor;
      var relativeHeight = TOP$1 - LINE_HEIGHT * index;
      onUpdateHeight === null || onUpdateHeight === void 0 ? void 0 : onUpdateHeight(relativeHeight, columnId, true);
    }, 0);
  };
  PickerGroup.prototype.render = function () {
    var _this = this;
    var onTouchStart = function onTouchStart(e) {
      var _a, _b;
      // 记录第一次的点击位置
      _this.startY = e.changedTouches[0].clientY;
      _this.preY = e.changedTouches[0].clientY;
      _this.hadMove = false;
      (_b = (_a = _this.props).onTouchStart) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    };
    var onTouchMove = function onTouchMove(e) {
      var _a, _b, _c, _d;
      var _e = _this.props,
        _f = _e.columnId,
        columnId = _f === void 0 ? "0" : _f,
        _g = _e.height,
        height = _g === void 0 ? 0 : _g;
      var y = e.changedTouches[0].clientY;
      var deltaY = y - _this.preY;
      _this.preY = y;
      _this.touchEnd = false;
      if (Math.abs(y - _this.startY) > 10) _this.hadMove = true;
      var newPos = height + deltaY;
      var hourRecycle = _this.props.type === "time" && _this.props.columnId === "0" || _this.props.type === "complete" && _this.props.columnId === "3";
      var minuteRecycle = _this.props.type === "time" && _this.props.columnId === "1" || _this.props.type === "complete" && _this.props.columnId === "4";
      // 处理时间选择器的无限滚动
      if (hourRecycle) {
        // 数字 28 来自于 4 格补帧 + 0 ～ 23 的 24 格，共 28 格
        if (newPos > TOP$1 - LINE_HEIGHT * 2) {
          newPos = TOP$1 - LINE_HEIGHT * 26 + deltaY;
        }
        if (newPos < TOP$1 - LINE_HEIGHT * 27) {
          newPos = TOP$1 - LINE_HEIGHT * 3 + deltaY;
        }
      } else if (minuteRecycle) {
        if (newPos > TOP$1 - LINE_HEIGHT * 2) {
          newPos = TOP$1 - LINE_HEIGHT * 62 + deltaY;
        }
        if (newPos < TOP$1 - LINE_HEIGHT * 63) {
          newPos = TOP$1 - LINE_HEIGHT * 3 + deltaY;
        }
      }
      (_b = (_a = _this.props).onUpdateHeight) === null || _b === void 0 ? void 0 : _b.call(_a, newPos, columnId);
      (_d = (_c = _this.props).onTouchMove) === null || _d === void 0 ? void 0 : _d.call(_c, e);
      e.preventDefault();
      e.stopPropagation();
    };
    var onTouchEnd = function onTouchEnd(e) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      var _j = _this.props,
        type = _j.type,
        _k = _j.range,
        range = _k === void 0 ? [] : _k,
        _l = _j.height,
        height = _l === void 0 ? 0 : _l,
        onUpdateHeight = _j.onUpdateHeight,
        onColumnChange = _j.onColumnChange,
        _m = _j.columnId,
        columnId = _m === void 0 ? "0" : _m;
      var max = 0;
      var min = -LINE_HEIGHT * (range.length - 1);
      // const endY = e.changedTouches[0].clientY
      _this.touchEnd = true;
      // touchEnd 时的高度，可能带小数点，需要再处理
      var absoluteHeight;
      if (!_this.hadMove) {
        /** 点击 */
        // 屏幕高度
        // const windowHeight = window.innerHeight
        // // picker__mask 垂直方向距离屏幕顶部的高度
        // const relativeY = windowHeight - MASK_HEIGHT / 2
        // absoluteHeight = height - TOP - (endY - relativeY)
        // // 处理时间选择器的无限滚动
        // if (this.props.type === 'time') {
        //   if (this.props.columnId === '0') {
        //     // 点击上溢出
        //     // absoluteHeight 是相对模块中点来算的，所以会算多半行，这时要减去这半行，即2.5行
        //     if (absoluteHeight > -LINE_HEIGHT * 2.5) {
        //       this.formulaUnlimitedScroll(24, absoluteHeight, 'up')
        //       return
        //     }
        //     // 点击下溢出
        //     if (absoluteHeight < -LINE_HEIGHT * 28.5) {
        //       this.formulaUnlimitedScroll(24, absoluteHeight, 'down')
        //       return
        //     }
        //   } else if (this.props.columnId === '1') {
        //     // 点击上溢出
        //     if (absoluteHeight > -LINE_HEIGHT * 2.5) {
        //       this.formulaUnlimitedScroll(60, absoluteHeight, 'up')
        //       return
        //     }
        //     // 点击下溢出
        //     if (absoluteHeight < -LINE_HEIGHT * 64.5) {
        //       this.formulaUnlimitedScroll(60, absoluteHeight, 'down')
        //       return
        //     }
        //   }
        // }
        return;
      } else {
        /** 滚动 */
        absoluteHeight = height - TOP$1;
      }
      // 边界情况处理
      if (absoluteHeight > max) absoluteHeight = 0;
      if (absoluteHeight < min) absoluteHeight = min;
      // 先按公式算出 index, 再用此 index 算出一个整数高度
      var index = Math.round(absoluteHeight / -LINE_HEIGHT);
      var relativeHeight = TOP$1 - LINE_HEIGHT * index;
      if (_this.props.type === "date" || _this.props.type === "complete") {
        if (_this.props.columnId === "0") {
          (_b = (_a = _this.props).onUpdateDay) === null || _b === void 0 ? void 0 : _b.call(_a, +_this.props.range[index].replace(/[^0-9]/gi, ""), 0);
        }
        if (_this.props.columnId === "1") {
          (_d = (_c = _this.props).onUpdateDay) === null || _d === void 0 ? void 0 : _d.call(_c, +_this.props.range[index].replace(/[^0-9]/gi, ""), 1);
        }
        if (_this.props.columnId === "2") {
          (_f = (_e = _this.props).onUpdateDay) === null || _f === void 0 ? void 0 : _f.call(_e, +_this.props.range[index].replace(/[^0-9]/gi, ""), 2);
        }
      }
      onUpdateHeight === null || onUpdateHeight === void 0 ? void 0 : onUpdateHeight(relativeHeight, columnId, type === "time" || type === "date");
      onColumnChange === null || onColumnChange === void 0 ? void 0 : onColumnChange(relativeHeight, columnId, e);
      (_h = (_g = _this.props).onTouchEnd) === null || _h === void 0 ? void 0 : _h.call(_g, e);
    };
    var rootClassName = "picker-group"; //组件
    var classObject = getClassObject$5(this.props); //组件修饰
    var styleObject = getStyleObj$4(this.props);
    var range = this.props.range || [];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: classnames(rootClassName, classObject, this.props.className),
      style: styleObject,
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd,
      catchMove: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'picker-group__items',
      style: this.getPosition()
    }, range.map(function (item, index) {
      var _a;
      var groupOffset = _this.props.height || 0;
      var offestRange = [LINE_HEIGHT * index + groupOffset, LINE_HEIGHT * (index + 1) + groupOffset];
      var currentIndexRange = [LINE_HEIGHT * 2, LINE_HEIGHT * 3];
      var isInclude = !(offestRange[0] >= currentIndexRange[1] || offestRange[1] <= currentIndexRange[0]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: classnames((_a = {}, _a["picker-group__item"] = true, _a["picker-group__item--highlight"] = isInclude, _a)),
        key: index + item
      }, item);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: classnames("picker-group__mask", "picker-group__mask--top")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: classnames("picker-group__mask", "picker-group__mask--bottom")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: classnames("picker-group__indicator")
    }));
  };
  PickerGroup.defaultProps = {
    columnId: "0"
  };
  return PickerGroup;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var OsPickerGroup = function OsPickerGroup(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.CustomWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PickerGroup, props));
};
var PICKER_ITEM_HEIGHT = 43;
function getStyleObj$3(props) {
  var _styleObj = {};
  return _styleObj;
}
function getClassObject$4(props) {
  var _classObject = {};
  return _classObject;
}
function Index$2(props) {
  var _a;
  var rootClassName = "ossa-picker"; //组件
  var classObject = getClassObject$4(); //组件修饰
  var styleObject = getStyleObj$3();
  var _b = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2),
    popupShow = _b[0],
    setPopupShow = _b[1];
  var _c = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(PICKER_ITEM_HEIGHT * 2 - PICKER_ITEM_HEIGHT * props.value), 2),
    groupOffsetY = _c[0],
    setGroupOffsetY = _c[1];
  var onClose = function onClose() {
    setPopupShow(false);
  };
  var onCancel = function onCancel() {
    var _a;
    (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props);
    onClose();
  };
  var onConfirm = function onConfirm() {
    var _a;
    var newIndex = Math.round((PICKER_ITEM_HEIGHT * 2 - groupOffsetY) / PICKER_ITEM_HEIGHT);
    (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props, newIndex);
    onClose();
  };
  var showPopup = function showPopup() {
    setGroupOffsetY(PICKER_ITEM_HEIGHT * 2 - PICKER_ITEM_HEIGHT * props.value);
    setPopupShow(true);
  };
  var onGroupOffsetChange = function onGroupOffsetChange(value) {
    setGroupOffsetY(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, props.className),
    style: styleObject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-picker__trigger',
    onClick: showPopup
  }, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames((_a = {}, _a["ossa-picker-popup"] = true, _a["ossa-picker-popup--show"] = popupShow, _a))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-picker-popup__mask',
    onClick: function onClick() {
      return onCancel();
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-picker-popup__container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-picker-popup__header'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("ossa-picker-popup__btn", "ossa-picker-popup__btn-cancel"),
    onClick: function onClick() {
      return onCancel();
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("ossa-picker-popup__btn", "ossa-picker-popup__btn-confirm"),
    onClick: function onClick() {
      return onConfirm();
    }
  }, "\u786E\u5B9A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-picker-popup__body'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
    range: props.range,
    height: groupOffsetY,
    onUpdateHeight: onGroupOffsetChange
  })))));
}
Index$2.options = {
  addGlobalClass: true
};
function getStyleObj$2(props) {
  var _styleObj = {};
  return _styleObj;
}
function getClassObject$3(props) {
  var _a;
  var _classObject = (_a = {}, _a["picker-popup"] = true, _a["picker-popup--show"] = props.isShow, _a);
  return _classObject;
}
function Index$1(props) {
  var rootClassName = "picker"; //组件
  var classObject = getClassObject$3(props); //组件修饰
  var styleObject = getStyleObj$2();
  var onClose = function onClose() {
    var _a;
    (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
  };
  var onCancel = function onCancel(e) {
    var _a;
    (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props, e);
    onClose();
  };
  var onConfirm = function onConfirm(e) {
    var _a;
    (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props, e);
    onClose();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, props.className),
    style: styleObject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'picker-popup__mask',
    onClick: onCancel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'picker-popup__container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'picker-popup__header'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("picker-popup__btn", "picker-popup__btn-cancel"),
    onClick: onCancel
  }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames("picker-popup__btn", "picker-popup__btn-confirm"),
    onClick: onConfirm
  }, "\u786E\u5B9A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'picker-popup__body'
  }, props.children)));
}
Index$1.defaultProps = {
  isShow: false,
  children: null
};

/**
 * 校验日期合法性，返回合法性和日期数组
 *
 * @param {String} date
 * @param {String} start
 * @param {String} end
 * @returns
 */
function verifyDate(date) {
  if (!date) return false;
  //ios new Date的时间格式必须是 2019/8/1 这种以/分隔年月日，且仅年月2019/8/也无法识别，故使用addDay 补日期
  date = new Date(addDay(date).replace(/-/g, "/"));
  return Number.isNaN(date.getMonth()) ? false : date;
}
/**
 * 获取当月最大天数
 *
 * @param {Number} year
 * @param {Number} month
 * @returns
 */
function getMaxDay(year, month) {
  if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
  if (month === 2) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) return 29;else return 28;
  }
  return 31;
}
function compareTime(t1, t2) {
  // logic: t1 <= t2: return true
  t1 = t1.split(":").map(function (i) {
    return +i;
  });
  t2 = t2.split(":").map(function (i) {
    return +i;
  });
  if (t1[0] < t2[0]) return true;
  if (t1[0] === t2[0]) {
    if (t1[1] <= t2[1]) return true;
  }
  return false;
}
function getTimeRange(begin, end, suffix) {
  if (suffix === void 0) {
    suffix = "";
  }
  var range = [];
  for (var i = begin; i <= end; i++) {
    range.push("".concat(i < 10 ? "0" : "").concat(i).concat(suffix));
  }
  return range;
}
/**
 * 给月份补日期，默认补为每个月的1号
 */
function addDay(date) {
  var _date = "";
  if (!date) {
    return "";
  } else if (date.includes("-") && date.split("-").length === 2) {
    //判断格式是否为 2019-8
    _date = date + "-1";
  } else {
    _date = date;
  }
  return _date;
}
var TOP = PICKER_ITEM_HEIGHT * 2;
var DatePicker = /** @class */function (_super) {
  __extends(DatePicker, _super);
  function DatePicker(props) {
    var _this = _super.call(this, props) || this;
    // [2019, 8, 1, 18, 00]
    _this.val = [];
    // 点击确定
    _this.onConfirm = function (e) {
      var _a, _b;
      _this.hidePicker();
      // 除了 multiSeclector，都在点击确认时才改变记录的下标值
      var indexArr = _this.state.height.map(function (h) {
        return (TOP - h) / PICKER_ITEM_HEIGHT;
      });
      // value格式取决于type和fields
      // time: 00:00
      // date: 1970-1-1 or 1970-1 or 1970
      // complete: 1970-1-1 00:00
      var eventObj = _this.getEventObj(e, "change", {
        value: ""
      });
      if (_this.props.type === "time") {
        var rangeWithoutSuffix_1 = [_this.getHourRange(), _this.getMinuteRange()];
        _this.val = indexArr.map(function (n, i) {
          return +rangeWithoutSuffix_1[i][n];
        });
        eventObj.detail.value = _this.val.join(":");
      }
      if (_this.props.type === "date") {
        _this.val = indexArr.map(function (n, i) {
          return _this.getDateArrIndex(n, i, true);
        });
        var tempValue = void 0;
        if (_this.props.fields === "year") {
          tempValue = [_this.val[0]];
        } else if (_this.props.fields === "month") {
          tempValue = [_this.val[0], _this.val[1]];
        } else {
          tempValue = _this.val;
        }
        eventObj.detail.value = tempValue.join("-");
      }
      if (_this.props.type === "complete") {
        _this.val = indexArr.map(function (n, i) {
          return _this.getCompleteDateArrIndex(n, i, true);
        });
        eventObj.detail.value = "".concat(_this.val[0], "-").concat(_this.val[1], "-").concat(_this.val[2], " ").concat(_this.val[3], ":").concat(_this.val[4]);
      }
      (_b = (_a = _this.props).onConfirm) === null || _b === void 0 ? void 0 : _b.call(_a, eventObj);
    };
    // 点击取消或蒙层
    _this.onCancel = function (e) {
      var _a, _b;
      _this.hidePicker();
      (_b = (_a = _this.props).onCancel) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    _this.handlePrpos();
    _this.state = {
      popupShow: false,
      height: []
    };
    return _this;
  }
  DatePicker.prototype.getStyleObj = function (props) {
    var _styleObj = {};
    return _styleObj;
  };
  DatePicker.prototype.getClassObject = function (props) {
    var _classObject = {};
    return _classObject;
  };
  DatePicker.prototype.showPicker = function () {
    var _this = this;
    if (this.props.disabled) return;
    var height = this.val.map(function (i, idx) {
      var factor;
      if (_this.props.type === "time") {
        factor = PICKER_ITEM_HEIGHT * 3;
      } else if (_this.props.type === "date") {
        factor = 0;
        return TOP - PICKER_ITEM_HEIGHT * _this.getDateArrIndex(i, idx) - factor;
      } else if (_this.props.type === "complete") {
        if (idx <= 2) {
          factor = 0;
          return TOP - PICKER_ITEM_HEIGHT * _this.getCompleteDateArrIndex(i, idx) - factor;
        } else {
          factor = PICKER_ITEM_HEIGHT * 3;
          return TOP - PICKER_ITEM_HEIGHT * i - factor;
        }
      }
      return TOP - PICKER_ITEM_HEIGHT * i - factor;
    });
    this.setState({
      height: height,
      popupShow: true
    });
  };
  // 统一抛出的事件对象，和小程序对齐
  DatePicker.prototype.getEventObj = function (e, type, detail) {
    Object.defineProperties(e, {
      detail: {
        value: detail,
        enumerable: true
      },
      type: {
        value: type,
        enumerable: true
      }
    });
    return e;
  };
  DatePicker.prototype.reviseTime = function () {
    var _a = this.props,
      _b = _a.start,
      start = _b === void 0 ? "" : _b,
      _c = _a.end,
      end = _c === void 0 ? "" : _c;
    if (!this.verifyTime(start)) start = "00:00";
    if (!this.verifyTime(end)) end = "23:59";
    if (!compareTime(start, end)) return;
    var time = this.state.height.map(function (h) {
      return (TOP - h) / PICKER_ITEM_HEIGHT;
    });
    var range = [this.getHourRange(), this.getMinuteRange()];
    time = time.map(function (n, i) {
      return range[i][n];
    }).join(":");
    var height;
    if (!compareTime(start, time)) {
      // 修正到 start
      height = start.split(":").map(function (i) {
        return TOP - PICKER_ITEM_HEIGHT * (+i + 4);
      });
      this.setState({
        height: height
      });
    } else if (!compareTime(time, end)) {
      // 修正到 end
      height = end.split(":").map(function (i) {
        return TOP - PICKER_ITEM_HEIGHT * (+i + 4);
      });
      this.setState({
        height: height
      });
    }
  };
  // 供 PickerGroup 修改对应的 height 值
  DatePicker.prototype.onUpdateHeight = function (height, columnId, needRevise) {
    var _this = this;
    if (needRevise === void 0) {
      needRevise = false;
    }
    this.setState(function (prevState) {
      prevState.height[columnId] = height;
      return {
        height: prevState.height
      };
    }, function () {
      // time picker 必须在规定时间范围内，因此需要在 touchEnd 做修正
      if (needRevise) {
        if (_this.props.type === "time") {
          _this.reviseTime();
        }
      }
    });
  };
  DatePicker.prototype.onUpdateDay = function (value, fields) {
    this.pickerDate._updateValue[fields] = value;
  };
  DatePicker.prototype.renderDateSelector = function () {
    var _this = this;
    var pickerDate = this.pickerDate;
    if (!pickerDate) {
      return null;
    }
    var year = this.getDateRange(pickerDate._start.getFullYear(), pickerDate._end.getFullYear(), "年");
    var month = this.getMonthRange("月");
    var day = this.getDayRange("日");
    var renderView;
    var fields = this.props.fields;
    var height = this.state.height;
    if (fields === "year") {
      renderView = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: 'ossa-group-container'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
        type: 'date',
        customStyle: {
          width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750)
        },
        range: year,
        height: height[0],
        onUpdateDay: function onUpdateDay() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return _this.onUpdateDay.apply(_this, __spreadArray([], __read(arg), false));
        },
        onUpdateHeight: function onUpdateHeight() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
        },
        columnId: '0',
        onTouchStart: function onTouchStart() {
          return _this.touching = true;
        },
        onTouchEnd: function onTouchEnd() {
          return _this.touching = false;
        }
      }));
    } else if (fields === "month") {
      if (height[1] < TOP - (month.length - 1) * PICKER_ITEM_HEIGHT) {
        setTimeout(function () {
          _this.onUpdateHeight(TOP - (month.length - 1) * PICKER_ITEM_HEIGHT, 1);
        });
      }
      if (height[1] > TOP) {
        setTimeout(function () {
          _this.onUpdateHeight(TOP, 1);
        });
      }
      renderView = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: 'ossa-group-container'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
        type: 'date',
        customStyle: {
          width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750 / 2)
        },
        range: year,
        height: height[0],
        onUpdateDay: function onUpdateDay() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return _this.onUpdateDay.apply(_this, __spreadArray([], __read(arg), false));
        },
        onUpdateHeight: function onUpdateHeight() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
        },
        columnId: '0',
        onTouchStart: function onTouchStart() {
          return _this.touching = true;
        },
        onTouchEnd: function onTouchEnd() {
          return _this.touching = false;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
        type: 'date',
        customStyle: {
          width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750 / 2)
        },
        range: month,
        height: height[1],
        onUpdateDay: function onUpdateDay() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return _this.onUpdateDay.apply(_this, __spreadArray([], __read(arg), false));
        },
        onUpdateHeight: function onUpdateHeight() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
        },
        columnId: '1',
        onTouchStart: function onTouchStart() {
          return _this.touching = true;
        },
        onTouchEnd: function onTouchEnd() {
          return _this.touching = false;
        }
      }));
    } else if (fields === "day") {
      if (!this.touching) {
        if (height[1] < TOP - (month.length - 1) * PICKER_ITEM_HEIGHT) {
          setTimeout(function () {
            _this.onUpdateHeight(TOP - (month.length - 1) * PICKER_ITEM_HEIGHT, 1);
          });
        }
        if (height[1] > TOP) {
          setTimeout(function () {
            _this.onUpdateHeight(TOP, 1);
          });
        }
        if (height[2] < TOP - (day.length - 1) * PICKER_ITEM_HEIGHT) {
          setTimeout(function () {
            _this.onUpdateHeight(TOP - (day.length - 1) * PICKER_ITEM_HEIGHT, 2);
          });
        }
        if (height[2] > TOP) {
          setTimeout(function () {
            _this.onUpdateHeight(TOP, 2);
          });
        }
      }
      renderView = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: 'ossa-group-container'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
        type: 'date',
        customStyle: {
          width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750 / 3)
        },
        range: year,
        height: height[0],
        onUpdateDay: function onUpdateDay() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return _this.onUpdateDay.apply(_this, __spreadArray([], __read(arg), false));
        },
        onUpdateHeight: function onUpdateHeight() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
        },
        columnId: '0',
        onTouchStart: function onTouchStart() {
          return _this.touching = true;
        },
        onTouchEnd: function onTouchEnd() {
          return _this.touching = false;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
        type: 'date',
        customStyle: {
          width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750 / 3)
        },
        range: month,
        height: height[1],
        onUpdateDay: function onUpdateDay() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return _this.onUpdateDay.apply(_this, __spreadArray([], __read(arg), false));
        },
        onUpdateHeight: function onUpdateHeight() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
        },
        columnId: '1',
        onTouchStart: function onTouchStart() {
          return _this.touching = true;
        },
        onTouchEnd: function onTouchEnd() {
          return _this.touching = false;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
        type: 'date',
        customStyle: {
          width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750 / 3)
        },
        range: day,
        height: height[2],
        onUpdateDay: function onUpdateDay() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return _this.onUpdateDay.apply(_this, __spreadArray([], __read(arg), false));
        },
        onUpdateHeight: function onUpdateHeight() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
        },
        columnId: '2',
        onTouchStart: function onTouchStart() {
          return _this.touching = true;
        },
        onTouchEnd: function onTouchEnd() {
          return _this.touching = false;
        }
      }));
    } else {
      renderView = null;
    }
    return renderView;
  };
  DatePicker.prototype.renderTimeSelector = function () {
    var _this = this;
    var hourRange = this.getHourRange("时");
    var minRange = this.getMinuteRange("分");
    var height = this.state.height;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-group-container'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
      type: 'time',
      range: hourRange,
      height: height[0],
      onUpdateHeight: function onUpdateHeight() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arg[_i] = arguments[_i];
        }
        return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
      },
      columnId: '0',
      customStyle: {
        width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750 / 2)
      },
      onTouchStart: function onTouchStart() {
        return _this.touching = true;
      },
      onTouchEnd: function onTouchEnd() {
        return _this.touching = false;
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
      type: 'time',
      range: minRange,
      height: height[1],
      onUpdateHeight: function onUpdateHeight() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arg[_i] = arguments[_i];
        }
        return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
      },
      columnId: '1',
      customStyle: {
        width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750 / 2)
      },
      onTouchStart: function onTouchStart() {
        return _this.touching = true;
      },
      onTouchEnd: function onTouchEnd() {
        return _this.touching = false;
      }
    }));
  };
  DatePicker.prototype.renderCompleteDateSelector = function () {
    var _this = this;
    var pickerDate = this.pickerDate;
    if (!pickerDate) {
      return null;
    }
    var height = this.state.height;
    var year = this.getDateRange(pickerDate._start.getFullYear(), pickerDate._end.getFullYear(), "年");
    var month = this.getMonthRange("月");
    var day = this.getDayRange("日");
    var hourRange = this.getHourRange("时");
    var minRange = this.getMinuteRange("分");
    if (!this.touching) {
      if (height[1] < TOP - (month.length - 1) * PICKER_ITEM_HEIGHT) {
        setTimeout(function () {
          _this.onUpdateHeight(TOP - (month.length - 1) * PICKER_ITEM_HEIGHT, 1);
        });
      }
      if (height[1] > TOP) {
        setTimeout(function () {
          _this.onUpdateHeight(TOP, 1);
        });
      }
      if (height[2] < TOP - (day.length - 1) * PICKER_ITEM_HEIGHT) {
        setTimeout(function () {
          _this.onUpdateHeight(TOP - (day.length - 1) * PICKER_ITEM_HEIGHT, 2);
        });
      }
      if (height[2] > TOP) {
        setTimeout(function () {
          _this.onUpdateHeight(TOP, 2);
        });
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-group-container'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
      type: 'complete',
      customStyle: {
        width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750 * 3 / 11)
      },
      range: year,
      height: height[0],
      onUpdateDay: function onUpdateDay() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arg[_i] = arguments[_i];
        }
        return _this.onUpdateDay.apply(_this, __spreadArray([], __read(arg), false));
      },
      onUpdateHeight: function onUpdateHeight() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arg[_i] = arguments[_i];
        }
        return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
      },
      columnId: '0',
      onTouchStart: function onTouchStart() {
        return _this.touching = true;
      },
      onTouchEnd: function onTouchEnd() {
        return _this.touching = false;
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
      type: 'complete',
      customStyle: {
        width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750 * 2 / 11)
      },
      range: month,
      height: height[1],
      onUpdateDay: function onUpdateDay() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arg[_i] = arguments[_i];
        }
        return _this.onUpdateDay.apply(_this, __spreadArray([], __read(arg), false));
      },
      onUpdateHeight: function onUpdateHeight() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arg[_i] = arguments[_i];
        }
        return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
      },
      columnId: '1',
      onTouchStart: function onTouchStart() {
        return _this.touching = true;
      },
      onTouchEnd: function onTouchEnd() {
        return _this.touching = false;
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
      type: 'complete',
      customStyle: {
        width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750 * 2 / 11)
      },
      range: day,
      height: height[2],
      onUpdateDay: function onUpdateDay() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arg[_i] = arguments[_i];
        }
        return _this.onUpdateDay.apply(_this, __spreadArray([], __read(arg), false));
      },
      onUpdateHeight: function onUpdateHeight() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arg[_i] = arguments[_i];
        }
        return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
      },
      columnId: '2',
      onTouchStart: function onTouchStart() {
        return _this.touching = true;
      },
      onTouchEnd: function onTouchEnd() {
        return _this.touching = false;
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
      type: 'complete',
      customStyle: {
        width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750 * 2 / 11)
      },
      range: hourRange,
      height: height[3],
      onUpdateDay: function onUpdateDay() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arg[_i] = arguments[_i];
        }
        return _this.onUpdateDay.apply(_this, __spreadArray([], __read(arg), false));
      },
      onUpdateHeight: function onUpdateHeight() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arg[_i] = arguments[_i];
        }
        return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
      },
      columnId: '3',
      onTouchStart: function onTouchStart() {
        return _this.touching = true;
      },
      onTouchEnd: function onTouchEnd() {
        return _this.touching = false;
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OsPickerGroup, {
      type: 'complete',
      customStyle: {
        width: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().pxTransform(750 * 2 / 11)
      },
      range: minRange,
      height: height[4],
      onUpdateDay: function onUpdateDay() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arg[_i] = arguments[_i];
        }
        return _this.onUpdateDay.apply(_this, __spreadArray([], __read(arg), false));
      },
      onUpdateHeight: function onUpdateHeight() {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          arg[_i] = arguments[_i];
        }
        return _this.onUpdateHeight.apply(_this, __spreadArray([], __read(arg), false));
      },
      columnId: '4',
      onTouchStart: function onTouchStart() {
        return _this.touching = true;
      },
      onTouchEnd: function onTouchEnd() {
        return _this.touching = false;
      }
    }));
  };
  DatePicker.prototype.handlePrpos = function (nextProps) {
    if (nextProps === void 0) {
      nextProps = this.props;
    }
    var value = nextProps.value,
      type = nextProps.type;
    if (type === "time") {
      // check value...
      if (!this.verifyTime(value)) {
        console.warn("time picker value illegal");
        value = "0:0";
      }
      this.val = value.split(":").map(function (n) {
        return +n;
      });
    } else if (type === "date") {
      var _a = nextProps.start,
        start = _a === void 0 ? "" : _a,
        _b = nextProps.end,
        end = _b === void 0 ? "" : _b;
      var _value = verifyDate(value);
      var _start = verifyDate(start);
      var _end = verifyDate(end);
      if (!_value) _value = new Date(new Date().setHours(0, 0, 0, 0)); // 没传值或值的合法性错误默认今天时间
      if (!_start) _start = new Date("1970/01/01");
      if (!_end) _end = new Date("2999/01/01");
      // 时间区间有效性
      if (_value.getTime() >= _start.getTime() && _value.getTime() <= _end.getTime()) {
        this.val = [_value.getFullYear(), _value.getMonth() + 1, _value.getDate()];
        if (!this.pickerDate || this.pickerDate._value.getTime() !== _value.getTime() || this.pickerDate._start.getTime() !== _start.getTime() || this.pickerDate._end.getTime() !== _end.getTime()) {
          this.pickerDate = {
            _value: _value,
            _start: _start,
            _end: _end,
            _updateValue: [_value.getFullYear(), _value.getMonth() + 1, _value.getDate()]
          };
        }
      } else {
        throw new Error("Date Interval Error");
      }
    } else if (type === "complete") {
      var _c = nextProps.start,
        start = _c === void 0 ? "" : _c,
        _d = nextProps.end,
        end = _d === void 0 ? "" : _d;
      var _value = verifyDate(value);
      var _start = verifyDate(start);
      var _end = verifyDate(end);
      if (!_value) _value = new Date(new Date().setSeconds(0, 0)); // 没传值或值的合法性错误默认今天时间
      if (!_start) _start = new Date("1970/01/01");
      if (!_end) _end = new Date("2999/01/01");
      if (_value.getTime() >= _start.getTime() && _value.getTime() <= _end.getTime()) {
        this.val = [_value.getFullYear(), _value.getMonth() + 1, _value.getDate(), _value.getHours(), _value.getMinutes()];
        if (!this.pickerDate || this.pickerDate._value.getTime() !== _value.getTime() || this.pickerDate._start.getTime() !== _start.getTime() || this.pickerDate._end.getTime() !== _end.getTime()) {
          this.pickerDate = {
            _value: _value,
            _start: _start,
            _end: _end,
            _updateValue: [_value.getFullYear(), _value.getMonth() + 1, _value.getDate(), _value.getHours(), _value.getMinutes()]
          };
        }
      } else {
        throw new Error("Date Interval Error");
      }
    }
  };
  DatePicker.prototype.componentWillReceiveProps = function (nextProps) {
    this.handlePrpos(nextProps);
  };
  // 校验传入的 value 是否合法
  DatePicker.prototype.verifyValue = function (value, range) {
    if (value >= 0 && value < range.length) return true;
    return false;
  };
  // 检验传入的 time value 是否合法
  DatePicker.prototype.verifyTime = function (value) {
    if (!/^\d{1,2}:\d{1,2}$/.test(value)) return false;
    var time = value.split(":").map(function (num) {
      return +num;
    });
    if (time[0] < 0 || time[0] > 23) return false;
    if (time[1] < 0 || time[1] > 59) return false;
    return true;
  };
  DatePicker.prototype.getMonthRange = function (fields) {
    if (fields === void 0) {
      fields = "";
    }
    var _start = 1;
    var _end = 12;
    if (this.pickerDate._start.getFullYear() === this.pickerDate._end.getFullYear()) {
      _start = this.pickerDate._start.getMonth() + 1;
      _end = this.pickerDate._end.getMonth() + 1;
    } else if (this.pickerDate._start.getFullYear() === this.pickerDate._updateValue[0]) {
      _start = this.pickerDate._start.getMonth() + 1;
      _end = 12;
    } else if (this.pickerDate._end.getFullYear() === this.pickerDate._updateValue[0]) {
      _start = 1;
      _end = this.pickerDate._end.getMonth() + 1;
    }
    return this.getDateRange(_start, _end, fields);
  };
  DatePicker.prototype.getDayRange = function (fields) {
    if (fields === void 0) {
      fields = "";
    }
    var _start = 1;
    var _end = getMaxDay(this.pickerDate._updateValue[0], this.pickerDate._updateValue[1]);
    if (this.pickerDate._start.getFullYear() === this.pickerDate._updateValue[0] && this.pickerDate._start.getMonth() + 1 === this.pickerDate._updateValue[1]) {
      _start = this.pickerDate._start.getDate();
    }
    if (this.pickerDate._end.getFullYear() === this.pickerDate._updateValue[0] && this.pickerDate._end.getMonth() + 1 === this.pickerDate._updateValue[1]) {
      _end = this.pickerDate._end.getDate();
    }
    return this.getDateRange(_start, _end, fields);
  };
  DatePicker.prototype.getHourRange = function (fields) {
    if (fields === void 0) {
      fields = "";
    }
    return __spreadArray(__spreadArray(["21" + fields, "22" + fields, "23" + fields], __read(getTimeRange(0, 23, fields)), false), ["00" + fields, "01" + fields, "02" + fields], false);
  };
  DatePicker.prototype.getMinuteRange = function (fields) {
    if (fields === void 0) {
      fields = "";
    }
    return __spreadArray(__spreadArray(["57".concat(fields), "58".concat(fields), "59".concat(fields)], __read(getTimeRange(0, 59, fields)), false), ["00".concat(fields), "01".concat(fields), "02".concat(fields)], false);
  };
  // 获取年月日下标或者下标对应的数
  DatePicker.prototype.getDateArrIndex = function (value, fields, getIdx) {
    if (getIdx === void 0) {
      getIdx = false;
    }
    var year = this.getDateRange(this.pickerDate._start.getFullYear(), this.pickerDate._end.getFullYear());
    var month = this.getMonthRange();
    var day = this.getDayRange();
    if (getIdx) {
      if (fields === 0) {
        return +year[value];
      } else if (fields === 1) {
        return +month[value];
      } else {
        return +day[value];
      }
    } else {
      if (fields === 0) {
        return year.indexOf(value + "");
      } else if (fields === 1) {
        return month.indexOf(value + "");
      } else {
        return day.indexOf(value + "");
      }
    }
  };
  DatePicker.prototype.getCompleteDateArrIndex = function (value, fields, getVal) {
    if (getVal === void 0) {
      getVal = false;
    }
    var year = this.getDateRange(this.pickerDate._start.getFullYear(), this.pickerDate._end.getFullYear());
    var month = this.getMonthRange();
    var day = this.getDayRange();
    var hour = this.getHourRange();
    var minute = this.getMinuteRange();
    if (getVal) {
      if (fields === 0) {
        return +year[value];
      } else if (fields === 1) {
        return +month[value];
      } else if (fields === 2) {
        return +day[value];
      } else if (fields === 3) {
        return +hour[value];
      } else {
        return +minute[value];
      }
    } else {
      if (fields === 0) {
        return year.indexOf(value + "");
      } else if (fields === 1) {
        return month.indexOf(value + "");
      } else if (fields === 2) {
        return day.indexOf(value + "");
      } else if (fields === 3) {
        return hour.indexOf(value + "时");
      } else {
        return minute.indexOf(value + "分");
      }
    }
  };
  // 获取时间数组
  DatePicker.prototype.getDateRange = function (begin, end, fields) {
    if (fields === void 0) {
      fields = "";
    }
    var range = [];
    for (var i = begin; i <= end; i++) {
      range.push("".concat(i).concat(fields));
    }
    return range;
  };
  // 隐藏 picker
  DatePicker.prototype.hidePicker = function () {
    this.setState({
      popupShow: false
    });
  };
  DatePicker.prototype.componentWillUnmount = function () {
    this.val = [];
  };
  DatePicker.prototype.render = function () {
    var _this = this;
    var rootClassName = "ossa-date-picker"; //组件
    var classObject = this.getClassObject(this.props); //组件修饰
    var styleObject = Object.assign(this.getStyleObj(this.props), this.props.customStyle);
    var popupShow = this.state.popupShow;
    var type = this.props.type;
    var pickerGroups;
    if (type === "time") {
      pickerGroups = this.renderTimeSelector();
    } else if (type === "date") {
      pickerGroups = this.renderDateSelector();
    } else if (type === "complete") {
      pickerGroups = this.renderCompleteDateSelector();
    } else {
      pickerGroups = null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: classnames(rootClassName, classObject, this.props.className),
      style: styleObject
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: 'ossa-date-picker__trigger',
      onClick: function onClick() {
        return _this.showPicker();
      }
    }, this.props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Index$1, {
      isShow: popupShow,
      onCancel: this.onCancel,
      onConfirm: this.onConfirm
    }, pickerGroups));
  };
  DatePicker.defaultProps = {
    type: "selector",
    fields: "day"
  };
  DatePicker.options = {
    addGlobalClass: true
  };
  return DatePicker;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
function getStyleObj$1(props) {
  var _styleObj = {};
  return _styleObj;
}
function getClassObject$2(props) {
  var _a;
  var _classObject = (_a = {}, _a["ossa-notice-bar--play-infinite"] = props.scrollable, _a["ossa-notice-bar--with-icon"] = props.leftIcon, _a);
  return _classObject;
}
function getElementWidth(selector) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2 /*return*/, new Promise(function (resolve) {
        var query = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.createSelectorQuery)();
        query.select(selector).boundingClientRect();
        query.exec(function (res) {
          var _a;
          resolve(((_a = res === null || res === void 0 ? void 0 : res[0]) === null || _a === void 0 ? void 0 : _a.width) || 0);
        });
      })];
    });
  });
}
var uuid = 0;
function getUUID() {
  return ++uuid;
}
function Index(props) {
  var _a;
  var rootClassName = "ossa-notice-bar"; //组件
  var classObject = getClassObject$2(props); //组件修饰
  var styleObject = Object.assign(getStyleObj$1(), props.customStyle);
  var _b = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), 2),
    duration = _b[0],
    setDuration = _b[1];
  var id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(getUUID());
  var _c = props.speed,
    speed = _c === void 0 ? 16 : _c;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var frameId = requestAnimationFrame(function () {
      getElementWidth("#marqueeContainer_".concat(id.current)).then(function (width) {
        if (width === 0) {
          width = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.getSystemInfoSync)().windowWidth;
        }
        setDuration(Number((width / speed).toFixed(2)));
      });
    });
    return function () {
      cancelAnimationFrame(frameId);
    };
  }, [speed]);
  var marqueeStyle = {
    animationDuration: "".concat(duration, "s"),
    WebkitAnimationDuration: "".concat(duration, "s")
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, props.className),
    style: styleObject,
    onClick: props.onClick
  }, props.leftIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    className: 'ossa-notice-bar__left-icon',
    type: props.leftIcon,
    size: 28,
    color: props.color || "#F48F18"
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: 'ossa-notice-bar__content-wrapper'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    id: "marqueeContainer_".concat(id.current),
    className: classnames((_a = {}, _a["ossa-notice-bar__content"] = true, _a)),
    style: marqueeStyle
  }, props.children)), props.more ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    className: 'ossa-notice-bar__accessory-view',
    type: 'arrows',
    size: 28,
    color: '#F48F18'
  }) : null, props.closeable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    className: 'ossa-notice-bar__close-btn',
    type: 'close',
    size: 28,
    color: '#F48F18',
    onClick: props.onClose
  }) : null);
}
Index.defaultProps = {
  title: "我是标题"
};
Index.options = {
  addGlobalClass: true
};
var DataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function getClassObject$1(props) {
  var _a;
  var type = props.type,
    justify = props.justify,
    align = props.align,
    wrap = props.wrap;
  var _classObject = (_a = {}, _a["ossa-row-".concat(type)] = type, _a["ossa-row-justify-".concat(justify)] = justify, _a["ossa-row-align-".concat(align)] = align, _a["ossa-row-flex-".concat(wrap)] = wrap, _a);
  return _classObject;
}
function onClick$1(e, props) {
  var _a;
  (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
}
function Row(props) {
  var rootClassName = 'ossa-row'; //组件
  var classObject = getClassObject$1(props); //组件修饰
  var className = props.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DataContext.Provider, {
    value: props
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, className),
    onClick: function onClick(e) {
      return onClick$1(e, props);
    }
  }, props.children));
}
Row.defaultProps = {
  type: '',
  justify: 'start',
  align: 'flex-start',
  wrap: 'nowrap',
  gutter: '0'
};
Row.options = {
  addGlobalClass: true
};
function getStyleObj(context) {
  var _styleObj = {};
  var gutter = context.gutter;
  _styleObj.paddingLeft = "".concat(gutter / 2, "px");
  _styleObj.paddingRight = "".concat(gutter / 2, "px");
  return _styleObj;
}
function getClassObject(props, context) {
  var _a;
  var span = props.span,
    offset = props.offset;
  var gutter = context.gutter;
  var _classObject = (_a = {}, _a["ossa-col-".concat(span)] = true, _a["ossa-col-gutter"] = !!gutter, _a["ossa-col-offset-".concat(offset)] = true, _a);
  return _classObject;
}
function _onClick2(e, props) {
  var _a;
  (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
}
function Col(props) {
  var rootClassName = 'ossa-col'; //组件
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DataContext);
  var classObject = getClassObject(props, context); //组件修饰
  var styleObject = Object.assign(getStyleObj(context), props.customStyle);
  var className = props.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: classnames(rootClassName, classObject, className),
    style: styleObject,
    onClick: function onClick(e) {
      return _onClick2(e, props);
    }
  }, props.children);
}
Col.defaultProps = {
  span: '24',
  offset: '0',
  gutter: '0'
};
Col.options = {
  addGlobalClass: true
};

/**
* 格式化指定的日期对象。
* @param res
* @param format 格式字符串。其中以下字符(区分大小写)会被替换：
*
* 字符| 意义        | 示例
* ----|------------|--------------------
* d   | 日         | dd: 09, d: 9
* H   | 时(24小时制)| HH: 13, H: 13
* m   | 分         | mm: 06, m: 6
* s   | 秒         | ss: 06, s: 6
*
* @return 返回格式化后的字符串。
*/
function dateFormat(res, format) {
  if (format === void 0) {
    format = "HH:mm:ss";
  }
  var newRes = {
    d: res.days,
    H: res.hours,
    m: res.minutes,
    s: res.seconds
  };
  return format.replace(/([yMdHms])\1*/g, function (all, key) {
    key = newRes[key] + "";
    while (key.length < all.length) {
      key = "0" + key;
    }
    return key;
  });
}
var parseMs = function parseMs(milliseconds) {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
    remainTime: milliseconds
  };
};
function useCountDown(options) {
  var _a = options || {},
    targetDate = _a.targetDate,
    _b = _a.interval,
    interval = _b === void 0 ? 1000 : _b,
    onEnd = _a.onEnd;
  var _c = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), 2),
    remainTime = _c[0],
    setRemainTime = _c[1];
  var timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var onEndRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  onEndRef.current = onEnd;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (targetDate) {
      calcRemainTime();
    }
    return function () {
      clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, targetDate]);
  function start() {
    timerRef.current = setTimeout(function () {
      calcRemainTime();
    }, interval);
  }
  function calcRemainTime() {
    var _a;
    var deltaTime = new Date(targetDate).getTime() - new Date().getTime();
    setRemainTime(deltaTime < 0 ? 0 : deltaTime);
    if (deltaTime <= interval) {
      clear();
      (_a = onEndRef === null || onEndRef === void 0 ? void 0 : onEndRef.current) === null || _a === void 0 ? void 0 : _a.call(onEndRef);
    } else {
      start();
    }
  }
  function clear() {
    timerRef.current && clearTimeout(timerRef.current);
  }
  return {
    formattedRes: parseMs(remainTime)
  };
}
var CountDown = function CountDown(_a) {
  var targetDate = _a.targetDate,
    _b = _a.remainTime,
    remainTime = _b === void 0 ? 0 : _b,
    _c = _a.interval,
    interval = _c === void 0 ? 1000 : _c,
    format = _a.format,
    onEnd = _a.onEnd,
    children = _a.children,
    viewProps = __rest(_a, ["targetDate", "remainTime", "interval", "format", "onEnd", "children"]);
  var calcTargetDate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    // 兼容safari
    if (targetDate && /^\d+-\d+-\d+/.test(targetDate)) {
      return targetDate.replace(/-/g, '/');
    }
    return targetDate || remainTime + new Date().getTime();
  }, [targetDate, remainTime]);
  var formattedRes = useCountDown({
    targetDate: calcTargetDate,
    onEnd: onEnd,
    interval: interval
  }).formattedRes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, _assign({}, viewProps), typeof children === "function" ? children(formattedRes) : dateFormat(formattedRes, format || 'HH:mm:ss'));
};
function generateId() {
  return 'sc-' + Math.random().toString(16).slice(2);
}
var SwipeCell = function SwipeCell(_a) {
  var children = _a.children,
    _b = _a.disabled,
    disabled = _b === void 0 ? false : _b,
    right = _a.right,
    viewProps = __rest(_a, ["children", "disabled", "right"]);
  var idRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(generateId());
  var _c = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), 2),
    x = _c[0],
    setX = _c[1];
  var direction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('left');
  var startX = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var endX = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var rightWidth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var handleTouchStart = function handleTouchStart(e) {
    if (disabled) {
      return;
    }
    startX.current = e.touches[0].clientX;
  };
  var handleTouchMove = function handleTouchMove(e) {
    var _a, _b;
    (_a = e === null || e === void 0 ? void 0 : e.preventDefault) === null || _a === void 0 ? void 0 : _a.call(e);
    (_b = e === null || e === void 0 ? void 0 : e.stopPropagation) === null || _b === void 0 ? void 0 : _b.call(e);
    if (disabled) {
      return;
    }
    var deltaX = e.touches[0].clientX - startX.current;
    direction.current = deltaX < 0 ? 'left' : 'right';
    var newX = Math.min(Math.max(-rightWidth.current, endX.current + deltaX), 0);
    setX(newX);
  };
  var handleTouchEnd = function handleTouchEnd() {
    if (disabled) {
      return;
    }
    startX.current = 0;
    endX.current = x;
    var max = 20;
    var minChange = rightWidth.current * 1 / 3 > max ? max : rightWidth.current * 1 / 3;
    var absEndx = Math.abs(endX.current);
    // 自动回弹
    if (direction.current === 'left') {
      endX.current = absEndx > minChange ? -rightWidth.current : 0;
      setX(endX.current);
    }
    if (direction.current === 'right') {
      endX.current = rightWidth.current - absEndx < minChange ? -rightWidth.current : 0;
      setX(endX.current);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timeoutId = setTimeout(function () {
      var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().createSelectorQuery();
      query.select('#' + idRef.current).boundingClientRect();
      query.selectViewport().scrollOffset();
      query.exec(function (res) {
        rightWidth.current = res[0].width;
      });
    }, 200);
    return function () {
      clearTimeout(timeoutId);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, _assign({}, viewProps, {
    className: classnames('ossa-swipecell', viewProps.className)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    style: {
      transform: "translate3d(".concat(x, "px,0,0)")
    },
    className: 'ossa-swipecell__wrapper'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    id: idRef.current,
    className: classnames('ossa-swipecell__right', {
      'ossa-swipecell__default': typeof right === 'string'
    })
  }, right), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    catchMove: true,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchEnd,
    className: 'ossa-swipecell__content'
  }, children)));
};


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createSuper; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return function _createSuperInternal() {
    var Super = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

}]);
//# sourceMappingURL=vendors.js.map