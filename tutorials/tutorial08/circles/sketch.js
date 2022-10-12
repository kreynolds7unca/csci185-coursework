function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    // question 1: what do we want to repeat? Draw a circle. 
    // question 2: how long do we want to repeat? 5
    // question 3: what will change each time? The Y position by 50. 
   
   let y = 0;
    while(y <= canvasHeight) {
        fill ('lavender');
        circle(y + 100, y, 50);
        fill ('grey');
        circle(y + 200, y, 50);
        fill ('lavender');
        circle(y+ 300, y, 50);
        fill ('grey');
        circle(y+ 400, y, 50);
        y += 50; 
    }

    // let x = canvasWidth / 2;
    // let y = canvasHeight / 2; 
    // let size = canvasWidth; 
    // let fillColor = 'lavender';
    // while (size >= 25) {
    //     if (fillColor == 'lavender') {
    //         fillColor = 'grey'
    //     } else {
    //         fillColor = 'lavender';
    //     }
    //     fill(fillColor); 
    //     circle (x, y, size); 
    //     size -= 25; 
    // }

    drawGrid(canvasWidth, canvasHeight);
}
