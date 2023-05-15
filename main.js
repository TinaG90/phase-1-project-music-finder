fetch("http://localhost:3000/music")
  .then((resp) => resp.json())
  .then((music) => {
    createSongCard(music);
  });

const emptyHeart = "♡";
const fullHeart = "♥";
let genresSearch = [];

function createSongCard(MusicData) {
  genresSearch = MusicData.map((song) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.style.display = "none";

    let p = document.createElement("p");
    p.style.visibility = "hidden";
    p.id = `${song.id}`;
    p.classList.add("lyrics");
    p.innerText = `"${song.lyric}"`;

    let img = document.createElement("img");
    img.src = song.image;
    img.classList.add("album-cover");

    img.addEventListener("mouseover", (e) => {
      p.style.visibility = "visible";
    });
    img.addEventListener("mouseout", (e) => {
      p.style.visibility = "hidden";
    });

    let h2 = document.createElement("h2");
    h2.innerText = song.album;
    let h5 = document.createElement("h5");
    h5.innerText = song.genre;
    let h3 = document.createElement("h3");
    h3.innerText = `Artist: ${song.artist}`;

    let span = document.createElement("span");
    span.classList.add("heart-icon");
    span.innerText = emptyHeart;
    span.addEventListener("click", (e) => {
      changeHeart(e);
    });
    card.append(h2, img, h5, h3, span, p);
    document.querySelector(".music-container").appendChild(card);
    return { genre: song.genre, element: card };
  });
}

// Event Handlers Functions(callbacks)
function changeHeart(event) {
  const liker = event.target;
  if (liker.textContent === emptyHeart) {
    liker.textContent = fullHeart;
    liker.classList.add("activated-heart");
  } else if ((liker.textContent = fullHeart)) {
    liker.textContent = emptyHeart;
    liker.classList.remove("activated-heart");
  }
}

const searchInput = document.querySelector("input");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  genresSearch.forEach((genre) => {
    const isVisible = genre.genre.toLowerCase();
    if (isVisible !== value) {
      genre.element.style.display = "none";
    } else {
      genre.element.style.display = "block";
    }
  });
});
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    inputAlert();
  }
});

function inputAlert() {
  alert("No Genre Found!");
}
