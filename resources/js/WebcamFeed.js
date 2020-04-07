
document.querySelector('.start-feed').addEventListener("click", () => {
    console.log('hey');
    var video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
        video.srcObject = stream;
        })
        .catch(function (err0r) {
        console.log("Something went wrong!");
        });
    }
})

document.querySelector('.stop-feed').addEventListener("click",() => {
    
        var video = document.querySelector("#videoElement");

        var stream = video.srcObject;
        var tracks = stream.getTracks();
      
        for (var i = 0; i < tracks.length; i++) {
          var track = tracks[i];
          track.stop();
        }
      
        video.srcObject = null;
      
})
