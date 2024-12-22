const myHand = document.querySelector('#my_hand');
const computersHand = document.querySelector('#computers_hand');
let myScore = document.querySelector('#my_points');
let computersScore = document.querySelector('#computers_points');
let result = document.querySelector('.result');

let myHandValue;
let computersHandValue;

const rock = document.querySelector('#rock');

rock.addEventListener('click', () =>
  setTimeout(() => {
    myHand.src = './Assets/Images/rock2.png';
  }, 1000)
);
rock.addEventListener('click', () =>
  setTimeout(() => {
    myHandValue = 'rock';
  }, 1000)
);
rock.addEventListener('click', () =>
  setTimeout(() => {
    computersHandValue = setComputersHandValue();
  }, 1000)
);
rock.addEventListener('click', () => setTimeout(setScore, 1000));
rock.addEventListener('click', () => (result.innerHTML = ''));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () =>
  setTimeout(() => {
    myHand.src = './Assets/Images/paper2.png';
  }, 1000)
);
paper.addEventListener('click', () =>
  setTimeout(() => {
    myHandValue = 'paper';
  }, 1000)
);
paper.addEventListener('click', () =>
  setTimeout(() => {
    computersHandValue = setComputersHandValue();
  }, 1000)
);
paper.addEventListener('click', () => setTimeout(setScore, 1000));
paper.addEventListener('click', () => (result.innerHTML = ''));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () =>
  setTimeout(() => {
    myHand.src = './Assets/Images/scissor2.jpeg';
  }, 1000)
);
scissors.addEventListener('click', () =>
  setTimeout(() => {
    myHandValue = 'scissor';
  }, 1000)
);
scissors.addEventListener('click', () =>
  setTimeout(() => {
    computersHandValue = setComputersHandValue();
  }, 1000)
);
scissors.addEventListener('click', () => setTimeout(setScore, 1000));
scissors.addEventListener('click', () => (result.innerHTML = ''));

function setComputersHandValue() {
  const randomNumber = Math.floor(Math.random() * 12 + 1);
  if (randomNumber >= 1 && randomNumber <= 4) {
    computersHand.src = './Assets/Images/rock2.png';
    computersHandValue = 'rock';
  } else if (randomNumber >= 5 && randomNumber <= 8) {
    computersHand.src = './Assets/Images/paper2.png';
    computersHandValue = 'paper';
  } else {
    computersHand.src = './Assets/Images/scissor2.jpeg';
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
