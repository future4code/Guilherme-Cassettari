// "10", logo apos "10 5"
// "20 10 10"

//Exercicio de escrita
let nomeUsuario
let idadeUsuario
console.log(typeof nomeUsuario, typeof idadeUsuario)
    //  Como eu não atribui um valor a ela, veio não definida "undefined"


// Programa 01
nomeUsuario = prompt("Qual seu nome")
idadeUsuario = prompt("E a sua idade ?")
console.log(nomeUsuario, idadeUsuario)
    // Agora eu atribui um valor a variavel e imprimi ela na tela
console.log('Ola:', nomeUsuario, "você tem:", idadeUsuario, "anos")


// Programa 02
const pergunta1 = 'Qual numero de roupa você usa ?'
const pergunta2 = 'Qual bem material você esta precisando no momento?'
const pergunta3 = 'Que numero você calça?'
const pergunta4 = 'Se eu te der um presente você fica feliz?'
const pergunta5 = 'Se eu não te der a nossa relação é a mesma?'


let numeroRoupaUsuario = prompt(pergunta1)
let oQueUsuarioPrecisa = prompt(pergunta2)
let peDoUsuario = prompt(pergunta3)
let presenteUsuario = prompt(pergunta4)
let nivelarAmizadeUsuario = prompt(pergunta5)

console.log("1.", pergunta1)
console.log("Resposta:", numeroRoupaUsuario)
console.log("2.", pergunta2)
console.log("Resposta:", oQueUsuarioPrecisa)
console.log("3.", pergunta3)
console.log("Resposta:", peDoUsuario)
console.log("4.", pergunta4)
console.log("Resposta:", presenteUsuario)
console.log("5.", pergunta5)
console.log("Resposta:", nivelarAmizadeUsuario)

// Programa 03
let comidaPreferidas = ['Macarrão da Parrola Carrossela', 'Qualquer coisa que minha mulher faça', 'Coca-Cola', 'Salgadinho Pingolitos', 'Arroz de forno da mamis']
console.log(comidaPreferidas)

console.log('Estas são minhas comidas preferidas')
console.log(comidaPreferidas[0])
console.log(comidaPreferidas[1])
console.log(comidaPreferidas[2])
console.log(comidaPreferidas[3])
console.log(comidaPreferidas[4])

comidaPreferidas[1] = prompt('Qual sua comida Preferida ?')
console.log(comidaPreferidas)

//  Programa 04
alert("Pro favor responda com true ou false")

const perguntaFeliz = 'Você ta feliz'
const perguntaFome = 'Ta com fome?'
const perguntaAcabou = 'Acabou o exercicio ?'


const taFeliz = prompt(perguntaFeliz)
const comFome = prompt(perguntaFome)
const acabouOExercicio = prompt(perguntaAcabou)

console.log(perguntaFeliz, taFeliz)
console.log(perguntaFome, comFome)
console.log(perguntaAcabou, acabouOExercicio)