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
