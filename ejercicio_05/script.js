const decimalABinario = numero => {
  const convertirRecursivo = num => {
    if (num === 0) {
      return "";
    } else {
      const resto = num % 2;
      const cociente = Math.floor(num / 2);
      return convertirRecursivo(cociente) + resto;
    }
  }; 

  if (isNaN(numero) || numero < 0) {
    return "Error: Ingresa un número decimal no negativo.";
  }

  return numero === 0 ? "0" : convertirRecursivo(numero);
};

const numeroDecimal = parseInt(prompt("Introduce un número decimal:"));
const resultadoBinario = decimalABinario(numeroDecimal);

console.log(`El número binario correspondiente a ${numeroDecimal} es: ${resultadoBinario}`);
document.write(`<h5> El número binario correspondiente a ${numeroDecimal} es: ${resultadoBinario} </h5>`);