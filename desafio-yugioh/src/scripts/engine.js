
    const resultEl = document.getElementById('result');
    const scorePlayerEl = document.getElementById('score-player');
    const scoreCpuEl = document.getElementById('score-cpu');

    let scorePlayer = 0;
    let scoreCpu = 0;

    const choices = ["monstro", "magia", "armadilha"];

    const rules = {
      monstro: "armadilha",   // monstro perde para armadilha
      magia: "monstro",       // magia perde para monstro
      armadilha: "magia"      // armadilha perde para magia
    };

    document.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const playerChoice = btn.dataset.choice;
        const cpuChoice = choices[Math.floor(Math.random() * 3)];

        let outcome;
        if (playerChoice === cpuChoice) {
          outcome = `Empate! Ambos escolheram ${playerChoice}.`;
        } else if (rules[playerChoice] === cpuChoice) {
          outcome = `Você perdeu! ${capitalize(cpuChoice)} vence ${capitalize(playerChoice)}.`;
          scoreCpu++;
        } else {
          outcome = `Você venceu! ${capitalize(playerChoice)} vence ${capitalize(cpuChoice)}.`;
          scorePlayer++;
        }

        resultEl.textContent = outcome;
        scorePlayerEl.textContent = scorePlayer;
        scoreCpuEl.textContent = scoreCpu;
      });
    });

    function capitalize(s){ return s.charAt(0).toUpperCase() + s.slice(1); }