//--------------- global variables -----------------------------------------------
const myBoard = document.getElementById("board");
const boardWidth = 950;
const boardHeight = 800;
var idCounter = 0;
let data = [
[" "," "," "," "," "," "," "," "],
["W","W","W","W","W","W","W","W"],
["W"," "," "," "," "," "," ","W"],
["W"," "," ","B"," "," ","G","W"],
["W","P"," ","B"," "," ","G","W"],
["W"," "," "," "," "," "," ","W"],
["W","W","W","W","W","W","W","W"],
[" "," "," "," "," "," "," "," "]
];



// ------ functions -----------------

// //Create a function to generate the elements that will represent the tiles from the map array.
// ▪ Give them a id and CSS.
// ▪ Append them into your map element.

function initBoard() {

    // console.log(tileMap01.height);
    // console.log(tileMap01.mapGrid[4][5]);


    for (let y = 0; y < 8; y++) {
       for (let x = 0; x < 8; x++) {

        if (data[x][y] = "B") {
            makeBoxOnBoard("darkblue");            
        } 
        else if (data[x][y] = "G") {
            makeBoxOnBoard("darkgoldenrod");            
        } 
        else if (data[x][y] = "P") {
            makeBoxOnBoard("darkgreen");            
        } 
        else if (data[x][y] = "W") {
            makeBoxOnBoard("black");            
        } 
        else {
            makeBoxOnBoard("grey");
        }
       }           
       }
           
}


function makeBoxOnBoard(colorOfBox) {

    var newBox = document.createElement("div");

    newBox.id = ++idCounter;
   
    newBox.classList.add("box");
    newBox.classList.add(colorOfBox + "Box");

    myBoard.appendChild(newBox);
}





// ----------- run code lines ----------------

initBoard();
console.log(tileMap01.mapGrid[4][6]);

// makeBoxOnBoard("darkgreen"); test passed