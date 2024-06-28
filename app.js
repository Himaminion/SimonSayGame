let gameseq=[];
let userseq=[];
let btns=["pink","blue","violet","orange"];
let started=false;
let level=0;
let highestscore=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
   if(started==false);
   {
    console.log("game is started");
    started=true;

    levelUp();
   }
});
function gameFlash(btn){
    btn.classList.add("gflash");
    setTimeout(function(){
        btn.classList.remove("gflash");
    },250);
    console.log(gameseq);
}
function userFlash(btn){
    btn.classList.add("uflash");
    setTimeout(function(){
        btn.classList.remove("uflash");
    },250);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randindx=Math.floor(Math.random()*3);
    let randId=btns[randindx];
    let randbtn=document.querySelector(`.${randId}`);
    gameseq.push(randId);
    gameFlash(randbtn);
}
function checkAns(idx) {
    
    if(userseq[idx]=== gameseq[idx])
        {
           if(userseq.length==gameseq.length)
            {
                setTimeout(levelUp(),1000);
            }
        }
        else
        {
            highestscore=Math.max(level,highestscore);
            h2.innerHTML = `Game Over! Your Score was <b>${level}...!</b> <h3 style="display: inline-block"> Highest score is ${highestscore}</h3> <br> <h2 style="margin-left:100px"> Press any key to start.</h2>`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "white";
            })
            reset(250);
        }
}
function btnpress(){

   let btn = this;
    userFlash(btn);
   
    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allbtns =document.querySelectorAll(".box");

for(btn of allbtns)
    {
        btn.addEventListener("click",btnpress);
    }

function reset() {
    started=false;
    gameseq =[];
    userseq=[];
    level=0;
}