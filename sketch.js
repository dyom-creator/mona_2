let img;

function preload(){
  img = loadImage('mona.png');
}
function setup() {
  createCanvas(1280, 720);
}

function draw() {
  image(img,0,0);
  
  if (mouseIsPressed ===true) {
    console.log(mouseX,mouseY);
  } 
  
  fill(164,174,191);
  noStroke();
  triangle(584,148,670,119,676,163);
  fill(160,170,193);
  noStroke();
  triangle(739,126,670,119,676,163);
  fill(140,152,190);
  noStroke();
  triangle(739,126,757,230,676,163);
  fill(125,142,187);
  noStroke();
  triangle(739,126,757,230,828,217);
  fill(177,188,209);
  noStroke();
  triangle(584,148,591,210,676,163);
  fill(163,173,198);
  noStroke();
  triangle(655,231,591,210,676,163);
  fill(152,167,207);
  noStroke();
  triangle(655,231,757,230,676,163);
  fill(87,106,147);
  noStroke();
  triangle(819,267,757,230,828,217);
  fill(140,157,202);
  noStroke();
  triangle(819,267,757,230,755,271);
  fill(114,130,178);
  noStroke();
  triangle(819,267,786,327,755,271);
  fill(81,96,148);
  noStroke();
  triangle(819,267,786,327,849,321);
  fill(107,123,171);
  noStroke();
  triangle(655,231,757,230,755,271);
  fill(119,137,168);
  noStroke();
  triangle(655,231,697,273,755,271);
  fill(46,54,88);
  noStroke();
  quad(655,231,697,273,708,336,674,311);
  fill(31,41,66);
  noStroke();
  triangle(786,327,697,273,755,271);
  fill(41,47,68);
  noStroke();
  triangle(786,327,697,273,708,336);
  fill(41,45,66);
  noStroke();
  triangle(786,327,752,378,708,336);
  fill(204,178,146);
  noStroke();
  triangle(674,311,708,336,645,360);
  fill(153,163,186);
  noStroke();
  triangle(655,231,591,210,610,275);
  fill(160,175,203);
  noStroke();
  triangle(547,255,591,210,610,275);
  fill(239,227,213);
  noStroke();
  triangle(547,255,568,316,610,275);
  fill(229,212,195);
  noStroke();
  triangle(617,336,568,316,610,275);
  fill(190,174,150);
  noStroke();
  triangle(617,336,568,316,572,346);
  fill(217,194,170);
  noStroke();
  triangle(617,336,674,311,610,275);
  fill(161,178,214);
  noStroke();
  triangle(655,231,674,311,610,275);
  
  
  
} 
