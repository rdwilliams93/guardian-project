 $(document).ready(function() {
    var list={"1":"news","2":"football","3":"travel"};
    $.each(list, function(key, value) {
      $.ajax({
        url: "http://content.guardianapis.com/search?section=" + value + "&show-fields=trailText",
        dataType: "jsonp",

        success: function(data) {
          $.each(data.response.results, function (i) {
            $( "#" + value ).append('<h4><a href="' + this['webUrl'] + '">' + this['webTitle'] + '</a></h4>');
            $( "#" + value ).append("<li>" + this['fields'].trailText + "</li>");
            if ( i === 4 ) {
            return false;}
          });
        }});
    });
  });


 

  $(document).ready(function(){
      $("p").hide();
      });
