const iframe = document.querySelector(".map-iframe");
const instruct = document.querySelector(".instruct-sign");

iframe.addEventListener("mouseenter", function (e) {
  instruct.style.animationDuration = "0s";
});
iframe.addEventListener("mouseleave", function (e) {
  instruct.style.animationDuration = "1s";
});
