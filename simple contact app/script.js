// Constructor function for Contact
    function Contact(name, phone) {
      this.name = name;
      this.phone = phone;
    }

    // Array to store contacts
    let contacts = [];

    // Add a new contact
    function addContact() {
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (name === "" || phone === "") {
        alert("Please enter both name and phone.");
        return;
      }

      const newContact = new Contact(name, phone);
      contacts.push(newContact);

      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";

      showContacts(contacts);
    }

    // Show contacts
    function showContacts(list) {
      const ul = document.getElementById("contactList");
      ul.innerHTML = "";

      list.map((contact, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${contact.name} - ${contact.phone} 
          <span class="remove" onclick="removeContact(${index})">X</span>`;
        ul.appendChild(li);
      });
    }

    // Search contacts
    function searchContact() {
      const query = document.getElementById("search").value.toLowerCase();
      const filtered = contacts.filter(c => c.name.toLowerCase().includes(query));
      showContacts(filtered);
    }

    // Remove contact
    function removeContact(index) {
      contacts.splice(index, 1);
      showContacts(contacts);
    }