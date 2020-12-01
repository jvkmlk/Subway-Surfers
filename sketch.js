var track1,track2,track3,track1_Image,track2_Image,track3_Image;
var jake,jake_Image;
var coin,coin_Image,coin_group;
var ghost,ghost_Image,ghost_group;
var PLAY = 1;
var END = 0;
var gameState = "PLAY";
var gameover,gameover_Image;
var score=0;


function preload(){
  track1_Image = loadImage("track1.png");
  track2_Image = loadImage("track2.png"); 
  track3_Image = loadImage("track3.png"); 
  jake_Image = loadImage("jake3.png");
  coin_Image = loadImage("coin1.png");
  ghost_Image = loadImage("ghost.png"); 
  gameover_Image = loadImage("Gameover.png");    
}

function setup() {
  createCanvas(550, 565);

  track1 =createSprite(470,375,20,20);
  track1.addImage("track1", track1_Image);
  track1.velocityY = 8;   
  track1.scale=1.5;
  
  track2 =createSprite(280,375,20,20);
  track2.addImage("track2", track2_Image);
  track2.velocityY = 8;   
  track2.scale=1.5; 
  
  track3 =createSprite(85,375,20,20);
  track3.addImage("track3", track3_Image);
  track3.velocityY = 8;  
  track3.scale=1.5;
  
  jake =createSprite(290,480,20,20);
  jake.addImage("jake", jake_Image);
  jake.scale=0.3;
  
  gameover=createSprite(300,300);
  gameover.addImage("gameover", gameover_Image);
  gameover.visible=false
  gameover.scale=0.3;
 
  coin_group = new Group();
  ghost_group = new Group();
}

function draw() {
      background("brown");
 textSize(100);
  fill("cyan");
    text("Score: "+ score, 50,90);
  if(gameState==="PLAY"){ 
 score=score+Math.round(getFrameRate()/60);  
 if (keyDown(RIGHT_ARROW)) {
  jake.x=jake.x+10
 }
 if (keyDown(LEFT_ARROW)) {
  jake.x=jake.x-10
 }
    
    
  
 if (track1.y > 150){
  track1.y = 100;
 }  
  
 if (track2.y > 150){
  track2.y = 100;
 }
  
 if (track3.y > 150){
  track3.y = 100;
         if(ghost_group.isTouching(jake)){
    gameState="END"; 
      coin_group.setvelovityY = 0;
    ghost_group.velocityY = 0;
         gameover.visible=true;     
      
  }
  }

  spawncoins();
  spawnghost();
  drawSprites();
}
 else if(gameState === "END") {

   
 }

 


function spawncoins(){
   if(frameCount % 80 === 0){
     coin = createSprite(288,0,20,20); 
     coin.addImage("coin", coin_Image);
     coin.x=Math.round(random(500,100));
     coin.velocityY = 10;
     coin.scale = 0.18;
     coin.lifetime =40;
     coin_group.add(coin);
   }
}
     
function spawnghost(){
   if(frameCount % 80 === 0){     
     ghost = createSprite(288,0,20,20); 
     ghost.addImage("ghost", ghost_Image);
     ghost.x=Math.round(random(500,200));
     ghost.velocityY = 15;
     ghost.scale = 0.20;
     ghost_group.add(ghost);     
  }
}
}