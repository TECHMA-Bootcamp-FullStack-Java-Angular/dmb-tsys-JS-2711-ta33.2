const factorial = (n) => (n === 0) ? 1 : (n * factorial(n - 1))
const number = prompt("Escribe le numero")

console.log(`El factoria de ${number} es ${factorial(number)}`);
document.write(`<h5> El factoria de ${number} es ${factorial(number)} </h5>`);
