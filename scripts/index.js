//THIS SECTION IS DONE WITH JQUERY
//---------------------------------------------------------------------------------
const search = document.getElementById('search');

search.addEventListener('click', function(){
  isbn_search();
});

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

//THIS SECTION IS DONE WITH VANILLAJS
//----------------------------------------------------------------------------------------
// const thumbnail = document.querySelector("#thumbnail");
// const author = document.querySelector("#author");
// const title = document.querySelector("#title");
// const published = document.querySelector("#published");
// const search = document.getElementById('search');

// search.addEventListener('click', function(){
//   isbn_search();
// });


// function myjson(data) {
//   var ISBN = document.querySelector("#query").value;
//   var obj = 'ISBN:' + ISBN;
//   var authorData = data[obj].authors[0].name;
//   var img = data[obj].cover.large;
//   var titleData = data[obj].title;
//   var publishedData = data[obj].publish_date;
//   thumbnail.innerHTML = '<img src='+img +'>';
//   title.innerHTML= '<h2>Title: '+ titleData + '</h2>';
//   author.innerHTML = '<h2>Author: ' + authorData + '</h2>';
//   published.innerHTML = '<h3>Published: '+ publishedData + '</h3>';


// }

// function isbn_search(){
//   var ISBN = document.querySelector('#query').value;
//   var query = "https://openlibrary.org/api/books?bibkeys=ISBN:" + ISBN + "&format=jsonp&jscmd=data&callback=myjson";
//   var script = document.createElement('script');
//   script.type = "text/javascript";
//   script.src = query;
//   document.head.appendChild(script);

// }
