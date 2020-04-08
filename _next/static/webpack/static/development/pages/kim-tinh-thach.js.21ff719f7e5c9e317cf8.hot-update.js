webpackHotUpdate("static\\development\\pages\\kim-tinh-thach.js",{

/***/ "./kim-tinh-thach.js":
/*!***************************!*\
  !*** ./kim-tinh-thach.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

// current: 23
// next: 30
// 23-30
var TINH_THONG_TRANG_BI_METADATA = [{
  from: 2,
  to: 10,
  quantityPerLevel: 1
}, {
  from: 11,
  to: 20,
  quantityPerLevel: 6
}, {
  from: 21,
  to: 30,
  quantityPerLevel: 12
}, {
  from: 31,
  to: 40,
  quantityPerLevel: 14
}, {
  from: 41,
  to: 50,
  quantityPerLevel: 16
}, {
  from: 51,
  to: 60,
  quantityPerLevel: 18
}, {
  from: 61,
  to: 70,
  quantityPerLevel: 20
}, {
  from: 71,
  to: 80,
  quantityPerLevel: 22
}, {
  from: 81,
  to: 90,
  quantityPerLevel: 24
}, {
  from: 91,
  to: 100,
  quantityPerLevel: 25
}];

function findQuantityPerLevel(level) {
  var quantity = 0;

  for (var i = 0; i < TINH_THONG_TRANG_BI_METADATA.length; i++) {
    var item = TINH_THONG_TRANG_BI_METADATA[i];

    if (level >= item.from && level <= item.to) {
      quantity = item.quantityPerLevel;
      break;
    }
  }

  return quantity;
}

function calculateKimTinhThach(currentTinhThongLevel, targetTinhThongLevel) {
  var totalQuantity = 0;
  currentTinhThongLevel += 1;

  while (currentTinhThongLevel <= targetTinhThongLevel) {
    totalQuantity += findQuantityPerLevel(currentTinhThongLevel);
    currentTinhThongLevel += 1;
  }

  return totalQuantity;
}

if (__webpack_require__.c[__webpack_require__.s] === module) {
  var s = calculateKimTinhThach(70, 100) + calculateKimTinhThach(70, 100) + calculateKimTinhThach(57, 100) + calculateKimTinhThach(57, 100) + calculateKimTinhThach(71, 100) + calculateKimTinhThach(71, 100) + calculateKimTinhThach(68, 100) + calculateKimTinhThach(84, 100);
  console.log(s);
}

module.exports = {
  calculateKimTinhThach: calculateKimTinhThach
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=kim-tinh-thach.js.21ff719f7e5c9e317cf8.hot-update.js.map