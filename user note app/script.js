const titleInput=document.getElementById("title");
    const textInput=document.getElementById("text");
    const msg=document.getElementById("msg");
    const saveBtn=document.getElementById("saveBtn");

    function getNotes(){
      const data=localStorage.getItem("notes");
      return data?JSON.parse(data):[];
    }

    function saveNote(){
      const title=titleInput.value.trim();
      const text=textInput.value.trim();
      if(!title||!text){msg.textContent="❌ Please fill both fields.";return;}
      const notes=getNotes();
      notes.push({title,text,date:new Date().toLocaleString()});
      localStorage.setItem("notes",JSON.stringify(notes));
      msg.textContent="✅ Note saved!";
      titleInput.value=textInput.value="";
      setTimeout(()=>msg.textContent="",1500);
    }

    saveBtn.addEventListener("click",saveNote);
