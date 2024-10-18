function capitalizarPalabras(cadena) {
    return cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
}
console.log(capitalizarPalabras("javascript es divertido")); 
