class BankAccount {
      #owner;
      #balance;

      constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
      }

      get owner() {
        return this.#owner;
      }
      set owner(value) {
        if (!value.trim()) throw new Error("Owner name required");
        this.#owner = value;
      }

      get balance() {
        return this.#balance;
      }
      set balance(value) {
        if (value < 0) throw new Error("Balance cannot be negative");
        this.#balance = value;
      }

      deposit(amount) {
        if (amount <= 0) throw new Error("Deposit must be positive");
        this.balance = this.balance + amount;
      }

      withdraw(amount) {
        if (amount <= 0) throw new Error("Withdraw must be positive");
        if (amount > this.balance) throw new Error("Not enough funds");
        this.balance = this.balance - amount;
      }
    }

    let account;

    function getAccount() {
      const ownerName = document.getElementById("owner").value.trim() || "Guest";
      if (!account) {
        account = new BankAccount(ownerName, 0);
      }
      return account;
    }

    function deposit() {
      const acc = getAccount();
      const amount = parseFloat(document.getElementById("amount").value);
      try {
        acc.deposit(amount);
        showBalance();
      } catch (err) {
        alert(err.message);
      }
    }

    function withdraw() {
      const acc = getAccount();
      const amount = parseFloat(document.getElementById("amount").value);
      try {
        acc.withdraw(amount);
        showBalance();
      } catch (err) {
        alert(err.message);
      }
    }

    function showBalance() {
      const acc = getAccount();
      document.getElementById("output").textContent = 
        `${acc.owner}'s Balance: ${acc.balance} ETB`;
    }