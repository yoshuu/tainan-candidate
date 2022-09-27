import { githubWorksData } from "./data/past-works-data.js";

const copyGithubWorksData = JSON.parse(JSON.stringify(githubWorksData));
// let finishCount = 0;

// function loader() {
//   finishCount++;
//   console.log("on load", finishCount);
//   return finishCount;
// }

var $el = copyGithubWorksData.map((work, index) => {
  return `<div class="project" data-key='work-${index}'>
                      <img class="project-img" src="${work.portfolio.imgUrl}"/>
                      <div class="project-content">
                        <a href='${work.portfolio.link}' class="theme" target="_blank">
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

// 使用照片loading
// export function appendProject() {
//   return new Promise((resolve) => {
//     console.log("append");
//     $(".past-works").append($el);
//     const projectList = Array.from(
//       document.querySelector(".past-works").querySelectorAll(".project")
//     );
//     // console.log(projectList[0].querySelector(".project-img"));

//     const imgList = projectList.map((project) => {
//       return project.querySelector(".project-img");
//     });

//     console.log(imgList, finishCount);
//     if (finishCount === 60) {
//       console.log("here");
//       resolve();
//     }
//   });
// }
