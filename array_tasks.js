var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = [];
		for(var item of arr1){
			newArray.push(item);
		}
		for(var item of arr2){
			newArray.push(item);
		}
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var newArray = [];
		arr.forEach(function(element){
			newArray.push(element * element);
		})
		return newArray;
	},

	sum: function (arr) {
		var total = 0;
		arr.forEach(function(element){
			total += element;
		})
		return total;
	},

	findDuplicates: function (arr) {
		var newArray = [];
		for (var i = 0; i < arr.length -1; i++){
			if(arr[i +1] === arr[i]){
				if(!newArray.includes(arr[i])){
					newArray.push(arr[i]);
				}
			}
		}
		return newArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = arr.filter(function(element){
			return element != valueToRemove;
		})
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexes = [];
		for (var index = 0; index < arr.length; index ++){
			if(arr[index] === itemToFind){
				indexes.push(index);
			}
		}
		return indexes;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evenNums = arr.filter(function(element){
			if(element % 2 == 0){
				return element;
			} 
		})
		var total = 0;
		evenNums.forEach(function(element){
			total += (element * element);
		})
		return total;
		}

}

module.exports = arrayTasks
