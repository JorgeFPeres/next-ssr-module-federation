/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "../node_modules/.pnpm/@module-federation+node@2.6.8_next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0__react-_w4xmf7avjwoqx2vntsbjo4qlo4/node_modules/@module-federation/node/dist/src/utils sync recursive":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@module-federation+node@2.6.8_next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0__react-_w4xmf7avjwoqx2vntsbjo4qlo4/node_modules/@module-federation/node/dist/src/utils/ sync ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../node_modules/.pnpm/@module-federation+node@2.6.8_next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0__react-_w4xmf7avjwoqx2vntsbjo4qlo4/node_modules/@module-federation/node/dist/src/utils sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"../node_modules/.pnpm/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _module_federation_nextjs_mf_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @module-federation/nextjs-mf/utils */ \"../node_modules/.pnpm/@module-federation+nextjs-mf@8.7.8_next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0__r_pcycuvtzz5zlkowjzy2vwyrhb4/node_modules/@module-federation/nextjs-mf/dist/utils/index.js\");\n/* harmony import */ var _module_federation_nextjs_mf_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_module_federation_nextjs_mf_utils__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        if ( true && !ctx.req.url.includes(\"_next\")) {\n            await (0,_module_federation_nextjs_mf_utils__WEBPACK_IMPORTED_MODULE_3__.revalidate)().then((shouldReload)=>{\n                if (shouldReload) {\n                    ctx.res.writeHead(302, {\n                        Location: ctx.req.url\n                    });\n                    ctx.res.end();\n                }\n            });\n        } else {\n            ctx?.res?.on(\"finish\", ()=>{\n                (0,_module_federation_nextjs_mf_utils__WEBPACK_IMPORTED_MODULE_3__.revalidate)();\n            });\n        }\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n        const chunks = await (0,_module_federation_nextjs_mf_utils__WEBPACK_IMPORTED_MODULE_3__.flushChunks)();\n        return {\n            ...initialProps,\n            chunks\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"robots\",\n                            content: \"noindex\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jorgeperes/Desktop/teste/module-federation-poc/nextjs-ssr-poc/checkout/pages/_document.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_module_federation_nextjs_mf_utils__WEBPACK_IMPORTED_MODULE_3__.FlushedChunks, {\n                            chunks: this.props.chunks\n                        }, void 0, false, {\n                            fileName: \"/Users/jorgeperes/Desktop/teste/module-federation-poc/nextjs-ssr-poc/checkout/pages/_document.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jorgeperes/Desktop/teste/module-federation-poc/nextjs-ssr-poc/checkout/pages/_document.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    className: \"bg-background-grey\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/Users/jorgeperes/Desktop/teste/module-federation-poc/nextjs-ssr-poc/checkout/pages/_document.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/jorgeperes/Desktop/teste/module-federation-poc/nextjs-ssr-poc/checkout/pages/_document.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jorgeperes/Desktop/teste/module-federation-poc/nextjs-ssr-poc/checkout/pages/_document.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jorgeperes/Desktop/teste/module-federation-poc/nextjs-ssr-poc/checkout/pages/_document.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUM3QztBQUNrRTtBQUU1RixNQUFNUyxtQkFBbUJULHNEQUFRQTtJQUMvQixhQUFhVSxnQkFBZ0JDLEdBQUcsRUFBRTtRQUNoQyxJQUFJQyxLQUF5QixJQUFpQixDQUFDRCxJQUFJRSxHQUFHLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLFVBQVU7WUFDNUUsTUFBTVQsOEVBQVVBLEdBQUdVLElBQUksQ0FBQ0MsQ0FBQUE7Z0JBQ3RCLElBQUlBLGNBQWM7b0JBQ2hCTixJQUFJTyxHQUFHLENBQUNDLFNBQVMsQ0FBQyxLQUFLO3dCQUFFQyxVQUFVVCxJQUFJRSxHQUFHLENBQUNDLEdBQUc7b0JBQUM7b0JBQy9DSCxJQUFJTyxHQUFHLENBQUNHLEdBQUc7Z0JBQ2I7WUFDRjtRQUNGLE9BQU87WUFDTFYsS0FBS08sS0FBS0ksR0FBRyxVQUFVO2dCQUNyQmhCLDhFQUFVQTtZQUNaO1FBQ0Y7UUFDQSxNQUFNaUIsZUFBZSxNQUFNdkIsb0VBQXdCLENBQUNXO1FBQ3BELE1BQU1hLFNBQVMsTUFBTWhCLCtFQUFXQTtRQUVoQyxPQUFPO1lBQ0wsR0FBR2UsWUFBWTtZQUNmQztRQUNGO0lBQ0Y7SUFFQUMsU0FBUztRQUNQLHFCQUNFLDhEQUFDeEIsK0NBQUlBOzs4QkFDSCw4REFBQ0MsK0NBQUlBOztzQ0FDSCw4REFBQ3dCOzRCQUFLQyxNQUFLOzRCQUFTQyxTQUFROzs7Ozs7c0NBQzVCLDhEQUFDckIsNkVBQWFBOzRCQUFDaUIsUUFBUSxJQUFJLENBQUNLLEtBQUssQ0FBQ0wsTUFBTTs7Ozs7Ozs7Ozs7OzhCQUcxQyw4REFBQ007b0JBQUtDLFdBQVU7O3NDQUNkLDhEQUFDNUIsK0NBQUlBOzs7OztzQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUluQjtBQUNGO0FBRUEsaUVBQWVLLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVja291dC8uL3BhZ2VzL19kb2N1bWVudC5qcz81MzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZSwgRmx1c2hlZENodW5rcywgZmx1c2hDaHVua3MgfSBmcm9tICdAbW9kdWxlLWZlZGVyYXRpb24vbmV4dGpzLW1mL3V0aWxzJztcblxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgIWN0eC5yZXEudXJsLmluY2x1ZGVzKCdfbmV4dCcpKSB7XG4gICAgICBhd2FpdCByZXZhbGlkYXRlKCkudGhlbihzaG91bGRSZWxvYWQgPT4ge1xuICAgICAgICBpZiAoc2hvdWxkUmVsb2FkKSB7XG4gICAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBjdHgucmVxLnVybCB9KTtcbiAgICAgICAgICBjdHgucmVzLmVuZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4Py5yZXM/Lm9uKCdmaW5pc2gnLCAoKSA9PiB7XG4gICAgICAgIHJldmFsaWRhdGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBjb25zdCBjaHVua3MgPSBhd2FpdCBmbHVzaENodW5rcygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmluaXRpYWxQcm9wcyxcbiAgICAgIGNodW5rcyxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5cbiAgICAgICAgICA8Rmx1c2hlZENodW5rcyBjaHVua3M9e3RoaXMucHJvcHMuY2h1bmtzfSAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiYmctYmFja2dyb3VuZC1ncmV5XCI+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeURvY3VtZW50O1xuIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIlJlYWN0IiwicmV2YWxpZGF0ZSIsIkZsdXNoZWRDaHVua3MiLCJmbHVzaENodW5rcyIsIk15RG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwcm9jZXNzIiwicmVxIiwidXJsIiwiaW5jbHVkZXMiLCJ0aGVuIiwic2hvdWxkUmVsb2FkIiwicmVzIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJvbiIsImluaXRpYWxQcm9wcyIsImNodW5rcyIsInJlbmRlciIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BzIiwiYm9keSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "data:text/javascript;base64,CiAgICBpZih0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgewogICAgZ2xvYmFsVGhpcy5lbnRyeUNodW5rQ2FjaGUgPSBnbG9iYWxUaGlzLmVudHJ5Q2h1bmtDYWNoZSB8fCBuZXcgU2V0KCk7CiAgICBtb2R1bGUuZmlsZW5hbWUgJiYgZ2xvYmFsVGhpcy5lbnRyeUNodW5rQ2FjaGUuYWRkKG1vZHVsZS5maWxlbmFtZSk7CiAgICBpZihtb2R1bGUuY2hpbGRyZW4pIHsKICAgIG1vZHVsZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGMpIHsKICAgICAgYy5maWxlbmFtZSAmJiBnbG9iYWxUaGlzLmVudHJ5Q2h1bmtDYWNoZS5hZGQoYy5maWxlbmFtZSk7CiAgICB9KQp9CiAgfQogICAg":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:text/javascript;base64,CiAgICBpZih0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgewogICAgZ2xvYmFsVGhpcy5lbnRyeUNodW5rQ2FjaGUgPSBnbG9iYWxUaGlzLmVudHJ5Q2h1bmtDYWNoZSB8fCBuZXcgU2V0KCk7CiAgICBtb2R1bGUuZmlsZW5hbWUgJiYgZ2xvYmFsVGhpcy5lbnRyeUNodW5rQ2FjaGUuYWRkKG1vZHVsZS5maWxlbmFtZSk7CiAgICBpZihtb2R1bGUuY2hpbGRyZW4pIHsKICAgIG1vZHVsZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGMpIHsKICAgICAgYy5maWxlbmFtZSAmJiBnbG9iYWxUaGlzLmVudHJ5Q2h1bmtDYWNoZS5hZGQoYy5maWxlbmFtZSk7CiAgICB9KQp9CiAgfQogICAg ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n    if(typeof module !== 'undefined') {\n    globalThis.entryChunkCache = globalThis.entryChunkCache || new Set();\n    module.filename && globalThis.entryChunkCache.add(module.filename);\n    if(module.children) {\n    module.children.forEach(function(c) {\n      c.filename && globalThis.entryChunkCache.add(c.filename);\n    })\n}\n  }\n    //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YTp0ZXh0L2phdmFzY3JpcHQ7YmFzZTY0LENpQWdJQ0JwWmloMGVYQmxiMllnYlc5a2RXeGxJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5a2dld29nSUNBZ1oyeHZZbUZzVkdocGN5NWxiblJ5ZVVOb2RXNXJRMkZqYUdVZ1BTQm5iRzlpWVd4VWFHbHpMbVZ1ZEhKNVEyaDFibXREWVdOb1pTQjhmQ0J1WlhjZ1UyVjBLQ2s3Q2lBZ0lDQnRiMlIxYkdVdVptbHNaVzVoYldVZ0ppWWdaMnh2WW1Gc1ZHaHBjeTVsYm5SeWVVTm9kVzVyUTJGamFHVXVZV1JrS0cxdlpIVnNaUzVtYVd4bGJtRnRaU2s3Q2lBZ0lDQnBaaWh0YjJSMWJHVXVZMmhwYkdSeVpXNHBJSHNLSUNBZ0lHMXZaSFZzWlM1amFHbHNaSEpsYmk1bWIzSkZZV05vS0daMWJtTjBhVzl1S0dNcElIc0tJQ0FnSUNBZ1l5NW1hV3hsYm1GdFpTQW1KaUJuYkc5aVlXeFVhR2x6TG1WdWRISjVRMmgxYm10RFlXTm9aUzVoWkdRb1l5NW1hV3hsYm1GdFpTazdDaUFnSUNCOUtRcDlDaUFnZlFvZ0lDQWciLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlY2tvdXQvZGF0YTp0ZXh0L2phdmFzY3JpcHQ7YmFzZTY0LENpQWdJQ0JwWmloMGVYQmxiMllnYlc5a2RXeGxJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5a2dld29nSUNBZ1oyeHZZbUZzVkdocGN5NWxiblJ5ZVVOb2RXNXJRMkZqYUdVZ1BTQm5iRzlpWVd4VWFHbHpMbVZ1ZEhKNVEyaDFibXREWVdOb1pTQjhmQ0J1WlhjZ1UyVjBLQ2s3Q2lBZ0lDQnRiMlIxYkdVdVptbHNaVzVoYldVZ0ppWWdaMnh2WW1Gc1ZHaHBjeTVsYm5SeWVVTm9kVzVyUTJGamFHVXVZV1JrS0cxdlpIVnNaUzVtYVd4bGJtRnRaU2s3Q2lBZ0lDQnBaaWh0YjJSMWJHVXVZMmhwYkdSeVpXNHBJSHNLSUNBZ0lHMXZaSFZzWlM1amFHbHNaSEpsYmk1bWIzSkZZV05vS0daMWJtTjBhVzl1S0dNcElIc0tJQ0FnSUNBZ1l5NW1hV3hsYm1GdFpTQW1KaUJuYkc5aVlXeFVhR2x6TG1WdWRISjVRMmgxYm10RFlXTm9aUzVoWkdRb1l5NW1hV3hsYm1GdFpTazdDaUFnSUNCOUtRcDlDaUFnZlFvZ0lDQWc/YTY1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpZih0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbFRoaXMuZW50cnlDaHVua0NhY2hlID0gZ2xvYmFsVGhpcy5lbnRyeUNodW5rQ2FjaGUgfHwgbmV3IFNldCgpO1xuICAgIG1vZHVsZS5maWxlbmFtZSAmJiBnbG9iYWxUaGlzLmVudHJ5Q2h1bmtDYWNoZS5hZGQobW9kdWxlLmZpbGVuYW1lKTtcbiAgICBpZihtb2R1bGUuY2hpbGRyZW4pIHtcbiAgICBtb2R1bGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjKSB7XG4gICAgICBjLmZpbGVuYW1lICYmIGdsb2JhbFRoaXMuZW50cnlDaHVua0NhY2hlLmFkZChjLmZpbGVuYW1lKTtcbiAgICB9KVxufVxuICB9XG4gICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///data:text/javascript;base64,CiAgICBpZih0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgewogICAgZ2xvYmFsVGhpcy5lbnRyeUNodW5rQ2FjaGUgPSBnbG9iYWxUaGlzLmVudHJ5Q2h1bmtDYWNoZSB8fCBuZXcgU2V0KCk7CiAgICBtb2R1bGUuZmlsZW5hbWUgJiYgZ2xvYmFsVGhpcy5lbnRyeUNodW5rQ2FjaGUuYWRkKG1vZHVsZS5maWxlbmFtZSk7CiAgICBpZihtb2R1bGUuY2hpbGRyZW4pIHsKICAgIG1vZHVsZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGMpIHsKICAgICAgYy5maWxlbmFtZSAmJiBnbG9iYWxUaGlzLmVudHJ5Q2h1bmtDYWNoZS5hZGQoYy5maWxlbmFtZSk7CiAgICB9KQp9CiAgfQogICAg\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))



var promises = [];
var __webpack_exports__ = Promise.all([
	__webpack_require__.f.consumes || function(chunkId, promises) {},
	__webpack_require__.f.remotes || function(chunkId, promises) {},
].reduce((p, handler) => (handler('pages/_document', p), p), promises)
).then(() => (__webpack_require__.X(0, ["vendor-chunks/next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0","vendor-chunks/@swc+helpers@0.5.2","vendor-chunks/@module-federation+nextjs-mf@8.7.8_next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0__r_pcycuvtzz5zlkowjzy2vwyrhb4","vendor-chunks/@module-federation+runtime@0.7.3","vendor-chunks/@module-federation+sdk@0.7.3","vendor-chunks/@module-federation+node@2.6.8_next@14.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0__react-_w4xmf7avjwoqx2vntsbjo4qlo4","vendor-chunks/tr46@0.0.3","vendor-chunks/iconv-lite@0.6.3","vendor-chunks/node-fetch@2.7.0_encoding@0.1.13","vendor-chunks/whatwg-url@5.0.0","vendor-chunks/webidl-conversions@3.0.1","vendor-chunks/encoding@0.1.13","vendor-chunks/safer-buffer@2.1.2"], () => (__webpack_exec__("data:text/javascript;base64,CiAgICBpZih0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgewogICAgZ2xvYmFsVGhpcy5lbnRyeUNodW5rQ2FjaGUgPSBnbG9iYWxUaGlzLmVudHJ5Q2h1bmtDYWNoZSB8fCBuZXcgU2V0KCk7CiAgICBtb2R1bGUuZmlsZW5hbWUgJiYgZ2xvYmFsVGhpcy5lbnRyeUNodW5rQ2FjaGUuYWRkKG1vZHVsZS5maWxlbmFtZSk7CiAgICBpZihtb2R1bGUuY2hpbGRyZW4pIHsKICAgIG1vZHVsZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGMpIHsKICAgICAgYy5maWxlbmFtZSAmJiBnbG9iYWxUaGlzLmVudHJ5Q2h1bmtDYWNoZS5hZGQoYy5maWxlbmFtZSk7CiAgICB9KQp9CiAgfQogICAg"), __webpack_exec__("./pages/_document.js")))));
module.exports = __webpack_exports__;

})();