$(function (){

var $tabs-1 = $('#tabs-1');

$.ajax(
    type:'GET',
    url:"http://content.guardianapis.com/football?date-id=date%2Flast24hours",
    ,
    success:function(tabs-1) {
   $.each(tabs-1, function (i, order) {
   		$tabs-1.append('<li>' + data + 
   			'</li>')
    } 
    });
  });