"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+util-base64@2.0.1";
exports.ids = ["vendor-chunks/@smithy+util-base64@2.0.1"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+util-base64@2.0.1/node_modules/@smithy/util-base64/dist-es/fromBase64.js":
/*!*****************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+util-base64@2.0.1/node_modules/@smithy/util-base64/dist-es/fromBase64.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromBase64: () => (/* binding */ fromBase64)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-buffer-from */ \"(rsc)/../../node_modules/.pnpm/@smithy+util-buffer-from@2.0.0/node_modules/@smithy/util-buffer-from/dist-es/index.js\");\n\nconst BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;\nconst fromBase64 = (input)=>{\n    if (input.length * 3 % 4 !== 0) {\n        throw new TypeError(`Incorrect padding on base64 string.`);\n    }\n    if (!BASE64_REGEX.exec(input)) {\n        throw new TypeError(`Invalid base64 string.`);\n    }\n    const buffer = (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(input, \"base64\");\n    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1iYXNlNjRAMi4wLjEvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1iYXNlNjQvZGlzdC1lcy9mcm9tQmFzZTY0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNEO0FBQ3RELE1BQU1DLGVBQWU7QUFDZCxNQUFNQyxhQUFhLENBQUNDO0lBQ3ZCLElBQUksTUFBT0MsTUFBTSxHQUFHLElBQUssTUFBTSxHQUFHO1FBQzlCLE1BQU0sSUFBSUMsVUFBVSxDQUFDLG1DQUFtQyxDQUFDO0lBQzdEO0lBQ0EsSUFBSSxDQUFDSixhQUFhSyxJQUFJLENBQUNILFFBQVE7UUFDM0IsTUFBTSxJQUFJRSxVQUFVLENBQUMsc0JBQXNCLENBQUM7SUFDaEQ7SUFDQSxNQUFNRSxTQUFTUCxvRUFBVUEsQ0FBQ0csT0FBTztJQUNqQyxPQUFPLElBQUlLLFdBQVdELE9BQU9BLE1BQU0sRUFBRUEsT0FBT0UsVUFBVSxFQUFFRixPQUFPRyxVQUFVO0FBQzdFLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1iYXNlNjRAMi4wLjEvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1iYXNlNjQvZGlzdC1lcy9mcm9tQmFzZTY0LmpzP2U2ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbVN0cmluZyB9IGZyb20gXCJAc21pdGh5L3V0aWwtYnVmZmVyLWZyb21cIjtcbmNvbnN0IEJBU0U2NF9SRUdFWCA9IC9eW0EtWmEtejAtOSsvXSo9ezAsMn0kLztcbmV4cG9ydCBjb25zdCBmcm9tQmFzZTY0ID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKChpbnB1dC5sZW5ndGggKiAzKSAlIDQgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW5jb3JyZWN0IHBhZGRpbmcgb24gYmFzZTY0IHN0cmluZy5gKTtcbiAgICB9XG4gICAgaWYgKCFCQVNFNjRfUkVHRVguZXhlYyhpbnB1dCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBiYXNlNjQgc3RyaW5nLmApO1xuICAgIH1cbiAgICBjb25zdCBidWZmZXIgPSBmcm9tU3RyaW5nKGlucHV0LCBcImJhc2U2NFwiKTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLmJ1ZmZlciwgYnVmZmVyLmJ5dGVPZmZzZXQsIGJ1ZmZlci5ieXRlTGVuZ3RoKTtcbn07XG4iXSwibmFtZXMiOlsiZnJvbVN0cmluZyIsIkJBU0U2NF9SRUdFWCIsImZyb21CYXNlNjQiLCJpbnB1dCIsImxlbmd0aCIsIlR5cGVFcnJvciIsImV4ZWMiLCJidWZmZXIiLCJVaW50OEFycmF5IiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+util-base64@2.0.1/node_modules/@smithy/util-base64/dist-es/fromBase64.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+util-base64@2.0.1/node_modules/@smithy/util-base64/dist-es/index.js":
/*!************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+util-base64@2.0.1/node_modules/@smithy/util-base64/dist-es/index.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromBase64: () => (/* reexport safe */ _fromBase64__WEBPACK_IMPORTED_MODULE_0__.fromBase64),\n/* harmony export */   toBase64: () => (/* reexport safe */ _toBase64__WEBPACK_IMPORTED_MODULE_1__.toBase64)\n/* harmony export */ });\n/* harmony import */ var _fromBase64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromBase64 */ \"(rsc)/../../node_modules/.pnpm/@smithy+util-base64@2.0.1/node_modules/@smithy/util-base64/dist-es/fromBase64.js\");\n/* harmony import */ var _toBase64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toBase64 */ \"(rsc)/../../node_modules/.pnpm/@smithy+util-base64@2.0.1/node_modules/@smithy/util-base64/dist-es/toBase64.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1iYXNlNjRAMi4wLjEvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1iYXNlNjQvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1iYXNlNjRAMi4wLjEvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1iYXNlNjQvZGlzdC1lcy9pbmRleC5qcz8wMTYzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2Zyb21CYXNlNjRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RvQmFzZTY0XCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+util-base64@2.0.1/node_modules/@smithy/util-base64/dist-es/index.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+util-base64@2.0.1/node_modules/@smithy/util-base64/dist-es/toBase64.js":
/*!***************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+util-base64@2.0.1/node_modules/@smithy/util-base64/dist-es/toBase64.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toBase64: () => (/* binding */ toBase64)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-buffer-from */ \"(rsc)/../../node_modules/.pnpm/@smithy+util-buffer-from@2.0.0/node_modules/@smithy/util-buffer-from/dist-es/index.js\");\n\nconst toBase64 = (input)=>(0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString(\"base64\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1iYXNlNjRAMi4wLjEvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1iYXNlNjQvZGlzdC1lcy90b0Jhc2U2NC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyRDtBQUNwRCxNQUFNQyxXQUFXLENBQUNDLFFBQVVGLHlFQUFlQSxDQUFDRSxNQUFNQyxNQUFNLEVBQUVELE1BQU1FLFVBQVUsRUFBRUYsTUFBTUcsVUFBVSxFQUFFQyxRQUFRLENBQUMsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLWJhc2U2NEAyLjAuMS9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWJhc2U2NC9kaXN0LWVzL3RvQmFzZTY0LmpzPzIxYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUFycmF5QnVmZmVyIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1idWZmZXItZnJvbVwiO1xuZXhwb3J0IGNvbnN0IHRvQmFzZTY0ID0gKGlucHV0KSA9PiBmcm9tQXJyYXlCdWZmZXIoaW5wdXQuYnVmZmVyLCBpbnB1dC5ieXRlT2Zmc2V0LCBpbnB1dC5ieXRlTGVuZ3RoKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbiJdLCJuYW1lcyI6WyJmcm9tQXJyYXlCdWZmZXIiLCJ0b0Jhc2U2NCIsImlucHV0IiwiYnVmZmVyIiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+util-base64@2.0.1/node_modules/@smithy/util-base64/dist-es/toBase64.js\n");

/***/ })

};
;