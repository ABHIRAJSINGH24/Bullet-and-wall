var bullet,wall;
var speed,weight;
var damage,thickness;
var bulletRightEdge,wallLeftEdge;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,290, 20, 15);
  thickness=random(22,83);
  wall=createSprite(1200,canvas.height/2,thickness,canvas.height/2);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(0,0,255);
  wall.shapeColor=color(80,80,80);  
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    bullet.x=(wall.x-wall.width)+20;
    if(damage<10){
      bullet.shapeColor=color(0,255,0);
    }else if(damage>10){
      bullet.shapeColor=color(255,0,0);
    }
  }
  drawSprites();
}
function hasCollided(){
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x-wall.width;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }else if(bulletRightEdge<wallLeftEdge){
    return false;
  } 
}