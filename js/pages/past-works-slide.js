import { githubWorksData } from "../data/past-works-data.js";

// rendering

const copyGithubWorksData = JSON.parse(JSON.stringify(githubWorksData));
const pastWorksContainer = document.querySelector(".past-works-container");

function renderPastWorks(pastWorksArray, pastWorksContainer) {
  pastWorksContainer.innerHTML = pastWorksArray
    .map((work, index) => {
      return `<div class="project" data-key='work-${index}'>
                      <img class="project-img" src="${work.portfolio.imgUrl}" />
                      <div class="project-content">
                        <a href='${work.portfolio.link}' class="theme">
                          <h3>${work.portfolio.title}</h3>
                          <img src="./images/github-icon.png" />
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
    })
    .join("");
}

renderPastWorks(copyGithubWorksData, pastWorksContainer);
