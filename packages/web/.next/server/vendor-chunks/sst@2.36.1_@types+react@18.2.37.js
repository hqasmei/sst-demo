"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/sst@2.36.1_@types+react@18.2.37";
exports.ids = ["vendor-chunks/sst@2.36.1_@types+react@18.2.37"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/sst@2.36.1_@types+react@18.2.37/node_modules/sst/node/config/index.js":
/*!******************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/sst@2.36.1_@types+react@18.2.37/node_modules/sst/node/config/index.js ***!
  \******************************************************************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Config: () => (/* binding */ Config)\n/* harmony export */ });\n/* harmony import */ var _util_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index.js */ \"(rsc)/../../node_modules/.pnpm/sst@2.36.1_@types+react@18.2.37/node_modules/sst/node/util/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_index_js__WEBPACK_IMPORTED_MODULE_0__]);\n_util_index_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst Config = /* @__PURE__ */ (0,_util_index_js__WEBPACK_IMPORTED_MODULE_0__.createProxy)(\"Config\");\nconst metadata = parseMetadataEnvironment();\nconst parameters = flattenValues((0,_util_index_js__WEBPACK_IMPORTED_MODULE_0__.getVariables2)(\"Parameter\"));\nconst secrets = flattenValues((0,_util_index_js__WEBPACK_IMPORTED_MODULE_0__.getVariables2)(\"Secret\"));\nObject.assign(Config, metadata, parameters, secrets);\n///////////////\n// Functions\n///////////////\nfunction parseMetadataEnvironment() {\n    return {\n        APP: process.env.SST_APP,\n        STAGE: process.env.SST_STAGE\n    };\n}\nfunction flattenValues(configValues) {\n    const acc = {};\n    Object.keys(configValues).forEach((name)=>{\n        acc[name] = configValues[name].value;\n    });\n    return acc;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NzdEAyLjM2LjFfQHR5cGVzK3JlYWN0QDE4LjIuMzcvbm9kZV9tb2R1bGVzL3NzdC9ub2RlL2NvbmZpZy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4RDtBQUN2RCxNQUFNRSxTQUFTLGFBQWEsR0FBR0YsMkRBQVdBLENBQUMsVUFBVTtBQUM1RCxNQUFNRyxXQUFXQztBQUNqQixNQUFNQyxhQUFhQyxjQUFjTCw2REFBYUEsQ0FBQztBQUMvQyxNQUFNTSxVQUFVRCxjQUFjTCw2REFBYUEsQ0FBQztBQUM1Q08sT0FBT0MsTUFBTSxDQUFDUCxRQUFRQyxVQUFVRSxZQUFZRTtBQUM1QyxlQUFlO0FBQ2YsWUFBWTtBQUNaLGVBQWU7QUFDZixTQUFTSDtJQUNMLE9BQU87UUFDSE0sS0FBS0MsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO1FBQ3hCQyxPQUFPSCxRQUFRQyxHQUFHLENBQUNHLFNBQVM7SUFDaEM7QUFDSjtBQUNBLFNBQVNULGNBQWNVLFlBQVk7SUFDL0IsTUFBTUMsTUFBTSxDQUFDO0lBQ2JULE9BQU9VLElBQUksQ0FBQ0YsY0FBY0csT0FBTyxDQUFDLENBQUNDO1FBQy9CSCxHQUFHLENBQUNHLEtBQUssR0FBR0osWUFBWSxDQUFDSSxLQUFLLENBQUNDLEtBQUs7SUFDeEM7SUFDQSxPQUFPSjtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zc3RAMi4zNi4xX0B0eXBlcytyZWFjdEAxOC4yLjM3L25vZGVfbW9kdWxlcy9zc3Qvbm9kZS9jb25maWcvaW5kZXguanM/NDVjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQcm94eSwgZ2V0VmFyaWFibGVzMiB9IGZyb20gXCIuLi91dGlsL2luZGV4LmpzXCI7XG5leHBvcnQgY29uc3QgQ29uZmlnID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVByb3h5KFwiQ29uZmlnXCIpO1xuY29uc3QgbWV0YWRhdGEgPSBwYXJzZU1ldGFkYXRhRW52aXJvbm1lbnQoKTtcbmNvbnN0IHBhcmFtZXRlcnMgPSBmbGF0dGVuVmFsdWVzKGdldFZhcmlhYmxlczIoXCJQYXJhbWV0ZXJcIikpO1xuY29uc3Qgc2VjcmV0cyA9IGZsYXR0ZW5WYWx1ZXMoZ2V0VmFyaWFibGVzMihcIlNlY3JldFwiKSk7XG5PYmplY3QuYXNzaWduKENvbmZpZywgbWV0YWRhdGEsIHBhcmFtZXRlcnMsIHNlY3JldHMpO1xuLy8vLy8vLy8vLy8vLy8vXG4vLyBGdW5jdGlvbnNcbi8vLy8vLy8vLy8vLy8vL1xuZnVuY3Rpb24gcGFyc2VNZXRhZGF0YUVudmlyb25tZW50KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIEFQUDogcHJvY2Vzcy5lbnYuU1NUX0FQUCxcbiAgICAgICAgU1RBR0U6IHByb2Nlc3MuZW52LlNTVF9TVEFHRSxcbiAgICB9O1xufVxuZnVuY3Rpb24gZmxhdHRlblZhbHVlcyhjb25maWdWYWx1ZXMpIHtcbiAgICBjb25zdCBhY2MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhjb25maWdWYWx1ZXMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgYWNjW25hbWVdID0gY29uZmlnVmFsdWVzW25hbWVdLnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUHJveHkiLCJnZXRWYXJpYWJsZXMyIiwiQ29uZmlnIiwibWV0YWRhdGEiLCJwYXJzZU1ldGFkYXRhRW52aXJvbm1lbnQiLCJwYXJhbWV0ZXJzIiwiZmxhdHRlblZhbHVlcyIsInNlY3JldHMiLCJPYmplY3QiLCJhc3NpZ24iLCJBUFAiLCJwcm9jZXNzIiwiZW52IiwiU1NUX0FQUCIsIlNUQUdFIiwiU1NUX1NUQUdFIiwiY29uZmlnVmFsdWVzIiwiYWNjIiwia2V5cyIsImZvckVhY2giLCJuYW1lIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/sst@2.36.1_@types+react@18.2.37/node_modules/sst/node/config/index.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/.pnpm/sst@2.36.1_@types+react@18.2.37/node_modules/sst/node/util/index.js":
/*!****************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/sst@2.36.1_@types+react@18.2.37/node_modules/sst/node/util/index.js ***!
  \****************************************************************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProxy: () => (/* binding */ createProxy),\n/* harmony export */   getVariables2: () => (/* binding */ getVariables2)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_ssm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-ssm */ \"(rsc)/../../node_modules/.pnpm/@aws-sdk+client-ssm@3.451.0/node_modules/@aws-sdk/client-ssm/dist-es/SSMClient.js\");\n/* harmony import */ var _aws_sdk_client_ssm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-ssm */ \"(rsc)/../../node_modules/.pnpm/@aws-sdk+client-ssm@3.451.0/node_modules/@aws-sdk/client-ssm/dist-es/commands/GetParametersCommand.js\");\n\nconst ssm = new _aws_sdk_client_ssm__WEBPACK_IMPORTED_MODULE_0__.SSMClient({\n    region: process.env.SST_REGION\n});\n// Example:\n// {\n//   Bucket: {\n//     myBucket: {\n//       name: \"my-bucket\",\n//     }\n//   }\n// }\nlet allVariables = {};\n// NOTE: in some setups, top level await must be assigned to a variable,\n//       otherwise it would throw a top level await error.\n//       https://discord.com/channels/983865673656705025/1089184080534446110\nconst _placeholder = await parseEnvironment();\nfunction createProxy(constructName) {\n    const result = new Proxy({}, {\n        get (target, prop) {\n            if (typeof prop === \"string\") {\n                // If SST_APP and SST_STAGE are not set, it is likely the\n                // user is using an older version of SST.\n                // Note: cannot run this check at the top level b/c SvelteKit\n                //       run code analysis after build. The code analysis runs\n                //       the top level code, and would fail b/c \"SST_APP\" and\n                //       \"SST_STAGE\" are undefined at build time.\n                if (!process.env.SST_APP) {\n                    throw new Error(buildMissingBuiltInEnvError());\n                }\n                // normalize prop to convert kebab cases like `my-table` to `my_table`\n                const normProp = normalizeId(prop);\n                if (!(normProp in target)) {\n                    throw new Error(`Cannot use ${constructName}.${String(prop)}. Please make sure it is bound to this function.`);\n                }\n                return Reflect.get(target, normProp);\n            }\n            return Reflect.get(target, prop);\n        }\n    });\n    Object.assign(result, getVariables2(constructName));\n    return result;\n}\nfunction getVariables2(constructName) {\n    return allVariables[constructName] || {};\n}\nasync function parseEnvironment() {\n    const variablesFromSsm = [];\n    const variablesFromSecret = [];\n    Object.keys(process.env).filter((name)=>name.startsWith(\"SST_\")).forEach((name)=>{\n        const variable = parseEnvName(name);\n        // Ignore if env var is not in the correct format\n        if (!variable.constructName || !variable.constructId || !variable.propName) {\n            return;\n        }\n        const value = process.env[name];\n        if (value === \"__FETCH_FROM_SSM__\") {\n            variablesFromSsm.push(variable);\n        } else if (value.startsWith(\"__FETCH_FROM_SECRET__:\")) {\n            variablesFromSecret.push([\n                variable,\n                value.split(\":\")[1]\n            ]);\n        } else {\n            storeVariable(variable, value);\n        }\n    });\n    // Fetch values from SSM\n    await fetchValuesFromSSM(variablesFromSsm);\n    // Fetch values from Secrets\n    variablesFromSecret.forEach(([variable, secretName])=>{\n        const value = allVariables[\"Secret\"]?.[secretName]?.value;\n        if (value) {\n            storeVariable(variable, value);\n        }\n    });\n    return allVariables;\n}\nasync function fetchValuesFromSSM(variablesFromSsm) {\n    // Get all env vars that need to be fetched from SSM\n    const ssmPaths = variablesFromSsm.map((variable)=>buildSsmPath(variable));\n    if (ssmPaths.length === 0) return;\n    // Fetch\n    const results = await loadSecrets(ssmPaths);\n    results.validParams.forEach((item)=>{\n        const variable = parseSsmPath(item.Name);\n        storeVariable(variable, item.Value);\n    });\n    // Get all fallback values to be fetched\n    const ssmFallbackPaths = results.invalidParams.map((name)=>parseSsmPath(name)).filter((variable)=>variable.constructName === \"Secret\").map((variable)=>buildSsmFallbackPath(variable));\n    if (ssmFallbackPaths.length === 0) return;\n    // Fetch fallback values\n    const fallbackResults = await loadSecrets(ssmFallbackPaths);\n    fallbackResults.validParams.forEach((item)=>{\n        const variable = parseSsmFallbackPath(item.Name);\n        storeVariable(variable, item.Value);\n    });\n    // Throw error if any values are missing\n    const missingSecrets = fallbackResults.invalidParams.map((name)=>parseSsmFallbackPath(name)).filter((variable)=>variable.constructName === \"Secret\").map((variable)=>variable.constructId);\n    if (missingSecrets.length > 0) {\n        throw new Error(`The following secret values are not set in the \"${process.env.SST_STAGE} stage\": ${missingSecrets.join(\", \")}`);\n    }\n}\nasync function loadSecrets(paths) {\n    // Split paths into chunks of 10\n    const chunks = [];\n    for(let i = 0; i < paths.length; i += 10){\n        chunks.push(paths.slice(i, i + 10));\n    }\n    // Fetch secrets\n    const validParams = [];\n    const invalidParams = [];\n    await Promise.all(chunks.map(async (chunk)=>{\n        const command = new _aws_sdk_client_ssm__WEBPACK_IMPORTED_MODULE_1__.GetParametersCommand({\n            Names: chunk,\n            WithDecryption: true\n        });\n        const result = await ssm.send(command);\n        validParams.push(...result.Parameters || []);\n        invalidParams.push(...result.InvalidParameters || []);\n    }));\n    return {\n        validParams,\n        invalidParams\n    };\n}\nfunction parseEnvName(env) {\n    const [_SST, constructName, propName, ...idParts] = env.split(\"_\");\n    return {\n        constructName,\n        constructId: idParts.join(\"_\"),\n        propName\n    };\n}\nfunction parseSsmPath(path) {\n    const prefix = ssmPrefix();\n    const parts = path.substring(prefix.length).split(\"/\");\n    return {\n        constructName: parts[0],\n        constructId: parts[1],\n        propName: parts[2]\n    };\n}\nfunction parseSsmFallbackPath(path) {\n    const parts = path.split(\"/\");\n    return {\n        constructName: parts[4],\n        constructId: parts[5],\n        propName: parts[6]\n    };\n}\nfunction buildSsmPath(data) {\n    return `${ssmPrefix()}${data.constructName}/${data.constructId}/${data.propName}`;\n}\nfunction buildSsmFallbackPath(data) {\n    return `/sst/${process.env.SST_APP}/.fallback/${data.constructName}/${data.constructId}/${data.propName}`;\n}\nfunction normalizeId(name) {\n    return name.replace(/-/g, \"_\");\n}\nfunction ssmPrefix() {\n    return process.env.SST_SSM_PREFIX || \"\";\n}\nfunction storeVariable(variable, value) {\n    const { constructId: id, constructName: c, propName: prop } = variable;\n    allVariables[c] = allVariables[c] || {};\n    allVariables[c][id] = allVariables[c][id] || {};\n    allVariables[c][id][prop] = value;\n}\nfunction buildMissingBuiltInEnvError() {\n    // Build environment => building SSR sites\n    if (process.env.SST) {\n        return [\n            \"\",\n            `Cannot access bound resources. This usually happens if the \"sst/node\" package is used at build time. For example:`,\n            \"\",\n            `  - The \"sst/node\" package is used inside the \"getStaticProps()\" function of a Next.js app.`,\n            `  - The \"sst/node\" package is used at the top level outside of the \"load()\" function of a SvelteKit app.`,\n            \"\",\n            `Please wrap your build script with \"sst bind\". For example, \"sst bind next build\".`,\n            \"\"\n        ].join(\"\\n\");\n    }\n    // Lambda/CodeBuild environment => Function/Job or SSR function\n    if (process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.CODEBUILD_BUILD_ARN) {\n        return `Cannot access bound resources. This usually happens if you are using an older version of SST. Please update SST to the latest version.`;\n    }\n    // Unknown environment => client-side code\n    return `Cannot access bound resources. This usually happens if the \"sst/node\" package is used on the client-side. Ensure that it's only called in your server functions.`;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NzdEAyLjM2LjFfQHR5cGVzK3JlYWN0QDE4LjIuMzcvbm9kZV9tb2R1bGVzL3NzdC9ub2RlL3V0aWwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUU7QUFDdkUsTUFBTUUsTUFBTSxJQUFJRCwwREFBU0EsQ0FBQztJQUFFRSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7QUFBQztBQUMzRCxXQUFXO0FBQ1gsSUFBSTtBQUNKLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsMkJBQTJCO0FBQzNCLFFBQVE7QUFDUixNQUFNO0FBQ04sSUFBSTtBQUNKLElBQUlDLGVBQWUsQ0FBQztBQUNwQix3RUFBd0U7QUFDeEUsMERBQTBEO0FBQzFELDRFQUE0RTtBQUM1RSxNQUFNQyxlQUFlLE1BQU1DO0FBQ3BCLFNBQVNDLFlBQVlDLGFBQWE7SUFDckMsTUFBTUMsU0FBUyxJQUFJQyxNQUFNLENBQUMsR0FBRztRQUN6QkMsS0FBSUMsTUFBTSxFQUFFQyxJQUFJO1lBQ1osSUFBSSxPQUFPQSxTQUFTLFVBQVU7Z0JBQzFCLHlEQUF5RDtnQkFDekQseUNBQXlDO2dCQUN6Qyw2REFBNkQ7Z0JBQzdELDhEQUE4RDtnQkFDOUQsNkRBQTZEO2dCQUM3RCxpREFBaUQ7Z0JBQ2pELElBQUksQ0FBQ1osUUFBUUMsR0FBRyxDQUFDWSxPQUFPLEVBQUU7b0JBQ3RCLE1BQU0sSUFBSUMsTUFBTUM7Z0JBQ3BCO2dCQUNBLHNFQUFzRTtnQkFDdEUsTUFBTUMsV0FBV0MsWUFBWUw7Z0JBQzdCLElBQUksQ0FBRUksQ0FBQUEsWUFBWUwsTUFBSyxHQUFJO29CQUN2QixNQUFNLElBQUlHLE1BQU0sQ0FBQyxXQUFXLEVBQUVQLGNBQWMsQ0FBQyxFQUFFVyxPQUFPTixNQUFNLGdEQUFnRCxDQUFDO2dCQUNqSDtnQkFDQSxPQUFPTyxRQUFRVCxHQUFHLENBQUNDLFFBQVFLO1lBQy9CO1lBQ0EsT0FBT0csUUFBUVQsR0FBRyxDQUFDQyxR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Ry9FLFlBQVksQ0FBQ2dGLEVBQUUsQ0FBQ0QsR0FBRyxJQUFJLENBQUM7SUFDOUMvRSxZQUFZLENBQUNnRixFQUFFLENBQUNELEdBQUcsQ0FBQ3RFLEtBQUssR0FBR3NCO0FBQ2hDO0FBQ0EsU0FBU25CO0lBQ0wsMENBQTBDO0lBQzFDLElBQUlmLFFBQVFDLEdBQUcsQ0FBQ21GLEdBQUcsRUFBRTtRQUNqQixPQUFPO1lBQ0g7WUFDQSxDQUFDLGlIQUFpSCxDQUFDO1lBQ25IO1lBQ0EsQ0FBQywyRkFBMkYsQ0FBQztZQUM3RixDQUFDLHdHQUF3RyxDQUFDO1lBQzFHO1lBQ0EsQ0FBQyxrRkFBa0YsQ0FBQztZQUNwRjtTQUNILENBQUMxQixJQUFJLENBQUM7SUFDWDtJQUNBLCtEQUErRDtJQUMvRCxJQUFJMUQsUUFBUUMsR0FBRyxDQUFDb0Ysd0JBQXdCLElBQUlyRixRQUFRQyxHQUFHLENBQUNxRixtQkFBbUIsRUFBRTtRQUN6RSxPQUFPLENBQUMsc0lBQXNJLENBQUM7SUFDbko7SUFDQSwwQ0FBMEM7SUFDMUMsT0FBTyxDQUFDLGdLQUFnSyxDQUFDO0FBQzdLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zc3RAMi4zNi4xX0B0eXBlcytyZWFjdEAxOC4yLjM3L25vZGVfbW9kdWxlcy9zc3Qvbm9kZS91dGlsL2luZGV4LmpzPzQ5ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0UGFyYW1ldGVyc0NvbW1hbmQsIFNTTUNsaWVudCwgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LXNzbVwiO1xuY29uc3Qgc3NtID0gbmV3IFNTTUNsaWVudCh7IHJlZ2lvbjogcHJvY2Vzcy5lbnYuU1NUX1JFR0lPTiB9KTtcbi8vIEV4YW1wbGU6XG4vLyB7XG4vLyAgIEJ1Y2tldDoge1xuLy8gICAgIG15QnVja2V0OiB7XG4vLyAgICAgICBuYW1lOiBcIm15LWJ1Y2tldFwiLFxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxubGV0IGFsbFZhcmlhYmxlcyA9IHt9O1xuLy8gTk9URTogaW4gc29tZSBzZXR1cHMsIHRvcCBsZXZlbCBhd2FpdCBtdXN0IGJlIGFzc2lnbmVkIHRvIGEgdmFyaWFibGUsXG4vLyAgICAgICBvdGhlcndpc2UgaXQgd291bGQgdGhyb3cgYSB0b3AgbGV2ZWwgYXdhaXQgZXJyb3IuXG4vLyAgICAgICBodHRwczovL2Rpc2NvcmQuY29tL2NoYW5uZWxzLzk4Mzg2NTY3MzY1NjcwNTAyNS8xMDg5MTg0MDgwNTM0NDQ2MTEwXG5jb25zdCBfcGxhY2Vob2xkZXIgPSBhd2FpdCBwYXJzZUVudmlyb25tZW50KCk7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJveHkoY29uc3RydWN0TmFtZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQcm94eSh7fSwge1xuICAgICAgICBnZXQodGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBTU1RfQVBQIGFuZCBTU1RfU1RBR0UgYXJlIG5vdCBzZXQsIGl0IGlzIGxpa2VseSB0aGVcbiAgICAgICAgICAgICAgICAvLyB1c2VyIGlzIHVzaW5nIGFuIG9sZGVyIHZlcnNpb24gb2YgU1NULlxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IGNhbm5vdCBydW4gdGhpcyBjaGVjayBhdCB0aGUgdG9wIGxldmVsIGIvYyBTdmVsdGVLaXRcbiAgICAgICAgICAgICAgICAvLyAgICAgICBydW4gY29kZSBhbmFseXNpcyBhZnRlciBidWlsZC4gVGhlIGNvZGUgYW5hbHlzaXMgcnVuc1xuICAgICAgICAgICAgICAgIC8vICAgICAgIHRoZSB0b3AgbGV2ZWwgY29kZSwgYW5kIHdvdWxkIGZhaWwgYi9jIFwiU1NUX0FQUFwiIGFuZFxuICAgICAgICAgICAgICAgIC8vICAgICAgIFwiU1NUX1NUQUdFXCIgYXJlIHVuZGVmaW5lZCBhdCBidWlsZCB0aW1lLlxuICAgICAgICAgICAgICAgIGlmICghcHJvY2Vzcy5lbnYuU1NUX0FQUCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYnVpbGRNaXNzaW5nQnVpbHRJbkVudkVycm9yKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBub3JtYWxpemUgcHJvcCB0byBjb252ZXJ0IGtlYmFiIGNhc2VzIGxpa2UgYG15LXRhYmxlYCB0byBgbXlfdGFibGVgXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybVByb3AgPSBub3JtYWxpemVJZChwcm9wKTtcbiAgICAgICAgICAgICAgICBpZiAoIShub3JtUHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVzZSAke2NvbnN0cnVjdE5hbWV9LiR7U3RyaW5nKHByb3ApfS4gUGxlYXNlIG1ha2Ugc3VyZSBpdCBpcyBib3VuZCB0byB0aGlzIGZ1bmN0aW9uLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBub3JtUHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgZ2V0VmFyaWFibGVzMihjb25zdHJ1Y3ROYW1lKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYXJpYWJsZXMyKGNvbnN0cnVjdE5hbWUpIHtcbiAgICByZXR1cm4gYWxsVmFyaWFibGVzW2NvbnN0cnVjdE5hbWVdIHx8IHt9O1xufVxuYXN5bmMgZnVuY3Rpb24gcGFyc2VFbnZpcm9ubWVudCgpIHtcbiAgICBjb25zdCB2YXJpYWJsZXNGcm9tU3NtID0gW107XG4gICAgY29uc3QgdmFyaWFibGVzRnJvbVNlY3JldCA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHByb2Nlc3MuZW52KVxuICAgICAgICAuZmlsdGVyKChuYW1lKSA9PiBuYW1lLnN0YXJ0c1dpdGgoXCJTU1RfXCIpKVxuICAgICAgICAuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHBhcnNlRW52TmFtZShuYW1lKTtcbiAgICAgICAgLy8gSWdub3JlIGlmIGVudiB2YXIgaXMgbm90IGluIHRoZSBjb3JyZWN0IGZvcm1hdFxuICAgICAgICBpZiAoIXZhcmlhYmxlLmNvbnN0cnVjdE5hbWUgfHxcbiAgICAgICAgICAgICF2YXJpYWJsZS5jb25zdHJ1Y3RJZCB8fFxuICAgICAgICAgICAgIXZhcmlhYmxlLnByb3BOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9jZXNzLmVudltuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBcIl9fRkVUQ0hfRlJPTV9TU01fX1wiKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXNGcm9tU3NtLnB1c2godmFyaWFibGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCJfX0ZFVENIX0ZST01fU0VDUkVUX186XCIpKSB7XG4gICAgICAgICAgICB2YXJpYWJsZXNGcm9tU2VjcmV0LnB1c2goW3ZhcmlhYmxlLCB2YWx1ZS5zcGxpdChcIjpcIilbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0b3JlVmFyaWFibGUodmFyaWFibGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEZldGNoIHZhbHVlcyBmcm9tIFNTTVxuICAgIGF3YWl0IGZldGNoVmFsdWVzRnJvbVNTTSh2YXJpYWJsZXNGcm9tU3NtKTtcbiAgICAvLyBGZXRjaCB2YWx1ZXMgZnJvbSBTZWNyZXRzXG4gICAgdmFyaWFibGVzRnJvbVNlY3JldC5mb3JFYWNoKChbdmFyaWFibGUsIHNlY3JldE5hbWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYWxsVmFyaWFibGVzW1wiU2VjcmV0XCJdPy5bc2VjcmV0TmFtZV0/LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN0b3JlVmFyaWFibGUodmFyaWFibGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxWYXJpYWJsZXM7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaFZhbHVlc0Zyb21TU00odmFyaWFibGVzRnJvbVNzbSkge1xuICAgIC8vIEdldCBhbGwgZW52IHZhcnMgdGhhdCBuZWVkIHRvIGJlIGZldGNoZWQgZnJvbSBTU01cbiAgICBjb25zdCBzc21QYXRocyA9IHZhcmlhYmxlc0Zyb21Tc20ubWFwKCh2YXJpYWJsZSkgPT4gYnVpbGRTc21QYXRoKHZhcmlhYmxlKSk7XG4gICAgaWYgKHNzbVBhdGhzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIEZldGNoXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGxvYWRTZWNyZXRzKHNzbVBhdGhzKTtcbiAgICByZXN1bHRzLnZhbGlkUGFyYW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBwYXJzZVNzbVBhdGgoaXRlbS5OYW1lKTtcbiAgICAgICAgc3RvcmVWYXJpYWJsZSh2YXJpYWJsZSwgaXRlbS5WYWx1ZSk7XG4gICAgfSk7XG4gICAgLy8gR2V0IGFsbCBmYWxsYmFjayB2YWx1ZXMgdG8gYmUgZmV0Y2hlZFxuICAgIGNvbnN0IHNzbUZhbGxiYWNrUGF0aHMgPSByZXN1bHRzLmludmFsaWRQYXJhbXNcbiAgICAgICAgLm1hcCgobmFtZSkgPT4gcGFyc2VTc21QYXRoKG5hbWUpKVxuICAgICAgICAuZmlsdGVyKCh2YXJpYWJsZSkgPT4gdmFyaWFibGUuY29uc3RydWN0TmFtZSA9PT0gXCJTZWNyZXRcIilcbiAgICAgICAgLm1hcCgodmFyaWFibGUpID0+IGJ1aWxkU3NtRmFsbGJhY2tQYXRoKHZhcmlhYmxlKSk7XG4gICAgaWYgKHNzbUZhbGxiYWNrUGF0aHMubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm47XG4gICAgLy8gRmV0Y2ggZmFsbGJhY2sgdmFsdWVzXG4gICAgY29uc3QgZmFsbGJhY2tSZXN1bHRzID0gYXdhaXQgbG9hZFNlY3JldHMoc3NtRmFsbGJhY2tQYXRocyk7XG4gICAgZmFsbGJhY2tSZXN1bHRzLnZhbGlkUGFyYW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBwYXJzZVNzbUZhbGxiYWNrUGF0aChpdGVtLk5hbWUpO1xuICAgICAgICBzdG9yZVZhcmlhYmxlKHZhcmlhYmxlLCBpdGVtLlZhbHVlKTtcbiAgICB9KTtcbiAgICAvLyBUaHJvdyBlcnJvciBpZiBhbnkgdmFsdWVzIGFyZSBtaXNzaW5nXG4gICAgY29uc3QgbWlzc2luZ1NlY3JldHMgPSBmYWxsYmFja1Jlc3VsdHMuaW52YWxpZFBhcmFtc1xuICAgICAgICAubWFwKChuYW1lKSA9PiBwYXJzZVNzbUZhbGxiYWNrUGF0aChuYW1lKSlcbiAgICAgICAgLmZpbHRlcigodmFyaWFibGUpID0+IHZhcmlhYmxlLmNvbnN0cnVjdE5hbWUgPT09IFwiU2VjcmV0XCIpXG4gICAgICAgIC5tYXAoKHZhcmlhYmxlKSA9PiB2YXJpYWJsZS5jb25zdHJ1Y3RJZCk7XG4gICAgaWYgKG1pc3NpbmdTZWNyZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZm9sbG93aW5nIHNlY3JldCB2YWx1ZXMgYXJlIG5vdCBzZXQgaW4gdGhlIFwiJHtwcm9jZXNzLmVudi5TU1RfU1RBR0V9IHN0YWdlXCI6ICR7bWlzc2luZ1NlY3JldHMuam9pbihcIiwgXCIpfWApO1xuICAgIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGxvYWRTZWNyZXRzKHBhdGhzKSB7XG4gICAgLy8gU3BsaXQgcGF0aHMgaW50byBjaHVua3Mgb2YgMTBcbiAgICBjb25zdCBjaHVua3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSArPSAxMCkge1xuICAgICAgICBjaHVua3MucHVzaChwYXRocy5zbGljZShpLCBpICsgMTApKTtcbiAgICB9XG4gICAgLy8gRmV0Y2ggc2VjcmV0c1xuICAgIGNvbnN0IHZhbGlkUGFyYW1zID0gW107XG4gICAgY29uc3QgaW52YWxpZFBhcmFtcyA9IFtdO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKGNodW5rcy5tYXAoYXN5bmMgKGNodW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgR2V0UGFyYW1ldGVyc0NvbW1hbmQoe1xuICAgICAgICAgICAgTmFtZXM6IGNodW5rLFxuICAgICAgICAgICAgV2l0aERlY3J5cHRpb246IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzc20uc2VuZChjb21tYW5kKTtcbiAgICAgICAgdmFsaWRQYXJhbXMucHVzaCguLi4ocmVzdWx0LlBhcmFtZXRlcnMgfHwgW10pKTtcbiAgICAgICAgaW52YWxpZFBhcmFtcy5wdXNoKC4uLihyZXN1bHQuSW52YWxpZFBhcmFtZXRlcnMgfHwgW10pKTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIHsgdmFsaWRQYXJhbXMsIGludmFsaWRQYXJhbXMgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlRW52TmFtZShlbnYpIHtcbiAgICBjb25zdCBbX1NTVCwgY29uc3RydWN0TmFtZSwgcHJvcE5hbWUsIC4uLmlkUGFydHNdID0gZW52LnNwbGl0KFwiX1wiKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25zdHJ1Y3ROYW1lLFxuICAgICAgICBjb25zdHJ1Y3RJZDogaWRQYXJ0cy5qb2luKFwiX1wiKSxcbiAgICAgICAgcHJvcE5hbWUsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlU3NtUGF0aChwYXRoKSB7XG4gICAgY29uc3QgcHJlZml4ID0gc3NtUHJlZml4KCk7XG4gICAgY29uc3QgcGFydHMgPSBwYXRoLnN1YnN0cmluZyhwcmVmaXgubGVuZ3RoKS5zcGxpdChcIi9cIik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29uc3RydWN0TmFtZTogcGFydHNbMF0sXG4gICAgICAgIGNvbnN0cnVjdElkOiBwYXJ0c1sxXSxcbiAgICAgICAgcHJvcE5hbWU6IHBhcnRzWzJdLFxuICAgIH07XG59XG5mdW5jdGlvbiBwYXJzZVNzbUZhbGxiYWNrUGF0aChwYXRoKSB7XG4gICAgY29uc3QgcGFydHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25zdHJ1Y3ROYW1lOiBwYXJ0c1s0XSxcbiAgICAgICAgY29uc3RydWN0SWQ6IHBhcnRzWzVdLFxuICAgICAgICBwcm9wTmFtZTogcGFydHNbNl0sXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGJ1aWxkU3NtUGF0aChkYXRhKSB7XG4gICAgcmV0dXJuIGAke3NzbVByZWZpeCgpfSR7ZGF0YS5jb25zdHJ1Y3ROYW1lfS8ke2RhdGEuY29uc3RydWN0SWR9LyR7ZGF0YS5wcm9wTmFtZX1gO1xufVxuZnVuY3Rpb24gYnVpbGRTc21GYWxsYmFja1BhdGgoZGF0YSkge1xuICAgIHJldHVybiBgL3NzdC8ke3Byb2Nlc3MuZW52LlNTVF9BUFB9Ly5mYWxsYmFjay8ke2RhdGEuY29uc3RydWN0TmFtZX0vJHtkYXRhLmNvbnN0cnVjdElkfS8ke2RhdGEucHJvcE5hbWV9YDtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUlkKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tL2csIFwiX1wiKTtcbn1cbmZ1bmN0aW9uIHNzbVByZWZpeCgpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuU1NUX1NTTV9QUkVGSVggfHwgXCJcIjtcbn1cbmZ1bmN0aW9uIHN0b3JlVmFyaWFibGUodmFyaWFibGUsIHZhbHVlKSB7XG4gICAgY29uc3QgeyBjb25zdHJ1Y3RJZDogaWQsIGNvbnN0cnVjdE5hbWU6IGMsIHByb3BOYW1lOiBwcm9wIH0gPSB2YXJpYWJsZTtcbiAgICBhbGxWYXJpYWJsZXNbY10gPSBhbGxWYXJpYWJsZXNbY10gfHwge307XG4gICAgYWxsVmFyaWFibGVzW2NdW2lkXSA9IGFsbFZhcmlhYmxlc1tjXVtpZF0gfHwge307XG4gICAgYWxsVmFyaWFibGVzW2NdW2lkXVtwcm9wXSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gYnVpbGRNaXNzaW5nQnVpbHRJbkVudkVycm9yKCkge1xuICAgIC8vIEJ1aWxkIGVudmlyb25tZW50ID0+IGJ1aWxkaW5nIFNTUiBzaXRlc1xuICAgIGlmIChwcm9jZXNzLmVudi5TU1QpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBgQ2Fubm90IGFjY2VzcyBib3VuZCByZXNvdXJjZXMuIFRoaXMgdXN1YWxseSBoYXBwZW5zIGlmIHRoZSBcInNzdC9ub2RlXCIgcGFja2FnZSBpcyB1c2VkIGF0IGJ1aWxkIHRpbWUuIEZvciBleGFtcGxlOmAsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgYCAgLSBUaGUgXCJzc3Qvbm9kZVwiIHBhY2thZ2UgaXMgdXNlZCBpbnNpZGUgdGhlIFwiZ2V0U3RhdGljUHJvcHMoKVwiIGZ1bmN0aW9uIG9mIGEgTmV4dC5qcyBhcHAuYCxcbiAgICAgICAgICAgIGAgIC0gVGhlIFwic3N0L25vZGVcIiBwYWNrYWdlIGlzIHVzZWQgYXQgdGhlIHRvcCBsZXZlbCBvdXRzaWRlIG9mIHRoZSBcImxvYWQoKVwiIGZ1bmN0aW9uIG9mIGEgU3ZlbHRlS2l0IGFwcC5gLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIGBQbGVhc2Ugd3JhcCB5b3VyIGJ1aWxkIHNjcmlwdCB3aXRoIFwic3N0IGJpbmRcIi4gRm9yIGV4YW1wbGUsIFwic3N0IGJpbmQgbmV4dCBidWlsZFwiLmAsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICBdLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuICAgIC8vIExhbWJkYS9Db2RlQnVpbGQgZW52aXJvbm1lbnQgPT4gRnVuY3Rpb24vSm9iIG9yIFNTUiBmdW5jdGlvblxuICAgIGlmIChwcm9jZXNzLmVudi5BV1NfTEFNQkRBX0ZVTkNUSU9OX05BTUUgfHwgcHJvY2Vzcy5lbnYuQ09ERUJVSUxEX0JVSUxEX0FSTikge1xuICAgICAgICByZXR1cm4gYENhbm5vdCBhY2Nlc3MgYm91bmQgcmVzb3VyY2VzLiBUaGlzIHVzdWFsbHkgaGFwcGVucyBpZiB5b3UgYXJlIHVzaW5nIGFuIG9sZGVyIHZlcnNpb24gb2YgU1NULiBQbGVhc2UgdXBkYXRlIFNTVCB0byB0aGUgbGF0ZXN0IHZlcnNpb24uYDtcbiAgICB9XG4gICAgLy8gVW5rbm93biBlbnZpcm9ubWVudCA9PiBjbGllbnQtc2lkZSBjb2RlXG4gICAgcmV0dXJuIGBDYW5ub3QgYWNjZXNzIGJvdW5kIHJlc291cmNlcy4gVGhpcyB1c3VhbGx5IGhhcHBlbnMgaWYgdGhlIFwic3N0L25vZGVcIiBwYWNrYWdlIGlzIHVzZWQgb24gdGhlIGNsaWVudC1zaWRlLiBFbnN1cmUgdGhhdCBpdCdzIG9ubHkgY2FsbGVkIGluIHlvdXIgc2VydmVyIGZ1bmN0aW9ucy5gO1xufVxuIl0sIm5hbWVzIjpbIkdldFBhcmFtZXRlcnNDb21tYW5kIiwiU1NNQ2xpZW50Iiwic3NtIiwicmVnaW9uIiwicHJvY2VzcyIsImVudiIsIlNTVF9SRUdJT04iLCJhbGxWYXJpYWJsZXMiLCJfcGxhY2Vob2xkZXIiLCJwYXJzZUVudmlyb25tZW50IiwiY3JlYXRlUHJveHkiLCJjb25zdHJ1Y3ROYW1lIiwicmVzdWx0IiwiUHJveHkiLCJnZXQiLCJ0YXJnZXQiLCJwcm9wIiwiU1NUX0FQUCIsIkVycm9yIiwiYnVpbGRNaXNzaW5nQnVpbHRJbkVudkVycm9yIiwibm9ybVByb3AiLCJub3JtYWxpemVJZCIsIlN0cmluZyIsIlJlZmxlY3QiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRWYXJpYWJsZXMyIiwidmFyaWFibGVzRnJvbVNzbSIsInZhcmlhYmxlc0Zyb21TZWNyZXQiLCJrZXlzIiwiZmlsdGVyIiwibmFtZSIsInN0YXJ0c1dpdGgiLCJmb3JFYWNoIiwidmFyaWFibGUiLCJwYXJzZUVudk5hbWUiLCJjb25zdHJ1Y3RJZCIsInByb3BOYW1lIiwidmFsdWUiLCJwdXNoIiwic3BsaXQiLCJzdG9yZVZhcmlhYmxlIiwiZmV0Y2hWYWx1ZXNGcm9tU1NNIiwic2VjcmV0TmFtZSIsInNzbVBhdGhzIiwibWFwIiwiYnVpbGRTc21QYXRoIiwibGVuZ3RoIiwicmVzdWx0cyIsImxvYWRTZWNyZXRzIiwidmFsaWRQYXJhbXMiLCJpdGVtIiwicGFyc2VTc21QYXRoIiwiTmFtZSIsIlZhbHVlIiwic3NtRmFsbGJhY2tQYXRocyIsImludmFsaWRQYXJhbXMiLCJidWlsZFNzbUZhbGxiYWNrUGF0aCIsImZhbGxiYWNrUmVzdWx0cyIsInBhcnNlU3NtRmFsbGJhY2tQYXRoIiwibWlzc2luZ1NlY3JldHMiLCJTU1RfU1RBR0UiLCJqb2luIiwicGF0aHMiLCJjaHVua3MiLCJpIiwic2xpY2UiLCJQcm9taXNlIiwiYWxsIiwiY2h1bmsiLCJjb21tYW5kIiwiTmFtZXMiLCJXaXRoRGVjcnlwdGlvbiIsInNlbmQiLCJQYXJhbWV0ZXJzIiwiSW52YWxpZFBhcmFtZXRlcnMiLCJfU1NUIiwiaWRQYXJ0cyIsInBhdGgiLCJwcmVmaXgiLCJzc21QcmVmaXgiLCJwYXJ0cyIsInN1YnN0cmluZyIsImRhdGEiLCJyZXBsYWNlIiwiU1NUX1NTTV9QUkVGSVgiLCJpZCIsImMiLCJTU1QiLCJBV1NfTEFNQkRBX0ZVTkNUSU9OX05BTUUiLCJDT0RFQlVJTERfQlVJTERfQVJOIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/sst@2.36.1_@types+react@18.2.37/node_modules/sst/node/util/index.js\n");

/***/ })

};
;