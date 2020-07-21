# 33 Concepts Every JavaScript Developer Should Know

Fontes do github:
[Leonardo Maldonado](https://github.com/leonardomso/33-js-concepts) ou [Tiago Boeing](https://github.com/tiagoboeing/33-js-concepts)

## 1 - Pilha de chamadas (Call stack)

A pilha de chamadas (call stack) é um mecanismo do interpretador de uma linguagem que organiza o funcionamento do script quando são chamadas muitas funções, qual função está sendo executada no momento, e quais serão chamadas dentro de alguma função, etc.

- Quando o script chama a função, ela é adicionada à pilha de chamadas, e então é iniciado o carregamento da função.

- Qualquer função chamada por essa função será adicionada à pilha de chamadas uma acima da outra.

- Quando a função termina a execução, o interpretador retira a função da pilha e continua a execução do programa de onde parou.

- Caso a pilha ocupar mais espaço do que foi separado a ela, será exibido um erro "stack overflow" (estouro de pilha).

> Conceito de LIFO (last in first out).

```javascript
function function1() {
  function2();
  console.log("Performed function 1");
}

function function1() {
  function3();
  console.log("Performed function 2");
}

function function3() {
  console.log("Performed function");
}

function1();
```

Saída:

```javascript
"Performed function 3";
"Performed function 2";
"Performed function 1";
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
console.log(typeof true); // "boolean"
console.log(typeof Boolean(true)); // "boolean"
console.log(typeof new Boolean(true)); // "object"
console.log(typeof new Boolean(true).valueOf()); // "boolean"
console.log(typeof "Rodrigo"); // "string"
console.log(typeof 28); // "number"

console.log("Rodrigo".length); // 7

const doze = new Number(12); // object
const quinze = doze + 3;

console.log(quinze); // 15
console.log(typeof doze); // "object"
console.log(typeof quinze); // "number"
```

## 3 - Tipo de Valores e de referência (Value Types and Reference Types)

No JavaScript, uma variável pode armazenar dois tipos de valores: primitivo e referência.

Quando você atribui um valor a uma variável, o mecanismo JavaScript determinará se o valor é primitivo ou de referência.

Se o valor for um valor primitivo, ao acessar a variável, você manipula o valor real armazenado nessa variável. Em outras palavras, a variável que armazena um valor primitivo é acessada por valor .

Ao contrário de um valor primitivo, quando você manipula um objeto, trabalha na referência desse objeto, e não no objeto real. Significa que uma variável que armazena um objeto é acessada por referência .

```javascript
let x = 10;
let y = x; /* y recebeu valor */

x = 20;
console.log(x, y); // x = 20 y = 10

let a = { valor: 10 };
let b = a; /* a recebeu uma referência */

a.valor = 20;

console.log(a); // { valor: 20 }
console.log(a); // { valor: 20 }
```

## 4 - Implícito, Explicito, Nominal, Estruturando e Chamada de métodos (Implicit, Explicit, Nominal, Structuring and Duck Typing)

A coerção ocorre quanto o javascript tenta converter o tipo de uma valor para um tipo esperado, essa conversão pode ocorrer para `string`, `number` ou `boolean`.

Coerção de tipo é a conversão automática ou implícita de valores de um tipo de dados para outro (como sequências de caracteres em números). A conversão de tipos é semelhante à coerção de tipos porque ambos convertem valores de um tipo de dados para outro com uma diferença-chave - a coerção de tipos é implícita, enquanto a conversão de tipos pode ser implícita ou explícita.

```javascript
console.log("5" - 5); // 0
console.log("5" + 5); // "55"
console.log(true + 1); // 2
console.log(true + true); // 2
console.log([] + {}); // [Object Object]
console.log([] + []); // ""

// IMPLÍCITO
console.log(+"5"); // 5 > number
console.log("5" + ""); // "5" > string
console.log(123 && "oi"); // "oi" > string
console.log(null || true); // true boolean

// EXPLÍCITO (mais legível)
console.log(Number("50")); // 50 > number
console.log(String("50")); // "50" > string
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

As variáveis ​​que você declara fora das funções também são atribuídas ao contexto de execução global , fazendo parte do escopo global (conhecidos como variáveis ​​globais).

- var, let e const

```javascript
var nome = "Rodrigo"; // escopo global

function teste() {
  var sobreNome = "Plácido"; // escopo local (da função)
  if (sobrenome === "Sobrenome") {
    const valor = 10; // disponível somente dentro deste bloco
  }

  console.log(valor); // error - valor is not defined
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
console.log(1 + 1); // expression
console.log(Math.randon() + 5); // expression
function expressao() {
  // expression
  return 1 + 1;
}
```

Statement são trechos de código que performam uma ação, que fazem algo.

Uma declaração executa uma ação, loops e if são exemplos de declarações. Onde o JavaScript espera uma declaração, você também pode escrever uma expressão. O inverso não se aplica: você não pode escrever uma declaração em que o JavaScript espera uma expressão.

Por exemplo, uma instrução if não pode se tornar o argumento de uma função.

```javascript
let variavel = 20;

if (true) {
  variavel = 30;
}
```

## IIFE, Modules e Namespaces

### IIFE

Expressão de função invocada imediatamente, (immediately invoked function expression, ou IIFE).
É executada automaticamente quando lida, quando o interpretador passa por ela.

Formas de declarar uma IFEE:

```javascript
!(function () {
  // anônima
  alert("olá mundo");
})()(
  (function () {
    // anônima
    alert("Olá");
  })()
);

!(function teste() {
  // nomeada, não anônima
  alert("olá mundo");
})();
```

> O "!" indica que deve ser tratada com uma expressão e não uma function

### Namespaces

O namespace organiza o código em pequenos grupos, impedindo que haja a colisão com outros métodos de outras libs.

```javascript
const dados = (function(){ // dados é namespace
let contador = 0 // private - escopo de bloco
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
const valor = 5;

const olaMundo = function () {
  alert("Olá mundo!");
};

const multiplica = function (num) {
  alert(num * 5);
};

// export {olaMundo, multiplica}
export default olaMundo; // vai chegar lá como uma função anônima
```

#### script2.js

```javascript
import { olaMundo as helloWorld, multiplica } from "./script1.js";
helloWorld();
multiplica(2);

// script 2
import * as utilitarios from "./script1.js";
utilitarios.multiplica(4);

// script 2 > se foi exportado com default podemos dar qualquer nome
import utilitarios from "./script1.js";
utilitarios(); // está executando o olaMundo exportado como default no script1
```

## Message Queue e Event Loop - Fila de eventos e Pilha de eventos

```javascript
function loopEventos() {
  console.log("a");
  for (let i = 1; i <= 4; i++) {
    console.log("b - " + i);
  }
  console.log("c");
  setTimeout(() => {
    console.log("d");
  }, 0);
  console.log("e");
}

loopEventos();
```

Saída:

```javascript
"a";
"b - 1";
"b - 2";
"b - 3";
"c";
"e" ?? "d" << callback;
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
  console.log("teste");
}, 1000);

setTimout(() => {
  clearInterval(interval); // cancela o setInterval
}, 5000);
```

### RequestAnimationFrame

O método requestAnimationFrame() fala para o navegador que deseja-se realizar uma animação e pede que o navegador chame uma função específica para atualizar um quadro de animação antes da próxima repaint (repintura). O método tem como argumento uma callback que deve ser invocado antes da repaint.

```javascript
let contador = 0;

function animation() {
  contador += 1;
  console.log(contador);
  loop = requestAnimationFrame(animation);
}

let loop = requestAnimationFrame(animation);

setTimout(() => {
  cancelAnimationFrame(animation); // cancela o requestAnimationFrame
}, 5000);
```

### Bitwise Operators, Type Arrays e Array Buffers

```javascript
console.log(Number(113).toString(2)); // "1110001", convertendo number para binário
console.log(parseInt(1110001).toString(2)); // 113, convertendo binário para number
```

> Não da para usar binário diretamente no javascript, ele deve ser convertido caso seja necessário

### Bitwise Operators

Similares aos operadores lógicos, eles trabalham em cima de cada byte dos caracteres

```javascript
// 00000001 = 1
// 00000010 = 2
// 00000011 = 3

console.log(1 | 2); // 3

// 00000011 > 11 (zeros a esquerda foram removidos)
console.log(parseInt(11, 2)); // 3

// 00000001 = 1
// 00000010 = 2
// 00000011 = 3

console.log(1 & 2); // 0

// 00000010 = 2
// 00000011 = 3
// 00000010 = 2

console.log(2 & 3); // 2
console.log(parseInt(10, 2)); // 2
```

> Pouco utilizado...?

## DOM e Layout Trees

O Modelo de Objeto de Documentos _(do inglês Document Object Model, DOM)_ é uma API definida pelo W3C para representar e interagir com qualquer documento HTML ou XML.

O DOM é um modelo de documento carregado pelo navegador. Este documento é representado através de uma árvore de nós, onde cada um destes nós representa uma parte do documento _(por ex. um elemento, texto ou comentário)_.

O DOM é uma das APIs mais usadas na Web porque ele permite que cada código rodando no navegador acesse e interaja com cada nó do documento.

Os nós podem ser criados, movidos ou modificados. Listeners de evento podem também ser adicionados aos nós para serem disparados quando um dado evento ocorrer.

## Factories e Class (Fábrica e Classes)

### Factories

É uma função (que não é uma class ou contructor) que retorno um novo objeto _(sem utilizar a palavra chave `new`)_.

```javascript
const Mamifero = function (nome, som) {
  return { nome, som }; // object shorthand
};

const cachorro = Mamifero("cachorro", "auau");
```

> Toda vez que a função for chamada é criado um novo objeto, limpo, sem compartilhar nenhuma referência com outro objeto criado.

### Classes

Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos.

A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

Uma maneira de definir uma classe é usando uma declaração de classe. Para declarar uma classe, você deve usar a palavra-chave class seguida pelo nome da classe.

```javascript
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  // getter
  get area() {
    return this.calculaArea();
  }

  calculaArea() {
    return this.altura * this.largura;
  }
}
```

Uma Expressão de Classe _(class expression)_ é outra forma para definir classes. Expressões de Classes podem possuir nomes ou não _(anônimas)_. O nome dado para uma expressão de classe é local ao corpo da classe.

```javascript
// sem nome
let Retangulo = class {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
};

// nomeada
let Retangulo = class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
};
```

### Extends

A palavra-chave **_extends_** é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.

```javascript
class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }

  tipoAnimal() {
    console.log(`Este animal é um ${this.tipo}`);
  }
}

class Cachorro extends Animal {
  constructor(tipo, nome, peso) {
    super(tipo); // class pai
    this.nome = nome;
    this.peso = peso;
  }
  dados() {
    console.log(`Nome do animal: ${this.nome} - Peso: ${this.peso}`);
  }
}

let cachorro = new Cachorro("Mamífero", "Mat", "20kg");

cachorro.dados();
cachorro.tipoAnimal();
```

## this, call, apply e bind

### this

O `this` representa o atual cotexto onde esta sendo utilizado, ele o referencia. O `this` fora de function e method, referencia o escopo global.

```javascript
// In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"

function teste() {
  return this;
}

teste(); // window

const dados = {
  fn: teste,
};

dados.fn; // ƒ teste()
```

### call

Permite invocar uma function alterando o seu contexto de `this`, passando qual contexto desejar na sua execução.

```javascript
const dados = { nome: "Rodrigo" };
const saudacao = function (idade) {
  console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
};

saudacao.call(dados, 28);
```

### apply

O `apply` é bem semelhante ao `call`, com uma diferença, os argumentos são fornecidos como um `array`.

```javascript
const dados = { nome: "Rodrigo" };
const argumentos = [28];
const saudacao = function (idade) {
  console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
};

saudacao.apply(dados, argumentos);
```

### bind

O método `bind()` cria uma nova função que, quando chamada, tem sua palavra-chave `this` definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.

O principal objetivo do método `bind` é alterar o contexto `this` de uma função independente de onde a mesma esteja sendo chamada.

```javascript
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```

Outro exemplo:

```javascript
function cook() {
  console.log(this.ingredients);
}

cook(); // => undefined

let dinner = {
  ingredients: "bacon",
};

let cookBoundToDinner = cook.bind(dinner);
cookBoundToDinner(); // "bacon"
```

## New, Constructor, Instanceof e Instances

O operador `new` cria uma instancia de um tipo de objeto definido pelo usuário ou de um dos tipos nativos _(built-in)_ que possuem uma função construtora.

O `construtor` é um método especial para criar e inicializar um objeto criado a partir de uma classe.

Exemplo 1:

```javascript
function usuario(nome) {
  this.nome = nome;
  this.log = function () {
    console.log(this);
  };
}

const rodrigo = new usuario("Rodrigo");
console.log(rodrigo);

console.log(rodrigo instanceof usuario); // true
console.log(rodrigo instanceof String); // false

rodrigo.__proto__constructor("Felipe");
usuario.prototype;
```

Saída:

```javascript
/*
{nome: "Felipe", log: ƒ, constructor: ƒ}
  log: ƒ ()
  nome: "Felipe"
  constructor: ƒ usuario(nome)
  __proto__: Object
*/
```

Exemplo 2:

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Eagle", "Talon TSi", 1993);

console.log(car1.make); // expected output: "Eagle"
```

Você pode adicionar uma propriedade compartilhada à um tipo de objeto definido anteriormente através do uso da propriedade Function.prototype.

```javascript
function Carro() {}
carro1 = new Carro();

console.log(carro1.cor); // undefined

Carro.prototype.cor = null;
console.log(carro1.cor); // null

carro1.cor = "preta";
console.log(carro1.cor);
```

> O nome de construtores deve iniciar em maiúscula, por convenção.

## Prototype Inheritance e Prototype Chain

A prototype é um modelo que exibe a aparência e o comportamento de um aplicativo ou produto no início do ciclo de vida do desenvolvimento.

Exemplo 1:

```javascript
// Vamos criar um objeto o da função f com suas próprias propriedades a e b:
let f = function () {
  this.a = 1;
  this.b = 2;
};
let o = new f(); // {a: 1, b: 2}

// adicionar propriedades no protótipo da função f
f.prototype.b = 3;
f.prototype.c = 4;

// não defina o protótipo f.prototype = {b: 3, c: 4}; isso vai quebrar a cadeia de protótipos
// o. [[Prototype]] possui propriedades bec.
// o. [[Prototype]]. [[Prototype]] é Object.prototype.
// Finalmente, o. [[Prototype]]. [[Prototype]]. [[Prototype]] é nulo.
// Este é o fim da cadeia de protótipos, como nulo,
// por definição, não possui [[Prototype]].
// Assim, a cadeia completa de protótipos se parece com:
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null dfdf

console.log(o.a); // 1
// Existe uma propriedade 'a' no objeto o? Sim, e seu valor é 1.

console.log(o.b); // 2
// Existe uma propriedade própria 'b' em o? Sim, e seu valor é 2.
// O protótipo também tem uma propriedade 'b', mas não é visitado.
// Isso é chamado de sombreamento de propriedade(Property Shadowing)

console.log(o.c); // 4
// Existe uma propriedade própria 'c' em o? Não, verifique seu protótipo.
// Existe uma propriedade 'c' própria em o. [[Prototype]]? Sim, seu valor é 4.

console.log(o.d); // undefined
// Existe uma propriedade 'd' própria em o? Não, verifique seu prototype.
// Existe uma propriedade 'd' em o. [[Prototype]]? Não, verifique seu prototype.
// o. [[Prototype]]. [[Prototype]] é Object.prototype e não há propriedade 'd' por padrão, verifique seu prototype.
// o. [[Prototype]]. [[Prototype]]. [[Prototype]] é nulo, pare de pesquisar,
// nenhuma propriedade encontrada, retorne indefinido.
```

Exemplo 2:

```javascript
function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function (v) {
    this.vertexes.push(v);
  },
};

let g = new Graph();
// 'g' é um objeto com as propriedades 'vertexes' e 'edges'.
// g.[[Prototype]] é o valor de Graph.prototype quando new Graph() é executada.
```

Exemplo 3:

```javascript
function SalaAula(alunos) {
  this.alunos = alunos;
}

SalaAula.prototype = {
  adicionaAluno: function (aluno) {
    this.alunos.push(aluno);
  },
};

const minhaSala = new SalaAula(["João", "Maria"]);
minhaSala.adicionaAluno("Felipe");
console.log(minhaSala.alunos); // [ 'João', 'Maria', 'Felipe' ]
```

Exemplo 4:

```javascript
function SalaAula(alunos) {
  this.alunos = alunos || [];
}

SalaAula.prototype = {
  adicionaAluno: function (aluno) {
    this.alunos.push(aluno);
  },
  mostrarAlunos: function () {
    return this.alunos;
  },
};

function NovaSala() {
  SalaAula.call(this); // incluindo o contexto da NovaSala na SalaAula
}

NovaSala.prototype = Object.create(SalaAula.prototype);

const novaSala = new NovaSala();
// const novaSala = Object.create(NovaSala.prototype)
// class NovaSala extends SalaAula {}

novaSala.adicionaAluno("João");
console.log(novaSala.mostrarAlunos()); // [ 'João' ]
```

## Object.create e Object.assign

### Object.create

O método `Object.create()` cria um novo objeto, utilizando um outro objecto existente como protótipo para o novo objeto a ser criado.

```javascript
let User = function (name, age) {
  // factorie
  this.nome = name;
  this.age = age;
};

const rodrigo = new User("rodrigo", 28);
const newRodrigo = Object.create(rodrigo);

console.log(newRodrigo instanceof User); // true
console.log(newRodrigo.name); // rodrigo > herança do prototype
```

Exemplo 1:

```javascript
function Car(color) {
  this.color = color;
  this.description = description;
}

// utilizando prototype
Car.prototype.getInfo = function () {
  // a function não aparece nas props mais existe
  return `${this.description} and color ${this.color}`;
};

const myCar = Object.create(Car.prototype); // assim não passamos pelo construtor do object
myCar.color = "blue";
console.log(myCar.getInfo()); // "undefined and color blue"
```

Exemplo 2:

```javascript
// agora vamos passar os parâmetros para criação do objeto
const newCar = Object.create(Car, {
  color: {
    // props descritoras - dados > valores
    writable: true, // pode ser diretamento modificado por atribuição
    configurable: true, // pode ser alterado ou removido do object
    value: "red", // valor do mesmo
  },
  descriptionDefault: {
    // props descritoras - dados
    writable: false,
    configurable: true,
    value: "Meu carro",
  },
  description: {
    // props descritoras - assessoras > getters and setters
    configurable: true,
    get: function () {
      return this.descriptionDefault.toUpperCase();
    },
    set: function (value) {
      this.descriptionDefault = value.toLowerCase();
    },
  },
});

console.log(newCar.description); // "MEU CARRO"
newCar.description = "Nova definição";
console.log(newCar.description); // "MEU CARRO" >  descriptionDefault: { writable: false }
```

### Object.assign

O método `Object.assign()` é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino. Este método irá retornar o objeto destino.

Receber um ou mais objetos para criar um novo objeto, que terá a referência do objeto alvo, mais não dos demais objetos que compõem da fusão.

Exemplo 1:

```javascript
const target = { a: 1, b: 2 }; // object alvo
const source = { b: 4, c: 5 }; // object que vai passar os dados para o object alvo

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

returnedTarget.a = 9;

console.log(target);
// expected output: Object { a: 9, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 9, b: 4, c: 5 }
```

Exemplo 2:

Podemos criar um objeto sem referência, passando no primeiro do assign um objeto vazio

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);
// expected output: Object { a: 1, b: 2, c: 3, d: 4 }
```

## map, reduce, filter

### map

O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

### reduce

O método reduce()executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

### filter

O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

Exemplo 1:

```javascript
const pets = [
  { name: "Caramelo", age: 3, type: "cachorro" },
  { name: "Rex", age: 6, type: "cachorro" },
  { name: "Bolota", age: 1, type: "gato" },
  { name: "Thor", age: 3, type: "cachorro" },
];

const dogs = pets.filter((pet, index) => pet.type === "cachorro");

const realAge = dogs.map((dog, index) => ({
  name: dog.name,
  age: dog.age * 7,
}));

const totalAge = realAge.reduce((acc, curr, index) => {
  return (acc += curr.age);
}, 0);
```

Exemplo 2:

```javascript
// chain
const pets = [
  { name: "Caramelo", age: 3, type: "cachorro" },
  { name: "Rex", age: 6, type: "cachorro" },
  { name: "Bolota", age: 1, type: "gato" },
  { name: "Thor", age: 3, type: "cachorro" },
];

const age = pets
  .filter((pet, index) => pet.type === "cachorro")
  .map((dog, index) => ({ name: dog.name, age: dog.age * 7 }))
  .reduce((acc, curr, index) => (acc += curr.age), 0);
```

## Functional programming (Programação funcional)

Entende-se como paradigma uma forma de fazer algo. Ou seja, paradigma de programação é o nome que se dá a maneira como
se programa, a orientação que seus códigos irão ter.

De maneira simples: código funcional é um código composto de múltiplas funções que se compõem para resolver um problema.
Pense da seguinte forma: eu tenho um dado de entrada e preciso transformá-lo em um dado de saída. Usando PF eu vou
abstrair as lógicas de transformações do meu código em funções, e usá-las no momento oportuno para transformar este meu dado.

### Pure functions (Funções puras)

Uma função pura é uma função que:

- Dada a mesma entrada, sempre retornará a mesma saída.
- Não produz efeitos colaterais.

Está função abaixo é impura, tanto por fazer mais de uma ação, quanto por ter efeitos colaterais ao alterar um objeto diretamente.

```javascript
const user = { name: "Rodrigo", points: 0 };

const changeUser = () => {
  user.name = user.name.toUpperCase();
  user.pontos += 1;
  return user;
};

changeUser(user);
console.log(user); // {name: 'RODRIGO', points: 1}
```

Transformando essa função em pura...

```javascript
const user = { name: "Rodrigo", points: 0 };

const nameUpperCase = (name) => name.toUpperCase();
const pointIncremenet = (point) => point + 1;

user.name = nameUpperCase(user.name);
user.points = pointIncremenet(user.points);

console.log(user); // {name: 'RODRIGO', points: 1}
```

Agora, cada função realiza apenas uma ação, retornar algo o mesmo tipo do valor
recebido, as propriedades não são alteradas diretamente no objeto, evitando assim
efeitos colaterais.

- Fácil legibilidade
- Facilita a aplicação de testes
- Possibilita o reuso de códigos

### State Mutation (Imutabilidade)

Tudo além de tipos primário é mutável.

Leitura: <https://medium.com/trainingcenter/programa%C3%A7%C3%A3o-funcional-para-iniciantes-9e2beddb5b43>

## Closures

Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.

```javascript
function init() {
  let name = "Mozilla";
  function displayName() {
    alert(name);
  }
  displayName();
}

init();
```

A função `init()` cria uma variável local chamada `name`, e depois define uma função chamada `displayName()`. `displayName()` é uma função aninhada (_um closure_) — ela é definida dentro da função init(), e está disponível apenas dentro do corpo daquela função. Diferente de `init()`, `displayName()` não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai.

## High Order Functions (Funções de alta ordem) HOF

São funções que podem receber outras funções como argumento ou que retornam funções. Ex.: callback

```javascript
function mathOrder(num1, num2, op) {
  return op(num1, num2);
}
console.log(mathOperator(1, 2, (num1, num2) => num1 + num2));
```

## Recursion (Recursão)

A recursão é simplesmente quando uma função chama ela mesma.

Exemplo 1:

```javascript
function factorial(x) {
  if (x < 0) return;
  if (x === 0) return 1;
  console.log(x);
  return x * factorial(x - 1);
}

factorial(3); // 6

return 1 * 1 * 2 * 3; // 6
```

Explicação estruturada:

```javascript
factorial(0) returns 1                 => 1
factorial(1) returns 1 * factorial(0)  => 1 * 1
factorial(2) returns 2 * factorial(1)  => 2 * 1 * 1
factorial(3) returns 3 * factorial(2)  => 3 * 2 * 1 * 1

// 3 * 2 * 1 * 1 = 6
```

> Deve existir um evento de saída para evitar um loop infinito.

```javascript
function contagem(num) {
  console.log(num);
  if (num > 0) {
    contagem(num - 1);
  }
}

contagem(5); // 1 2 3 4 5
```

> A recursão faz mais sentido para no paradigma funcional.

## Collections (Coleções)

Objetos interaveis, atravez de construtores como `Set()` e o `Map()`.

### Set

O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.

```javascript
const alphabet = new Set(["a", "b", "c"]);
alphabet.add("d"); // add novo elemento
alphabet.clear(); // remove todos os elementos
alphabet.size; // tamanho
alphabet.delete("a"); // remove o elemento especificado
alphabet.has("c"); // verifica se um elemento existe (return boolean)
```

O método `entries()` retorna um novo objeto Iterador (_Iterator_) que contém um array de `[valor, valor]` para cada elemento de um objeto Set em ordem de inserção.

```javascript
const alphabet = new Set(["a", "b", "c"]);

const arr = alphabet.entries();
console.log(arr.next().value);
console.log(arr.next().value);
console.log(arr.next().value);

alphabet.forEach((value) => console.log(value));
```

Removendo itens duplicados de um array

```javascript
const arr1 = [1, 2, 3, 3, 4, 4, 5];

const numbers = new Set(arr1);
console.log(numbers.size); // 5

const arr2 = Array.from(numbers);
console.log(arr2); // [1, 2, 3, 4, 5]
```

### Map

O objeto `Map` é um mapa simples de chave/valor. Qualquer valor (_objeto e valores primitivos_) pode ser usado como uma chave ou um valor.

```javascript
const data = new Map([
  ["name", "Rodrigo"],
  ["age", 27],
]);

data.set("estado", "Minas Gerais"); // add elemento
data.get("name"); // Rodrigo

data.forEach((value, key) => console.log(`key: ${key} - value: ${value}`));

// saída

// "key: name - value: Rodrigo"
// "key: age - value: 27"
// "key: estado - value: Minas Gerais"
```

## Generators

Generators são funções especiais que podem ser executadas, pausadas e continuadas em diferentes estágios da sua execução ou iteração, tudo isso graças a nova palavra reservada `yield`.

Exemplo 1:

```javascript
function* interaGenerator(total) {
  for (let i = 0; i <= total; i++) {
    yield console.log(i); // yield > similar a um "return"
  }
}

const totalGenerator = interaGenerator(3); // atribuindo para não ficar reinicializando

totalGenerator.next();
// 0
// {value: undefined, done: false, __proto__: Object}

totalGenerator.next();
// 1
// {value: undefined, done: false, __proto__: Object}

totalGenerator.next();
// 2
// {value: undefined, done: false, __proto__: Object}

totalGenerator.next();
// 3
// {value: undefined, done: false, __proto__: Object}

totalGenerator.next();
// {value: undefined, done: true, __proto__: Object}
```

Exemplo 2:

```javascript
function* interagenerator(total) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

const totalGenerator = interagenerator(3);

totalGenerator.next().value; // 1
totalGenerator.next().value; // 2
totalGenerator.next().value; // 3
totalGenerator.next().value; // undefined
```

## Promises (Promessas)

Promise é um objeto usado para processamento assíncrono. Um `Promise` (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

```javascript
new Promise(/* executor */ function(resolve, reject) { ... });
```

Estados de uma `Promise`:

- `pending` (_pendente_): Estado inicial, que não foi realizada nem rejeitada.
- `fulfilled` (_realizada_): sucesso na operação.
- `rejected` (_rejeitado_): falha na operação.
- `settled` (_estabelecida_): Que foi realizada ou rejeitada.

### Métodos

#### Promise.all(lista)

Retorna uma promise que é resolvida quando todas as promises no argumento lista forem resolvidas ou rejeitada assim que uma das promises da lista for rejeitada. Se a promise retornada for resolvida, ela é resolvida com um array dos valores das promises resolvidas da lista. Se a promise for rejeitada, ela é rejeitada com o motivo da primeira promise que foi rejeitada na lista. Este método pode ser útil para agregar resultados de múltiplas promises.

#### Promise.race(lista)

Retorna uma promise que resolve ou rejeita assim que uma das promises do argumento lista resolve ou rejeita, com um valor ou o motivo daquela promise.

#### Promise.reject(motivo)

Retorna um objeto `Promise` que foi rejeitado por um dado motivo.

#### Promise.resolve(valor)

Retorna um objeto `Promise` que foi resolvido com um dado valor. Se o valor é `thenable` (possui um método `then`), a promise retornada "seguirá" este método, adotando esse estado eventual; caso contrário a promise retornada será realizada com o valor. Geralmente, se você quer saber se um valor é uma promise ou não, utilize `Promise.resolve(valor)` e trabalhe com a valor de retorno que é sempre uma promise.

```javascript
const promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;

  const log = document.getElementById("log");
  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount + ") Started (<small>Sync code started</small>)<br/>"
  );

  // Criamos uma nova promise: prometemos a contagem dessa promise (após aguardar 3s)
  const p1 = new Promise(
    // a função resolve() é chamada com a capacidade para resolver ou
    // rejeitar a promise
    function (resolve, reject) {
      log.insertAdjacentHTML(
        "beforeend",
        thisPromiseCount +
          ") Promise started (<small>Async code started</small>)<br/>"
      );
      // Isto é apenas um exemplo para criar assincronismo
      window.setTimeout(function () {
        // Cumprimos a promessa !
        resolve(thisPromiseCount);
      }, Math.random() * 2000 + 1000);
    }
  );

  // definimos o que fazer quando a promise for realizada
  p1.then(
    // apenas logamos a mensagem e o valor
    function (val) {
      log.insertAdjacentHTML(
        "beforeend",
        val + ") Promise fulfilled (<small>Async code terminated</small>)<br/>"
      );
    }
  );

  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount +
      ") Promise made (<small>Sync code terminated</small>)<br/>"
  );
}
```

Saída:

```javascript
1) Started (Sync code started)
1) Promise started (Async code started)
1) Promise made (Sync code terminated)
1) Promise fulfilled (Async code terminated)
```
