/* // 01 - Calculator
function calculate(num1, operator, num2) {
    if (operator === "+") {
        console.log(num1 + num2);
    }
    if (operator === "-") {
        console.log(num1 - num2);
    } 
    if (operator === "x") {
        console.log(num1 * num2);
    } 
    if (operator === "/") {
        console.log(num1 / num2);
    } 
    if (operator === "%") {
        console.log(num1 % num2);
    }
} */
/* let calculated;
calculated = calculate(5, 4, "x");
console.log(calculated); */
/* let stringNumbers = process.argv.slice(2);
let numberOne = parseInt(stringNumbers[0]);
let operator = stringNumbers[1];
let numberTwo = parseInt(stringNumbers[2]);
calculate(numberOne, operator, numberTwo); 

// 02 - Table
function multiply(num) {
    for (i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}
let stringNumber = process.argv.slice(2);
let number = parseInt(stringNumber[0]);
multiply(number); */

