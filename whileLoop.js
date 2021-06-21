/* // 01 - Comptons
let min = 50;
let max = 200;
while (min <= max) {
    min++;
    if (min % 2 === 0) {
        console.log(min);
    }
} 

// 02 - Try again
 let dice = null;
 let count = 0;
 let min = 1;
 let max = 6;
 
 while (dice !== 6) {
    dice = Math.floor(Math.random() * (max - min + 1) + min);
    count++;
 }
 console.log(count); 

 // 03 - Course
let ussainBolt = 0;
let tysonGay = 0;
let stepMin = 0;
let stepMax = 10;
while (ussainBolt <= 100 || tysonGay <= 100) {
   let stepUssainBolt = Math.floor(Math.random() * (stepMax - stepMin + 1) + stepMin);
   let stepTysonGay = Math.floor(Math.random() * (stepMax - stepMin + 1) + stepMin);
   ussainBolt += stepUssainBolt;
   tysonGay += stepTysonGay;
}
if (ussainBolt > tysonGay) {
   return console.log(`Avec ${ussainBolt} mètres, Ussain Bolt a gagné !`);
}
else if (tysonGay > ussainBolt) {
   return console.log(`Avec ${tysonGay} mètres, Tyson Gay a gagné !`);
} else {
    console.log("Égalité parfaite");
}

// 04 - Des boîtes
5
2
5
-8 

// 05 - Encore des boîtes
// Le pièèèèèège !  i n'est pas strictement supérieur à 0. Donc la boucle ne part pas.
console.log(i) // affichera donc 0
console.log(box1) // affichera 7 :) */

