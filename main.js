


// Selecting elements
const score0 = document.querySelector('#score--0').textContent = 0;
const score1 = document.querySelector('#score--1').textContent = 0;
const dice = document.querySelector('.dice')
const rollDice = document.querySelector('.btn--roll')



score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden')


const roll = function(){
dice.classList.remove('hidden')
}

rollDice.addEventListener('click', roll)




