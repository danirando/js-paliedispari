// Palindroma

// Chiedere all’utente di inserire una parola

let palindrome = true;

// Creare una funzione per capire se la parola inserita è palindroma

function isPalindrome() {
  // chiedo una parola all'user
  const word = prompt("Inserisci una parola");
  // di default è palindroma
  let palindrome = true;
  // ciclo ripetuto tanto quanto la lunghezza della parola fratto due per spezzare la parola in due meta che devono essere uguali
  for (let i = 0; i < word.length / 2; i++) {
    // confronto ogni lettera della parola per ogni ultima lettera andando a ritroso
    if (word[i] !== word[word.length - 1 - i]) {
      // se sono diverse non è un palidromo
      palindrome = false;
      return alert("La parola non è palindroma");
    }
  }
  //  se sono uguali si esce dal ciclo for, il valore palindrome è di default true
  if (palindrome) {
    alert("La parola è palindroma");
  }
}

isPalindrome();
