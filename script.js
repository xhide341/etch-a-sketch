const container = document.querySelector(".container");
const resetButton = document.querySelector(".resetButton");
const promptButton = document.querySelector(".promptButton");

function createGrid(size) {
    container.innerHTML = '';

    const cellSize = `${100 / size}%`;

    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.style.cssText = `
            border: 1px solid black; 
            width: ${cellSize}; 
            height: ${cellSize}; 
            box-sizing: border-box;
        `;
        
        div.addEventListener('mouseenter', () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = "#" + randomColor;
        });
        
        container.appendChild(div);
    }
}


function promptForGridSize() {
    let size = prompt("Enter number of grids per side (max 100):");
    size = parseInt(size);

    if (isNaN(size) || size < 1) {
        alert("Please enter a valid number.");
        return promptForGridSize();
    }

    if (size > 100) {
        alert("Maximum size is 100.");
        return promptForGridSize();
    }

    createGrid(size);
}

resetButton.addEventListener('click', () => {
    const AllDivs = container.querySelectorAll('div > div');
    AllDivs.forEach(div => {
        div.style.backgroundColor = '';
    });
});

promptButton.addEventListener('click', () => {
    promptForGridSize();
});

createGrid(50);