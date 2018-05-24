let playerWin = 0;
let computerWin = 0;

function computerPlay() {
  return ['paper', 'rock', 'scissors'][Math.floor(Math.random() * 3)];
}
// const playerResult = ['You win!, ', 'You lose!, ', 'Draw!'];
const result = [
  'You win!, Paper covers Rock.',
  'You win!, Rock smashes Scissors.',
  'You win!, Scissors cut Paper.',
  'You lose!, Paper covers your Rock.',
  'You lose!, Rock smashes your Scissors.',
  'You lose!, Scissors cut your Paper.',
  'Draw!',
];

function increasePlayerWin() {
  playerWin = 1;
  computerWin = 0;
}

function increaseComputerWin() {
  computerWin = 1;
  playerWin = 0;
}

function pickWinner(playerSelection, computerSelection, i) {
  const result = [
    'You win!, Your Paper covers my Rock.',
    'You win!, Your Rock smashes my Scissors.',
    'You win!, Your Scissors cut my Paper.',
    'You lose!, My Paper covers your Rock.',
    'You lose!, My Rock smashes your Scissors.',
    'You lose!, My Scissors cut your Paper.',
    'Draw!',
  ];
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
  if (!playerInput) {
    playerInput = prompt('Pick your choice (Paper, Scissors or Rock):');
  }
  switch (playerInput.toLowerCase()) {
    case 'scissor':
    case 'scizzor':
    case 'scizzors':
    case 'sciz':
    case 'scis':
      playerInput = 'scissors';
      break;
    default:
      break;
  }
  const computerSelection = computerPlay();
  const playerSelection = playerInput.toLowerCase();
  console.log(`Player picked ${playerSelection}`);
  console.log(`Computer picked ${computerSelection}`);
  if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
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
    console.log("Woah!!!\nit's a draw!!!");
    alert("Woah!!!\nit's a draw!!!");
  } else if (totalPlayerWins > totalComputerwins) {
    alert("You've won the game!!!! \nCongratulations!!!");
    console.log("You've won the game!!!! \nCongratulations!!!");
  } else {
    alert("You've lost the game!!! \nBetter luck next time!!!");
    console.log("You've lost the game!!! \nBetter luck next time!!!");
  }
}