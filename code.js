  var app = angular.module('myApp', ['ngCordova']);
  
   app.controller('MyCtrl', function($scope, $cordovaGeolocation) {
   var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function (position) {
        var lat  = position.coords.latitude
        var long = position.coords.longitude
        alert(lat + '   ' + long)
        }, function(err) {
       alert(err)
      });
                                                      
     var watchOptions = {timeout : 3000, enableHighAccuracy: false};
     var watch = $cordovaGeolocation.watchPosition(watchOptions);
                                                      
     watch.then(
          null,
                                                                 
         function(err) {
         alert(err)
        },
                                                                 
         function(position) {
         var lat  = position.coords.latitude
         var long = position.coords.longitude
         alert(lat + '' + long)
         }
       );
                                                      
         watch.clearWatch();
                                                      
     });
