let activePlayer = 0, currentScore, scores, diceNum, x, gamePlaying;
init();
document.querySelector('.btn-roll').addEventListener('click', roll);
document.querySelector('.btn-hold').addEventListener('click', hold);
document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
    activePlayer = 0;
    currentScore = 0;
    scores = [0,0];
    diceNum = 0;
    gamePlaying = true;
    x = document.querySelector('.dice');
    x.style.display = "none";
    document.getElementById('score-0').innerHTML = 0;
    document.getElementById('score-1').innerHTML = 0;
    document.getElementById('current-0').innerHTML = 0;
    document.getElementById('current-1').innerHTML = 0;
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
}

function roll()
{
    if(gamePlaying)
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

}

function hold()
{
    if (gamePlaying)
    {
        scores[activePlayer]+= currentScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        x = document.querySelector('.dice');
        x.style.display = "none";
        if(scores[activePlayer] >= 10)
        {
            document.getElementById('name-' + activePlayer).innerHTML = "WINNER!";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else
        {
            nextPlayer();
        }
    }

}

function nextPlayer()
{
    currentScore = 0;
    x = document.querySelector('.dice');
    x.style.display = "none";
    document.getElementById('current-' + activePlayer).textContent = currentScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}