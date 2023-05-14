const fetchRequest = ()=> {
fetch("http://localhost:3000/music")
.then(resp => resp.json())
.then(music => { 
  createSongCard(music)
  // console.log(music)
})
}
fetchRequest()

const emptyHeart = '♡'
const fullHeart = '♥'


function createSongCard(MusicData){
  MusicData.forEach(song => {

   let card = document.createElement('div');
   card.classList.add('card')
    
   let p = document.createElement('p')
   p.style.visibility = "hidden"
   p.id = `${song.id}`
   p.classList.add('lyrics')
   p.innerText = `"${song.lyric}"`

   let img = document.createElement('img')
   img.src = song.image;
   img.classList.add('album-cover');

   img.addEventListener("mouseover", (e) => {
    p.style.visibility = "visible"
      // lyricDisplay()
    })

   img.addEventListener("mouseout", (e) => {
    p.style.visibility = "hidden"
    // lyricHider()
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
   span.addEventListener('dblclick', (e) => {
      changeHeart(e);
   })

   card.append(h2,h5,img,p,h3,span)
   document.getElementById('music-container').appendChild(card)
  })
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



 function searchButtonRender(){
  const searchButton = document.getElementsByTagName('input')[1]
    .addEventListener('click',(event) => {
    event.preventDefault()
    const input = document.getElementsByTagName('input')[0]
    const searchInput = input.value

    
    })
  }

 searchButtonRender()

// function lyricDisplay(){
//    const words = document.querySelectorAll('.lyrics')
//     for (let i = 0; i < words.length; i++) {
//     words[i].style.visibility = 'visible';
// }
// }

// function lyricHider(){
//   const words = document.querySelectorAll('.lyrics')
//    for (let i = 0; i < words.length; i++) {
//    words[i].style.visibility = 'hidden';
// }
// }
