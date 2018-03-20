/*  Scroll play video youtube
--------------------------------------*/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '492',
        width: '685',
        playerVars: {
            autoplay: 0
        },
        videoId: 'qu9TiWocgTA'
    });
}
$(window).scroll(function() {
    var scroll = $(this).scrollTop();
    $("iframe").each(function() {
        if (scroll > $(this).offset().top - 400) {
            player.playVideo();
        } else {
            player.stopVideo();
        }
    });
    var posCircle = $('.local_circle').offset().top;
    if(scroll > posCircle - 400) {
        $('.circle_01').addClass('show');
        setTimeout(function () {
            $('.circle_02').addClass('show');
        }, 400);
    }
});

/* Scrool bookmark
-------------------------------------- */
$('a[href^="#"]').click(function() {
    var the_id = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(the_id).offset().top
    }, 1000);
    return false;
});
