const page = document.querySelectorAll(".page");
const page1 = document.querySelector(".front-page-router");
const page2 = document.querySelector(".district-map-page-router");
const page3 = document.querySelector(".record-of-street-map-page-router");
const page4 = document.querySelector(".past-record-page-router");
const page5 = document.querySelector(".tainan-three-page-router");

// 過往紀錄的另外兩個頁面
const page6 = document.querySelector(".past-works-page-router");
const page7 = document.querySelector(".related-news-page-router");

changePage(location.hash);

window.addEventListener("hashchange", function () {
  changePage(location.hash);
});

function changePage(hash) {
  page.forEach((element) => {
    element.style.display = "none";
  });
  if (hash === "" || hash === "#front-page-router") {
    page1.style.display = "block";
  } else if (hash === "#district-map-page-router") {
    page2.style.display = "block";
  } else if (hash === "#record-of-street-map-page-router") {
    page3.style.display = "block";
  } else if (hash === "#past-record-page-router") {
    page4.style.display = "block";
  } else if (hash === "#tainan-three-page-router") {
    page5.style.display = "block";
  } else if (hash === "#past-works-page-router") {
    page6.style.display = "block";
    setTimeout(() => {
      $(".past-works").masonry();
    }, 100);
  } else if (hash === "#related-news-page-router") {
    page7.style.display = "block";
  }
}
