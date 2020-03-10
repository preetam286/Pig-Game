/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let activePlayer = 0;
let currentScore = 0;
let diceNum = 0;
let x = document.querySelector('.dice');
x.style.display = "none";
document.querySelector('.btn-roll').addEventListener('click',function(){
    diceNum = Math.floor(Math.random() * 6 + 1);
    x.style.display = 'block';
    console.log(diceNum);
    x.src = 'img/dice-' + diceNum + '.png';
    if(diceNum!==1)
    {
        currentScore+= diceNum;
        document.getElementById('current-' + activePlayer).textContent = currentScore;
    }
    else
    {
        currentScore = 0;
        document.getElementById('current-' + activePlayer).textContent = currentScore;
    }
});