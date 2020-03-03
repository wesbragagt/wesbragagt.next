webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_a-function.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_core.js":
false,

/***/ "./node_modules/core-js/library/modules/_ctx.js":
false,

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
false,

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_export.js":
false,

/***/ "./node_modules/core-js/library/modules/_fails.js":
false,

/***/ "./node_modules/core-js/library/modules/_global.js":
false,

/***/ "./node_modules/core-js/library/modules/_has.js":
false,

/***/ "./node_modules/core-js/library/modules/_hide.js":
false,

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
false,

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mac/Desktop/dev/wesbragagt/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Index(_ref) {
  var markdown = _ref.markdown;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "my dope page with md files"));
}

Index.getInitialProps = function () {
  var importAll = function importAll(r) {
    return r.keys().map(function (r) {
      return r["default"];
    });
  };

  var markdownFiles = importAll(__webpack_require__("./posts sync recursive \\.md$"));
  console.log(markdownFiles);
  return {
    markdown: markdownFiles
  };
};

/***/ })

})
//# sourceMappingURL=index.js.00d0cd19ec77a2a4f176.hot-update.js.map