import _ from 'lodash';

function ExampleCtrl(ExampleService, DataService, $scope, $location) {
  'ngInject';

  let vm = {};

  ExampleService.login().then((data) => {
    console.log(data);
    $scope.user = data;
    vm.user = data;
    ExampleService.getCarts($scope.user.token).then((data) => {
      console.log(data);
      $scope.carts = data.orders;
      vm.carts = data.orders;
      $scope.$apply();
    }, (err) => {
      console.log(err);
    });
  }, (err) => { console.log(err); });


  $scope.toDate = function(date) {
    var d = new Date(date);
    return (d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate());
  };

  $scope.chooseCart = function(obj) {
    if (!obj.selected) {
      obj.selected = true;
    } else {
      obj.selected = false;
    }

    console.log(obj.selected);
  };

  $scope.processPage1 = function() {
    var cartIndex = _.findIndex($scope.carts, {'selected': true});
    vm.cartIndex = cartIndex;
    DataService.set(vm);
    console.log(cartIndex);
    $location.path('/page2');
  };

}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
