let cardsArray = [];
let score = 0;
let turns = 3;
let gameFinish = `<h2 class="finish">You Won!!</h2>`;
// let ranCrd = (Math.floor(Math.random()*52)) + 1;
// let CreateImage = `<img id="crd" src="images/${ranCrd}.png" class="${ranCrd}">`;

let currentLevel = localStorage.getItem("level");
if (currentLevel === null) {
    
    currentLevel = 1;
  
    localStorage.setItem("level", currentLevel);
  }
document.querySelector(".curlevel").innerHTML = currentLevel;
// cardsArray.push(ranCrd);

document.querySelector(".btns").style.visibility = "hidden"
//create random cards
let CreateImageBack = "";
function ImageCreation(level){
    let CreateImage ="";
    

    for(i=0;i<level;i++){
        let rn = (Math.floor(Math.random()*52))+1;
        cardsArray.push(rn);
        CreateImage += `<img id="crd" src="images/${rn}.png" class="${rn}">`;
        CreateImageBack += `<img id="crd" src="images/back.png" class="${rn}">`;
    }
    document.querySelector(".crd").innerHTML = CreateImage;
   
    if(level<10){
        document.querySelector(".crd").style.marginTop = "235px"
    }  
}

   
ImageCreation(currentLevel);

setTimeout(()=>{
    document.querySelector(".crd").innerHTML = CreateImageBack;
    
},5000);

let rmCard;
function CreateTargetCard(arrLength){
    let randomCrd = (Math.floor(Math.random()*arrLength));
    rmCard = cardsArray[randomCrd];
    let SelectedCrd =  `<img src="images/${rmCard}.png" class="${rmCard}.">`
     document.querySelector("#rncard").innerHTML = SelectedCrd;
}
CreateTargetCard(cardsArray.length);






//check clciked card
document.querySelector(".crd").addEventListener("click",(det)=>{
CreateImageBack='';
let chosedCrd = det.target.className;
if(chosedCrd == rmCard){
    score+=10;
    currentLevel++;
    localStorage.setItem("level",currentLevel);
    document.querySelector(".gamescore").innerHTML = score;
    document.querySelector(".crd").innerHTML = gameFinish;
    document.querySelector(".btns").style.visibility = "visible"

}
else if(chosedCrd !== rmCard){
    turns --;
    document.querySelector(".turnsrem").innerHTML = turns;
    if(turns <0){
        turns = 0;
        document.querySelector(".turnsrem").innerHTML = turns;
        document.querySelector(".crd").innerHTML = `<h2 class="finish">You Lose, Try Again!!</h2>`
        document.querySelector(".btns").style.visibility = "visible"
    }
}
})


//next level
document.querySelector("#nextbtn").addEventListener("click",()=>{
    cardsArray = [];
    ImageCreation(currentLevel);
    CreateTargetCard(cardsArray.length);
    document.querySelector(".curlevel").innerHTML = currentLevel;
    document.querySelector(".btns").style.visibility = "hidden"
    setTimeout(()=>{
        document.querySelector(".crd").innerHTML = CreateImageBack;
        
    },5000);
    
})

document.querySelector("#resetbtn").addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
})