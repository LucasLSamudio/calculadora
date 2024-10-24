const division = require('./modules/division');
const producto = require('./modules/producto');
const sumar = require('./modules/sumar');
const restar = require('./modules/restar');
const potencia = require('./modules/potencia');
const raiz = require('./modules/raiz');

let n1 = 20;
let n2 = 5;
let b = 10;
let p = 2;
let raizCuadrada = 25;

console.log("La suma de los numeros es:",sumar(n1,n2));
console.log("La restar de los numeros es:",restar(n1,n2)); 
console.log("La division de los numeros es:",division(n1,n2));
console.log("El producto de los numeros es:",producto(n1,n2));
console.log("La potencia de los numeros es:",potencia(b, p));
console.log("La raiz del numero es:",raiz(raizCuadrada));