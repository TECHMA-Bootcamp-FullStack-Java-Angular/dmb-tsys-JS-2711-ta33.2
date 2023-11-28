// funcion que filtra los numeros que contine el digito
const filtrarPorDigito = (array, digito) =>
  array.filter(numero => numero % 10 === digito);

const arraySize = parseInt(prompt("Introduce el tamaño del array:"));

let digit = parseInt(prompt("Introduce el dígito de interés (0-9):"));

while (isNaN(digit) || digit < 0 || digit > 9) {
  digit = parseInt(prompt("Por favor, introduce un dígito válido (0-9):"));
}

const miArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 300) + 1);
const numerosFiltrados = filtrarPorDigito(miArray, digit);

// Motramos el resulado por consola
console.log(`Array original: ${miArray}`);
console.log(`Números que terminan en ${digit}: ${numerosFiltrados}`);
