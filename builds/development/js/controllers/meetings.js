myApp.controller('MeetingsController',
  function ($firebase, $scope, $firebaseObject, $firebaseArray) {

  var ref = new Firebase("https://attendanceldcapp-85101.firebaseio.com/meetings");
  var meetings =  $firebaseArray(ref);

  var database = firebase.database();

  $scope.meetings = $firebaseObject(ref);

  $scope.addMeeting=function() {
    meetings.$add({
      name: $scope.meetingname,
      date: Firebase.ServerValue.TIMESTAMP
    }).then(function() {
      $scope.meetingname = '';
    });
  }

  $scope.deleteMeeting=function(key) {
    //console.log(key);
    ref.child(key).remove();
    //database.ref.remove(key);
    //meetings.$remove(key);
  }
});
