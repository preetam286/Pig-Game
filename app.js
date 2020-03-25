let activePlayer = 0, currentScore, scores, diceNum, x;
init();
document.querySelector('.btn-roll').addEventListener('click', roll);
document.querySelector('.btn-hold').addEventListener('click', hold);

function init()
{
    activePlayer = 0;
    currentScore = 0;
    scores = [0,0];
    diceNum = 0;
    x = document.querySelector('.dice');
    x.style.display = "none";
}

function roll()
{
    diceNum = Math.floor(Math.random() * 6 + 1);
    let x = document.querySelector('.dice');
    x.style.display = 'block'
    x.src = 'img/dice-' + diceNum + '.png';
    if(diceNum!==1)
    {
        currentScore+= diceNum;
        document.getElementById('current-' + activePlayer).textContent = currentScore;
    }
    else
    {
        nextPlayer();
    }
}

function hold(){
    scores[activePlayer]+= currentScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    x = document.querySelector('.dice');
    x.style.display = "none";
    nextPlayer();
}

function nextPlayer()
{
    currentScore = 0;
    document.getElementById('current-' + activePlayer).textContent = currentScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}