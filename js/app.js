const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.links');
const links = document.querySelectorAll('.links li');
const toTop = document.querySelector('.to-top');

burger.addEventListener("click", () => {
    navLinks.classList.toggle('active');
    //the Links Fade
    links.forEach(link => {
        link.classList.toggle('fade');
    });
    //the X transition
    burger.classList.toggle('toggle');
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
//to top button
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('go');
    } else {
        toTop.classList.remove('go');
    }
})