var app = angular.module("myApp",[]);
app.controller("myController",["$scope","$http",function($scope,$http){
var person1 ={
	name: "scott",
	email:"scott@gmail.com",
	mobile:"(989) 1111-1111"
}
var person2 ={
	name: "tharun",
	email:"tharun@gmail.com",
	mobile:"(989) 22222-1111"
}

var person3 ={
	name: "arun",
	email:"arun@gmail.com",
	mobile:"(989) 3333-1111"
}

var contactList = [person1,person2,person3];
$scope.contactList = contactList;

}]);