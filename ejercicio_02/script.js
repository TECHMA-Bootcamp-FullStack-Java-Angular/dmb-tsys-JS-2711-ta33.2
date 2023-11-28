const generarNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const generarNumerosAleatorios = (cantidad, min, max) =>  Array.from({ length: cantidad }, () => generarNumeroAleatorio(min, max));

// Pedimos al usuario los valores para el rango y la cantidad de números
const minimo = parseInt(prompt('Introduce el valor mínimo del rango:'));
const maximo = parseInt(prompt('Introduce el valor máximo del rango:'));
const cantidadNumeros = parseInt(prompt('Introduce la cantidad de números a generar:'));

// Generamos los números aleatorios y los mostramos por consola y por panatalla
generarNumerosAleatorios(cantidadNumeros, minimo, maximo).forEach((rest) => {
  console.log('Número generado: ', rest)
  document.write(`<h5>Número generado: ${rest} </h5>`)
});
