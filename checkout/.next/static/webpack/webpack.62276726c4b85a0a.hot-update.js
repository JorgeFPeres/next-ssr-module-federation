"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecheckout"]("webpack",{},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d22115fe0b2660e2"; }
/******/ }();
/******/ 
/******/ /* webpack/runtime/remotes loading */
/******/ !function() {
/******/ 	var chunkMapping = {
/******/ 		"__federation_expose_pages__index": [
/******/ 			"webpack/container/remote/home/home"
/******/ 		],
/******/ 		"__federation_expose_pages__shop": [
/******/ 			"webpack/container/remote/shop/shop"
/******/ 		],
/******/ 		"__federation_expose_pages__p__[...slug]": [
/******/ 			"webpack/container/remote/shop/pdp"
/******/ 		],
/******/ 		"pages/index": [
/******/ 			"webpack/container/remote/home/home"
/******/ 		],
/******/ 		"pages/shop": [
/******/ 			"webpack/container/remote/shop/shop"
/******/ 		],
/******/ 		"webpack_container_remote_home_nav": [
/******/ 			"webpack/container/remote/home/nav"
/******/ 		]
/******/ 	};
/******/ 	var idToExternalAndNameMapping = {
/******/ 		"webpack/container/remote/home/home": [
/******/ 			"default",
/******/ 			"./home",
/******/ 			"webpack/container/reference/home"
/******/ 		],
/******/ 		"webpack/container/remote/shop/shop": [
/******/ 			"default",
/******/ 			"./shop",
/******/ 			"webpack/container/reference/shop"
/******/ 		],
/******/ 		"webpack/container/remote/shop/pdp": [
/******/ 			"default",
/******/ 			"./pdp",
/******/ 			"webpack/container/reference/shop"
/******/ 		],
/******/ 		"webpack/container/remote/home/nav": [
/******/ 			"default",
/******/ 			"./nav",
/******/ 			"webpack/container/reference/home"
/******/ 		]
/******/ 	};
/******/ 	var idToRemoteMap = {
/******/ 		"webpack/container/remote/home/home": [
/******/ 			{
/******/ 				"externalType": "script",
/******/ 				"name": "home",
/******/ 				"externalModuleId": "webpack/container/reference/home"
/******/ 			}
/******/ 		],
/******/ 		"webpack/container/remote/shop/shop": [
/******/ 			{
/******/ 				"externalType": "script",
/******/ 				"name": "shop",
/******/ 				"externalModuleId": "webpack/container/reference/shop"
/******/ 			}
/******/ 		],
/******/ 		"webpack/container/remote/shop/pdp": [
/******/ 			{
/******/ 				"externalType": "script",
/******/ 				"name": "shop",
/******/ 				"externalModuleId": "webpack/container/reference/shop"
/******/ 			}
/******/ 		],
/******/ 		"webpack/container/remote/home/nav": [
/******/ 			{
/******/ 				"externalType": "script",
/******/ 				"name": "home",
/******/ 				"externalModuleId": "webpack/container/reference/home"
/******/ 			}
/******/ 		]
/******/ 	};
/******/ 	__webpack_require__.federation.bundlerRuntimeOptions.remotes = {idToRemoteMap,chunkMapping, idToExternalAndNameMapping, webpackRequire:__webpack_require__};
/******/ 	__webpack_require__.f.remotes = function(chunkId, promises) {
/******/ 		__webpack_require__.federation.bundlerRuntime.remotes({idToRemoteMap,chunkMapping, idToExternalAndNameMapping, chunkId, promises, webpackRequire:__webpack_require__});
/******/ 	}
/******/ }();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ !function() {
/******/ 	__webpack_require__.federation.initOptions.shared = {	"next/dynamic": [{	version: "14.1.4",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_next_14_1_4_react-dom_18_2_0_react_18_2_0__react_18_2_0_node_modules_next_d-05c45e1").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dynamic.js */ "../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dynamic.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/head": [{	version: "14.1.4",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_next_14_1_4_react-dom_18_2_0_react_18_2_0__react_18_2_0_node_modules_next_h-09e2601").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/head.js */ "../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/head.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/image": [{	version: "14.1.4",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_next_14_1_4_react-dom_18_2_0_react_18_2_0__react_18_2_0_node_modules_next_i-4c77990").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/image.js */ "../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/image.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/link": [{	version: "14.1.4",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_next_14_1_4_react-dom_18_2_0_react_18_2_0__react_18_2_0_node_modules_next_l-41a2650").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/link.js */ "../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/link.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/router": [{	version: "14.1.4",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_next_14_1_4_react-dom_18_2_0_react_18_2_0__react_18_2_0_node_modules_next_r-3dd7000").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/router.js */ "../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/router.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/script": [{	version: "14.1.4",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_next_14_1_4_react-dom_18_2_0_react_18_2_0__react_18_2_0_node_modules_next_s-640db40").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/script.js */ "../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/script.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react-dom/client": [{	version: "18.2.0",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_react-dom_18_2_0_react_18_2_0_node_modules_react-dom_client_js-_6cd00").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js */ "../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react-dom": [{	version: "18.2.0",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_react-dom_18_2_0_react_18_2_0_node_modules_react-dom_index_js").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js */ "../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react/jsx-dev-runtime": [{	version: "18.2.0",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_react_18_2_0_node_modules_react_jsx-dev-runtime_js-_92801").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react/jsx-runtime": [{	version: "18.2.0",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_react_18_2_0_node_modules_react_jsx-runtime_js-_d7b61").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react": [{	version: "18.2.0",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_react_18_2_0_node_modules_react_index_js").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js */ "../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"styled-jsx/style": [{	version: "5.1.1",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_styled-jsx_5_1_1_react_18_2_0_node_modules_styled-jsx_style_js-_84001").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/style.js */ "../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/style.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^5.1.1","strictVersion":false,"singleton":true}},],	"styled-jsx": [{	version: "5.1.1",
/******/ 			get: function() { return __webpack_require__.e("node_modules_pnpm_styled-jsx_5_1_1_react_18_2_0_node_modules_styled-jsx_index_js-_2c660").then(function() { return function() { return __webpack_require__(/*! ../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/index.js */ "../node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/index.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^5.1.1","strictVersion":false,"singleton":true}},],}
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = function(name, initScope) {
/******/ 		return __webpack_require__.federation.bundlerRuntime.I({	shareScopeName: name,
/******/ 			webpackRequire: __webpack_require__,
/******/ 			initPromises: initPromises,
/******/ 			initTokens: initTokens,
/******/ 			initScope: initScope,
/******/ 		})
/******/ 	};
/******/ }();
/******/ 
/******/ }
);