export function getAllEl(element) {
    const el = document.querySelectorAll(element)
}

export function getOneEl(element) {
    const el = document.querySelector(element)
    return el
}

export function addClassActive(element) {
    element.classList.add('active')
}

export function removeClassActive(element) {
    element.classList.remove('active')
}

export function toggleClassActive(element) {
    element.classList.toggle('active')
}