$(document).ready(function(){
  		$("#middle").mouseenter(function(event) {
  			$(this).fadeTo("fast", 0.9)
  		});
		$('#middle').mouseleave(function(){
            $(this).fadeTo('fast', 0.3);
        });
 $(".imgright").draggable();


	});//ready