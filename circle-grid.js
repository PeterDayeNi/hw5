function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  ellipseMode(CENTER);
  for (var a = 20; a <= 390; a = a + 20){
  	for (var i = 20; i <= 390; i = i + 20) {
    	ellipse(i, a, 15);
  	}
  }
}
