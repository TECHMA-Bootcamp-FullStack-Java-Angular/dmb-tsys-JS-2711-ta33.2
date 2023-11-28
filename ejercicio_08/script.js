[...new Array(10)].map((e, i) => e = parseFloat(prompt(`Introduce el valor para la posición ${i+1}:`)))
  .forEach((e, i) => {
    console.log(`Índice ${i+1}: Valor ${[e]}`);
    document.write(`<h5> Índice ${i+1}: Valor ${[e]} </h5>`);
});

