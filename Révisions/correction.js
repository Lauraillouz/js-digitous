/* // Nested Loop
let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let count = 0;
for (let i = 0; i < words.length; i++) {
    //letters.push(words[i].split(""));
    let letters = words[i];
    //console.log(letters);
    for (let j = 0; j < letters.length; j++) {
        if (letters[j] === "o") {
            count++;
        }
    }
}
console.log(count); 

// Alphabet
function sortLetters (string) {
    console.log(string.split("").sort().join(""));
}
sortLetters("konexio"); */

// XOXO
function countEach (string) {
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < string.length; i++) {
        /* if (string[i] === "x") {
            countX++;
        } else if (string[i] === "o") {
            countO++;
        } */
        switch (string[i]) {
            case "x": 
                countX++;
                break;
            case "o":
                countO++;
                break;
        }
    }
    return countX === countO;
}

console.log(countEach("xoxxxoxox"));