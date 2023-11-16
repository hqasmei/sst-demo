"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+util-config-provider@2.0.0";
exports.ids = ["vendor-chunks/@smithy+util-config-provider@2.0.0"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+util-config-provider@2.0.0/node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+util-config-provider@2.0.0/node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectorType: () => (/* binding */ SelectorType),\n/* harmony export */   booleanSelector: () => (/* binding */ booleanSelector)\n/* harmony export */ });\nvar SelectorType;\n(function(SelectorType) {\n    SelectorType[\"ENV\"] = \"env\";\n    SelectorType[\"CONFIG\"] = \"shared config entry\";\n})(SelectorType || (SelectorType = {}));\nconst booleanSelector = (obj, key, type)=>{\n    if (!(key in obj)) return undefined;\n    if (obj[key] === \"true\") return true;\n    if (obj[key] === \"false\") return false;\n    throw new Error(`Cannot load ${type} \"${key}\". Expected \"true\" or \"false\", got ${obj[key]}.`);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1jb25maWctcHJvdmlkZXJAMi4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1jb25maWctcHJvdmlkZXIvZGlzdC1lcy9ib29sZWFuU2VsZWN0b3IuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFJQSxhQUFhO0FBQ3ZCLFVBQVVBLFlBQVk7SUFDbkJBLFlBQVksQ0FBQyxNQUFNLEdBQUc7SUFDdEJBLFlBQVksQ0FBQyxTQUFTLEdBQUc7QUFDN0IsR0FBR0EsZ0JBQWlCQSxDQUFBQSxlQUFlLENBQUM7QUFDN0IsTUFBTUMsa0JBQWtCLENBQUNDLEtBQUtDLEtBQUtDO0lBQ3RDLElBQUksQ0FBRUQsQ0FBQUEsT0FBT0QsR0FBRSxHQUNYLE9BQU9HO0lBQ1gsSUFBSUgsR0FBRyxDQUFDQyxJQUFJLEtBQUssUUFDYixPQUFPO0lBQ1gsSUFBSUQsR0FBRyxDQUFDQyxJQUFJLEtBQUssU0FDYixPQUFPO0lBQ1gsTUFBTSxJQUFJRyxNQUFNLENBQUMsWUFBWSxFQUFFRixLQUFLLEVBQUUsRUFBRUQsSUFBSSxtQ0FBbUMsRUFBRUQsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2hHLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1jb25maWctcHJvdmlkZXJAMi4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1jb25maWctcHJvdmlkZXIvZGlzdC1lcy9ib29sZWFuU2VsZWN0b3IuanM/MTMxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIFNlbGVjdG9yVHlwZTtcbihmdW5jdGlvbiAoU2VsZWN0b3JUeXBlKSB7XG4gICAgU2VsZWN0b3JUeXBlW1wiRU5WXCJdID0gXCJlbnZcIjtcbiAgICBTZWxlY3RvclR5cGVbXCJDT05GSUdcIl0gPSBcInNoYXJlZCBjb25maWcgZW50cnlcIjtcbn0pKFNlbGVjdG9yVHlwZSB8fCAoU2VsZWN0b3JUeXBlID0ge30pKTtcbmV4cG9ydCBjb25zdCBib29sZWFuU2VsZWN0b3IgPSAob2JqLCBrZXksIHR5cGUpID0+IHtcbiAgICBpZiAoIShrZXkgaW4gb2JqKSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAob2JqW2tleV0gPT09IFwidHJ1ZVwiKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAob2JqW2tleV0gPT09IFwiZmFsc2VcIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGxvYWQgJHt0eXBlfSBcIiR7a2V5fVwiLiBFeHBlY3RlZCBcInRydWVcIiBvciBcImZhbHNlXCIsIGdvdCAke29ialtrZXldfS5gKTtcbn07XG4iXSwibmFtZXMiOlsiU2VsZWN0b3JUeXBlIiwiYm9vbGVhblNlbGVjdG9yIiwib2JqIiwia2V5IiwidHlwZSIsInVuZGVmaW5lZCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+util-config-provider@2.0.0/node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+util-config-provider@2.0.0/node_modules/@smithy/util-config-provider/dist-es/index.js":
/*!******************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+util-config-provider@2.0.0/node_modules/@smithy/util-config-provider/dist-es/index.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectorType: () => (/* reexport safe */ _booleanSelector__WEBPACK_IMPORTED_MODULE_0__.SelectorType),\n/* harmony export */   booleanSelector: () => (/* reexport safe */ _booleanSelector__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)\n/* harmony export */ });\n/* harmony import */ var _booleanSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booleanSelector */ \"(rsc)/../../node_modules/.pnpm/@smithy+util-config-provider@2.0.0/node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1jb25maWctcHJvdmlkZXJAMi4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1jb25maWctcHJvdmlkZXIvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1jb25maWctcHJvdmlkZXJAMi4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1jb25maWctcHJvdmlkZXIvZGlzdC1lcy9pbmRleC5qcz80NzBkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2Jvb2xlYW5TZWxlY3RvclwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+util-config-provider@2.0.0/node_modules/@smithy/util-config-provider/dist-es/index.js\n");

/***/ })

};
;