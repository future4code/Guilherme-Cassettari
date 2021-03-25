import { getOneEl, getAllEl, addClassActive, removeClassActive, toggleClassActive, addClass, removeClass } from './functions.js'



// Svg do Logo main
const mainCubicCenter = getOneEl('#mainCubicCenter')
const mainCubicRightUp = getOneEl('#mainCubicRightUp')
const mainCubicLeftUp = getOneEl('#mainCubicLeftUp')
const mainCubicRightDown = getOneEl('#mainCubicRightDown')
const mainCubicLeftDown = getOneEl('#mainCubicLeftDown')
const mainLogoWord = getOneEl('#mainLogoWord')
const subMainLogoWord = getOneEl('#subMainLogoWord')
const logoHeader = getOneEl('#logoHeader')

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