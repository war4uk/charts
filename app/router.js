import angular from './libs/angular';

angular.module('chartsApp')
  .config(($routeProvider) => {
    $routeProvider
      .when('/chart/:chartId', {
        template: '<span>chartID</span>',
        //        controller: 'BookController',
      })
      .when('/', {
        templateUrl: 'app/modules/common/mainpage/mainpage.layout.html',
        controller: 'mainpageController',
        controllerAs: 'ctrl',
        caseInsensitiveMatch: true,
        // controller: 'ChapterController'
      })
      .otherwise({ redirectTo: '/' });
  });
