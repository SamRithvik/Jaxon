var jake, jake_running;
var path, pathImage;
var boundary1;
var boundary2;

function preload(){
  //pre-load images
  jake_running = loadAnimation('Jake1.png' ,'Jake2.png' ,'jake3.png' ,'jake4.PNG' ,'jake5.png');
  pathImage = loadImage('path.png');
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  jake = createSprite(200,200,50,50);
  jake.addAnimation("running", jake_running);

  path = createSprite(200,200);
  path.addImage("path",pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  boundary1 = createSprite(35,200,20,400);
  boundary1.visible = false;

  boundary2 = createSprite(370,200,20,400);
  boundary2.visible = false;
}

function draw() {

path.depth = jake.depth - 1;
path.velocityY = 4;

  background("black");
  drawSprites();

  if(path.y > 400){
    path.y = height/2;
  }

  jake.x = World.mouseX;

  if(jake.collide(boundary1)){
    jake.x = 50;
  }

  if(jake.collide(boundary2)){
    jake.x = 350;
  }
}

