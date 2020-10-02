
let next = new Array()
let img;
function preload() {
  img = loadImage('./o1.jpg');
}

function setup() {
  createCanvas(1000, 1000);
  image(img, 0, 0, width, height);
  loadPixels();
  for (let i = 0, I = 0; i < width; i += 9) {
    for (let j = 0; j < height; j += 9) {
      //if (pixels[j * height + i] >= -16777216 && pixels[j * height + i] <= -15461356) {
      let c = get(i,j)
      // I'm not sure what color you want. So I use color(100,100,100) below. you can change value as you want
      if (c[0]<100 && c[1]<100 && c[2]<100) {
        next.push(createVector(i, j));
      }
    }
  }
  updatePixels();
  background(255);
  stroke(0);
  fill(0);

  for (let i = 0; i < next.length; i++) {
    ellipse(next[i].x, next[i].y, 3, 3);
  }
}
