$(document).ready(function(){

$("#password1intro").click(function(){
 $(this).fadeOut("slow");
 $("#password1").fadeIn("slow");
 $("#chain").draggable();
 $("#chain2").draggable();
 $("#chain3").draggable();
 $("#chain4").draggable();

});//click

$("#password1button").click(function(){
$("#password1").fadeOut("slow");
$("#password2intro").fadeIn("slow");
});//click 

$("#password2intro").click(function(){
$(this).fadeOut("slow");
$("#password2").fadeIn("slow");

});//click

$("#password2button").click(function(){
$("#password2").fadeOut("slow");
$("#password3intro").fadeIn("slow");

});//click

$("#password3intro").click(function(){
 $(this).fadeOut("slow");
 $("#password3").fadeIn("slow");
});//click

$("#meat").click(function(){
 $("#monkey").toggle();

});//click

 $("#password3button").click(function(){
$("#password3").fadeOut("slow");
$("#password1intro").fadeIn("slow");

 });//click




});// ready 