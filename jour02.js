/* // 01 - Number
var integer = 102;
var float = 13.9;
console.log(integer, float); 

// 02 - Convert
var basic = 34;
var stringified = basic.toString();
console.log(stringified); 

// 03 - Round
var num = 1.5;
var rounded = Math.round(num);
console.log(rounded); 


// 04 - Arithmétique
var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis); 

// 05 - Comparaison
var test = 143;
var bis = 219;
console.log(test < bis);
console.log(test > bis);
console.log(test <= bis);
console.log(test >= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis); 

// 06 - Condition
var limit = 50;
var score = 64;
if (score >= limit) {
    console.log("Ok, good!");
} else {
    console.log("Oh nooo...");
} 
score = 1;

// 07 - Condition II
var password = "azerty";
if (password.length > 5) {
    console.log("The password is secure");
} 

// 08 - Condition III
var limit = 50;
var score = 60;
var password = "azerty";
switch (true) {
    case score >= limit && password.length > 5:
        console.log("Everything is good");
        break;
    case score >= limit || password.length > 5:
        console.log("Something is good");
        break;
    default:
        console.log("Nothing is good");
} 




// BONUS *
var min = 1;
var max = 6;
var random = Math.floor (Math.random() * (max - min + 1) + min);
if (random === 6) {
    console.log("Yes I win!");
} else {
    console.log("So close...");
} 

// BONUS **
var month = "January";
switch (month) {
    case "December":
    case "January":
    case "February":
        console.log("Winter");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall")
}
month = "February";

// si on veut que le mois soit aléatoire 
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthChanged = month[Math.floor(Math.random() * month.length)];
switch (monthChanged) {
    case "December":
    case "January":
    case "February":
        console.log("Winter");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall")
} 

// BONUS ***
var roundedNumber = 3.6;
roundedNumber = 3.3;
roundedNumber = 3.8;
roundedNumber = 12.4;
if ((roundedNumber - Math.floor(roundedNumber)) >= 0.5) {
    console.log(Math.ceil(roundedNumber));
} else {
    console.log(Math.floor(roundedNumber));
} */

var roundedNumber = 3.6;
roundedNumber = roundedNumber.toString();
newRoundedNumber = roundedNumber.substring(roundedNumber.indexOf("."));
newRoundedNumber = 0 + newRoundedNumber;
console.log(newRoundedNumber);
if (newRoundedNumber >= 0.5) {
    console.log(Math.ceil(roundedNumber))
} else {
    console.log(Math.floor(roundedNumber));
}