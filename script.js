let position = 0;
let images = document.querySelectorAll(".main-dishes");
function arrow1() {
  console.log("left");
  position--;
  if (position < 0) {
    position = 3;
  }
}
function arrow2() {
  console.log("right");
  position++;
  if (position === 4) {
    position = 0;
  }
}

function switchDishes() {
  if (position == 0) {
    images[0].src = "./Media/1.png";
    images[1].src = "./Media/2.png";
  }
  if (position == 1) {
    images[0].src = "./Media/2.png";
    images[1].src = "./Media/3.png";
  }
  if (position == 2) {
    images[0].src = "./Media/3.png";
    images[1].src = "./Media/4.png";
  }
  if (position == 3) {
    images[0].src = "./Media/4.png";
    images[1].src = "./Media/1.png";
  }
}
let rotation = 0;
let wheels = document.querySelector(".wheel");
function wheelLeft() {
  rotation += 90;
}
function wheelRight() {
  rotation -= 90;
}
function wheel() {
  wheels.style.transform = `translateX(-940px) rotate(${rotation}deg) scale(3.9)`;
  wheels.style.transition = "transform 1s ease";
  console.log(wheel);
}
