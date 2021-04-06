//--------------- global variables -----------------------------------------------
const myBoard = document.getElementById("board");
var idCounter = 0;


// ------ functions -----------------

function initBoard() {

    for (let boxTotalHeight = 0; boxTotalHeight < tileMap01.height;  boxTotalHeight++) {
       for (let boxTotalWidth = 0; boxTotalWidth < tileMap01.width; boxTotalWidth++) {

        if (tileMap01.mapGrid[boxTotalHeight,boxTotalWidth] = "B") {
            makeBoxOnBoard("darkblue")            
        } 
        else if (tileMap01.mapGrid[boxTotalHeight,boxTotalWidth] = "G") {
            makeBoxOnBoard("darkgoldenrod")            
        } 
        else if (tileMap01.mapGrid[boxTotalHeight,boxTotalWidth] = "P") {
            makeBoxOnBoard("darkgreen")            
        } 
        else if (tileMap01.mapGrid[boxTotalHeight,boxTotalWidth] = "W") {
            makeBoxOnBoard("black")            
        } 
        else {
            makeBoxOnBoard(default)
        }
       }           
       }
           
}


function makeBoxOnBoard(colorOfBox) {

    var newBox = document.createElement("div");

    newBox.id = ++idCounter;

    newBox.classList.add("box");
    newBox.classList.add(colorOfBox);

    myBoard.appendChild(newBox);
}





// ----------- run code lines ----------------