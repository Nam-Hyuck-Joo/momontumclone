
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

const day_list =["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const houres = date.getHours();
    let month = date.getMonth() + 1;
    const day = day_list[date.getDay()];
    const date2 = date.getDate();
    const year = date.getFullYear();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${year}/${month<10 ?`0${month}`:month}/${date2} ${day} ${houres < 10 ?`0${houres}`:houres}:${minutes < 10 ?`0${minutes}`:minutes}:${seconds < 10 ?`0${seconds}`:seconds}`;
}




function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();
