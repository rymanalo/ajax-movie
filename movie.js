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
});