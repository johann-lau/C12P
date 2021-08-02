var garden,rabbit,ground;
var gardenImg,rabbitImg,appleImg,leafImg,orangeleafImg,redleafImg;
var apples, leaves;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeleafImg = loadImage("orangeleaf.png");
  redleafImg = loadImage("redimage.png");
}

function setup(){
  createCanvas(400,400);
  apples = createGroup();
  leaves = createGroup();
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

  ground = createSprite(200, 375, 400, 50);
  ground.visible = false;
}

function createLeaf() {
  if (frameCount%70 == 0) {
    var leaf = createSprite(random(50, 350), -50, 50, 50);
    var r = Math.round(random(1,3));
    if (r == 1) {
      leaf.addImage("leaf", leafImg);
    } else if (r == 2) {
      leaf.addImage("leaf", orangeleafImg);
    } else if (r == 3) {
      leaf.addImage("leaf", redleafImg);
    }
    leaf.rotation = random(0, 359);
    leaf.velocityY = 5;
    leaf.lifetime = 110;
    leaf.scale = 0.1;
    leaves.add(leaf)
    rabbit.depth = leaf.depth + 1;
  }
}

function createApple() {
  if (frameCount%80 == 0) {
    var apple = createSprite(random(50, 350), -50, 50, 50);
    apple.addImage("apple", appleImg);
    apple.velocityY = 5;
    apple.lifetime = 120;
    apple.scale = 0.1;
    apples.add(apple)
    rabbit.depth = apple.depth + 1;
  }
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  apples.collide(ground);
  leaves.collide(ground);

  createApple();
  createLeaf();
  drawSprites();
}