let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let turnX=false;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
let ctr=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        ctr++;
        console.log("box was clicked");
        if(turnO)
        {
            box.innerText="O";
            box.style.color="blue";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        if(ctr==9)
            drawGame();
    }
    )
}
)

const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}


const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}





const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}




const showWinner=(winner)=>{
    msg.innerText= `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const drawGame=()=>{

    msg.innerText="Game has ended with a draw!!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}




const checkWinner=()=>
{ let ctr=0;
    for(let pattern of winPatterns)
    {
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val==pos2val && pos1val==pos3val && pos2val==pos3val)
            {
                
            showWinner(pos1val);
            }
        }
        
    }
    
    
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);