//navbar fixed
window.onscroll = function(){
    const header = document.querySelector("header")
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed")
    } else {
        header.classList.remove("navbar-fixed")
    }
}


//hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("hamburger-active")
    navMenu.classList.toggle("hidden")
});

// window

window.addEventListener ("click" ,function (e) {
    if (e.target !=hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

//toggle dark
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click' , function(){
    darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark')
    darkToggle.checked ? localStorage.theme = 'dark' : localStorage.theme = 'light'
} )
//
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
    } else {
    darkToggle.checked = false
  }