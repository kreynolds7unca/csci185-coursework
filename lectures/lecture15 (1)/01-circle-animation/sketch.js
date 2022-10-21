const circleData = [
    { x: 500, y: 50, d: 100, speedX: 3, speedY: 3, color: 'lavender'},
    { x: 300, y: 150, d: 50, speedX: 2, speedY: 0, color: 'purple'},
    { x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: 'teal'},
    { x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: 'blue'},
    { x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5, color: 'yellow'},
    { x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: 'hotpink'}
];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// initialize variables outside of the function:
// let x = 0;
// let y = 600;
// let d = 50;
// let speedX = 3;
// let speedY = 2;

// const ball = {
//     x: 0,
//     y: 500, 
//     d: 50, 
//     speedX: 3,
//     speedY: -2
// }; 

// const ball2 = {
//     x: 500,
//     y: 300, 
//     d: 50, 
//     speedX: 2,
//     speedY: 3
// }; 

// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:
function draw() {
    clear();
    for (let i = 0; i < circleData.length; i++) {
        const ball = circleData[i];
        fill(ball.color);
        circle(ball.x, ball.y, ball.d); //was circle (x, y, d)
        ball.x += ball.speedX;
        ball.y += ball.speedY;
    }

    // fill('grey');
    // circle(ball2.x, ball2.y, ball2.d); //was circle (x, y, d)
    // ball2.x += ball2.speedX;
    // ball2.y += ball2.speedY;

    drawGrid(canvasWidth, canvasHeight);
}