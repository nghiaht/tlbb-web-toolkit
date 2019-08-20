webpackHotUpdate("static\\development\\pages\\bao-thach.js",{

/***/ "./pages/bao-thach.js":
/*!****************************!*\
  !*** ./pages/bao-thach.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _bao_thach__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-thach */ "./bao-thach.js");
/* harmony import */ var _bao_thach__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_bao_thach__WEBPACK_IMPORTED_MODULE_11__);









var _jsxFileName = "C:\\Users\\Nghia\\Workspace\\tlbb-tool\\source\\pages\\bao-thach.js";




var NHTPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(NHTPage, _React$Component);

  function NHTPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, NHTPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(NHTPage).call(this, props));
    _this.state = {
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0,
      q5: 0,
      q6: 0,
      q7: 0,
      q8: 0,
      busy: false,
      result: null
    };
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(NHTPage, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      this.setState({
        busy: true
      });
      var result = {};

      for (var i = 1; i <= 8; i++) {
        var t = Object(_bao_thach__WEBPACK_IMPORTED_MODULE_11__["guess"])({
          q1: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(this.state.q1) || 0,
          q2: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(this.state.q2) || 0,
          q3: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(this.state.q3) || 0,
          q4: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(this.state.q4) || 0,
          q5: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(this.state.q5) || 0,
          q6: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(this.state.q6) || 0,
          q7: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(this.state.q7) || 0,
          q8: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(this.state.q8) || 0,
          targetLevel: i
        });
        if (t[i]) result[i] = t;
      }

      this.setState({
        result: result,
        busy: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          q1 = _this$state.q1,
          q2 = _this$state.q2,
          q3 = _this$state.q3,
          q4 = _this$state.q4,
          q5 = _this$state.q5,
          q6 = _this$state.q6,
          q7 = _this$state.q7,
          q8 = _this$state.q8,
          busy = _this$state.busy,
          result = _this$state.result;
      3;
      var results = result ? _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(result).map(function (level) {
        var resultByLevel = result[level];
        return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(resultByLevel).filter(function (nestedLevel) {
          return resultByLevel[nestedLevel] > 0;
        }).map(function (nestedLevel) {
          return "".concat(resultByLevel[nestedLevel], " C").concat(nestedLevel);
        }).join(", ");
      }) : null;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "B\xE0n t\xEDnh B\u1EA3o Th\u1EA1ch"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "1xC2 = 5xC1"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "1xC2 = 5xC1")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-12 col-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "q1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "C1"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "q1",
        type: "number",
        placeholder: "C1",
        className: "form-control",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-12 col-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "q2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "C2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "q2",
        type: "number",
        placeholder: "C2",
        className: "form-control",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-12 col-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "q3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "C3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "q3",
        type: "number",
        placeholder: "C3",
        className: "form-control",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-12 col-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "q4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "C4"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "q4",
        type: "number",
        placeholder: "C4",
        className: "form-control",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-12 col-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "q5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "C5"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "q5",
        type: "number",
        placeholder: "C5",
        className: "form-control",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-12 col-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "q6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "C6"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "q6",
        type: "number",
        placeholder: "C6",
        className: "form-control",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-12 col-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "q7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "C7"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "q7",
        type: "number",
        placeholder: "C7",
        className: "form-control",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-12 col-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "q8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "C8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        name: "q8",
        type: "number",
        placeholder: "C8",
        className: "form-control",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        className: "btn btn-success",
        disabled: busy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }))), result && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
        className: "mt-4 table table-bordered table-striped",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "C\u1EA5p m\u1EE5c ti\xEAu\\S\u1ED1 l\u01B0\u1EE3ng \u0111\u1EA7u cu\u1ED1i"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "1"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "4"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "5"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "6"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "7"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "8"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(result).map(function (targetLevel) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
          key: "tl".concat(targetLevel),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
          className: "font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        }, targetLevel), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(result[targetLevel]).map(function (nestedLevel) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            key: "tl-".concat(targetLevel, "-").concat(nestedLevel),
            className: result[targetLevel][nestedLevel] ? "font-weight-bold" : "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 211
            },
            __self: this
          }, result[targetLevel][nestedLevel]);
        }));
      }))), results && results.length > 0 && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, results.map(function (line, idx) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, line);
      }))));
    }
  }]);

  return NHTPage;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NHTPage);

/***/ })

})
//# sourceMappingURL=bao-thach.js.59b541737cc10a376543.hot-update.js.map