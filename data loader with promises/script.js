const output = document.getElementById("output");
    const input = document.getElementById("wordInput");
    const btn = document.getElementById("searchBtn");

    function getWordInfo(word) {
      return new Promise((resolve, reject) => {
        if (!word) {
          reject("❌ Please enter a word.");
          return;
        }
        setTimeout(() => {
          const fakeDictionary = {
            javascript: "A programming language for the web.",
            closure: "A function that remembers variables from its outer scope.",
            promise: "An object representing the eventual completion or failure of async code."
          };
          if (fakeDictionary[word.toLowerCase()]) {
            resolve({
              word,
              meaning: fakeDictionary[word.toLowerCase()]
            });
          } else {
            reject("❌ Word not found in fake dictionary.");
          }
        }, 2000);
      });
    }

    btn.addEventListener("click", () => {
      const word = input.value.trim();
      output.textContent = "Loading...";

      getWordInfo(word)
        .then(data => {
          output.innerHTML = `
            <strong>${data.word}</strong><br>
            Meaning: ${data.meaning}
          `;
        })
        .catch(err => {
          output.textContent = err;
        });
    });