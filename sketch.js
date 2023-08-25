let shapes = [];
let shapeA, shapeB, shapeC, shapeD;
let bg

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('mask.png')
  let shapeA = new Shape(windowWidth/2, windowHeight/2, 10, color(0, 0, 0));
  shapes.push(shapeA);
  }


function draw() {
  background(bg);
  for (let i = 0; i < shapes.length; i++) {
  shapes[i].display();
}
  

}


function mouseClicked() {

  for (let i = shapes.length - 1; i >= 0; i--) {
  if (shapes[i].contains(mouseX, mouseY)) {
  let shapeB = new Shape(random(400,1380), random(240,850), 10, color(0, 0, 0)); 
  let shapeC = new Shape(random(400,1380), random(240,850), 10, color(0, 0, 0)); 
  let shapeD = new Shape(random(400,1380), random(240,850), 10, color(0, 0, 0));
  stroke(1);
  line(shapeB.x, shapeB.y, shapeD.x, shapeD.y);
  line(shapeC.x, shapeC.y, shapeD.x, shapeD.y);

  shapes.splice(i, 1, shapeB, shapeC, shapeD);
    }
}

}

class Shape {
  constructor(x, y, size, color) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;
  }
display() {
  fill(this.color);
  ellipse(this.x, this.y, this.size);
  }
contains(x, y) {
  let d = dist(x, y, this.x, this.y);
  return d < this.size / 2;
  }
}
