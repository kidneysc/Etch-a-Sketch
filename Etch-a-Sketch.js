//defines original grid size
let gridSize = 2;
let divNum = (gridSize * gridSize);

makeDivs(); 

//
function resetGrid() {
    let gridSize = parseInt(prompt("Size of Grid?"));
    let divNum = (gridSize * gridSize);
    gridContainer.innerHTML = "";    
    makeDivs(); 
}

//Creates current number of rows/columns in CSS
let gridContainer = document.getElementById("container");
gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

function makeDivs() {   //makes number of divs needed for container
    let i = 0;
    while (i < divNum) {
        document.querySelector('#container');
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
        i++;
    };
};



//Adds event listeners to each square and changes background to black
let divs = document.querySelectorAll('div.box');
divs.forEach((div) => {
    div.addEventListener('mouseover', shadeBlack);
    function shadeBlack() { div.setAttribute("style", "background-color: black"); }
});

//Resets Grid
let button = document.querySelector('button');
button.addEventListener('click', resetGrid);
