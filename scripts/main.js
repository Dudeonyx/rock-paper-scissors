function computerPlay() {
  const computerOptions = ['paper', 'rock', 'scissors', 'rock', 'scissors', 'paper', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'rock'];
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function validatePlayerInput(playerInput) {
  let validatedPlayerInput = playerInput;
  if (!validatedPlayerInput) {
    validatedPlayerInput = prompt('Pick a hand (Paper, Scissors or Rock):');
  } else {
    validatedPlayerInput = playerInput.toLowerCase();
  }
  if (validatedPlayerInput === null) return false;
  validatedPlayerInput = validatedPlayerInput.toLowerCase();
  switch (validatedPlayerInput) {
    case 'scis':
    case 'sciz':
    case 'scissor':
    case 'scizzor':
    case 'scizzors':
    case 'scisors':
    case 'scizors':
    case 'scisor':
    case 'scizor':
      validatedPlayerInput = 'scissors';
      break;
    case 'roc':
    case 'rok':
    case 'rocc':
    case 'rck':
    case 'rokk':
      validatedPlayerInput = 'rock';
      break;
    case 'papr':
    case 'pape':
    case 'papar':
    case 'pap':
      validatedPlayerInput = 'paper';
      break;
    default:
      break;
  }
  return validatedPlayerInput;
}

function pickWinner(playerSelection, computerSelection, i) {
  switch (playerSelection + computerSelection) {
    case 'paperrock':
      return `Round ${i}: \nYou win!, Your Paper covers my Rock.`;
    case 'rockscissors':
      return `Round ${i}: \nYou win!, Your Rock smashes my Scissors.`;
    case 'scissorspaper':
      return `Round ${i}: \nYou win!, Your Scissors cut my Paper.`;
    case 'rockpaper':
      return `Round ${i}: \nYou lose!, My Paper covers your Rock.`;
    case 'scissorsrock':
      return `Round ${i}: \nYou lose!, My Rock smashes your Scissors.`;
    case 'paperscissors':
      return `Round ${i}: \nYou lose!, My Scissors cut your Paper.`;
    default:
      return `Round ${i}: \nDraw!`;
  }
}

function playRound(i = 1, playerInput) {
  const computerSelection = computerPlay();
  const playerSelection = validatePlayerInput(playerInput);
  if (playerSelection === false) {
    return playerSelection;
  } else if (
    playerSelection !== 'rock' &&
    playerSelection !== 'paper' &&
    playerSelection !== 'scissors'
  ) {
    alert(`Round ${i}: Invalid Selection!!! \nYou picked > ${playerSelection}??? <`);
    return `Round ${i}: Invalid Selection!!! \nYou picked > ${playerSelection}??? <`;
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
    const roundWinner = playRound(i);
    if (!roundWinner) {
      break;
    } else if (/You win/i.test(roundWinner)) {
      totalPlayerWins += 1;
    } else if (/(You lose)|(invalid)/i.test(roundWinner)) {
      totalComputerwins += 1;
    }
  }
  if (totalComputerwins === totalPlayerWins) {
    console.log("Woah!!! \nit's a draw!!!");
    alert("Woah!!! \nit's a draw!!!");
  } else if (totalPlayerWins > totalComputerwins) {
    alert("You've won the game!!!! \nCongratulations!!!");
    console.log("You've won the game!!!! \nCongratulations!!!");
  } else {
    alert("You've lost the game!!! \nBetter luck next time!!!");
    console.log("You've lost the game!!! \nBetter luck next time!!!");
  }
}
