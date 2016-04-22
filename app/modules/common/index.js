import angular from '../../libs/angular';
import layoutDirective from './layout/layout.directive';
import mainpageController from './mainpage/mainpage.controller';

angular.module('chartsApp.common', [])
  .directive('layout', layoutDirective)

  .controller('mainpageController', mainpageController);
