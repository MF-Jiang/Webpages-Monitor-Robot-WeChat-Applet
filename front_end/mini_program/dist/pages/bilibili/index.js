"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/bilibili/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/bilibili/index.jsx":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/bilibili/index.jsx ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var ossaui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ossaui */ "./node_modules/ossaui/dist/index.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_reload_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/reload.png */ "./src/static/reload.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
















var selector = ['Latest Release', 'Most Clicks'];
var Index = /*#__PURE__*/function (_Component) {
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);
  var _super = (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Index);
  function Index() {
    var _this;
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Index);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "state", {
      v1: false,
      openToast: false,
      minutes: 0,
      hours: 0,
      days: 0,
      order: 0,
      keyword: "",
      time: "",
      content: [],
      isLoading: false,
      selector: 0,
      isFirst: true
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "setV1", function (v1) {
      var _this$state = _this.state,
        keyword = _this$state.keyword,
        minutes = _this$state.minutes,
        hours = _this$state.hours,
        days = _this$state.days;
      var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('Cookies');
      if (_this.state.keyword === '') {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showModal({
          title: 'Tips',
          content: 'Please enter a valid time and subject',
          showCancel: false
        });
        return;
      } else {
        _this.setState({
          v1: v1
        });
      }
      if (_this.state.v1 === false) {
        console.log("111");
        _this.setState({
          isLoading: true,
          isFirst: false
        });
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
          url: 'http://127.0.0.1:5000/api/bilibili/start',
          header: {
            'content-type': 'application/json',
            // 默认值
            'Cookie': c
          },
          data: {
            "start": true,
            "topic": keyword,
            "days": days,
            "hours": hours,
            "minutes": minutes
          },
          method: "POST",
          success: function success() {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
              url: 'http://127.0.0.1:5000/api/bilibili/extract',
              header: {
                'content-type': 'application/json',
                // 默认值
                'Cookie': c
              },
              method: "POST",
              success: function success(res) {
                console.log(res.data.info);
                _this.setState({
                  content: res.data.info,
                  isLoading: false
                });
              }
            });
            console.log("success");
          }
        });
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
          url: 'http://127.0.0.1:5000/api/bilibili/start',
          header: {
            'content-type': 'application/json',
            // 默认值
            'Cookie': c
          },
          data: {
            "start": false,
            "topic": keyword,
            "days": days,
            "hours": hours,
            "minutes": minutes
          },
          method: "POST",
          success: function success() {
            console.log("Quit monitor");
          }
        });
      }
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "isOpenToast", function () {
      if (_this.state.v1 === true) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showModal({
          title: 'Tips',
          content: 'Please disable the monitor first',
          showCancel: false
        });
        return;
      }
      _this.setState({
        openToast: true
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "closeToast", function () {
      _this.setState({
        openToast: false
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "onOrderChange", function (evt) {
      var content = _this.state.content;
      if (evt.detail.value === '1') {
        content.sort(function (a, b) {
          // eslint-disable-next-line no-restricted-globals
          if (!isFinite(a.view_counts)) {
            var num = a.view_counts.slice(0, -1);
            a.view_counts = num * 10000;
            console.log(a.view_counts);
          } else if (!isFinite(b.view_counts)) {
            var _num = b.view_counts.slice(0, -1);
            b.view_counts = _num * 10000;
            console.log(b.view_counts);
          }
          return b.view_counts - a.view_counts;
        });
        _this.setState({
          selector: 1
        });
      } else {
        content.sort(function (a, b) {
          return Date.parse(b.upload_time.replace(/-/g, "/")) - Date.parse(a.upload_time.replace(/-/g, "/"));
        });
        _this.setState({
          selector: 0
        });
      }
      _this.setState({
        order: evt.detail.value,
        content: content
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "getData", function () {
      console.log(_this.state.content);
      if (_this.state.v1 === false) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showModal({
          title: 'Tips',
          content: 'Please enable the monitor first',
          showCancel: false
        });
        return;
      }
      var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('Cookies');
      _this.setState({
        isLoading: true
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
        url: 'http://127.0.0.1:5000/api/bilibili/extract',
        header: {
          'content-type': 'application/json',
          // 默认值
          'Cookie': c
        },
        method: "POST",
        success: function success(res) {
          console.log(res.data.info);
          var new_content = [].concat((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(res.data.info), (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this.state.content));
          if (_this.state.selector === 1) {
            new_content.sort(function (a, b) {
              if (!isFinite(a.view_counts)) {
                var num = a.view_counts.slice(0, -1);
                a.view_counts = num * 10000;
                console.log(a.view_counts);
              } else if (!isFinite(b.view_counts)) {
                var _num2 = b.view_counts.slice(0, -1);
                b.view_counts = _num2 * 10000;
                console.log(b.view_counts);
              }
              return b.view_counts - a.view_counts;
            });
          }
          console.log(new_content);
          _this.setState({
            content: new_content,
            isLoading: false
          });
        }
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "submitData", function () {
      var _this$state2 = _this.state,
        minutes = _this$state2.minutes,
        hours = _this$state2.hours,
        days = _this$state2.days;
      if (!days && !hours && !minutes || _this.keyWordElement.value === '' && _this.state.keyword === '') {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showModal({
          title: 'Tips',
          content: 'Please enter a valid time and subject',
          showCancel: false
        });
        return;
      }
      if (_this.keyWordElement.value === '') {
        _this.keyWordElement.value = _this.state.keyword;
      }
      var d = days === 0 ? '' : "".concat(days, "d");
      var h = hours === 0 ? '' : "".concat(hours, "h");
      var m = minutes === 0 ? '' : "".concat(minutes, "mins");
      var new_time = d + h + m;
      _this.setState({
        keyword: _this.keyWordElement.value,
        openToast: false,
        time: new_time,
        isLoading: true,
        isFirst: false,
        v1: true
      });
      var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('Cookies');
      console.log(c);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
        url: 'http://127.0.0.1:5000/api/bilibili/start',
        header: {
          'content-type': 'application/json',
          'Cookie': c
        },
        data: {
          "start": true,
          "topic": _this.keyWordElement.value,
          "days": days,
          "hours": hours,
          "minutes": minutes
        },
        method: "POST",
        success: function success() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
            url: 'http://127.0.0.1:5000/api/bilibili/extract',
            header: {
              'content-type': 'application/json',
              // 默认值
              'Cookie': c
            },
            method: "POST",
            success: function success(res) {
              console.log(res.data.info);
              _this.setState({
                content: res.data.info,
                isLoading: false
              });
            }
          });
          console.log("success");
        }
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "open_url_msg", function (url) {
      return function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showModal({
          title: 'Kindly Reminder',
          content: 'Due to restrictions on WeChat, please copy the link and open it in your web browser.',
          confirmText: 'Copy url',
          cancelText: 'Cancel',
          success: function success(res) {
            if (res.confirm) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setClipboardData({
                data: url,
                success: function success(res1) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getClipboardData({
                    success: function success(res1) {
                      console.log(res1.data);
                    }
                  });
                }
              });
            }
          }
        });
      };
    });
    return _this;
  }
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var bi = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('State_bi');
      var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('Cookies');
      console.log(bi);
      //this.setState({...bi})
      if (bi.v1 === true) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
          url: 'http://127.0.0.1:5000/api/bilibili/extract',
          header: {
            'content-type': 'application/json',
            // 默认值
            'Cookie': c
          },
          method: "POST",
          success: function success(res) {
            console.log(res.data.info);
            var new_content = [].concat((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(res.data.info), (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(bi.content));
            _this2.setState((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, bi), {}, {
              content: new_content,
              isLoading: false
            }));
          }
        });
      } else {
        this.setState((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, bi));
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setStorageSync('State_bi', this.state);
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "handleChange",
    value: function handleChange(minutes) {
      this.setState({
        minutes: parseInt(minutes)
      });
    }
  }, {
    key: "handleChange1",
    value: function handleChange1(hours) {
      this.setState({
        hours: parseInt(hours)
      });
    }
  }, {
    key: "handleChange2",
    value: function handleChange2(days) {
      this.setState({
        days: parseInt(days)
      });
    }
  }, {
    key: "onScrollToUpper",
    value: function onScrollToUpper() {}
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var scrollStyle = {
        height: '550px'
      };
      var scrollTop = 0;
      var Threshold = 20;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "index",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_1__.OsButton, {
          shape: "round",
          bdColor: "#00FFFF",
          bgColor: "#00FFFF",
          onClick: this.isOpenToast,
          children: this.state.keyword === '' ? "New monitor" : "Edit monitor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_1__.OsSwitch, {
          className: "s1",
          checked: this.state.v1,
          onChange: this.setV1,
          onColor: "#00FFFF"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "topic",
          children: ["Topic: ", this.state.keyword]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "r_time",
          children: ["Refresh Interval: ", this.state.time]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
          mode: "selector",
          range: selector,
          onChange: this.onOrderChange,
          className: "pk",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "order",
            children: [selector[this.state.order], /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_1__.OsIcon, {
              type: "pull-down-big",
              size: 20
            })]
          })
        }), this.state.content.length !== 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "s2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Image, {
            style: "width:25px; height:25px;",
            onClick: this.getData,
            src: _static_reload_png__WEBPACK_IMPORTED_MODULE_3__
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.ScrollView, {
          className: "scrollview",
          scrollY: true,
          scrollWithAnimation: true,
          scrollTop: scrollTop,
          style: scrollStyle,
          lowerThreshold: Threshold,
          upperThreshold: Threshold,
          onScrollToUpper: this.onScrollToUpper.bind(this) // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          ,

          onScroll: this.onScroll,
          children: this.state.isFirst === true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "first_text",
            children: " Welcome to Bilibili video monitor! "
          }) : this.state.isLoading === true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_1__.OsLoading, {
            className: "loading_img",
            size: 120,
            color: "blue"
          }) : this.state.content.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {}) : this.state.content.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "li",
              onClick: _this3.open_url_msg(item.url),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Image, {
                className: "imgA",
                src: item.image
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                className: "video_data",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                  className: "video_title",
                  children: item.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                  className: "view_area1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_1__.OsIcon, {
                    type: "visible",
                    className: "view_icon",
                    size: 30
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                    className: "view_data",
                    children: item.view_counts
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                  className: "view_area2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_1__.OsIcon, {
                    className: "view_icon",
                    type: "user",
                    size: 30
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                    className: "view_data",
                    children: item.uploader
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                    className: "upload_time",
                    children: item.upload_time
                  })]
                })]
              })]
            }, item.id);
          })
        }), this.state.openToast && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "reply-input-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "t1",
            children: "Bilibili"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "t2",
            children: "Topic:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Input, {
            className: "input1",
            ref: function ref(c) {
              return _this3.keyWordElement = c;
            },
            placeholder: this.state.keyword
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "t3",
            children: "Refresh Interval:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            children: "Minutes:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_1__.OsStepper, {
            min: 0,
            max: 60,
            step: 1,
            value: this.state.minutes,
            onChange: this.handleChange.bind(this)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            children: "Hours:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_1__.OsStepper, {
            min: 0,
            max: 60,
            step: 1,
            value: this.state.hours,
            onChange: this.handleChange1.bind(this)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            children: "Days:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_1__.OsStepper, {
            min: 0,
            max: 365,
            step: 1,
            value: this.state.days,
            onChange: this.handleChange2.bind(this)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_1__.OsButton, {
            className: "b1",
            onClick: this.closeToast,
            shape: "round",
            bdColor: "#00FFFF",
            bgColor: "#00FFFF",
            children: "Close"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_1__.OsButton, {
            className: "b2",
            shape: "round",
            bdColor: "#00FFFF",
            bgColor: "#00FFFF",
            onClick: this.submitData,
            children: "Submit"
          })]
        })]
      });
    }
  }]);
  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/bilibili/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/bilibili/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/bilibili/index.jsx");


var config = {"navigationBarTitleText":"Bilibili"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/bilibili/index', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/bilibili/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map