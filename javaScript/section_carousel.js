
(function () {
  let carouselWrap = document.querySelector(".section-carousel__carousel-wrap");
  let carousel = document.querySelector(".section-carousel__images-wrap");
  let prevArrow = document.querySelector(".section-carousel__arrow--prev");
  let nextArrow = document.querySelector(".section-carousel__arrow--next");
  let left = 0;
  let step = carousel.clientWidth / carousel.children.length;

  prevArrow.addEventListener("click", () => {
    if (window.innerWidth > 1023) {
      showPrevImgDesktop();
    } else {
      showPrevImg();
    }
  });

  nextArrow.addEventListener("click", () => {
    if (window.innerWidth > 1023) {
      showNextImgDesktop();
    } else {
      showNextImg();
    }
  });

  // карусель с перемещением, не бесконечная
  function showNextImgDesktop() {
    if ((-left) < (carousel.clientWidth - carouselWrap.clientWidth)) {
      left -= step;
      carousel.style.left = left + "px";
    } else {
      left = 0;
      carousel.style.left = left + "px";
    }

  }

  function showPrevImgDesktop() {
    if (-left >= step) {
      left += step;
      carousel.style.left = left + "px";
    } else {
      left = -(carousel.clientWidth - carouselWrap.clientWidth);
      carousel.style.left = left + "px";
    }
  }

  // карусель без перемещения, бесконечная

  function showNextImg() {
    let firstDiv = carousel.firstElementChild;
    let cloneDiv = firstDiv.cloneNode(true);
    carousel.appendChild(cloneDiv);
    carousel.removeChild(firstDiv);
  }

  function showPrevImg() {
    let firstDiv = carousel.lastElementChild;
    let cloneDiv = firstDiv.cloneNode(true);
    carousel.insertBefore(cloneDiv, carousel.firstElementChild);
    carousel.removeChild(firstDiv);
  }


  carousel.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.classList.contains("link--block")) {
      target.parentNode.querySelector(".section-carousel__img").src = "./image/carousel/carousel_back.jpg";
      target.previousElementSibling.style.display = "initial";
    }
  });

  carousel.addEventListener("mouseout", (event) => {
    let target = event.target;
    if (target.classList.contains("link--block")) {
      target.parentNode.querySelector(".section-carousel__img").src = `./image/carousel/carousel${target.dataset.item}.jpg`;
      target.previousElementSibling.style.display = "none";
    }
  });

})();
