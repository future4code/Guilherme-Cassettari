export const scrollPage = (element) => (event) => {
    event.preventDefault()
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop


    window.scroll({
        top: to,
        behavior: "smooth",
    })
}