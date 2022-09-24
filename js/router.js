const page = document.querySelectorAll(".page");
const page1 = document.querySelector(".front-page");
const page2 = document.querySelector(".district-map-page");
const page3 = document.querySelector(".record-of-street-map-page");
const page4 = document.querySelector(".past-record-page");
const page5 = document.querySelector(".tainan-three-page");

// 過往紀錄的另外兩個頁面
const page6 = document.querySelector(".past-works-page");
const page7 = document.querySelector(".related-news-page");

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
  } else if (hash === "#past-works-page") {
    page6.style.display = "block";
  } else if (hash === "#related-news-page") {
    page7.style.display = "block";
  }
}
