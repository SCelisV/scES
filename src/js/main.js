console.log("hello world")
    // cuando haga click en el boton del menu
document.querySelector('.menu-btn').addEventListener('click', () => {
    // console.log("click")
    document.querySelector('.nav-menu').classList.toggle('show')

})

ScrollReveal().reveal('.Box');
ScrollReveal().reveal('.cards', { delay: 500 });