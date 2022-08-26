let myLeads = [];

let inputEl = document.getElementById("input-el");
let saveBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el");
saveBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
})

function renderLeads(){
    let listItems = "";
  for(let i = 0; i < myLeads.length; i++){
    listItems += `
    <li>
      <a href='${myLeads}'>
      ${myLeads[i]}
      </a>
    </li>`
}
ulEl.innerHTML = listItems;
}