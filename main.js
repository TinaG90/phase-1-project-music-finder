fetch("http://localhost:3000/music")
.then(resp => resp.json())
.then(music => music.forEach(song => createSongCard(song))
);

const emptyHeart = '♡'
const fullHeart = '♥'


function createSongCard(song){
   let card = document.createElement('div');
   card.classList.add('card')
   
   let img = document.createElement('img')
   img.src = song.image;
   img.classList.add('album-cover');

   let h2 = document.createElement('h2')
   h2.innerText = `"${song.album}"`;
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

   card.append(img,h2,h5,h3,span)
   document.getElementById('music-container').appendChild(card)
}

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