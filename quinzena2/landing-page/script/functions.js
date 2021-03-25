// Pegando os Elementos
export const getAllEl = element => document.querySelectorAll(element)

export const getOneEl = element => document.querySelector(element)

// Dando e tirando class active
export const addClassActive = element => element.classList.add('active')

export const removeClassActive = element => element.classList.remove('active')

export const toggleClassActive = element => element.classList.toggle('active')


// Dando e tirando qualquer Classe
export const addClass = (element, className) => element.classList.add(className)

export const removeClass = (element, className) => element.classList.remove(className)