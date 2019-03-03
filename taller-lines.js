function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 195; i = i + 5) {
    line(i, 10, i, i + i);
  }
  for (var a = 10; a <= 390; a = a + 5) {
    line(190 + a, 10, 190 + a, 390)
  }
}
