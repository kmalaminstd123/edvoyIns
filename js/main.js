
// navbar js
const navbar = document.querySelector('.nav-desn')
const navbarForm = document.querySelector('.nav-form')

window.addEventListener('scroll', e=>{
    
    if(window.scrollY >= 500){
        navbar.classList.add('navbar-scroll')
        navbarForm.style.display = 'block'
        navbarForm.style.transition = 'all 0.5s linear'
    }else{
        navbar.classList.remove('navbar-scroll')
        navbarForm.style.display = 'none'
        navbarForm.style.transition = 'all 0.5s linear'
    }
    
})


// aos initialization
AOS.init()
