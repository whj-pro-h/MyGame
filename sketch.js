var bg, bgImg;
var balloonImg1, balloonImg2, balloonImg3, balloonImg4;
var blueBalloonGroup, greenBalloonGroup, pinkBalloonGroup, redBalloonGroup;
var bow, bowImg;
var score = 0;
var arrow, arrowGroup;

function preload() {

  //loading background images
  bgImg = loadImage("backg.png");

  //loading all balloon Images
  balloonImg1 = loadImage("blue_balloon0.png");
  balloonImg2 = loadImage("green_balloon0.png");
  balloonImg3 = loadImage("pink_balloon0.png");
  balloonImg4 = loadImage("red_balloon0.png");

  //loading bow image
  bowImg = loadImage("bow0.png");

  //loading image of arrow
  arrowImg = loadImage("arrow0.png");

  //creating groups
  blueBalloonGroup = new Group();
  greenBalloonGroup = new Group();
  pinkBalloonGroup = new Group();
  redBalloonGroup = new Group();
  arrowGroup = new Group();
}

function setup() {
  createCanvas(500, 560);
  
  //creating background
  bg = createSprite(420, 340, 5, 5);
  bg.addImage("bg", bgImg);
  bg.scale = 1.3;
  bg.velocityX = -3;

  //creating Bow Sprite
  bow = createSprite(480, 280, 5, 10);
  bow.addImage("bow", bowImg);



}

function draw() {
  background("skyblue");
  
  //Never ending background
  if (bg.x < 30) {
    bg.x = bg.width / 2;
  }

  //moving bow with help of mouse
  bow.y = mouseY;

  //spawning balloons randomly
  var rand = Math.round(random(1, 4));
  switch (rand) {
    case 1:
      blueBalloons();
      break;
    case 2:
      greenBalloons();
      break;
    case 3:
      pinkBalloons();
      break;
    case 4:
      redBalloons();
      break;
    default:
      break;
  }

  //calling Functions
  //spawnBalloons();
  if (keyDown("space")) {
    createArrow();
  }
  if (arrowGroup.isTouching(blueBalloonGroup)) {
    blueBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score += 1;
  } else if (arrowGroup.isTouching(greenBalloonGroup)) {
    greenBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score += 2;
  } else if (arrowGroup.isTouching(pinkBalloonGroup)) {
    pinkBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score += 4;
  } else if (arrowGroup.isTouching(redBalloonGroup)) {
    redBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score += 3;
  }
  drawSprites();
  //Displaying Scores
  fill("black")
  text("SCORE: " + score, 420, 30);
  text("Press Space to release Arrow", 321,12);
}



//Spawning Balloons
function blueBalloons() {
  if (frameCount % 80 == 0) {
    var blueBalloon = createSprite(50, 100, 8, 8);
    blueBalloon.addImage("bln", balloonImg1);
    blueBalloon.scale = 0.1;
    blueBalloon.velocityX = 3;
    blueBalloon.y = Math.round(random(50, 500));
    blueBalloon.lifetime = 150;
    blueBalloonGroup.add(blueBalloon);
  }
}

function greenBalloons() {
  if (frameCount % 80 == 0) {
    var greenBalloon = createSprite(50, 100, 8, 8);
    greenBalloon.addImage("bln", balloonImg2);
    greenBalloon.scale = 0.1;
    greenBalloon.velocityX = 3;
    greenBalloon.y = Math.round(random(50, 500));
    greenBalloon.lifetime = 150;
    greenBalloonGroup.add(greenBalloon);
  }
}

function pinkBalloons() {
  if (frameCount % 80 == 0) {
    var pinkBalloon = createSprite(50, 100, 8, 8);
    pinkBalloon.addImage("bln", balloonImg3);
    pinkBalloon.scale = 1.2;
    pinkBalloon.velocityX = 3;
    pinkBalloon.y = Math.round(random(50, 500));
    pinkBalloon.lifetime = 150;
    pinkBalloonGroup.add(pinkBalloon);
  }
}

function redBalloons() {
  if (frameCount % 80 == 0) {
    var redBalloon = createSprite(50, 100, 8, 8);
    redBalloon.addImage("bln", balloonImg4);
    redBalloon.scale = 0.1;
    redBalloon.velocityX = 3;
    redBalloon.y = Math.round(random(50, 500));
    redBalloon.lifetime = 150;
    redBalloonGroup.add(redBalloon);
  }
}

function createArrow() {
  arrow = createSprite(480, 300, 15, 5);
  arrow.y = bow.y;
  arrow.addImage("arrow", arrowImg);
  arrow.scale = 0.3;
  arrow.velocityX = -4;
  arrow.lifetime = 115;
  arrowGroup.add(arrow);
}