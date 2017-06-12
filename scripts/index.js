/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
function isbn_search(){
  var ISBN = $("#query")[0].value;
  var query = "https://openlibrary.org/api/books?bibkeys=ISBN:" + ISBN + "&format=jsonp&jscmd=data";
  $.ajax({
    type: 'GET',
    url: query,
    dataType: 'jsonp',
    success: function(data){
      var obj = 'ISBN:' + ISBN;
      var author = data[obj].authors[0].name;
      var img = data[obj].cover.large;
      var title = data[obj].title;
      var published = data[obj].publish_date;
      $("#thumbnail").html("<img src=" + img +">");
      $("#author").html("<h2> Author: "+ author + "</h2>");
      $("#title").html("<h2> Title: " + title + "</h2>");
      $("#published").html("<h2> Published: "+ published + "</h2>");
    }
  });
}


