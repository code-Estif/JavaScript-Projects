 const btn = document.getElementById("loadBtn");
    const msg = document.getElementById("msg");
    const img = document.getElementById("preview");
    const input = document.getElementById("imgUrl");

    function loadImage(url) {
      return new Promise((resolve, reject) => {
        if (!url) {
          reject("❌ Please enter an image URL.");
          return;
        }
        const image = new Image();
        image.src = url;
        image.onload = () => resolve(url);
        image.onerror = () => reject("❌ Failed to load image.");
      });
    }

    btn.addEventListener("click", () => {
      const url = input.value.trim();
      msg.textContent = "Loading...";
      img.style.display = "none";

      loadImage(url)
        .then(validUrl => {
          img.src = validUrl;
          img.style.display = "block";
          msg.textContent = "✅ Image loaded successfully!";
        })
        .catch(err => {
          msg.textContent = err;
        });
    });
