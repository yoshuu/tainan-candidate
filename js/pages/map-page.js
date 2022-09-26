const districtIframe = document.querySelector(".district-map-iframe");
const districtInstruct = document.querySelector(".district-instruct-sign");

const streetIframe = document.querySelector(".street-map-iframe");
const streetInstruct = document.querySelector(".street-instruct-sign");

districtIframe.addEventListener("mouseenter", function (e) {
  districtInstruct.style.animationDuration = "0s";
});

districtIframe.addEventListener("mouseleave", function (e) {
  districtInstruct.style.animationDuration = "1s";
});

streetIframe.addEventListener("mouseenter", function (e) {
  streetInstruct.style.animationDuration = "0s";
});

streetIframe.addEventListener("mouseleave", function (e) {
  streetInstruct.style.animationDuration = "1s";
});
