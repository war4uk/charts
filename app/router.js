import angular from './libs/angular';

angular.module('chartsApp')
  .config(($routeProvider) => {
    $routeProvider
      .when('/chart/:chartId', {
        template: '<span>chartID</span>',
        //        controller: 'BookController',
      })
      .when('/', {
        template: '<charts></charts>',
        // controller: 'ChapterController'
      })
      .otherwise({ redirectTo: '/' });
  });
