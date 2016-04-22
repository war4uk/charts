import angular from '../../libs/angular';
import chartsDirective from './chart.directive.js';

angular.module('chartsApp.charts', [])
  .directive('chart', chartsDirective);
