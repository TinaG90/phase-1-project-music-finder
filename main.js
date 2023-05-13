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

   let button = document.createElement('button')
   button.addEventListener('click', ()=>{
    list.innerText += 1
   })
   button.classList.add('like-btn')
   button.id = song.id
   button.innerText = "Like ❤️"

   card.append(img,h2,h5,h3,button)
   document.getElementById('musicContainer').appendChild(card)
}