var ship, shipMoving,edges;
var sea,seaImage;

function preload(){
shipMoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage = addImage("sea.png")

}

function setup(){
  createCanvas(400,400);
 
  
  sea = createSprite(200,200,400,400)
  

  ship = createSprite(50,160,30,20)
  ship. addAnimation("moving",shipMoving)
  ship.scale = 0.20
  ship.x = 50
}

function draw() {
  background("white"); 

  sea.velocityX = -2;
  
  if (sea.x<0) {
    sea.x = sea.width/2
  }

  console.log(ship.y)
  
  if(keyDown("space")){
    ship.velocityY = -10;
  }
  
  ship.velocityY = ship.velocityY + 0.5;
  
  ship.collide(ground)

 drawSprites();
}