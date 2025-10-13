const slider = document.getElementById("slider");
    let current = slider.firstElementChild;
    current.classList.add("active");

    document.getElementById("next").addEventListener("click", () => {
      const next = current.nextElementSibling;
      if (next) {
        current.classList.remove("active");
        next.classList.add("active");
        current = next;
        slider.scrollBy({ left: 240, behavior: "smooth" });
      }
    });

    document.getElementById("prev").addEventListener("click", () => {
      const prev = current.previousElementSibling;
      if (prev) {
        current.classList.remove("active");
        prev.classList.add("active");
        current = prev;
        slider.scrollBy({ left: -240, behavior: "smooth" });
      }
    });