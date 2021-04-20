/**
 * 
 * 1 - Extraia o `[blog.zip](http://blog.zip)` para dentro da pasta `blog`,
 *  garanta que o arquivo JS está linkado com o arquivo HTML.

2 - Capture os valores dos campos do HTML e crie um objeto para armazenar as informações do seu post, 
possuindo as mesmas propriedades que serão preenchidas no formulário.

3 - Ao preencher o formulário, adicione o objeto criado no passo acima a 
um array de objetos e limpe os campos do formulário. Para testar, faça com que o 
array seja impresso no console.

4 - **Na mesma página**, crie uma seção no HTML que será responsável por 
mostrar os posts. Pode ser uma div ou uma section, por exemplo.

5 - Crie uma função responsável por inserir os posts no HTML. 
Não se preocupe com a aparência, garanta que os dados estão sendo exibidos.
 */



const tituloPost = document.querySelector('#titulo-post')
const autorPost = document.querySelector('#autor-post')
const conteudoPost = document.querySelector('#conteudo-post')
const containerDePosts = document.querySelector('#container-de-posts')

const createObject = (titulo, autor, conteudo) => {
    return {
        tituloPost: titulo,
        autorPost: autor,
        conteudoPost: conteudo
    }
}

const arrayDePost = []

const criarPost = () => {
    arrayDePost.push(createObject(tituloPost.value, autorPost.value, conteudoPost.value))
    tituloPost.value = ''
    autorPost.value = ''
    conteudoPost.value = ''
    

    containerDePosts.innerHTML = arrayDePost.map(e => {
        return `<h1>Titulo: ${e.tituloPost}</h1> <h3>Autor: ${e.autorPost}</h3> <p>Conteudo: ${e.conteudoPost}<p> <br>`
    })
    // containerDePosts.innerHTML += 
}