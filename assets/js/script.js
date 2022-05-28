'use strict';

// Preloader
const loader = document.querySelector('.preloader');

window.addEventListener('load', function() {
        setTimeout(function() {
            loader.style.display = 'none';
        }, 2000);
    })
    //element to toggle function

//const elemToggleFun = function(elem) {
//   elem.classList.toggle("active");
//}

let navbar = document.querySelector(".navbar");
let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".nav-close-btn");
let navbarList = document.querySelector('.navbar-list');
let overLay = document.querySelector('.overlay');

//clicking the link to harmbuger to open the navbar
openBtn.addEventListener('click', () => {
    navbar.classList.add('active')
    overLay.classList.add('active')
    closeBtn.classList.remove('active');
});


//clicking the closeBtn  icon to close the navbar
closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active')
    overLay.classList.toggle('active')

});


//clicking the link to close the navbar
navbarList.addEventListener('click', () => {
    navbar.classList.remove('active')
    overLay.classList.toggle('active')

})

//clicking the any link to close the navbar
overLay.addEventListener('click', () => {
    overLay.classList.toggle('active')
    navbar.classList.remove('active')

});

// header on window fixed


const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    this.scrollY >= 400 ? header.classList.add('active') : header.classList.remove('active');
})