angular.module('starter.controllers', [])

.controller('PetIndexCtrl', function($scope, PetService) {
  $scope.pets = PetService.all();
})

.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  $scope.pet = PetService.get($stateParams.petId);
})

.controller('PetAddCtrl', function($scope, PetService) {
  $scope.pets = PetService.all();
  $scope.addPet = function(pet, form) {
    PetService.add(pet);

    pet.title = '';
    pet.description = '';
  }
});
