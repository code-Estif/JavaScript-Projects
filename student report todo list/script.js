 let students = [
      { name: "Sara", grade: 90 },
      { name: "Jon", grade: 75 },
      { name: "Mimi", grade: 82 }
    ];

    function addStudent() {
      const name = document.getElementById("nameInput").value.trim();
      const grade = parseInt(document.getElementById("gradeInput").value);
      if(name && !isNaN(grade)) {
        students.push({ name, grade });
        document.getElementById("message").textContent = `${name} added with grade ${grade}.`;
        clearInputs();
      } else {
        document.getElementById("message").textContent = "Enter valid name and grade.";
      }
    }

    function showAll() {
      const listDiv = document.getElementById("list");
      listDiv.innerHTML = students.map((s, i) => `<p>${i+1}. ${s.name} - ${s.grade}</p>`).join("");
      document.getElementById("message").textContent = "";
    }

    function findStudent() {
      const name = document.getElementById("nameInput").value.trim();
      const found = students.find(s => s.name.toLowerCase() === name.toLowerCase());
      if(found) {
        document.getElementById("message").textContent = `${found.name} has grade ${found.grade}.`;
      } else {
        document.getElementById("message").textContent = `${name} not found.`;
      }
      clearInputs();
    }

    function calcAverage() {
      if(students.length === 0) {
        document.getElementById("message").textContent = "No students available.";
        return;
      }
      const sum = students.reduce((acc, s) => acc + s.grade, 0);
      const avg = sum / students.length;
      document.getElementById("message").textContent = `Average grade: ${avg.toFixed(2)}`;
    }

    function clearInputs() {
      document.getElementById("nameInput").value = "";
      document.getElementById("gradeInput").value = "";
    }