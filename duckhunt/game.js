function init (){

	//From: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
	var ctx = document.getElementById('game_canvas').getContext('2d');
	//create context for the loading the images
	var img = new Image();
	img.src = "duckhunt-background.gif";
	//import background

	var sheet = new Image();
	sheet.src = "duckhunt_various_sheet.png";
	//import sprite sheet

	img.onload = function(){
		ctx.drawImage(img, 0, 0);
		//draw background first
		ctx.drawImage(sheet, 0, 119, 40, 30, 60, 30, 40, 30);
		//draws bird 1 by slicing sprite sheet
		ctx.drawImage(sheet, 300, 119, 40, 30, 200, 100, 40, 30);
		//draws bird 2 by slicing sprite sheet

		
	};
}


function wait(delay){
	//enacts a while loop that delays program
	mark = new Date();
	//returns current date in milliseconds
	while((new Date())-mark <= delay*1000){}
}
