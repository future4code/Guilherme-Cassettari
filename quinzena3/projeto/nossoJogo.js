/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const cartaUsuario = []
let cartasUsuaio = ''
let resultadoUsuario = 0

const cartaComputador = []
let cartasComputador = ''
let resultadoComputador = 0
if(confirm("Vamos Jogar?")){

   cartaUsuario.push(comprarCarta())
   cartaUsuario.push(comprarCarta())
   cartaComputador.push(comprarCarta())
   cartaComputador.push(comprarCarta())


   cartaUsuario.forEach((cartas, index)=> {
      cartasUsuaio += cartas.texto + " "
      resultadoUsuario += cartas.valor
   })
   cartaComputador.forEach((cartas, index)=> {
      cartasComputador += cartas.texto + " "
      resultadoComputador += cartas.valor
   })

   console.log(`Usuario - cartas: ${cartasUsuaio}`)
   console.log(`Computador - cartas: ${cartasComputador}`)

   if(resultadoComputador === resultadoUsuario){
      console.log('Empate')
   }else if(resultadoUsuario > resultadoComputador){
      console.log('O usuario ganhou')
   }else{
      console.log('O computador ganhou')
   }

}else{
   console.log("tenha uma ótima vida")
}