let playerWin = 0;
let computerWin = 0;

function computerPlay() {
  return ['paper', 'rock', 'scissors'][Math.floor(Math.random() * 3)];
}
// const playerResult = ['You win!, ', 'You lose!, ', 'Draw!'];
const result = ['You win!, Paper covers Rock.', 'You win!, Rock smashes Scissors.',
  'You win!, Scissors cut Paper.', 'You lose!, Paper covers your Rock.',
  'You lose!, Rock smashes your Scissors.', 'You lose!, Scissors cut your Paper.', 'Draw!',
];

function increasePlayerWin() {
  playerWin = 1;
}

function increaseComputerWin() {
  computerWin = 1;
}

function pickWinner(playerSelection, computerSelection, i) {
  switch (playerSelection + computerSelection) {
    case 'paperrock':
      increasePlayerWin();
      return `Round ${i}\n${result[0]}`;
    case 'rockscissors':
      increasePlayerWin();
      return `Round ${i}\n${result[1]}`;
    case 'scissorspaper':
      increasePlayerWin();
      return `Round ${i}\n${result[2]}`;
    case 'rockpaper':
      increaseComputerWin();
      return `Round ${i}\n${result[3]}`;
    case 'scissorsrock':
      increaseComputerWin();
      return `Round ${i}\n${result[4]}`;
    case 'paperscissors':
      increaseComputerWin();
      return `Round ${i}\n${result[5]}`;
    default:
      return `Round ${i}\n${result[6]}`;
  }
}

function playRound(i, playerInput) {
  playerInput || (playerInput = prompt('Pick your choice (Paper, Scissors or Rock):'));
  if (playerInput.toLowerCase() === 'scissor' || playerInput.toLowerCase() === 'scizzor' ||
    playerInput.toLowerCase() === 'scizzors' || playerInput.toLowerCase() === 'sciz' ||
    playerInput.toLowerCase() === 'scis') playerInput = 'scissors';
  const computerSelection = computerPlay();
  const playerSelection = playerInput.toLowerCase();
  console.log(`Player picked ${playerSelection}`);
  console.log(`Computer picked ${computerSelection}`);
  if (playerSelection !== 'rock' && playerSelection !== 'paper' &&
    playerSelection !== 'scissors') {
    increaseComputerWin();
    return alert(`Round ${i}: Invalid Selection!!!`);
  }
  const roundWinner = pickWinner(playerSelection, computerSelection, i);
  alert(roundWinner);
  return roundWinner;
}

function game() {
  let i = 0;
  let totalPlayerWins = 0;
  let totalComputerwins = 0;
  while (i < 5) {
    i += 1;
    playRound(i);
    totalPlayerWins += playerWin;
    totalComputerwins += computerWin;
    playerWin = 0;
    computerWin = 0;
  }
  if (totalComputerwins === totalPlayerWins) {
    alert('Woah!!!\nit\'s a draw!!!');
  } else if (totalPlayerWins > totalComputerwins) {
    alert('You\'ve won the game!!!! \n Congratulations!!!');
    console.log('You\'ve won the game!!!! \n Congratulations!!!');
  } else {
    alert('You\'ve lost the game!!! \n Better luck next time!!!');
    console.log('You\'ve lost the game!!! \n Better luck next time!!!');
  }
}
