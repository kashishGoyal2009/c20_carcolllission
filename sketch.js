var car ,wall;
var speed,weight;

function setup() {
 
  createCanvas(1600,400);
  
  speed=Math.round(random(55,90))
  weight=Math.round(random(400,1500))

  car=createSprite(400, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="grey"

  wall=createSprite(1100,200,40,height/2)
  wall.shapeColor="black"
  
 
  
  
}

function draw() {
  background(255);
  if((wall.x-car.x) <=(wall.width/2+car.width/2)){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500
    if(deformation<100){
      car.shapeColor="green"
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow"
    }
    if(deformation>180){
      car.shapeColor="red"
    }
  }
  drawSprites();
}