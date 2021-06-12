var spaceship,spaceshipImg;
var bg;
function preload() {
  spaceshipImg=loadImage("Spaceship.png");
  bg=loadImage("Space Bg.png")
}
function setup() {
  createCanvas(800,400);
  spaceship=createSprite(400, 200, 50, 50);
  spaceship.addImage(spaceshipImg);
  spaceship.debug=false;
}

function draw() {
  background(bg); 
  if (keyDown("up")) {
    spaceship.y=spaceship.y-5;
  }
  if (keyDown("down")) {
    spaceship.y=spaceship.y+5;
  }
  if (keyDown("left")) {
    spaceship.x=spaceship.x-5;
  }
  if (keyDown("right")) {
    spaceship.x=spaceship.x+5;
  }
  drawSprites();
}