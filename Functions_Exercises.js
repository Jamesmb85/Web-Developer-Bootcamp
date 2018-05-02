//Function 1
function isEven(x){
	if(x % 2 == 0){
		return true;
	}
	
	else{
		return false;
	}
}

//Function 2
function factorial(x){
	if(x < 0){
		return undefined;
	}
	else if ((x == 0) || (x == 1)){
		return 1;
	}
	
	//recursion
	else{
		return (x * factorial(x - 1));
	}
}

//Function 3
function kebabToSnake(str){
	/* The replace() method searches a string for a specified value, or a regular expression, and returns a new 
	string where the specified values are replaced.
	To perform a global search and replace, include the g switch in the regular expression.*/
	
	return str.replace(/-/g, "_");
	
}
