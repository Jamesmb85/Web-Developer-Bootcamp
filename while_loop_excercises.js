//While Loop Exercises

//Print all of the numbers between -10 and 19
var number = -10;

while (number <= 19){
	console.log(number);
	number++;
}

//Print all event numbers between 10 and 40
var number = 10;

while (number <= 40){
	if(number % 2 == 0){
		console.log(number);
	}
	
	number++;
}


//Print all odd numbers between 300 and 333
var number = 300;

while (number <= 333){
	if(number %2 == 1){
		console.log(number);
	}
	
	number++;
}


//Print all numbers that are divisible by 5 and 3 between 5 and 50
var number = 5;

while (number <= 50){
	if ((number % 3 == 0) && (number % 5 == 0)){
		console.log(number);
	}
	
	number++;
}


