'use strict';

(function () {
  let slides = document.querySelectorAll(".page-slider__slide");
  let dot = document.querySelectorAll(".page-slider__dot");
  let dotsWrap = document.querySelector(".page-slider__dots");

  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 7000);

  dotsWrap.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("page-slider__dot")) {
      clearTimeout(slideInterval);
      for (let i = 0; i < slides.length; i++) {
        slides[i].className = "page-slider__slide";
        dot[i].className = "page-slider__dot";
      }
      currentSlide = target.dataset.dot - 1;
      slides[currentSlide].className = 'page-slider__slide page-slider__slide--showing';
      dot[currentSlide].className = 'page-slider__dot page-slider__dot--active';
    }

    slideInterval = setInterval(nextSlide, 7000);
  })



  function nextSlide() {
    slides[currentSlide].className = 'page-slider__slide';
    dot[currentSlide].className = 'page-slider__dot';
    currentSlide = ++currentSlide % slides.length;
    slides[currentSlide].className = 'page-slider__slide page-slider__slide--showing';
    dot[currentSlide].className = 'page-slider__dot page-slider__dot--active';
  }

})();




