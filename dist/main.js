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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/puzzle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/puzzle.js":
/*!***********************!*\
  !*** ./lib/puzzle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// //////////
// Rehearsal
// //////////

// 1. Select the button and the hint
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to a click
button.addEventListener("click", () => {
  // 3. Display the hint
  hint.classList.add("active");
});

// //////////
// Livecode
// //////////

// 1. Select all the tiles (and the empty?)
const tiles = document.querySelectorAll("td");

// 2. For each tile,
tiles.forEach((tile) => {
  // 3. Listen to click
  tile.addEventListener("click", (event) => {
    // 4. If empty tile is around,
    if (isEmpty(event.currentTarget)) {
      // 5. Swap the tile and the empty space
      swapTile(event.currentTarget);
      // 6. Check if you won!
      if(didWeWin(tiles)) {
        alert("We won!");
      }
    }
  });
});

const didWeWin = (tiles) => {
  // initialize counter
  // tiles.forEach((tile) => {
    // look at the inside of the tile
    // check if it's equal to a counter
    // if not return false, if yes continue
    // increment counter
    // manage the empty tile case
  // });
  // return true
  const tileNumbers = [];
  tiles.forEach((tile) => {
    tileNumbers.push(tile.innerText);
  });
  // console.log(tileNumbers.join());
  const expected = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  return (tileNumbers.join() === expected);
}

const swapTile = (currentTile) => {
  const empty = document.querySelector(".empty");
  empty.innerText = currentTile.innerText;
  empty.classList.remove("empty");
  currentTile.innerText = "";
  currentTile.classList.add("empty");
}

const isEmpty = (currentTile) => {
  // 1. current tile location (rX, cY)
  const rowX = currentTile.parentElement.rowIndex;
  const cellY = currentTile.cellIndex;
  // 2. find empty tiles location (rc)
  const empty = document.querySelector(".empty");
  const rowE = empty.parentElement.rowIndex;
  const cellE = empty.cellIndex;
  // If rX,c(Y+1) or rX,c(Y-1) or r(X-1),cY or r(x+1),cY are empty
  return ((rowX === rowE) && (cellY + 1 === cellE)
    || (rowX === rowE) && (cellY - 1 === cellE)
    || (rowX + 1 === rowE) && (cellY === cellE)
    || (rowX - 1 === rowE) && (cellY === cellE));
}




/***/ })

/******/ });
//# sourceMappingURL=main.js.map