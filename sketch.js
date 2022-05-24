var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

ghost = createSprite(300,300,50,50)
ghost.addImage("ghost-standing",ghostImg)
ghost.scale = 0.5
doorsGroup=new Group()
climbersGroup=new Group()



}


function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("space")){
      ghost.velocityY= -10

    }
  
  if(keyDown("right")){
    ghost.x=ghost.x+4

  }
if(climbersGroup.isTouching(ghost)){
ghost.velocityY=0

}
if(keyDown("left")){
  
  ghost.x=ghost.x-4
}
ghost.velocityY= ghost.velocityY+5

spawndoors()
    drawSprites()

}
function spawndoors(){
if(frameCount%240===0){
var door = createSprite(200,-50);
door.addImage("door",doorImg)
door.velocityY=1

door.x=Math.round(random(120,400))
doorsGroup.add(door)
var climber = createSprite(200,10)
climber.addImage("climber",climberImg)
climber.velocityY=1
climber.x=door.x
climbersGroup.add(climber);
ghost.depth=door.depth
ghost.depth+=
}
}
