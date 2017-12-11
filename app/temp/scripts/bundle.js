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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

    this.template = /*html*/"\n    <div class=\"wed-heading row\">\n        <div class=\"wed-heading-wrapper col\">\n            <h1>Angelo & Klaudia\n                <br>\n                <span class=\"std\">Save the date</span>\n                <span class=\"wed-date\">22.08.2015</span>\n            </h1>\n        </div>\n    </div>\n    ";
    this.homeMenu = document.querySelector("#home");
    this.spa = document.querySelector(".wed-spa");
    this.homeSection = document.querySelector(".wed-home");
  }

  _createClass(Home, [{
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Home = __webpack_require__(0);

var _Home2 = _interopRequireDefault(_Home);

var _Navigation = __webpack_require__(2);

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Couple from './modules/Couple';
// import Message from './modules/Message';

//Load Home on window.laod
var home = new _Home2.default();

window.addEventListener("load", function () {
  var loader = new _Home2.default();
  loader.loadHome();
});
//End of home
var navigation = new _Navigation2.default();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Home = __webpack_require__(0);

var _Home2 = _interopRequireDefault(_Home);

var _Couple = __webpack_require__(3);

var _Couple2 = _interopRequireDefault(_Couple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navigation = function () {
  function Navigation() {
    _classCallCheck(this, Navigation);

    this.couple = new _Couple2.default();
    this.spa = document.querySelector(".wed-spa");

    this.homeButton = document.querySelector('#home');
    this.coupleButton = document.querySelector('#couple');
    this.bridesmaidButton = document.querySelector('#bridesmaid');
    this.groomsmenButton = document.querySelector('#groomsmen');
    this.eventsButton = document.querySelector('#events');
    this.storyButton = document.querySelector('#story');
    this.rsvpButton = document.querySelector('#rsvp');

    this.loadHome();
    this.loadCouple();
  }

  _createClass(Navigation, [{
    key: 'loadHome',

    // 1. Load home.
    value: function loadHome() {
      var _this = this;
      this.homeButton.addEventListener("click", function () {
        var home = new _Home2.default();
        _this.spa.innerHTML = home.template;
      });
    }
  }, {
    key: 'loadCouple',


    // 2. Load Couple.
    value: function loadCouple() {
      var _this = this;
      this.coupleButton.addEventListener("click", function () {
        _this.couple.loadCoupleTempStyle();
      });
    }
  }, {
    key: 'loadBridesmaid',


    // 3. Load Bridesmaid.
    value: function loadBridesmaid() {
      var _this = this;
      this.bridesmaidButton.addEventListener("click", function () {
        _this.bridesmaid.loadBridesmaidTemplate();
      });
    }
  }]);

  return Navigation;
}();

exports.default = Navigation;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TriCouple = __webpack_require__(4);

var _TriCouple2 = _interopRequireDefault(_TriCouple);

var _Message = __webpack_require__(5);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Couple = function () {
  function Couple() {
    _classCallCheck(this, Couple);

    this.message = new _Message2.default();

    //Start of HTML Template
    this.template = /*html*/'\n      <div class="message-popup"></div>\n      <div class="wed-couple container">\n          <div class="wed-couple-newlyweds wed-couple-bride">\n            <div class="wed-couple-newlyweds-img wed-couple-bride-img">\n              <div class="wed-couple-name-row row">\n                <div class="wed-couple-desc wed-couple-name wed-couple-name-bride col-md-auto">\n                  <h1>Klaudia Kim</h1>\n                </div>\n                <div class="wed-couple-desc wed-couple-position wed-couple-position-bride col-md-auto">\n                  <span>The Bride</span>\n                </div>\n              </div>\n              <div class="wed-couple-newlyweds-message wed-couple-newlyweds-message-bride">\n                <span>Message from the Bride</span>\n              </div>\n\n            </div>\n          </div>\n          <div class="wed-couple-newlyweds wed-couple-groom">\n            <div class="wed-couple-newlyweds-img wed-couple-groom-img">\n              <div class="wed-couple-name-row row">\n                <div class="wed-couple-desc wed-couple-name wed-couple-name-groom col-md-auto">\n                  <h1>Angelo Kim</h1>\n                </div>\n                <div class="wed-couple-desc wed-couple-position wed-couple-position-groom col-md-auto">\n                  <span>The Groom</span>\n                </div>\n              </div>\n\n              <div class="wed-couple-newlyweds-message wed-couple-newlyweds-message-groom">\n                <span>Message from the Groom</span>\n              </div>\n\n            </div>\n          </div>\n      </div>\n    ';
    // End of HTML Template

    //DOM declaration
    this.spa = document.querySelector(".wed-spa");
    //End of DOM declaration.

    //initialize methods.

    //End methods.
  }

  _createClass(Couple, [{
    key: 'injectTemplate',

    //------------------------------End Constructor

    // Start methods
    //1. Inject html template
    value: function injectTemplate() {
      this.spa.innerHTML = this.template;
    }
    //2. Inject couple style

  }, {
    key: 'injectStyle',
    value: function injectStyle() {
      var triCouple = new _TriCouple2.default();
    }
    //3. Load template and style.

  }, {
    key: 'loadCoupleTempStyle',
    value: function loadCoupleTempStyle() {
      this.injectTemplate();
      this.injectStyle();
      this.message.showMessage();
    }
  }]);

  return Couple;
}();

;

exports.default = Couple;

/***/ }),
/* 4 */
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function () {
  function Message() {
    _classCallCheck(this, Message);

    this.fName = '';
    this.lName = '';
    this.position = '';
    this.message = '';
    this.img = '';

    this.bride = {
      fName: 'Klaudia',
      lName: 'Kim',
      position: 'bride',
      message: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. ',
      img: '../assets/images/bride2.jpg'
    };

    this.groom = {
      fName: 'Angelo',
      lName: 'Kim',
      position: 'groom',
      message: 'Rorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. ',
      img: '../assets/images/bride3.jpg'
    };

    this.template = function () {
      return (/*html*/'\n      <div class="message message-show">\n        <div class="message-img">\n          <img src="' + this.img + '" />\n        </div>\n        <div class="message-close">x</div>\n        <div class="message-desc">\n          <h1>\n            ' + this.fName + ' ' + this.lName + ', the ' + this.position + '\n          </h1>\n          <p>' + this.message + '</p>\n        </div>\n      </div>'
      );
    };

    this.elements = function () {
      var messageButtons = document.querySelectorAll('.wed-couple-newlyweds-message');
      var messagePopup = document.querySelector('.message-popup');
      var messageClose = document.querySelector('.message-close');
      var messageDiv = document.querySelector('.message');
      return {
        messageButtons: messageButtons,
        messagePopup: messagePopup,
        messageClose: messageClose,
        messageDiv: messageDiv
      };
    };

    //Initiate Methods

    //End of Methods.
  }

  //declare methods
  // 1. show message on click.


  _createClass(Message, [{
    key: 'showMessage',
    value: function showMessage() {
      var _this = this;
      var els = new this.elements();
      var mB = els.messageButtons;
      var mP = els.messagePopup;
      var mD = els.messageDiv;
      mB.forEach(function (message) {
        message.onclick = function () {
          if (message.classList.contains('wed-couple-newlyweds-message-bride')) {
            console.log('bride');
            _this.fName = _this.bride.fName;
            _this.lName = _this.bride.lName;
            _this.position = _this.bride.position;
            _this.message = _this.bride.message;
            _this.img = _this.bride.img;
            console.log(_this.fName);
            mP.innerHTML = _this.template();
          } else {
            console.log('groom');
            _this.fName = _this.groom.fName;
            _this.lName = _this.groom.lName;
            _this.position = _this.groom.position;
            _this.message = _this.groom.message;
            _this.img = _this.groom.img;
            console.log(_this.fName);
            mP.innerHTML = _this.template();
          }
          var mC = els.messageClose;
          _this.closeMessage();
        };
      });
    }
  }, {
    key: 'closeMessage',


    // 2. close message.
    value: function closeMessage() {
      var els = new this.elements();
      var mC = els.messageClose;
      var mD = els.messageDiv;
      mC.addEventListener("click", function () {
        console.log('close message');
        mD.style.display = 'none';
      });
    }

    //End of class. Don't add anything below this line.

  }]);

  return Message;
}();

exports.default = Message;

/***/ })
/******/ ]);