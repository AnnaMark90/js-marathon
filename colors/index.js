const board = document.querySelector('#board');
const SQUARES_NUM = 1000;
const colors = ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#DC143C', '#FF0000', '#B22222', '#8B0000', '#FFC0CB', '#FFB6C1', '#FF69B4',  '#FF1493', '#C71585', '#DB7093', '#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#EE82EE', '#DA70D6', '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2'];

for (let i = 0; i < SQUARES_NUM; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor)

    board.append(square);
}

function setColor(e) {
    const el = e.target;
    const color = getRandomColor();

    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
    const el = e.target;

    el.style.backgroundColor = '#1d1d1d';
    el.style.boxShadow = `0 0 2px black`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

//замыкание