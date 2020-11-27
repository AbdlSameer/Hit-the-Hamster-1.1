
var hamster, hamsterImg, hamsterImg2;
var hole;
var cheese;
var player, playerImg1, playerImg2;
var player_Animation;
var score = 0;
var hit = 0;
var bomb, bombImg1, bombImg2;
var backgroundImg;
var hammerSound;
var checkSound;
var backgroundSound;
var gameState = play;

function preload()
{
    hamsterImg = loadImage("images/hamster.png");
    hamsterImg2 = loadImage("images/hit hamster.png")
    playerImg1 = loadImage("images/Boy 1.png");
    playerImg2 = loadImage("images/Boy 2.png");
    player_Animation = loadAnimation("images/Boy 1.png", "images/Boy 2.png");
    bombImg1 = loadImage("images/bomb 1.png");
    backgroundImg = loadImage("images/background.jpeg");
    hammerSound = loadSound("sounds/Hammer1.mp3");
    checkSound = loadSound("sounds/checkPoint.mp3");
    backgroundSound = loadSound("sounds/base sound.mp3")
}

function setup()
{
    backgroundSound.play();
    
   createCanvas(displayWidth-100,displayHeight-100);
   
 

   hamster = createSprite(0,0,40,40);
   hamster.addImage(hamsterImg);
   hamster.scale = 0.2;


   bomb = createSprite(0,0,40,40);
   bomb.addImage(bombImg1);
   bomb.scale = 0.2;


   player = createSprite(displayWidth/2, displayHeight/2);
   player.addImage(playerImg1);
   player.scale = 0.4;
}

function draw() 
{

  background(backgroundImg); 

//if(gameState===1)
//{
    if(score>0 && score%100 === 0)
    {
        checkSound.play() 
    } 

    if(frameCount%30===0) 
    { 
      hamster.x = random(50,displayWidth-200);
      hamster.y = random(displayHeight-300,displayHeight-200); 
      console.log(hamster.y) 
    } 

    if(frameCount%40===0)
    { 
      bomb.x = random(10,displayWidth-200); 
      bomb.y = random(displayHeight-200,displayHeight-100); 
    } 

    player.x = mouseX; 
    player.y = mouseY; 

    if(keyWentDown("a")) 
    { 
      hammerSound.play();
      player.addImage(playerImg2); 
      hit = 1; 
    } 

    if(keyWentUp("a")) 
    { 
      player.addImage(playerImg1); 
      hit = 0; 
    } 

    if(player.isTouching(hamster) && hit===1) 
    { 
      score = score+1; 
      hamster.addImage(hamsterImg2);
    } 
//}

//if(gameState===2)
//{

//}

fill("red"); 
textSize(22); 
text("Score: "+score,displayWidth-250,50); 
drawSprites(); 
}