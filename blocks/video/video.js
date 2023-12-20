$(document).ready(function() {
  function loadVideo() {
     $(".hero div div picture").remove();
     $(".hero div div").append("<video width='100%' height='100%' style='position: absolute; top: 0; left: 0;' autoplay controls><source src='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4' type='video/mp4'></video>");
  }
  loadVideo();
})
