var arrayTasks = {

	concat: function (arr1, arr2) {
		newArray = [];
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
		newArray = [];
		arr.forEach(function(element){
			newArray.push(element * element);
		})
		return newArray;
	},

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
