function aSnakeCase(cadena) {
    return cadena.toLowerCase().replace(/\s+/g, '_');
}

console.log(aSnakeCase("Hola Mundo"));
