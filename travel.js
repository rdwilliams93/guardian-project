  $.ajax({

    url: "http://content.guardianapis.com/search?section=travel",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#travel" ).append("<li>" + this['webTitle'] + "</li>");

      });

    }});