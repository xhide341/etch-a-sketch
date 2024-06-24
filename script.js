const container = document.querySelector(".container");
const button = document.querySelector("button");

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.style.cssText = 'display: flex;';
    
    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.style.cssText = 'border: 1px solid black; width: 30px; height: 30px;';
        
        div.addEventListener('mouseenter', () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = "#" + randomColor;
        });

        div.addEventListener('mouseleave', () => {
        
        });
        
        row.appendChild(div);
    }
    
    container.appendChild(row);
}

button.addEventListener('click', () => {
    const AllDivs = container.querySelectorAll('div > div');
    AllDivs.forEach(div => {
        div.style.backgroundColor = '';
    });
});