function Palindromo(palabra) {
    let palabraLimpia = palabra.toLowerCase();
    let palabraInvertida = palabraLimpia.split("").reverse().join("");
    return palabraLimpia === palabraInvertida;
}
console.log(Palindromo("ANTONIO")); 
console.log(Palindromo("PABLO"));
console.log(Palindromo("ANA")); 
console.log(Palindromo("BOB")); 
