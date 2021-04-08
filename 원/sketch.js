let x = 100;
let y = 100;

function setup() {
createCanvas(200, 200)
strokeWeight(1);
}

function draw() {
  
  background(255);
  for (let d = 200; d >= 20; d -= 20){
  fill(d);
  ellipse (x, y, d);
  
  }
 
}