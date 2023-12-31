let cardsArray = [];
let score = 0;
let turns = 3;
// let ranCrd = (Math.floor(Math.random()*52)) + 1;
// let CreateImage = `<img id="crd" src="images/${ranCrd}.png" class="${ranCrd}">`;
let currentLevel = 10;
document.querySelector(".curlevel").innerHTML = currentLevel;
// cardsArray.push(ranCrd);


//create random cards
function ImageCreation(level){
    let CreateImage ="";
    for(i=0;i<level;i++){
        let rn = (Math.floor(Math.random()*52))+1;
        cardsArray.push(rn);
        CreateImage += `<img id="crd" src="images/${rn}.png" class="${rn}">`;
    }
    document.querySelector(".crd").innerHTML = CreateImage;
}
ImageCreation(currentLevel);

let rmCard;
function CreateTargetCard(arrLength){
    let randomCrd = (Math.floor(Math.random()*arrLength));
    rmCard = cardsArray[randomCrd];
    let SelectedCrd =  `<img src="images/${rmCard}.png" class="${rmCard}.">`
     document.querySelector("#rncard").innerHTML = SelectedCrd;
}
CreateTargetCard(cardsArray.length);


// console.log(cardsArray);
// for(i=1;i<currentLevel;i++){
//     let rn = (Math.floor(Math.random()*52))+1;
//     cardsArray.push(rn);
//     CreateImage += `<img id="crd" src="images/${rn}.png" class="${rn}">`;
// }

// console.log(cardsArray.length);




//check clciked card
document.querySelector(".crd").addEventListener("click",(det)=>{
let chosedCrd = det.target.className;
if(chosedCrd == rmCard){
    score+=10;
    currentLevel++;
    document.querySelector(".gamescore").innerHTML = score;
}
else if(chosedCrd !== rmCard){
    turns --;
   
    document.querySelector(".turnsrem").innerHTML = turns;
}
})


//next level
document.querySelector("#nextbtn").addEventListener("click",()=>{
    cardsArray = [];
    ImageCreation(currentLevel);
    
})