//JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){
			navigator.notification.beeb(1);
});//tap beep

$('#vibrar').tap(function(){
	navigator.notification.vibrate(5000);
});//tap vibrar
	
	},false); //beviceready
}); //ready
