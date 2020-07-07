/* 
  CALLSTACK
  last in first out = LIFO = último que entra é o primeiro que sai = PILHA  
*/

function function1() {
  function2()
  console.log('function 1')
}

function function2() {
  function3()
  console.log('function 2')
}

function function3() {
  console.log('function 3')
}

function1()