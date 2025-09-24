const movies = [
  { 
    title: "Inception", 
    year: 2010, 
    details: { genre: "Sci-Fi", rating: "8.8/10" }, 
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" 
  },
  { 
    title: "Avengers: Endgame", 
    year: 2019, 
    details: { genre: "Action", rating: "8.4/10" }, 
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" 
  },
  { 
    title: "Interstellar", 
    year: 2014, 
    details: { genre: "Adventure", rating: "8.6/10" }, 
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" 
  },
  { 
    title: "The Godfather", 
    year: 1972, 
    details: { genre: "Crime", rating: "9.2/10" }, 
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" 
  }
];


    const select = document.getElementById("movieSelect");
    const detailsDiv = document.getElementById("details");

    // populate dropdown
    movies.forEach((movie, index) => {
      const { title } = movie;
      const opt = document.createElement("option");
      opt.value = index;
      opt.textContent = title;
      select.appendChild(opt);
    });

    // helper: create img with safe fallback
    function createSafeImg(src, alt) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      // if original fails, swap to placeholder once
      img.addEventListener("error", function () {
        if (!this.dataset.fallback) {
          this.dataset.fallback = "1";
          this.src = "https://via.placeholder.com/600x880?text=No+Image";
        }
      });
      img.loading = "lazy";
      return img;
    }

    select.addEventListener("change", () => {
      const idx = select.value;
      if (idx === "") {
        detailsDiv.style.display = "none";
        detailsDiv.innerHTML = "";
        return;
      }

      // nested destructuring
      const { title, year, details: { genre, rating }, image } = movies[idx];

      detailsDiv.innerHTML = `
        <strong>${title}</strong> (${year})<br>
        Genre: ${genre}<br>
        Rating: ${rating}
      `;
      // append safe image (so fallback handler runs)
      const img = createSafeImg(image, title);
      // clear previous image(s) then append
      const existing = detailsDiv.querySelector("img");
      if (existing) existing.remove();
      detailsDiv.appendChild(img);
      detailsDiv.style.display = "block";
    });
