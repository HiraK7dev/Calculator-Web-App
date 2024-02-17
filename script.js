const signs = [`C`, `(`, `)`, `/`, `7`, `8`, `9`, `*`, `4`, `5`, `6`, `-`, `1`, `2`, `3`, `+`, `00`, `0`, `.`, `=`];
const functionalSigns = [];
const btn = [];

let signCounter = 0;

const mainDiv = document.querySelector("#main");
const rows = document.querySelectorAll(".row");
const screen = document.querySelector("#screen");
const errorHandler = document.querySelector("#errorHandler");

const resultChecker = () => {
    try {
        screen.value = eval(screen.value);
        errorHandler.innerText = ``;
    } catch (error) {
        errorHandler.innerText = `ERROR`;
    }
}

for(let f=0; f<=20; f++){
    if(signs[f] === `C`){
        functionalSigns[f] = () => {
            screen.value = ``;
            errorHandler.innerText = ``;
        }
    }
    else if(signs[f] === `=`){
        functionalSigns[f] = () => {
            //checking the result
            resultChecker();
        }
    }
    else{
        functionalSigns[f] = () => {
            screen.value = screen.value + signs[f];
        }
    }
}

for(let i=0; i<5; i++){
    btn[i] = [];
    for(let j=0; j<4; j++){
        btn[i][j] = document.createElement("button");
        btn[i][j].innerText = `${signs[signCounter]}`;
        btn[i][j].addEventListener("click", functionalSigns[signCounter]);
        rows[i].append(btn[i][j]);
        signCounter++;
    }
}