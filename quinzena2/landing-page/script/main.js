import { getOneEl, getAllEl, addClassActive, removeClassActive, toggleClassActive, addClass, removeClass } from './functions.js'
import { scrollPage } from './scroll.js'


// Svg do Logo main
const mainCubicCenter = getOneEl('#mainCubicCenter')
const mainCubicRightUp = getOneEl('#mainCubicRightUp')
const mainCubicLeftUp = getOneEl('#mainCubicLeftUp')
const mainCubicRightDown = getOneEl('#mainCubicRightDown')
const mainCubicLeftDown = getOneEl('#mainCubicLeftDown')
const mainLogoWord = getOneEl('#mainLogoWord')
const subMainLogoWord = getOneEl('#subMainLogoWord')
const logoHeader = getOneEl('#logoHeader')

// Conteudos do Header
const headerBtn = getOneEl('#headerBtn')
const headerHamburguer = getOneEl('#headerHamburguer')
const header = getOneEl('#header')
const headerLogo = getOneEl('#headerLogo')
const headerButtonOne = getOneEl('#headerButtonOne')
const headerButtonTwo = getOneEl('#headerButtonTwo')
const headerButtonThree = getOneEl('#headerButtonThree')
const buttonOne = getOneEl('#buttonOne')
const buttonTwo = getOneEl('#buttonTwo')
const buttonThree = getOneEl('#buttonThree')

// Bg
const bgSejaOQueDeusQuiser = getOneEl('#bgSejaOQueDeusQuiser')

// --------------------------
// Conteudos da Primeira Tela
// --------------------------

const imgPhone = getOneEl('#imgPhone')
const boxContainer = getOneEl('#boxContainer')
const screenOneButtonOne = getOneEl('#screenOneButtonOne')
const screenOneButtonTwo = getOneEl('#screenOneButtonTwo')
const screenOneBaixe = getOneEl('#screenOneBaixe')
const screenOneLine = getOneEl('#screenOneLine')
const screenOneEmphasis = getOneEl('#screenOneEmphasis')

// --------------------------
// Conteudos da Terceira Tela
// --------------------------

// Quadrados atraz do box
const boxBg = getAllEl('.box-bg')

// -------------------------
// Primeiro Card da Screen 3
// -------------------------

const screnThreeCadrOne = getOneEl('#screnThreeCadrOne')
const screenThreeContainerImageOne = getAllEl('#screenThreeContainerImageOne .screenThreeCardOneImg')
const screenThreeBoxOne = getOneEl('#screenThreeBoxOne')

// Itens a serem mudados Por Click
const screenThreeCardBallsOne = getAllEl('#screenThreeCardBallsOne div')
const screenThreeCardOneWords = getAllEl('#screenThreeBoxOne .screen-three-card-p')
const scrennThreeCardBoxTitleOne = getAllEl('#scrennThreeCardBoxTitleOne .screen-three-card-title')

// Arrows
const screenThreeArrowLeftOne = getOneEl('#screenThreeArrowLeftOne')
const screenThreeArrowRightOne = getOneEl('#screenThreeArrowRightOne')


const boxBackFisrtOne = getOneEl('#screnThreeCadrOne .up-left')
const boxBackFisrtTwo = getOneEl('#screnThreeCadrOne .up-right')
const boxBackFisrtThree = getOneEl('#screnThreeCadrOne .down-left')
const boxBackFisrtFour = getOneEl('#screnThreeCadrOne .down-right')

// ------------------------
// Segundo Card da Screen 3
// -------------------------

const screnThreeCadrTwo = getOneEl('#screnThreeCadrTwo')
const screenThreeContainerImageTwo = getAllEl('#screenThreeContainerImageTwo .screenThreeCardOneImg')
const screenThreeBoxTwo = getOneEl('#screenThreeBoxTwo')

// Itens a serem mudados Por Click
const screenThreeCardBallsTwo = getAllEl('#screenThreeCardBallsTwo div')
const screenThreeCardTwoWords = getAllEl('#screenThreeBoxTwo .screen-three-card-p')
const scrennThreeCardBoxTitleTwo = getAllEl('#scrennThreeCardBoxTitleTwo .screen-three-card-title')

// Arrows
const screenThreeArrowLeftTwo = getOneEl('#screenThreeArrowLeftTwo')
const screenThreeArrowRightTwo = getOneEl('#screenThreeArrowRightTwo')


const boxBackSecondOne = getOneEl('#screnThreeCadrTwo .up-left')
const boxBackSecondTwo = getOneEl('#screnThreeCadrTwo .up-right')
const boxBackSecondThree = getOneEl('#screnThreeCadrTwo .down-left')
const boxBackSecondFour = getOneEl('#screnThreeCadrTwo .down-right')

// ------------------------
// Terceiro Card da Screen 3
// -------------------------

const screnThreeCadrThree = getOneEl('#screnThreeCadrThree')
const screenThreeContainerImageThree = getAllEl('#screenThreeContainerImageThree .screenThreeCardOneImg')
const screenThreeBoxThree = getOneEl('#screenThreeBoxThree')


// Itens a serem mudados Por Click
const screenThreeCardBallsThree = getAllEl('#screenThreeCardBallsThree div')
const screenThreeCardThreeWords = getAllEl('#screenThreeBoxThree .screen-three-card-p')
const scrennThreeCardBoxTitleThree = getAllEl('#scrennThreeCardBoxTitleThree .screen-three-card-title')

// Arrows
const screenThreeArrowLeftThree = getOneEl('#screenThreeArrowLeftThree')
const screenThreeArrowRightThree = getOneEl('#screenThreeArrowRightThree')

const boxBackThirddOne = getOneEl('#screnThreeCadrThree .up-left')
const boxBackThirddTwo = getOneEl('#screnThreeCadrThree .up-right')
const boxBackThirddThree = getOneEl('#screnThreeCadrThree .down-left')
const boxBackThirddFour = getOneEl('#screnThreeCadrThree .down-right')

//  Entradas do Logo main
const timeToEnter = 500
addClass(mainCubicCenter, 'show')
setTimeout(function() { addClass(mainCubicRightUp, 'show') }, timeToEnter * 1.2)
setTimeout(function() { addClass(mainCubicLeftUp, 'show') }, timeToEnter * 1.5)
setTimeout(function() { addClass(mainCubicRightDown, 'show') }, timeToEnter * 2)
setTimeout(function() { addClass(mainCubicLeftDown, 'show') }, timeToEnter * 2.5)
setTimeout(function() { addClass(mainLogoWord, 'word-active') }, timeToEnter * 2)
setTimeout(function() { addClass(subMainLogoWord, 'word-active') }, timeToEnter * 2.6)
setTimeout(function() { addClass(logoHeader, 'opacity') }, timeToEnter * 5)

// Entradas da Section One
setTimeout(function() { addClassActive(imgPhone) }, timeToEnter * 5)
setTimeout(function() { addClassActive(boxContainer) }, timeToEnter * 5.5)
setTimeout(function() { addClassActive(screenOneButtonOne) }, timeToEnter * 6)
setTimeout(function() { addClassActive(screenOneButtonTwo) }, timeToEnter * 6.5)
setTimeout(function() { addClassActive(screenOneLine) }, timeToEnter * 7)
setTimeout(function() { addClassActive(screenOneBaixe) }, timeToEnter * 7.5)
setTimeout(function() { addClassActive(screenOneEmphasis) }, timeToEnter * 8)

// entradas do Header
setTimeout(function() { addClassActive(header) }, timeToEnter * 8.5)
setTimeout(function() { addClassActive(headerHamburguer) }, timeToEnter * 9)
setTimeout(function() { addClassActive(headerLogo) }, timeToEnter * 9)
setTimeout(function() { addClassActive(headerButtonOne) }, timeToEnter * 9.5)
setTimeout(function() { addClassActive(headerButtonTwo) }, timeToEnter * 10)
setTimeout(function() { addClassActive(headerButtonThree) }, timeToEnter * 10.5)



// Click no menu Hamburguer(mobile)
headerHamburguer.addEventListener('click', () => toggleClassActive(headerBtn))

// Esta ScrollPage esta em um arquivo separado
buttonOne.addEventListener('click', scrollPage(buttonOne))
buttonTwo.addEventListener('click', scrollPage(buttonTwo))
buttonThree.addEventListener('click', scrollPage(buttonThree))

// Parallax do bg
document.addEventListener('mousemove', (e) => {

    const x = (window.innerWidth - e.pageX) / 10
    const y = (window.innerHeight - e.pageY) / 10
    bgSejaOQueDeusQuiser.style.transform = `translateX(${x}px) translateY(${y}px)`
        // boxBg.style.transform = `translateX(${x}px) translateY(${y}px)`
        // boxBg.forEach(box => box.style.transform = `translateX(${x}px) translateY(${y}px)`)
})

//  -------------------------------------
// Eventos de clique nos CardsScreenThree
//  -------------------------------------

// Card One
let screenThreeCardsOneActive = 0
screenThreeArrowLeftOne.addEventListener('click', () => {
    screenThreeContainerImageOne.forEach(item => removeClassActive(item))
    scrennThreeCardBoxTitleOne.forEach(item => removeClassActive(item))
    screenThreeCardBallsOne.forEach((ball) => removeClassActive(ball))
    screenThreeCardOneWords.forEach((iten) => removeClassActive(iten))
    screenThreeCardsOneActive--
    if (screenThreeCardsOneActive < 0) {
        screenThreeCardsOneActive = screenThreeCardBallsOne.length - 1
    }

    addClassActive(screenThreeContainerImageOne[screenThreeCardsOneActive])
    addClassActive(scrennThreeCardBoxTitleOne[screenThreeCardsOneActive])
    addClassActive(screenThreeCardOneWords[[screenThreeCardsOneActive]])
    addClassActive(screenThreeCardBallsOne[screenThreeCardsOneActive])

})

screenThreeArrowRightOne.addEventListener('click', () => {
    screenThreeContainerImageOne.forEach(item => removeClassActive(item))
    scrennThreeCardBoxTitleOne.forEach(item => removeClassActive(item))
    screenThreeCardBallsOne.forEach((ball) => removeClassActive(ball))
    screenThreeCardOneWords.forEach((iten) => removeClassActive(iten))
    screenThreeCardsOneActive++
    if (screenThreeCardsOneActive > screenThreeCardBallsOne.length - 1) {
        screenThreeCardsOneActive = 0
    }
    addClassActive(screenThreeContainerImageOne[screenThreeCardsOneActive])
    addClassActive(scrennThreeCardBoxTitleOne[screenThreeCardsOneActive])
    addClassActive(screenThreeCardOneWords[[screenThreeCardsOneActive]])
    addClassActive(screenThreeCardBallsOne[screenThreeCardsOneActive])
})

// Card Two
let screenThreeCardsTwoActive = 0
screenThreeArrowLeftTwo.addEventListener('click', () => {
    screenThreeContainerImageTwo.forEach(item => removeClassActive(item))
    scrennThreeCardBoxTitleTwo.forEach(item => removeClassActive(item))
    screenThreeCardBallsTwo.forEach((ball) => removeClassActive(ball))
    screenThreeCardTwoWords.forEach((iten) => removeClassActive(iten))
    screenThreeCardsTwoActive--
    if (screenThreeCardsTwoActive < 0) {
        screenThreeCardsTwoActive = screenThreeCardBallsTwo.length - 1
    }

    addClassActive(screenThreeContainerImageTwo[screenThreeCardsTwoActive])
    addClassActive(scrennThreeCardBoxTitleTwo[screenThreeCardsTwoActive])
    addClassActive(screenThreeCardTwoWords[[screenThreeCardsTwoActive]])
    addClassActive(screenThreeCardBallsTwo[screenThreeCardsTwoActive])

})

screenThreeArrowRightTwo.addEventListener('click', () => {
    screenThreeContainerImageTwo.forEach(item => removeClassActive(item))
    scrennThreeCardBoxTitleTwo.forEach(item => removeClassActive(item))
    screenThreeCardBallsTwo.forEach((ball) => removeClassActive(ball))
    screenThreeCardTwoWords.forEach((iten) => removeClassActive(iten))
    screenThreeCardsTwoActive++
    if (screenThreeCardsTwoActive > screenThreeCardBallsTwo.length - 1) {
        screenThreeCardsTwoActive = 0
    }
    addClassActive(screenThreeContainerImageTwo[screenThreeCardsTwoActive])
    addClassActive(scrennThreeCardBoxTitleTwo[screenThreeCardsTwoActive])
    addClassActive(screenThreeCardTwoWords[[screenThreeCardsTwoActive]])
    addClassActive(screenThreeCardBallsTwo[screenThreeCardsTwoActive])
})

// Card Three
let screenThreeCardsThreeActive = 0
screenThreeArrowLeftThree.addEventListener('click', () => {
    screenThreeContainerImageThree.forEach(item => removeClassActive(item))
    scrennThreeCardBoxTitleThree.forEach(item => removeClassActive(item))
    screenThreeCardBallsThree.forEach((ball) => removeClassActive(ball))
    screenThreeCardThreeWords.forEach((iten) => removeClassActive(iten))
    screenThreeCardsThreeActive--
    if (screenThreeCardsThreeActive < 0) {
        screenThreeCardsThreeActive = screenThreeCardBallsThree.length - 1
    }

    addClassActive(screenThreeContainerImageThree[screenThreeCardsThreeActive])
    addClassActive(scrennThreeCardBoxTitleThree[screenThreeCardsThreeActive])
    addClassActive(screenThreeCardThreeWords[[screenThreeCardsThreeActive]])
    addClassActive(screenThreeCardBallsThree[screenThreeCardsThreeActive])

})

screenThreeArrowRightThree.addEventListener('click', () => {
    screenThreeContainerImageThree.forEach(item => removeClassActive(item))
    scrennThreeCardBoxTitleThree.forEach(item => removeClassActive(item))
    screenThreeCardBallsThree.forEach((ball) => removeClassActive(ball))
    screenThreeCardThreeWords.forEach((iten) => removeClassActive(iten))
    screenThreeCardsThreeActive++
    if (screenThreeCardsThreeActive > screenThreeCardBallsThree.length - 1) {
        screenThreeCardsThreeActive = 0
    }
    addClassActive(screenThreeContainerImageThree[screenThreeCardsThreeActive])
    addClassActive(scrennThreeCardBoxTitleThree[screenThreeCardsThreeActive])
    addClassActive(screenThreeCardThreeWords[[screenThreeCardsThreeActive]])
    addClassActive(screenThreeCardBallsThree[screenThreeCardsThreeActive])
})



let lastScroolTop = 0 // Vai servir para ver se o menu foi scrollado
window.addEventListener('scroll', () => {
    let scrollTop = pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScroolTop) {
        header.style.top = '-200px'
        removeClassActive(headerBtn)
    } else {
        header.style.top = '0'
    }

    // Parallax da screen 1
    boxContainer.style.transform = `translateY(${lastScroolTop * .1}px)`

    // Parallax da screen 3
    if (screen.width > 1000) {

        // Card One
        if (screnThreeCadrOne.getBoundingClientRect().top < lastScroolTop) {

            screenThreeBoxOne.style.transform = ` translateX(${lastScroolTop * .15}px) `
            boxBackFisrtOne.style.transform = ` translateX(${lastScroolTop * .045}px) `
            boxBackFisrtTwo.style.transform = ` translateX(${lastScroolTop * .05}px) `
            boxBackFisrtThree.style.transform = ` translateX(${lastScroolTop * .04}px) `
            boxBackFisrtFour.style.transform = ` translateX(${lastScroolTop * .08}px) `
        }

        // Card Two
        if (screnThreeCadrTwo.getBoundingClientRect().top < lastScroolTop) {


            screenThreeBoxTwo.style.transform = ` translateX(-${lastScroolTop * .15}px) `

            boxBackSecondOne.style.transform = ` translateX(-${lastScroolTop * .13}px) `
            boxBackSecondTwo.style.transform = ` translateX(-${lastScroolTop * .15}px) `
            boxBackSecondThree.style.transform = ` translateX(-${lastScroolTop * .17}px) `
            boxBackSecondFour.style.transform = ` translateX(-${lastScroolTop * .16}px) `
        }

        //  Card Three
        if (screnThreeCadrThree.getBoundingClientRect().top < lastScroolTop) {



            screenThreeBoxThree.style.transform = ` translateX(${lastScroolTop * .05}px) `


            boxBackThirddOne.style.transform = ` translateX(${lastScroolTop * .013}px) `
            boxBackThirddTwo.style.transform = ` translateX(${lastScroolTop * .015}px) `
            boxBackThirddThree.style.transform = ` translateX(${lastScroolTop * .017}px) `
            boxBackThirddFour.style.transform = ` translateX(${lastScroolTop * .016}px) `
        }

    }

    // Tem que ser a ultima
    lastScroolTop = scrollTop
})