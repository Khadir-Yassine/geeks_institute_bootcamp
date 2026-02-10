let colors = [
    "red","orangered","orange",
    "yellow","yellowgreen","lightgreen",
    "green","turquoise","cyan",
    "skyblue","dodgerblue","blue",
    "navy","purple","darkmagenta",
    "violet","pink","lightgray",
    "gray","black","white"
];

let selectedColor = "black";

let colorsDiv = document.getElementById("colors");

for(let i=0; i<colors.length; i++){
    let box = document.createElement("div");
    box.className = "colorBox";
    box.style.backgroundColor = colors[i];

    box.onclick = function(){
        selectedColor = colors[i];
    }

    colorsDiv.appendChild(box);
}


let grid = document.getElementById("grid");

for(let i=0; i<2500; i++){ 
    let square = document.createElement("div");
    square.className = "square";
    grid.appendChild(square);
}

let mouseDown = false;

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup   = () => mouseDown = false;

let squares = document.getElementsByClassName("square");

for(let i=0; i<squares.length; i++){

    squares[i].onmouseover = function(){
        if(mouseDown){
            this.style.backgroundColor = selectedColor;
        }
    }

    squares[i].onclick = function(){
        this.style.backgroundColor = selectedColor;
    }
}

document.getElementById("clearBtn").onclick = function(){
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = "";
    }
}
