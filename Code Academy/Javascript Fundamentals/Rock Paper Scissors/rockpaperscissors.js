const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Please enter either rock, paper, or scissors');
  }
}

getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() *3);
  switch (randomNumber) {
    case 0: 
      return 'rock';
    case 1: 
      return 'paper';
    case 2: 
      return 'scissors';
    default: 
      return 'what are you doing?';
  }
}

determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This was a tie game';
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors' || computerChoice === 'rock') {
      return 'Computer won';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'bomb') {
    return 'You won with a cheat code!'
  } 
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();
