'use strict';

(function () {
  let iconGamb = document.querySelector(".page-header__icon-toggle");
  let headerContainer = document.querySelector(".page-header__container");
  let menu = document.querySelector(".page-menu");
  let shoppingBag = document.querySelector(".page-shoppingBag");
  let quantity = document.querySelector(".page-header__quantity");
  let shopIcon = document.querySelector(".page-header__shop-buy");
  let overlay = document.querySelector(".overlay");

  iconGamb.addEventListener("click", () => {
    if (headerContainer.classList.contains("page-header__container--closed")) {
      showMenu();
      if (shoppingBag.classList.contains("page-shoppingBag--opened")) {
        hiddenShop();
      }
    } else {
      hiddenMenu();
      overlay.style.display = "none";
    }
  });

  shopIcon.addEventListener("click", () => {
    if (shoppingBag.classList.contains("page-shoppingBag--closed")) {
      showShop();
      if (headerContainer.classList.contains("page-header__container--opened")) {
        hiddenMenu();
      }
    } else {
      hiddenShop();
      overlay.style.display = "none";
    }
  });

  function showMenu() {
    headerContainer.classList.remove("page-header__container--closed");
    headerContainer.classList.add("page-header__container--opened");
    menu.classList.add("page-menu--opened");
    menu.classList.remove("page-menu--closed");
    overlay.style.display = "block";
  }

  function hiddenMenu() {
    headerContainer.classList.add("page-header__container--closed");
    headerContainer.classList.remove("page-header__container--opened");
    menu.classList.remove("page-menu--opened");
    menu.classList.add("page-menu--closed");
  }

  function showShop() {
    shoppingBag.classList.remove("page-shoppingBag--closed");
    shoppingBag.classList.add("page-shoppingBag--opened");
    quantity.classList.add("page-header__quantity--opened");
    overlay.style.display = "block";
  }

  function hiddenShop() {
    shoppingBag.classList.add("page-shoppingBag--closed");
    shoppingBag.classList.remove("page-shoppingBag--opened");
    quantity.classList.remove("page-header__quantity--opened");
  }

  menu.addEventListener("click", (event) => {
    let target = event.target;

    while (target != menu) {
      if (target.className == "page-menu__item") {

        if (target.querySelector(".page-menu__sing").innerText == "+") {
          target.querySelector(".page-menu__sing").innerText = "-";
          target.nextElementSibling.className = "page-menu__submenu--active";
        } else {
          target.querySelector(".page-menu__sing").innerText = "+";
          target.nextElementSibling.className = "page-menu__submenu";
        }
      }
      target = target.parentNode;
    }
  });

})();
