// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire. check
// Stampiamo poi gli ultimi 5 elementi dell'Array check
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array

function generateArray() {
    
    let randomNums = [];
    let arrayLength = parseInt(prompt('Quanti elementi contiene?'));

    for (i = 0; i < arrayLength; i++) {
        randomNums.getRndInteger(1, 100);
        randomNums.push(random);
    }

    return randomNums;
};

let newArray = randomNums.slice(-5);
console.log(randomNums);
console.log(newArray);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};   