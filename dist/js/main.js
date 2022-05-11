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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validator */ \"./modules/validator.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('18 may 2022');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_validator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n   formId: 'form1',\n   someElem: [{\n      type: 'block',\n      id: 'total'\n   }]\n});\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n   formId: 'form2',\n   someElem: [{\n      type: 'block',\n      id: 'total'\n   }]\n});\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n   formId: 'form3',\n   someElem: [{\n      type: 'block',\n      id: 'total'\n   }]\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst calc = (price = 100) => {\n   const calcBlock = document.querySelector('.calc-block');\n   const calcType = document.querySelector('.calc-type');\n   const calcSquare = document.querySelector('.calc-square');\n   const calcCount = document.querySelector('.calc-count');\n   const calcDay = document.querySelector('.calc-day');\n   const total = document.getElementById('total');\n\n   const countCalc = () => {\n      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n      const calcSquareValue = +calcSquare.value;\n\n      let totalValue = 0;\n      let calcCountValue = 1;\n      let calcDayValue = 1;\n\n      if (calcCount.value > 1) {\n         calcCountValue += (calcCount.value / 10);\n      }\n\n      if (calcDay.value && calcDay.value < 5) {\n         calcDayValue = 2;\n      } else if (calcDay.value && calcDay.value < 10) {\n         calcDayValue = 1.5;\n      }\n\n      if (calcType.value && calcSquare.value) {\n         totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\n         total.textContent = totalValue;\n      } else {\n         totalValue = 0;\n      }\n      total.textContent = Math.ceil(totalValue);\n   };\n\n   calcBlock.addEventListener('input', (e) => {\n      if (e.target === calcType || e.target === calcSquare ||\n         e.target === calcCount || e.target === calcDay) {\n         countCalc();\n      }\n\n   });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\nconst animate = ({\n   timing,\n   draw,\n   duration\n}) => {\n   let start = performance.now();\n\n   requestAnimationFrame(function animate(time) {\n      let timeFraction = (time - start) / duration;\n\n      if (timeFraction > 1) {\n         timeFraction = 1;\n      }\n\n      let progress = timing(timeFraction);\n\n      draw(progress);\n\n      if (timeFraction < 1) {\n         requestAnimationFrame(animate);\n      }\n\n   });\n};\n\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst menu = () => {\n   const menu = document.querySelector('menu');\n\n   document.addEventListener('click', (e) => {\n      let target = e.target;\n      if (target.closest('.menu')) {\n         menu.classList.toggle('active-menu');\n         return;\n      } else if (target.closest('a') || target.closest('close-btn') || !target.closest('menu')) {\n         menu.classList.remove('active-menu');\n      }\n\n   });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\n\nconst modal = () => {\n   const modal = document.querySelector('.popup');\n   const modalContent = document.querySelector('.popup-content');\n   const buttons = document.querySelectorAll('.popup-btn');\n\n   let width;\n\n   buttons.forEach(btn => {\n      btn.addEventListener('click', () => {\n         if (width < 786) {\n            modal.style.display = 'block';\n         } else {\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n               duration: 700,\n               timing(timeFraction) {\n                  return Math.pow(timeFraction, 2);\n               },\n               draw(progress) {\n                  modalContent.style.top = (15 * progress) + '%';\n                  modal.style.display = 'block';\n               }\n            });\n         }\n      });\n   });\n\n   const listenWidth = () => {\n      window.addEventListener('resize', () => {\n         width = document.documentElement.clientWidth;\n      });\n   };\n\n   modal.addEventListener('click', (e) => {\n      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n         modal.style.display = 'none';\n      }\n   });\n\n   listenWidth();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst sendForm = ({\n   formId,\n   someElem = []\n}) => {\n   const form = document.querySelector(`#${formId}`);\n   const statusBlock = document.createElement('div');\n   const loadText = 'Загрузка..';\n   const errorText = 'Ошибка';\n   const successText = 'Спасибо! Наш менеджер свяжется с Вами!';\n\n   const inputPhone = form.querySelector('[name=\"user_phone\"]');\n   const inputName = form.querySelector('[name=\"user_name\"]');\n   const inputMessage = document.querySelectorAll('[name=\"user_message\"]');\n   const inputEmail = form.querySelector('[name=\"user_email\"]');\n\n   inputPhone.addEventListener('input', (e) => {\n      if (e.target.value.match(/[0-9-()]+/gi)) {\n         e.target.classList.add('success');\n      } else {\n         e.target.classList.add('error');\n      }\n   });\n\n   inputName.addEventListener('input', (e) => {\n      if (e.target.value.match(/[а-я -]+/gi)) {\n         e.target.classList.add('success');\n      } else {\n         e.target.classList.add('error');\n      }\n   });\n\n   inputMessage.forEach((e) => {\n      e.addEventListener('input', (e) => {\n         if (e.target.value.match(/[а-я -0-9,:;.]+/gi)) {\n            e.target.classList.add('success');\n         } else {\n            e.target.classList.add('error');\n         }\n      });\n   });\n\n\n   inputEmail.addEventListener('input', (e) => {\n      if (e.target.value.match(/[a-z0-9@-_.!~*']+/gi)) {\n         e.target.classList.add('success');\n      } else {\n         e.target.classList.add('error');\n      }\n   });\n\n   const validate = (list) => {\n      let success = true;\n\n      list.forEach(input => {\n\n         if (!input.classList.contains('success') && input.classList.contains('error')) {\n            success = false;\n         }\n      });\n      return success;\n   };\n\n   const sentData = (data) => {\n      return fetch('https://jsonplaceholder.typicode.com/posts', {\n         method: 'POST',\n         body: JSON.stringify(data),\n         headers: {\n            'Content-Type': 'application/json'\n         }\n\n      }).then(res => res.json());\n   };\n\n   const clearClasses = () => {\n      inputMessage.forEach((e) => {\n         e.classList.remove('success');\n         e.classList.remove('error');\n      });\n\n   };\n\n   const submitForm = () => {\n      const formElements = form.querySelectorAll('input');\n      const formData = new FormData(form);\n      const formBody = {};\n\n      statusBlock.textContent = loadText;\n      form.append(statusBlock);\n\n      formData.forEach((val, key) => {\n         formBody[key] = val;\n      });\n\n      someElem.forEach((elem) => {\n         const element = document.getElementById(elem.id);\n         if (elem.type === \"block\" && element.textContent !== \"0\") {\n            formBody[elem.id] = element.textContent;\n         } else if (elem.type === \"input\" && element.value !== 0) {\n            formBody[elem.id] = element.value;\n         }\n      });\n\n\n      if (validate(formElements)) {\n         sentData(formBody)\n            .then((data) => {\n               formElements.forEach(input => {\n                  input.value = '';\n                  statusBlock.textContent = successText;\n               });\n            })\n            .catch((error) => {\n               statusBlock.textContent = errorText;\n            });\n      } else {\n         alert('Данные не валидны!');\n         formElements.forEach(input => {\n            input.value = '';\n            statusBlock.textContent = '';\n         });\n      }\n      setTimeout(() => {\n         statusBlock.textContent = \"\";\n      }, 3000);\n   };\n\n   try {\n      if (!form) {\n         throw new Error('Пожалуйста, верните форму)');\n      }\n\n      form.addEventListener('submit', (e) => {\n         e.preventDefault();\n         submitForm();\n         clearClasses();\n      });\n\n   } catch (error) {\n      console.log(error.message);\n   }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst slider = () => {\n   const sliderBlock = document.querySelector('.portfolio-content');\n   const slides = document.querySelectorAll('.portfolio-item');\n   const sliderDotWrap = document.querySelector('.portfolio-dots');\n   const timeInterval = 2000;\n\n   let dots = document.querySelectorAll('.dot');\n   let currentSlide = 0;\n   let interval;\n\n\n   const prevSlide = (elems, index, strClass) => {\n      elems[index].classList.remove(strClass);\n   };\n   const nextSlide = (elems, index, strClass) => {\n      elems[index].classList.add(strClass);\n   };\n\n   const addDots = () => {\n      slides.forEach((e, index) => {\n         const li = document.createElement('li');\n         if (index === 0) {\n            li.classList.add('dot-active');\n         }\n         li.classList.add('dot');\n         sliderDotWrap.append(li);\n      });\n      dots = document.querySelectorAll('.dot');\n   };\n\n   const autoSlide = () => {\n      prevSlide(slides, currentSlide, 'portfolio-item-active');\n      prevSlide(dots, currentSlide, 'dot-active');\n\n      currentSlide++;\n\n      if (currentSlide >= slides.length) {\n         currentSlide = 0;\n      }\n      nextSlide(slides, currentSlide, 'portfolio-item-active');\n      nextSlide(dots, currentSlide, 'dot-active');\n   };\n\n   const startSlide = (timer = 1500) => {\n      interval = setInterval(autoSlide, timer);\n   };\n\n   const stopSlide = () => {\n      clearInterval(interval);\n   };\n\n   sliderBlock.addEventListener('click', (e) => {\n      e.preventDefault();\n\n      if (!e.target.matches('.dot, .portfolio-btn')) {\n         return;\n      }\n      prevSlide(slides, currentSlide, 'portfolio-item-active');\n      prevSlide(dots, currentSlide, 'dot-active');\n\n      if (e.target.matches('#arrow-right')) {\n         currentSlide++;\n      } else if (e.target.matches('#arrow-left')) {\n         currentSlide--;\n      } else if (e.target.classList.contains('dot')) {\n         dots.forEach((dot, index) => {\n            if (e.target === dot) {\n               currentSlide = index;\n            }\n         });\n      }\n\n      if (currentSlide >= slides.length) {\n         currentSlide = 0;\n      } else if (currentSlide < 0) {\n         currentSlide = slides.length - 1;\n      }\n\n      nextSlide(slides, currentSlide, 'portfolio-item-active');\n      nextSlide(dots, currentSlide, 'dot-active');\n   });\n\n   sliderBlock.addEventListener('mouseenter', (e) => {\n      if (e.target.matches('.dot, .portfolio-btn')) {\n         stopSlide();\n      }\n   }, true);\n\n   sliderBlock.addEventListener('mouseleave', (e) => {\n      if (e.target.matches('.dot, .portfolio-btn')) {\n         startSlide(timeInterval);\n      }\n   }, true);\n\n   addDots();\n   startSlide(timeInterval);\n\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst tabs = () => {\n   const tabPanel = document.querySelector('.service-header');\n   const tabContent = document.querySelectorAll('.service-tab');\n   const tabs = document.querySelectorAll('.service-header-tab');\n\n   tabPanel.addEventListener('click', (e) => {\n      if (e.target.closest('.service-header-tab')) {\n         const tabBtn = e.target.closest('.service-header-tab');\n         tabs.forEach((tab, index) => {\n            if (tab === tabBtn) {\n               tab.classList.add('active');\n               tabContent[index].classList.remove('d-none');\n            } else {\n               tab.classList.remove('active');\n               tabContent[index].classList.add('d-none');\n            }\n         });\n      }\n   });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst timer = (deadline) => {\n   const timerHours = document.getElementById('timer-hours');\n   const timerMinutes = document.getElementById('timer-minutes');\n   const timerSeconds = document.getElementById('timer-seconds');\n\n   const getTimeRemaining = () => {\n      let dateStop = new Date(deadline).getTime();\n      let dateNow = new Date().getTime();\n      let timeRemaining = (dateStop - dateNow) / 1000;\n      let hours = Math.floor((timeRemaining / 60 / 60));\n      let minutes = Math.floor((timeRemaining / 60) % 60);\n      let seconds = Math.floor(timeRemaining % 60);\n\n      return {\n         timeRemaining,\n         hours,\n         minutes,\n         seconds\n      };\n   };\n\n   const updateClock = () => {\n      let getTime = getTimeRemaining();\n      if (getTime.timeRemaining > 0) {\n         timerHours.textContent = getZero(getTime.hours);\n         timerMinutes.textContent = getZero(getTime.minutes);\n         timerSeconds.textContent = getZero(getTime.seconds);\n      }\n\n   };\n   setInterval(updateClock, 1000);\n\n   const getZero = (num) => {\n      if (num >= 0 && num < 10) {\n         return '0' + num;\n      } else {\n         return num;\n      }\n   };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validator.js":
/*!******************************!*\
  !*** ./modules/validator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst validator = () => {\n\n   const inputCalc = document.querySelectorAll('.calc-block input');\n   const inputText = document.querySelectorAll('[name=\"user_name\"]');\n   const inputEmail = document.querySelectorAll('[type=\"email\"]');\n   const inputPhone = document.querySelectorAll('[type=\"tel\"]');\n\n   inputCalc.forEach((input) => {\n      input.addEventListener('input', (e) => {\n         e.target.value = e.target.value.replace(/\\D+/, '');\n      });\n   });\n\n\n   inputText.forEach((e) => {\n      e.addEventListener('input', (e) => {\n         e.target.value = e.target.value.match(/[а-я-]+/gi);\n      });\n   });\n\n\n   inputEmail.forEach((e) => {\n      e.addEventListener('input', (e) => {\n         e.target.value = e.target.value.match(/[a-z0-9@-_.!~*']+/gi);\n      });\n   });\n\n\n   inputPhone.forEach((e) => {\n      e.addEventListener('input', (e) => {\n         e.target.value = e.target.value.match(/[0-9-()]+/gi);\n      });\n   });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n//# sourceURL=webpack:///./modules/validator.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;