"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+util-uri-escape@2.0.0";
exports.ids = ["vendor-chunks/@smithy+util-uri-escape@2.0.0"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+util-uri-escape@2.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js":
/*!******************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+util-uri-escape@2.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeUriPath: () => (/* binding */ escapeUriPath)\n/* harmony export */ });\n/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ \"(rsc)/../../node_modules/.pnpm/@smithy+util-uri-escape@2.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js\");\n\nconst escapeUriPath = (uri)=>uri.split(\"/\").map(_escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri).join(\"/\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC11cmktZXNjYXBlQDIuMC4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtdXJpLWVzY2FwZS9kaXN0LWVzL2VzY2FwZS11cmktcGF0aC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QztBQUNsQyxNQUFNQyxnQkFBZ0IsQ0FBQ0MsTUFBUUEsSUFBSUMsS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQ0osa0RBQVNBLEVBQUVLLElBQUksQ0FBQyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtdXJpLWVzY2FwZUAyLjAuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXVyaS1lc2NhcGUvZGlzdC1lcy9lc2NhcGUtdXJpLXBhdGguanM/NTcxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlc2NhcGVVcmkgfSBmcm9tIFwiLi9lc2NhcGUtdXJpXCI7XG5leHBvcnQgY29uc3QgZXNjYXBlVXJpUGF0aCA9ICh1cmkpID0+IHVyaS5zcGxpdChcIi9cIikubWFwKGVzY2FwZVVyaSkuam9pbihcIi9cIik7XG4iXSwibmFtZXMiOlsiZXNjYXBlVXJpIiwiZXNjYXBlVXJpUGF0aCIsInVyaSIsInNwbGl0IiwibWFwIiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+util-uri-escape@2.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+util-uri-escape@2.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js":
/*!*************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+util-uri-escape@2.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeUri: () => (/* binding */ escapeUri)\n/* harmony export */ });\nconst escapeUri = (uri)=>encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);\nconst hexEncode = (c)=>`%${c.charCodeAt(0).toString(16).toUpperCase()}`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC11cmktZXNjYXBlQDIuMC4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtdXJpLWVzY2FwZS9kaXN0LWVzL2VzY2FwZS11cmkuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFlBQVksQ0FBQ0MsTUFBUUMsbUJBQW1CRCxLQUFLRSxPQUFPLENBQUMsWUFBWUMsV0FBVztBQUN6RixNQUFNQSxZQUFZLENBQUNDLElBQU0sQ0FBQyxDQUFDLEVBQUVBLEVBQUVDLFVBQVUsQ0FBQyxHQUFHQyxRQUFRLENBQUMsSUFBSUMsV0FBVyxHQUFHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC11cmktZXNjYXBlQDIuMC4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtdXJpLWVzY2FwZS9kaXN0LWVzL2VzY2FwZS11cmkuanM/YzRiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXNjYXBlVXJpID0gKHVyaSkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHVyaSkucmVwbGFjZSgvWyEnKCkqXS9nLCBoZXhFbmNvZGUpO1xuY29uc3QgaGV4RW5jb2RlID0gKGMpID0+IGAlJHtjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YDtcbiJdLCJuYW1lcyI6WyJlc2NhcGVVcmkiLCJ1cmkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiaGV4RW5jb2RlIiwiYyIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+util-uri-escape@2.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+util-uri-escape@2.0.0/node_modules/@smithy/util-uri-escape/dist-es/index.js":
/*!********************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+util-uri-escape@2.0.0/node_modules/@smithy/util-uri-escape/dist-es/index.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeUri: () => (/* reexport safe */ _escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri),\n/* harmony export */   escapeUriPath: () => (/* reexport safe */ _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__.escapeUriPath)\n/* harmony export */ });\n/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ \"(rsc)/../../node_modules/.pnpm/@smithy+util-uri-escape@2.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js\");\n/* harmony import */ var _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escape-uri-path */ \"(rsc)/../../node_modules/.pnpm/@smithy+util-uri-escape@2.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC11cmktZXNjYXBlQDIuMC4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtdXJpLWVzY2FwZS9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkI7QUFDSyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXVyaS1lc2NhcGVAMi4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11cmktZXNjYXBlL2Rpc3QtZXMvaW5kZXguanM/ODM0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9lc2NhcGUtdXJpXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9lc2NhcGUtdXJpLXBhdGhcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+util-uri-escape@2.0.0/node_modules/@smithy/util-uri-escape/dist-es/index.js\n");

/***/ })

};
;