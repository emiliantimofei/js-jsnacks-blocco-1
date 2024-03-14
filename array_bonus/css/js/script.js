// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

let array1 = generateArray();
let array2 = generateArray();

console.log(array1);
console.log(array2);

while (array1.length !== array2.length) {

    let num = getRndInteger(1, 100);

    if (array2.length < array1.length) {
        array2.push(num);
    } else {
        array1.push(num);
    }
};

function generateArray() {
    
    let randomNums = [];
    let arrayLength = parseInt(prompt('Quanti elementi contiene?'));

    for (i = 0; i < arrayLength; i++) {
        randomNums.getRndInteger(1, 100);
        randomNums.push(random);
    }

    return randomNums;
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}; 