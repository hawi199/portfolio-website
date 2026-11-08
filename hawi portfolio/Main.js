let menuIcon=document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top=window.scrollY;
    let offset = sec.offsetTop - 150;
    let height =sec.offsetHeight;
    let id= sec.getAttribute('id');
  });


    if(top >= offset && top <  offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
      });

      let currentLink = document.querySelector('header nav a[href*="' + id + '"]');
      
      if(currentLink) {
        currentLink.classList.add('active');
        }
      };
  };
// menu open and close
menuIcon.onclick=()=>{
  menuIcon.classList.toggle('ri-menu-line');
  menuIcon.classList.toggle('ri-close-line');
  navbar.classList.toggle('active');
  };


// Close menu after clicking a navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('ri-close-line');
        menuIcon.classList.add('ri-menu-line');
        menuIcon.classList.remove('active');

    });
});