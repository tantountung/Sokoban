//--------------- global variables -----------------------------------------------
const myBoard = document.getElementById("board");
const data = [
[" "," "," "," "," "," "," "," "],
["W","W","W","W","W","W","W","W"],
["W"," "," "," "," "," "," ","W"],
["W"," "," ","B"," "," ","G","W"],
["W","P"," ","B"," "," ","G","W"],
["W"," "," "," "," "," "," ","W"],
["W","W","W","W","W","W","W","W"],
[" "," "," "," "," "," "," "," "]
];



function makeBoxOnBoard(color, y, x) {

    var newBox = document.createElement("div");
    newBox.id = "y" + y + "x" + x;

    newBox.classList.add("box");
    newBox.classList.add(color + "Box");
    myBoard.appendChild(newBox);
}

for (let y = 0; y < data.length; y++) {
        for (let x = 0; x < data[y].length; x++) { 

        // console.log(data[4][1]); test passed
        // console.log(data[y][x]);

switch (data[y][x]) {

    case "B":
    makeBoxOnBoard("darkblue", y, x);  
    break;

    case "G":
    makeBoxOnBoard("darkgoldenrod", y, x);
    break;                           
                       
    case "P":
    makeBoxOnBoard("darkgreen", y, x);
    break;                           
          
    case "W":
    makeBoxOnBoard("black", y, x);
    break;                           
          
    default:
    makeBoxOnBoard("grey", y, x);
    break;                           
} }}               


  
function move(offsetPos) {
    var playerElement = document.getElementsByClassName("darkgreenBox")[0];
    // console.log(playerElement.id); test passed

    // let x = playerElement.id.x;
    // let y = playerElement.id.y;

    var playerNextElementId = Number(playerElement.id) + Number(offsetPos);
    console.log(playerNextElementId);
    // var playerNextBox = document.getElementById(playerNextElementId);
    // console.log(playerNextBox);

    // if (playerNextElementId !== 0 && playerNextElementId <= idCounter) {
    //     playerElement.classList.toggle("player");
    //     playerNextBox.classList.toggle("player");
    // }


}


// if (data[y][x] = "B")
        //        makeBoxOnBoard("darkblue", y, x);            
                
        // else if (data[y][x] = "G") 
        //     makeBoxOnBoard("darkgoldenrod", y, x);                    
             
        // else if (data[y][x] = "P") 
        //     makeBoxOnBoard("darkgreen", y, x);                         
             
        //  else if (data[y][x] = "W") 
        //     makeBoxOnBoard("black", y, x);                       
            
        //  else 
        //     makeBoxOnBoard("grey", y, x);             
            
    
        // }}


// ----------- run code lines ----------------

// initBoard();
// console.log(tileMap01.mapGrid[4][6]);

// makeBoxOnBoard("darkgreen"); test passed

