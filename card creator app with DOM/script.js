const titleInput = document.getElementById("title");
    const descInput = document.getElementById("desc");
    const addBtn = document.getElementById("addBtn");
    const container = document.getElementById("cardsContainer");

    addBtn.addEventListener("click", () => {
      const title = titleInput.value.trim();
      const desc = descInput.value.trim();

      if (!title || !desc) return alert("Fill in both fields!");

      // Create card
      const card = document.createElement("div");
      card.className = "card";

      const h3 = document.createElement("h3");
      h3.textContent = title;

      const p = document.createElement("p");
      p.textContent = desc;

      // Buttons
      const actions = document.createElement("div");
      actions.className = "actions";

      const delBtn = document.createElement("button");
      delBtn.textContent = "🗑 Delete";
      delBtn.addEventListener("click", () => card.remove());

      const highlightBtn = document.createElement("button");
      highlightBtn.textContent = "⭐ Highlight";
      highlightBtn.addEventListener("click", () => card.classList.toggle("highlight"));

      actions.appendChild(highlightBtn);
      actions.appendChild(delBtn);

      // Add to card
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(actions);

      // Add to page
      container.appendChild(card);

      // Clear inputs
      titleInput.value = descInput.value = "";
    });