let prompt = require("prompt")
prompt.start()

// Initialisation du rover
let grid = [
    ["N", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
}


// Tourner le rover à gauche
const turnLeft = (rover) => {
    switch ((rover).direction) {
        case "N":
            (rover).direction = "W";
            break;
        case "W":
            (rover).direction = "S";
            break;
        case "S":
            (rover).direction = "E";
            break;
        case "E":
            (rover).direction = "N";
            break;
    }
}


// Tourner le rover à droite
const turnRight = (rover) => {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "N";
            break;
    }
}


const moveForward = (rover) => {
    rover.travelLog.push(`x : ${rover.x}, y : ${rover.y}`);
    console.log(rover.travelLog);
    switch (rover.direction) {
        case "N":
            rover.y--;
            break;
        case "E":
            rover.x++;
            break;
        case "S":
            rover.y++;
            break;
        case "W":
            rover.x--;
            break;
    }
    grid[rover.y][rover.x] = rover.direction;
}


const pilotRover = (str) => {

    if (str === "l") {
        turnLeft(rover);
    } else if (str === "r") {
        turnRight(rover)
    } else if (str === "f") {
        moveForward(rover)
    }
}

/* pilotRover("r");
pilotRover("f");
pilotRover("f");
pilotRover("r");
pilotRover("f");
console.table(grid); */


function play() {
    console.table(grid);
    
    prompt.get({
        name: "input",
        description: "Tapez 'r' pour diriger votre Rover vers la droite, 'l' pour le diriger vers la gauche et 'f' pour le faire avancer"
    }, function(err, res) {
    
        if (err) {
            console.log(err);
        }
    
        if (res.input === "r") {
            pilotRover("r");
            play();
        } else if (res.input === "l") {
            pilotRover("l");
            play();
        } else if(res.input === "f") {
            pilotRover("f");
            play();
        }
    

    }
    )
}
play();
