//The prompt() method displays a dialog box that prompts the visitor for input.
//A prompt box is often used if you want the user to input a value before entering a page.
var answer = prompt("Are we there yet? ");


// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. 
// Returns -1 if the value is not found.
// answer.indexof("yes") returns 1
// answer.indexof("whatever") returns -1
while(answer.indexOf("yes") === -1 ){
	answer = prompt("Are we there yet? ");
}

alert("Yes!!!, we are finally here ");
