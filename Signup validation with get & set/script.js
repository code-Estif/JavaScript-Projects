class UserAccount {
      #username;
      #email;
      #password;

      set username(value) {
        if (!value || value.length < 3) {
          throw new Error("Username must be at least 3 characters");
        }
        this.#username = value;
      }
      get username() {
        return this.#username;
      }

      set email(value) {
        if (!value.includes("@")) {
          throw new Error("Invalid email format");
        }
        this.#email = value;
      }
      get email() {
        return this.#email;
      }

      set password(value) {
        if (!value || value.length < 6) {
          throw new Error("Password must be at least 6 characters");
        }
        this.#password = value;
      }
      get password() {
        return this.#password;
      }
    }

    const btn = document.getElementById("createBtn");
    const errorMsg = document.getElementById("errorMsg");
    const welcomeCard = document.getElementById("welcomeCard");
    const welcomeName = document.getElementById("welcomeName");
    const welcomeEmail = document.getElementById("welcomeEmail");

    btn.addEventListener("click", () => {
      const name = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      try {
        const user = new UserAccount();
        user.username = name;
        user.email = email;
        user.password = password;

        errorMsg.textContent = "";
        welcomeCard.style.display = "block";
        welcomeName.textContent = `Welcome, ${user.username}! 🎉`;
        welcomeEmail.textContent = `Your email: ${user.email}`;
      } catch (err) {
        welcomeCard.style.display = "none";
        errorMsg.textContent = err.message;
      }
    });