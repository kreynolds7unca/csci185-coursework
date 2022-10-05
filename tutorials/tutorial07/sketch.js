function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 80, 'hotpink'); //x, y, diameter, color
    drawCircle(200, 100, 40, 'navy');
    drawCircle(300, 100, 80, 'teal');
    drawCircle(400, 100, 40, 'hotpink');

    // Exercise 2: 
    drawOval(100, 200, 100, 62.5, 'teal');
    drawOval(200, 200, 62.5, 100, 'hotpink');
    drawOval(300, 200, 100, 62.5, 'navy');
    drawOval(400, 200, 62.5, 100, 'teal');

    // Exercise 3:
    drawBullseye(100, 300, 100);
    drawBullseye(200, 300, 50);
    drawBullseye(300, 300, 100);
    drawBullseye(400, 300, 50);

    // Exercise 4:
    drawFace(100, 400, 50);
    drawFace(200, 400, 100);
    drawFace(300, 400, 50);
    drawFace(400, 400, 100);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
//drawCircle(300, 400, 40, 'yellow');

function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
//drawOval(100, 200, 100, 62.5, 'teal');

function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
//size is based on percentages, going down by 25% each time
//color added for options if user doesn't add their own colors 

function drawBullseye(centerX, centerY, size, fillColor1='teal', fillColor2='navy') {
    fill(fillColor1);
    circle(centerX, centerY, size);
    fill(fillColor2);
    circle(centerX, centerY, size * .75);
    fill(fillColor1);
    circle(centerX, centerY, size * .5);
    fill(fillColor2);
    circle(centerX, centerY, size * .25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
// scale factor: was centerX-8, centerY-8, 8, but scaling, but proportion is off.
// How much 8 can go into 50. Can have multiple scale factors in one function and/or shape. 

function drawFace(centerX, centerY, size, faceColor="lavender") {
    strokeWeight(1); //border 
    fill(faceColor);
    circle(centerX, centerY, size); // previously: 100, 400, 50
    fill('black');
    let sf = size/ 6; 
    circle(centerX-sf, centerY-sf, sf);  // left eye - previously: 92, 392, 8
    circle(centerX+sf, centerY-sf, sf); // right eye - previously: 108, 392, 8

// mouth - start with flat line with 2 coordinates.
    // strokeWeight(size/ 25); //mouth   
    // line (
    //     centerX-sf*2, // x1
    //     centerY+sf, // y1
    //     centerX+sf*2, //x2
    //     centerY+sf, //y2
    // ); 

// mouth curve
    strokeWeight(size/ 25);
    noFill()
    stroke('black');
    curve (
        centerX-sf*2, centerY-size,  // control point
        centerX-sf*2, centerY+sf, //start point
        centerX+sf*2, centerY+sf, //end point
        centerX+sf*2, centerY-size, //control point
    ); 

}

