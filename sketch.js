var car,wall;
var deformation
var imgWall, imgCar1,imgCar2,imgCar3;
var speed,weight

function preload(){
  imgWall = loadImage('wall.jpg');
  imgWCar = loadImage('wcar.jpg');
  imgYCar = loadImage('ycar.jpg');
  imgRCar = loadImage('rcar.jpg');
  imgGCar = loadImage('gcar.jpg');
}

function setup() {
  createCanvas(1600,400);

  //speed=random(55,90);
  speed=random(100,500);
  weight=random(400,1500);

 // car=createSprite(50,200,50,50);
   car=createSprite(50,360,50,50);
   car.addImage("whiteCar",imgWCar);
   car.addImage("yellowCar",imgYCar);
   car.addImage("redCar",imgRCar);
   car.addImage("greenCar",imgGCar);
  car.velocityX=speed;
  //car.shapeColor=color(255);
  car.scale = 1;
  //car.debug = true;
  car.setCollider("rectangle",0,0,car.width,car.height/2);

  //wall=createSprite(1500,200,60,height/2);
  wall=createSprite(1400,280,60,height/2);
  wall.addImage(imgWall);
  wall.scale = 0.3;
  //wall.debug = true;
  wall.setCollider("rectangle",0,0,imgWall.width,imgWall.height/2);
  //wall.shapeColor=color(80,80,80);
}

function draw() {
  background("white"); 
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      //car.shapeColor=color(255,0,0);
      car.changeImage("redCar",imgRCar);
    }
    if(deformation<1807 && deformation>100){
      ///car.shapeColor=color(230,230,0);
      car.changeImage("yellowCar",imgYCar);
    }
    if(deformation<100){
      //car.shapeColor=color(0,255,0);
      car.changeImage("greenCar",imgGCar);
    }
   displayText();
  }
  drawSprites();
}
function displayText(){
  rect(1095, 12, 85, 22);
  rect(1190, 12, 150, 22);
  rect(1095, 38, 85, 22);
  rect(1190, 38, 150, 22);
  rect(1095, 63, 85, 22);
  rect(1190, 63, 150, 22);
  fill("White")
  text("Speed:\t\t\t\t\t\t\t\t" + speed, 1100, 28);
  textSize(14);
  fill("White")
  text("Weight:\t\t\t\t\t " + weight, 1100, 54);
  textSize(14);
  if(deformation>180){
      fill(153,52,51);
  }
  if(deformation<1807 && deformation>100){
    fill(230,230,0);
  }
  if(deformation<100){
    fill(0,255,0);
  }
  text("Deformation:\t " + deformation, 1100, 78);

}