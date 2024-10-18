let texto = "javascript";
console.log(texto);
const contarOcurrenciasLetra = (texto, letra) => {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }
    return contador;
};

console.log(contarOcurrenciasLetra(texto,"a")); 
