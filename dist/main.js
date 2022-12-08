/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pageload */ \"./src/pages/pageload.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about */ \"./src/pages/about.js\");\n\n\n\n\n\n(0,_pages_pageload__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst content = document.getElementById(\"content\");\n\nconst home = document.getElementById(\"home\");\nhome.addEventListener(\"click\",function(){\n    content.innerText=\"\";\n    (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\n\nconst aboutUs = document.getElementById(\"about\");\naboutUs.addEventListener(\"click\",function(){\n    content.innerText=\"\";\n    (0,_pages_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n})\n\nconst menu = document.getElementById(\"menu\");\nmenu.addEventListener(\"click\",function(){\n    content.innerText=\"\";\n    (0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\n//# sourceURL=webpack://restrauntpage-odin/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayAboutUs(){\n    const aboutContainer=document.createElement(\"div\");\n    aboutContainer.classList.add(\"about-container\");\n\n    const aboutHeader=document.createElement(\"div\");\n    aboutHeader.classList.add(\"about-header\");\n    aboutHeader.innerText=\"About Us\";\n    aboutContainer.appendChild(aboutHeader);\n\n    const aboutContent=document.createElement(\"div\");\n    aboutContent.classList.add(\"about-content\");\n    aboutContent.innerText=\"This restraunt is verygood\";\n    aboutContainer.appendChild(aboutContent);\n    \n    const aboutFooter=document.createElement(\"div\");\n    aboutFooter.classList.add(\"about-footer\");\n    aboutFooter.innerText=\"Contact us at:a4abhiram125@gmail.com\";\n    aboutContainer.appendChild(aboutFooter);\n\n    const content=document.getElementById(\"content\");\n    content.appendChild(aboutContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAboutUs);\n\n//# sourceURL=webpack://restrauntpage-odin/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayHome(){\n\n\tconst homeDiv = document.createElement('div');\n\tconst intro = document.createElement('p');\n\tintro.classList.add('intro');\n\tintro.textContent = 'Welcome to The Restraunt.';\n\n\tconst introSlogan = document.createElement('p');\n\tintroSlogan.classList.add('intro');\n\tintroSlogan.textContent = 'Good Food, Good Mood!'\n\n\n\thomeDiv.appendChild(intro);\n\thomeDiv.appendChild(introSlogan);\n\t\n\tconst content = document.getElementById('content');\n\tcontent.appendChild(homeDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);\n\n//# sourceURL=webpack://restrauntpage-odin/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayMenu)\n/* harmony export */ });\nfunction displayMenu(){\n    const menuContainer=document.createElement(\"div\");\n    menuContainer.classList.add(\"menu-container\");\n\n    const menuItem=document.createElement(\"div\");\n    menuContainer.appendChild(menuItem);\n    \n    const content= document.getElementById(\"content\");\n    content.appendChild(menuContainer);\n}\n\n//# sourceURL=webpack://restrauntpage-odin/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/pageload.js":
/*!*******************************!*\
  !*** ./src/pages/pageload.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addHeader)\n/* harmony export */ });\nfunction addHeader() {\n  const header = document.createElement(\"header\");\n\n  const titleContaier = document.createElement(\"div\");\n\n  const title = document.createElement(\"h1\");\n  title.innerText = \"Lorem Ipsum\";\n\n  const subTitle = document.createElement(\"div\");\n  subTitle.classList.add(\"sub-title\");\n  subTitle.innerText = \"The best food you can get at a reasonable price.\";\n\n  header.appendChild(title);\n  header.appendChild(subTitle);\n\n  const otherPages = document.createElement(\"div\");\n  const pagesList = document.createElement(\"ul\");\n\n  const homeItem = document.createElement(\"li\");\n  homeItem.innerText=\"Home\";\n  homeItem.setAttribute(\"id\",\"home\");\n  otherPages.appendChild(homeItem);\n\n  const menuItem = document.createElement(\"li\");\n  menuItem.innerText=\"Menu\";\n  menuItem.setAttribute(\"id\",\"menu\");\n  otherPages.appendChild(menuItem);\n\n  const aboutItem = document.createElement(\"li\");\n  aboutItem.innerText=\"About\";\n  aboutItem.setAttribute(\"id\",\"about\");\n  otherPages.appendChild(aboutItem);\n  header.appendChild(otherPages);\n  \n  const content=document.getElementById(\"content\");\n  content.appendChild(header);\n}\n\n\n//# sourceURL=webpack://restrauntpage-odin/./src/pages/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;