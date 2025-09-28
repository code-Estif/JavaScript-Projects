    let counter = 0;
    let intervalId = null;
    let timeoutId = null;

    const timeEl = document.getElementById("time");
    const msgEl = document.getElementById("msg");
    const startBtn = document.getElementById("startBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const resetBtn = document.getElementById("resetBtn");

    function updateUI() {
      timeEl.textContent = counter;
    }

    startBtn.addEventListener("click", () => {
      if (intervalId) return; // prevent multiple intervals
      intervalId = setInterval(() => {
        counter++;
        updateUI();
      }, 1000);

      // show message after 10s using setTimeout
      timeoutId = setTimeout(() => {
        msgEl.textContent = "⏰ 10 seconds passed!";
      }, 10000);
    });

    pauseBtn.addEventListener("click", () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      intervalId = null;
      timeoutId = null;
      msgEl.textContent = "⏸ Paused";
    });

    resetBtn.addEventListener("click", () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      intervalId = null;
      timeoutId = null;
      counter = 0;
      updateUI();
      msgEl.textContent = "";
    });

    updateUI();
  
