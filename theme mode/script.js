const body = document.body;
    const btn = document.getElementById("toggleBtn");

    btn.addEventListener("click", () => {
      body.classList.toggle("dark");
      body.classList.toggle("light");
    });