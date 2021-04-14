/**
 * Exercicio 01
 */

// a - imprime a o valor de parametro * 5
// b - nada, pois n esta guardando ou mandando fazer nada com o valor retornado

//-----------------------------------------------------------------------------------------------//

/**
 * Exercicio 02
 */

// a - da um console log até o caio pois quando estrar no joao ele ja vai ser igual a 2

// b - acredito que vai ser tudo normal

//-----------------------------------------------------------------------------------------------//

/**
 * Exercicio 03
 */

// Ele retorna um arrai com os numeros pares ao quadrado poderia se chamar paresAoQuadrado

//-----------------------------------------------------------------------------------------------//

/**
 * Exercicio 04
 */


const naame = 'Guilherme'
const age = Number(27)
const city = 'Botucatu'
const study = true

const studyOrNot = (studyng) => studyng ? 'Sou' : 'Não sou'

const returnString = () => console.log(`Eu sou ${naame}, tenho ${age} anos, moro em ${city} e ${studyOrNot(study)} estudante.`)

const returnStringWhitParams = (name, age, city, study) => {
  return `Eu sou ${naame}, tenho ${age} anos, moro em ${city} e ${studyOrNot(study)} estudante.`
}

returnString()
console.log(returnStringWhitParams(naame, age, city, false))

//-----------------------------------------------------------------------------------------------//

/**
 * Exercicio 05
 */

const sum = (numeroOne, numberTwo) => {
  return numeroOne + numberTwo
}

console.log(sum(5, 10))

const firstIsMajor = (numberoOne, numberTwo) => {
  if (numberoOne > numberTwo) {
    return true
  } else {
    return false
  }
}

const printMsg = (msg, number) => {
  for (let index = 0; number > index; index++) {
    console.log(msg)
  }
}

printMsg('Olar', 5)

//-----------------------------------------------------------------------------------------------//

/**
 * Exercicio 06
 */

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

const arrayLength = (arraay) => arraay.length

const isParOrImpar = (number) => {
  if (number % 2 === 0) {
    return true
  }
  return false
}

const quantyOfPar = (arrays) => {
  let quantiOfPar = 0
  for (arr in arrays) {
    if (arr % 2 === 0) {
      quantiOfPar++
    }
  }
  return quantiOfPar
}

console.log(quantyOfPar(array))

const newQuantyOfPar = (arrays) => {
  let quantiOfPar = 0
  for (arr in arrays) {
    if (isParOrImpar(arr)) {
      quantiOfPar++
    }
  }
  return quantiOfPar
}

console.log(newQuantyOfPar(array))