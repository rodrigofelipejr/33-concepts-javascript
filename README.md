# 33 Concepts Every JavaScript Developer Should Know

## 1 - Pilha de chamadas (CallStack)

Conceito de LIFO (last in first out).

```javascript
function function1(){
    function2()
    console.log('Performed function 1')
}

function function1(){
    function3()
    console.log('Performed function 2')
}

function function3(){
    console.log('Performed function')
}

function1()
```

Saída:

```javascript
"Performed function 3"
"Performed function 2"
"Performed function 1"
```

## 2 - Tipos Primitivos (Primitive Types)

São eles: Boolean, String, Number, Null, Undefined, Symbol.

Não possuem propriedades, mais os construtores dos tipos primitivos (boolean, string e o number), retorna um objeto com todos os métodos para manipulação.

```javascript
console.log(typeof true) // "boolean"
console.log(typeof Boolean(true)) // "boolean"
console.log(typeof new Boolean(true)) // "object"
console.log(typeof (new Boolean(true)).valueOf()) // "boolean"
console.log(typeof 'Rodrigo') // "string"
console.log(typeof 28) // "number"

console.log('Rodrigo'.length) // 7

var doze = new Number(12) // object
var quinze = doze + 3

console.log(quinze) // 15
console.log(typeof doze) // "object"
console.log(typeof quinze) // "number"
```

## 3 - Tipo de Valores e de referência (Value Types and Reference Types)

Os tipos primitivos são de valor, já um array, object ou uma function são de referência.

```javascript
var x = 10
var y = x /* y recebeu valor */

x = 20
console.log(x, y) // x = 20 y = 10

var a = { valor: 10 }
var b = a /* a recebeu uma referência */

a.valor = 20

console.log(a) // { valor: 20 }
console.log(a) // { valor: 20 }
```