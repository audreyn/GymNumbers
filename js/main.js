(function() {

	"use strict";
	
	window.requestAnimFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function( /* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 1000 / 20);
        };
    })();
	
	var canvas = document.getElementById("canvas");

	var game = new app.Game(canvas);

	var width = window.innerWidth;
	var height = window.innerHeight;
	
	canvas.width = 1024;
	canvas.height = 600;
	document.body.appendChild(canvas);

	
    game.init();
    
})();
