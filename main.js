const division = require('./modules/division');
const producto = require('./modules/prodcuto');
const sumar = require('./modules/sumar');
const restar = require('./modules/restar');
const potencia = require('./modules/potencia');
const raiz = require('./modules/raiz');

let n1 = 20;
let n2 = 5;
let b = 10;
let p = 2;
let raizCuadrada = 25;

console.log(division(n1,n2));
console.log(producto(n1,n2));
console.log(sumar(n1,n2));
console.log(restar(n1,n2));
console.log(potencia(b, p));
console.log(raiz(raizCuadrada));