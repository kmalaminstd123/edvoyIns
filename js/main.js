
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

// offcanvas update fee js

document.querySelector('.filter-fee-range').addEventListener('input', e =>{
    updateFeeValue(e.target.value)
})

function updateFeeValue(val) {
    // You can later connect this with real min/max logic if needed
    document.getElementById("minFee").innerText = "500";
    document.getElementById("maxFee").innerText = val;
}