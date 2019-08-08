'use strict';

(function () {
  const galleryWrap = document.querySelector(".section-gallery__container").children;
  const gallery = document.querySelector(".section-gallery");

  const usersWrap = document.querySelector(".section-users__container").children;
  const users = document.querySelector(".section-users");

  let mySwiperGallery = new Swiper('.section-gallery.swiper-container', {
    direction: 'horizontal',
    speed: 250,
    loop: true,
    scrollbarHide: true,
    spaceBetween: 20,
    slidesPerView: 5,
    centeredSlides: true,
    autoplay:
    {
      delay: 5000,
      disableOnInteraction: false,
      enabled: true,
      reverseDirection: false,
      stopOnLastSlide: false,
      waitForTransition: true
    },
    autoplayDisableOnInteraction: false,
    disableOnInteraction: false,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
      }
    },
    on: {
      init: () => actionOnInit(gallery, galleryWrap),
      slideChange: () => actionOnSlideChange(gallery, galleryWrap),
      resize: () => actionOnResize(gallery, galleryWrap)
    }
  });

  let mySwiperUsers = new Swiper('.section-users.swiper-container', {
    direction: 'horizontal',
    speed: 250,
    loop: true,
    scrollbarHide: true,
    spaceBetween: 20,
    slidesPerView: 4,
    centeredSlides: false,
    autoplay:
    {
      delay: 5000,
      disableOnInteraction: false,
      enabled: true,
      reverseDirection: false,
      stopOnLastSlide: false,
      waitForTransition: true
    },
    autoplayDisableOnInteraction: false,
    disableOnInteraction: false,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        centeredSlides: true,
      }
    },
    on: {
      init: () => actionOnInit(users, usersWrap),
      slideChange: () => actionOnSlideChange(users, usersWrap),
      resize: () => actionOnResize(users, usersWrap)
    }
  });

  gallery.addEventListener("mouseover", hiddenBlockOnmouseover);
  gallery.addEventListener("mouseout", hiddenBlockOnmouseout);

  users.addEventListener("mouseover", hiddenBlockOnmouseover);
  users.addEventListener("mouseout", hiddenBlockOnmouseout);

  function actionOnInit(part, arr) {
    if (window.innerWidth <= 500) {
      let right = part.querySelector(".swiper-slide-prev");
      let left = part.querySelector(".swiper-slide-next");
      showOverlay(right, left, arr);
    } else {
      for (let i = 0; i < arr.length; i++) {
        arr[i].firstElementChild.style.opacity = "1";
      }
    }
  };

  function actionOnSlideChange(part, arr) {
    if (window.innerWidth <= 500) {
      let right = part.querySelector(".swiper-slide-active");
      let left = (part.querySelector(".swiper-slide-next").nextElementSibling) ? (part.querySelector(".swiper-slide-next").nextElementSibling) : arr[0];
      showOverlay(right, left, arr);
    } else {
      for (let i = 0; i < arr.length; i++) {
        arr[i].firstElementChild.style.opacity = "1";
      }
    }
  };

  function actionOnResize(part, arr) {
    if (window.innerWidth <= 500) {
      let right = part.querySelector(".swiper-slide-prev");
      let left = part.querySelector(".swiper-slide-next");
      showOverlay(right, left, arr);
    } else {
      for (let i = 0; i < arr.length; i++) {
        arr[i].firstElementChild.style.opacity = "1";
      }
    }
  };

  function showOverlay(right, left, arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].firstElementChild.style.opacity = "1";
    }
    right.firstElementChild.style.opacity = ".7";
    left.firstElementChild.style.opacity = ".7";
  };


  function hiddenBlockOnmouseover(event) {
    let target = event.target;
    if (target.classList.contains("link--block")) {
      target.previousElementSibling.style.display = "flex";
      target.classList.add("active");
    }
  };

  function hiddenBlockOnmouseout(event) {
    let target = event.target;
    if (target.classList.contains("active")) {
      target.previousElementSibling.style.display = "none";
      target.classList.remove("active");
    }
  };

})();