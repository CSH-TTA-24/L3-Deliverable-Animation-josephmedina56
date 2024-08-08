let xPos = 25;
let yPos = 25
let r
let g 
let b 
let i = 1



function setup() {
  createCanvas(500, 500);
  background(0);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  
}

function mouseClicked() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

  yPos = 25
  xPos = random(0, 500)
  i = 1
}

function draw() {
  background(0, 20);

  fill(r, g, b);
  ellipse(xPos, yPos, 50, 50);


  
  // xPos += 3;
  yPos += i;

  if (i < 50){
    i += 0.2
  }

  
  if (xPos > 525) {
    xPos = -25;
  }
}




/*
let xPos = 250;
let yPos = 250;
let xDirection = 1
let yDirection = 1
let xsped = 1
let ysped = 1


function setup() {
   createCanvas(500, 500);
   background(0);
}


function draw() {
   background(0);


   fill(0, 255, 0);
   ellipse(xPos, yPos, 50, 50);

  xPos += xsped * xDirection
  yPos += ysped * yDirection

  if (xsped < 40) {
    xsped += 0.1
  }
  if (ysped < 40) {
    ysped += 0.09
  }

  // xsped += 0.1
  // ysped += 0.09

  if (xPos > 500) {
    xDirection *= -1
  }

  if (xPos < 0) {
    xDirection *= -1
  }

  if (yPos > 500) {
    yDirection *= -1
  }

  if (yPos < 0) {
    yDirection *= -1
  }
}

*/
