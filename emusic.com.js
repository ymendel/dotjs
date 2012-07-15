//$('body').on('load', function(e) {
//    $(".discography a[href]").css('border', 'thin solid blue');//addClass('no-ajax');
//});

$('div.search-module').prepend('<a href="blah" id="bingbong" style="z-index:999; color:white; size:1000%" class="no-ajax">hey</a>');
$('a#bingbong').click(function(e) {
    $(".discography a[href]").addClass('no-ajax');
    e.preventDefault();
});
