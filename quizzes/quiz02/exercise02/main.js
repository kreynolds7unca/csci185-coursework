const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
    drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
    drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
    drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
    drawElmo(550, 200, 250, '#102e4a', true); 

    drawGrid(canvasWidth, canvasHeight);
}

function drawElmo (centerX, centerY, size, color, hasNose) {
    fill (color); 
    circle(centerX, centerY, size);
    fill('white');
    let sf = size/ 8; 
    circle(centerX-sf, centerY-sf, size / 5);
    fill('white');
    circle(centerX+sf, centerY-sf, size / 5);
    fill('black');
    circle(centerX+sf, centerY-sf, size / 15);
    fill('black');
    circle(centerX-sf, centerY-sf, size / 15);
    let noseWidth = sf*1.5;
    let noseHeight = sf*2.25;
    fill('#db5461');
    ellipse(centerX, centerY, noseWidth, noseHeight);
}

let hasNose = true; 



