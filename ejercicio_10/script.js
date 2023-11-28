// Método para comprobar si un número es primo
const esPrimo = num => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Método para generar un array de números primos aleatorios
const generarArrayPrimosAleatorios = (tamaño, min, max) => {
  const array = [];
  while (array.length < tamaño) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    if (esPrimo(numeroAleatorio)) {
      array.push(numeroAleatorio);
    }
  }
  return array;
};



// Solicitar al usuario los datos
const tamañoArray = parseInt(prompt("Introduce el tamaño del array:"));
const minimo = parseInt(prompt("Introduce el valor mínimo para los primos:"));
const maximo = parseInt(prompt("Introduce el valor máximo para los primos:"));

// Generar el array de números primos aleatorios
const arrayPrimos = generarArrayPrimosAleatorios(tamañoArray, minimo, maximo)


// Mostramos resulatos
arrayPrimos.forEach((e,i)=> {
  document.write(`<h5> Índice ${i+1}: Valor ${[e]} </h5>`);
  console.log(`Índice ${i+1}: Valor ${[e]}`);
 });

document.write(`<h5> El mayor número en el array es: ${Math.max(...arrayPrimos)} </h5>`);
console.log("El mayor número en el array es:", Math.max(...arrayPrimos));
