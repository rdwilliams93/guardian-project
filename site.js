 $.ajax({

    url: "http://content.guardianapis.com/news?show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#news" ).append("<h4>"  + '<a href="' + this['webUrl']  +'">' + this['webTitle'] + '</a>' + "</h4>");
        $("#news").append("<li>" + this['fields'].trailText + "</li>");
      });
    /*$( "#news" ).append("<li>"  + field {this['trailText'] + "</li>");
      });*/

    }});
   $.ajax({

    url: "http://content.guardianapis.com/football?show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#football" ).append("<h4>"  + '<a href="' + this['webUrl']  +'">' + this['webTitle'] + '</a>' + "</h4>");
        $("#football").append("<li>" + this['fields'].trailText + "</li>");
      });

    }});
   $.ajax({

    url: "http://content.guardianapis.com/travel?show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#travel" ).append("<h4>"  + '<a href="' + this['webUrl']  +'">' + this['webTitle'] + '</a>' + "</h4>");
        $("#travel").append("<li>" + this['fields'].trailText + "</li>");
      });

    }});

  $(document).ready(function(){
      $("p").hide();
      });
