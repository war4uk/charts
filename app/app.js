import angular from './libs/angular';
angular.module('chartsApp', ['ngRoute', 'chartsApp.charts', 'chartsApp.common']);

require('./modules/charts');
require('./modules/common');
require('./router');

