const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    circle(data.x, data.y, data.d);
    drawCreature(data.x, data.y, data.d);
}

const data = {
    x: 100,
    y: 100,
    d: 50,
    color: 'white'
}

function mouseDragged() {
    let d = dist(data.x, data.y, mouseX, mouseY);
    if (d < data.d/2 || data.color == 'red') {
        data.color = 'red';
        data.x = mouseX;
        data.y = mouseY;
    } 
}

function mouseReleased() {
    data.color = 'white';
}

// let mazeImage; 

// function preload() {
//     mazeImage = loadImage('simplemaze.png');
//   } 

function draw() {
    clear();
    // push();
    // scale(4); 
    // image(mazeImage, 20, -25);
    // pop();
    fill(data.color);
    drawCreature(data.x, data.y, data.d);
    // drawGrid(canvasWidth, canvasHeight); 
    drawMaze(); 
}


function drawCreature (centerX, centerY, size, faceColor="grey", eyeColor="black") {
    //eyes & body
    strokeWeight(1); //border
    stroke('black'); 
    fill(faceColor);
    circle(centerX, centerY, size); // previously: 100, 400, 50
    fill(eyeColor);
    let sf = size/ 6; 
    circle(centerX-sf, centerY-sf, sf/2);  // left eye - previously: 92, 392, 8
    circle(centerX+sf, centerY-sf, sf/2); // right eye - previously: 108, 392, 8
   
    //nose
    fill('white');
    strokeWeight(0);
    let noseWidth = sf*1.75;
    let noseHeight = sf*.85;
    ellipse(centerX, centerY-sf/5, noseWidth, noseHeight); 
    fill('grey');
    let size1 = sf/3.5;
    let size2 = sf/3.5;
    let nosedotsPosition = sf/3; 
    ellipse(centerX-nosedotsPosition, centerY-sf/5, size1, size2); 
    ellipse(centerX+nosedotsPosition, centerY-sf/5, size1, size2);
    
    //ears
    strokeWeight(1);
    stroke ('black');
    // left ear
    push();
    translate(centerX-sf*2.5, centerY-sf); //was 15, 360
    rotate(-1);
    fill(faceColor);
    ellipse(0, 0, size*(2/3), size/3.5);
    //was ellipse(0, 0, 125, 50);
    pop();
    // right ear
    push();
    translate(centerX+sf*2.5, centerY-sf); // was 185, 360
    rotate(1);
    fill(faceColor);
    ellipse(0, 0, size*(2/3), size/3.5);
    pop();
  

//belly curve
    strokeWeight(size/ 25);
    fill('white')
    strokeWeight(0);
    curve (
        centerX+size, centerY+size*2.5,  // control point
        centerX-sf*1.5, centerY+sf*2.2, //start point
        centerX+sf*1.5, centerY+sf*2.2, //end point
        centerX-size, centerY+size*2.5, //control point
    );
}

// function drawLine(ctx, begin, end, stroke = 'black', width = 5) {

//     ctx.beginPath();
//     ctx.moveTo(100,100);
//     ctx.lineTo(100, 400);
//     ctx.stroke('black');
// }

function drawMaze() {
    noFill(); 
    stroke('hotpink');
    strokeWeight(10); 
    beginShape();
        vertex(735,80);
        vertex(300, 80);
        vertex(300,525);
    endShape(OPEN);
    beginShape();
        vertex(835,80);
        vertex(835,520);
        vertex(390,520);
    endShape(OPEN); 
    beginShape();
        vertex(470,80);
        vertex(470,165); 
    endShape(OPEN); 
    beginShape();
        vertex(300, 350);
        vertex(380, 350);
    endShape(OPEN); 
    beginShape();
        vertex(835, 160);
        vertex(650, 160);
        vertex(650, 250);
    endShape(OPEN);
    beginShape();
        vertex(650, 250);
        vertex(740, 250);
        vertex(740, 340);
    endShape(OPEN);
    beginShape();
        vertex(380,160);
        vertex(380,250);
        vertex(560,250);
    endShape(OPEN); 
    beginShape();
        vertex(560,160);
        vertex(560,350);
        vertex(650,350);
    endShape(OPEN); 
    beginShape();
        vertex(650,350);
        vertex(650,435);
        vertex(745,435); 
    endShape(OPEN); 
    beginShape();
        vertex(650,435);
        vertex(380,435);
    endShape(OPEN); 
    beginShape();
        vertex(470,350);
        vertex(470,430);
    endShape(OPEN); 
}