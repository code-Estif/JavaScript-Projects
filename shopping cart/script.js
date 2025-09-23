class CartItem {
      #name;
      #price;

      set name(value) {
        if (!value || value.trim().length === 0) {
          throw new Error("Item name cannot be empty");
        }
        this.#name = value.trim();
      }
      get name() {
        return this.#name;
      }

      set price(value) {
        if (isNaN(value) || value <= 0) {
          throw new Error("Price must be a positive number");
        }
        this.#price = parseFloat(value);
      }
      get price() {
        return this.#price;
      }
    }

    const cart = [];
    const addBtn = document.getElementById("addBtn");
    const errorMsg = document.getElementById("errorMsg");
    const cartList = document.getElementById("cartList");

    addBtn.addEventListener("click", () => {
      const itemName = document.getElementById("itemName").value;
      const itemPrice = document.getElementById("itemPrice").value;

      try {
        const newItem = new CartItem();
        newItem.name = itemName;
        newItem.price = itemPrice;

        cart.push([newItem.name, newItem.price]); // store as tuple [name, price]
        errorMsg.textContent = "";
        renderCart();
      } catch (err) {
        errorMsg.textContent = err.message;
      }
    });

    function renderCart() {
      cartList.innerHTML = "";
      cart.forEach(([name, price], index) => { // destructuring
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${name} - $${price}`;
        cartList.appendChild(li);
      });
    }