
let playerscore=0;
let computerscore=0;

function getComputerChoice(){
let choice= Math.floor(Math.random()*3+1) ;
if (choice==3) {return ("rock");} else if(choice==2){return ("paper");} else {return ("scissors");}
}

function playerSelection(player){
bot=getComputerChoice();
playerinside=player.toLowerCase();
if(bot==playerinside){
    console.log(`tie computer: ${bot} , player: ${player}`);
    
}   
if (playerinside=="rock" && bot=="scissors") {
    console.log(`player wins! computer: ${bot} , player: ${player}`);
    return "playerwins";
    
} else if (playerinside=="scissors" && bot=="rock") {
    console.log(`computer wins! computer: ${bot} , player: ${player}`);
    return "computerwins";
}else if (playerinside=="paper" && bot=="rock") {
    console.log(`player wins! computer: ${bot} , player: ${player}`);
    return "playerwins";
}else if (playerinside=="rock" && bot=="paper") {
    console.log(`computer wins! computer: ${bot} , player: ${player}`);
    return "computerwins";
}else if (playerinside=="scissors" && bot=="paper") {

    console.log(`player wins! computer: ${bot} , player: ${player}`);
    return "playerwins";
}else if (playerinside=="paper" && bot=="scissors") {
    
    console.log(`computer wins! computer: ${bot} , player: ${player}`);
    return "computerwins";
}
}



function game(){
    
    for (let i = 0; i < 5; i++) {
        gamesession=playerSelection(prompt("type rock,paper or scissors !"));
        if (gamesession=="playerwins"){
        playerscore = playerscore+1;
        console.log(`Score : computer:${computerscore} , player: ${playerscore}`);
        }else if (gamesession=="computerwins") {
        computerscore=computerscore+1;
        console.log(`Score : computer:${computerscore} , player: ${playerscore}`);
     }else {
        console.log(`Score : computer:${computerscore} , player: ${playerscore}`);
     }
    }
if(playerscore>computerscore){
    console.log("PLAYER WINS !")
    
}else if (computerscore>playerscore) {console.log("COMPUTER WINS!");}
else {console.log("TIE :(")};
}
game();