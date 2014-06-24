  $.ajax({

    url: "http://content.guardianapis.com/search?section=news",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#news" ).append("<li>"  + '<a href="' + this['webUrl']  +'">' + this['webTitle'] + '</a>' + "</li>");
		

      });

    }});
	 $.ajax({

    url: "http://content.guardianapis.com/search?section=football",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#football" ).append("<li>"  + '<a href="' + this['webUrl']  +'">' + this['webTitle'] + '</a>' + "</li>")

      });

    }});
	 $.ajax({

    url: "http://content.guardianapis.com/search?section=travel",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#travel" ).append("<li>"  + '<a href="' + this['webUrl']  +'">' + this['webTitle'] + '</a>' + "</li>")

      });

    }});