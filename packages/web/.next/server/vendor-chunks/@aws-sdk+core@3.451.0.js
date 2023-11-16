"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@aws-sdk+core@3.451.0";
exports.ids = ["vendor-chunks/@aws-sdk+core@3.451.0"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/@aws-sdk+core@3.451.0/node_modules/@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@aws-sdk+core@3.451.0/node_modules/@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emitWarningIfUnsupportedVersion: () => (/* binding */ emitWarningIfUnsupportedVersion)\n/* harmony export */ });\nlet warningEmitted = false;\nconst emitWarningIfUnsupportedVersion = (version)=>{\n    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf(\".\"))) < 16) {\n        warningEmitted = true;\n        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will\nno longer support Node.js 14.x on May 1, 2024.\n\nTo continue receiving updates to AWS services, bug fixes, and security\nupdates please upgrade to an active Node.js LTS version.\n\nMore information can be found at: https://a.co/dzr2AJd`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NvcmVAMy40NTEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvY29yZS9kaXN0LWVzL2NsaWVudC9lbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJQSxpQkFBaUI7QUFDZCxNQUFNQyxrQ0FBa0MsQ0FBQ0M7SUFDNUMsSUFBSUEsV0FBVyxDQUFDRixrQkFBa0JHLFNBQVNELFFBQVFFLFNBQVMsQ0FBQyxHQUFHRixRQUFRRyxPQUFPLENBQUMsU0FBUyxJQUFJO1FBQ3pGTCxpQkFBaUI7UUFDakJNLFFBQVFDLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7c0RBTXlCLENBQUM7SUFDbkQ7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkaytjb3JlQDMuNDUxLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NvcmUvZGlzdC1lcy9jbGllbnQvZW1pdFdhcm5pbmdJZlVuc3VwcG9ydGVkVmVyc2lvbi5qcz8xNWY3Il0sInNvdXJjZXNDb250ZW50IjpbImxldCB3YXJuaW5nRW1pdHRlZCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IGVtaXRXYXJuaW5nSWZVbnN1cHBvcnRlZFZlcnNpb24gPSAodmVyc2lvbikgPT4ge1xuICAgIGlmICh2ZXJzaW9uICYmICF3YXJuaW5nRW1pdHRlZCAmJiBwYXJzZUludCh2ZXJzaW9uLnN1YnN0cmluZygxLCB2ZXJzaW9uLmluZGV4T2YoXCIuXCIpKSkgPCAxNikge1xuICAgICAgICB3YXJuaW5nRW1pdHRlZCA9IHRydWU7XG4gICAgICAgIHByb2Nlc3MuZW1pdFdhcm5pbmcoYE5vZGVEZXByZWNhdGlvbldhcm5pbmc6IFRoZSBBV1MgU0RLIGZvciBKYXZhU2NyaXB0ICh2Mykgd2lsbFxubm8gbG9uZ2VyIHN1cHBvcnQgTm9kZS5qcyAxNC54IG9uIE1heSAxLCAyMDI0LlxuXG5UbyBjb250aW51ZSByZWNlaXZpbmcgdXBkYXRlcyB0byBBV1Mgc2VydmljZXMsIGJ1ZyBmaXhlcywgYW5kIHNlY3VyaXR5XG51cGRhdGVzIHBsZWFzZSB1cGdyYWRlIHRvIGFuIGFjdGl2ZSBOb2RlLmpzIExUUyB2ZXJzaW9uLlxuXG5Nb3JlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBhdDogaHR0cHM6Ly9hLmNvL2R6cjJBSmRgKTtcbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbIndhcm5pbmdFbWl0dGVkIiwiZW1pdFdhcm5pbmdJZlVuc3VwcG9ydGVkVmVyc2lvbiIsInZlcnNpb24iLCJwYXJzZUludCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJwcm9jZXNzIiwiZW1pdFdhcm5pbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@aws-sdk+core@3.451.0/node_modules/@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js\n");

/***/ })

};
;