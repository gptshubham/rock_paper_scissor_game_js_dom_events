const myHand = document.querySelector('#my_hand');
const computersHand = document.querySelector('#computers_hand');
let myScore = document.querySelector('#my_points');
let computersScore = document.querySelector('#computers_points');
let result = document.querySelector('.result');

let myHandValue;
let computersHandValue;

const rock = document.querySelector('#rock');

rock.addEventListener('click', () => {
  setTimeout(rockClick, 1000);
  immediateChangesOnClick();
});

const rockClick = () => {
  myHand.innerHTML = '✊🏻';
  myHandValue = 'rock';
  computersHandValue = setComputersHandValue();
  setScore();
};

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  setTimeout(paperClick, 1000);
  immediateChangesOnClick();
});

const paperClick = () => {
  myHand.innerHTML = '✋🏻';
  myHandValue = 'paper';
  computersHandValue = setComputersHandValue();
  setScore();
};

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  setTimeout(scissorsClick, 1000);
  immediateChangesOnClick();
});

const scissorsClick = () => {
  myHand.innerHTML = '✌🏻';
  myHandValue = 'scissor';
  computersHandValue = setComputersHandValue();
  setScore();
};

const immediateChangesOnClick = () => {
  myHand.innerHTML = '🤜🏻';
  computersHand.innerHTML = '🤛🏻';
  result.innerHTML = '';
};

function setComputersHandValue() {
  const randomNumber = Math.floor(Math.random() * 12 + 1);
  if (randomNumber >= 1 && randomNumber <= 4) {
    computersHand.innerHTML = '✊🏻';
    computersHandValue = 'rock';
  } else if (randomNumber >= 5 && randomNumber <= 8) {
    computersHand.innerHTML = '✋🏻';
    computersHandValue = 'paper';
  } else {
    computersHand.innerHTML = '✌🏻';
    computersHandValue = 'scissor';
  }
  return computersHandValue;
}

function setScore() {
  if (myHandValue === 'rock' && computersHandValue === 'paper') {
    computersScore.innerHTML = Number(computersScore.innerHTML) + 1;
    result.innerHTML = 'You Loose';
  } else if (myHandValue === 'paper' && computersHandValue === 'rock') {
    myScore.innerHTML = Number(myScore.innerHTML) + 1;
    result.innerHTML = 'You Win';
  } else if (myHandValue === 'rock' && computersHandValue === 'scissor') {
    myScore.innerHTML = Number(myScore.innerHTML) + 1;
    result.innerHTML = 'You Win';
  } else if (myHandValue === 'scissor' && computersHandValue === 'rock') {
    computersScore.innerHTML = Number(computersScore.innerHTML) + 1;
    result.innerHTML = 'You Loose';
  } else if (myHandValue === 'scissor' && computersHandValue === 'paper') {
    myScore.innerHTML = Number(myScore.innerHTML) + 1;
    result.innerHTML = 'You Win';
  } else if (myHandValue === 'paper' && computersHandValue === 'scissor') {
    computersScore.innerHTML = Number(computersScore.innerHTML) + 1;
    result.innerHTML = 'You Loose';
  } else {
    result.innerHTML = `It's a Draw`;
  }
}
