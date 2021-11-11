'use strict';



// Selecting elements
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const score0 = document.querySelector('#score--0')
const score1 = document.querySelector('#score--1')
const current0 = document.getElementById('current--0')
const current1 = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')
const rollDice = document.querySelector('.btn--roll')
const newDice = document.querySelector('.btn--new')
const holdDice = document.querySelector('.btn--hold')



//start-up conditions
score0.textContent = 0;
score1.textContent = 0;
current0.textContent = 0; 
current1.textContent = 0; 

diceEl.classList.add('hidden')

let scores = [0, 0]
let currentScore = 0;
let activePlayer = 0; 

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')
}

rollDice.addEventListener('click', function(){
    const dice = Math.trunc(Math.random() * 6) +1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1){
        currentScore += dice; 
        document.getElementById(`current--${activePlayer}`
        ).textContent = currentScore;
        

    }else{
        switchPlayer();
        
    }

});

holdDice.addEventListener('click', function(){
    scores[activePlayer] += currentScore; 
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    console.log(scores[activePlayer])
    switchPlayer();
})






