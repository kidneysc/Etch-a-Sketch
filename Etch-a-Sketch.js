//defines original variables and makes original grid
let gridSize = 16;
let divNum = (gridSize * gridSize);
let gridContainer = document.getElementById("container");
let reset = document.getElementById("reset");
let color = document.getElementById("color");
//let shade = document.getElementById("shade");  <----To add in future
reset.addEventListener('click', resetGrid);
color.addEventListener('click', colorToggle);
shade.addEventListener('click', shadeToggle);


//Sets up original grid
makeGrid(gridSize);
makeDivs(divNum); 
addFill();
decreaseOpacity();


//Sets up Resized Grid
function resetGrid() {
    let gridSize = parseInt(prompt("Size of Grid?"));
    let divNum = (gridSize * gridSize);
    gridContainer.innerHTML = "";    
    makeGrid(gridSize)
    makeDivs(divNum); 
    addFill();
    decreaseOpacity();
}

function colorToggle(){
    if(color.value =='off'){
        color.setAttribute('value', 'on');
    } else {
        color.setAttribute('value','off');
    }
};
function shadeToggle(){
    if(shade.value =='off'){
        shade.setAttribute('value', 'on');
    } else {
        shade.setAttribute('value','off');
    }
};
function makeGrid(gridSize){ //Creates current number of rows/columns in CSS
gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}
function makeDivs(divNum) {   //makes number of divs needed for container
    let i = 0;
    while (i < divNum) {
        document.querySelector('#container');
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
        i++;
    };
};
function addFill(){ //Adds event listeners and creates trail of colors or black depending on button
let divs = document.querySelectorAll('div.box');
divs.forEach((div) => {
    div.addEventListener('mouseover', function(e) {
        if(color.value == 'off'){
            e.target.style.backgroundColor = 'black';
        } else {
            e.target.style.backgroundColor = randomColor();
        }
    });
});
};
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function decreaseOpacity(){ //rem
    let divs = document.querySelectorAll('div.box');
    divs.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            if(shade.value == 'off'){
                e.target.style.opacity = 1;
            } else {
                e.target.style.opacity =  .1 ;
                };
                console.log(shade.value);
                console.log(e.target.style.opacity);
            })
        });
    };
