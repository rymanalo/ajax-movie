$(document).ready(function(){
  $('form').keyup('click', function() {
    var form = $(this);
    var movie_title = $('input');
    var movie_input = $('input').val();
    var input = movie_input.replace(' ', '%20');
    $.ajax({
      url: 'http://www.omdbapi.com/?s=' + input,
      method: 'get',
      dataType: 'jsonp',
      success: function(movie) {
       var movies = movie['Search'];
       var availableTags = [];
        for(var i = 0; i < movies.length; i+=1) {
          availableTags.push(movies[i]['Title']);
        }
        $(function() {
          $( "#movieinput" ).autocomplete({
            source: availableTags
          });
        });
      }
    });
  });

  $('form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    var movie_title = $('input');
    var movie_input = $('input').val();
    var input = movie_input.replace(' ', '%20');
    $.ajax({
      url: 'http://www.omdbapi.com/?t=' + input,
      method: 'get',
      dataType: 'jsonp',
      success: function(movie) {
        movie_title.val("");
        movie_title.focus();
        var title = movie['Title'];
        var genre = movie['Genre'];
        var plot = movie['Plot'];

        $('.descriptions').find('li').remove();
        document.getElementsByTagName('h2')[0].innerHTML = "";

        $('.movies').append(title);
        $('<li>' + genre + '</li>').insertAfter('.genre');
        $('<li>' + plot + '</li>').insertAfter('.plot');
      }
    });
  });
});