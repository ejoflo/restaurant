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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: aboutContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aboutContent\", function() { return aboutContent; });\nfunction aboutContent() {\n    const aboutText = document.createElement('pre');\n\n    aboutText.textContent = `Welcome to the home of đụ mámái Restaurant! This is your premiere stop for the greatest Vietnamese food\nHawaii has ever tasted! Our chefs are da best!\n\nWe make good food pho you!`;\n\n    while (info.firstChild) {\n        info.removeChild(info.firstChild);\n    }\n    info.appendChild(aboutText);\n}\n\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: contactContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactContent\", function() { return contactContent; });\nfunction contactContent() {\n    const contactText = document.createElement('pre');\n\n    contactText.textContent = `This is where the contact information will go.`;\n\n    while (info.firstChild) {\n        info.removeChild(info.firstChild);\n    }\n    info.appendChild(contactText);\n}\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-init.js */ \"./src/page-init.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nObject(_page_init_js__WEBPACK_IMPORTED_MODULE_0__[\"frontPage\"])();\nObject(_about_js__WEBPACK_IMPORTED_MODULE_1__[\"aboutContent\"])();\n// menuContent();\n// contactContent();\n\nconst createListeners = function() {\n    const aboutTab = document.querySelector('.aboutActive');\n    const menuTab = document.querySelector('.food');\n    const contactTab = document.querySelector('.contact');\n\n    // aboutTab.addEventListener('click', aboutContent);\n    aboutTab.addEventListener('click', function() {\n        aboutTab.classList = 'aboutActive';\n        menuTab.classList = 'food';\n        contactTab.classList = 'contact';\n        Object(_about_js__WEBPACK_IMPORTED_MODULE_1__[\"aboutContent\"])();\n    });\n    // menuTab.addEventListener('click', menuContent);\n    menuTab.addEventListener('click', function() {\n        aboutTab.classList = 'about';\n        menuTab.classList = 'foodActive';\n        contactTab.classList = 'contact';\n        Object(_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"menuContent\"])();\n    });\n    // contactTab.addEventListener('click', contactContent);\n    contactTab.addEventListener('click', function() {\n        aboutTab.classList = 'about';\n        menuTab.classList = 'food';\n        contactTab.classList = 'contactActive';\n        Object(_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"contactContent\"])();\n    });\n};\n\ncreateListeners();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: menuContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuContent\", function() { return menuContent; });\nfunction menuContent() {\n    const menu = document.createElement('img');\n    \n    menu.src = '../dist/img/viet_menu.jpg';\n    menu.setAttribute('class', 'foodMenu');\n\n    while (info.firstChild) {\n        info.removeChild(info.firstChild);\n    }\n    info.appendChild(menu);\n}    \n\n\n    \n    \n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/page-init.js":
/*!**************************!*\
  !*** ./src/page-init.js ***!
  \**************************/
/*! exports provided: frontPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"frontPage\", function() { return frontPage; });\nconst content = document.getElementById('content');\nconst main = document.createElement('div');\nconst header = document.createElement('h1');\nconst hero = document.createElement('img');\nconst menu = document.createElement('div');\nconst about = document.createElement('p');\nconst food = document.createElement('p');\nconst contact = document.createElement('p');\nconst info = document.createElement('div');\n\nconst frontPage = function() {\n    hero.src = '../dist/img/viet_food.jpg';\n    hero.setAttribute('class', 'hero');\n\n    content.appendChild(main);\n\n    main.setAttribute('id', 'main');\n    main.appendChild(header);\n    main.appendChild(hero);\n    main.appendChild(menu);\n    main.appendChild(info);\n\n    menu.setAttribute('id', 'menu');\n    info.setAttribute('id', 'info');\n\n    header.textContent = 'đụ mámái Restaurant';\n\n    menu.appendChild(about);\n    about.setAttribute('class', 'aboutActive');\n    about.textContent = 'ABOUT';\n\n    menu.appendChild(food);\n    food.setAttribute('class', 'food');\n    food.textContent = 'MENU';\n\n    menu.appendChild(contact);\n    contact.setAttribute('class', 'contact');\n    contact.textContent = 'CONTACT';\n}\n\n\n\n//# sourceURL=webpack:///./src/page-init.js?");

/***/ })

/******/ });