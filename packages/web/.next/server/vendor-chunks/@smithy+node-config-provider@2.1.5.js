"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+node-config-provider@2.1.5";
exports.ids = ["vendor-chunks/@smithy+node-config-provider@2.1.5"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/configLoader.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/configLoader.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadConfig: () => (/* binding */ loadConfig)\n/* harmony export */ });\n/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ \"(rsc)/../../node_modules/.pnpm/@smithy+property-provider@2.0.14/node_modules/@smithy/property-provider/dist-es/index.js\");\n/* harmony import */ var _fromEnv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromEnv */ \"(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/fromEnv.js\");\n/* harmony import */ var _fromSharedConfigFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromSharedConfigFiles */ \"(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js\");\n/* harmony import */ var _fromStatic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fromStatic */ \"(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/fromStatic.js\");\n\n\n\n\nconst loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {})=>(0,_smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.memoize)((0,_smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.chain)((0,_fromEnv__WEBPACK_IMPORTED_MODULE_1__.fromEnv)(environmentVariableSelector), (0,_fromSharedConfigFiles__WEBPACK_IMPORTED_MODULE_2__.fromSharedConfigFiles)(configFileSelector, configuration), (0,_fromStatic__WEBPACK_IMPORTED_MODULE_3__.fromStatic)(defaultValue)));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrbm9kZS1jb25maWctcHJvdmlkZXJAMi4xLjUvbm9kZV9tb2R1bGVzL0BzbWl0aHkvbm9kZS1jb25maWctcHJvdmlkZXIvZGlzdC1lcy9jb25maWdMb2FkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkQ7QUFDdkI7QUFDNEI7QUFDdEI7QUFDbkMsTUFBTUssYUFBYSxDQUFDLEVBQUVDLDJCQUEyQixFQUFFQyxrQkFBa0IsRUFBRUMsU0FBU0MsWUFBWSxFQUFFLEVBQUVDLGdCQUFnQixDQUFDLENBQUMsR0FBS1Qsa0VBQU9BLENBQUNELGdFQUFLQSxDQUFDRSxpREFBT0EsQ0FBQ0ksOEJBQThCSCw2RUFBcUJBLENBQUNJLG9CQUFvQkcsZ0JBQWdCTix1REFBVUEsQ0FBQ0ssZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K25vZGUtY29uZmlnLXByb3ZpZGVyQDIuMS41L25vZGVfbW9kdWxlcy9Ac21pdGh5L25vZGUtY29uZmlnLXByb3ZpZGVyL2Rpc3QtZXMvY29uZmlnTG9hZGVyLmpzPzZjZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hhaW4sIG1lbW9pemUgfSBmcm9tIFwiQHNtaXRoeS9wcm9wZXJ0eS1wcm92aWRlclwiO1xuaW1wb3J0IHsgZnJvbUVudiB9IGZyb20gXCIuL2Zyb21FbnZcIjtcbmltcG9ydCB7IGZyb21TaGFyZWRDb25maWdGaWxlcyB9IGZyb20gXCIuL2Zyb21TaGFyZWRDb25maWdGaWxlc1wiO1xuaW1wb3J0IHsgZnJvbVN0YXRpYyB9IGZyb20gXCIuL2Zyb21TdGF0aWNcIjtcbmV4cG9ydCBjb25zdCBsb2FkQ29uZmlnID0gKHsgZW52aXJvbm1lbnRWYXJpYWJsZVNlbGVjdG9yLCBjb25maWdGaWxlU2VsZWN0b3IsIGRlZmF1bHQ6IGRlZmF1bHRWYWx1ZSB9LCBjb25maWd1cmF0aW9uID0ge30pID0+IG1lbW9pemUoY2hhaW4oZnJvbUVudihlbnZpcm9ubWVudFZhcmlhYmxlU2VsZWN0b3IpLCBmcm9tU2hhcmVkQ29uZmlnRmlsZXMoY29uZmlnRmlsZVNlbGVjdG9yLCBjb25maWd1cmF0aW9uKSwgZnJvbVN0YXRpYyhkZWZhdWx0VmFsdWUpKSk7XG4iXSwibmFtZXMiOlsiY2hhaW4iLCJtZW1vaXplIiwiZnJvbUVudiIsImZyb21TaGFyZWRDb25maWdGaWxlcyIsImZyb21TdGF0aWMiLCJsb2FkQ29uZmlnIiwiZW52aXJvbm1lbnRWYXJpYWJsZVNlbGVjdG9yIiwiY29uZmlnRmlsZVNlbGVjdG9yIiwiZGVmYXVsdCIsImRlZmF1bHRWYWx1ZSIsImNvbmZpZ3VyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/configLoader.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/fromEnv.js":
/*!********************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/fromEnv.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromEnv: () => (/* binding */ fromEnv)\n/* harmony export */ });\n/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ \"(rsc)/../../node_modules/.pnpm/@smithy+property-provider@2.0.14/node_modules/@smithy/property-provider/dist-es/index.js\");\n\nconst fromEnv = (envVarSelector)=>async ()=>{\n        try {\n            const config = envVarSelector(process.env);\n            if (config === undefined) {\n                throw new Error();\n            }\n            return config;\n        } catch (e) {\n            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);\n        }\n    };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrbm9kZS1jb25maWctcHJvdmlkZXJAMi4xLjUvbm9kZV9tb2R1bGVzL0BzbWl0aHkvbm9kZS1jb25maWctcHJvdmlkZXIvZGlzdC1lcy9mcm9tRW52LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFFO0FBQzlELE1BQU1DLFVBQVUsQ0FBQ0MsaUJBQW1CO1FBQ3ZDLElBQUk7WUFDQSxNQUFNQyxTQUFTRCxlQUFlRSxRQUFRQyxHQUFHO1lBQ3pDLElBQUlGLFdBQVdHLFdBQVc7Z0JBQ3RCLE1BQU0sSUFBSUM7WUFDZDtZQUNBLE9BQU9KO1FBQ1gsRUFDQSxPQUFPSyxHQUFHO1lBQ04sTUFBTSxJQUFJUiwrRUFBd0JBLENBQUNRLEVBQUVDLE9BQU8sSUFBSSxDQUFDLDJEQUEyRCxFQUFFUCxlQUFlLENBQUM7UUFDbEk7SUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K25vZGUtY29uZmlnLXByb3ZpZGVyQDIuMS41L25vZGVfbW9kdWxlcy9Ac21pdGh5L25vZGUtY29uZmlnLXByb3ZpZGVyL2Rpc3QtZXMvZnJvbUVudi5qcz9kYzQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENyZWRlbnRpYWxzUHJvdmlkZXJFcnJvciB9IGZyb20gXCJAc21pdGh5L3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5leHBvcnQgY29uc3QgZnJvbUVudiA9IChlbnZWYXJTZWxlY3RvcikgPT4gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IGVudlZhclNlbGVjdG9yKHByb2Nlc3MuZW52KTtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKGUubWVzc2FnZSB8fCBgQ2Fubm90IGxvYWQgY29uZmlnIGZyb20gZW52aXJvbm1lbnQgdmFyaWFibGVzIHdpdGggZ2V0dGVyOiAke2VudlZhclNlbGVjdG9yfWApO1xuICAgIH1cbn07XG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlckVycm9yIiwiZnJvbUVudiIsImVudlZhclNlbGVjdG9yIiwiY29uZmlnIiwicHJvY2VzcyIsImVudiIsInVuZGVmaW5lZCIsIkVycm9yIiwiZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/fromEnv.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromSharedConfigFiles: () => (/* binding */ fromSharedConfigFiles)\n/* harmony export */ });\n/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ \"(rsc)/../../node_modules/.pnpm/@smithy+property-provider@2.0.14/node_modules/@smithy/property-provider/dist-es/index.js\");\n/* harmony import */ var _smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/shared-ini-file-loader */ \"(rsc)/../../node_modules/.pnpm/@smithy+shared-ini-file-loader@2.2.4/node_modules/@smithy/shared-ini-file-loader/dist-es/index.js\");\n\n\nconst fromSharedConfigFiles = (configSelector, { preferredFile = \"config\", ...init } = {})=>async ()=>{\n        const profile = (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.getProfileName)(init);\n        const { configFile, credentialsFile } = await (0,_smithy_shared_ini_file_loader__WEBPACK_IMPORTED_MODULE_1__.loadSharedConfigFiles)(init);\n        const profileFromCredentials = credentialsFile[profile] || {};\n        const profileFromConfig = configFile[profile] || {};\n        const mergedProfile = preferredFile === \"config\" ? {\n            ...profileFromCredentials,\n            ...profileFromConfig\n        } : {\n            ...profileFromConfig,\n            ...profileFromCredentials\n        };\n        try {\n            const cfgFile = preferredFile === \"config\" ? configFile : credentialsFile;\n            const configValue = configSelector(mergedProfile, cfgFile);\n            if (configValue === undefined) {\n                throw new Error();\n            }\n            return configValue;\n        } catch (e) {\n            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(e.message || `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);\n        }\n    };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrbm9kZS1jb25maWctcHJvdmlkZXJAMi4xLjUvbm9kZV9tb2R1bGVzL0BzbWl0aHkvbm9kZS1jb25maWctcHJvdmlkZXIvZGlzdC1lcy9mcm9tU2hhcmVkQ29uZmlnRmlsZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFFO0FBQ2tCO0FBQ2hGLE1BQU1HLHdCQUF3QixDQUFDQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLFFBQVEsRUFBRSxHQUFHQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUs7UUFDakcsTUFBTUMsVUFBVU4sOEVBQWNBLENBQUNLO1FBQy9CLE1BQU0sRUFBRUUsVUFBVSxFQUFFQyxlQUFlLEVBQUUsR0FBRyxNQUFNUCxxRkFBcUJBLENBQUNJO1FBQ3BFLE1BQU1JLHlCQUF5QkQsZUFBZSxDQUFDRixRQUFRLElBQUksQ0FBQztRQUM1RCxNQUFNSSxvQkFBb0JILFVBQVUsQ0FBQ0QsUUFBUSxJQUFJLENBQUM7UUFDbEQsTUFBTUssZ0JBQWdCUCxrQkFBa0IsV0FDbEM7WUFBRSxHQUFHSyxzQkFBc0I7WUFBRSxHQUFHQyxpQkFBaUI7UUFBQyxJQUNsRDtZQUFFLEdBQUdBLGlCQUFpQjtZQUFFLEdBQUdELHNCQUFzQjtRQUFDO1FBQ3hELElBQUk7WUFDQSxNQUFNRyxVQUFVUixrQkFBa0IsV0FBV0csYUFBYUM7WUFDMUQsTUFBTUssY0FBY1YsZUFBZVEsZUFBZUM7WUFDbEQsSUFBSUMsZ0JBQWdCQyxXQUFXO2dCQUMzQixNQUFNLElBQUlDO1lBQ2Q7WUFDQSxPQUFPRjtRQUNYLEVBQ0EsT0FBT0csR0FBRztZQUNOLE1BQU0sSUFBSWpCLCtFQUF3QkEsQ0FBQ2lCLEVBQUVDLE9BQU8sSUFBSSxDQUFDLCtCQUErQixFQUFFWCxRQUFRLHlDQUF5QyxFQUFFSCxlQUFlLENBQUM7UUFDeko7SUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K25vZGUtY29uZmlnLXByb3ZpZGVyQDIuMS41L25vZGVfbW9kdWxlcy9Ac21pdGh5L25vZGUtY29uZmlnLXByb3ZpZGVyL2Rpc3QtZXMvZnJvbVNoYXJlZENvbmZpZ0ZpbGVzLmpzPzg0ZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlZGVudGlhbHNQcm92aWRlckVycm9yIH0gZnJvbSBcIkBzbWl0aHkvcHJvcGVydHktcHJvdmlkZXJcIjtcbmltcG9ydCB7IGdldFByb2ZpbGVOYW1lLCBsb2FkU2hhcmVkQ29uZmlnRmlsZXMgfSBmcm9tIFwiQHNtaXRoeS9zaGFyZWQtaW5pLWZpbGUtbG9hZGVyXCI7XG5leHBvcnQgY29uc3QgZnJvbVNoYXJlZENvbmZpZ0ZpbGVzID0gKGNvbmZpZ1NlbGVjdG9yLCB7IHByZWZlcnJlZEZpbGUgPSBcImNvbmZpZ1wiLCAuLi5pbml0IH0gPSB7fSkgPT4gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb2ZpbGUgPSBnZXRQcm9maWxlTmFtZShpbml0KTtcbiAgICBjb25zdCB7IGNvbmZpZ0ZpbGUsIGNyZWRlbnRpYWxzRmlsZSB9ID0gYXdhaXQgbG9hZFNoYXJlZENvbmZpZ0ZpbGVzKGluaXQpO1xuICAgIGNvbnN0IHByb2ZpbGVGcm9tQ3JlZGVudGlhbHMgPSBjcmVkZW50aWFsc0ZpbGVbcHJvZmlsZV0gfHwge307XG4gICAgY29uc3QgcHJvZmlsZUZyb21Db25maWcgPSBjb25maWdGaWxlW3Byb2ZpbGVdIHx8IHt9O1xuICAgIGNvbnN0IG1lcmdlZFByb2ZpbGUgPSBwcmVmZXJyZWRGaWxlID09PSBcImNvbmZpZ1wiXG4gICAgICAgID8geyAuLi5wcm9maWxlRnJvbUNyZWRlbnRpYWxzLCAuLi5wcm9maWxlRnJvbUNvbmZpZyB9XG4gICAgICAgIDogeyAuLi5wcm9maWxlRnJvbUNvbmZpZywgLi4ucHJvZmlsZUZyb21DcmVkZW50aWFscyB9O1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNmZ0ZpbGUgPSBwcmVmZXJyZWRGaWxlID09PSBcImNvbmZpZ1wiID8gY29uZmlnRmlsZSA6IGNyZWRlbnRpYWxzRmlsZTtcbiAgICAgICAgY29uc3QgY29uZmlnVmFsdWUgPSBjb25maWdTZWxlY3RvcihtZXJnZWRQcm9maWxlLCBjZmdGaWxlKTtcbiAgICAgICAgaWYgKGNvbmZpZ1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25maWdWYWx1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IENyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihlLm1lc3NhZ2UgfHwgYENhbm5vdCBsb2FkIGNvbmZpZyBmb3IgcHJvZmlsZSAke3Byb2ZpbGV9IGluIFNESyBjb25maWd1cmF0aW9uIGZpbGVzIHdpdGggZ2V0dGVyOiAke2NvbmZpZ1NlbGVjdG9yfWApO1xuICAgIH1cbn07XG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlckVycm9yIiwiZ2V0UHJvZmlsZU5hbWUiLCJsb2FkU2hhcmVkQ29uZmlnRmlsZXMiLCJmcm9tU2hhcmVkQ29uZmlnRmlsZXMiLCJjb25maWdTZWxlY3RvciIsInByZWZlcnJlZEZpbGUiLCJpbml0IiwicHJvZmlsZSIsImNvbmZpZ0ZpbGUiLCJjcmVkZW50aWFsc0ZpbGUiLCJwcm9maWxlRnJvbUNyZWRlbnRpYWxzIiwicHJvZmlsZUZyb21Db25maWciLCJtZXJnZWRQcm9maWxlIiwiY2ZnRmlsZSIsImNvbmZpZ1ZhbHVlIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/fromStatic.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/fromStatic.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromStatic: () => (/* binding */ fromStatic)\n/* harmony export */ });\n/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ \"(rsc)/../../node_modules/.pnpm/@smithy+property-provider@2.0.14/node_modules/@smithy/property-provider/dist-es/index.js\");\n\nconst isFunction = (func)=>typeof func === \"function\";\nconst fromStatic = (defaultValue)=>isFunction(defaultValue) ? async ()=>await defaultValue() : (0,_smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.fromStatic)(defaultValue);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrbm9kZS1jb25maWctcHJvdmlkZXJAMi4xLjUvbm9kZV9tb2R1bGVzL0BzbWl0aHkvbm9kZS1jb25maWctcHJvdmlkZXIvZGlzdC1lcy9mcm9tU3RhdGljLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRFO0FBQzVFLE1BQU1FLGFBQWEsQ0FBQ0MsT0FBUyxPQUFPQSxTQUFTO0FBQ3RDLE1BQU1ILGFBQWEsQ0FBQ0ksZUFBaUJGLFdBQVdFLGdCQUFnQixVQUFZLE1BQU1BLGlCQUFpQkgscUVBQWlCQSxDQUFDRyxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K25vZGUtY29uZmlnLXByb3ZpZGVyQDIuMS41L25vZGVfbW9kdWxlcy9Ac21pdGh5L25vZGUtY29uZmlnLXByb3ZpZGVyL2Rpc3QtZXMvZnJvbVN0YXRpYy5qcz84Mjc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21TdGF0aWMgYXMgY29udmVydFRvUHJvdmlkZXIgfSBmcm9tIFwiQHNtaXRoeS9wcm9wZXJ0eS1wcm92aWRlclwiO1xuY29uc3QgaXNGdW5jdGlvbiA9IChmdW5jKSA9PiB0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IGZyb21TdGF0aWMgPSAoZGVmYXVsdFZhbHVlKSA9PiBpc0Z1bmN0aW9uKGRlZmF1bHRWYWx1ZSkgPyBhc3luYyAoKSA9PiBhd2FpdCBkZWZhdWx0VmFsdWUoKSA6IGNvbnZlcnRUb1Byb3ZpZGVyKGRlZmF1bHRWYWx1ZSk7XG4iXSwibmFtZXMiOlsiZnJvbVN0YXRpYyIsImNvbnZlcnRUb1Byb3ZpZGVyIiwiaXNGdW5jdGlvbiIsImZ1bmMiLCJkZWZhdWx0VmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/fromStatic.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/index.js":
/*!******************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/index.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadConfig: () => (/* reexport safe */ _configLoader__WEBPACK_IMPORTED_MODULE_0__.loadConfig)\n/* harmony export */ });\n/* harmony import */ var _configLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configLoader */ \"(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/configLoader.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrbm9kZS1jb25maWctcHJvdmlkZXJAMi4xLjUvbm9kZV9tb2R1bGVzL0BzbWl0aHkvbm9kZS1jb25maWctcHJvdmlkZXIvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStub2RlLWNvbmZpZy1wcm92aWRlckAyLjEuNS9ub2RlX21vZHVsZXMvQHNtaXRoeS9ub2RlLWNvbmZpZy1wcm92aWRlci9kaXN0LWVzL2luZGV4LmpzPzY0ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vY29uZmlnTG9hZGVyXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@smithy+node-config-provider@2.1.5/node_modules/@smithy/node-config-provider/dist-es/index.js\n");

/***/ })

};
;