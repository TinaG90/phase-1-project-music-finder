fetch("http://localhost:3000/music")
.then(resp => resp.json())
.then(music => music.forEach(song => createSongCard(song))
);

    // const songs = document.getElementById('musicBlock')

function createSongCard(){
   let card = document.createElement('div');
   card.classList.add('card')

   let img = document.createElement('img')
   img.src = music.image;
   img.classList.add('album-cover');

   card.append(img)
   document.getElementById
}