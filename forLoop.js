/* // 01 - Somme des carrés
let result = 0;
for (let i = 5; i <=10 ; i++) {
    result += i*i;
}
console.log(result); 

// 02 - Comptons
let result = 0;
for (let i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        result += 1 ;
    }
}
console.log(result); 

// 03 - Chanceux
let result = 0;
for (let i = 1; i <= 20; i++) {
    let min = 1;
    let max = 6;
    let random =  Math.floor(Math.random() * (max - min + 1) + min);
    if (random >= 5) {
        result += random;
    }
}
console.log(result); */

// 04 - Des boîtes
console.log(box1) 
/* affichera :
5
10
*/
console.log(box2) 
/* affichera :
10
18
*/
console.log(i) 
/* affichera :
10
13
*/

