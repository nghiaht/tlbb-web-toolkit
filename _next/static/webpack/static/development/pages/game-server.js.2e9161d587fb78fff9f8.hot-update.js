webpackHotUpdate("static\\development\\pages\\game-server.js",{

/***/ "./pages/game-server.js":
/*!******************************!*\
  !*** ./pages/game-server.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _game_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-server */ "./game-server.js");
/* harmony import */ var _game_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_game_server__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Nghia\\Workspace\\tlbb-tool\\source\\pages\\game-server.js";



var GAME_SERVERS = Object(_game_server__WEBPACK_IMPORTED_MODULE_3__["getServerList"])();

function GameServer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      gameServer = _useState2[0],
      setGameServer = _useState2[1];

  console.log("@@", gameServer);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "GameServer", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    className: "form-control",
    onChange: function onChange(event) {
      return setGameServer(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, GAME_SERVERS.map(function (elem, idx) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, elem);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (GameServer);

/***/ })

})
//# sourceMappingURL=game-server.js.2e9161d587fb78fff9f8.hot-update.js.map