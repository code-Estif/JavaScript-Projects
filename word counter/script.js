function analyzeText() {
      const text = document.getElementById("textInput").value.trim();

      if (text === "") {
        document.getElementById("result").innerHTML = "Please enter some text!";
        return;
      }

      // split words by spaces
      const words = text.split(/\s+/);

      // word count
      const wordCount = words.length;

      // character count (no spaces)
      const charCount = text.replace(/\s+/g, '').length;

      // longest word using reduce
      const longestWord = words.reduce((longest, current) => 
        current.length > longest.length ? current : longest
      , "");

      document.getElementById("result").innerHTML = `
        <p><strong>Words:</strong> ${wordCount}</p>
        <p><strong>Characters (no spaces):</strong> ${charCount}</p>
        <p><strong>Longest Word:</strong> ${longestWord}</p>
      `;
}