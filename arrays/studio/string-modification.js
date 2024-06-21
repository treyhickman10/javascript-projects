const input = require('readline-sync');
let str = "LaunchCode";


//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let start = str.slice(0, 3);
let final = str.slice(3, str.length);
let word = final + start;

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The mutated version of ${str} is ${word}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let number = input.question(`Insert a number between 1 and ${str.length}: `);

let start1 = str.slice(0, number);
let final1 = str.slice(number, str.length);
let word1 = final1 + start1;



//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (number > 0 && number < 10) {
    let start1 = str.slice(0, number);
    let final1 = str.slice(number, str.length);
    let word1 = final1 + start1;
    console.log(`The mutated version of ${str} is ${word1}`);  
}  else {
    let start = str.slice(0, 3);
    let final = str.slice(3, str.length);
    let word = final + start;
    console.log(`The mutated version of ${str} is ${word}. We defaulted to index of 3 because your number was outside of the accepted range.`);
}