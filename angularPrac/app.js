(function () {
'use strict';
    
angular.module('myFirstApp', [])
.controller('myFirstController', DIController);
DIController.$inject= ['$scope', '$filter'];

    function DIController($scope, $filter) {
        $scope.name= "type a name"
        $scope.nameNumber= 0

        $scope.number= "type random numbers"
        $scope.numberName= "..."

        $scope.caseState= "upper case me!"

        $scope.displayNumber= function () {
            var totalNameValue= calculateNumberFromString($scope.name);
            $scope.nameNumber= totalNameValue;
        }
        $scope.displayName= function () {
            var nameString= calculateNameFromNumber($scope.number);
            $scope.numberName= nameString;
        }

        function calculateNumberFromString(string) {
            var totalStringValue= 0
            if ($scope.name=== "thang") return "hi boss"
            for (var i= 0; i< string.length; i++) {
                totalStringValue += string.charCodeAt(i);
                // totalStringValue *= 37
            }
            return totalStringValue;
        }

        function calculateNameFromNumber(numberID) {
            var nameString= "ok idk how to make it work lmao"
            return nameString;
        }

        $scope.upper= function () {
            var upCase= $filter('uppercase');
            $scope.name= upCase($scope.name);
        }

        $scope.lower= function () {
            var lowCase= $filter('lowercase');
            $scope.name= lowCase($scope.name);
        }
 
        $scope.changeCase= function () {
            if ($scope.name=== $filter('uppercase')($scope.name)) {
                $scope.lower();
                $scope.caseState= "upper case me!"
            }
            else {
                $scope.upper();
                $scope.caseState= "lower me now!"
            }
        }

        $scope.state= "notSus";
        $scope.buttonState= "pig";
        $scope.changeState= function () {
            if ($scope.state== "sus") {
                $scope.state= "notSus"
                $scope.buttonState= "pig"
            } else {
                $scope.state= "sus"
                $scope.buttonState= "sus"
            }
        }

        $scope.status= function () {
            if ($scope.state== "sus") {
                return "ඞ"
            }
        }

        // $scope.log= function () {
        //     console.log($scope.state);
        // }
    }

})();