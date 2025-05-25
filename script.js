let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
// let newGa = document.querrySelector(".newg");
let newGa = document.querySelector(".newg");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;  // Player 0
let cnt=0; 

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

const resetGame =() =>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Button is clicked");
        // box.innerHTML= "X";
        if(turn0){
            box.innerHTML="O";
            turn0 = false;
        } else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled = true;
    cnt++;
        // checkWinner();
        

        let isWinner = checkWinner();
    
        if (cnt === 9 && !isWinner) {
          gameDraw();
        }
      });
    });
    
    const gameDraw = () => {
      msg.innerText = `Game was a Draw.`;
      msgContainer.classList.remove("hide");
      disableBoxes();
    };
//     });
// });



const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText ="";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();

}

const checkWinner= ()=>{
  for(pattern of winPatterns){
     
   let pos0=     boxes[pattern[0]].innerText;
   let pos1=     boxes[pattern[1]].innerText;
   let pos2=     boxes[pattern[2]].innerText;
     
  if(pos0!="" && pos1!="" && pos2!=""){
     if(pos0===pos1 && pos1===pos2){
        // console.log("winner");

        showWinner(pos1);
     }
  }

  }
};

newGa.addEventListener("click" ,resetGame);
reset.addEventListener("click", resetGame);