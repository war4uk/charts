(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _angular = require('./libs/angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module('chartsApp', ['ngRoute', 'mainPage']);

require('./mainPage');
require('./router');

},{"./libs/angular":2,"./mainPage":4,"./router":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = window.angular;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chartsDirective;


chartsDirective.$inject = [];

function chartsDirective() {
  return {
    restrict: 'E',
    template: '<span>my directive</span>'
  };
}

},{}],4:[function(require,module,exports){
'use strict';

var _angular = require('../libs/angular');

var _angular2 = _interopRequireDefault(_angular);

var _chartsDirective = require('./charts.directive.js');

var _chartsDirective2 = _interopRequireDefault(_chartsDirective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module('mainPage', []).directive('charts', _chartsDirective2.default);

},{"../libs/angular":2,"./charts.directive.js":3}],5:[function(require,module,exports){
'use strict';

var _angular = require('./libs/angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module('chartsApp').config(function ($routeProvider) {
  $routeProvider.when('/chart/:chartId', {
    template: '<span>chartID</span>'
  }). //        controller: 'BookController',
  when('/', {
    template: '<charts></charts>'
  }). // controller: 'ChapterController'
  otherwise({ redirectTo: '/' });
});

},{"./libs/angular":2}]},{},[1]);
