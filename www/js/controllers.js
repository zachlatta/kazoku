angular.module('starter.controllers', [])

.controller('TaskIndexCtrl', function($scope, TaskService) {
  $scope.tasks = TaskService.all();
})

.controller('TaskDetailCtrl', function($scope, $stateParams, TaskService) {
  $scope.task = TaskService.get($stateParams.taskId);
})

.controller('TaskAddCtrl', function($scope, TaskService) {
  $scope.addTask = function(task) {
    console.log(task);
    TaskService.add(task);

    task.title = '';
    task.description = '';
  }
});
