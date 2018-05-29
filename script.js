

const grid = document.querySelector('.grid');

let gridSize = 16;
grid.style.gridTemplate = "repeat(" + gridSize + ", 1fr) / repeat(" + gridSize + ", 1fr)";



for (let i = 0; i < gridSize * gridSize; i++) {
    const mysquare = document.createElement('div');
    mysquare.classList.add('box');
    mysquare.addEventListener("mouseover", mouseOver);
    grid.appendChild(mysquare);
}


function mouseOver(e) {
	e.srcElement.style.background = getRandomColor();
}


function resetGrid() {
	document.querySelectorAll('.box');
    box.style.backgroundColor = "";

}

function resizeGrid () {
	grid.style.gridTemplate = "repeat(" + gridSize + ", 1fr) / repeat(" + gridSize + ", 1fr)";
}

 
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}




