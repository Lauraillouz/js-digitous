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

/* // 03 - Map Names
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
let shortNames = longNames.map(function(name) {
    return name.firstName + " " + name.lastName;
})
console.log(shortNames); */

/* // 04 Filter Numbers
let array = [1, "toto", 34, "javascript", 8];
let numbers = array.filter(function (num) {
    if (typeof num === "number")
    return num;
});
console.log(numbers); */

