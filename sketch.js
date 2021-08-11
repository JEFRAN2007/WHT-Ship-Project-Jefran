var ship, ship_sailing, edges;
var seaImage;
var sea;

function preload(){
  ship_sailing = loadAnimation("ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,200);
  
  ship = createSprite(50,160,20,50);
  ship.addAnimation("sailing", ship_sailing);
  edges = createEdgeSprites();
  sea = createSprite(120,200,200,100)
  sea.addImage(seaImage);

  ship.scale = 0.1 ;
  ship.x = 50
}

function draw() {
  background("lightblue");

 
 console.log(ship.y)
  

 if(keyDown("space")){
   ship.velocityY = -10;
 }
 sea.velocityX = -6; 
 if (sea.x<0){
sea.x = sea.width/2;

 }
 ship.velocityY = ship.velocityY + 0.5;
 
 ship.collide(sea)

 drawSprites();
 
}