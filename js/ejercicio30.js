function contarFrecuencia(cadena) {
    let frecuencia = {};
    for (let letra of cadena) {
        frecuencia[letra] = (frecuencia[letra] || 0) + 1;
    }
    return frecuencia;
}

console.log(contarFrecuencia("abbccc"));
