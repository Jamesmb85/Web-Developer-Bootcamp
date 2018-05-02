var activites = []; //create an empty array

//The prompt() method displays a dialog box that prompts the visitor for input.
//A prompt box is often used if you want the user to input a value before entering a page.
var answer = prompt("What activity would you like to do? ").toLowerCase();


//Enter activities until user enters quit
while(answer != "quit"){

	if(answer == "list"){
		listTodo(); //calls function that prints contents of list to the console
	}
	
	else if(answer == "new"){
		addTodo(); //calls function that prints contents of list to the console
	}

	else if(answer == "delete"){
		deleteTodo(); //calls function that prints contents of list to the console
	}

	//ask again to check condition at the top
	answer = prompt("What activity would you like to do? ");

}

console.log("You quit the app")

//Function Definition
function listTodo(){
	console.log("**********");

	for(i = 0; i < activites.length; i++){

		console.log(i + ": " + activites[i]);
	}

	console.log("**********");

}

function addTodo(){
	//ask for new activity
	var answer = prompt("What new activity would you like to do? ");

	//add activity to current list. Will add to the end
	activites.push(answer);

	console.log(answer + " was added to the list");

}

function deleteTodo(){
	//Cast string to a number
	var index = Number(prompt("What is the index of the activity you want to delete: "));

	//The splice() method adds/removes items to/from an array, and returns the removed item(s).	
	var removed = activites.splice(index, 1);


	console.log(removed + " was deleted from the list");
}