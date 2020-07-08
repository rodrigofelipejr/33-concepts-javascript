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

## 6 - Escopo da Função, Escopo do Bloco e Escopo Léxico (Function Scope, Block Scope and Lexical Scope)

- var, let e const

```javascript
var nome = 'Rodrigo' // escopo global

function teste(){
    var sobreNome = 'Plácido' // escopo local (da função)
    if(sobrenome === 'Sobrenome'){
        const valor = 10 // disponível somente dentro deste bloco
    }

    console.log(valor) // error - valor is not defined
}

// let e const respeitam o escopo de bloco {}
```

### Escopo Léxico

Em um cenário onde temos funções aninhadas (funções dentro de funções), os recursos e variáveis disponíveis nas funções mais acima, estão disponíveis para as funções que se encontram mais a dentro.

### Escopo de Função

O que é criado dentro de uma função somente está disponível dentro dela

### Escopo de Bloco

O que é criado dentro de um bloco somente está disponível dentro dele {}

## 7 - Expression vs Statement

Expression é um trecho de código que retorna apenas um valor único.

```javascript
console.log(1 + 1) // expression
console.log(Math.randon() + 5) // expression
function expressao() {  // expression
    return 1+1
}
```

Statement são trechos de código que performão uma ação, que fazem algo.

```javascript
var variavel = 20

if(true){
    variavel = 30
}
```

## IIFE, Modules e Namespaces

### IIFE e Namespaces

Expressão de função invocada imediatamente, (immediately invoked function expression, ou IIFE).
É executada automaticamente quando lida, quando o interpretador passa por ela.

Formas de declarar uma IFEE:

```javascript
!function(){  // anônima
    alert('olá mundo')
}()

(function(){ // anônima
    alert('Olá')
}())

!function teste(){ // nomeada, não anônima
    alert('olá mundo')
}()

/* o "!" indica que deve ser tratada com uma expressão e não uma function */
```

O namespace organiza o código em pequenos grupos, impedindo que haja a colizão com outros métodos de outras libs.

```javascript
const dados = (function(){ // dados é namespace
var contador = 0 // private - escopo de bloco
return{
    incrementar: fucntion(){ // método
        contador += 1
        return contador
    }
}
}()) // executada imediatamente
```

## Modules

Os modules promovem a reutilização de código, possibilitando a trocar funcionalidades entre arquivos destintos (export/import).

Facilita a manutenção, além de permitir um maior encapsulamento e abstração do código.

```javascript
// script 1
const valor = 5

const olaMundo = function(){
    alert('Olá mundo!')
}

const multiplica = function(num){
    alert(num*5)
}

// export {olaMundo, multiplica}
export default olaMundo // vai chegar lá como uma função anônima

// script 2
import {olaMundo as helloWorld, multiplica} from './script1.js'
helloWorld()
multiplica(2);

// script 2 
import * as utilitarios from './script1.js'
utilitarios.multiplica(4)

// script 2 > se foi exportado com default podemos dar qualquer nome
import utilitarios from './script1.js'
utilitarios() // está executando o olaMundo exportado como default no script1
```

## Message Queue e Event Loop - Fila de eventos e Pilha de eventos

```javascript
function loopEventos(){
    console.log('a')
    for(let i = 1; i <= 4; i++){
        console.log('b - ' + i)
    }
    console.log('c')
    setTimeout(() => {
    console.log('d')
    }, 0)
    console.log('e')
}

loopEventos()

/*
    saída: 
    "a"
    "b - 1"
    "b - 2"
    "b - 3"
    "c"
    "e" ??
    "d" << callback
*/
```