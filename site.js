 $(document).ready(function() {
    var list={"1":"uk-news","2":"football","3":"travel"};
    $.each(list, function(key, value) {
      $.ajax({
        url: "http://content.guardianapis.com/search?section=" + value + "&show-fields=trailText",
        dataType: "jsonp",

        success: function(data) {
          $.each(data.response.results, function (i) {
            $( "#" + value ).append('<h5><a href="' + this['webUrl'] + '">' + this['webTitle'] + '</a></h5>');
            $( "#" + value ).append("<li>" + this['fields'].trailText + "</li>");
            if ( i === 4 ) {
            return false;}
          });
        }});
    });
  });
			
	$(function() {
		$( "#tabs" ).tabs();
	  });

