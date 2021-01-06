var bullet, wall;
var speed, weight, thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  weight = (30,52);
  thickness = random(22,83);

  bullet.velocityX = speed;
}

function draw() {
  background("black"); 

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

  if(damage > 10){
    wall.shapeColor = "red";
  }
  if(damage < 10){
    wall.shapeColor = "green";
  }
  }
  
  drawSprites();
}