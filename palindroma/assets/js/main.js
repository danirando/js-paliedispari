// Palidroma

// Chiedere all’utente di inserire una parola

let palindrome = true;

// Creare una funzione per capire se la parola inserita è palindroma

function isPalindrome() {
  const word = prompt("Inserisci una parola");
  let palindrome = true;

  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      palindrome = false;
      return alert("La parola non è palindroma");
    }
  }
  if (palindrome) {
    alert("La parola è palindroma");
  }
}

isPalindrome();

// function controllaPalindroma() {
//   const parola = prompt("Inserisci una parola:")
//     .toLowerCase()
//     .replace(/\s/g, "");
//   let èPalindroma = true;

//   for (let i = 0; i < parola.length / 2; i++) {
//     if (parola[i] !== parola[parola.length - 1 - i]) {
//       èPalindroma = false;
//       break;
//     }
//   }

//   if (èPalindroma) {
//     alert("La parola è palindroma!");
//   } else {
//     alert("La parola NON è palindroma.");
//   }
// }

// controllaPalindroma();
