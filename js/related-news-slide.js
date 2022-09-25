import { relatedNewsData } from "./related-news-data.js";

const copyRelatedNewsData = JSON.parse(JSON.stringify(relatedNewsData));

const relatedNewsContainer = document.querySelector(".related-news-container");

function addRelatedNews(newsArray, newsContainer) {
  newsContainer.innerHTML = newsArray
    .map((news) => {
      return `<a href="${news.link}" class="news-item" ><p>${news.title}<span>- ${news.date}</span></p></a>`;
    })
    .join("");
}

addRelatedNews(copyRelatedNewsData, relatedNewsContainer);
