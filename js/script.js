const navToggler = document.querySelector('.nav-toggler');
const mobileOverlay = document.querySelector('.mobile-overlay');
const backButton = document.querySelector('.menu-logo');
navToggler.addEventListener('click', navToggle);
backButton.addEventListener('click', toggleBack);
function navToggle() {
    mobileOverlay.classList.toggle('active');
    // document.getElementsByTagName("body")[0].style.visibility = "hidden";
    

}
function toggleBack() {
    mobileOverlay.classList.remove('active');
    
 }