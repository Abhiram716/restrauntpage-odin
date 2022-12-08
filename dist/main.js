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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayHome(){\n\n\tconst homeDiv = document.createElement('div');\n\thomeDiv.classList.add(\"intro-container\");\n\tconst intro = document.createElement('p');\n\tintro.classList.add('intro');\n\tintro.textContent = 'Welcome to The Restraunt.';\n\n\tconst introSlogan = document.createElement('p');\n\tintroSlogan.classList.add('intro');\n\tintroSlogan.textContent = 'Good Food, Good Mood!'\n\n\n\thomeDiv.appendChild(intro);\n\thomeDiv.appendChild(introSlogan);\n\t\n\tconsole.log(homeDiv.innerHTML);\n\tconst content = document.getElementById('content');\n\tcontent.appendChild(homeDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);\n\n//# sourceURL=webpack://restrauntpage-odin/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayMenu() {\n  const menuContent = document.createElement(\"div\");\n  menuContent.classList.add(\"menu-content\");\n\n  const burger = document.createElement(\"div\");\n  const burgerTitle = document.createElement(\"h3\");\n  burgerTitle.textContent = \"The Chicken Burger\";\n\n  burger.appendChild(burgerTitle);\n\n  const pizza = document.createElement(\"div\");\n  const pizzaTitle = document.createElement(\"h3\");\n  pizzaTitle.textContent = \"The Peparoni Pizza\";\n  pizza.appendChild(pizzaTitle);\n  const cake = document.createElement(\"div\");\n  const cakeTitle = document.createElement(\"h3\");\n  cakeTitle.textContent = \"The Good Cake\";\n  cake.appendChild(cakeTitle);\n\n  const ice = document.createElement(\"div\");\n  const iceTitle = document.createElement(\"h3\");\n  iceTitle.textContent = \"The Good Icecream\";\n  ice.appendChild(iceTitle);\n\n  menuContent.appendChild(burger);\n  menuContent.appendChild(pizza);\n  menuContent.appendChild(cake);\n  menuContent.appendChild(ice);\n\n  \n  const content = document.getElementById(\"content\");\n  content.appendChild(menuContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n\n//# sourceURL=webpack://restrauntpage-odin/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/pageload.js":
/*!*******************************!*\
  !*** ./src/pages/pageload.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addHeader)\n/* harmony export */ });\nfunction addHeader() {\n  const headerContainer=document.getElementById(\"header-content\");\n  const header = document.createElement(\"header\");\n\n  const titleContaier = document.createElement(\"div\");\n  titleContaier.classList.add(\"title-container\");\n  const title = document.createElement(\"h1\");\n  title.innerText = \"Lorem Ipsum\";\n\n  const subTitle = document.createElement(\"div\");\n  subTitle.classList.add(\"sub-title\");\n  subTitle.innerText = \"The best food you can get at a reasonable price.\";\n\n  titleContaier.appendChild(title);\n  titleContaier.appendChild(subTitle);\n\n  // const otherPages = document.createElement(\"div\");\n  // const pagesList = document.createElement(\"ul\");\n\n  // const homeItem = document.createElement(\"li\");\n  // homeItem.innerText=\"Home\";\n  // homeItem.setAttribute(\"id\",\"home\");\n  // otherPages.appendChild(homeItem);\n\n  // const menuItem = document.createElement(\"li\");\n  // menuItem.innerText=\"Menu\";\n  // menuItem.setAttribute(\"id\",\"menu\");\n  // otherPages.appendChild(menuItem);\n\n  // const aboutItem = document.createElement(\"li\");\n  // aboutItem.innerText=\"About\";\n  // aboutItem.setAttribute(\"id\",\"about\");\n  // otherPages.appendChild(aboutItem);\n \n  //header.appendChild(otherPages);\n  const navContaienr = document.createElement(\"nav\");\n  const list = document.createElement(\"ul\");\n\n  const homeItem = document.createElement('li');\n\thomeItem.textContent = 'Home';\n\thomeItem.setAttribute(\"id\", \"home\");\n\tlist.appendChild(homeItem);\n\n\tconst menuItem = document.createElement('li');\n\tmenuItem.textContent = 'Menu';\n\tmenuItem.setAttribute(\"id\", \"menu\");\n\tlist.appendChild(menuItem);\n\n\tconst aboutItem = document.createElement('li');\n\taboutItem.textContent = 'About';\n\taboutItem.setAttribute(\"id\",\"about\");\n\tlist.appendChild(aboutItem);\n  navContaienr.appendChild(list);\n\n  header.appendChild(titleContaier);\n  header.appendChild(navContaienr);\n  headerContainer.appendChild(header);\n  console.log(headerContainer);\n}\n\n\n//# sourceURL=webpack://restrauntpage-odin/./src/pages/pageload.js?");

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