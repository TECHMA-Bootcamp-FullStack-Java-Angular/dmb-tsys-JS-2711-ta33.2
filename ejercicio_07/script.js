const convertirMoneda = (cantidadEuros, monedaDestino) => {
  if (isNaN(cantidadEuros) || cantidadEuros <= 0) {
    console.log("Error: Ingresa una cantidad válida de euros.");
    return;
  }

  const tasasDeCambio = {
    dolares: { tasa: 1.12, simbolo: "$" },
    yenes: { tasa: 123.61, simbolo: "¥" },
    libras: { tasa: 0.85, simbolo: "£" },
  };

  const monedaLowerCase = monedaDestino.toLowerCase();

  if (!tasasDeCambio.hasOwnProperty(monedaLowerCase)) {
    console.log("Error: Moneda no válida. Las opciones son dólares, yenes o libras.");
    return;
  }

  const { tasa, simbolo } = tasasDeCambio[monedaLowerCase];
  const cantidadConvertida = (cantidadEuros * tasa).toFixed(2);
  console.log(`La cantidad de ${cantidadEuros} euros equivale a ${cantidadConvertida} ${simbolo}`);
  document.write(`<h5> La cantidad de ${cantidadEuros} euros equivale a ${cantidadConvertida} ${simbolo} </h5>`);
};

const cantidadEuros = parseFloat(prompt("Introduce la cantidad de euros:"));
const monedaDestino = prompt("Introduce la moneda a la que deseas convertir (dólares, yenes o libras):");

convertirMoneda(cantidadEuros, monedaDestino);
