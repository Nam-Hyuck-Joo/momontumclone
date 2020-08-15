const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");
const form1 = document.querySelector(".js-dolist"),
  input1 = form1.querySelector("input"),
  toDoList = document.querySelector(".js-indexList"),
  toFiList = document.querySelector(".js-FinishedList");
const con = document.querySelector(".js-todos");
const forms = document.querySelector(".js-forms");
const TODOS_LS = "toDos";
const USER_LS= "currentUser",
SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    forms.classList.add("todoshow");
    form.addEventListener("submit", handleSubmit)
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    forms.classList.remove("todoshow");
    con.classList.add("todoshow");
    greeting.classList.add(SHOWING_CN);
    const arr =["Good Morning", "Good afternoon"]
    const d = new Date();
    const n_t = d.getHours();
    var nt ="";
    if (n_t <= 12){
        nt = arr[0]
    }else{
        nt=arr[1]
    }
    greeting.innerText = `${nt} ${text}`;
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();

    }else{
        paintGreeting(currentUser);

    }

}   



function init(){
    loadName();

};

init();