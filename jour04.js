/* // 01 - Object
let cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}
console.log(cat);
console.log(cat.age);
if (cat.isCute = true) {
    console.log("So cute!");
}

// 02 - Combine
let cat2 = {
    name: "Robert",
    age: 32,
    isCute: false,
}
let cats = [cat, cat2];
console.log(cat.age);
console.log(cat["age"]);
console.log(cat2.isCute);
console.log(cat2["isCute"]); 

// 03 - Even
function checkIfEven (num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
var checkedIfEven;
checkedIfEven = checkIfEven(133);
console.log(checkedIfEven); 

// O4 - Comapre
function compare(num1, num2) {
    if (num1 > num2) {
        return `${num1} is bigger`;
    }
    else if (num2 > num1) {
        return `${num2} is bigger`;
    } else {
        return "both are the same";
    }
}
var compared;
compared = compare(98, 2);
console.log(compared); 

// 05 - Add Up
function addUp (num) {
    let i = 0;
    let result = 0;
    while (i < num) {
        i++;
        result += i;
    }
    return result;
}
let addedUp;
addedUp = addUp(12);
console.log(addedUp); 

// 06 - Time
function format(num) {
    let hours = Math.floor(num / 3600);
    num %= 3600;
    let minutes = Math.floor(num / 60);
    let seconds = num % 60;
    let time;
    return time = `${hours}:${minutes}:${seconds}`;
}
let formatedTime;
formatedTime = format(3700);
console.log(formatedTime); 




// BONUS *
function generatePassword(num) {
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password="";
    for (let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * alphabet.length);
        password += alphabet.charAt(random);
    }
    return password;
}

let generatedPassword;
generatedPassword = generatePassword(6);
console.log(generatedPassword); */


// BONUS **
function launchDice (numberOfDice) {
    let numberDiceMin = 1;
    let numberDiceMax = 6;
    let numberDiceRandom = Math.floor(Math.random() * (numberDiceMax - numberDiceMin + 1) + numberDiceMin);
    let resultDice = numberDiceRandom * numberOfDice;
    return resultDice;
}
let launchedDice;
launchedDice = launchDice(5);

let joueur1 = launchDice(5);
let joueur2 = launchDice(5);
if (joueur1 > joueur2) {
    console.log(`Avec ${joueur1}, c'est le joueur 1 qui gagne la partie !`)
}
else if (joueur2 > joueur1) {
    console.log(`Avec ${joueur2}, c'est le joueur 2 qui gagne la partie !`)
} else {
    console.log("Incroyable, égalité parfaite !")
}
