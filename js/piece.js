(function() {

	"use strict";

	app.Piece = function() {

		function Piece(color) {
		    this.color = color;
		    this.width = 15;
		}
		
		Piece.prototype.draw = function(line, column, context) {
		    console.log("piece.draw "+line + " "+column);
		    context.save();
			context.beginPath();
			var x = 30+column*this.width;
			var y = 30+line*this.width;
            context.arc(x, y, this.width, 0, Math.PI*2, false); 
            context.closePath();
            context.fillStyle = this.color;
            context.fill();
            context.restore();
		}

        return Piece;
        
	}();
})();
