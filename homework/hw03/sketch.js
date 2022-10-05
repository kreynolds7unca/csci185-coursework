function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    

    drawCreature(100, 400, 200, faceColor="grey", eyeColor="black");
    drawCreature(500, 400, 100, faceColor="purple", eyeColor="hotpink");
    drawCreature(900, 400, 50, faceColor="yellow", eyeColor="blue");
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:
//faceColor = body (& ears)
//eyeColor = eyes

function drawCreature (centerX, centerY, size, faceColor="brown", eyeColor="black") {
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

