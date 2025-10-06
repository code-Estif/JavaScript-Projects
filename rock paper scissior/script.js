 const choices = document.querySelectorAll('.choice');
    const playerChoiceText = document.getElementById('player-choice');
    const computerChoiceText = document.getElementById('computer-choice');
    const winnerText = document.getElementById('winner');
    const resetBtn = document.getElementById('reset');

    choices.forEach(choice => choice.addEventListener('click', playGame));
    resetBtn.addEventListener('click', resetGame);

    function playGame(e) {
      const playerChoice = e.target.dataset.choice;
      const computerChoice = getComputerChoice();

      playerChoiceText.textContent = `Player: ${playerChoice}`;
      computerChoiceText.textContent = `Computer: ${computerChoice}`;

      const winner = getWinner(playerChoice, computerChoice);
      winnerText.textContent = `Winner: ${winner}`;
    }

    function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      return choices[Math.floor(Math.random() * 3)];
    }

    function getWinner(player, computer) {
      if (player === computer) return 'Tie';
      if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
      ) return 'Player';
      return 'Computer';
    }

    function resetGame() {
      playerChoiceText.textContent = 'Player: -';
      computerChoiceText.textContent = 'Computer: -';
      winnerText.textContent = 'Winner: -';
    }
