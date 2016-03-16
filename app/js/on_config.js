function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('Page1', {
    url: '/page1',
    controller: 'ExampleCtrl as home',
    templateUrl: 'page1.html',
    title: 'Page1'
  })
  .state('Page2', {
    url: '/page2',
    controller: 'ExampleCtrl as home',
    templateUrl: 'page2.html',
    title: 'Page2'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
