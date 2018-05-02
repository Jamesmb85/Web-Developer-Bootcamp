//What is our secret number?
var secretNumber = 27;


do{

	//Cast string to a number
	var guess = Number(prompt("What do you think my secret number is? "));
	
	if (secretNumber == guess) {
		alert("Congrats you got the right number !!! ");
		break; //breaks out of the loop. Control doesn't go back to the top
	}

	else if (secretNumber > guess) {
		alert("You're guess is too low!!! Please try again: ");
	}

	else{
		alert("You're guess is too high!!! Please try again: ");
	}

//do-while loop does the loop at least once. I didn it this way because someone might guess right on the first try 
//and this you don't need to test the condition again
}while(secretNumber != guess); 

