function palabraMasLarga(cadena) {
    let palabras = cadena.split(' ');
    let palabraLarga = palabras.reduce((a, b) => a.length > b.length ? a : b);
    return palabraLarga;
}

console.log(palabraMasLarga("Aprender JavaScript es emocionante pedroooooooooooooooooo"));
