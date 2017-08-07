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
              <div class="middle thumbnail">
                <h3>${song.title}</h3>
                <div class="art">
                <a class="thumbnail">
                  <img src="${song.albumArt}" style="width:150px;height:150px;">
                </a>
                </div>
                  <div class="info caption">
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

    document.addEventListener('play', function (e) {
      var plyBtn = document.getElementsByTagName('audio')
      for (var i = 0, len = plyBtn.length; i < len; i++) {
        if (plyBtn[i] != e.target) {
          plyBtn[i].pause()
        }
      }
    }, true)


    document.getElementById('songs').innerHTML = template
  }



  //public


}