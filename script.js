"use strict";
function toggleSlider() {
  const sliderInner = document.querySelector(".slider-inner");
  let scrollStart = 0;

  function moveSlide(e) {
    if (e.buttons === 1) {
      sliderInner.style.left = `-${(scrollStart += 1)}px`;
    }
  }

  sliderInner.addEventListener("mousemove", moveSlide);
}

toggleSlider();
