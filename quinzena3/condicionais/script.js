/**
 * Exercicio 1
 */

// Pega o valor respostaDoUsuario pelo prompt
// Transforma o valor em um number
// Faz um if com resto 2 === 0 se for verdade, ele passa, se nao ele n passa

/**
 * Exercicio 2
 */

// O Codigo serve para armazenar o valor da fruta em uma variavel, dependendo do "caso" da fruta
//  "O preço da fruta Maçã é R$ 2.25"

/**
 * Exercicio 3
 */

// A Primeira linha esta pegando o valor da variavel pelo prompt e transformando ela em number
// se digitar 10 "Esse numero passou no teste" "undefined", senão "undefined"
// O let não foge do escopo do if, então da ruim

/**
 * Exercicio 4
 */

const idadeUsuario = Number(prompt('Digite sua idade'))
if(idadeUsuario >= 18){
    console.log('Você pode digirig')
}else{
    console.log('Você não pode dirigir')
}

/**
 * Exercicio 5
 */
switch(idadeUsuario >= 18){
    case  true:
        console.log('Você pode digirig')
        break
    
    case false:
        console.log('Você não pode dirigir')
}

/**
 * Exercicio 6
 */

const generoFilme = prompt('Qual genero de filme')
const valorIngresso = Number(prompt('Preço do ingresso'))

if(generoFilme === 'fantasia' && valorIngresso <= 15){
    const snack = prompt('Qual snack vc vai comprar ?')
    console.log('Bom filme' + ' com ' + snack)
}else{
    console.log('Escolha outro filme :(')
}


/**
 * Extra 2
 */




const nomdeDoCliente = prompt('Nome Completo')
const tipoDeJogo = prompt('Tipo de jogo \n IN - Internacional\n DO Nacional')
const etapaDoJogo= prompt('Etapa do jogo\n SF - Semi-final\n DT - Decisão de terceiro lugar\nFI - final')
const categoria = prompt('Categoria\n 1 - 2 - 3 - 4')
const quantidadePessoas = prompt('Quantidade de pessoas')
const valorDolar = 4.10


console.log('---Dados da compra---')
console.log('Nome do cliente:', nomdeDoCliente)

switch(tipoDeJogo){
    case 'IN':
        console.log('Tipo do jogo:  Internacional')
        break;
    case 'DO':
        console.log('Tipo do jogo:  Nacional')
        break;    
}

switch(etapaDoJogo){
    case 'SF':
        console.log('Etapa do jogo:  Semi Final')        
        break;
    case 'DT':
        console.log('Etapa do jogo:  Decisão de terceiro')
        break;    
    case 'FI':
        console.log('Etapa do jogo:  Final')
        break;    
}

console.log('Categoria:', categoria)
console.log('Quantidade de ingressos', quantidadePessoas)

console.log('---Valores---')

if(tipoDeJogo === 'IN'){
    
    if(etapaDoJogo === 'SF'){
        
        switch(categoria){
            case '1':
                console.log('Valor do ingresso R$', (1320 * valorDolar))
                console.log('Valor total:',(1320 * valorDolar) * quantidadePessoas)
            break;    
            case '2':
                console.log('Valor do ingresso R$', (880 * valorDolar)  )
                console.log('Valor total:',(880 * valorDolar) * quantidadePessoas)
            break;  
            case '3':
                console.log('Valor do ingresso R$', (550 * valorDolar)  )
                console.log('Valor total:',(550 * valorDolar) * quantidadePessoas)
            break;  

            case '4':
                console.log('Valor do ingresso R$', (220 * valorDolar)  )
                console.log('Valor total:',(220 * valorDolar) * quantidadePessoas)
            break;  
        }
    }else if(etapaDoJogo === 'DT'){
        
        switch(categoria){
            case '1':
                console.log('Valor do ingresso R$', (660 * valorDolar)  )
                console.log('Valor total:',(660 * valorDolar) * quantidadePessoas)
            break;    
            case '2':
                console.log('Valor do ingresso R$', (440 * valorDolar)   )
                console.log('Valor total:',(440 * valorDolar) * quantidadePessoas)
            break;  
            case '3':
                console.log('Valor do ingresso R$', (330 * valorDolar) )
                console.log('Valor total:', (330 * valorDolar) * quantidadePessoas)
            break;  

            case '4':
                console.log('Valor do ingresso R$', (170 * valorDolar) )
                console.log('Valor total:', (170 * valorDolar) * quantidadePessoas)
            break;  
        }
    }else if(etapaDoJogo === 'FI'){
        
        switch(categoria){
            case '1':
                console.log('Valor do ingresso R$', (1980 * valorDolar)  )
                console.log('Valor total:',(1980 * valorDolar) * quantidadePessoas)
            break;    
            case '2':
                console.log('Valor do ingresso R$', (1320 * valorDolar)  )
                console.log('Valor total:',(1320 * valorDolar) * quantidadePessoas)
            break;  
            case '3':
                console.log('Valor do ingresso R$', (880 * valorDolar) )
                console.log('Valor total:',(880 * valorDolar) * quantidadePessoas)
            break;  

            case '4':
                console.log('Valor do ingresso R$', (330 * valorDolar) * quantidadePessoas )
                console.log('Valor total:', (330 * valorDolar) * quantidadePessoas)
            break; 
        } 
    }
}else{
    if(etapaDoJogo === 'SF'){
        switch(categoria){
            case '1':
                console.log('Valor do ingresso R$', 320   )
                console.log('Valor total:',320  * quantidadePessoas)
            break;    
            case '2':
                console.log('Valor do ingresso R$',880   )
                console.log('Valor total:',880  * quantidadePessoas)
            break;  
            case '3':
                console.log('Valor do ingresso R$',550   )
                console.log('Valor total:',550  * quantidadePessoas)
            break;  

            case '4':
                console.log('Valor do ingresso R$',220   )
                console.log('Valor total:',220  * quantidadePessoas)
            break;  
        }
    }else if(etapaDoJogo === 'DT'){
        switch(categoria){
            case '1':
                console.log('Valor do ingresso R$',660   )
                console.log('Valor total:',660  * quantidadePessoas)
            break;    
            case '2':
                console.log('Valor do ingresso R$',440   )
                console.log('Valor total:',440  * quantidadePessoas)
            break;  
            case '3':
                console.log('Valor do ingresso R$',330   )
                console.log('Valor total:',330  * quantidadePessoas)
            break;  

            case '4':
                console.log('Valor do ingresso R$',170   )
                console.log('Valor total:',170  * quantidadePessoas)
            break;  
        }
    }else if(etapaDoJogo === 'FI'){
        switch(categoria){
            case '1':
                console.log('Valor do ingresso R$', 980  )
                console.log('Valor total:',980  * quantidadePessoas)
            break;    
            case '2':
                console.log('Valor do ingresso R$', 320   )
                console.log('Valor total:',320  * quantidadePessoas)
            break;  
            case '3':
                console.log('Valor do ingresso R$',880   )
                console.log('Valor total:',880  * quantidadePessoas)
            break;  

            case '4':
                console.log('Valor do ingresso R$',330  * quantidadePessoas )
                console.log('Valor total:',330  * quantidadePessoas)
            break;  
        }
    }
}

