angular.module('starter.services', [])

.factory('TaskService', function($firebase) {
  var _ref = new Firebase('https://kazoku.firebaseio.com/tasks');
  var _tasks = $firebase(_ref);

  return {
    all: function() {
      return _tasks;
    },
    get: function(taskId) {
      return _tasks[taskId];
    },
    add: function(task) {
      return _tasks.$add(task);
    }
  }
});
