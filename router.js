const page = document.querySelectorAll(".page");
const page1 = document.querySelector(".front-page");
const page2 = document.querySelector(".district-map-page");
const page3 = document.querySelector(".record-of-street-map-page");
const page4 = document.querySelector(".past-record-page");
const page5 = document.querySelector(".tainan-three-page");
console.log(location.hash);
changePage(location.hash);

window.addEventListener("hashchange", function () {
  changePage(location.hash);
});

function changePage(hash) {
  page.forEach((element) => {
    element.style.display = "none";
  });
  if (hash === "" || hash === "#front-page") {
    page1.style.display = "block";
  } else if (hash === "#district-map-page") {
    page2.style.display = "block";
  } else if (hash === "#record-of-street-map-page") {
    page3.style.display = "block";
  } else if (hash === "#past-record-page") {
    page4.style.display = "block";
  } else if (hash === "#tainan-three-page") {
    page5.style.display = "block";
  }
}
