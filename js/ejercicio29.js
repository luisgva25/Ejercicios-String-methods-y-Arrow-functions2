function eliminarRepetidos(cadena) {
    return cadena.split('').filter((letra, indice, arreglo) => letra !== arreglo[indice - 1]).join('');
}

console.log(eliminarRepetidos("aabbccdde")); 
