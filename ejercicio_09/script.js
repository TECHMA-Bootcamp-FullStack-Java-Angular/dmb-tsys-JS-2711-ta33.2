const arrySize = parseInt(prompt("Introduce el tamaño del array:"));

const arrayAleatorio = Array.from({ length: arrySize }, () => Math.floor(Math.random() * 9) + 1);

const mostrarArrayYSuma = array => {
  array.map((valor, indice) => {
    console.log(`Posición ${indice}: valor ${valor}`)
    document.write(`<h5> Posición ${indice}: valor ${valor} </h5>`);
  });

  const suma = array.reduce((acumulador, valor) => acumulador + valor, 0);
  document.write(`<h5> Suma de todos los valores: ${suma} </h5>`);
  console.log(`Suma de todos los valores: ${suma}`);
};


 mostrarArrayYSuma(arrayAleatorio);
