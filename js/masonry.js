import { githubWorksData } from "./data/past-works-data.js";

const copyGithubWorksData = JSON.parse(JSON.stringify(githubWorksData));

var $el = copyGithubWorksData.map((work, index) => {
  return `<div class="project" data-key='work-${index}'>
                      <img class="project-img" src="${work.portfolio.imgUrl}" />
                      <div class="project-content">
                        <a href='${work.portfolio.link}' class="theme">
                          <h3>${work.portfolio.title}</h3>
                    
                          <img src="../images/github-icon.png" />
                        </a>
                        <div class="bottom-line"></div>
                        <div class="news-title">相關報導</div>
                        <div class="news-box">
                          <a class="news-item">ETtoday</a>
                          <a class="news-item">遠見</a>
                          <a class="news-item">健康2.0</a>
                          <a class="news-item">聯合新聞網</a>
                          <a class="news-item">電獺少女</a>
                        </div>
                      </div>
             
                      </div>`;
});
$(".past-works").append($el);

console.log("append");

// $(".past-works").masonry({
//   itemSelector: ".project",
// });
// $(".past-works").masonry("destroy");
// $(".past-works").removeData("masonry");
// $(".past-works").masonry();

// $(".past-works").imagesLoaded(function () {
// });
