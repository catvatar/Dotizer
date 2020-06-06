
PImage img;
ArrayList<PVector> next = new ArrayList<PVector>();

void setup(){
  size(1000,1000);
  img = loadImage("o1.jpg");
  
  image(img,0,0,width,height);
    loadPixels();
    for(int i = 0,I = 0;i < width;i += 9){
        for(int j = 0;j < height;j += 9){
            if(pixels[j*height + i] >= -16777216 && pixels[j*height + i] <= -15461356){
                next.add(new PVector(i,j));
            }
        }
    }
    updatePixels();
    background(255);
    stroke(0);
    fill(0);
    
   for(int i = 0;i < next.size();i++){
     ellipse(next.get(i).x,next.get(i).y,3,3);
   }
}
