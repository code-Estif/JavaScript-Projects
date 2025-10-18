const player = document.getElementById("player");
  const target = document.getElementById("target");
  const scoreEl = document.getElementById("score");
  const game = document.getElementById("game");

  const gameSize = 400;
  const step = 20;
  let score = 0;

  // starting positions
  let playerX = 180, playerY = 180;
  let targetX = Math.random() * (gameSize - 30);
  let targetY = Math.random() * (gameSize - 30);

  // draw positions
  function draw() {
    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
    target.style.left = targetX + "px";
    target.style.top = targetY + "px";
  }

  // move target randomly
  function moveTarget() {
    targetX = Math.random() * (gameSize - 30);
    targetY = Math.random() * (gameSize - 30);
    draw();
  }

  // keyboard control
  document.addEventListener("keydown", e => {
    switch (e.key.toLowerCase()) {
      case "arrowup":
      case "w": if (playerY > 0) playerY -= step; break;
      case "arrowdown":
      case "s": if (playerY < gameSize - 30) playerY += step; break;
      case "arrowleft":
      case "a": if (playerX > 0) playerX -= step; break;
      case "arrowright":
      case "d": if (playerX < gameSize - 30) playerX += step; break;
    }
    checkCatch();
    draw();
  });

  // mouse click to move
  game.addEventListener("click", e => {
    const rect = game.getBoundingClientRect();
    playerX = e.clientX - rect.left - 15;
    playerY = e.clientY - rect.top - 15;
    checkCatch();
    draw();
  });

  // detect collision
  function checkCatch() {
    if (
      playerX < targetX + 30 &&
      playerX + 30 > targetX &&
      playerY < targetY + 30 &&
      playerY + 30 > targetY
    ) {
      score++;
      scoreEl.textContent = score;
      moveTarget();
    }
  }

  draw();