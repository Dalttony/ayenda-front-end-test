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
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Cannot find module '@babel/plugin-transform-object-assign'\\nRequire stack:\\n- /var/www/torreapp/frontend/node_modules/@babel/core/lib/config/files/plugins.js\\n- /var/www/torreapp/frontend/node_modules/@babel/core/lib/config/files/index.js\\n- /var/www/torreapp/frontend/node_modules/@babel/core/lib/index.js\\n- /var/www/torreapp/frontend/node_modules/babel-loader/lib/index.js\\n- /var/www/torreapp/frontend/node_modules/loader-runner/lib/loadLoader.js\\n- /var/www/torreapp/frontend/node_modules/loader-runner/lib/LoaderRunner.js\\n- /var/www/torreapp/frontend/node_modules/webpack/lib/NormalModule.js\\n- /var/www/torreapp/frontend/node_modules/webpack/lib/NormalModuleFactory.js\\n- /var/www/torreapp/frontend/node_modules/webpack/lib/Compiler.js\\n- /var/www/torreapp/frontend/node_modules/webpack/lib/webpack.js\\n- /var/www/torreapp/frontend/node_modules/webpack-cli/lib/webpack-cli.js\\n- /var/www/torreapp/frontend/node_modules/webpack-cli/lib/bootstrap.js\\n- /var/www/torreapp/frontend/node_modules/webpack-cli/bin/cli.js\\n- /var/www/torreapp/frontend/node_modules/webpack/bin/webpack.js\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:976:15)\\n    at resolve (/var/www/torreapp/frontend/node_modules/v8-compile-cache/v8-compile-cache.js:164:23)\\n    at resolveStandardizedName (/var/www/torreapp/frontend/node_modules/@babel/core/lib/config/files/plugins.js:111:7)\\n    at resolvePlugin (/var/www/torreapp/frontend/node_modules/@babel/core/lib/config/files/plugins.js:55:10)\\n    at loadPlugin (/var/www/torreapp/frontend/node_modules/@babel/core/lib/config/files/plugins.js:63:20)\\n    at loadPlugin.next (<anonymous>)\\n    at createDescriptor (/var/www/torreapp/frontend/node_modules/@babel/core/lib/config/config-descriptors.js:187:16)\\n    at createDescriptor.next (<anonymous>)\\n    at evaluateSync (/var/www/torreapp/frontend/node_modules/gensync/index.js:251:28)\\n    at /var/www/torreapp/frontend/node_modules/gensync/index.js:31:34\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });