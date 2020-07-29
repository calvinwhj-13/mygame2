var form;
var player;
var object;
var enemy1,enemy2,enemy3,enemy4;
var edges;
var playermove;

function setup() {
  createCanvas(400,400);
  player = new Player(200,200,10,10);
  enemy1 = new Enemy(100,100,10,10);
  enemy1.movement(2,2);
  enemy2 = new Enemy(100,300,10,10);
  enemy2.movement(-2,-2);
  enemy3 = new Enemy(300,100,10,10);
  enemy3.movement(-2,2);
  enemy4= new Enemy(300,300,10,10);
  enemy4.movement(2,-2);
  object = new Object1(random(1,399),random(1,399),5,5);
  playermove = randomVelocity();
}

function draw() {
  background("grey");
  player.display();
  object.display();
  
  edges=createEdgeSprites();
  enemy1.sprite.bounceOff(edges);
  enemy2.sprite.bounceOff(edges);
  enemy3.sprite.bounceOff(edges);
  enemy4.sprite.bounceOff(edges);
  drawSprites();
}

function randomVelocity() {
  enemy1.velocityX = random(-10,10);
  enemy1.velocityY = random(-10,10);
}