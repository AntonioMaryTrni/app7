// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function() { //escuchador de eventos
		$('#izquierda').on("swipeleft",function(){ //deslizar a la izquierda
			navigator.notification.alert("Deslizó hacia la izquierda",function(){"aplicación 7", "Ok"}); //aparece mjs alert
		});//cierra swipe izquierda
		$('#derecha').on("swiperight",function() {//deslizar derecha 
			navigator.notification.confirm("¿Qué quieres hacer?",function(op){//aparece mjs para confirmar
				switch(op) //variable op para las opciones
				{
					case 1: 
					navigator.notification.beep(1); //suena el dispositivo
					break;
					
					case 2: 
					navigator.notification.vibrate(3000);//vibra el dispositivo
					break;
				}
			});
		},false);
}); 
});