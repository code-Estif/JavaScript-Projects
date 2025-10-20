const nameInput = document.getElementById("name");
const paidInput = document.getElementById("paid");
const addBtn = document.getElementById("add");
const calcBtn = document.getElementById("calc");
const saveBtn = document.getElementById("save");
const list = document.getElementById("list");
const result = document.getElementById("result");
const historyList = document.getElementById("historyList");

let people = [];
let history = JSON.parse(localStorage.getItem("billHistory")) || [];

function renderList(){
  list.innerHTML = "";
  people.forEach(p => {
    const div = document.createElement("div");
    div.className = "person";
    div.textContent = `${p.name} paid $${p.paid.toFixed(2)}`;
    list.appendChild(div);
  });
}

function renderHistory(){
  historyList.innerHTML = "";
  history.forEach((bill, i) => {
    const li = document.createElement("li");
    li.textContent = `${bill.date} — Total: $${bill.total.toFixed(2)} (${bill.people.length} people)`;
    historyList.appendChild(li);
  });
}

addBtn.onclick = () => {
  const name = nameInput.value.trim();
  const paid = Number(paidInput.value);
  if(!name || paid <= 0) return alert("Enter valid name and amount!");
  people.push({name, paid});
  nameInput.value = "";
  paidInput.value = "";
  renderList();
};

calcBtn.onclick = () => {
  if(people.length < 2) return alert("Add at least 2 people first!");
  const total = people.reduce((sum,p)=>sum+p.paid,0);
  const share = total / people.length;
  let text = `Total: $${total.toFixed(2)} | Each: $${share.toFixed(2)}<br><br>`;
  people.forEach(p => {
    const diff = (p.paid - share).toFixed(2);
    text += diff >= 0 
      ? `${p.name} gets back $${diff}<br>`
      : `${p.name} owes $${Math.abs(diff)}<br>`;
  });
  result.innerHTML = text;
};

saveBtn.onclick = () => {
  if(people.length === 0) return alert("Add people before saving!");
  const total = people.reduce((sum,p)=>sum+p.paid,0);
  const bill = {
    date: new Date().toLocaleString(),
    people: [...people],
    total
  };
  history.unshift(bill);
  localStorage.setItem("billHistory", JSON.stringify(history));
  people = [];
  renderList();
  result.textContent = "";
  renderHistory();
};

renderHistory();