const conversions = [
      { type: "cmToM", convert: (v) => v / 100, unit: "m" },
      { type: "kgToLb", convert: (v) => v * 2.20462, unit: "lb" },
      { type: "cToF", convert: (v) => (v * 9/5) + 32, unit: "°F" },
      { type: "mToKm", convert: (v) => v / 1000, unit: "km" }
    ];

    const btn = document.getElementById("convertBtn");
    const input = document.getElementById("valueInput");
    const select = document.getElementById("conversionType");
    const result = document.getElementById("result");

    btn.addEventListener("click", () => {
      const value = parseFloat(input.value);
      if (isNaN(value)) {
        result.textContent = "❌ Please enter a valid number.";
        result.style.display = "block";
        return;
      }

      const chosen = conversions.find(c => c.type === select.value);
      const output = chosen.convert(value);
      result.textContent = ` Result: ${output.toFixed(2)} ${chosen.unit}`;
      result.style.display = "block";
    });
