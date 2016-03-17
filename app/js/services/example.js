function ExampleService($http, $base64) {
  'ngInject';

  const service = {};

  service.get = function() {
    return new Promise((resolve, reject) => {
      $http.get('apiPath').success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };

  // service to login
  service.login = function() {
    return new Promise((resolve, reject) => {
      var authdata = $base64.encode('aa@aa.com:123456');;
      $http.defaults.headers.common['X-Happy-Client-Type'] = 'webapp';
      $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
      $http.defaults.headers.common['X-Spree-Client-Token'] = '0115f406e71219ec9ea58e2eaaa4480ef966bdc42e245ec4bf601b23f07bd48e';
      $http.post('https://api-stage.happyfresh.com/api/login').success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };

  // get all carts
  service.getCarts = function(token) {
    return new Promise((resolve, reject) => {
      $http.defaults.headers.common['X-Spree-Token'] = token;
      $http.get('https://stage-api.happyfresh.com/api/orders/mine?per_page=100').success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };

  return service;

}

export default {
  name: 'ExampleService',
  fn: ExampleService
};
