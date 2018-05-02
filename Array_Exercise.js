//Array Problems

//Array #1 - Print an array in reverse
//Takes on an array as a parameter
function printReverse(sampleArray){
	//sampleArray[sampleArray - 1] is the last element in sampleArray
	for(var a = sampleArray.length-1; a >= 0; a--){
		console.log(sampleArray[a]);
	}
}


//Array #2 = returns true if all elements in the array are of the same type and value. 
function isUniform(sampleArray){
	//Need to iterate through the array
	//Need to track if the first element is equal to the second, third, and so-on
	
	var value = false;
	
	for(var a = 0; a < sampleArray.length; a++){
		if(sampleArray[a] === sampleArray[a+1]){
			value = true;
		}
	}
	
	return value;
}


//Array #3 - Print the sum of the numbers in the array
function sumArray(sampleArray){
	//Need to iterate through the array
	//Need a variable that we are adding to after each loop
	
	var result = 0;
	
	for(var a = 0; a < sampleArray.length; a++){
		result += sampleArray[a]; //add the value that is at sampleArray[a] to result
	}
	
	return result;
}


//Array #4 - Returns the maximum number in the array
function max(sampleArray){
	//Need to iterate through the array
	//Need to check each value to see which is bigger
	//Bigger value is place in a temp variable
	
	var largest = sampleArray[0]; //first element is assigned to variable
	
	for(var a = 1; a < sampleArray.length; a++){
		if(sampleArray[a] > largest ){
			largest = sampleArray[a];
		}
		
	}
	
	return largest;
	
}