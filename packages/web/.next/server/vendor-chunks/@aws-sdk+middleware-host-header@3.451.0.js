"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@aws-sdk+middleware-host-header@3.451.0";
exports.ids = ["vendor-chunks/@aws-sdk+middleware-host-header@3.451.0"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/@aws-sdk+middleware-host-header@3.451.0/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@aws-sdk+middleware-host-header@3.451.0/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHostHeaderPlugin: () => (/* binding */ getHostHeaderPlugin),\n/* harmony export */   hostHeaderMiddleware: () => (/* binding */ hostHeaderMiddleware),\n/* harmony export */   hostHeaderMiddlewareOptions: () => (/* binding */ hostHeaderMiddlewareOptions),\n/* harmony export */   resolveHostHeaderConfig: () => (/* binding */ resolveHostHeaderConfig)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"(rsc)/../../node_modules/.pnpm/@smithy+protocol-http@3.0.9/node_modules/@smithy/protocol-http/dist-es/index.js\");\n\nfunction resolveHostHeaderConfig(input) {\n    return input;\n}\nconst hostHeaderMiddleware = (options)=>(next)=>async (args)=>{\n            if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(args.request)) return next(args);\n            const { request } = args;\n            const { handlerProtocol = \"\" } = options.requestHandler.metadata || {};\n            if (handlerProtocol.indexOf(\"h2\") >= 0 && !request.headers[\":authority\"]) {\n                delete request.headers[\"host\"];\n                request.headers[\":authority\"] = request.hostname + (request.port ? \":\" + request.port : \"\");\n            } else if (!request.headers[\"host\"]) {\n                let host = request.hostname;\n                if (request.port != null) host += `:${request.port}`;\n                request.headers[\"host\"] = host;\n            }\n            return next(args);\n        };\nconst hostHeaderMiddlewareOptions = {\n    name: \"hostHeaderMiddleware\",\n    step: \"build\",\n    priority: \"low\",\n    tags: [\n        \"HOST\"\n    ],\n    override: true\n};\nconst getHostHeaderPlugin = (options)=>({\n        applyToStack: (clientStack)=>{\n            clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);\n        }\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK21pZGRsZXdhcmUtaG9zdC1oZWFkZXJAMy40NTEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbWlkZGxld2FyZS1ob3N0LWhlYWRlci9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9EO0FBQzdDLFNBQVNDLHdCQUF3QkMsS0FBSztJQUN6QyxPQUFPQTtBQUNYO0FBQ08sTUFBTUMsdUJBQXVCLENBQUNDLFVBQVksQ0FBQ0MsT0FBUyxPQUFPQztZQUM5RCxJQUFJLENBQUNOLDhEQUFXQSxDQUFDTyxVQUFVLENBQUNELEtBQUtFLE9BQU8sR0FDcEMsT0FBT0gsS0FBS0M7WUFDaEIsTUFBTSxFQUFFRSxPQUFPLEVBQUUsR0FBR0Y7WUFDcEIsTUFBTSxFQUFFRyxrQkFBa0IsRUFBRSxFQUFFLEdBQUdMLFFBQVFNLGNBQWMsQ0FBQ0MsUUFBUSxJQUFJLENBQUM7WUFDckUsSUFBSUYsZ0JBQWdCRyxPQUFPLENBQUMsU0FBUyxLQUFLLENBQUNKLFFBQVFLLE9BQU8sQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RFLE9BQU9MLFFBQVFLLE9BQU8sQ0FBQyxPQUFPO2dCQUM5QkwsUUFBUUssT0FBTyxDQUFDLGFBQWEsR0FBR0wsUUFBUU0sUUFBUSxHQUFJTixDQUFBQSxRQUFRTyxJQUFJLEdBQUcsTUFBTVAsUUFBUU8sSUFBSSxHQUFHLEVBQUM7WUFDN0YsT0FDSyxJQUFJLENBQUNQLFFBQVFLLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLElBQUlHLE9BQU9SLFFBQVFNLFFBQVE7Z0JBQzNCLElBQUlOLFFBQVFPLElBQUksSUFBSSxNQUNoQkMsUUFBUSxDQUFDLENBQUMsRUFBRVIsUUFBUU8sSUFBSSxDQUFDLENBQUM7Z0JBQzlCUCxRQUFRSyxPQUFPLENBQUMsT0FBTyxHQUFHRztZQUM5QjtZQUNBLE9BQU9YLEtBQUtDO1FBQ2hCLEVBQUU7QUFDSyxNQUFNVyw4QkFBOEI7SUFDdkNDLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxVQUFVO0lBQ1ZDLE1BQU07UUFBQztLQUFPO0lBQ2RDLFVBQVU7QUFDZCxFQUFFO0FBQ0ssTUFBTUMsc0JBQXNCLENBQUNuQixVQUFhO1FBQzdDb0IsY0FBYyxDQUFDQztZQUNYQSxZQUFZQyxHQUFHLENBQUN2QixxQkFBcUJDLFVBQVVhO1FBQ25EO0lBQ0osR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbWlkZGxld2FyZS1ob3N0LWhlYWRlckAzLjQ1MS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9taWRkbGV3YXJlLWhvc3QtaGVhZGVyL2Rpc3QtZXMvaW5kZXguanM/MWY4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAc21pdGh5L3Byb3RvY29sLWh0dHBcIjtcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSG9zdEhlYWRlckNvbmZpZyhpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dDtcbn1cbmV4cG9ydCBjb25zdCBob3N0SGVhZGVyTWlkZGxld2FyZSA9IChvcHRpb25zKSA9PiAobmV4dCkgPT4gYXN5bmMgKGFyZ3MpID0+IHtcbiAgICBpZiAoIUh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UoYXJncy5yZXF1ZXN0KSlcbiAgICAgICAgcmV0dXJuIG5leHQoYXJncyk7XG4gICAgY29uc3QgeyByZXF1ZXN0IH0gPSBhcmdzO1xuICAgIGNvbnN0IHsgaGFuZGxlclByb3RvY29sID0gXCJcIiB9ID0gb3B0aW9ucy5yZXF1ZXN0SGFuZGxlci5tZXRhZGF0YSB8fCB7fTtcbiAgICBpZiAoaGFuZGxlclByb3RvY29sLmluZGV4T2YoXCJoMlwiKSA+PSAwICYmICFyZXF1ZXN0LmhlYWRlcnNbXCI6YXV0aG9yaXR5XCJdKSB7XG4gICAgICAgIGRlbGV0ZSByZXF1ZXN0LmhlYWRlcnNbXCJob3N0XCJdO1xuICAgICAgICByZXF1ZXN0LmhlYWRlcnNbXCI6YXV0aG9yaXR5XCJdID0gcmVxdWVzdC5ob3N0bmFtZSArIChyZXF1ZXN0LnBvcnQgPyBcIjpcIiArIHJlcXVlc3QucG9ydCA6IFwiXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmICghcmVxdWVzdC5oZWFkZXJzW1wiaG9zdFwiXSkge1xuICAgICAgICBsZXQgaG9zdCA9IHJlcXVlc3QuaG9zdG5hbWU7XG4gICAgICAgIGlmIChyZXF1ZXN0LnBvcnQgIT0gbnVsbClcbiAgICAgICAgICAgIGhvc3QgKz0gYDoke3JlcXVlc3QucG9ydH1gO1xuICAgICAgICByZXF1ZXN0LmhlYWRlcnNbXCJob3N0XCJdID0gaG9zdDtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQoYXJncyk7XG59O1xuZXhwb3J0IGNvbnN0IGhvc3RIZWFkZXJNaWRkbGV3YXJlT3B0aW9ucyA9IHtcbiAgICBuYW1lOiBcImhvc3RIZWFkZXJNaWRkbGV3YXJlXCIsXG4gICAgc3RlcDogXCJidWlsZFwiLFxuICAgIHByaW9yaXR5OiBcImxvd1wiLFxuICAgIHRhZ3M6IFtcIkhPU1RcIl0sXG4gICAgb3ZlcnJpZGU6IHRydWUsXG59O1xuZXhwb3J0IGNvbnN0IGdldEhvc3RIZWFkZXJQbHVnaW4gPSAob3B0aW9ucykgPT4gKHtcbiAgICBhcHBseVRvU3RhY2s6IChjbGllbnRTdGFjaykgPT4ge1xuICAgICAgICBjbGllbnRTdGFjay5hZGQoaG9zdEhlYWRlck1pZGRsZXdhcmUob3B0aW9ucyksIGhvc3RIZWFkZXJNaWRkbGV3YXJlT3B0aW9ucyk7XG4gICAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIkh0dHBSZXF1ZXN0IiwicmVzb2x2ZUhvc3RIZWFkZXJDb25maWciLCJpbnB1dCIsImhvc3RIZWFkZXJNaWRkbGV3YXJlIiwib3B0aW9ucyIsIm5leHQiLCJhcmdzIiwiaXNJbnN0YW5jZSIsInJlcXVlc3QiLCJoYW5kbGVyUHJvdG9jb2wiLCJyZXF1ZXN0SGFuZGxlciIsIm1ldGFkYXRhIiwiaW5kZXhPZiIsImhlYWRlcnMiLCJob3N0bmFtZSIsInBvcnQiLCJob3N0IiwiaG9zdEhlYWRlck1pZGRsZXdhcmVPcHRpb25zIiwibmFtZSIsInN0ZXAiLCJwcmlvcml0eSIsInRhZ3MiLCJvdmVycmlkZSIsImdldEhvc3RIZWFkZXJQbHVnaW4iLCJhcHBseVRvU3RhY2siLCJjbGllbnRTdGFjayIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@aws-sdk+middleware-host-header@3.451.0/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js\n");

/***/ })

};
;