var type = new Typed(".multiple-text", {
  strings: [
    "Freelancer",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Coder",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
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

//top progress bar
const body = document.querySelector(".main");
const progressBartop = document.querySelector(".top_progress_bar");

const onscroll = () => {
  let scrollDist = -body.getBoundingClientRect().top;
  let progresswidth =
    (scrollDist /
      (body.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
      100 +
    1;
  let value = Math.floor(progresswidth);
  progressBartop.style.width = value + "%";
};

window.addEventListener("scroll", onscroll);
