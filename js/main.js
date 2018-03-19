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
        videoId: 'bDFXTXeA6ow'
    });
}

$(window).scroll(function() {
    $("iframe").each(function() {
        if ($(window).scrollTop() > $(this).offset().top - 400) {
            player.playVideo();
        } else {
            player.stopVideo();
        }
    });
});
