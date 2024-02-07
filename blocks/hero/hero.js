$(document).ready(function(){
    var video = $('<video />', {
        id: 'video',
        src: 'https://s3.amazonaws.com/www.studiocreationsinc.com/assets/videos/160820_001_NYC_Train_1080p.mp4111',
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
