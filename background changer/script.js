    const colors = document.querySelectorAll(".color");
    const body = document.querySelector("body");

    colors.forEach(color => {
      color.addEventListener("click", () => {
        const bgColor = color.id;
        body.style.background = bgColor;
      });
    });