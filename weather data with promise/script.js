 const output = document.getElementById("output");
    const input = document.getElementById("cityInput");
    const btn = document.getElementById("checkBtn");

    function getWeather(city) {
      return new Promise((resolve, reject) => {
        if (!city) {
          reject("❌ Please enter a city.");
          return;
        }

        setTimeout(() => {
          const fakeWeatherDB = {
            addis: { temp: 23, condition: "Sunny" },
            london: { temp: 12, condition: "Rainy" },
            paris: { temp: 15, condition: "Cloudy" },
            tokyo: { temp: 20, condition: "Clear" }
          };

          const data = fakeWeatherDB[city.toLowerCase()];
          if (data) {
            resolve({ city, ...data });
          } else {
            reject("❌ City not found in database.");
          }
        }, 2000);
      });
    }

    btn.addEventListener("click", () => {
      const city = input.value.trim();
      output.textContent = "Loading...";

      getWeather(city)
        .then(data => {
          output.innerHTML = `
            <strong>${data.city}</strong><br>
            🌡 Temp: ${data.temp}°C<br>
            ☁ Condition: ${data.condition}
          `;
        })
        .catch(err => {
          output.textContent = err;
        });
    });
