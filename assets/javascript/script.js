var userInput = document.getElementById("userInput");
var searchBtn = document.getElementById("searchBtn");
var gifContent = document.getElementById("gif-content");

searchBtn.addEventListener("click", randomGif);

async function randomGif(e) {
  gifContent.innerHTML = "";
  e.preventDefault();
  let res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=hNBHmVSiNKgqGrNu6IFzi12Tsa7w2L0s&q=${userInput.value}&limit=8&offset=0&rating=g&lang=en`
  );
  let content = await res.json();
  console.log(content);
  for (let i = 0; i < 8; i++) {
    // console.log(content.data[i].images.downsized_small.mp4);
    let createImg = document.createElement("img");
    createImg.classList.add("giphyImg");
    createImg.setAttribute("id", i);
    createImg.src = content.data[i].images.downsized_still.url;
    console.log(createImg);
    gifContent.appendChild(createImg);
    createImg.getAttribute("class") === "giphyImg";
    document.getElementById(i).addEventListener("click", function playGif(i) {
      if (createImg.getAttribute("class") === "giphyImg") {
        createImg.src =
          content.data[
            [Number(createImg.getAttribute("id"))]
          ].images.downsized.url;
        createImg.classList.remove("giphyImg");
        createImg.classList.add("giphyImgOff");
      } else if (createImg.getAttribute("class") === "giphyImgOff") {
        createImg.src =
          content.data[
            [Number(createImg.getAttribute("id"))]
          ].images.downsized_still.url;
        createImg.classList.remove("giphyImgOff");
        createImg.classList.add("giphyImg");
      }
    });
  }
}
