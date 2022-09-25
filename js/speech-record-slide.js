import { pastSpeechData } from "./speech-record-data.js";

const copyPastSpeechData = JSON.parse(JSON.stringify(pastSpeechData));
const speechContainer = document.querySelector(".speech-record-container");

function addSpeechRecord(recordArray, recordContainer) {
  recordContainer.innerHTML = recordArray
    .map((record, index) => {
      const ytVideosHTMLStrings = record.ytVideos
        .map((video) => {
          return `<a target="_blank" href="${video.link}" class="tags">影片連結</a>`;
        })
        .join("");
      const ifNoYtVideosOne =
        record.ytVideos.length === 1
          ? `<a target="_blank" href="#" class="tags">影片連結</a>`
          : "";

      const ifNoYtVideosZero =
        record.ytVideos.length === 0
          ? `<a href="#" target="_blank" class="tags">影片連結</a>
          <a href="#" target="_blank" class="tags">影片連結</a>`
          : "";

      return `<div class="speech-record-desktop">
                <div class="speech-record-content ${index}">
                  <p>${record.slides.title}</p>
                  <p>${record.active}</p>
                  <p>${record.date}</p>
                  <div class="resources-content">
                    <a target="_blank" href="${record.slides.link}" class="tags" download>投影片下載</a>
                    ${ytVideosHTMLStrings}
                    ${ifNoYtVideosOne}
                    ${ifNoYtVideosZero}
                  </div>
                </div>
              </div>
              <div class="speech-record-mobile">
                <div class="speech-record-topicNcontent">
                  <h3>活動主題</h3>
                  <p>${record.slides.title}</p>
                </div>
                <div class="speech-record-topicNcontent">
                  <h3>活動名稱</h3>
                  <p>${record.active}</p>
                </div>
                <div class="speech-record-topicNcontent">
                  <h3>日期</h3>
                  <p>${record.date}</p>
                </div>
                <div class="speech-record-resources-topicNcontent">
                  <h3>相關資源</h3>
                  <div class="resources-content">
                    <a target="_blank" href="${record.slides.link}" class="tags" download>投影片下載</a>
                    ${ytVideosHTMLStrings}
                    ${ifNoYtVideosOne}
                    ${ifNoYtVideosZero}
                  </div>
                </div>
              </div>`;
    })
    .join("");
}

addSpeechRecord(copyPastSpeechData, speechContainer);
