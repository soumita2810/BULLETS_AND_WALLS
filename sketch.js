var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(windowWidth,windowHeight);

  thickness = random(22,83);
  speed = random(100,200);
  weight = random(30,52);

  bullet = createSprite(10, height/2, 20, 20);
  bullet.shapeColor = "black";
  bullet.velocityX = speed;
  wall = createSprite(1200, height/2, thickness, height/2);
  wall.shapeColor = color(80,80,80);
}

function hasCollided(lbullet,lwall)
{
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;

   if(bulletRightEdge>=wallLeftEdge)
   {
     return true;
   }
   return false;
}

function draw() {
  background("yellow"); 
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 10)
    {
      wall.shapeColor = color(225,0,0);
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0,225,0);
    }

  }
  drawSprites();
}