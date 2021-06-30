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
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "W":
            (rover).direction = "S";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "S":
            (rover).direction = "E";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "E":
            (rover).direction = "N";
            grid[rover.y][rover.x] = rover.direction;
            break;
    }
}


// Tourner le rover à droite
const turnRight = (rover) => {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "E":
            rover.direction = "S";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "S":
            rover.direction = "W";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "W":
            rover.direction = "N";
            grid[rover.y][rover.x] = rover.direction;
            break;
    }
}


// Faire avancer le Rover
const moveForward = (rover) => {
    rover.travelLog.push(`x : ${rover.x}, y : ${rover.y}`);
    console.log(rover.travelLog);

    switch (rover.direction) {
        case "N":
            if (rover.y === 0) {
                console.log("Attention ! Vous ne pouvez pas sortir de la grille !");
            } else {
                grid[rover.y][rover.x] = " ";
                rover.y--;
            }
            break;
        case "E":
            if (rover.x === 9) {
                console.log("Attention ! Vous ne pouvez pas sortir de la grille !");
            } else {
                grid[rover.y][rover.x] = " ";
                rover.x++;
            }
            break;
        case "S":
            if (rover.y === 9) {
                console.log("Attention ! Vous ne pouvez pas sortir de la grille !")
            } else {
                grid[rover.y][rover.x] = " ";
                rover.y++;
            }
            break;
        case "W":
            if (rover.x === 0) {
                console.log("Attention ! Vous ne pouvez pas sortir de la grille !")
            } else {
                grid[rover.y][rover.x] = " ";
                rover.x--;
            }
            break;
    }
    grid[rover.y][rover.x] = rover.direction;
}


// Faire reculer le Rover
const moveBackward = (rover) => {
    rover.travelLog.push(`x : ${rover.x}, y : ${rover.y}`);
    console.log(rover.travelLog);

    switch (rover.direction) {
        case "N":
            if (rover.y === 9) {
                console.log("Attention ! Vous ne pouvez pas sortir de la grille !");
            } else {
                grid[rover.y][rover.x] = " ";
                rover.y++;
            }
            break;
        case "E":
            if (rover.x === 0) {
                console.log("Attention ! Vous ne pouvez pas sortir de la grille !");
            } else {
                grid[rover.y][rover.x] = " ";
                rover.x--;
            }
            break;
        case "S":
            if (rover.y === 0) {
                console.log("Attention ! Vous ne pouvez pas sortir de la grille !")
            } else {
                grid[rover.y][rover.x] = " ";
                rover.y--;
            }
            break;
        case "W":
            if (rover.x === 9) {
                console.log("Attention ! Vous ne pouvez pas sortir de la grille !")
            } else {
                grid[rover.y][rover.x] = " ";
                rover.x++;
            }
            break;
    }
    grid[rover.y][rover.x] = rover.direction;
}


// Pilotage du Rover
const pilotRover = (str) => {
    if (str !== "l" && str !== "f" && str !== "r" && str !== "b") {
        console.log("Vous n'avez pas saisie de direction valide !!")
    }

    if (str === "l") {
        turnLeft(rover);
    } else if (str === "r") {
        turnRight(rover);
    } else if (str === "f") {
        moveForward(rover);
    } else if (str === "b") {
        moveBackward(rover);
    }
}


// Jouer avec Prompt !
function play() {
    console.table(grid);

    prompt.get({
        name: "input",
        description: "Tapez 'r' pour diriger votre Rover vers la droite, 'l' pour le diriger vers la gauche et 'f' pour le faire avancer"
    }, function(err, res) {

        if (res.input === "r") {
            pilotRover("r");
            play();
        } else if (res.input === "l") {
            pilotRover("l");
            play();
        } else if(res.input === "f") {
            pilotRover("f");
            play();
        } else if(res.input === "b") {
            pilotRover("b");
            play();
        } else if (res.input !== "l" && res.input !== "f" && res.input !== "r" && res.input !== "b") {
            console.log("Vous n'avez pas saisie de direction valide !!")
            play();
        }
    }
    )
}
play();
