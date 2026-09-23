canvasWidth = 600;
canvasHeight = 600;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}


squareLength = 100;

function draw() {
  background(0, 190, 255);
  fill("white");
  stroke("blue");
  strokeWeight(50);
  circle(canvasWidth-mouseX, canvasHeight-mouseY, 200);
  
  fill("red");
  stroke("green");
  strokeWeight(10);
  square(mouseX-(squareLength/2), mouseY-(squareLength/2), 100);

  fill("yellow");
  stroke("purple");
  strokeWeight(10);
  // triangle(mouseX-(squareLength/2), mouseY-(squareLength/2), 100);
  circle((canvasHeight-mouseX)*2, (canvasWidth-mouseY)/2, 100);

  fill("orange");
  stroke("yellow");
  strokeWeight(10);
  square(mouseY-(squareLength/2), mouseX-(squareLength/2), 100);
  
  textSize(75)
  text("🌸", mouseX+random(-175, 100), mouseY+random(-100, 100));
  text("🌸", mouseX+random(-175, 100), mouseY+random(-100, 100));
  text("🌸", mouseX+random(-175, 100), mouseY+random(-100, 100));
  text("🌸", mouseX+random(-175, 100), mouseY+random(-100, 100));
  text("🌸", mouseX+random(-175, 100), mouseY+random(-100, 100));
  text("🌸", mouseX+random(-175, 100), mouseY+random(-100, 100));
  text("🌸", mouseX+random(-175, 100), mouseY+random(-100, 100));
  text("🌸", mouseX+random(-175, 100), mouseY+random(-100, 100));
  text("🌸", mouseX+random(-175, 100), mouseY+random(-100, 100));
  text("🌸", mouseX+random(-175, 100), mouseY+random(-100, 100));

  text("🐝", mouseY+random(-175, 100), mouseX+random(-100, 100));
  text("🐝", mouseY+random(-175, 100), mouseX+random(-100, 100));
  text("🐝", mouseY+random(-175, 100), mouseX+random(-100, 100));
  text("🐝", mouseY+random(-175, 100), mouseX+random(-100, 100));
  text("🐝", mouseY+random(-175, 100), mouseX+random(-100, 100));
  text("🐝", mouseY+random(-175, 100), mouseX+random(-100, 100));
  text("🐝", mouseY+random(-175, 100), mouseX+random(-100, 100));
  text("🐝", mouseY+random(-175, 100), mouseX+random(-100, 100));
  text("🐝", mouseY+random(-175, 100), mouseX+random(-100, 100));
  text("🐝", mouseY+random(-175, 100), mouseX+random(-100, 100));
  text("🐝", mouseY+random(-175, 100), mouseX+random(-100, 100));
  text("🐝", mouseY+random(-175, 100), mouseX+random(-100, 100));

  textSize(35)
  text("🐞", random(0, canvasWidth), random(0, canvasHeight));
  text("🐞", random(0, canvasWidth), random(0, canvasHeight));
  text("🐞", random(0, canvasWidth), random(0, canvasHeight));
  text("🐞", random(0, canvasWidth), random(0, canvasHeight));
  text("🐞", random(0, canvasWidth), random(0, canvasHeight));

  arc(mouseX+random(0, 10), mouseY+random(0, 10), mouseY, mouseX, 0, PI, OPEN);
}