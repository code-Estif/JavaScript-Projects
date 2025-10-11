const textArea = document.getElementById("textArea");

    document.getElementById("red").addEventListener("click", () => textArea.style.color = "red");
    document.getElementById("blue").addEventListener("click", () => textArea.style.color = "blue");
    document.getElementById("big").addEventListener("click", () => textArea.style.fontSize = "24px");
    document.getElementById("small").addEventListener("click", () => textArea.style.fontSize = "14px");
    document.getElementById("bold").addEventListener("click", () => textArea.style.fontWeight = "bold");
    document.getElementById("italic").addEventListener("click", () => textArea.style.fontStyle = "italic");
    document.getElementById("underline").addEventListener("click", () => textArea.style.textDecoration = "underline");