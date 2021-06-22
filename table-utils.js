
function multiply(num) {
    for (i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}

function addition(num) {
    for (i = 1; i <= 10; i++) {
        console.log(num + i);
    }
}
    
module.exports = {
    multiply,
    addition,
};