"use strict";
function toggleSlider() {
  const slider = document.querySelector(".slider");
  const slide = document.querySelectorAll(".slide");
  let currentPosition = 0;
  let startPosition = 0;

  function scrollSnap(el) {
    const options = {
      threshold: 0.3,
    };

    function callback(entries) {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          el.scrollIntoView();
        }
      });
    }

    let observer = new IntersectionObserver(callback, options);

    observer.observe(el);
  }

  slide.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      e.preventDefault();
      const offsetx = e.offsetX;

      if (e.buttons === 1) {
        if (offsetx < currentPosition && startPosition <= 2000) {
          slider.scrollLeft = startPosition += 2;
          startPosition = startPosition += 2;
          // console.log(startPosition);
        }

        if (offsetx > currentPosition && startPosition >= 0) {
          slider.scrollLeft = startPosition -= 2;
          startPosition = startPosition -= 2;
          console.log("right");
          // console.log(startPosition);
        }

        currentPosition = offsetx;
      }
    });
  });

  slide.forEach((el) => {
    el.addEventListener("mouseup", (e) => {
      scrollSnap(el);
    });
  });
}

toggleSlider();
