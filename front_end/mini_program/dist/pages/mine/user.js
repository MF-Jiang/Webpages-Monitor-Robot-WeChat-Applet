"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/user"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/mine/user.jsx":
/*!******************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/mine/user.jsx ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _static_personal_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/personal.png */ "./src/static/personal.png");
/* harmony import */ var _static_right_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/right.png */ "./src/static/right.png");
/* harmony import */ var _static_setting_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/setting.png */ "./src/static/setting.png");
/* harmony import */ var _static_help_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/help.png */ "./src/static/help.png");
/* harmony import */ var _static_contact_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/contact.png */ "./src/static/contact.png");
/* harmony import */ var _static_logout_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/logout.png */ "./src/static/logout.png");
/* harmony import */ var _static_avatar_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/avatar.png */ "./src/static/avatar.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);



















var Index = /*#__PURE__*/function (_Component) {
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__["default"])(Index, _Component);
  var _super = (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Index);
  function Index() {
    var _this;
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_12__["default"])(this, Index);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "state", {
      username: "",
      time: "",
      email: "",
      tempFilePaths: ""
    });
    return _this;
  }
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var _this2 = this;
      var cookie = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('Cookies');
      var upload_avatar = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('tempFilePaths');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
        url: 'http://127.0.0.1:5000/api/auth/user_menu',
        header: {
          'Cookie': cookie,
          'content-type': 'application/json'
        },
        method: "POST",
        success: function success(res) {
          _this2.setState({
            username: res.data.username,
            time: res.data.time,
            email: res.data.email,
            tempFilePaths: upload_avatar
          });
        }
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var contact = function contact() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
          url: "/pages/mine/contact/index"
        });
      };
      var help = function help() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
          url: "/pages/mine/help/index"
        });
      };
      var setting = function setting() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
          url: "/pages/mine/setting/index"
        });
      };
      var personal = function personal() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
          url: "/pages/mine/personal/index"
        });
      };
      var Log_out = function Log_out() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
          title: 'Reminder',
          content: 'Sure you want to log out?',
          confirmText: 'Confirm',
          cancelText: 'Cancel',
          success: function success(res) {
            if (res.confirm) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().reLaunch({
                url: '/pages/login/index'
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('Cookies');
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('State_bi');
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('State_aca');
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('State_sina');
            }
          }
        });
      };
      var chooseImage = function chooseImage() {
        console.log("img");
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().chooseImage({
          count: 1,
          // 默认9
          sizeType: ['original', 'compressed'],
          // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'],
          // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
          success: function success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            _this3.setState({
              tempFilePaths: res.tempFilePaths
            });
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('tempFilePaths', res.tempFilePaths);
          }
        });
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
        class: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          class: "partOne",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            class: "userinfo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
              class: "userinfo-avatar",
              src: this.state.tempFilePaths.length === 0 ? _static_avatar_png__WEBPACK_IMPORTED_MODULE_8__ : this.state.tempFilePaths,
              mode: "cover",
              onClick: chooseImage
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
              class: "userinfo-nickname",
              children: this.state.username
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          class: "partTwo",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            class: "item",
            onClick: personal,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              class: "itemname",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                  src: _static_personal_png__WEBPACK_IMPORTED_MODULE_2__
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
                  children: "Personal"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              class: "right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                src: _static_right_png__WEBPACK_IMPORTED_MODULE_3__
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            class: "item",
            onClick: contact,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              class: "itemname",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                  src: _static_contact_png__WEBPACK_IMPORTED_MODULE_6__
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
                  children: "Contact"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              class: "right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                src: _static_right_png__WEBPACK_IMPORTED_MODULE_3__
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          class: "partThree",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            class: "item",
            onClick: help,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              class: "itemname",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                  src: _static_help_png__WEBPACK_IMPORTED_MODULE_5__
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
                  children: "Help"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              class: "right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                src: _static_right_png__WEBPACK_IMPORTED_MODULE_3__
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            class: "item",
            onClick: setting,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              class: "itemname",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                  src: _static_setting_png__WEBPACK_IMPORTED_MODULE_4__
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
                  children: "Setting"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              class: "right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                src: _static_right_png__WEBPACK_IMPORTED_MODULE_3__
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            class: "item",
            onClick: Log_out,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              class: "itemname",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                  src: _static_logout_png__WEBPACK_IMPORTED_MODULE_7__
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
                  children: "Logout"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              class: "right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                src: _static_right_png__WEBPACK_IMPORTED_MODULE_3__
              })
            })]
          })]
        })]
      });
    }
  }]);
  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);


/***/ }),

/***/ "./src/pages/mine/user.jsx":
/*!*********************************!*\
  !*** ./src/pages/mine/user.jsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_user_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./user.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/mine/user.jsx");


var config = {"navigationBarTitleText":"User-menu"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_user_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/mine/user', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/static/avatar.png":
/*!*******************************!*\
  !*** ./src/static/avatar.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/avatar.png";

/***/ }),

/***/ "./src/static/contact.png":
/*!********************************!*\
  !*** ./src/static/contact.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/contact.png";

/***/ }),

/***/ "./src/static/help.png":
/*!*****************************!*\
  !*** ./src/static/help.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/help.png";

/***/ }),

/***/ "./src/static/logout.png":
/*!*******************************!*\
  !*** ./src/static/logout.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logout.png";

/***/ }),

/***/ "./src/static/personal.png":
/*!*********************************!*\
  !*** ./src/static/personal.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/personal.png";

/***/ }),

/***/ "./src/static/right.png":
/*!******************************!*\
  !*** ./src/static/right.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/right.png";

/***/ }),

/***/ "./src/static/setting.png":
/*!********************************!*\
  !*** ./src/static/setting.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/setting.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/mine/user.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=user.js.map