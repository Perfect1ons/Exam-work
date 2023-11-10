var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    scrollbar: {
        el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 100
      },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


