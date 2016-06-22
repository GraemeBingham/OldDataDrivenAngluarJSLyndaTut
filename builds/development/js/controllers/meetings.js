myApp.controller('MeetingsController',
  function ($scope, $firebaseObject) {
  var ref = new Firebase("https://attendanceldcapp-85101.firebaseio.com/meetings");

  $scope.meetings = $firebaseObject(ref);


});
