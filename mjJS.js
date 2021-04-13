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
var idCounter = 0;
var hop = data[0].length;


function makeBoxOnBoard(color) {

    var newBox = document.createElement("div");

    newBox.id = ++idCounter;
    // newBox.id = "y" + y + "x" + x;

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
    makeBoxOnBoard("darkblue");  
    break;

    case "G":
    makeBoxOnBoard("darkgoldenrod");
    break;                           
                       
    case "P":
    makeBoxOnBoard("darkgreen");
    break;                           
          
    case "W":
    makeBoxOnBoard("black");
    break;                           
          
    default:
    makeBoxOnBoard("");
    break;                           
} }}               


  
function move(offsetPos) {

    var playerElement = document.getElementsByClassName("darkgreenBox")[0];
    console.log(playerElement.id);   
    var playerNextElementId = Number(playerElement.id) + Number(offsetPos);
    var playerNextBox = document.getElementById(playerNextElementId);
    console.log(playerNextBox);
    
  
    var wallElement =  document.getElementsByClassName("blackBox");

    var crateElement = document.getElementsByClassName("darkblueBox");  
    var crateNextElementId = Number(crateElement.id) + Number(offsetPos);
    var crateNextBox = document.getElementById(crateNextElementId);
    console.log(crateNextBox);

    switch (playerNextBox) {
        
        case (wallElement.id):
            return 0;
            break;

        case (crateElement.id):
           
            if (crateNextBox === wallElement.id || crateNextBox === crateElement.id) {
                return 0;
            }
            else {
                playerElement.classList.toggle("darkgreenBox");
                playerNextBox.classList.toggle("darkgreenBox");
                crateElement.classList.toggle("darkblueBox");
                crateNextBox.classList.toggle("darkblueBox");

                if (document.getElementsByClassName("darkgoldenrodBox") === null) {
                    alert("YOU WIN!!")
                }
            }
            break;

        default:
            playerElement.classList.toggle("darkgreenBox");
            playerNextBox.classList.toggle("darkgreenBox");
            break;
    }

 
    // if (playerNextElementId !== document.getElementsByClassName("blackBox")[0].id && playerNextElementId !== document.getElementsByClassName("darkblueBox")[0].id) {
    //     playerElement.classList.toggle("darkgreenBox");
    //     playerNextBox.classList.toggle("darkgreenBox");
    // }
    // else {
    //     return 0;
    // }

    // var x = playerElement.x;
    // var y = playerElement.y;

    // console.log(playerElement.id.y);
    // console.log(playerElement.id.x);

    // var nextVertical = Number(playerElement.id.y) + Number(a);
    // var nextHorizontal = Number(playerElement.id.x) + Number(b);
    // var nextId = "x" + nextHorizontal + "y" + nextVertical;

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

