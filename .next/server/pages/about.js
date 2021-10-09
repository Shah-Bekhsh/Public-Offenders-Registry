module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\FYP\\offenders_registry\\components\\Header.js";



/* harmony default export */ __webpack_exports__["default"] = (() => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    size: "huge",
    inverted: true,
    style: {
      marginTop: "20px",
      marginBottom: "20px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "item",
        children: "Blockchain Offender Registry"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Menu, {
      position: "right",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "item",
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "/about",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "item",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "/references",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "item",
          children: "References"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "/help",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "item",
          children: "Help"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "./offenders/createinstance",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "item",
          children: "+"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\FYP\\offenders_registry\\components\\Layout.js";





const LayoutIndex = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutIndex);

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");

var _jsxFileName = "E:\\FYP\\offenders_registry\\pages\\about.js";




const AboutIndex = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      style: {
        color: "#125696"
      },
      textAlign: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Issues & Challenges"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      textAlign: "justified",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        padded: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            style: {
              fontSize: "large"
            },
            children: "Before"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined), " the idea of this project was even penned down on paper, its need was felt throughout our country. No system is perfect. The criminal justice system also suffers from this problem. No country has a perfect criminal justice system. People who are convicted of their crimes are sent to prison to serve out their sentences with the hope that when they are released back into the society, they will be reformed. As the past few years have painfully demonstrated to us, that notion is only wishful thinking. Years of systemic decay has created loopholes in our reform system. In our society, individuals who have been convicted of even the most violent crimes, sometimes walk out of prisons and into obscurity. They create false personae and sometimes completely alter their identities.", " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      style: {
        color: "#125696"
      },
      textAlign: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Breaking Point"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      textAlign: "justified",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        padded: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            style: {
              fontSize: "large"
            },
            children: "In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined), " the past few years, a series of high profile incidents shook the nation to its core. The grotesque nature of these incidents highlighted a grave shortcoming in our criminal reform system. Individuals who had served prison sentences and were believed to have become reformed were at the center of these heinous crimes. Clearly our belief that all criminals being released are reformed was wildly misconceived. Therefore it became obvious that oversight of convicts who were being released on parole was extremely important. Moreover, it became increasingly important that in a system riddled with loopholes, public unawareness poses as a great barrier towards an apprised and vigilant society.", " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      style: {
        color: "#125696"
      },
      textAlign: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Goal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      textAlign: "justified",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        padded: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            style: {
              fontSize: "large"
            },
            children: "Even"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined), " though this is a degree completion project, as I researched and worked on its development, it has grown extremely close to my heart. I wanted to create a solution that could stand the test of time and have limitless potential. At the heart of this project are blockchain and Smart Contracts. I created this application to store the records of each offender in such a way that once added, the information stored could never be altered. Additionally, this information is more or less immune to external attacks from hackers. Each record is deployed as a separate Contract instance that gets stored on the blockchain. Another Contract written on top of it, a Registry Contract so to speak, keeps track of all the addresses at which each record is deployed. Blockchain technology has quickly emerged on the horizon of the information storage world as a solution that satisfies many people\u2019s concern. Its initial use case was limited to financial application, but the underlying principle revolved around the key aspect of storing data in a way that its authenticity and security were never in question. Utilizing its potential, the Ethereum org. decided that along with a financial fork of its blockchain network, their implementation would provide a solution for people who wanted to harness the power of blockchain in their applications. This project also heavily relies on the Smart Contracts technology provided by Ethereum. A Smart Contract is a piece of software that always lives on the blockchain. Other applications can interact with this Contract as well and the information stored within the Contract is never altered."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AboutIndex);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add("/offenders/offenders/createinstance", "/offenders/createinstance").add("/offenders/createinstance", "/offenders/createinstance").add("/offenders/addinformation", "/offenders/addinformation").add("/offenders/:address", "/offenders/show");
module.exports = routes;

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkxheW91dEluZGV4IiwicHJvcHMiLCJjaGlsZHJlbiIsIkFib3V0SW5kZXgiLCJjb2xvciIsImZvbnRTaXplIiwicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaERGLGVBbURFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkRGLGVBb0RFLHFFQUFDLDJEQUFEO0FBQVcsZUFBUyxFQUFDLFdBQXJCO0FBQUEsNkJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxjQUFNLE1BQVo7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUcsaUJBQUssRUFBRTtBQUFFQyxzQkFBUSxFQUFFO0FBQVosYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwREYsZUFvRkUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF3RkQsQ0F6RkQ7O0FBMkZlRix5RUFBZixFOzs7Ozs7Ozs7OztBQy9GQSxNQUFNRyxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0NBQUQsQ0FBUCxFQUFmOztBQUVBRCxNQUFNLENBQ0hFLEdBREgsQ0FDTyxxQ0FEUCxFQUM4QywyQkFEOUMsRUFFR0EsR0FGSCxDQUVPLDJCQUZQLEVBRW9DLDJCQUZwQyxFQUdHQSxHQUhILENBR08sMkJBSFAsRUFHb0MsMkJBSHBDLEVBSUdBLEdBSkgsQ0FJTyxxQkFKUCxFQUk4QixpQkFKOUI7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQixDOzs7Ozs7Ozs7OztBQ1JBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hYm91dC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TWVudVxuICAgICAgc2l6ZT1cImh1Z2VcIlxuICAgICAgaW52ZXJ0ZWRcbiAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX1cbiAgICA+XG4gICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPkJsb2NrY2hhaW4gT2ZmZW5kZXIgUmVnaXN0cnk8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgcm91dGU9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgcm91dGU9XCIvcmVmZXJlbmNlc1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5SZWZlcmVuY2VzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIHJvdXRlPVwiL2hlbHBcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+SGVscDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayByb3V0ZT1cIi4vb2ZmZW5kZXJzL2NyZWF0ZWluc3RhbmNlXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPis8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTWVudS5NZW51PlxuICAgIDwvTWVudT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuXG5jb25zdCBMYXlvdXRJbmRleCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dEluZGV4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBEaXZpZGVyLCBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBBYm91dEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IGNvbG9yOiBcIiMxMjU2OTZcIiB9fSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPGgyPklzc3VlcyAmIENoYWxsZW5nZXM8L2gyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249XCJqdXN0aWZpZWRcIj5cbiAgICAgICAgPEdyaWQgcGFkZGVkPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGIgc3R5bGU9e3sgZm9udFNpemU6IFwibGFyZ2VcIiB9fT5CZWZvcmU8L2I+IHRoZSBpZGVhIG9mIHRoaXMgcHJvamVjdFxuICAgICAgICAgICAgd2FzIGV2ZW4gcGVubmVkIGRvd24gb24gcGFwZXIsIGl0cyBuZWVkIHdhcyBmZWx0IHRocm91Z2hvdXQgb3VyXG4gICAgICAgICAgICBjb3VudHJ5LiBObyBzeXN0ZW0gaXMgcGVyZmVjdC4gVGhlIGNyaW1pbmFsIGp1c3RpY2Ugc3lzdGVtIGFsc29cbiAgICAgICAgICAgIHN1ZmZlcnMgZnJvbSB0aGlzIHByb2JsZW0uIE5vIGNvdW50cnkgaGFzIGEgcGVyZmVjdCBjcmltaW5hbCBqdXN0aWNlXG4gICAgICAgICAgICBzeXN0ZW0uIFBlb3BsZSB3aG8gYXJlIGNvbnZpY3RlZCBvZiB0aGVpciBjcmltZXMgYXJlIHNlbnQgdG8gcHJpc29uXG4gICAgICAgICAgICB0byBzZXJ2ZSBvdXQgdGhlaXIgc2VudGVuY2VzIHdpdGggdGhlIGhvcGUgdGhhdCB3aGVuIHRoZXkgYXJlXG4gICAgICAgICAgICByZWxlYXNlZCBiYWNrIGludG8gdGhlIHNvY2lldHksIHRoZXkgd2lsbCBiZSByZWZvcm1lZC4gQXMgdGhlIHBhc3RcbiAgICAgICAgICAgIGZldyB5ZWFycyBoYXZlIHBhaW5mdWxseSBkZW1vbnN0cmF0ZWQgdG8gdXMsIHRoYXQgbm90aW9uIGlzIG9ubHlcbiAgICAgICAgICAgIHdpc2hmdWwgdGhpbmtpbmcuIFllYXJzIG9mIHN5c3RlbWljIGRlY2F5IGhhcyBjcmVhdGVkIGxvb3Bob2xlcyBpblxuICAgICAgICAgICAgb3VyIHJlZm9ybSBzeXN0ZW0uIEluIG91ciBzb2NpZXR5LCBpbmRpdmlkdWFscyB3aG8gaGF2ZSBiZWVuXG4gICAgICAgICAgICBjb252aWN0ZWQgb2YgZXZlbiB0aGUgbW9zdCB2aW9sZW50IGNyaW1lcywgc29tZXRpbWVzIHdhbGsgb3V0IG9mXG4gICAgICAgICAgICBwcmlzb25zIGFuZCBpbnRvIG9ic2N1cml0eS4gVGhleSBjcmVhdGUgZmFsc2UgcGVyc29uYWUgYW5kIHNvbWV0aW1lc1xuICAgICAgICAgICAgY29tcGxldGVseSBhbHRlciB0aGVpciBpZGVudGl0aWVzLntcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgY29sb3I6IFwiIzEyNTY5NlwiIH19IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8aDI+QnJlYWtpbmcgUG9pbnQ8L2gyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249XCJqdXN0aWZpZWRcIj5cbiAgICAgICAgPEdyaWQgcGFkZGVkPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGIgc3R5bGU9e3sgZm9udFNpemU6IFwibGFyZ2VcIiB9fT5JbjwvYj4gdGhlIHBhc3QgZmV3IHllYXJzLCBhIHNlcmllc1xuICAgICAgICAgICAgb2YgaGlnaCBwcm9maWxlIGluY2lkZW50cyBzaG9vayB0aGUgbmF0aW9uIHRvIGl0cyBjb3JlLiBUaGVcbiAgICAgICAgICAgIGdyb3Rlc3F1ZSBuYXR1cmUgb2YgdGhlc2UgaW5jaWRlbnRzIGhpZ2hsaWdodGVkIGEgZ3JhdmUgc2hvcnRjb21pbmdcbiAgICAgICAgICAgIGluIG91ciBjcmltaW5hbCByZWZvcm0gc3lzdGVtLiBJbmRpdmlkdWFscyB3aG8gaGFkIHNlcnZlZCBwcmlzb25cbiAgICAgICAgICAgIHNlbnRlbmNlcyBhbmQgd2VyZSBiZWxpZXZlZCB0byBoYXZlIGJlY29tZSByZWZvcm1lZCB3ZXJlIGF0IHRoZVxuICAgICAgICAgICAgY2VudGVyIG9mIHRoZXNlIGhlaW5vdXMgY3JpbWVzLiBDbGVhcmx5IG91ciBiZWxpZWYgdGhhdCBhbGxcbiAgICAgICAgICAgIGNyaW1pbmFscyBiZWluZyByZWxlYXNlZCBhcmUgcmVmb3JtZWQgd2FzIHdpbGRseSBtaXNjb25jZWl2ZWQuXG4gICAgICAgICAgICBUaGVyZWZvcmUgaXQgYmVjYW1lIG9idmlvdXMgdGhhdCBvdmVyc2lnaHQgb2YgY29udmljdHMgd2hvIHdlcmVcbiAgICAgICAgICAgIGJlaW5nIHJlbGVhc2VkIG9uIHBhcm9sZSB3YXMgZXh0cmVtZWx5IGltcG9ydGFudC4gTW9yZW92ZXIsIGl0XG4gICAgICAgICAgICBiZWNhbWUgaW5jcmVhc2luZ2x5IGltcG9ydGFudCB0aGF0IGluIGEgc3lzdGVtIHJpZGRsZWQgd2l0aFxuICAgICAgICAgICAgbG9vcGhvbGVzLCBwdWJsaWMgdW5hd2FyZW5lc3MgcG9zZXMgYXMgYSBncmVhdCBiYXJyaWVyIHRvd2FyZHMgYW5cbiAgICAgICAgICAgIGFwcHJpc2VkIGFuZCB2aWdpbGFudCBzb2NpZXR5LntcIiBcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgY29sb3I6IFwiIzEyNTY5NlwiIH19IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8aDI+R29hbDwvaDI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj1cImp1c3RpZmllZFwiPlxuICAgICAgICA8R3JpZCBwYWRkZWQ+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YiBzdHlsZT17eyBmb250U2l6ZTogXCJsYXJnZVwiIH19PkV2ZW48L2I+IHRob3VnaCB0aGlzIGlzIGEgZGVncmVlXG4gICAgICAgICAgICBjb21wbGV0aW9uIHByb2plY3QsIGFzIEkgcmVzZWFyY2hlZCBhbmQgd29ya2VkIG9uIGl0cyBkZXZlbG9wbWVudCxcbiAgICAgICAgICAgIGl0IGhhcyBncm93biBleHRyZW1lbHkgY2xvc2UgdG8gbXkgaGVhcnQuIEkgd2FudGVkIHRvIGNyZWF0ZSBhXG4gICAgICAgICAgICBzb2x1dGlvbiB0aGF0IGNvdWxkIHN0YW5kIHRoZSB0ZXN0IG9mIHRpbWUgYW5kIGhhdmUgbGltaXRsZXNzXG4gICAgICAgICAgICBwb3RlbnRpYWwuIEF0IHRoZSBoZWFydCBvZiB0aGlzIHByb2plY3QgYXJlIGJsb2NrY2hhaW4gYW5kIFNtYXJ0XG4gICAgICAgICAgICBDb250cmFjdHMuIEkgY3JlYXRlZCB0aGlzIGFwcGxpY2F0aW9uIHRvIHN0b3JlIHRoZSByZWNvcmRzIG9mIGVhY2hcbiAgICAgICAgICAgIG9mZmVuZGVyIGluIHN1Y2ggYSB3YXkgdGhhdCBvbmNlIGFkZGVkLCB0aGUgaW5mb3JtYXRpb24gc3RvcmVkIGNvdWxkXG4gICAgICAgICAgICBuZXZlciBiZSBhbHRlcmVkLiBBZGRpdGlvbmFsbHksIHRoaXMgaW5mb3JtYXRpb24gaXMgbW9yZSBvciBsZXNzXG4gICAgICAgICAgICBpbW11bmUgdG8gZXh0ZXJuYWwgYXR0YWNrcyBmcm9tIGhhY2tlcnMuIEVhY2ggcmVjb3JkIGlzIGRlcGxveWVkIGFzXG4gICAgICAgICAgICBhIHNlcGFyYXRlIENvbnRyYWN0IGluc3RhbmNlIHRoYXQgZ2V0cyBzdG9yZWQgb24gdGhlIGJsb2NrY2hhaW4uXG4gICAgICAgICAgICBBbm90aGVyIENvbnRyYWN0IHdyaXR0ZW4gb24gdG9wIG9mIGl0LCBhIFJlZ2lzdHJ5IENvbnRyYWN0IHNvIHRvXG4gICAgICAgICAgICBzcGVhaywga2VlcHMgdHJhY2sgb2YgYWxsIHRoZSBhZGRyZXNzZXMgYXQgd2hpY2ggZWFjaCByZWNvcmQgaXNcbiAgICAgICAgICAgIGRlcGxveWVkLiBCbG9ja2NoYWluIHRlY2hub2xvZ3kgaGFzIHF1aWNrbHkgZW1lcmdlZCBvbiB0aGUgaG9yaXpvblxuICAgICAgICAgICAgb2YgdGhlIGluZm9ybWF0aW9uIHN0b3JhZ2Ugd29ybGQgYXMgYSBzb2x1dGlvbiB0aGF0IHNhdGlzZmllcyBtYW55XG4gICAgICAgICAgICBwZW9wbGXigJlzIGNvbmNlcm4uIEl0cyBpbml0aWFsIHVzZSBjYXNlIHdhcyBsaW1pdGVkIHRvIGZpbmFuY2lhbFxuICAgICAgICAgICAgYXBwbGljYXRpb24sIGJ1dCB0aGUgdW5kZXJseWluZyBwcmluY2lwbGUgcmV2b2x2ZWQgYXJvdW5kIHRoZSBrZXlcbiAgICAgICAgICAgIGFzcGVjdCBvZiBzdG9yaW5nIGRhdGEgaW4gYSB3YXkgdGhhdCBpdHMgYXV0aGVudGljaXR5IGFuZCBzZWN1cml0eVxuICAgICAgICAgICAgd2VyZSBuZXZlciBpbiBxdWVzdGlvbi4gVXRpbGl6aW5nIGl0cyBwb3RlbnRpYWwsIHRoZSBFdGhlcmV1bSBvcmcuXG4gICAgICAgICAgICBkZWNpZGVkIHRoYXQgYWxvbmcgd2l0aCBhIGZpbmFuY2lhbCBmb3JrIG9mIGl0cyBibG9ja2NoYWluIG5ldHdvcmssXG4gICAgICAgICAgICB0aGVpciBpbXBsZW1lbnRhdGlvbiB3b3VsZCBwcm92aWRlIGEgc29sdXRpb24gZm9yIHBlb3BsZSB3aG8gd2FudGVkXG4gICAgICAgICAgICB0byBoYXJuZXNzIHRoZSBwb3dlciBvZiBibG9ja2NoYWluIGluIHRoZWlyIGFwcGxpY2F0aW9ucy4gVGhpc1xuICAgICAgICAgICAgcHJvamVjdCBhbHNvIGhlYXZpbHkgcmVsaWVzIG9uIHRoZSBTbWFydCBDb250cmFjdHMgdGVjaG5vbG9neVxuICAgICAgICAgICAgcHJvdmlkZWQgYnkgRXRoZXJldW0uIEEgU21hcnQgQ29udHJhY3QgaXMgYSBwaWVjZSBvZiBzb2Z0d2FyZSB0aGF0XG4gICAgICAgICAgICBhbHdheXMgbGl2ZXMgb24gdGhlIGJsb2NrY2hhaW4uIE90aGVyIGFwcGxpY2F0aW9ucyBjYW4gaW50ZXJhY3Qgd2l0aFxuICAgICAgICAgICAgdGhpcyBDb250cmFjdCBhcyB3ZWxsIGFuZCB0aGUgaW5mb3JtYXRpb24gc3RvcmVkIHdpdGhpbiB0aGUgQ29udHJhY3RcbiAgICAgICAgICAgIGlzIG5ldmVyIGFsdGVyZWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dEluZGV4O1xuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpKCk7XG5cbnJvdXRlc1xuICAuYWRkKFwiL29mZmVuZGVycy9vZmZlbmRlcnMvY3JlYXRlaW5zdGFuY2VcIiwgXCIvb2ZmZW5kZXJzL2NyZWF0ZWluc3RhbmNlXCIpXG4gIC5hZGQoXCIvb2ZmZW5kZXJzL2NyZWF0ZWluc3RhbmNlXCIsIFwiL29mZmVuZGVycy9jcmVhdGVpbnN0YW5jZVwiKVxuICAuYWRkKFwiL29mZmVuZGVycy9hZGRpbmZvcm1hdGlvblwiLCBcIi9vZmZlbmRlcnMvYWRkaW5mb3JtYXRpb25cIilcbiAgLmFkZChcIi9vZmZlbmRlcnMvOmFkZHJlc3NcIiwgXCIvb2ZmZW5kZXJzL3Nob3dcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=