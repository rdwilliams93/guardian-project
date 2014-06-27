if(screen.width>600){



 $(document).ready(function() {
    var list={"1":"uk-news","2":"football","3":"travel"};
    $.each(list, function(key, value) {
      $.ajax({
        url: "http://content.guardianapis.com/search?section=" + value + "&show-fields=trailText%2Cthumbnail",
        dataType: "jsonp",

        success: function(data) {
          $.each(data.response.results, function (i) {
            $( "#" + value ).append('<li><a href="' + this['webUrl'] + '">' + this['webTitle'] + '</a></li>');
            $( "#" + value ).append("<p>" + this['fields'].trailText + "</p>");
            $( "#" + value ).append("<img src = " + this['fields'].thumbnail + ">");
            if ( i === 4 ) {
            return false;}
          });
        }});
    });
  });

}

else{
 $(document).ready(function() {
    var list={"1":"uk-news","2":"football","3":"travel"};
    $.each(list, function(key, value) {
      $.ajax({
        url: "http://content.guardianapis.com/search?section=" + value + "&show-fields=trailText",
        dataType: "jsonp",

        success: function(data) {
          $.each(data.response.results, function (i) {
            $( "#" + value ).append('<li><a href="' + this['webUrl'] + '">' + this['webTitle'] + '</a></li>');
            $( "#" + value ).append("<p>" + this['fields'].trailText + "</p>");
            if ( i === 4 ) {
            return false;}
          });
        }});
    });
  });

}

$(function() {
    $( "#tabs" ).tabs();
    });
