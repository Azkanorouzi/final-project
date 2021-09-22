/* selection */
 const toggleBtn=document.querySelector('.toggle');
 const navLinks=document.querySelector('.nav-links');
toggleBtnOpen = false;
/* event handler for toggle btn */
toggleBtn.onclick=function(){
 navLinks.classList.toggle('nav-links-open')
 if(toggleBtnOpen === false){
  /* toggle */
  toggleBtn.style.transform = "rotate(90deg)"
  toggleBtnOpen = true;
 }
 else{
  toggleBtn.style.transform = "rotate(0deg)"
  toggleBtnOpen =false;
 }
}
 /* nav links top decoration */
