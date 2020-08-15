
let toDos = [];
let Finish = [];

function delteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function delteToFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toFiList.removeChild(li);
  const cleanToDos = Finish.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  Finish = cleanToDos;
  saveToDos();
}

function changeToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  Finish.forEach(function (element) {
    if (element.id === parseInt(li.id)) {
      paintToDo(element.text);
    }
  });
  toFiList.removeChild(li);
  const cleanToDos = Finish.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  Finish = cleanToDos;
  saveToDos();
}

function checkToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  toDos.forEach(function (element) {
    if (element.id === parseInt(li.id)) {
      paintFinished(element.text);
    }
  });

  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  localStorage.setItem("Finish", JSON.stringify(Finish));
}

function loadToFinished() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const loadedToFinished = localStorage.getItem("Finish");
  if (loadedToFinished !== null || loadedToDos !== null) {
    const parsedToFinished = JSON.parse(loadedToFinished);
    parsedToFinished.forEach(function (toFin) {
      paintFinished(toFin.text);
    });
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function paintFinished(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("delbutton");
  const chaBtn = document.createElement("chabutton");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", delteToFinished);
  chaBtn.innerText = "⏪";
  chaBtn.addEventListener("click", changeToDo);
  const span = document.createElement("span");
  const newId = Finish.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(chaBtn);
  li.id = newId;
  toFiList.appendChild(li);
  const toFiObj = {
    text: text,
    id: newId
  };
  Finish.push(toFiObj);
  saveToDos();
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("delbutton");
  const cheBtn = document.createElement("checkbutton");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", delteToDo);
  cheBtn.innerText = "✅";
  cheBtn.addEventListener("click", checkToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(cheBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input1.value;
  paintToDo(currentValue);
  input1.value = "";
}


function loadtodo(){
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser === null){
        forms.classList.add("todoshow");
    }else{
        forms.classList.remove("todoshow");
        con.classList.add("todoshow");

    }

}

function init() {
    loadtodo();
    loadToFinished();
    form1.addEventListener("submit", handleSubmit);

}

init();
