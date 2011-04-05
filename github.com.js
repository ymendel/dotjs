$("div.file ul.actions").prepend("<li><a href='https://gist.github.com/gists' id='gist-url'>gist it</a></li>")

function buildGistForm() {
  $("body").append("\
    <div id='hiddenGistForm'> \
      <form action='https://gist.github.com/gists' method='post'> \
        <input type='text' name='file_name[gistfile1]' /> \
        <input type='text' name='file_ext[gistfile1]' /> \
        <textarea name='file_contents[gistfile1]'></textarea> \
        <button type='submit' name='action_button' value='private'>Create Private Gist</button> \
      </form> \
    </div> \
  ")
  $("div#hiddenGistForm").hide()
}

function submitGistForm() {
  $('button[name=action_button]').click()
}
function setGistFormValues() {
  rawURL = $("ul.actions a#raw-url").attr("href")
  filename = rawURL.split("/").pop()
  $("form input[name='file_name[gistfile1]']").attr('value', filename)
  $.get(rawURL, function(data) { 
      $("form textarea[name='file_contents[gistfile1]']").attr('innerHTML', data)
      submitGistForm()
    }
  )
}

$("a#gist-url").click(function(event) {
  event.preventDefault()
  buildGistForm()
  setGistFormValues()
})

/* jQuery replaceText - v1.1 - 11/21/2009 - http://benalman.com/projects/jquery-replacetext-plugin/ - Copyright (c) 2009 "Cowboy" Ben Alman - Dual licensed under the MIT and GPL licenses. - http://benalman.com/about/license/ */
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);

function imageTagForString(str) {
  label = str.substr(1, str.length - 2);
  return "<img alt='" + str + "' title='" + str + 
         "' src='https://github.com/flogic/emogc/raw/master/images/" + label + ".png' />";
}

$('*').replaceText(/:([a-z]\w*):/gi, imageTagForString);
