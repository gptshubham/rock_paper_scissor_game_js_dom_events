const myHand = document.querySelector('#my_hand');
const computersHand = document.querySelector('#computers_hand');
let myScore = document.querySelector('#my_points');
let computersScore = document.querySelector('#computers_points');
let result = document.querySelector('.result');

const rock = document.querySelector('#rock');

rock.addEventListener('click', () => {
  setTimeout(rockClick, 1000);
  immediateChangesOnClick();
});

const rockClick = () => {
  myHand.innerHTML = '✊🏻';
  computersChoice();
  result_and_score();
};

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  setTimeout(paperClick, 1000);
  immediateChangesOnClick();
});

const paperClick = () => {
  myHand.innerHTML = '✋🏻';
  computersChoice();
  result_and_score();
};

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  setTimeout(scissorsClick, 1000);
  immediateChangesOnClick();
});

const scissorsClick = () => {
  myHand.innerHTML = '✌🏻';
  computersChoice();
  result_and_score();
};

const immediateChangesOnClick = () => {
  myHand.innerHTML = '🤜🏻';
  computersHand.innerHTML = '🤛🏻';
  result.innerHTML = '';
  myHand.classList.add('shakeMyHands');
  computersHand.classList.add('shakeComputerHands');
  setTimeout(() => {
    myHand.classList.remove('shakeMyHands');
    computersHand.classList.remove('shakeComputerHands');
  }, 1000);
};

function computersChoice() {
  const iconOptions = ['✊🏻', '✋🏻', '✌🏻'];
  const randomNumber = Math.floor(Math.random() * 3);
  computersHand.innerHTML = iconOptions[randomNumber];
}

function result_and_score() {
  if (myHand.innerHTML === '✊🏻' && computersHand.innerHTML === '✋🏻') {
    computersScore.innerHTML = Number(computersScore.innerHTML) + 1;
    result.innerHTML = 'Computer Won!';
  } else if (myHand.innerHTML === '✋🏻' && computersHand.innerHTML === '✊🏻') {
    myScore.innerHTML = Number(myScore.innerHTML) + 1;
    result.innerHTML = 'You Won!';
  } else if (myHand.innerHTML === '✊🏻' && computersHand.innerHTML === '✌🏻') {
    myScore.innerHTML = Number(myScore.innerHTML) + 1;
    result.innerHTML = 'You Won!';
  } else if (myHand.innerHTML === '✌🏻' && computersHand.innerHTML === '✊🏻') {
    computersScore.innerHTML = Number(computersScore.innerHTML) + 1;
    result.innerHTML = 'Computer Won!';
  } else if (myHand.innerHTML === '✌🏻' && computersHand.innerHTML === '✋🏻') {
    myScore.innerHTML = Number(myScore.innerHTML) + 1;
    result.innerHTML = 'You Won!';
  } else if (myHand.innerHTML === '✋🏻' && computersHand.innerHTML === '✌🏻') {
    computersScore.innerHTML = Number(computersScore.innerHTML) + 1;
    result.innerHTML = 'Computer Won!';
  } else {
    result.innerHTML = `It's a Tie!`;
  }
}
