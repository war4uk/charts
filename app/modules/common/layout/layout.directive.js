export default layoutDirective;

layoutDirective.$inject = [];

function layoutDirective() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<span>Teste</span><div class="page-flex-container" ng-transclude> </div><span>11111</span>',
  };
}
