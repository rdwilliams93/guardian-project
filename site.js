  $.ajax({

    url: "http://content.guardianapis.com/uk-news?show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#uk-news" ).append("<li>" + '<p style="text-align:left">'   + '<a href="' + this['webUrl']  +'">' + this['webTitle'] + '</a>' + "<br>" +'<p style="text-align:left">' + this['fields'].trailText  + "</li>"+ '<hr>');
		  });
    }});
	 
	 $.ajax({

    url: "http://content.guardianapis.com/football?show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#football" ).append("<li>"  + '<a href="' + this['webUrl']  +'">' + this['webTitle'] + '</a>' + "<br>" +'<p style="text-align:left">' + this['fields'].trailText + "</li>" + "<hr>")

      });

    }});
	 $.ajax({

    url: "http://content.guardianapis.com/travel?show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#travel" ).append("<li>"  + '<a href="' + this['webUrl']  +'">' + this['webTitle'] + '</a>' + "<br>" + '<p style="text-align:left">' + this['fields'].trailText + "</li>" + "<hr>")

      });

    }});
	
	$(document).ready(function(){
			$("p").hide();
			});
