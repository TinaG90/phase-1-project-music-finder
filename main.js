fetch("http://localhost:3000/music")
.then(resp => resp.json())
.then(json => console.log(json))