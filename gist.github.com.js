$("div.actions").prepend("<a href='#' id='soft-wrap'>wrap it</a>")
$("a#soft-wrap").click(function(event) {
  $("div.highlight pre").css("width", "590px").css("white-space", "pre-wrap")
  event.preventDefault()
})
