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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 303);
/******/ })
/************************************************************************/
/******/ ({

/***/ 114:
/* no static exports found */
/* all exports used */
/*!************************!*\
  !*** ./app/console.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconsole.log('Hello, console!');//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb25zb2xlLmpzPzIxMTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ0hlbGxvLCBjb25zb2xlIScpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb25zb2xlLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 115:
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _person = __webpack_require__(/*! ./lib/person */ 118);\n\nvar _person2 = _interopRequireDefault(_person);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction component() {\n  var element = document.createElement('div');\n\n  /* lodash is required for the next line to work */\n  element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n\n  return element;\n}\n\ndocument.body.appendChild(component());\n\nvar Friend = function (_Person) {\n  _inherits(Friend, _Person);\n\n  function Friend(name) {\n    _classCallCheck(this, Friend);\n\n    return _possibleConstructorReturn(this, (Friend.__proto__ || Object.getPrototypeOf(Friend)).call(this, name));\n  }\n\n  _createClass(Friend, [{\n    key: 'callName',\n    value: function callName() {\n      alert(this.name);\n    }\n  }]);\n\n  return Friend;\n}(_person2.default);\n\nvar friend = new Friend('Foo');\n\nfriend.callName();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9pbmRleC5qcz8yMDE4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbXBvbmVudCAoKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgLyogbG9kYXNoIGlzIHJlcXVpcmVkIGZvciB0aGUgbmV4dCBsaW5lIHRvIHdvcmsgKi9cbiAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsJ3dlYnBhY2snXSwgJyAnKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5cblxuaW1wb3J0IFBlcnNvbiBmcm9tICcuL2xpYi9wZXJzb24nO1xuXG5jbGFzcyBGcmllbmQgZXh0ZW5kcyBQZXJzb257XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIGNhbGxOYW1lKCkge1xuICAgICAgYWxlcnQodGhpcy5uYW1lKTtcbiAgICB9XG59XG5cbmxldCBmcmllbmQgPSBuZXcgRnJpZW5kKCdGb28nKTtcblxuZnJpZW5kLmNhbGxOYW1lKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7O0FBWUE7QUFDQTs7Ozs7Ozs7Ozs7QUFiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 118:
/* no static exports found */
/* all exports used */
/*!***************************!*\
  !*** ./app/lib/person.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Person = function Person(name) {\n  _classCallCheck(this, Person);\n\n  this.name = name;\n};\n\nexports.default = Person;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9saWIvcGVyc29uLmpzPzI1ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGVyc29uIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvbGliL3BlcnNvbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 303:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** multi ./app/index.js ./app/console.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./app/index.js */115);
module.exports = __webpack_require__(/*! ./app/console.js */114);


/***/ })

/******/ });