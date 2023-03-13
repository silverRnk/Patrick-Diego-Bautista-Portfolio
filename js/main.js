const slide1Button = document.querySelector('button[id="slide1"]');
const slide2Button = document.querySelector('button[id="slide2"]');
const slide = document.querySelector("#inner");

slide1Button.addEventListener("click", () => {
  slide.style = "margin-left: 0";
});

slide2Button.addEventListener("click", () => {
  slide.style = "margin-left: -100%";
});
