const calcularAreaCuadrado = (lado) => lado * lado;
const calcularAreaCirculo = (radio) => Math.PI * Math.pow(radio, 2);
const calcularAreaTriangulo = (base, altura) => (base * altura) / 2;

const result = [
"El area del Cuadrado es : "  + calcularAreaCuadrado(prompt("Dime el lado de cuadrado ▢")),
"El area del Circulo es : "   + calcularAreaCirculo(prompt("Dime el radio de circulo ○")),
"El area del Triangulo es : " + calcularAreaTriangulo(prompt("Dime la base del triangulo △"),prompt("Y ahora la altura del triangulo △"))
].forEach(rest => {
  console.log(rest);
  document.write(`<h5> ${rest} </h5>`);
})
