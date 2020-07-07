/*
  Tipos de valor
  - Tipos primitivos

  Tipo por referência
  - Array, function e objects
*/

var x = 10
var y = x

x = 20

console.log(`x ${x}`)
console.log(`y ${y}`)

/* ref do obj na memória */
/* ponteiro com endereço na memória onde existe o obj */
var a = { valor: 10 }
var b = a

a.valor = 20

console.log(`a ${JSON.stringify(a)}`)
console.log(`b ${JSON.stringify(b)}`)