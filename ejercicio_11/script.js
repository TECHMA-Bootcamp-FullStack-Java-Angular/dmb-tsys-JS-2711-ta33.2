// Solicitar al usuario el tamaño de los arrays
const arraySize = parseInt(prompt("Introduce el tamaño de los arrays:"));

// Crear dos arrays y rellenarlos con números aleatorios
const array1 = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 10))
const array2 = [...array1]; 

// Reasignar valores aleatorios al segundo array
array2.forEach((_valor, indice) => array2[indice] = Math.floor(Math.random() * 10));

// Método para multiplicar los elementos de dos arrays
const multiplicarArrays = (array1, array2) => 
  array1.map((valor, indice) => valor * array2[indice]);

// Se crea un tercer array con la multiplicación de los dos primeros
const arrayMultiplicado = multiplicarArrays(array1, array2);

// Mostrar el contenido de cada array
console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array Multiplicado:", arrayMultiplicado);

document.write(`<h6>Array 1: ${array1}</h6>`);
document.write(`<h6>Array 2: ${array2}</h6>`);
document.write(`<h6>Array Multiplicado:  ${arrayMultiplicado}</h6>`);