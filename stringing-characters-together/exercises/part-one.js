let num = 1001;
let num1 = 123.45

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
num = String(num);
console.log(num.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num1 = String(num1);
num2 = num1.replace(".", "");
console.log(num2.length);
console.log(num1);
console.log(`num1 = ${num1} has ${num2.length} digits but a length of ${num1.length}`);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (num.indexOf(".") > -1) {
    num = num.replace(".", "");
} else {
    num = num;
}