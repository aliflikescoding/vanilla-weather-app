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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = (() => {\n  const body = document.querySelector(\"body\");\n  const root = document.documentElement;\n  const buttonModeText = document.querySelector(\"#buttonModeText\");\n  const buttonMode = document.querySelector(\"#buttonTemp\");\n  const searchBar = document.querySelector(\"#searchBar\");\n\n  function checkMode() {\n    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n      body.classList.remove(\"light\");\n      buttonModeText.classList.remove(\"bi-sun-fill\");\n      buttonModeText.classList.add(\"bi-moon-fill\");\n      root.style.setProperty(\"--background\", \"#0a1120\");\n      root.style.setProperty(\"--background-shade\", \"#1b212e\");\n      root.style.setProperty(\"--text\", \"#ffffff\");\n      root.style.setProperty(\"--some-text\", \"var(--text)\");\n    }\n  }\n\n  function changeMode() {\n    if (body.classList.contains(\"light\")) {\n      body.classList.remove(\"light\");\n      buttonModeText.classList.remove(\"bi-sun-fill\");\n      buttonModeText.classList.add(\"bi-moon-fill\");\n      root.style.setProperty(\"--background\", \"#0a1120\");\n      root.style.setProperty(\"--background-shade\", \"#1b212e\");\n      root.style.setProperty(\"--text\", \"#ffffff\");\n      root.style.setProperty(\"--some-text\", \"var(--text)\");\n    } else {\n      body.classList.add(\"light\");\n      buttonModeText.classList.remove(\"bi-moon-fill\");\n      buttonModeText.classList.add(\"bi-sun-fill\");\n      root.style.setProperty(\"--background\", \"#f1f1f1\");\n      root.style.setProperty(\"--background-shade\", \"#ffffff\");\n      root.style.setProperty(\"--text\", \"#000000\");\n      root.style.setProperty(\"--some-text\", \"var(--light-blue)\");\n    }\n  }\n\n  function search() {\n    let location = searchBar.value;\n    searchBar.value = \"\";\n    console.log(location);\n  }\n\n  function changeTemp() {\n    if (body.classList.contains(\"celcius\")) {\n      body.classList.remove(\"celcius\");\n      body.classList.add(\"farenheit\")\n      buttonMode.textContent = \"°F\";\n    }\n    else {\n      body.classList.remove(\"farenheit\");\n      body.classList.add(\"celcius\")\n      buttonMode.textContent = \"°C\";\n    }\n  }\n\n  return {\n    changeMode: changeMode,\n    checkMode: checkMode,\n    search: search,\n    changeTemp: changeTemp\n  }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://weather_app_project/./src/dom.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst event = (() => {\n  function modeListener() {\n    const buttonMode = document.querySelector(\"#buttonMode\");\n    buttonMode.addEventListener(\"click\", () => {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeMode();\n    });\n  }\n\n  function dataListener() {\n    const searchButton = document.querySelector(\"#searchButton\");\n    searchButton.addEventListener(\"click\", (event) => {\n      event.preventDefault();\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].search();\n    });\n  }\n\n  function tempListener() {\n    const buttonTemp = document.querySelector(\"#buttonTemp\");\n    buttonTemp.addEventListener(\"click\", () => {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeTemp();\n    });\n  }\n\n  return {\n    modeListener: modeListener,\n    dataListener: dataListener,\n    tempListener: tempListener\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (event);\n\n\n//# sourceURL=webpack://weather_app_project/./src/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].checkMode();\n_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataListener();\n_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modeListener();\n_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tempListener();\n\n//# sourceURL=webpack://weather_app_project/./src/index.js?");

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