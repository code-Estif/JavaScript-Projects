 const gallery = document.getElementById("gallery");
    let current = gallery.firstElementChild;

    document.getElementById("next").addEventListener("click", () => {
      const nextImg = current.nextElementSibling;
      if (nextImg) {
        current.style.display = "none";
        nextImg.style.display = "block";
        current = nextImg;
      }
    });

    document.getElementById("prev").addEventListener("click", () => {
      const prevImg = current.previousElementSibling;
      if (prevImg) {
        current.style.display = "none";
        prevImg.style.display = "block";
        current = prevImg;
      }
    });