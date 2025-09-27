    function createCounter() {
      let count = 0;
      return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => (count = 0),
        getValue: () => count
      };
    }

    const counter = createCounter();

    const valueEl = document.getElementById("value");
    const incBtn = document.getElementById("incBtn");
    const decBtn = document.getElementById("decBtn");
    const resetBtn = document.getElementById("resetBtn");

    function updateUI() {
      valueEl.textContent = counter.getValue();
    }

    incBtn.addEventListener("click", () => {
      counter.increment();
      updateUI();
    });
    decBtn.addEventListener("click", () => {
      counter.decrement();
      updateUI();
    });
    resetBtn.addEventListener("click", () => {
      counter.reset();
      updateUI();
    });

    updateUI(); 
