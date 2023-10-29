const emojis = [
"😢",
"😢",
"🤦‍♂️",
"🤦‍♂️",
"🤷",
"🤷",
"🐱‍👤",
"🐱‍👤",
"🎄",
"🎄",
"🥓",
"🥓",
"🚔",
"🚔",
"😪",
"😪"];
let openCards =[];
let shuffleEmojis = emojis.sort(()=>(Math.random()>0.5) ?2: -1)
for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div")
    box.className="item"
    box.innerHTML = shuffleEmojis[i]
    box.onclick= HandleClick;
    document.querySelector(".game").appendChild(box)
}
function HandleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen")
    openCards.push(this)}

    if(openCards.length == 2){
        setTimeout(checkMatch, 500)
    }
    }
    function checkMatch(){
        if(openCards[0].innerHTML == openCards[1].innerHTML){
            openCards[0].classList.add("BoxMatch")
            openCards[1].classList.add("BoxMatch")
        }else{
            
                openCards[0].classList.remove("boxOpen")
                openCards[1].classList.remove("boxOpen")
            
        }

        openCards = [];
        if(document.querySelectorAll(".BoxMatch").length == emojis.length){

            alert("Você ganhou")
        }
    }
