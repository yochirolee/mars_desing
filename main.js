let slider = document.querySelector(".section-container");
let sliderElements = slider.querySelectorAll(".content-slider");
let bullets = document.querySelector(".bullets-count");
let bulletsList = bullets.querySelectorAll("div");
let width = sliderElements[0].clientWidth;
let count = 0;
window.addEventListener("resize", function () {
  width = sliderElements[0].clientWidth;
});

function slides() {
  slider.style.transform = "translateX(" + -width * count + "px)";
  slider.style.transition = "transform 1s";

  bulletsList.forEach((element) => {
    element.classList = "bullet";
  });
  bulletsList[count].classList = "bullet bullet-active";
  if (count < sliderElements.length - 1) count++;
  else count = 0;
}

const handleBullet = (e) => {
  bulletsList.forEach((element) => {
    element.classList = "bullet";
  });
  bulletsList[e].classList = "bullet bullet-active";
  slider.style.transform = "translateX(" + -width * e + "px)";
  slider.style.transition = "transform 1s";
};

setInterval(function () {
  slides();
}, 5000);
