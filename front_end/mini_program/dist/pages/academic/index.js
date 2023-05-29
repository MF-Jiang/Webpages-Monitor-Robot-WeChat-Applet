"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/academic/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/academic/index.jsx":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/academic/index.jsx ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ossaui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ossaui */ "./node_modules/ossaui/dist/index.esm.js");
/* harmony import */ var _static_reloadIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/reloadIcon.png */ "./src/static/reloadIcon.png");
/* harmony import */ var _components_GoogleItem_GoogleItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/GoogleItem/GoogleItem */ "./src/components/GoogleItem/GoogleItem.jsx");
/* harmony import */ var _components_BingItem_BingItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BingItem/BingItem */ "./src/components/BingItem/BingItem.jsx");
/* harmony import */ var _components_AcademicItem_AcademicItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/AcademicItem/AcademicItem */ "./src/components/AcademicItem/AcademicItem.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);



















var selector = ['All', 'Google', 'Bing'];
var Index = /*#__PURE__*/function (_Component) {
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, _Component);
  var _super = (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__["default"])(Index);
  function Index() {
    var _this;
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, Index);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "state", {
      monitorcheck: false,
      keyword: '',
      number: 0,
      numbertxt: '',
      minutes: 0,
      hours: 0,
      days: 0,
      time: '',
      run: false,
      firstuse: true,
      content: [],
      loading: false,
      order: 0,
      selector: 0
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "openmonitor", function () {
      _this.setState({
        monitorcheck: true
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "closemonitor", function () {
      if (_this.state.keyword === '' && _this.keyWordElement.value === '') {
        _this.setState({
          minutes: 0,
          hours: 0,
          days: 0,
          number: 0
        });
      }
      _this.setState({
        monitorcheck: false
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "submitmonitor", function () {
      var _this$state = _this.state,
        minutes = _this$state.minutes,
        hours = _this$state.hours,
        days = _this$state.days,
        number = _this$state.number;
      if (days == 0 && hours == 0 && minutes == 0 || number == 0 || _this.keyWordElement.value === '' && _this.state.keyword === '') {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
          title: 'Tips',
          content: 'Please enter a valid time and subject',
          showCancel: false
        });
        return;
      }
      if (_this.keyWordElement.value != _this.state.keyword) {
        _this.setState({
          content: []
        });
      }
      if (_this.keyWordElement.value == '') {
        _this.keyWordElement.value = _this.state.keyword;
      }
      // console.log(days)
      // console.log(typeof(days))
      // console.log(typeof(0))
      // console.log(days===0)
      var d = days == 0 ? '' : "".concat(days, "d");
      var h = hours == 0 ? '' : "".concat(hours, "h");
      var m = minutes == 0 ? '' : "".concat(minutes, "mins");
      var new_time = d + h + m;
      var n = number == 0 ? '' : "".concat(number);
      _this.setState({
        keyword: _this.keyWordElement.value,
        time: new_time,
        run: true,
        monitorcheck: false,
        firstuse: false,
        loading: true,
        numbertxt: n
      });
      var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('Cookies');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
        url: 'http://127.0.0.1:5000/api/google_scholar/start',
        method: "POST",
        header: {
          'content-type': 'application/json',
          'Cookie': c
        },
        data: {
          "start": true,
          "number": _this.state.number,
          "topic": _this.keyWordElement.value,
          "days": _this.state.days,
          "hours": _this.state.hours,
          "minutes": _this.state.minutes
        },
        success: function success() {
          var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('Cookies');
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
            url: 'http://127.0.0.1:5000/api/google_scholar/extract',
            method: "POST",
            header: {
              'content-type': 'application/json',
              'Cookie': c
            },
            data: {
              "web": _this.state.order
            },
            success: function success(res) {
              _this.setState({
                content: _this.state.content.concat(res.data.info),
                loading: false
              });
              console.log(res.data.info);
              console.log(_this.state.order);
            }
          });
        }
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "runChange", function () {
      if (_this.state.keyword == '' || _this.state.time == '' || _this.state.numbertxt == '') {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
          title: 'Tips',
          content: 'Please enter a valid time and subject',
          showCancel: false
        });
        //console.log(this.state.run)
        return;
      } else {
        if (_this.state.run) {
          //现在是run要变成不run
          var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('Cookies');
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
            url: 'http://127.0.0.1:5000/api/google_scholar/start',
            method: "POST",
            header: {
              'content-type': 'application/json',
              'Cookie': c
            },
            data: {
              "start": false,
              "number": _this.state.number,
              "topic": _this.state.keyword,
              "days": _this.state.days,
              "hours": _this.state.hours,
              "minutes": _this.state.minutes
            }
          });
        } else {
          //现在是不run,重启run
          var _c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('Cookies');
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
            url: 'http://127.0.0.1:5000/api/google_scholar/start',
            method: "POST",
            header: {
              'content-type': 'application/json',
              'Cookie': _c
            },
            data: {
              "start": true,
              "number": _this.state.number,
              "topic": _this.state.keyword,
              "days": _this.state.days,
              "hours": _this.state.hours,
              "minutes": _this.state.minutes
            },
            success: function success() {
              var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('Cookies');
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
                url: 'http://127.0.0.1:5000/api/google_scholar/extract',
                method: "POST",
                header: {
                  'content-type': 'application/json',
                  'Cookie': c
                },
                data: {
                  "web": _this.state.order
                },
                success: function success(res) {
                  _this.setState({
                    content: res.data.info,
                    loading: false
                  });
                  console.log(res.data.info);
                }
              });
            }
          });
        }
        _this.setState({
          run: !_this.state.run
        });
      }
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "newshandleClick", function (news) {
      var id = news.id,
        url = news.url,
        news_content = news.news_content,
        title = news.title,
        media = news.media,
        upload_time = news.upload_time;
      console.log(id, url, news_content, title, media, upload_time);
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "open_url_msg", function (news) {
      var link = news.link;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
        title: 'Kindly Reminder',
        content: 'Due to restrictions on WeChat, please copy the link and open it in your web browser.',
        confirmText: 'Copy url',
        cancelText: 'Cancel',
        success: function success(res) {
          if (res.confirm) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setClipboardData({
              data: link,
              success: function success(res1) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getClipboardData({
                  success: function success(res1) {
                    console.log(res1.data);
                  }
                });
              }
            });
          }
        }
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "pdfcopylink", function (news) {
      var pdf = news.pdf;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
        title: 'Kindly Reminder',
        content: 'Due to restrictions on WeChat, please copy the link and open it in your web browser.',
        confirmText: 'Copy url',
        cancelText: 'Cancel',
        success: function success(res) {
          if (res.confirm) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setClipboardData({
              data: pdf,
              success: function success(res1) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getClipboardData({
                  success: function success(res1) {
                    console.log(res1.data);
                  }
                });
              }
            });
          }
        }
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "reloadData", function () {
      if (_this.state.run === false) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
          title: 'Tips',
          content: 'Please enable the monitor first',
          showCancel: false
        });
        return;
      }
      _this.setState({
        loading: true
      });
      console.log("Pull down");
      var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('Cookies');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
        url: 'http://127.0.0.1:5000/api/google_scholar/extract',
        method: "POST",
        header: {
          'content-type': 'application/json',
          'Cookie': c
        },
        data: {
          "web": _this.state.order
        },
        success: function success(res) {
          _this.setState({
            content: _this.state.content.concat(res.data.info),
            loading: false
          });
          console.log(res.data.info);
        }
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "onOrderChange", function (evt) {
      if (evt.detail.value === '2') {
        _this.setState({
          selector: 2
        });
      } else if (evt.detail.value === '1') {
        _this.setState({
          selector: 1
        });
      } else {
        _this.setState({
          selector: 0
        });
      }
      _this.setState({
        order: Number(evt.detail.value)
      });
    });
    return _this;
  }
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var bi = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('State_aca');
      var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('Cookies');
      console.log(bi);
      //this.setState({...bi})
      if (bi.run === true) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
          url: 'http://127.0.0.1:5000/api/google_scholar/extract',
          header: {
            'content-type': 'application/json',
            // 默认值
            'Cookie': c
          },
          data: {
            "web": this.state.order
          },
          method: "POST",
          success: function success(res) {
            var new_content = [].concat((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_14__["default"])(res.data.info), (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_14__["default"])(bi.content));
            _this2.setState((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_15__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_15__["default"])({}, bi), {}, {
              content: new_content,
              isLoading: false
            }));
          }
        });
      } else {
        this.setState((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_15__["default"])({}, bi));
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('State_aca', this.state);
    }
  }, {
    key: "handleChange",
    value: function handleChange(minutes) {
      this.setState({
        minutes: minutes
      });
    }
  }, {
    key: "handleChange1",
    value: function handleChange1(hours) {
      this.setState({
        hours: hours
      });
    }
  }, {
    key: "handleChange2",
    value: function handleChange2(days) {
      this.setState({
        days: days
      });
    }
  }, {
    key: "handleChange3",
    value: function handleChange3(number) {
      this.setState({
        number: number
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var scrollTop = 0;
      var Threshold = 0;
      var scrollStyle = {
        height: '550px'
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          className: "formationbox",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: "SinaPart",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsSwitch, {
              className: "s1",
              color: "blue",
              checked: this.state.run,
              onChange: this.runChange
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsButton, {
              disabled: this.state.run,
              shape: "round",
              bdColor: "#00FFFF",
              bgColor: "#00FFFF",
              onClick: this.openmonitor,
              children: this.state.keyword === '' ? "New monitor" : "Edit monitor"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "topic",
              children: ["Topic: ", this.state.keyword]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "r_time",
              children: ["Refresh Interval: ", this.state.time]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "r_time",
              children: ["Limited Number: ", this.state.numbertxt]
            }), this.state.run && !this.state.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "s2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                style: "width:25px; height:25px;",
                onClick: this.reloadData,
                src: _static_reloadIcon_png__WEBPACK_IMPORTED_MODULE_3__
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          children: !this.state.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.ScrollView, {
            className: "ScrollView",
            scrollY: true,
            scrollWithAnimation: true,
            scrollTop: scrollTop,
            style: scrollStyle,
            lowerThreshold: Threshold,
            upperThreshold: Threshold
            // onScrollToUpper={this.reloadData}
            ,

            children: [this.state.firstuse && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "first_text",
              children: "Welcome to Acadamic monitor!"
            }), this.state.order === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              children: this.state.content && this.state.content.map(function (news) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_GoogleItem_GoogleItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  news: news,
                  NewsonClick: _this3.open_url_msg,
                  pdfClick: _this3.pdfcopylink
                }, news.id);
              })
            }), this.state.order === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              children: this.state.content && this.state.content.map(function (news) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_BingItem_BingItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  news: news,
                  NewsonClick: _this3.open_url_msg
                }, news.id);
              })
            }), this.state.order === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              children: this.state.content && this.state.content.map(function (news) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_AcademicItem_AcademicItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  news: news,
                  NewsonClick: _this3.open_url_msg,
                  pdfClick: _this3.pdfcopylink
                }, news.id);
              })
            })]
          })
        }), this.state.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsLoading, {
          className: "loadingstyle",
          color: "blue",
          size: "100"
        }), this.state.monitorcheck && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
          className: "reply-input-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Picker, {
            mode: "selector",
            range: selector,
            onChange: this.onOrderChange,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "t1",
              children: [" ", selector[this.state.order], " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsIcon, {
                type: "pull-down-big",
                size: 20
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: "t2",
            children: "Topic:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Input, {
            className: "input1",
            ref: function ref(c) {
              return _this3.keyWordElement = c;
            },
            placeholder: this.state.keyword
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: "t4",
            children: "Limited numbers:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsStepper, {
            min: 0,
            max: 100,
            step: 1,
            value: this.state.number,
            onChange: this.handleChange3.bind(this)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: "t3",
            children: "Refresh Interval:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
            children: "Minutes:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsStepper, {
            min: 0,
            max: 60,
            step: 1,
            value: this.state.minutes,
            onChange: this.handleChange.bind(this)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
            children: "Hours:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsStepper, {
            min: 0,
            max: 60,
            step: 1,
            value: this.state.hours,
            onChange: this.handleChange1.bind(this)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
            children: "Days:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsStepper, {
            min: 0,
            max: 365,
            step: 1,
            value: this.state.days,
            onChange: this.handleChange2.bind(this)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsButton, {
            className: "b1",
            onClick: this.closemonitor,
            shape: "round",
            bdColor: "#00FFFF",
            bgColor: "#00FFFF",
            children: "Close"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsButton, {
            className: "b2",
            shape: "round",
            bdColor: "#00FFFF",
            bgColor: "#00FFFF",
            onClick: this.submitmonitor,
            children: "Submit"
          })]
        })]
      });
    }
  }]);
  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/AcademicItem/AcademicItem.jsx":
/*!******************************************************!*\
  !*** ./src/components/AcademicItem/AcademicItem.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AcademicItem; }
/* harmony export */ });
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_GoogleItem_GoogleItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/GoogleItem/GoogleItem */ "./src/components/GoogleItem/GoogleItem.jsx");
/* harmony import */ var _components_BingItem_BingItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BingItem/BingItem */ "./src/components/BingItem/BingItem.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);













var AcademicItem = /*#__PURE__*/function (_Component) {
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(AcademicItem, _Component);
  var _super = (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(AcademicItem);
  function AcademicItem() {
    var _this;
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AcademicItem);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "NewsClick", function () {
      var _this$props = _this.props,
        NewsonClick = _this$props.NewsonClick,
        news = _this$props.news;
      NewsonClick && NewsonClick(news);
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "pdfClick", function () {
      var _this$props2 = _this.props,
        pdfClick = _this$props2.pdfClick,
        news = _this$props2.news;
      pdfClick && pdfClick(news);
    });
    return _this;
  }
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__["default"])(AcademicItem, [{
    key: "render",
    value: function render() {
      var news = this.props.news;
      console.log();
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        children: [news.id.charAt(0) == 'g' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_GoogleItem_GoogleItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
            news: news,
            NewsonClick: this.NewsClick,
            pdfClick: this.pdfClick
          }, news.id)
        }), news.id.charAt(0) == 'b' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_BingItem_BingItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
            news: news,
            NewsonClick: this.NewsClick
          }, news.id)
        })]
      });
    }
  }]);
  return AcademicItem;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/BingItem/BingItem.jsx":
/*!**********************************************!*\
  !*** ./src/components/BingItem/BingItem.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewsItem; }
/* harmony export */ });
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);











var NewsItem = /*#__PURE__*/function (_Component) {
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NewsItem, _Component);
  var _super = (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(NewsItem);
  function NewsItem() {
    var _this;
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NewsItem);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "NewsClick", function () {
      var _this$props = _this.props,
        NewsonClick = _this$props.NewsonClick,
        news = _this$props.news;
      NewsonClick && NewsonClick(news);
    });
    return _this;
  }
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(NewsItem, [{
    key: "render",
    value: function render() {
      var news = this.props.news;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "NewsItem",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "GoogleupPart",
          onClick: this.NewsClick,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "News-title",
            style: "word-break:normal;\r word-wrap:break-word;\r display:-webkit-box;\r -webkit-line-clamp:3;\r overflow:hidden;\r -webkit-box-orient: vertical",
            children: news.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "News-description",
            children: news.content
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "News-data",
            children: "Bing Scholar"
          })]
        })
      });
    }
  }]);
  return NewsItem;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/GoogleItem/GoogleItem.jsx":
/*!**************************************************!*\
  !*** ./src/components/GoogleItem/GoogleItem.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewsItem; }
/* harmony export */ });
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);











var NewsItem = /*#__PURE__*/function (_Component) {
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NewsItem, _Component);
  var _super = (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(NewsItem);
  function NewsItem() {
    var _this;
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NewsItem);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "NewsClick", function () {
      var _this$props = _this.props,
        NewsonClick = _this$props.NewsonClick,
        news = _this$props.news;
      NewsonClick && NewsonClick(news);
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "pdfClick", function () {
      var _this$props2 = _this.props,
        pdfClick = _this$props2.pdfClick,
        news = _this$props2.news;
      pdfClick && pdfClick(news);
    });
    return _this;
  }
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(NewsItem, [{
    key: "render",
    value: function render() {
      var news = this.props.news;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "NewsItem",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "GoogleupPart",
          onClick: this.NewsClick,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "News-title",
            style: "word-break:normal;\r word-wrap:break-word;\r display:-webkit-box;\r -webkit-line-clamp:2;\r overflow:hidden;\r -webkit-box-orient: vertical",
            children: news.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "News-description",
            children: news.content
          })]
        }), news.pdf && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Icon, {
            type: "download",
            news: news,
            onClick: this.pdfClick
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "News-data",
          children: "Google Scholar"
        })]
      });
    }
  }]);
  return NewsItem;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/academic/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/academic/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/academic/index.jsx");


var config = {"navigationBarTitleText":"Academic"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/academic/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/static/reloadIcon.png":
/*!***********************************!*\
  !*** ./src/static/reloadIcon.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/reloadIcon.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/academic/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map