function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("purple");

    //invoke draw Smiley
    drawSmiley (300); 


    drawGrid(canvasWidth, canvasHeight)
}


function drawSmiley(diameter) {
    fill('yellow')
    circle (400, 400, diameter) // x, y, diameter // 
}



    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/circle
    // fill('white');
    // let x = 550;
    // let y = 300;
    // let diameter = 500; 
    // circle(x, y, diameter);

    // fill('grey');
    // ellipse (450, 250, 50, 50);
    // ellipse (650, 250, 50, 50); 

    // https://p5js.org/reference/#/p5/ellipse
    // fill('teal');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    // Rectangle: https://p5js.org/reference/#/p5/rect
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging: