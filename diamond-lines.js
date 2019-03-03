function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 200; i = i + 10) {
    line(200 - i, i, 200 + i, i);
  }
  for (var a = 10; a <= 390; a = a + 10) {
    line(a, a + 200, 400 - a, a + 200);
  }
}
