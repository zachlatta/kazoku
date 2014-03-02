angular.module('starter.services', [])

.factory('TaskService', function($firebase) {
  var _ref = new Firebase('https://kazoku.firebaseio.com/tasks');

  return $firebase(_ref);
});
