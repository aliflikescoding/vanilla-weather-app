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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst api = (() => {\n  const key = \"94beffc60c1048cbabc81744231211\";\n\n  const searchCurrent = async (location) => {\n    try {\n      const response = await fetch(\n        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`,\n        { mode: \"cors\" }\n      );\n      const loading = document.querySelector(\".loading\");\n      loading.classList.remove(\"invis\");\n      const data = await response.json();\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showCurrent(data);\n      loading.classList.add(\"invis\");\n    } catch (error) {\n      console.error(\"Error fetching data\", error);\n    }\n  };\n\n  return {\n    searchCurrent: searchCurrent\n  }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n//# sourceURL=webpack://weather_app_project/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domLogic */ \"./src/domLogic.js\");\n\n\nconst dom = (() => {\n  const main = document.querySelector(\"main\");\n\n  function showCurrent(data) {\n    const temp = _domLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTemp(data);\n    const tempFeelsLike = _domLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFeelsLikeTemp(data);\n\n    const currentCurrentCard1 = `\n    <div class=\"current-card-1\">\n      <h1 id=\"locationText\" class=\"some-text\"><i class=\"bi bi-geo-alt-fill\"></i> ${data.location.name}, ${data.location.country}</h1>\n      <h3 class=\"text-shade\">${_domLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].formatDate(data.location.localtime)}</h3>\n    </div>\n    `;\n    const currentCurrentCard2 = `\n    <div class=\"card current-card-2\">\n      <h1 class=\"five-rem some-text\"></i>${temp}</h1>\n      <div class=\"flex\">\n      <img src=\"${data.current.condition.icon}\" height=\"80px\" width=\"80px\" alt=\"icon\"> \n        <div class=\"flex flex-column\">\n          <h2 class=\"two-rem\">${data.current.condition.text}</h2>\n          <h2 class=\"two-rem text-shade\">Feels like ${tempFeelsLike}</h2>\n        </div>\n      </div>\n    </div>\n    `;\n    const currentCurrentCard3 = `\n    <div class=\"card current-card-3\">\n      <div class=\"card-container\">\n        <div>\n          <h2 class=\"some-text\"><i class=\"bi bi-wind\"></i>  wind</h2>\n          <h1 class=\"text-shade\">${_domLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWind(data)}</h1>\n        </div>\n        <div>\n          <h2 class=\"some-text\"><i class=\"bi bi-eye\"></i>  visibility</h2>\n          <h1 class=\"text-shade\">${_domLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getVis(data)}</h1>\n        </div>\n        <div>\n          <h2 class=\"some-text\"><i class=\"bi bi-droplet-fill\"></i> humidity</h2>\n          <h1 class=\"text-shade\">${data.current.humidity}</h1>\n        </div>\n      </div>\n    </div>\n    `;\n    const currentCurrentCard4 = `\n          <div class=\"card current-card-4\">\n            <div class=\"card-container\">\n              <div>\n                <h2 class=\"some-text\"><i class=\"bi bi-cloud-fill\"></i>  cloud</h2>\n                <h1 class=\"text-shade\">${data.current.cloud}</h1>\n              </div>\n              <div>\n                <h2 class=\"some-text\"><i class=\"bi bi-tornado\"></i>  wind degree</h2>\n                <h1 class=\"text-shade\">${data.current.wind_degree}</h1>\n              </div>\n              <div>\n                <h2 class=\"some-text\"><i class=\"bi bi-brightness-high-fill\"></i> UV</h2>\n                <h1 class=\"text-shade\">${data.current.uv}</h1>\n              </div>\n            </div>\n          </div>\n    `;\n    const currentCurrentCard5 = `\n          <div class=\"card current-card-5\">\n            <div class=\"card-container\">\n              <div>\n                <h2 class=\"some-text\"><i class=\"bi bi-compass-fill\"></i>  wind direction</h2>\n                <h1 class=\"text-shade\">${data.current.wind_dir}</h1>\n              </div>\n              <div>\n                <h2 class=\"some-text\">gust</h2>\n                <h1 class=\"text-shade\">${_domLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGust(data)}</h1>\n              </div>\n              <div>\n                <h2 class=\"some-text\"><i class=\"bi bi-arrow-down-square-fill\"></i> Pressure</h2>\n                <h1 class=\"text-shade\">${_domLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPressure(data)}</h1>\n              </div>\n            </div>\n          </div>\n    `;\n    const current = `\n      <div class=\"current\">\n        ${currentCurrentCard1}\n        ${currentCurrentCard2}\n        ${currentCurrentCard3}\n        ${currentCurrentCard4}\n        ${currentCurrentCard5}\n      </div>\n    `;\n\n    main.innerHTML = current;\n  }\n\n  return {\n    showCurrent: showCurrent,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n\n//# sourceURL=webpack://weather_app_project/./src/dom.js?");

/***/ }),

/***/ "./src/domLogic.js":
/*!*************************!*\
  !*** ./src/domLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst domLogic = (() => {\n  function getTemp(data) {\n    const body = document.querySelector(\"body\");\n    if (body.classList.contains(\"celcius\")) {\n      return `${Math.floor(data.current.temp_c)}°C`;\n    } else {\n      return `${Math.floor(data.current.temp_f)}°F`;\n    }\n  }\n\n  function getFeelsLikeTemp(data) {\n    const body = document.querySelector(\"body\");\n    if (body.classList.contains(\"celcius\")) {\n      return `${Math.floor(data.current.feelslike_c)}°C`;\n    } else {\n      return `${Math.floor(data.current.feelslike_f)}°F`;\n    }\n  }\n\n  function getWind(data) {\n    const body = document.querySelector(\"body\");\n    if (body.classList.contains(\"celcius\")) {\n      return `${Math.floor(data.current.wind_kph)} kph`;\n    } else {\n      return `${Math.floor(data.current.wind_mph)} mph`;\n    }\n  }\n\n  function getVis(data) {\n    const body = document.querySelector(\"body\");\n    if (body.classList.contains(\"celcius\")) {\n      return `${Math.floor(data.current.vis_km)} km`;\n    } else {\n      return `${Math.floor(data.current.vis_miles)} miles`;\n    }\n  }\n\n  function getGust(data) {\n    const body = document.querySelector(\"body\");\n    if (body.classList.contains(\"celcius\")) {\n      return `${Math.floor(data.current.gust_kph)}`;\n    } else {\n      return `${Math.floor(data.current.gust_mph)}`;\n    }\n  }\n\n  function getPressure(data) {\n    const body = document.querySelector(\"body\");\n    if (body.classList.contains(\"celcius\")) {\n      return `${Math.floor(data.current.pressure_mb)} mb`;\n    } else {\n      return `${Math.floor(data.current.pressure_in)} in`;\n    }\n  }\n\n  function getIcon(data) {\n    const icon = \"bi-moon-fill\"\n\n    return icon\n  }\n\n  function formatDate(dateString) {\n    const date = new Date(dateString);\n\n    const dayNames = [\n      \"Sunday\",\n      \"Monday\",\n      \"Tuesday\",\n      \"Wednesday\",\n      \"Thursday\",\n      \"Friday\",\n      \"Saturday\",\n    ];\n\n    const monthNames = [\n      \"January\",\n      \"February\",\n      \"March\",\n      \"April\",\n      \"May\",\n      \"June\",\n      \"July\",\n      \"August\",\n      \"September\",\n      \"October\",\n      \"November\",\n      \"December\",\n    ];\n\n    const dayName = dayNames[date.getDay()];\n    const day = date.getDate();\n    const monthName = monthNames[date.getMonth()];\n    const year = date.getFullYear();\n\n    return `${dayName}, ${day} ${monthName} ${year}`;\n  }\n\n  return {\n    getTemp: getTemp,\n    getFeelsLikeTemp: getFeelsLikeTemp,\n    formatDate: formatDate,\n    getWind: getWind,\n    getVis: getVis,\n    getGust: getGust,\n    getPressure: getPressure,\n    getIcon: getIcon\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domLogic);\n\n\n//# sourceURL=webpack://weather_app_project/./src/domLogic.js?");

/***/ }),

/***/ "./src/evenFunction.js":
/*!*****************************!*\
  !*** ./src/evenFunction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\nconst evenFunction = (() => {\n  const body = document.querySelector(\"body\");\n  const root = document.documentElement;\n  const buttonModeText = document.querySelector(\"#buttonModeText\");\n  const buttonMode = document.querySelector(\"#buttonTemp\");\n  const searchBar = document.querySelector(\"#searchBar\");\n\n  function checkMode() {\n    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n      body.classList.remove(\"light\");\n      buttonModeText.classList.remove(\"bi-sun-fill\");\n      buttonModeText.classList.add(\"bi-moon-fill\");\n      root.style.setProperty(\"--background\", \"#0a1120\");\n      root.style.setProperty(\"--background-shade\", \"#1b212e\");\n      root.style.setProperty(\"--text\", \"#ffffff\");\n      root.style.setProperty(\"--some-text\", \"var(--text)\");\n    }\n  }\n\n  function changeMode() {\n    if (body.classList.contains(\"light\")) {\n      body.classList.remove(\"light\");\n      buttonModeText.classList.remove(\"bi-sun-fill\");\n      buttonModeText.classList.add(\"bi-moon-fill\");\n      root.style.setProperty(\"--background\", \"#0a1120\");\n      root.style.setProperty(\"--background-shade\", \"#1b212e\");\n      root.style.setProperty(\"--text\", \"#ffffff\");\n      root.style.setProperty(\"--some-text\", \"var(--text)\");\n    } else {\n      body.classList.add(\"light\");\n      buttonModeText.classList.remove(\"bi-moon-fill\");\n      buttonModeText.classList.add(\"bi-sun-fill\");\n      root.style.setProperty(\"--background\", \"#f1f1f1\");\n      root.style.setProperty(\"--background-shade\", \"#ffffff\");\n      root.style.setProperty(\"--text\", \"#000000\");\n      root.style.setProperty(\"--some-text\", \"var(--light-blue)\");\n    }\n  }\n\n  const search = async () => {\n    let location = searchBar.value;\n    searchBar.value = \"\";\n    _api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].searchCurrent(location);\n  }\n\n  function changeTemp() {\n    if (body.classList.contains(\"celcius\")) {\n      body.classList.remove(\"celcius\");\n      body.classList.add(\"farenheit\")\n      buttonMode.textContent = \"°F\";\n    }\n    else {\n      body.classList.remove(\"farenheit\");\n      body.classList.add(\"celcius\")\n      buttonMode.textContent = \"°C\";\n    }\n  }\n\n  return {\n    changeMode: changeMode,\n    checkMode: checkMode,\n    search: search,\n    changeTemp: changeTemp\n  }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (evenFunction);\n\n//# sourceURL=webpack://weather_app_project/./src/evenFunction.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _evenFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evenFunction */ \"./src/evenFunction.js\");\n\n\n\nconst event = (() => {\n  function modeListener() {\n    const buttonMode = document.querySelector(\"#buttonMode\");\n    buttonMode.addEventListener(\"click\", () => {\n      _evenFunction__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeMode();\n    });\n  }\n\n  function dataListener() {\n    const searchButton = document.querySelector(\"#searchButton\");\n    searchButton.addEventListener(\"click\", async (event) => {\n      event.preventDefault();\n      _evenFunction__WEBPACK_IMPORTED_MODULE_0__[\"default\"].search();\n    });\n  }\n\n  function tempListener() {\n    const buttonTemp = document.querySelector(\"#buttonTemp\");\n    buttonTemp.addEventListener(\"click\", () => {\n      _evenFunction__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeTemp();\n    });\n  }\n\n  return {\n    modeListener: modeListener,\n    dataListener: dataListener,\n    tempListener: tempListener\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (event);\n\n\n//# sourceURL=webpack://weather_app_project/./src/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _evenFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evenFunction */ \"./src/evenFunction.js\");\n\n\n\n_evenFunction__WEBPACK_IMPORTED_MODULE_1__[\"default\"].checkMode();\n_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataListener();\n_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modeListener();\n_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tempListener();\n\n//# sourceURL=webpack://weather_app_project/./src/index.js?");

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