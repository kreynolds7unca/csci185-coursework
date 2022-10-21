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
    d: 100,
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

let farmImage; 

function preload() {
    farmImage = loadImage('cartoonfarm.jpg');
  } 

function draw() {
    clear();
    fill(data.color);
    drawFarm(); 
    drawCreature(data.x, data.y, data.d);
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

function drawFarm() {
    push();
    scale(1.3); 
    image(farmImage, 0, -10);
    pop();
}