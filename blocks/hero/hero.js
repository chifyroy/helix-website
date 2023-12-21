$(document).ready(function(){
    var video = $('<video />', {
        id: 'video',
        src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4',
        type: 'video/mp4',
        autoplay: true,
        muted: true
    });

    $(".hero div div picture").remove();
    $(".hero div div").append(video);

    $("video[autoplay]").each(function(){ 
    this.muted = true;
        this.play(); 
    });
});
