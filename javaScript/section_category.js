'use strict';

(function () {
  let categorySection = document.querySelector(".section-category");

  categorySection.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.className == "link--block") {
      target.nextElementSibling.style.display = "initial";
    }
  });

  categorySection.addEventListener("mouseout", (event) => {
    let target = event.target;
    if (target.className == "link--block") {
      target.nextElementSibling.style.display = "none";
    }
  });
  
})();


