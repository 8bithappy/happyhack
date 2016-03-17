import _ from 'lodash';

function ExampleCtrl2(ExampleService, DataService, $scope, $q) {
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
  $scope.selectedStoreId = '';

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

  $scope.hehehe = function() {
    //
    var arrPromise = [];
    _.each($scope.currentCart.line_items, function(item) {
      var hehe = ExampleService.search($scope.lala.user.token, $scope.selectedStoreId, item.variant.name);
      arrPromise.push(hehe);
    });
    $q.all(arrPromise).then(function(data) {
      console.log('all done', data);
      $scope.newOne = [];
      $scope.newSum = 0;
      _.each(data, function (item, key) {
        $scope.newSum += parseInt(item.variants[0].price);
        console.log(key, $scope.currentCart.line_items[key].variant.sku, item.variants[0].sku);
        if (item.variants[0].sku === $scope.currentCart.line_items[key].variant.sku) {
          $scope.newOne.push(item);
        } else {
          $scope.newOne.push({});
        }
      });
    });
  };

  $scope.compareStuff = function(item, key) {
    //
    if (item.price <= $scope.currentCart.line_items[key].price) { return true; } else { return false; }
  };


}

export default {
  name: 'ExampleCtrl2',
  fn: ExampleCtrl2
};
