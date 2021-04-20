const querySelect = (query) => document.querySelector(query)

const form = querySelect('#tarefa')
const days = querySelect('#dias-semana')

const domingo = querySelect('#domingo')
const segunda = querySelect('#segunda')
const terca = querySelect('#terca')
const quarta = querySelect('#quarta')
const quinta = querySelect('#quinta')
const sexta = querySelect('#sexta')
const sabado = querySelect('#sabado')


const limparTudo = () => {

    domingo.innerHTML = ''
    segunda.innerHTML = ''
    terca.innerHTML = ''
    quarta.innerHTML = ''
    quinta.innerHTML = ''
    sexta.innerHTML = ''
    sabado.innerHTML = ''
    domingo.innerHTML = ''
}


const criarTarefa = () => {

    if (form.value == '') {
        return alert('Tem que digitar algo')
    }

    switch (days.value) {
        case 'domingo':
            domingo.innerHTML += `<p onclick="mirisca()">${form.value}<br></p>`
            break
        case 'segunda':
            segunda.innerHTML += `<p onclick="mirisca()">${form.value}<br></p>`
            break
        case 'terca':
            terca.innerHTML += `<p onclick="mirisca()">${form.value}<br></p>`
            break
        case 'quarta':
            quarta.innerHTML += `<p onclick="mirisca()">${form.value}<br></p>`
            break
        case 'quinta':
            quinta.innerHTML += `<p onclick="mirisca()">${form.value}<br></p>`
            break
        case 'sexta':
            sexta.innerHTML += `<p onclick="mirisca()">${form.value}<br></p>`
            break
        case 'sabado':
            sabado.innerHTML += `<p onclick="mirisca()">${form.value}<br></p>`
            break

            break
        default:
            console.log('error')
    }

    form.value = ''
}

const mirisca = () => {
    console.log("risca")
}