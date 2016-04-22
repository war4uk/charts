export default chartDirective;

chartDirective.$inject = [];

function chartDirective() {
  return {
    restrict: 'E',
    template: '<span>my directive </span>',
  };
}
