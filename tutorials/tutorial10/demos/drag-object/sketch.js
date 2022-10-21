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

function draw() {
    clear();
    fill(data.color);
    drawCreature(data.x, data.y, data.d);

    // message
    fill('black');
    textAlign(CENTER);
    textSize(16);
    text("Drag the circle.", canvasWidth/2, canvasHeight/2);
}


function drawCreature (centerX, centerY, size, faceColor="grey", eyeColor="black") {
    //eyes & body
    strokeWeight(0); //border 
    fill(faceColor);
    circle(centerX, centerY, size); // previously: 100, 400, 50
    fill(eyeColor);
    let sf = size/ 6; 
    circle(centerX-sf, centerY-sf, sf/2);  // left eye - previously: 92, 392, 8
    circle(centerX+sf, centerY-sf, sf/2); // right eye - previously: 108, 392, 8
   
    //nose
    fill('white');
    strokeWeight(0);
    let noseWidth = sf*2;
    let noseHeight = sf*1.5;
    ellipse(centerX, centerY, noseWidth, noseHeight); 
    fill('grey');
    let size1 = sf/3.5;
    let size2 = sf/3.5;
    let nosedotsPosition = sf/2; 
    ellipse(centerX-nosedotsPosition, centerY, size1, size2); 
    ellipse(centerX+nosedotsPosition, centerY, size1, size2);
    
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
        centerX+size, centerY+size*1.75,  // control point
        centerX-sf*1.5, centerY+sf*2.2, //start point
        centerX+sf*1.5, centerY+sf*2.2, //end point
        centerX-size, centerY+size*1.75, //control point
    );
}