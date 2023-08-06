var type = new Typed(".multiple-text",{
    strings:["Frontend Developer","Backend Developer","Fullstack Developer","Coder"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
})
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });









