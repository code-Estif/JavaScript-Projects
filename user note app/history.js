const list=document.getElementById("notesList");

    function getNotes(){
      const data=localStorage.getItem("notes");
      return data?JSON.parse(data):[];
    }

    function renderNotes(){
      const notes=getNotes();
      if(!notes.length){list.innerHTML="<p>No notes saved yet.</p>";return;}
      list.innerHTML="";
      notes.forEach((n,i)=>{
        const div=document.createElement("div");
        div.className="note";
        div.innerHTML=`
          <button onclick="deleteNote(${i})">🗑</button>
          <h3>${n.title}</h3>
          <p>${n.text}</p>
          <small>${n.date}</small>
        `;
        list.appendChild(div);
      });
    }

    function deleteNote(i){
      const notes=getNotes();
      notes.splice(i,1);
      localStorage.setItem("notes",JSON.stringify(notes));
      renderNotes();
    }

    window.addEventListener("load",renderNotes);
