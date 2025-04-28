
// navbar js
const navbar = document.querySelector('.nav-desn')

window.addEventListener('scroll', e=>{
    
    if(window.scrollY >= 500){
        navbar.classList.add('navbar-scroll')
    }else{
        navbar.classList.remove('navbar-scroll')
    }
    
})


// aos initialization
AOS.init()