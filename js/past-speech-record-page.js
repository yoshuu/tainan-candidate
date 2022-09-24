import { pastSpeechData } from "./speechData.js";

const copyPastSpeechData = JSON.parse(JSON.stringify(pastSpeechData));
const speechContainer = document.querySelector(".speech-record-container");

function addSpeechRecord(recordArray, recordContainer) {
  recordContainer.innerHTML = recordArray
    .map((record, index) => {
      const ytVideosHTMLStrings = record.ytVideos
        .map((video) => {
          return `
          <a href="${video.link}" class="tags">影片連結</a>
          `;
        })
        .join("");

      return `<div class="speech-record-tablet">
                <div class="speech-record-content ${index}">
                  <p>${record.slides.title}</p>
                  <p>${record.active}</p>
                  <p>${record.date}</p>
                  <div class="resources-content">
                    <a href="${record.slides.link}" class="tags">投影片下載</a>
                    ${ytVideosHTMLStrings}
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
                    <a href="${record.slides.link}" class="tags">投影片下載</a>
                    ${ytVideosHTMLStrings}
              
                  </div>
                </div>
              </div>`;
    })
    .join("");
}

addSpeechRecord(copyPastSpeechData, speechContainer);

console.log(copyPastSpeechData[0].ytVideos[0].link);
