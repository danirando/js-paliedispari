// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let sceltaUtente = prompt("Scegli tra pari o dispari");

// validazione input scelta pari o dispari

if (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
  alert(
    "Scelta non valida. Ricarica la pagina e inserisci 'pari' o 'dispari'."
  );
  throw new Error("Input non valido");
}
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// validazione numero se è un numero e se è compreso tra 1 e 5

if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
  alert(
    "Numero non valido. Ricarica la pagina e inserisci un numero tra 1 e 5."
  );
  throw new Error("Numero fuori dal range");
}
let sommaPari = false;

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandomPc() {
  return Math.floor(Math.random() * 5 + 1);
}
let numeroPc = numeroRandomPc();

function sommaPariODispari() {
  // Sommiamo i due numeri
  let somma = numeroUtente + numeroPc;
  // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  if (somma % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
sommaPariODispari();

let pari = sommaPariODispari();
// Dichiariamo chi ha vinto.

if (sceltaUtente === "pari" && pari === true) {
  alert("vince utente");
} else if (sceltaUtente === "pari" && pari === false) {
  alert("vince computer");
} else if (sceltaUtente === "dispari" && pari === false) {
  alert("vince utente");
} else if (sceltaUtente === "dispari" && pari === true) {
  alert("vince computer");
} else {
  alert("input non valido");
}

console.log("Scelta Utente: ", sceltaUtente);
console.log("Numero Utente: ", numeroUtente);
console.log("Numero pc: ", numeroPc);
console.log("Somma pari: ", pari);
