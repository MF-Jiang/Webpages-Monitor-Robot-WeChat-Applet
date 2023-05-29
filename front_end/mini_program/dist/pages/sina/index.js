"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/sina/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/sina/index.jsx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/sina/index.jsx ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ossaui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ossaui */ "./node_modules/ossaui/dist/index.esm.js");
/* harmony import */ var tarojs_router_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tarojs-router-next */ "webpack/container/remote/tarojs-router-next");
/* harmony import */ var tarojs_router_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tarojs_router_next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_reload_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/reload.png */ "./src/static/reload.png");
/* harmony import */ var _components_SinanewsItem_NewsItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SinanewsItem/NewsItem */ "./src/components/SinanewsItem/NewsItem.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);


















var Index = /*#__PURE__*/function (_Component) {
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _Component);
  var _super = (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Index);
  function Index() {
    var _this;
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this, Index);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "state", {
      monitorcheck: false,
      keyword: '',
      minutes: 0,
      hours: 0,
      days: 0,
      time: '',
      run: false,
      firstuse: true,
      content: [],
      loading: false
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "openmonitor", function () {
      _this.setState({
        monitorcheck: true
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "closemonitor", function () {
      if (_this.state.keyword === '' && _this.keyWordElement.value === '') {
        _this.setState({
          minutes: 0,
          hours: 0,
          days: 0
        });
      }
      _this.setState({
        monitorcheck: false
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "submitmonitor", function () {
      var _this$state = _this.state,
        minutes = _this$state.minutes,
        hours = _this$state.hours,
        days = _this$state.days;
      if (days == 0 && hours == 0 && minutes == 0 || _this.keyWordElement.value == '' && _this.state.keyword == '') {
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
      var d = days == 0 ? '' : "".concat(days, "d");
      var h = hours == 0 ? '' : "".concat(hours, "h");
      var m = minutes == 0 ? '' : "".concat(minutes, "mins");
      var new_time = d + h + m;
      _this.setState({
        keyword: _this.keyWordElement.value,
        time: new_time,
        run: true,
        monitorcheck: false,
        firstuse: false,
        loading: true
      });
      var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('Cookies');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
        url: 'http://127.0.0.1:5000/api/sina/start',
        method: "POST",
        header: {
          'content-type': 'application/json',
          'Cookie': c
        },
        data: {
          "start": true,
          "topic": _this.keyWordElement.value,
          "days": _this.state.days,
          "hours": _this.state.hours,
          "minutes": _this.state.minutes
        },
        success: function success() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
            url: 'http://127.0.0.1:5000/api/sina/extract',
            method: "POST",
            header: {
              'content-type': 'application/json',
              'Cookie': c
            },
            success: function success(res) {
              _this.setState({
                content: _this.state.content.concat(res.data.info),
                loading: false
              });
              console.log(res.data.info);
            }
          });
        }
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "runChange", function () {
      if (_this.state.keyword == '' || _this.state.time == '') {
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
            url: 'http://127.0.0.1:5000/api/sina/start',
            method: "POST",
            header: {
              'content-type': 'application/json',
              'Cookie': c
            },
            data: {
              "start": false,
              "topic": _this.state.keyword,
              "days": _this.state.days,
              "hours": _this.state.hours,
              "minutes": _this.state.minutes
            }
          });
        } else {
          //现在是不run,重启run
          _this.setState({
            loading: true
          });
          var _c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('Cookies');
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
            url: 'http://127.0.0.1:5000/api/sina/start',
            method: "POST",
            header: {
              'content-type': 'application/json',
              'Cookie': _c
            },
            data: {
              "start": true,
              "topic": _this.state.keyword,
              "days": _this.state.days,
              "hours": _this.state.hours,
              "minutes": _this.state.minutes
            },
            success: function success() {
              var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('Cookies');
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
                url: 'http://127.0.0.1:5000/api/sina/extract',
                method: "POST",
                header: {
                  'content-type': 'application/json',
                  'Cookie': c
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
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "newshandleClick", function (news) {
      var id = news.id,
        url = news.url,
        news_content = news.news_content,
        title = news.title,
        media = news.media,
        upload_time = news.upload_time;
      tarojs_router_next__WEBPACK_IMPORTED_MODULE_3__.Router.navigate({
        url: '/pages/newsinfo/news'
      }, {
        // url 参数，自动拼接
        params: {
          id: id,
          url: url,
          title: title,
          upload_time: upload_time,
          media: media
        },
        // 可携带其他数据，任意类型
        data: news_content
      });
    });
    (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "reloadData", function () {
      if (_this.state.run === false) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
          title: 'Tips',
          content: 'Please enable monitoring first',
          showCancel: false
        });
        return;
      }
      _this.setState({
        loading: true
      });
      console.log("pull down");
      var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('Cookies');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
        url: 'http://127.0.0.1:5000/api/sina/extract',
        method: "POST",
        header: {
          'content-type': 'application/json',
          'Cookie': c
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
    return _this;
  }
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var bi = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('State_sina');
      var c = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('Cookies');
      console.log(bi);
      //this.setState({...bi})
      if (bi.run === true) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
          url: 'http://127.0.0.1:5000/api/sina/extract',
          header: {
            'content-type': 'application/json',
            // 默认值
            'Cookie': c
          },
          method: "POST",
          success: function success(res) {
            var new_content = [].concat((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(res.data.info), (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(bi.content));
            _this2.setState((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__["default"])((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__["default"])({}, bi), {}, {
              content: new_content,
              isLoading: false
            }));
          }
        });
      } else {
        this.setState((0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_14__["default"])({}, bi));
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('State_sina', this.state);
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
    key: "render",
    value: function render() {
      var _this3 = this;
      var scrollTop = 0;
      var Threshold = 0;
      var scrollStyle = {
        height: '600px'
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "formationbox",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: "SinaPart",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsSwitch, {
              className: "s1",
              color: "blue",
              checked: this.state.run,
              onChange: this.runChange
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsButton, {
              disabled: this.state.run,
              shape: "round",
              bdColor: "#00FFFF",
              bgColor: "#00FFFF",
              onClick: this.openmonitor,
              children: this.state.keyword === '' ? "New monitor" : "Edit monitor"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "topic",
              children: ["Topic: ", this.state.keyword]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "r_time",
              children: ["Refresh Interval: ", this.state.time]
            }), this.state.run && !this.state.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "s2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                style: "width:25px; height:25px;",
                onClick: this.reloadData,
                src: _static_reload_png__WEBPACK_IMPORTED_MODULE_4__
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          children: !this.state.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.ScrollView, {
            className: "ScrollView",
            scrollY: true,
            scrollWithAnimation: true,
            scrollTop: scrollTop,
            style: scrollStyle,
            lowerThreshold: Threshold,
            upperThreshold: Threshold
            // onScrollToUpper={this.reloadData}
            ,

            children: [this.state.firstuse && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "first_text",
              children: "Welcome to Sina news monitor!"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              children: this.state.content && this.state.content.map(function (news) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_SinanewsItem_NewsItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  news: news,
                  NewsonClick: _this3.newshandleClick
                }, news.id);
              })
            })]
          })
        }), this.state.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsLoading, {
          className: "loadingstyle",
          color: "blue",
          size: "100"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Picker, {
          mode: "selector",
          onChange: this.onOrderChange
        }), this.state.monitorcheck && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "reply-input-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: "t1",
            children: "Sina"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: "t2",
            children: "Topic:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Input, {
            className: "input1",
            ref: function ref(c) {
              return _this3.keyWordElement = c;
            },
            placeholder: this.state.keyword
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: "t3",
            children: "Refresh Interval:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
            children: "Minutes:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsStepper, {
            min: 0,
            max: 60,
            step: 1,
            value: this.state.minutes,
            onChange: this.handleChange.bind(this)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
            children: "Hours:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsStepper, {
            min: 0,
            max: 60,
            step: 1,
            value: this.state.hours,
            onChange: this.handleChange1.bind(this)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
            children: "Days:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsStepper, {
            min: 0,
            max: 365,
            step: 1,
            value: this.state.days,
            onChange: this.handleChange2.bind(this)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsButton, {
            className: "b1",
            onClick: this.closemonitor,
            shape: "round",
            bdColor: "#00FFFF",
            bgColor: "#00FFFF",
            children: "Close"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ossaui__WEBPACK_IMPORTED_MODULE_2__.OsButton, {
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

/***/ "./src/components/SinanewsItem/NewsItem.jsx":
/*!**************************************************!*\
  !*** ./src/components/SinanewsItem/NewsItem.jsx ***!
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
    return _this;
  }
  (0,_Users_mayuhao_taro_bilibili_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(NewsItem, [{
    key: "render",
    value: function render() {
      var news = this.props.news;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "NewsItem",
        onClick: this.NewsClick,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "News-title",
          style: "overflow:hidden; white-space:nowrap; text-overflow:ellipsis",
          children: news.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "News-description",
          style: "overflow:hidden; white-space:nowrap; text-overflow:ellipsis",
          children: news.news_content
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "News-data",
          children: news.media + " " + news.upload_time
        })]
      });
    }
  }]);
  return NewsItem;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/sina/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/sina/index.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/sina/index.jsx");


var config = {"navigationBarTitleText":"Sina News"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/sina/index', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/sina/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map