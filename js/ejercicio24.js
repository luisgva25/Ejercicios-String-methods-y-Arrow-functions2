function soloNumeros(cadena) {
    return /^[0-9]+$/.test(cadena);
  }
  let cadena = "12345";
  let resultado = soloNumeros(cadena);
  console.log(resultado); 
  