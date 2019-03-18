var app = angular.module('myApp', []);
app.controller('controller', controller);

function controller() {
  var _this = this;
  //_this.hello = 'Hello There';
  var vmdata = JSON.parse(localStorage.getItem('people'));
  _this.value = _this.value;
  _this.values = vmdata;
  _this.change = function() {
    //  _this.sayHello = 'Hello';
    _this.sayHello = _this.value;

    console.log('this', _this.values);


    return _this.value;



  }
}




app.controller('ctrl', function($scope) {
  $scope.max = 5;
  $scope.ratingVal = 5;
  $scope.readonly = false;
  $scope.onHover = function(val) {
    $scope.hoverVal = val;
  };
  $scope.onLeave = function() {
    $scope.hoverVal = null;
  }
  $scope.onChange = function(val) {
    $scope.ratingVal = val;
  }

});
app.directive('star', function() {
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
    controller: function($scope) {
      $scope.ratingValue = $scope.ratingValue || 0;
      $scope.max = $scope.max || 5;
      $scope.click = function(val) {
        if ($scope.readonly && $scope.readonly === 'true') {
          return;
        }
        $scope.ratingValue = val;
      };
      $scope.over = function(val) {
        $scope.onHover(val);
      };
      $scope.leave = function() {
        $scope.onLeave();
      }
    },
    link: function(scope, elem, attrs) {
      elem.css("text-align", "center");
      var updateStars = function() {
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled: i < scope.ratingValue
          });
        }
      };
      updateStars();

      scope.$watch('ratingValue', function(oldVal, newVal) {
        if (newVal) {
          updateStars();
        }
      });
      scope.$watch('max', function(oldVal, newVal) {
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

app.controller('Test',  function($scope) {
    $scope.persons = [{ type: 1, name: 'Caio' }, { type: 2, name: 'Ary' }, { type: 1, name: 'Camila' }, { type: 3, name: 'Daniel' }];
    $scope.myFunction = function (val) {

        return (val.type != 2);
    };
});



/* 
app.controller('peopleCtrl2',  function($scope) {


    var vmdata = JSON.parse(localStorage.getItem('people'));
    console.log('vmdata', vmdata);
    $scope.myVMdata = vmdata;
    $scope.persons = vmdata;
    $scope.myFunction = function (val) {

        return (val.type != 2);
    };
});
 */


app.controller('peopleCtrl', function($scope, $http) {
  $http.get("user.json").then(function(response) {
    $scope.mockUserData = response.data.User;
    $scope.username = function(val) {
      console.log(val);
    };
  })


 
$scope.MyCtrl = function($scope) {
  
    $scope.people = [
        {id: 1, name: "Mark"},
        {id: 2, name: "John"},
        {id:3, name: "Joe"}
    ];
    $scope.myFilter = function(item){
        if(item.id === 2){
            return item;
        }
    };
}
  
  $http.get("people.json").then(function(response) {
    $scope.myData = response.data.People;
    /* $scope.boom = function(val) {
      console.log(val);
    };
 */

    //console.log('mockUserData', $scope.mockUserData);
    localStorage.setItem('user', JSON.stringify($scope.mockUserData));


    var vmuserdata = JSON.parse(localStorage.getItem('user'));
    console.log('vmuserdata', vmuserdata);
    $scope.userVMdata = vmuserdata;


    //console.log('myData', $scope.myData);
    localStorage.setItem('people', JSON.stringify($scope.myData));


    var vmdata = JSON.parse(localStorage.getItem('people'));
    console.log('vmdata', vmdata);
    $scope.myVMdata = vmdata;



    $scope.messagingStat = function() {
      alert('Message Sent.');
    }

 

    $scope.getName = function(name) {
      console.log(name);
    }

 
    $scope.theFilter = '';
    $scope.getID = function(id) {
      $scope.searchText=  '';
      console.log('id: ',  id);
    
      $scope.theFilter = id;
      console.log( 'Filter: ',$scope.theFilter);


    }



    $scope.myfield = '';
    $scope.checkContent = function(){
        if($scope.myfield)//Check Empty Field
        {
            $scope.msg = "pls enter something";
        }else{
            $scope.msg = "Something Entered";
        }
    } 




  });

});