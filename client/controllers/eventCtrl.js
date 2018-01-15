var eventCtrl = angular.module('eventCtrl', []);

eventCtrl.controller('eventCtrl', function($scope, eventService){
    eventService.getEvents().then(function(data){
        console.log(data);
        $scope.events = data;
        // if(data.length === 0){
        //     $scope.eventDialog = true;
        //     $scope.eventHeadline = false;
        // }else{
        //     $scope.eventDialog = false;
        //     $scope.eventHeadline = true;
        // }
        angular.forEach($scope.events, function(value) {
            value.date = new Date(value.date);
        })

        $scope.filterDate = function(events) {
            var today = new Date();
            var today_plus_one_day = new Date().setDate(today.getDate()-1);
            return events.date >= today_plus_one_day;
            if (event.date.length === 0){
                $scope.eventDialog = false;
                $scope.eventHeadline = true;
            }else{
                $scope.eventDialog = true;
                $scope.eventHeadline = false;
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.activeEventImg = '';
    $scope.openModal = function(path){
        $scope.activeEventImg = path;
    }

})