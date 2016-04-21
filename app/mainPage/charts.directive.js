export default chartsDirective;

chartsDirective.$inject = [];

function chartsDirective() {
  return {
    restrict: 'E',
    template: '<span>my directive</span>',
  };
}
