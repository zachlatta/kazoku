angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope, $ionicModal, TaskService) {
  TaskService.$bind($scope, 'tasks');

  $scope.rightButtons = [
    {
      type: 'button-clear',
      content: 'Add',
      tap: function (e) {
        $scope.newTask();
      }
    }
  ];

  $ionicModal.fromTemplateUrl('templates/tasks-add.html', function (modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.newTask = function () {
    $scope.taskModal.show();
  };

  $scope.closeNewTask = function () {
    $scope.taskModal.hide();
  };

  $scope.createTask = function (task) {
    TaskService.$add({
      title: task.title,
      completed: false
    });
    $scope.taskModal.hide();
    task.title = '';
  };
})
