/** 
 * 1
 * a false
 * b false
 * c true
 * e boolean
 */

/**
 * 2
 * a undefined
 * b null
 * c 9
 * d 3
 * e [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 * f 8
 * 
 */

/**
 * 1 - Exercicio escrito
 */

const idadeUsuario = Number(prompt('Qual a sua idade ?'))
const idadeMelhorAmigo = Number(prompt('Qual a idade do seu melhor amigo?'))
console.log(idadeUsuario > idadeMelhorAmigo)
console.log("A Diferença de idade é", idadeUsuario - idadeMelhorAmigo)

/**
 * 2 - Exercicio escrito
 */

const numeroPar = Number(prompt('Digite um numero par'))
console.log(numeroPar % 2)
    // Se for numero par o resto eh zero, se for impar o resto eh um

/**
 * 3 - Exercicio escrito
 */

const array = []
array.push(prompt('Digite uma tarefa a ser feita'))
array.push(prompt('Digite uma tarefa a ser feita'))
array.push(prompt('Digite uma tarefa a ser feita'))
console.log(array)
const tarefaRealizada = Number(prompt('Qual tarefa você ja realizou? 0, 1, 2'))
array.splice(tarefaRealizada, 1)
console.log(array)

/**
 * 4
 */

const nomeUsuario = prompt('Digite seu nome de usuario')
const emailUsuario = prompt('Digite seu e-mail')

console.log('O e-mail', emailUsuario, 'Foi cadastrado com sucesso, Seja bem vinda(o)', nomeUsuario)