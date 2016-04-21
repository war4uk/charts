import angular from '../libs/angular';
import chartsDirective from './charts.directive.js';

angular.module('mainPage', [])
  .directive('charts', chartsDirective);
