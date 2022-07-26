
let playerscore=0;
let computerscore=0;
let result = document.querySelector('.result');
let score= document.querySelector('.score');
let announce= document.querySelector('.announce');

function getComputerChoice(){
let choice= Math.floor(Math.random()*3+1) ;
if (choice==3) {return ("rock");} else if(choice==2){return ("paper");} else {return ("scissors");}
}

function playerSelection(player){
bot=getComputerChoice();
playerinside=player.toLowerCase();
if(bot==playerinside){
    result.textContent=`tie computer: ${bot} , player: ${player}`;
    
}   
if (playerinside=="rock" && bot=="scissors") {
    result.textContent = `player wins! computer: ${bot} , player: ${player}`;
    return "playerwins";
    
} else if (playerinside=="scissors" && bot=="rock") {
    result.textContent =`computer wins! computer: ${bot} , player: ${player}`;
    return "computerwins";
}else if (playerinside=="paper" && bot=="rock") {
    result.textContent =`player wins! computer: ${bot} , player: ${player}`;
    return "playerwins";
}else if (playerinside=="rock" && bot=="paper") {
    result.textContent =`computer wins! computer: ${bot} , player: ${player}`;
    return "computerwins";
}else if (playerinside=="scissors" && bot=="paper") {

    result.textContent =`player wins! computer: ${bot} , player: ${player}`;
    return "playerwins";
}else if (playerinside=="paper" && bot=="scissors") {
    
    result.textContent =`computer wins! computer: ${bot} , player: ${player}`;
    return "computerwins";
}
}



function game(e){
    
    
        gamesession=e;
        if (gamesession=="playerwins"){
        playerscore = playerscore+1;
        score.textContent=`Score : computer:${computerscore} , player: ${playerscore}`;
        }else if (gamesession=="computerwins") {
        computerscore=computerscore+1;
        score.textContent=`Score : computer:${computerscore} , player: ${playerscore}`;
     }else {
        score.textContent=`Score : computer:${computerscore} , player: ${playerscore}`;
     }
    
if(playerscore>computerscore && playerscore==5){
    announce.textContent="PLAYER WINS !";
    playerscore=0;
    computerscore=0;
    
}else if (computerscore>playerscore && computerscore==5) {announce.textContent="COMPUTER WINS!"; playerscore=0;
computerscore=0;}
else if(computerscore==5 || playerscore==5) {announce.textContent="TIE :("; playerscore=0;
computerscore=0;} else {announce.textContent='';};
}

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach( button =>  {
    button.addEventListener('click', () =>
    {
        f=playerSelection(button.className);
        
    game(f);
    } ) 
}  ); 




