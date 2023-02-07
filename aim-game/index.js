const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#DC143C', '#FF0000', '#B22222', '#8B0000', '#FFC0CB', '#FFB6C1', '#FF69B4',  '#FF1493', '#C71585', '#DB7093', '#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#EE82EE', '#DA70D6', '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2'];
let time = 0;
let score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();

    screens[0].classList.add('up');
});

// делегирование
timeList.addEventListener('click', (e) => {
    if(e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', (e) => {
    if(e.target.classList.contains('circle')) {
        score++;

        e.target.remove();

        createRandomCircle();
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if(time === 0) {
        finishGame();
    } else {
        let current = --time;
        if(current < 10) current = `0${current}`;
    
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
    board.innerHTML = `<h1>Счет: <span class="primary"> ${score} </span></h1>`;
    timeEl.parentElement.classList.add('hide');
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNum(10, 60);
    const {width, heigth} = board.getBoundingClientRect();
    const x = getRandomNum(0,  width - size);
    const y = getRandomNum(0, heigth - size);
    const color = getRandomColor();

    circle.classList.add('circle');
    circle.style.background = color;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.append(circle);
}

function getRandomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}