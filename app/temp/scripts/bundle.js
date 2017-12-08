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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Home = __webpack_require__(1);

var _Home2 = _interopRequireDefault(_Home);

var _Couple = __webpack_require__(2);

var _Couple2 = _interopRequireDefault(_Couple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import TriCouple from './modules/TriCouple';


var home = new _Home2.default();

window.addEventListener("load", function () {
  var loader = new _Home2.default();
  loader.loadHome();
});

var couple = new _Couple2.default();
// var triCouple = new TriCouple();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Home = function () {
  function Home() {
    _classCallCheck(this, Home);

    this.template = "\n    <div class=\"wed-heading row\">\n        <div class=\"wed-heading-wrapper col\">\n            <h1>Angelo & Klaudia\n                <br>\n                <span class=\"std\">Save the date</span>\n                <span class=\"wed-date\">22.08.2015</span>\n            </h1>\n        </div>\n    </div>\n    ";
    this.homeMenu = document.querySelector("#home");
    this.spa = document.querySelector(".wed-spa");
    this.homeSection = document.querySelector(".wed-home");
    this.homeClick();
  }

  _createClass(Home, [{
    key: "homeClick",
    value: function homeClick() {
      var that = this;
      this.homeMenu.addEventListener("click", function () {
        that.loadHome();
      });
    }
  }, {
    key: "loadHome",
    value: function loadHome() {
      this.homeSection.classList.add('wed-front');
      this.loadTemplate();
    }
  }, {
    key: "loadTemplate",
    value: function loadTemplate() {
      this.spa.innerHTML = this.template;
    }
  }]);

  return Home;
}();

exports.default = Home;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TriCouple = __webpack_require__(3);

var _TriCouple2 = _interopRequireDefault(_TriCouple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Couple = function () {
    function Couple() {
        _classCallCheck(this, Couple);

        //Start of HTML Template
        this.template = '\n      <div class="message-popup"></div>\n      <div class="wed-couple container">\n          <div class="wed-couple-newlyweds wed-couple-bride">\n              <div class="wed-couple-newlyweds-img wed-couple-bride-img">\n                  <div class="wed-couple-name-row row">\n                      <div class="wed-couple-desc wed-couple-name wed-couple-name-bride col-md-auto">\n                          <h1>Klaudia Kim</h1>\n                      </div>\n                      <div class="wed-couple-desc wed-couple-position wed-couple-position-bride col-md-auto">\n                          <span>The Bride</span>\n                      </div>\n                  </div>\n\n                  <div class="wed-couple-newlyweds-message wed-couple-newlyweds-message-bride">\n                      <span>Message from the Bride</span>\n                  </div>\n\n                  </div>\n                  </div>\n\n          <div class="wed-couple-newlyweds wed-couple-groom">\n              <div class="wed-couple-newlyweds-img wed-couple-groom-img">\n                  <div class="wed-couple-name-row row">\n                      <div class="wed-couple-desc wed-couple-name wed-couple-name-groom col-md-auto">\n                          <h1>Angelo Kim</h1>\n                      </div>\n                      <div class="wed-couple-desc wed-couple-position wed-couple-position-groom col-md-auto">\n                          <span>The Groom</span>\n                      </div>\n                  </div>\n\n                      <div class="wed-couple-newlyweds-message wed-couple-newlyweds-message-groom">\n                          <span>Message from the Groom</span>\n                      </div>\n\n              </div>\n          </div>\n      </div>\n    ';
        // End of HTML Template
        //DOM declaration
        this.spa = document.querySelector(".wed-spa");
        this.coupleButton = document.querySelector('#couple');
        this.homeSection = document.querySelector(".wed-home");

        //initialize methods
        this.loadCouple();
    }

    _createClass(Couple, [{
        key: 'loadCouple',

        // End Constructor

        // Start methods
        value: function loadCouple() {
            var _this = this;
            this.coupleButton.addEventListener("click", function () {
                _this.homeSection.classList.remove('wed-front');
                _this.spa.innerHTML = _this.template;
                var triCouple = new _TriCouple2.default();
            });
        }
    }]);

    return Couple;
}();

exports.default = Couple;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TriCouple = function () {
  function TriCouple() {
    _classCallCheck(this, TriCouple);

    this.wedCouple = document.querySelector('.wed-couple');
    this.coupleButton = document.querySelector('#couple');
    this.wedCoupleBride = document.querySelector(".wed-couple-bride");
    this.wedCoupleBrideImg = document.querySelector(".wed-couple-bride-img");
    this.wedCoupleGroom = document.querySelector(".wed-couple-groom");
    this.wedCoupleGroomImg = document.querySelector(".wed-couple-groom-img");
    this.wedCoupleNewlyweds = document.querySelectorAll(".wed-couple-newlyweds");

    // Detect initial Viewport
    this.initialWindowWidth = window.innerWidth;
    this.initialWindowHeight = window.innerHeight;
    this.diagonal = Math.sqrt(Math.pow(this.initialWindowWidth, 2) + Math.pow(this.initialWindowHeight, 2));

    // Calculate sinus
    this.sineX = this.initialWindowWidth / this.diagonal;

    // Calculate angle for rotation
    this.sinDegree = Math.asin(this.sineX) * (180 / Math.PI);

    //set break point media query
    this.breakMax = 992;

    //Initiate methods
    this.styleInit();
    this.responsive();
  }

  _createClass(TriCouple, [{
    key: 'setHeight',


    //SET HEIGHT
    value: function setHeight() {
      var _this2 = this;

      this.wedCoupleNewlyweds.forEach(function (partner) {
        console.log('log for each partner');
        partner.style.height = _this2.diagonal + 'px';
      });
    }
  }, {
    key: 'setPosition',

    //POSITION TO LEFT & RIGHT
    value: function setPosition() {
      this.wedCoupleBride.style.left = -this.initialWindowWidth + 'px';
      this.wedCoupleBrideImg.style.left = this.initialWindowWidth + 'px';
      this.wedCoupleGroom.style.right = -this.initialWindowWidth + 'px';
      this.wedCoupleGroomImg.style.right = this.initialWindowWidth + 'px';
    }
  }, {
    key: 'rotate',
    value: function rotate() {
      this.wedCoupleBride.style.transform = "rotate(" + this.sinDegree + "deg)";
      this.wedCoupleBride.style.webkitTransform = "rotate(" + this.sinDegree + "deg)"; //web-kit
      this.wedCoupleBrideImg.style.transform = "rotate(" + -this.sinDegree + "deg)";
      this.wedCoupleBrideImg.style.webkitTransform = "rotate(" + -this.sinDegree + "deg)"; //web-kit
      this.wedCoupleGroom.style.transform = "rotate(" + this.sinDegree + "deg)";
      this.wedCoupleGroom.style.webkitTransform = "rotate(" + this.sinDegree + "deg)"; //web-kit
      this.wedCoupleGroomImg.style.transform = "rotate(" + -this.sinDegree + "deg)";
      this.wedCoupleGroomImg.style.webkitTransform = "rotate(" + -this.sinDegree + "deg)"; //web-kit
    }
  }, {
    key: 'horizon',
    value: function horizon() {
      //set height
      this.wedCoupleNewlyweds[0].style.height = 50 + 'vh';
      this.wedCoupleNewlyweds[1].style.height = 50 + 'vh';

      //reset position
      this.wedCoupleBride.style.left = '';
      this.wedCoupleBrideImg.style.left = '';
      this.wedCoupleGroom.style.right = '';
      this.wedCoupleGroomImg.style.right = '';

      //reset rotation
      this.wedCoupleBride.style.transform = '';
      this.wedCoupleBride.style.webkitTransform = ''; //web-kit
      this.wedCoupleBrideImg.style.transform = '';
      this.wedCoupleBrideImg.style.webkitTransform = ''; //web-kit
      this.wedCoupleGroom.style.transform = '';
      this.wedCoupleGroom.style.webkitTransform = ''; //web-kit
      this.wedCoupleGroomImg.style.transform = '';
      this.wedCoupleGroomImg.style.webkitTransform = ''; //web-kit
    }
  }, {
    key: 'styleInit',

    //initialize styling on Start
    value: function styleInit() {
      if (this.initialWindowWidth >= this.breakMax) {
        this.setHeight();
        this.setPosition();
        this.rotate();
      } else if (this.initialWindowWidth < this.breakMax) {
        this.horizon();
      };
    }

    //make it responsive

  }, {
    key: 'responsive',
    value: function responsive() {
      var _this = this;
      window.addEventListener("resize", function () {
        // Detect initial Viewport
        _this.initialWindowWidth = window.innerWidth;
        _this.initialWindowHeight = window.innerHeight;
        _this.diagonal = Math.sqrt(Math.pow(_this.initialWindowWidth, 2) + Math.pow(_this.initialWindowHeight, 2));

        // Calculate sinus
        _this.sineX = _this.initialWindowWidth / _this.diagonal;

        // Calculate angle for rotation
        _this.sinDegree = Math.asin(_this.sineX) * (180 / Math.PI);
        _this.styleInit();
      });
    }
  }]);

  return TriCouple;
}();

exports.default = TriCouple;

/***/ })
/******/ ]);