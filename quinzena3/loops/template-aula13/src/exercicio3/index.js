// Este array será usado para exemplificar as respostas de todos os itens
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let index = 0; index < array.length; index++){
    console.log(array[index])
}

for(let index = 0; index < array.length; index++){
    console.log(array[index] / 10)
}

const arrayPar = []

for(let index = 0; index < array.length; index++){
    if(array[index] % 2 == 0){
        arrayPar.push(array)
    }
}

console.log(array)

for(let index = 0; index < array.length; index++){
    console.log(`O elemento de index ${index} é ${array[index]}`)
}

let valorMaximo = array[0]
let valorMinimo = array[0]

for(let index = 0; index < array.length; index++){
    if(array[index] < valorMinimo){
        valorMinimo = array[index]
    }

    if(array[index] > valorMaximo){
        valorMaximo = array[index]
    }
}

console.log(`O maior numero é ${valorMaximo} e o menor é ${valorMinimo}`)