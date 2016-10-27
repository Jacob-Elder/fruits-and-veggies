/* setup your angular app here */
var app = angular.module('fruits-and-veggies', []);
// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);


app.controller('sortFood', ['$scope', function($scope){
	console.log("controller loaded");

	$scope.allFood = fruits.concat(vegetables).sort();
	$scope.veggies = [];
	$scope.fruits = [];
	$scope.color;
	$scope.wrongAnswer = false;

	console.log($scope.allFood);

	$scope.moveRight = function(index){
		var clickedItem = $scope.allFood.splice(index, 1);
		$scope.veggies.push(clickedItem.toString());
		$scope.checkAnswers();
	}

	$scope.moveFruitRight = function(index){
		var clickedItem = $scope.fruits.splice(index, 1);
		$scope.allFood.push(clickedItem.toString());
	}

	$scope.moveLeft = function(index){
		var clickedItem = $scope.allFood.splice(index, 1);
		$scope.fruits.push(clickedItem.toString());
		$scope.checkAnswers();
	}

	$scope.refresh = function(){
		$scope.allFood = fruits.concat(vegetables);
		$scope.veggies = [];
		$scope.fruits = [];
		$scope.color = null;
		$scope.wrongAnswer = false;
	}

	$scope.moveVeggieLeft = function(index){
		var clickedItem = $scope.veggies.splice(index, 1);
		$scope.allFood.push(clickedItem.toString());
	}

	$scope.checkAnswers = function(){

		if($scope.allFood.length === 0){
		console.log("all done!");
			$scope.veggies.forEach(function(item){
				if (vegetables.indexOf(item) === -1){
					$scope.wrongAnswer = true;
					console.log(item + " is wrong!");
					$scope.color = "red";
				}
			});
			$scope.fruits.forEach(function(item){
				if (fruits.indexOf(item) === -1){
					$scope.wrongAnswer = true;
					console.log(item + " is wrong!");
					$scope.color = "red";
				}
			});
			if($scope.wrongAnswer === false){
				alert("You got all answers correct!!!");
			};
		};
	} 

}]);
