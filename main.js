fetch("http://localhost:3000/music")
.then(resp => resp.json())
.then(music => music.forEach(song => createSongCard(song))
);

const emptyHeart = '♡'
const fullHeart = '♥'


function createSongCard(song){
   let card = document.createElement('div');
   card.classList.add('card')

   let p = document.createElement('p')
   p.style.visibility = ""
   p.id = "lyrics"
   p.innerText = `"${song.lyric}"`

   let img = document.createElement('img')
   img.src = song.image;
   img.classList.add('album-cover');

   img.addEventListener("mouseover", (e) => {
      lyricDisplay(e)
   })

   let h2 = document.createElement('h2')
   h2.innerText = song.album
   let h5 = document.createElement('h5')
   h5.innerText = song.genre
   let h3 = document.createElement('h3')
   h3.innerText = `Artist: ${song.artist}`

   let span = document.createElement('span')
   span.classList.add('heart-icon')
   span.innerText = emptyHeart
   span.addEventListener('click', (e) => {
      changeHeart(e);
   })

   card.append(h2,h5,img,h3,span,p)
   document.getElementById('music-container').appendChild(card)
}

// Event Handlers Functions(callbacks)
function changeHeart(event) {
   const liker = event.target
   if (liker.textContent === emptyHeart) {
     liker.textContent = fullHeart;
     liker.classList.add("activated-heart");
   } else if ((liker.textContent = fullHeart)) {
     liker.textContent = emptyHeart;
     liker.classList.remove("activated-heart");
   }
 }

function lyricDisplay(){
  let words = document.getElementById('lyrics')
  
      if (words.style.display === "none") {
        words.style.display = "block";
      } else {
        words.style.display = "none";
      }
}
