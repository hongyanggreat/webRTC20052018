/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const openStream = __webpack_require__(/*! ./openStream */ \"./src/openStream.js\");\r\n\r\nopenStream();\r\n\r\nconsole.log(\"resolve : How to move file main.js from dist to public\");\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/openStream.js":
/*!***************************!*\
  !*** ./src/openStream.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const playVideo = __webpack_require__(/*! ./playVideo */ \"./src/playVideo.js\");\r\n\r\nfunction openStream(){\r\n\tnavigator.mediaDevices.getUserMedia({ audio: false, video: true })\r\n\t.then(stream => playVideo(stream,\"localStream\"))\r\n\t.catch(err => console.log(err));\r\n}\r\n\r\nmodule.exports = openStream;\r\n\n\n//# sourceURL=webpack:///./src/openStream.js?");

/***/ }),

/***/ "./src/playVideo.js":
/*!**************************!*\
  !*** ./src/playVideo.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function playVideo(stream, idVideo) {\r\n\t// console.log(stream);\r\n\tconst video            = document.getElementById(idVideo);\r\n\tvideo.srcObject        = stream;\r\n\tvideo.onloadedmetadata = function(e) {\r\n\t\tvideo.play();\r\n\t};\r\n}\r\nconsole.log(\"day nay thay doi luon moi so\");\r\nmodule.exports = playVideo;\r\n\n\n//# sourceURL=webpack:///./src/playVideo.js?");

/***/ })

/******/ });