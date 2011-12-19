$("div#wikitext > ul").before("<a id='show-spoilers'>(reveal spoilers)</a>")
$("a#show-spoilers").click(function(e) {
    $("span.spoiler").removeClass("spoiler");
    e.preventDefault();
});
