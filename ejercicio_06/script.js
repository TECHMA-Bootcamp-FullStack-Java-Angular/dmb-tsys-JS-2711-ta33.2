const contarCifras = numero => {
  if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    return "Error: Ingresa un número entero positivo.";
  }
  return String(numero).length  ;
};

const numeroEntero = parseInt(prompt("Introduce un número entero positivo:"));
const resultadoCifras = contarCifras(numeroEntero);

console.log(`El número ${numeroEntero} tiene ${resultadoCifras} cifra(s).`);
document.write(`<h5> El número ${numeroEntero} tiene ${resultadoCifras} cifra(s). </h5>`);
