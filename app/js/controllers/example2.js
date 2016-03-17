// import _ from 'lodash';

function ExampleCtrl2(ExampleService, DataService, $scope) {
  'ngInject';

  // let vm = {};


  $scope.lala = DataService.get();

  $scope.currentCart = $scope.lala.carts[$scope.lala.cartIndex];

  console.log($scope.currentCart.id);

  // console.log($scope.lala.user.token);
  $scope.currentStoreSubDistrict = $scope.currentCart.line_items[0].stock_location.sub_district.id;
  $scope.currentStoreId = $scope.currentCart.line_items[0].stock_location.id;
  $scope.currentStoreName = $scope.currentCart.line_items[0].stock_location.name;
  // console.log($scope.currentStore);
  $scope.listOfAvailableStore = [];
  $scope.selectedStoreId;

  ExampleService.getStoresInArea($scope.lala.user.token, $scope.currentStoreSubDistrict).then((data) => {
    console.log(data);
    // console.log($scope.currentStoreId);
    for (var ii in data.stock_locations){
      // console.log(data.stock_locations[ii].id);
      if(data.stock_locations[ii].name !== $scope.currentStoreName ){
        $scope.listOfAvailableStore.push(
          { 'id': data.stock_locations[ii].id, 'name': data.stock_locations[ii].name }
        );
      }
    }

    // console.log('itai');
    console.log($scope.listOfAvailableStore);
    $scope.$apply();
  }, (err) => {
    console.log(err);
  });

}

export default {
  name: 'ExampleCtrl2',
  fn: ExampleCtrl2
};
