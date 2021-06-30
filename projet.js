let prompt = require("prompt")
prompt.start()

// Initialisation du rover
let grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
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
    y: 0
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
    console.log((rover).direction)
}

// Tourner le rover à droite
const turnRight = (rover) => {
    console.log("Je teste la fonction turnRight", rover)
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
    console.log(rover.direction)
}


const moveForward = (rover) => {

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
}

// Placement inital du rover
let roverPosition = grid[(rover.y)][rover.x] = rover.direction;
if (rover.x === 0 && rover.y === 0) {
    roverPosition;
}

/* console.log(rover);
turnLeft(rover);
moveForward(rover);
moveForward(rover);
turnRight(rover);
moveForward(rover); */

// console.log(rover);

const pilotRover = (str) => {

    if (str === "l") {
        turnLeft(rover);
    } else if (str === "r") {
        turnRight(rover)
    } else if (str === "f") {
        moveForward(rover)
    }
}

pilotRover("r")
console.table(grid);