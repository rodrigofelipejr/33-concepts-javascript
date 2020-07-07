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

## 4 - Implícito, Explicito, Nominal, Estruturando e Chamada de métodos (Implicit, Explicit, Nominal, Structuring and Duck Typing)

A coerção ocorre quanto o javascript tenta converter o tipo de uma valor para um tipo esperado, essa conversão pode ocorrer para ```string```, ```number``` ou ```boolean```.

```javascript
console.log('5'- 5) // 0
console.log('5'+ 5) // "55"
console.log(true + 1) // 2
console.log(true + true) // 2
console.log([] + {}) // [Object Object]
console.log([] + []) // ""

// IMPLÍCITO
console.log(+'5') // 5 > number
console.log('5' + '') // "5" > string
console.log(123 && 'oi') // "oi" > string
console.log(null || true) // true boolean

// EXPLICITO (mais legível)
console.log(Number('50')) // 50 > number
console.log(String('50')) // "50" > string

// DUCK TYPING

```

## 5 - == vs === vs typeof

### `==` (sinal de dois iguais)

- utiliza coerção por tráz
- 1º se ambos são do mesmo tipo
- null == undefined, se for, ele retorna true
- number == string, se for, ele converte string em number
- boolean == number se for, ele converte boolean em number
- boolean == string, se for, ele converte a string em boolean
- object == primitivo, se for, ele converte o object em string

### `===` (sinal de três iguais)

- sem coerção
- é levado em consideração os tipos e o valor