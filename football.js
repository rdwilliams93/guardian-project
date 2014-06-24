  $.ajax({

    url: "http://content.guardianapis.com/search?section=football",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#football" ).append("<li>" + this['webTitle'] + "</li>");

      });

    }});