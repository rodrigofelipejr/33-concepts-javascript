/* 
  - Não possuem propriedades 
  - São 7 no total
*/

console.log(typeof true)
console.log(typeof Boolean(true))
console.log(typeof new Boolean(true)) /* construtores de tipos primitivos */
console.log(typeof (new Boolean(true)).valueOf())

console.log(typeof 'Rodrigo')
console.log(typeof 'Rodrigo'.length)
console.log(typeof 28)

const doze = new Number(12)
const quinze = doze + 3

console.log(quinze)

console.log(typeof doze)
console.log(typeof quinze)
