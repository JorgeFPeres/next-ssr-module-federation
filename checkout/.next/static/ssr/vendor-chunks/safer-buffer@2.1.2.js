"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safer-buffer@2.1.2";
exports.ids = ["vendor-chunks/safer-buffer@2.1.2"];
exports.modules = {

/***/ "../node_modules/.pnpm/safer-buffer@2.1.2/node_modules/safer-buffer/safer.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/.pnpm/safer-buffer@2.1.2/node_modules/safer-buffer/safer.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable node/no-deprecated-api */\n\n\n\nvar buffer = __webpack_require__(/*! buffer */ \"buffer\")\nvar Buffer = buffer.Buffer\n\nvar safer = {}\n\nvar key\n\nfor (key in buffer) {\n  if (!buffer.hasOwnProperty(key)) continue\n  if (key === 'SlowBuffer' || key === 'Buffer') continue\n  safer[key] = buffer[key]\n}\n\nvar Safer = safer.Buffer = {}\nfor (key in Buffer) {\n  if (!Buffer.hasOwnProperty(key)) continue\n  if (key === 'allocUnsafe' || key === 'allocUnsafeSlow') continue\n  Safer[key] = Buffer[key]\n}\n\nsafer.Buffer.prototype = Buffer.prototype\n\nif (!Safer.from || Safer.from === Uint8Array.from) {\n  Safer.from = function (value, encodingOrOffset, length) {\n    if (typeof value === 'number') {\n      throw new TypeError('The \"value\" argument must not be of type number. Received type ' + typeof value)\n    }\n    if (value && typeof value.length === 'undefined') {\n      throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof value)\n    }\n    return Buffer(value, encodingOrOffset, length)\n  }\n}\n\nif (!Safer.alloc) {\n  Safer.alloc = function (size, fill, encoding) {\n    if (typeof size !== 'number') {\n      throw new TypeError('The \"size\" argument must be of type number. Received type ' + typeof size)\n    }\n    if (size < 0 || size >= 2 * (1 << 30)) {\n      throw new RangeError('The value \"' + size + '\" is invalid for option \"size\"')\n    }\n    var buf = Buffer(size)\n    if (!fill || fill.length === 0) {\n      buf.fill(0)\n    } else if (typeof encoding === 'string') {\n      buf.fill(fill, encoding)\n    } else {\n      buf.fill(fill)\n    }\n    return buf\n  }\n}\n\nif (!safer.kStringMaxLength) {\n  try {\n    safer.kStringMaxLength = process.binding('buffer').kStringMaxLength\n  } catch (e) {\n    // we can't determine kStringMaxLength in environments where process.binding\n    // is unsupported, so let's not set it\n  }\n}\n\nif (!safer.constants) {\n  safer.constants = {\n    MAX_LENGTH: safer.kMaxLength\n  }\n  if (safer.kStringMaxLength) {\n    safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength\n  }\n}\n\nmodule.exports = safer\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NhZmVyLWJ1ZmZlckAyLjEuMi9ub2RlX21vZHVsZXMvc2FmZXItYnVmZmVyL3NhZmVyLmpzIiwibWFwcGluZ3MiOiJBQUFBOztBQUVZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyxzQkFBUTtBQUM3Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZWNrb3V0Ly4uL25vZGVfbW9kdWxlcy8ucG5wbS9zYWZlci1idWZmZXJAMi4xLjIvbm9kZV9tb2R1bGVzL3NhZmVyLWJ1ZmZlci9zYWZlci5qcz9lZTRiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vZGUvbm8tZGVwcmVjYXRlZC1hcGkgKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBidWZmZXIgPSByZXF1aXJlKCdidWZmZXInKVxudmFyIEJ1ZmZlciA9IGJ1ZmZlci5CdWZmZXJcblxudmFyIHNhZmVyID0ge31cblxudmFyIGtleVxuXG5mb3IgKGtleSBpbiBidWZmZXIpIHtcbiAgaWYgKCFidWZmZXIuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWVcbiAgaWYgKGtleSA9PT0gJ1Nsb3dCdWZmZXInIHx8IGtleSA9PT0gJ0J1ZmZlcicpIGNvbnRpbnVlXG4gIHNhZmVyW2tleV0gPSBidWZmZXJba2V5XVxufVxuXG52YXIgU2FmZXIgPSBzYWZlci5CdWZmZXIgPSB7fVxuZm9yIChrZXkgaW4gQnVmZmVyKSB7XG4gIGlmICghQnVmZmVyLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlXG4gIGlmIChrZXkgPT09ICdhbGxvY1Vuc2FmZScgfHwga2V5ID09PSAnYWxsb2NVbnNhZmVTbG93JykgY29udGludWVcbiAgU2FmZXJba2V5XSA9IEJ1ZmZlcltrZXldXG59XG5cbnNhZmVyLkJ1ZmZlci5wcm90b3R5cGUgPSBCdWZmZXIucHJvdG90eXBlXG5cbmlmICghU2FmZXIuZnJvbSB8fCBTYWZlci5mcm9tID09PSBVaW50OEFycmF5LmZyb20pIHtcbiAgU2FmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgb2YgdHlwZSBudW1iZXIuIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBBcnJheS1saWtlIE9iamVjdC4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gQnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cbn1cblxuaWYgKCFTYWZlci5hbGxvYykge1xuICBTYWZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgbnVtYmVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2Ygc2l6ZSlcbiAgICB9XG4gICAgaWYgKHNpemUgPCAwIHx8IHNpemUgPj0gMiAqICgxIDw8IDMwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyBzaXplICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gICAgfVxuICAgIHZhciBidWYgPSBCdWZmZXIoc2l6ZSlcbiAgICBpZiAoIWZpbGwgfHwgZmlsbC5sZW5ndGggPT09IDApIHtcbiAgICAgIGJ1Zi5maWxsKDApXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBidWYuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLmZpbGwoZmlsbClcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZlxuICB9XG59XG5cbmlmICghc2FmZXIua1N0cmluZ01heExlbmd0aCkge1xuICB0cnkge1xuICAgIHNhZmVyLmtTdHJpbmdNYXhMZW5ndGggPSBwcm9jZXNzLmJpbmRpbmcoJ2J1ZmZlcicpLmtTdHJpbmdNYXhMZW5ndGhcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIHdlIGNhbid0IGRldGVybWluZSBrU3RyaW5nTWF4TGVuZ3RoIGluIGVudmlyb25tZW50cyB3aGVyZSBwcm9jZXNzLmJpbmRpbmdcbiAgICAvLyBpcyB1bnN1cHBvcnRlZCwgc28gbGV0J3Mgbm90IHNldCBpdFxuICB9XG59XG5cbmlmICghc2FmZXIuY29uc3RhbnRzKSB7XG4gIHNhZmVyLmNvbnN0YW50cyA9IHtcbiAgICBNQVhfTEVOR1RIOiBzYWZlci5rTWF4TGVuZ3RoXG4gIH1cbiAgaWYgKHNhZmVyLmtTdHJpbmdNYXhMZW5ndGgpIHtcbiAgICBzYWZlci5jb25zdGFudHMuTUFYX1NUUklOR19MRU5HVEggPSBzYWZlci5rU3RyaW5nTWF4TGVuZ3RoXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzYWZlclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/.pnpm/safer-buffer@2.1.2/node_modules/safer-buffer/safer.js\n");

/***/ })

};
;