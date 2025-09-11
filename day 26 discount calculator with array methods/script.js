let students = [];

    function renderList() {
      const ul = document.getElementById("studentList");
      ul.innerHTML = "";
      if (students.length === 0) {
        ul.innerHTML = "<li>No students added</li>";
        return;
      }
      for (let i = 0; i < students.length; i++) {
        ul.innerHTML += `<li>${i + 1}. ${students[i].name} - ${students[i].grade}</li>`;
      }
    }

    function addStudent() {
      const name = document.getElementById("studentName").value.trim();
      const grade = parseInt(document.getElementById("studentGrade").value);
      if (!name || isNaN(grade) || grade < 0 || grade > 100) {
        return alert("Enter valid name and grade!");
      }
      students.push({name, grade});
      document.getElementById("studentName").value = "";
      document.getElementById("studentGrade").value = "";
      renderList();
    }

    function removeLast() {
      if (students.length === 0) return alert("No students to remove!");
      students.pop();
      renderList();
    }

    function removeFirst() {
      if (students.length === 0) return alert("No students to remove!");
      students.shift();
      renderList();
    }

    function searchStudent() {
      const name = document.getElementById("searchName").value.trim();
      if (!name) return alert("Enter a name to search!");
      const namesArray = students.map(s => s.name);
      if (namesArray.includes(name)) {
        const index = namesArray.indexOf(name);
        alert(`${name} found at position ${index + 1}`);
      } else {
        alert(`${name} not found`);
      }
      document.getElementById("searchName").value = "";
    }

    function boostGrades() {
      students = students.map(s => ({name: s.name, grade: Math.min(s.grade + 5, 100)}));
      renderList();
    }

    function sliceTop3() {
      const top3 = students.slice(0,3);
      if (top3.length === 0) return alert("No students yet!");
      let text = top3.map((s,i)=> `${i+1}. ${s.name} - ${s.grade}`).join("\n");
      alert("Top 3 Entered:\n" + text);
    }

    function replaceGradeFunc() {
      const index = parseInt(document.getElementById("replaceIndex").value) - 1;
      const newGrade = parseInt(document.getElementById("replaceGrade").value);
      if (isNaN(index) || index < 0 || index >= students.length || isNaN(newGrade) || newGrade < 0 || newGrade > 100) {
        return alert("Invalid day number or grade!");
      }
      students.splice(index,1,{name: students[index].name, grade: newGrade});
      document.getElementById("replaceIndex").value = "";
      document.getElementById("replaceGrade").value = "";
      renderList();
    }

    renderList();