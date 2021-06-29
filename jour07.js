const { random } = require("colors");
var prompt = require("prompt");

/* // O1 - File System
var fs = require("fs");

fs.readFile("jour07.txt", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Votre fichier contient : " + data.toString());
}) */

/* // 02 - Map Double
let array = [1, 2, 3, 4, 5];
let double = array.map(function(num) {
    return num * 2;
});
console.log(double); */

/*  // 03 - Map Names
let longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]
let shortNames = longNames.map(function(person) {
    return {name: `${person.firstName} ${person.lastName}`};
})
console.log(shortNames);  */

/* // 04 Filter Numbers
let array = [1, "toto", 34, "javascript", 8];
let numbers = array.filter(function (num) {
    if (typeof num === "number")
    return num;
});
console.log(numbers); */

/* // 05 - Filter Even
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let even = numbers.filter(evenNum => evenNum % 2 === 0);
console.log(even); */

/* // 06 - Cakes
let cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
]
let chocolateCakes = cakes.filter(chocolate => chocolate.flavor === "chocolate");
// console.log(chocolateCakes);
let soldOutCakes = chocolateCakes.map(function (soldOut) {
    soldOut.status = "sold out!";
    return soldOut;
});
console.log(soldOutCakes); */




// BONUS *
var words = ["baryton", "cerf", "djembe", "cymbale", "zozoter"];
var mysteryWord = words[Math.floor(Math.random() * words.length)];
mysteryWord = mysteryWord.split("");
var tries = 10;
var guess = [];
for (let i = 0; i < mysteryWord.length; i++) {
    guess[i] = "_";
} 
guess[0] = mysteryWord[0];


function pendu() {
    if (tries === 10) {
        console.log(guess.join(""));
    }
    if (guess.join("") == mysteryWord.join("")) {
        return console.log(`Bravo !! Le mot était bien ${mysteryWord.join("")}`);
    } else if (tries === 0) {
        return console.log(`Vous avez perdu ! Le mot était ${mysteryWord.join("")}`);
    }
    prompt.get({
        name: "letter",
        description: "Jouons au pendu"
    }, function (err, res) {
        if (err) {
            return err;
        }

        for (let i = 0; i < mysteryWord.length; i++) {
            if (res.letter === mysteryWord[i]) {
                guess[i] = mysteryWord[i];
            }
        }
        tries--;
        if (mysteryWord.indexOf(res.letter) === -1) {
            console.log(`Oups, il vous reste ${tries} chances !`);
        }

        console.log(guess.join(""));
        pendu();

    })
}
pendu();
