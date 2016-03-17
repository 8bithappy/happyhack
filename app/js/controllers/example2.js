// import _ from 'lodash';

function ExampleCtrl2(ExampleService, DataService, $scope) {
  'ngInject';

  // let vm = {};


  $scope.lala = DataService.get();

  $scope.currentCart = $scope.lala.carts[$scope.lala.cartIndex];

  console.log($scope.currentCart.id);

}

export default {
  name: 'ExampleCtrl2',
  fn: ExampleCtrl2
};
