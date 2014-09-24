 // Trigger the joy!
function wooload(maskColor,iconColor,fontColor){ //Create the "loading" layout and append it to the body
	document.body.style.overflow = "hidden";
	// This code create and append a mask div to hide the site elements loading...
	var loader = document.createElement('div');
		loader.className = 'loader';
		loader.style.background = maskColor;
		loader.style.color = fontColor;		
		document.body.appendChild(loader);

		function divCreator(varName, id){ // This function create and append a loading icon to window
			var varName = document.createElement('div');
				varName.className = 'piece';
				varName.style.background = iconColor;		
			document.querySelector('.loader').appendChild(varName).setAttribute('id',id);
		}
		// Call the previous function five times, making an icon of five pieces  
		divCreator("piece", "one");
		divCreator("piece2", "two");
		divCreator("piece3", "three");
		divCreator("piece4", "four");
		divCreator("piece5", "five");
}
function start(){ // When the page loads, this function hide the "loading" layout 
	var classe = document.querySelector('.loader').className;
	document.querySelector('.loader').className = classe + " ready";
	window.setTimeout( removeLoading, 1000 );
}
function removeLoading(){ // When "loading" layout hiding is done... this function remove not necessary elements from the DOM. 
	$('img').fadeIn();
	document.querySelector('.loader').remove();
	document.body.style.overflow = "auto";
}
window.onload = function(){ // On window load is done, call the functions that will hide and remove the "loading" layout
	start();
}