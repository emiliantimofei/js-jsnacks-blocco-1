// Descrizione:
// Abbiamo un frigorifero pieno di frutta:
// 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
// Fasi
// 1. creare l'array con la frutta del frigorifero check
// 2. aggiungere la pesca all'array della frutta check
// 3. verificare se nell'array di frutta c'è il cocomero: check
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
// Suggerimenti/Indicazioni:
// Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.

let frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
let newFruit = 'pesca';

frigo.push(newFruit);
let fleg = false;

for (i = 0; i < frigo.length; i++) {

    if (frigo[i] === 'cocomero') {
        fleg = true;
    }
};

if (flag) {
    console.log('Trovato! Devo solo preparare il cocktail.');
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!');
};