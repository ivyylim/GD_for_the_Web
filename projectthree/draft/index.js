$(document).ready(function(){
$("#purple").click(function(){
  $(this).fadeOut("fast");
  $("#telephone").show();
   $("#li01 p").hide("fast");
});//click


$("#telephone").click(function(){
  $(this).fadeOut("fast");
 $("#telephonee").show();
  $("#window").show();
  $("#sky").show();
});//click

$("#sky").click(function(){
  $(this).fadeOut("slow");
  $("#telephonee").fadeOut("fast");
  $("#window").fadeOut("fast");
  $("#li01 p").fadeOut("fast");
  $("#obese").show();
  $("#li02 p").show();
  
 });//click

$("#obese").click(function(){
$(this).fadeOut("slow");
$("#tigerroar").show();
$("#clock").show();
$("#grass").show();
$("#li02 p").hide();

});//click

$("#grass").click(function(){
$(this).fadeOut("slow");
$("#tigerroar").fadeOut("fast");
$("#clock").fadeOut("fast");
$("#grass").fadeOut("fast");
$("#roadto").show("fast");
$("#milkshake").show("fast");
$("#minicooper").show("fast");
$("#li03 p").show();
});//click


$("#roadto").click(function(){
  $(this).fadeOut("slow");
  $("#milkshake").fadeOut("fast");
  $("#minicooper").fadeOut("fast");
  $("#li03 p").hide();
  $("#dog").show();
  $("#boxingring").show();
  $("#li04p").show();

  });//click

$("#boxingring").click(function(){
	 $(this).fadeOut("slow");
	 $("#dog").fadeOut();
	 $("#punch").show().draggable();
	 $("#gorilla").show();
	 $("#gorillahabitat").show();
});//click 

$("#gorillahabitat").click(function(){
	 $(this).fadeOut("slow");
	  $("#punch").fadeOut();
	  $("#gorilla").fadeOut();
	  $("#dogplayful").show();

});//click 




});// ready 