/* // O1 - File System
var fs = require("fs");

fs.readFile("jour07.txt", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Votre fichier contient : " + data.toString());
}) */