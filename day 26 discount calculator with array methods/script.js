let students = []; // array to store {name, grade}

    function renderList() {
      const ul = document.getElementById("studentList");
      ul.innerHTML = "";
      for (let i = 0; i < students.length; i++) {
        ul.innerHTML += `<li>${students[i].name} - ${students[i].grade}</li>`;
      }
    }

    function addStudent() {
      const name = document.getElementById("studentName").value.trim();
      const grade = parseInt(document.getElementById("studentGrade").value);
      if (!name || isNaN(grade)) return alert("Enter valid name and grade!");
      students.push({name, grade});
      document.getElementById("studentName").value = "";
      document.getElementById("studentGrade").value = "";
      renderList();
    }
