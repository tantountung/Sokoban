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
// var hop = data[0].length;


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
    var playerNextTwoElementId = Number(playerElement.id) + Number(2*offsetPos);
    var playerNextBox = document.getElementById(playerNextElementId);
    var jumpTwoBox = document.getElementById(playerNextTwoElementId);
    console.log(playerNextBox);
   
    if (playerNextBox.classList.contains("blackBox")) {
        return;
    }

    else if (playerNextBox.classList.contains("darkblueBox"))  {
        
        if (jumpTwoBox.classList.contains("blackBox") || jumpTwoBox.classList.contains("darkblueBox")) {
            return;
        }
        else {
            playerNextBox.classList.toggle("darkblueBox");
            jumpTwoBox.classList.toggle("darkblueBox");
            playerElement.classList.toggle("darkgreenBox");
            playerNextBox.classList.toggle("darkgreenBox");

            var goalBox = document.getElementsByClassName("darkgoldenrodBox");
            var totalGoal = 0;

            for(let i = 0; i < goalBox.length; i++) {
              if(goalBox[i].classList.contains("darkblueBox"))
                 {
                      totalGoal++;
                  }
             }
            
            if(totalGoal == goalBox.length)
                {
                    alert("YOU WIN!!!")
                }
        }

    }

    else {
        playerElement.classList.toggle("darkgreenBox");
        playerNextBox.classList.toggle("darkgreenBox");
    }

}

function winStatus () {    
    

}

winStatus();
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

