$("ul:has(span.spoiler)").prepend("<a class='show-spoilers'>(reveal spoilers)</a>");
$("a.show-spoilers").click(function(e) {
    $(this).parent("ul").find("span.spoiler").removeClass("spoiler");
    $("ul:not(:has(span.spoiler))").children("a.show-spoilers").remove();
    e.preventDefault();
});
