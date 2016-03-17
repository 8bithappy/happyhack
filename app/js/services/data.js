function DataService() {
  'ngInject';

  const data = {};
  let dataset = {};

  data.get = function() {
    return dataset;
  };

  data.set = function(value) {
    dataset = value;
  };

  return data;

}

export default {
  name: 'DataService',
  fn: DataService
};
