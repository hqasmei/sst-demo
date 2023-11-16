"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+middleware-content-length@2.0.15";
exports.ids = ["vendor-chunks/@smithy+middleware-content-length@2.0.15"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+middleware-content-length@2.0.15/node_modules/@smithy/middleware-content-length/dist-es/index.js":
/*!*****************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+middleware-content-length@2.0.15/node_modules/@smithy/middleware-content-length/dist-es/index.js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contentLengthMiddleware: () => (/* binding */ contentLengthMiddleware),\n/* harmony export */   contentLengthMiddlewareOptions: () => (/* binding */ contentLengthMiddlewareOptions),\n/* harmony export */   getContentLengthPlugin: () => (/* binding */ getContentLengthPlugin)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"(rsc)/../../node_modules/.pnpm/@smithy+protocol-http@3.0.9/node_modules/@smithy/protocol-http/dist-es/index.js\");\n\nconst CONTENT_LENGTH_HEADER = \"content-length\";\nfunction contentLengthMiddleware(bodyLengthChecker) {\n    return (next)=>async (args)=>{\n            const request = args.request;\n            if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {\n                const { body, headers } = request;\n                if (body && Object.keys(headers).map((str)=>str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {\n                    try {\n                        const length = bodyLengthChecker(body);\n                        request.headers = {\n                            ...request.headers,\n                            [CONTENT_LENGTH_HEADER]: String(length)\n                        };\n                    } catch (error) {}\n                }\n            }\n            return next({\n                ...args,\n                request\n            });\n        };\n}\nconst contentLengthMiddlewareOptions = {\n    step: \"build\",\n    tags: [\n        \"SET_CONTENT_LENGTH\",\n        \"CONTENT_LENGTH\"\n    ],\n    name: \"contentLengthMiddleware\",\n    override: true\n};\nconst getContentLengthPlugin = (options)=>({\n        applyToStack: (clientStack)=>{\n            clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);\n        }\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrbWlkZGxld2FyZS1jb250ZW50LWxlbmd0aEAyLjAuMTUvbm9kZV9tb2R1bGVzL0BzbWl0aHkvbWlkZGxld2FyZS1jb250ZW50LWxlbmd0aC9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0Q7QUFDcEQsTUFBTUMsd0JBQXdCO0FBQ3ZCLFNBQVNDLHdCQUF3QkMsaUJBQWlCO0lBQ3JELE9BQU8sQ0FBQ0MsT0FBUyxPQUFPQztZQUNwQixNQUFNQyxVQUFVRCxLQUFLQyxPQUFPO1lBQzVCLElBQUlOLDhEQUFXQSxDQUFDTyxVQUFVLENBQUNELFVBQVU7Z0JBQ2pDLE1BQU0sRUFBRUUsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR0g7Z0JBQzFCLElBQUlFLFFBQ0FFLE9BQU9DLElBQUksQ0FBQ0YsU0FDUEcsR0FBRyxDQUFDLENBQUNDLE1BQVFBLElBQUlDLFdBQVcsSUFDNUJDLE9BQU8sQ0FBQ2QsMkJBQTJCLENBQUMsR0FBRztvQkFDNUMsSUFBSTt3QkFDQSxNQUFNZSxTQUFTYixrQkFBa0JLO3dCQUNqQ0YsUUFBUUcsT0FBTyxHQUFHOzRCQUNkLEdBQUdILFFBQVFHLE9BQU87NEJBQ2xCLENBQUNSLHNCQUFzQixFQUFFZ0IsT0FBT0Q7d0JBQ3BDO29CQUNKLEVBQ0EsT0FBT0UsT0FBTyxDQUNkO2dCQUNKO1lBQ0o7WUFDQSxPQUFPZCxLQUFLO2dCQUNSLEdBQUdDLElBQUk7Z0JBQ1BDO1lBQ0o7UUFDSjtBQUNKO0FBQ08sTUFBTWEsaUNBQWlDO0lBQzFDQyxNQUFNO0lBQ05DLE1BQU07UUFBQztRQUFzQjtLQUFpQjtJQUM5Q0MsTUFBTTtJQUNOQyxVQUFVO0FBQ2QsRUFBRTtBQUNLLE1BQU1DLHlCQUF5QixDQUFDQyxVQUFhO1FBQ2hEQyxjQUFjLENBQUNDO1lBQ1hBLFlBQVlDLEdBQUcsQ0FBQzFCLHdCQUF3QnVCLFFBQVF0QixpQkFBaUIsR0FBR2dCO1FBQ3hFO0lBQ0osR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSttaWRkbGV3YXJlLWNvbnRlbnQtbGVuZ3RoQDIuMC4xNS9ub2RlX21vZHVsZXMvQHNtaXRoeS9taWRkbGV3YXJlLWNvbnRlbnQtbGVuZ3RoL2Rpc3QtZXMvaW5kZXguanM/Y2FmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAc21pdGh5L3Byb3RvY29sLWh0dHBcIjtcbmNvbnN0IENPTlRFTlRfTEVOR1RIX0hFQURFUiA9IFwiY29udGVudC1sZW5ndGhcIjtcbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50TGVuZ3RoTWlkZGxld2FyZShib2R5TGVuZ3RoQ2hlY2tlcikge1xuICAgIHJldHVybiAobmV4dCkgPT4gYXN5bmMgKGFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGFyZ3MucmVxdWVzdDtcbiAgICAgICAgaWYgKEh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UocmVxdWVzdCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYm9keSwgaGVhZGVycyB9ID0gcmVxdWVzdDtcbiAgICAgICAgICAgIGlmIChib2R5ICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaGVhZGVycylcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3RyKSA9PiBzdHIudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoQ09OVEVOVF9MRU5HVEhfSEVBREVSKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBib2R5TGVuZ3RoQ2hlY2tlcihib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVxdWVzdC5oZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgW0NPTlRFTlRfTEVOR1RIX0hFQURFUl06IFN0cmluZyhsZW5ndGgpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHQoe1xuICAgICAgICAgICAgLi4uYXJncyxcbiAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnQgY29uc3QgY29udGVudExlbmd0aE1pZGRsZXdhcmVPcHRpb25zID0ge1xuICAgIHN0ZXA6IFwiYnVpbGRcIixcbiAgICB0YWdzOiBbXCJTRVRfQ09OVEVOVF9MRU5HVEhcIiwgXCJDT05URU5UX0xFTkdUSFwiXSxcbiAgICBuYW1lOiBcImNvbnRlbnRMZW5ndGhNaWRkbGV3YXJlXCIsXG4gICAgb3ZlcnJpZGU6IHRydWUsXG59O1xuZXhwb3J0IGNvbnN0IGdldENvbnRlbnRMZW5ndGhQbHVnaW4gPSAob3B0aW9ucykgPT4gKHtcbiAgICBhcHBseVRvU3RhY2s6IChjbGllbnRTdGFjaykgPT4ge1xuICAgICAgICBjbGllbnRTdGFjay5hZGQoY29udGVudExlbmd0aE1pZGRsZXdhcmUob3B0aW9ucy5ib2R5TGVuZ3RoQ2hlY2tlciksIGNvbnRlbnRMZW5ndGhNaWRkbGV3YXJlT3B0aW9ucyk7XG4gICAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIkh0dHBSZXF1ZXN0IiwiQ09OVEVOVF9MRU5HVEhfSEVBREVSIiwiY29udGVudExlbmd0aE1pZGRsZXdhcmUiLCJib2R5TGVuZ3RoQ2hlY2tlciIsIm5leHQiLCJhcmdzIiwicmVxdWVzdCIsImlzSW5zdGFuY2UiLCJib2R5IiwiaGVhZGVycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJzdHIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJsZW5ndGgiLCJTdHJpbmciLCJlcnJvciIsImNvbnRlbnRMZW5ndGhNaWRkbGV3YXJlT3B0aW9ucyIsInN0ZXAiLCJ0YWdzIiwibmFtZSIsIm92ZXJyaWRlIiwiZ2V0Q29udGVudExlbmd0aFBsdWdpbiIsIm9wdGlvbnMiLCJhcHBseVRvU3RhY2siLCJjbGllbnRTdGFjayIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+middleware-content-length@2.0.15/node_modules/@smithy/middleware-content-length/dist-es/index.js\n");

/***/ })

};
;