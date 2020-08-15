const body = document.querySelector("body");
const Image_Number = 5;


function  paintImage(imNumber){
    const image = new Image();
    image.src =`\images/${imNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}


function genRandom(){
    const number = Math.floor(Math.random()*Image_Number);
    return number; 
}



function init(){
    const randomNumber = genRandom(); 
    paintImage(randomNumber)
}

init();