var tbody = $("table.infobox.biography tbody");
var row   = tbody.children("tr:first-child");
var name  = row.text();

row.after("<tr><td colspan='2'><a href='http://images.google.com/images?q=" + name + "'>Google Image Search</a></td></tr>");
