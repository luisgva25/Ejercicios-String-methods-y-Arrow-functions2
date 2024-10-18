function convertirACamelCase(frase) {
    return frase
      .split(' ')
      .map((palabra, indice) => 
        indice === 0 ? palabra.toLowerCase() : palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
      )
      .join('');
  }
  let frase = "hola mundo en javascript";
  let resultado = convertirACamelCase(frase);
  console.log(resultado); 
