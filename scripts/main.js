function computerPlay() {
  return ['paper', 'rock', 'scissors'][Math.floor(Math.random() * 3)];
}
// const playerResult = ['You win!, ', 'You lose!, ', 'Draw!'];

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
      return `Round ${i}\n${result[0]}`;
    case 'rockscissors':
      return `Round ${i}\n${result[1]}`;
    case 'scissorspaper':
      return `Round ${i}\n${result[2]}`;
    case 'rockpaper':
      return `Round ${i}\n${result[3]}`;
    case 'scissorsrock':
      return `Round ${i}\n${result[4]}`;
    case 'paperscissors':
      return `Round ${i}\n${result[5]}`;
    default:
      return `Round ${i}\n${result[6]}`;
  }
}

function playRound(playerInput, i = 1) {
  const computerSelection = computerPlay();
  let playerSelection;
  if (!playerInput) {
    playerSelection = prompt('Pick your choice (Paper, Scissors or Rock):');
  } else {
    playerSelection = playerInput.toLowerCase();
  }
  switch (playerSelection) {
    case /scis/i:
    case /sciz/i:
      playerSelection = 'scissors';
      break;
    case null:
      return false;
    default:
      playerSelection = playerSelection.toLowerCase();
      break;
  }
  if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    alert(`Round ${i}: Invalid Selection!!! \nYou picked "${playerSelection}"???`);
    return `Round ${i}: Invalid Selection!!! \nYou picked "${playerSelection}"???`;
  }
  console.log(`Player picked ${playerSelection}`);
  console.log(`Computer picked ${computerSelection}`);
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
    const roundWinner = playRound('', i);
    if (!roundWinner) {
      break;
    } else if (/You win/i.test(roundWinner)) {
      totalPlayerWins += 1;
    } else if (/(You lose)|(invalid)/i.test(roundWinner)) {
      totalComputerwins += 1;
    }
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