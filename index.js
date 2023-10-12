
let hasBlackJack=false;
let message="";
let sumEl=document.getElementById("sum-el");
//let SumEl=document.querySelector("#sum-el")
let messageEl=document.getElementById("message-el")
let cardEl=document.getElementById("cards-el")
let sum=0
let cards=[]

//generates rndom number
function rand(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber===1)randomNumber=11;
    if(randomNumber>10)
    randomNumber=10
    return randomNumber;
}
//initialises some values and sarts the game
function startGame(){
    let firstCard=rand();
 let secondCard=rand();
sum=firstCard+secondCard
 cards=[firstCard,secondCard];
 isAlive=true;

    renderGame()
}
function renderGame(){
    sumEl.textContent="Sum: "+sum;
    // cardEl.textContent="Cards: "+ cards[cards.length-2] +" " +cards[cards.length-1];
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" ";
    }
        if(sum<=20 && isAlive){

        message="do you want to draw a card?"
    }
    else if(sum===21){
        message="whoo! you have got a blackJack !"
        hasBlackJack=true;
    }
    else{
        message="you are out of the game!"
        isAlive=false;
    }
    messageEl.textContent=message;    
}

function newCard(){
    
    if(isAlive && sum<=20){
    let card=rand();
    cards.push(card);
    sum+=card;
    renderGame()
    }
    else{
        message="You cannot draw any more cards"
        messageEl.textContent=message
    }
    
}
//creating player objects
let player={
    name:"xyz",
    chips:50

}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + " : " + player.chips

console.log("added a new line for a new feature branch");
