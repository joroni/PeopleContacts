var app = angular.module('myApp', []);
app.controller('controller', controller);
function controller() {
    var _this = this;
    //_this.hello = 'Hello There';
    var vmdata = JSON.parse(localStorage.getItem('people'));
    _this.value = _this.value;
    _this.values = vmdata;
    _this.change = function () {
        //  _this.sayHello = 'Hello';
        _this.sayHello = _this.value;
       
        console.log('this', _this.values);
       

return _this.value;



    }
}




/* 
starApp.controller('StarCtrl', ['$scope', function ($scope) {
    $scope.ratings = [{
        current: 5,
        max: 10
    }, {
        current: 3,
        max: 5
    }];
}]);

starApp.directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '='
        },
        link: function (scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: i < scope.ratingValue
                });
            }
        }
    }
}); */


app.controller('ctrl',function($scope){
  $scope.max = 5;
  $scope.ratingVal = 5;
  $scope.readonly = false;
  $scope.onHover = function(val){
    $scope.hoverVal = val;
  };
  $scope.onLeave = function(){
    $scope.hoverVal = null;
  }
  $scope.onChange = function(val){
    $scope.ratingVal = val;
  }

});
app.directive('star', function () {
  return {
    template: '<ul class="rating" ng-mouseleave="leave()">' +
        '<li ng-repeat="star in stars" ng-class="star" ng-click="click($index + 1)" ng-mouseover="over($index + 1)">' +
        '<i class="fa fa-star fa-1x"></i>' +
        '</li>' +
        '</ul>',
    scope: {
      ratingValue: '=',
      max: '=',
      readonly: '@',
      onHover: '=',
      onLeave: '='
    },
    controller: function($scope){
      $scope.ratingValue = $scope.ratingValue || 0;
      $scope.max = $scope.max || 5;
      $scope.click = function(val){
        if ($scope.readonly && $scope.readonly === 'true') {
          return;
        }
        $scope.ratingValue = val;
      };
      $scope.over = function(val){
        $scope.onHover(val);
      };
      $scope.leave = function(){
        $scope.onLeave();
      }
    },
    link: function (scope, elem, attrs) {
      elem.css("text-align", "center");
      var updateStars = function () {
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled: i < scope.ratingValue
          });
        }
      };
      updateStars();
 
      scope.$watch('ratingValue', function (oldVal, newVal) {
        if (newVal) {
          updateStars();
        }
      });
      scope.$watch('max', function (oldVal, newVal) {
        if (newVal) {
          updateStars();
        }
      });
    }
  };
});
/* 
app.controller('ngchangeCtrl', function ($scope) {
    $scope.arrlist = [{
        "userid": 1,
        "name": "Suresh"
    }, {
        "userid": 2,
        "name": "Rohini"
    }, {
        "userid": 3,
        "name": "Praveen"
    }];

    var un =  $scope.arrlist;
    $scope.getdetails = function () {
        if ($scope.userselected.userid == $scope.userselected.userid )
            $scope.result = true;

        else
            $scope.result = false;
    }
}); */


app.controller('ExampleController', ['$scope', function($scope) {
    $scope.name = 'Whirled';
  }]);

app.controller('peopleCtrl', function ($scope, $http) {
    $http.get("people.json").then(function (response) {
        $scope.myData = response.data.People;
        //$scope.myFilter = "Test";
        //  $scope.autoID =  $index;
        $scope.boom = function (val) {
            console.log(val);
        };

        console.log('myData', $scope.myData);
        localStorage.setItem('people', JSON.stringify($scope.myData));


        var vmdata = JSON.parse(localStorage.getItem('people'));
        console.log('vmdata', vmdata);
        $scope.myVMdata = vmdata;

       
     /*    for (var i = 0; i < vmdata.length; i++) {
           var data = vmdata;
         //  console.log(index); // 0, 1, 2, 3
            console.log(data); // A, B, C, D
          } */

          $scope.getID= function(id){
            // $scope.theFilter = {};
            console.log(id);
           // console.log($scope.theFilter);
            $scope.theFilter =  $scope.myVMdata;
           // console.log($scope.theFilter.id);
           
          
          }

         
       
              
       
         


    });

});
