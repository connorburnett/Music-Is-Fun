function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here

  //private

  function drawSongs(songList) {
    var template = ''

    for (var i = 0; i < songList.length; i++) {
      var song = songList[i]
      console.log(song)
      template += `
        
          <div class="row">
            <div class="col-xs-12">
              <div class="middle">
                <h3>${song.title}</h3>
                <div class="art">
                  <img src="${song.albumArt}">
                </div>
                  <div class="info">
                    <h5>${song.artist}</h5>
                    <h5>${song.collection}</h5>
                    <h5>$${song.price}</h5>
                    <h5><audio controls> <source src="${song.preview}" type="audio/mpeg"></audio></h5>
                  </div>
              </div>
            </div>
          </div>
      `
    }


    document.getElementById('songs').innerHTML = template
  }



  //public


}