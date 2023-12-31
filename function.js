let cardsArray = [];
let score = 0;
let turns = 3;
let ranCrd = (Math.floor(Math.random()*52)) + 1;
let CreateImage = `<img id="crd" src="images/${ranCrd}.png" class="${ranCrd}">`;
let currentLevel = 1;
document.querySelector(".curlevel").innerHTML = currentLevel;
cardsArray.push(ranCrd);



for(i=1;i<currentLevel;i++){
    let rn = (Math.floor(Math.random()*52))+1;
    cardsArray.push(rn);
    CreateImage += `<img id="crd" src="images/${rn}.png" class="${rn}">`;
}

// console.log(cardsArray.length);
let randomCrd = (Math.floor(Math.random()*cardsArray.length));
let rmCard = cardsArray[randomCrd];
let SelectedCrd =  `<img src="images/${rmCard}.png" class="${rmCard}.">`
 document.querySelector("#rncard").innerHTML = SelectedCrd;


document.querySelector(".crd").innerHTML = CreateImage;

document.querySelector(".gamepanel").addEventListener("click",(det)=>{
let chosedCrd = det.target.className;
if(chosedCrd == rmCard){
    score+=10;
    document.querySelector(".gamescore").innerHTML = score;
}
else{
    turns --;
   
    document.querySelector(".turnsrem").innerHTML = turns;
}
})

document.querySelector("#nextbtn").addEventListener("click",()=>{
    currentLevel++;
    alert("clicked " + currentLevel);
    for(i=1;i<currentLevel;i++){
        let rn = (Math.floor(Math.random()*52))+1;
        cardsArray.push(rn);
        console.log(rn);
        CreateImage += `<img id="crd" src="images/${rn}.png" class="${rn}">`;
        
    }
    document.querySelector(".crd").innerHTML = CreateImage;
})