//Age Calculator
//The prompt() method displays a dialog box that prompts the visitor for input.
//A prompt box is often used if you want the user to input a value before entering a page.
var age = prompt("How old are you? ");

//Need to output age. Need to convert string to a number
//Write code that prints out the person's age
alert(age + " years" + " is roughly " + (Number(age) * 365.25) + " days");