angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope, TaskService) {
  TaskService.$bind($scope, 'tasks');
})
