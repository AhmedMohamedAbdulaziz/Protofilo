let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navBar');

menuIcon.onclick=()=> {
     menuIcon.classList.toggle('bx-x')
     navbar.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
     const sr = ScrollReveal({
       origin: 'top',
       distance: '60px',
       duration: 2000,
       delay: 200,
     });
   
     sr.reveal('.home-content, .about-img, .heading, .about-content');
     sr.reveal('.home-img', { delay: 400 });
     sr.reveal('.social-icons a', { interval: 200 });
     sr.reveal('.service-box, .project-card, .input-box, .input-group-2', { interval: 200 });
   });
   
