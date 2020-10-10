//Variables
var trexanim,trex,edges,cactus,ground,groundanim,cactusanim,cactus2,cactus3,cactus4,ground2,cactus5,clouds,cloudanim
var gameState = "play"
var obsGroup,cloudsGroup

// Load  Anything
function preload() {
trexanim = loadAnimation("trex.png","trex1.png","trex2.png");
cactusanim = loadAnimation("cactus.png");
cactus2 = loadAnimation("cactus 2.png");
cactus3 = loadAnimation("cactus 3.png");
cactus4 = loadAnimation("cactus 4.png");
cactus5 = loadAnimation("cactus 5.png");
groundanim = loadAnimation("Ground.png");
cloudanim = loadAnimation("cloud.png");
}
// Implementing The Added "Anything"
function setup() {
  //CANVAS
  createCanvas(800,200);
  //Trex
trex = createSprite(400, 200, 50, 50);
trex.scale = 0.5;
trex.addAnimation("t1",trexanim);
trex.x=50 ;
trex.y=150;
obsGroup = createGroup ()
cloudsGroup = createGroup ()
  //Gronud
ground = createSprite(400,200,10,10);
ground.addAnimation("t3",groundanim);
ground.y=180;
ground.x=200;
ground.velocityX= -9;

//Invisible ground
ground2 = createSprite(100,400,800,5);
ground2.visible=false;
ground2.x=400;
ground2.y=193;

}

  //DRAW!!!!
function draw() {
  background(200,200,200);  
  
console.log(trex.y);

//Trex Jump


// Infinite Ground


if(gameState === "play"){

  if (keyDown("space")&&trex.y>160) {
    trex.velocityY=-10;
  }

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
//Gravity trex
trex.velocityY = trex.velocityY +0.9;

//Spawn Clouds
spawnClouds();
//Spawn Cactus
spawnCactus();

if(trex.isTouching(obsGroup)){
  gameState = "stop";

}
}

if (gameState === "stop") {

  ground.velocityX=0;
  trex.velocityY = 0;
  obsGroup.setVelocityXEach(0);
  cloudsGroup.setVelocityXEach(0);

}

//Edges
edges = createEdgeSprites()
trex.collide (edges[3]);
trex.collide (ground2);




//Vision
drawSprites();
}
// Cloud Spawning
function spawnClouds () {


if (frameCount%80===0){
  clouds = createSprite (200,200,10,10);
  clouds.y= random(0,150);
  clouds.x=850;
  clouds.velocityX = -6;
  clouds.lifetime = 145;
  clouds.addAnimation ("clouds",cloudanim);
  //console.log(clouds.y);
  clouds.depth=trex.depth;
  trex.depth=trex.depth+1;

cloudsGroup.add(clouds)


}
}

//CACTUS spawning
function spawnCactus () {

if(frameCount%80===0){

  var R = Math.round(random(1,5));
  
  
  //cactus settings
  cactus = createSprite(200,200,10,10);
  cactus.velocityX=-9;
  cactus.x=800;
  cactus.y=170;

obsGroup.add(cactus)

// Cactus Animation (1-5)
  switch(R){

    case 1 : cactus.addAnimation("cactus",cactusanim);
    cactus.scale = 1.1;
     break;
     case 2 : cactus.addAnimation("cactus",cactus2);
cactus.scale = 1;
     break;
     case 3 : cactus.addAnimation("cactus",cactus3);
cactus.scale = 1;
     break;
     case 4 : cactus.addAnimation("cactus",cactus4);
cactus.scale = 0.6;
     cactus.y=165;
     break;
     case 5 : cactus.addAnimation("cactus",cactus5);
cactus.scale =1.3 ;
     break;
     default : break;
  }

  cactus.lifetime = 100;

}

}