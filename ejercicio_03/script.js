function esNumeroPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}
const numeroUsuario = parseInt(prompt("Introduce un número:"));


console.log(`El número ${numeroUsuario} ${esNumeroPrimo(numeroUsuario) ? 'es' : 'no es'} primo.`);
document.write(`<h5> El número ${numeroUsuario} ${esNumeroPrimo(numeroUsuario) ? 'es' : 'no es'} primo.</h5>`);