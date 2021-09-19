/* selection */
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');
const linksTriangle = document.querySelector('.nav-links-triangle');
/* event handler for toggle btn */
toggleBtn.addEventListener('click',()=>{
 navLinks.classList.toggle('nav-links-open')
 toggleBtn.classList.toggle('rotate-toggle-btn')
 /* nav links top decoration */
 if(!navLinks.classList.contains('nav-links-open')){
  linksTriangle.style.right = '-80vw'
 } else{
  linksTriangle.style.right = '10vw'
 }
})