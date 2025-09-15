let items = ["Inception", "Avengers", "Harry Potter", "The Hobbit"];

    function addItem() {
      const input = document.getElementById("itemInput").value.trim();
      if(input){
        items.push(input);
        document.getElementById("message").textContent = `"${input}" added!`;
        document.getElementById("itemInput").value = "";
      }
    }

    function removeItem() {
      const input = document.getElementById("itemInput").value.trim();
      const index = items.indexOf(input);
      if(index !== -1){
        items.splice(index, 1);
        document.getElementById("message").textContent = `"${input}" removed!`;
      } else {
        document.getElementById("message").textContent = `"${input}" not found!`;
      }
      document.getElementById("itemInput").value = "";
    }

    function searchItem() {
      const input = document.getElementById("itemInput").value.trim();
      if(items.includes(input)){
        document.getElementById("message").textContent = `"${input}" is in the list!`;
      } else {
        document.getElementById("message").textContent = `"${input}" not found!`;
      }
    }

    function showAll() {
      const listDiv = document.getElementById("list");
      listDiv.innerHTML = items.map((item, i) => `<p>${i+1}. ${item}</p>`).join("");
    }