function imageTagForString(str) {
  label = str.substr(1, str.length - 2);
  return "<img alt='" + str + "' title='" + str + 
         "' src='https://github.com/flogic/emogc/raw/master/images/" + label + ".png' />";
}

$('*').replaceText(/:([a-z]\w*):(?!:)/gi, imageTagForString);


$("div.actions").prepend("<a href='#' id='soft-wrap'>wrap it</a>")
$("a#soft-wrap").click(function(event) {
  $("div.highlight pre").css("width", "590px").css("white-space", "pre-wrap")
  event.preventDefault()
})
