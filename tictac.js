let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".head");
let msg=document.querySelector("#msg");
let turnO=true;
const resetGame=()=>{
    let turnO=true;
   enableBox();
   msgContainer.classList.add("head");
}
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
       console.log("clicked");
       if(turnO){
        box.innerText="X";
        turnO=false;
       } 
       else{
        box.innerText="O";
        turnO=true;
       }
       box.disabled="true";
       checkWinner();
    });
});
resetBtn.addEventListener("click",()=>{
    console.log("Reset");
});
const showWinner=(winner)=>{
    msg.innerText=`Congratulations The Winner is ${winner}`;
    msgContainer.classList.remove("head");
}
const checkWinner=()=>{
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
    
    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val===pos2val && pos2val==pos3val){       
            showWinner(pos1val);
            disableBox();
        }
    }
}
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);