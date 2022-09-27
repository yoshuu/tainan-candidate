// // import { appendProject } from "./masonry.js";
const page = document.querySelectorAll(".page");

// const pages = [

// ]
// const page_front_page_router = document.querySelector(".front-page-router");
// const page = document.querySelector(".district-map-page-router");
// const page = document.querySelector(".record-of-street-map-page-router");
// const page = document.querySelector(".past-record-page-router");
// const page = document.querySelector(".tainan-three-page-router");

// // 過往紀錄的另外兩個頁面
// const page = document.querySelector(".past-works-page-router");
// const page = document.querySelector(".related-news-page-router");

changePage(location.hash);

window.addEventListener("hashchange", function () {
  changePage(location.hash);
});

async function changePage(hash) {
  page.forEach((element) => {
    element.style.display = "none";
  });
  document.querySelector(hash.replace("#", ".")).style.display = "block";
  // if (hash === "" || hash === "#front-page-router") {
  //   page1.style.display = "block";
  // } else if (hash === "#district-map-page-router") {
  //   page2.style.display = "block";
  // } else if (hash === "#record-of-street-map-page-router") {
  //   page3.style.display = "block";
  // } else if (hash === "#past-record-page-router") {
  //   page4.style.display = "block";
  // } else if (hash === "#tainan-three-page-router") {
  //   page5.style.display = "block";
  // } else if (hash === "#past-works-page-router") {
  //   page6.style.display = "block";
  //   console.log("before append project");
  //   // await appendProject();
  //   console.log("before masonry");
  // $(".past-works").masonry();
  // setTimeout(() => {
  //   $(".past-works").masonry();
  // }, 150);
  // } else if (hash === "#related-news-page-router") {
  //   page7.style.display = "block";
  // }
}
