 // Constructor for Recipe
    function Recipe(title, desc) {
      this.title = title;
      this.desc = desc;
    }

    Recipe.prototype.showInfo = function() {
      return `${this.title} - ${this.desc}`;
    }

    let recipes = [];

    function addRecipe() {
      const title = document.getElementById("title").value.trim();
      const desc = document.getElementById("desc").value.trim();

      if(!title || !desc){
        alert("Please enter both title and description");
        return;
      }

      const recipe = new Recipe(title, desc);
      recipes.push(recipe);

      document.getElementById("title").value = "";
      document.getElementById("desc").value = "";

      showRecipes();
    }

    function showRecipes() {
      const container = document.getElementById("cardsContainer");
      container.innerHTML = "";

      recipes.map((recipe, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <span class="remove" onclick="removeRecipe(${index})">X</span>
          <div class="recipe-title">${recipe.title}</div>
          <div class="recipe-desc">${recipe.desc}</div>
        `;
        container.appendChild(card);
      });
    }

    function removeRecipe(index) {
      recipes.splice(index, 1);
      showRecipes();
    }