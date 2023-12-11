"use strict";

function toggleSlider() {
  const slider = document.querySelector(".slider");
  let oldx = 0;

  // Get mouse movement direction
  function getMouseDirection(e) {
    let direction;

    if (e.pageX < oldx) {
      direction = "left";
    } else if (e.pageX > oldx) {
      direction = "right";
    }

    oldx = e.pageX;

    return direction;
  }

  // Start Dragging
  function dragging(e) {
    let direction = getMouseDirection(e);

    if (e.buttons === 1) {
      if (direction === "left") {
        slider.scrollLeft -= e.movementX;
      } else if (direction === "right") {
        slider.scrollLeft -= e.movementX;
      }
      console.log(direction);
    }
  }

  slider.addEventListener("mousemove", dragging);
}

toggleSlider();
