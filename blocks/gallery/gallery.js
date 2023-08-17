$(document).ready(function() {
    $('.gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallerythumbnail'
      });
      $('.gallerythumbnail').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.gallery',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });

    setTimeout(() => {
        $('.gallery').slick('refresh');
        $('.gallerythumbnail').slick('refresh');
    }, 2000);
});
