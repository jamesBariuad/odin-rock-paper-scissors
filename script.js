let playerScore = 0;
let computerScore = 0;
alert("rock, paper scissors, first to five wins!")

const game = () => {
  const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
      case 1:
        choice = "rock";
        break;
      case 2:
        choice = "paper";
        break;
      case 3:
        choice = "scissors";
        break;
    }
    return choice;
  };

  const getPlayerChoice = () => {
    const playerChoice = prompt("choose: rock,paper,scissors").toLowerCase();

    if (
      playerChoice == "rock" ||
      playerChoice == "paper" ||
      playerChoice == "scissors"
    ) {
      return playerChoice;
    } else {
      return getPlayerChoice();
    }
  };

  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  const playRound = (playerSelection, computerSelection) => {
    if (computerSelection == playerSelection) {
      return (
        alert(`You chose ${playerSelection}, computer chose ${computerSelection} It's a Draw!!!!
      player: ${playerScore}   computer: ${computerScore}`),
        game()
      );
    } else if (
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper")
    ) {
      ++playerScore;
      if (playerScore == 5) {
        return alert(`You win!
        player: ${playerScore}   computer: ${computerScore}`);
      } else {
        return (
          alert(`You chose ${playerSelection}, computer chose ${computerSelection} You gain a point!!!!!
          player: ${playerScore}   computer: ${computerScore}`),
          game()
        );
      }
    } else {
      ++computerScore;
      if (computerScore == 5) {
        return alert(`You Lose!!!
        player: ${playerScore}   computer: ${computerScore}`);
      } else {
        return (
          alert(`You chose ${playerSelection}, computer chose ${computerSelection} Computer gains a point!!!
          player: ${playerScore}   computer: ${computerScore}`),
          game()
        );
      }
    }
  };

  if(playerScore!=5 || computerScore!=5){
    return playRound(playerSelection, computerSelection);
  }
  
};
