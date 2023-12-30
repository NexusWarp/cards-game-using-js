let ranCrd = (Math.floor(Math.random()*52)) + 1;
let CreateImage = `<img id="crd" src="images/${ranCrd}.png">`;


let randomCrd = (Math.floor(Math.random()*52)) + 1;
let SelectedCrd =  `<img src="images/${randomCrd}.png">`
 document.querySelector("#rncard").innerHTML = SelectedCrd;
for(i=1;i<52;i++){
    let rn = (Math.floor(Math.random()*52))+1;
    console.log(rn);
    CreateImage += `<img id="crd" src="images/${rn}.png">`;
}

document.querySelector(".crd").innerHTML = CreateImage;

