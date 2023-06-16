let playerScore = 0;
let computerScore = 0;
const resultsDiv = document.querySelector("#results");
const scoresDiv = document.querySelector("#scores");

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

  const getPlayerChoice = (e) => {
    const playerChoice = e.target.id;
    return playRound(playerChoice, getComputerChoice());
  };

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>
    button.addEventListener("click", getPlayerChoice)
  );

  const displayRoundSelections = (
    playerSelection,
    computerSelection,
    result
  ) => {
    return (resultsDiv.textContent = `You chose ${playerSelection}, computer chose ${computerSelection}. ${result}`);
  };

  const updateScore = (playerScore, computerScore) => {
    return (scoresDiv.textContent = `Player: ${playerScore} Computer: ${computerScore}`);
  };

  const handleWin = () => {
    buttons.forEach((button) => button.setAttribute("disabled", "true"));

    const main = document.querySelector("main");
    const tryAgainButton = document.createElement("button");
    tryAgainButton.setAttribute('style', 'padding: 5px 10px; margin: auto;');  
    tryAgainButton.textContent = "Play Again?";
   
    main.appendChild(tryAgainButton);

    const handleTryAgainClick = () => {
      buttons.forEach((button) => button.removeAttribute("disabled"));
      playerScore = 0;
      computerScore = 0;
      resultsDiv.textContent = "";
      scoresDiv.textContent = "Player: 0 Computer:0";

      main.removeChild(tryAgainButton);
    };

    tryAgainButton.addEventListener("click", handleTryAgainClick);
  };

  const checkWinCondition = (playerScore, computerScore) => {
    if (playerScore == 5) {
      handleWin();
      return (resultsDiv.textContent = "You Win!!!");
    } else if (computerScore == 5) {
      handleWin();
      return (resultsDiv.textContent = "Computer Wins!!!");
    } else {
      return;
    }
  };

  const playRound = (playerSelection, computerSelection) => {
    let result;
    if (computerSelection == playerSelection) {
      result = "It's A Draw!";
      displayRoundSelections(playerSelection, computerSelection, result);
    } else if (
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper")
    ) {
      ++playerScore;
      result = "Player Earns a Point!";

      displayRoundSelections(playerSelection, computerSelection, result);
      updateScore(playerScore, computerScore);
      checkWinCondition(playerScore, computerScore);
    } else {
      ++computerScore;
      result = "Computer Earns a Point!";

      displayRoundSelections(playerSelection, computerSelection, result);
      updateScore(playerScore, computerScore);
      checkWinCondition(playerScore, computerScore);
    }
  };
};
game();
