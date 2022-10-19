const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    // picks a random number between 0 and 100:
    let rando = Math.random() * 100;
    console.log(rando);
    
    // picks a random number between 10 and 500:
    rando = Math.random() * 490 + 10;
    console.log(rando);
    
    // draws 4 stars: 
    let counter = 0;
    while (counter <1000) {
        strokeWeight(0);
        fill('white');
        let x = Math.random ()*canvasWidth;
        let y = Math.random () *canvasHeight;
        let w = Math.random () *5; 
        circle(x, y, w);
        counter+=1;
    }
}

function draw () {
    clear (); 
    frameRate (5);
    let counter = 0;
    while (counter <1000) {
        strokeWeight(0);
        fill('white');
        let x = Math.random ()*canvasWidth;
        let y = Math.random () *canvasHeight;
        let w = Math.random () *5; 
        circle(x, y, w);
        counter+=1;
    }
}


