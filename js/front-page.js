const about = document.querySelector(".candidate-about-me-button");
const mobilePopuping = document.querySelector(".mobile-popuping");

about.addEventListener("click", function (e) {
  mobilePopuping.showModal();
});
