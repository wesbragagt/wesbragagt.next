webpackHotUpdate("static/development/pages/index.js",{

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
  }, markdown.map(function (element) {
    return __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
      source: element,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
}

Index.getInitialProps = function () {
  var importAll = function importAll(r) {
    return r.keys().map(r).map(function (file) {
      return file["default"];
    });
  };

  var markdownFiles = importAll(__webpack_require__("./posts sync recursive \\.md$")).reverse();
  console.log(markdownFiles);
  return {
    markdown: markdownFiles
  };
};

/***/ })

})
//# sourceMappingURL=index.js.067a08d8608c019c1b59.hot-update.js.map