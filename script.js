

const game = () => {
    const getComputerChoice = () =>{
        let choice=Math.floor(Math.random()*3)+1
        switch (choice){
            case 1:
                choice="rock"
                break;
            case 2:
                choice="paper"
                break;
            case 3:
                choice="scissors"
                break;
        }
        return choice;
    }
    
    const getPlayerChoice = () =>{
        const playerChoice = prompt("choose: rock,paper,scissors").toLowerCase();
    
        if (playerChoice=="rock"||playerChoice=="paper"||playerChoice=="scissors"){
            return playerChoice;
        }else{
            return getPlayerChoice();
        }
    }
    
    const playerSelection=getPlayerChoice();
    const computerSelection= getComputerChoice();
    
    const playRound =(playerSelection, computerSelection)=>{
        if (computerSelection==playerSelection){
            return alert(`You chose ${playerSelection}, computer chose ${computerSelection} It's a Draw!!!!`)
        }else if((playerSelection=="paper" && computerSelection=="rock")||(playerSelection=="rock" && computerSelection=="scissors")|| (playerSelection=="scissors" && computerSelection=="paper")){
            return alert(`You chose ${playerSelection}, computer chose ${computerSelection} You Win!!!!!`)
        }else{
            return alert(`You chose ${playerSelection}, computer chose ${computerSelection} You Lose!!!`)
        }
    }

    playRound(playerSelection, computerSelection)
}



