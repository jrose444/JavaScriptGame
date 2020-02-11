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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./movingObject.js */ \"./src/movingObject.js\");\n\nconst objectArray = []\n\nobjectArray.push(new MovingObject({\n  pos: [30, 30],\n  vel: [10, 10],\n  radius: 20,\n  color: \"#00FF00\"\n}));\n\nobjectArray.push(\n  new MovingObject({\n    pos: [30, 70],\n    vel: [20, 20],\n    radius: 40,\n    color: \"#00FF00\"\n  })\n);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n\n  const canvasEl = document.getElementById(\"game-canvas\");\n  canvasEl.width = 1000;\n  canvasEl.height = 1000;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  objectArray.forEach((el) => {\n      ctx.beginPath();\n      ctx.arc(el.pos[0], el.pos[1], el.radius, 0, 2 * Math.PI, true);\n      ctx.strokeStyle = el.color;\n      ctx.lineWidth = 5;\n      ctx.stroke();\n      ctx.fillStyle = el.color;\n      ctx.fill();\n                              })\n\n\n//   ctx.beginPath();\n//   ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);\n//   ctx.strokeStyle = \"green\";\n//   ctx.lineWidth = 5;\n//   ctx.stroke();\n//   ctx.fillStyle = \"blue\";\n//   ctx.fill();\n\n});\n\n\nwindow.MovingObject = MovingObject;\nconsole.log('hello')\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/movingObject.js":
/*!*****************************!*\
  !*** ./src/movingObject.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\n// MovingObject.prototype.draw = function draw() {\n\n//     const ctx = canvasEl.getContext(\"2d\");\n//     ctx.beginPath();\n//     ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);\n//     ctx.strokeStyle = \"green\";\n//     ctx.lineWidth = 5;\n//     ctx.stroke();\n//     ctx.fillStyle = \"blue\";\n//     ctx.fill();\n// };\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/movingObject.js?");

/***/ })

/******/ });