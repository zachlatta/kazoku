angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function($firebase) {
  var _ref = new Firebase('https://kazoku.firebaseio.com/pets');
  var _pets = $firebase(_ref);

  return {
    all: function() {
      return _pets;
    },
    get: function(petId) {
      return _pets[petId];
    },
    add: function(pet) {
      return _pets.$add(pet);
    }
  }
});
