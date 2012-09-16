(function() {

	"use strict";

	app.Grid = function() {

		function Grid(nbColumn, nbLine, nbColor) {
		    console.log("new Grid");
		    this.matrix = new Array();
		    this.nbLine = nbLine;
		    this.nbColor = nbColor;
		    this.nbColumn = nbColumn;

		    for(var i=0; i< this.nbLine; i++){
		        this.matrix[i] = new Array();
		    }
		    
		    this.color = new Array();
		    this.createColor();
		    this.createPieceAlea();
		}
		
		Grid.prototype.createColor = function() {
			this.color[0] = "#58FAF4";
    		this.color[1] = "#FA58AC";
    		this.color[2] = "#FFFF00";
    		this.color[3] = "#40FF00";
    		this.color[4] = "#AC58FA";
    		this.color[5] = "#FF0000";
    		this.color[6] = "#FE9A2E";
    		this.color[7] = "#848484";
    		this.color[8] = "#D0FA58";
    		this.color[9] = "#5F04B4";
		}
		
		Grid.prototype.createPieceAlea = function() {
		    var nbPieces = this.nbColumn*this.nbLine;		// nombre de pions dans la grille
		    var tab = new Array();		// tableau temporaire qui servira dans l'echange de case
		    var cpt=0;							// compteur
		    
		    
		    // on remplit le tableau par les chiffre des couleurs : 
		    for(var i=0; i<this.nbColor; i++)
		    {
		        var x = (i+1)*nbPieces/this.nbColor;
			    for(var j=cpt; j<x;j++)
			    {
				    if(cpt<nbPieces)
				    {
					    tab[cpt]=i;
					    cpt++;
				    }
			    }
		    }		
		    
		    // on parcours toute la grille de pions et pour chaque case on lui affecte une couleur en prennant la valeur de la case du tableau tab.
		    var tir=0;					// nombre de tirage aleatoire
		    var i, j, tmp;					// variables temporaires

		    while(tir<1000*nbPieces)			// valeur arbitraire
		    {
			    i=Math.floor((Math.random()*nbPieces)+1);
			    do{
				    j=Math.floor((Math.random()*nbPieces)+1);
			    }while(i==j);
			
			    // on inverse les cases du tableau :		
			    tmp=tab[i];
			    tab[i]=tab[j];
			    tab[j]=tmp;
			    tir++;
		    }
		    // on remplit la grille de pion : 
		    var cpt2=0;
		    for(var l=0; l<this.nbLine; l++)
		    {
			    for(var c=0; c<this.nbColumn; c++)
			    {	
				    this.matrix[l][c]=new app.Piece(this.color[tab[cpt2]]);
				    cpt2++;
			    }
		    }
		}
		
		Grid.prototype.draw = function(context) {
		    for(var line=0; line<this.nbLine; line++)
		    {
			    for(var column=0; column<this.nbColumn; column++)
			    {
				    if(this.matrix[line][column]!=null)
				    {
					    this.matrix[line][column].draw(line, column, context);
				    }
			    }
		    }
		}
		

        return Grid;
        
	}();
})();
