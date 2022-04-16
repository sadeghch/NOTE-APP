const btnaddnote = document.getElementById("btn");
const box2 = document.getElementById("box2");
const inputbox2 = document.getElementById("inputbox2");
const textarea = document.getElementById("textarea");
const titlenote = document.getElementById("titlenote");

//listener
titlenote.addEventListener("click", checkRemove);

document.addEventListener("DOMContentLoaded", getLocalTodos);

// remove and ckeck notes

function checkRemove(e) {
  const classList = [...e.target.classList];
  const item = e.target;
  // console.log(item.parentElement.parentElement);
  //console.log(classList);

  if (classList[1] === "fa-trash-alt") {
    const todo = item.parentElement.parentElement;

    removeLocalTodos(todo);
    todo.remove();
  } else if (classList[1] === "fa-pencil-square") {
    const todo = item.parentElement.parentElement;
 
    console.log(todo);

    const hedearnote = todo.children[0].innerText;
    console.log(hedearnote);
    const textareanote = todo.children[1].innerText;
    console.log(textareanote);
    const inso = (inputbox2.value = hedearnote);
    console.log(inso);
    const textin = (textarea.value = textareanote);
    console.log(textin);
   
    textarea.value = todo.children[1].innerText;
    inputbox2.value = todo.children[0].innerText;
   
   
  }


//add notes

btnaddnote.addEventListener("click", (e) => {
   console.log("clicked inside");
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("title");

    const newnote = ` 
  <h3>${inputbox2.value}</h3>
  <h5>
    ${textarea.value}
  </h5>
  <p>${
    new Date().getFullYear() +
    ":" +
    `${new Date().getUTCMonth() + 1}` +
    ":" +
    new Date().getUTCDate() +
    ":" +
    new Date().getHours() +
    ":" +
    new Date().getMinutes()
  }</p><span><i class="far fa-trash-alt"></i></span>
  <span><i  class="fas fa-pencil-square""></i></span>
 
`;
    console.log(newnote);
    const titlenote = document.getElementById("titlenote");
    todoDiv.innerHTML = newnote;
    titlenote.appendChild(todoDiv);
    saveLocalTodos(newnote);
    inputbox2.value = "";
    textarea.value = "";
  })


//save note
function saveLocalTodos(todo) {
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  savedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
}

// show note
function getLocalTodos() {
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  console.log(savedTodos);
  savedTodos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("title");

    const newnote = ` 
  <h3>${todo}</h3>
`;
    todoDiv.innerHTML = newnote;
    const titlenote = document.getElementById("titlenote");

    titlenote.appendChild(todoDiv);
  });
}

//remove note
function removeLocalTodos(todo) {
  console.log(todo);
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  console.log(savedTodos[0]);

  const filteredTodos = savedTodos.filter((t) => t !== savedTodos[0]);
  console.log(filteredTodos);
  localStorage.setItem("todos", JSON.stringify(filteredTodos));
}
