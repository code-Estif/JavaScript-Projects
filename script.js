class Expense {
      constructor(name, amount, category) {
        this.name = name;
        this.amount = amount;
        this.category = category;
      }
      set amount(value) {
        if (value <= 0) throw new Error("Amount must be positive");
        this._amount = Number(value);
      }
      get amount() {
        return this._amount;
      }
    }

    const expenses = [];
    const addBtn = document.getElementById("addBtn");
    const list = document.getElementById("expenseList");
    const summary = document.getElementById("summary");

    addBtn.addEventListener("click", () => {
      const nameInput = document.getElementById("name");
      const amountInput = document.getElementById("amount");
      const categoryInput = document.getElementById("category");

      const name = nameInput.value.trim();
      const amount = parseFloat(amountInput.value);
      const category = categoryInput.value;

      if (!name || isNaN(amount)) {
        alert("Please enter valid name and amount");
        return;
      }

      try {
        const exp = new Expense(name, amount, category);
        expenses.push(exp);

        // clear inputs
        nameInput.value = "";
        amountInput.value = "";

        render(); // update list immediately
      } catch (err) {
        alert(err.message);
      }
    });

    function render() {
      list.innerHTML = "";
      for (const { name, amount, category } of expenses) {
        const li = document.createElement("li");
        li.textContent = `${name} - ${category} - $${amount}`;
        list.appendChild(li);
      }

      const total = expenses.reduce((sum, { amount }) => sum + amount, 0);
      summary.textContent = `Total: $${total} ${total > 1000 ? "⚠ High Spending!" : ""}`;
    }

    const filterFood = () => {
      const foodItems = expenses.filter(e => e.category === "Food");
      alert(`Food expenses: ${foodItems.length}`);
    };

    function sortByAmount() {
      expenses.sort((a, b) => a.amount - b.amount);
      render();
    }