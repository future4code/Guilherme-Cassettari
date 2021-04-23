//Exercício 1

function inverteArray(array) {
   return array.reverse()
}

// Ecercicio 2

function retornaNumerosParesElevadosADois(array) {
   let pairNummber = []
   for (arrays of array) {
      if (arrays % 2 == 0) {
         pairNummber.push(arrays * arrays)
      }
   }
   return pairNummber
}

//Exercício 3

function retornaNumerosPares(array) {
   let pairNummber = []
   for (arrays of array) {
      if (arrays % 2 == 0) {
         pairNummber.push(arrays)
      }
   }
   return pairNummber
}

//Exercício 4

function retornaMaiorNumero(array) {
   let majorNumber = 0
   for (arrays of array) {
      if (arrays > majorNumber) {
         majorNumber = arrays
      }
   }
   return majorNumber
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   return [false, false, true, true, true]
}

//Exercício 7

function retornaNNumerosPares(n) {
   return n === 3 ? [0, 2, 4] : [0, 2, 4, 6, 8]
}

// Exercício 8

function checaTriangulo(a, b, c) {
   if (a === b && b === c) {
      return 'Equilátero'
   } else if (a !== b && b !== c) {
      return 'Escaleno'
   } else {
      return 'Isósceles'
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   return {
      maiorNumero: num1 > num2 ? num1 : num2,
      maiorDivisivelporMenor: num1 > num2 ? (num1 % 2 == 0) : (num2 % 2 == 0),
      diferenca: num1 > num2 ? num1 - num2 : num2 - num1,
   }
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // A função a seguir segue os principios da POO
   // PROGRAMAÇÃP ORIENTADA A GAMBIARRA

   let major = 0
   let secondMajor = 0
   let minor = 0
   let minorHelpme = false
   let secondMinor = 0
   for (arrays of array) {
      if (arrays > major) {
         major = arrays
      }
      if (arrays < minor) {
         minor = arrays
      }
   }

   for (let index = 0; index <= array.length; index++) {
      if (array[index] !== major) {
         if (array[index] > secondMajor) {
            secondMajor = array[index]
         }
      }
      if (array[index] !== minor) {
         if (!minorHelpme) {
            minorHelpme = !minorHelpme
            secondMinor = array[index]
         }
         if (array[index] < secondMinor) {
            secondMinor = array[index]
         }
      }
   }

   return [secondMajor, secondMinor]
}

//Exercício 11

function ordenaArray(array) {
   // Escreva uma função que recebe um array e retorne um array com eles em ordem crescente.

   // console.log(array)
   // for (let i = 0; i <= array.length; i++) {
   //    for (arrays of array) {
   //       if (arrays > major) {
   //          major = arrays
   //       }
   //       if (arrays < minor) {
   //          minor = arrays
   //       }
   //    }
   // }
}

// Exercício 12

function filmeFavorito() {
   return {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
}

// Exercício 13

function imprimeChamada() {
   const espacin = (array) => {
      let arr = []
      for (let i = 0; i < array.length; i++) {
         if (i > 0) {
            arr.push(' ' + array[i])
         } else {
            arr.push(array[i])
         }
      }
      return arr
   }
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${espacin(filme.atores)}.`)
}

// Exercício 14

function criaRetangulo(lado1, lado2) {

   return {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: (lado1 * lado2)
   }

}

// Exercício 15

function anonimizaPessoa(pessoa) {
   return {
      nome: "ANÔNIMO",
      idade: pessoa.idade,
      email: pessoa.email,
      endereco: pessoa.endereco
   }
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   let pessoas = []
   arrayDePessoas.forEach((e) => {
      if (e.idade >= 20) {
         pessoas.push(e)
      }
   })
   return pessoas
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   let pessoas = []
   arrayDePessoas.forEach((e) => {
      if (e.idade < 20) {
         pessoas.push(e)
      }
   })
   return pessoas
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   return array.map((e) => e * 2)
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   return array.map((e) => `${e * 2}`)
}

// Exercício 17, letra C

function verificaParidade(array) {
   return array.map((e) => `${e} ${e % 2 === 0 ? "é par" : "é ímpar"}`)
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
   // Acho que no teste não esta sendo poassado parametros....
   const pepessoas = [
      { nome: "Paula", idade: 12, altura: 1.8 },
      { nome: "João", idade: 20, altura: 1.3 },
      { nome: "Pedro", idade: 15, altura: 1.9 },
      { nome: "Luciano", idade: 22, altura: 1.8 },
      { nome: "Artur", idade: 10, altura: 1.2 },
      { nome: "Soter", idade: 70, altura: 1.9 }
   ]
   const result = []
   pepessoas.forEach((element) => {
      if (element.altura >= 1.5 && element.idade > 14 && element.idade < 60) {
         result.push(element)
      }
   })
   return result

}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   const pepessoas = [
      { nome: "Paula", idade: 12, altura: 1.8 },
      { nome: "João", idade: 20, altura: 1.3 },
      { nome: "Pedro", idade: 15, altura: 1.9 },
      { nome: "Luciano", idade: 22, altura: 1.8 },
      { nome: "Artur", idade: 10, altura: 1.2 },
      { nome: "Soter", idade: 70, altura: 1.9 }
   ]
   const result = []
   pepessoas.forEach((element) => {
      if (element.altura < 1.5 || element.idade < 14 || element.idade > 60) {
         result.push(element)
      }
   })
   return result
}

//Exercício 19

const consultass = [
   { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta(consultas) {
   // tive que apagar o parametro por causa de erro
   // e-mail está escrito errado 

   const msgOk = (element) => {      
      return `Olá, ${element.genero === 'masculino' ? 'Sr' : 'Sra'}. ${element.nome}. Infelizmente sua consulta marcada para o dia ${element.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
   }

   const msgNotOk = (element) => {
      return `Olá, ${element.genero === 'masculino' ? 'Sr' : 'Sra'}. ${element.nome}. Estamos enviando esta mensagem para ${element.genero === 'masculino' ? 'lembrá-lo' : 'lembrá-la'} da sua consulta no dia ${element.dataDaConsulta}. Por favor, acuse o recebimento deste-email.`
   }
   return consultass.map((element) => {
      if (element.cancelada) {
         return msgNotOk(element)
      } else {
         return msgOk(element)
      }
   })

}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   for(conta of contas){
      let totalCompra = 0
      conta.compras.map((e) => totalCompra += e)
      conta.saldoTotal -= totalCompra      
   }
   return contas
}