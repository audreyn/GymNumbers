(function() {

	"use strict";

	app.Piece = function() {

		function Piece(color, number) {
		    this.color = color;
		    this.number = number;   
		    this.width = 20;
		}
		
		Piece.prototype.draw = function(line, column, context) {
		    context.save();
			context.beginPath();
			var x = 30+column*(this.width*2);
			var y = 30+line*(this.width*2);
            context.arc(x, y, this.width, 0, Math.PI*2, false); 
            context.closePath();
            context.fillStyle = this.color;
            context.fill();
            context.fillStyle = "black";
            context.fillText(this.number, x, y);
            context.restore();
		}

        return Piece;
        
	}();
})();
