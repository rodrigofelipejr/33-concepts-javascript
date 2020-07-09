# 33 Concepts Every JavaScript Developer Should Know

## 1 - Pilha de chamadas (Call stack)

A pilha de chamadas (call stack) é um mecanismo do interpretador de uma linguagem que organiza o funcionamento do script quando são chamadas muitas funções, qual função está sendo executada no momento, e quais serão chamadas dentro de alguma função, etc.

 - Quando o script chama a função, ela é adicionada à pilha de chamadas, e então é iniciado o carregamento da função.

 - Qualquer função chamada por essa função será adicionada à pilha de chamadas uma acima da outra.
 
 - Quando a função termina a execução, o interpretador retira a função da pilha e continua a execução do programa de onde parou.
 
 - Caso a pilha ocupar mais espaço do que foi separado a ela, será exibido um erro "stack overflow" (estouro de pilha).

> Conceito de LIFO (last in first out).

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

Em resumo, um primitivo (valor primitivo, tipo de dados primitivo) é um dado que não é representado através de um Objeto e, por consequência, não possui métodos.

No JavaScript, existem 6 tipos primitivos:

String
Number
Boolean
Null
undefined
Symbol (novo no ECMAScript 6)

Todos os primitivos são imutáveis (não podem ter o seu valor modificado).

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

No JavaScript, uma variável pode armazenar dois tipos de valores: primitivo e referência.

Quando você atribui um valor a uma variável, o mecanismo JavaScript determinará se o valor é primitivo ou de referência.

Se o valor for um valor primitivo, ao acessar a variável, você manipula o valor real armazenado nessa variável. Em outras palavras, a variável que armazena um valor primitivo é acessada por valor .

Ao contrário de um valor primitivo, quando você manipula um objeto, trabalha na referência desse objeto, e não no objeto real. Significa que uma variável que armazena um objeto é acessada por referência .

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

Coerção de tipo é a conversão automática ou implícita de valores de um tipo de dados para outro (como seqüências de caracteres em números). A conversão de tipos é semelhante à coerção de tipos porque ambos convertem valores de um tipo de dados para outro com uma diferença-chave - a coerção de tipos é implícita, enquanto a conversão de tipos pode ser implícita ou explícita.

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

// EXPLÍCITO (mais legível)
console.log(Number('50')) // 50 > number
console.log(String('50')) // "50" > string
```

## 5 - == vs === vs typeof

O JavaScript possui comparações estritas e conversão de tipos. Uma comparação estrita `(===)` somente é verdade se os operandos forem do mesmo tipo e de conteúdo correspondente. 

A comparação abstrata mais comumente utilizada `(==)` converte os operandos no mesmo tipo antes da comparação. 

Para comparações abstratas relacionais `(<=)`, os operandos são primeiro convertidos em primitivos, depois para o mesmo tipo, depois comparados.

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

Quando você executa um script, o mecanismo JavaScript cria um contexto de execução global.

As variáveis ​​que você declara fora das funções também são atribuidas ao contexto de execução global , fazendo parte do escopo global (conhecidos como variáveis ​​globais).

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

## 7 - Expressions vs Statement

Uma expressão é qualquer unidade de código válida que resolva para um valor.

Toda expressão sintaticamente válida é resolvida com algum valor, mas conceitualmente, existem dois tipos de expressões: com efeitos colaterais (por exemplo: aqueles que atribuem valor a uma variável) e aqueles que, em certo sentido, avaliam e, portanto, resolvem um valor.

A expressão `x = 7` é um exemplo do primeiro tipo. Esta expressão usa o operador = para atribuir o valor sete à variável `x`. A própria expressão é avaliada em sete.

O código `3 + 4` é um exemplo do segundo tipo de expressão. Essa expressão usa o operador + para adicionar três e quatro juntos sem atribuir o resultado, sete a uma variável.

```javascript
console.log(1 + 1) // expression
console.log(Math.randon() + 5) // expression
function expressao() {  // expression
    return 1 + 1
}
```

Statement são trechos de código que performão uma ação, que fazem algo.

Uma declaração executa uma ação, loops e if são exemplos de declarações. Onde o JavaScript espera uma declaração, você também pode escrever uma expressão. O inverso não se aplica: você não pode escrever uma declaração em que o JavaScript espera uma expressão. 

Por exemplo, uma instrução if não pode se tornar o argumento de uma função.

```javascript
var variavel = 20 

if(true){
    variavel = 30 
}
```

## IIFE, Modules e Namespaces

### IIFE

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
```
> O "!" indica que deve ser tratada com uma expressão e não uma function

### Namespaces

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

#### script1.js

```javascript
const valor = 5

const olaMundo = function(){
    alert('Olá mundo!')
}

const multiplica = function(num){
    alert(num*5)
}

// export {olaMundo, multiplica}
export default olaMundo // vai chegar lá como uma função anônima
```

#### script2.js

```javascript
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
```

Saída:

```javascript
"a"
"b - 1"
"b - 2"
"b - 3"
"c"
"e" ??
"d" << callback
```

## settimeout, setinterval e requestanimationframe

### SetTimeout

O método setTimeout() define um timer que executa uma função ou trechos de código quando o timer expirar.

```javascript
// option 1
setTimout(() => {
    console.log('Set Timeout')
}, 2000)

// option 2
const print = (nome) => {
    console.log(`Set Timeout ${nome}`)
}

// os parâmetros para a function vem depois do tempo
const timeout = setTimout(print, 2000, 'Rodrigo', a, b, c...) 

setTimout(() => {
    clearTimeout(timeout) // cancela o setTimeout
}, 1000)
```

### SetInterval

O método setInterval(), repetem chamadas de funções or executam trechos de código, com um tempo de espera fixo entre cada chamada. Isso retorna um ID único para o intervalo, podendo remove-lo mais tarde apenas o chamando clearInterval().

```javascript
const interval = setInterval(() => {
    console.log('teste')
}, 1000)

setTimout(() => {
    clearInterval(interval) // cancela o setInterval
}, 5000)
```

### RequestAnimationFrame

O método requestAnimationFrame() fala para o navegador que deseja-se realizar uma animação e pede que o navegador chame uma função específica para atualizar um quadro de animação antes da próxima repaint (repintura). O método tem como argumento uma callback que deve ser invocado antes da repaint.

```javascript
let contador = 0

function animation(){
    contador += 1
    console.log(contador)
    loop = requestAnimationFrame(animation)
}

var loop = requestAnimationFrame(animation)

setTimout(() => {
    cancelAnimationFrame(animation) // cancela o requestAnimationFrame
}, 5000)
```

### Bitwise Operators, Type Arrays e Array Buffers

```javascript
console.log(Number(113).toString(2)) // "1110001", convertendo number para binário
console.log(parseInt(1110001).toString(2)) // 113, convertendo binário para number
```
> Não da para usar binário diretamente no javascript, ele deve ser convertido caso seja necessário

### Bitwise Operators

Similares aos operadores lógicos, eles trabalham em cima de cada byte dos caracteres

```javascript
// 00000001 = 1
// 00000010 = 2
// 00000011 = 3

console.log(1 | 2) // 3

// 00000011 > 11 (zeros a esquerda foram removidos)
console.log(parseInt(11, 2)) // 3

// 00000001 = 1
// 00000010 = 2
// 00000011 = 3

console.log(1 & 2) // 0

// 00000010 = 2
// 00000011 = 3
// 00000010 = 2

console.log(2 & 3) // 2
console.log(parseInt(10, 2)) // 2
```

> Pouco utilizado...?

## DOM e Layout Trees

O Modelo de Objeto de Documentos *(do inglês Document Object Model, DOM)* é uma API definida pelo W3C para representar e interagir com qualquer documento HTML ou XML.

O DOM é um modelo de documento carregado pelo navegador. Este documento é representado através de uma árvore de nós, onde cada um destes nós representa uma parte do documento *(por ex. um elemento, texto ou comentário)*.

O DOM é uma das APIs mais usadas na Web porque ele permite que cada código rodando no navegador acesse e interaja com cada nó do documento.

Os nós podem ser criados, movidos ou modificados. Listeners de evento podem também ser adicionados aos nós para serem disparados quando um dado evento ocorrer.

## Factories (fábrica) e Classes

### Factories

É uma função (que não é uma class ou contructor) que retorno um novo objeto *(sem utilizar a palavra chave `new`)*.

```javascript
const Mamifero = function(nome, som){
    return {nome, som} // object shorthand
}

const cachorro = Mamifero('cachorro', 'auau')
```

> Toda vez que a função for chamada é criado um novo objeto, limpo, sem compartilhar nenhuma referência com outro objeto criado.