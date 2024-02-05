$(document).ready(function(){
    var video = $('<video />', {
        id: 'video',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        type: 'video/mp4',
        autoplay: true,
        muted: true,
        loop: true
    });

    $(".hero div div picture").replaceWith(video);

    $("video[autoplay]").each(function(){ 
        this.muted = true;
        this.play(); 
    });
});
