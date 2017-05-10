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
		
	},

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
