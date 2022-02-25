var bgImg,CH1IMG,CH2IMG;

function preload(){

  bgImg =loadImage ("snow2.jpg")
  CH1IMG = loadImage ("snow4.webp")
  CH2IMG = loadImage ("snow5.webp")
}
function setup() {

  createCanvas(800,400);

  CH1=createSprite(400, 200, 50, 50);
  CH1.addImage ("CH1ImG",CH1IMG)
  CH1.scale = 0.2;
  CH1.velocityX = 5;

  CH2=createSprite(500, 300, 50, 50);
  CH2.addImage ("CH1ImG",CH2IMG)
  CH2.scale = 0.2;
  CH2.velocityX = -5;

  CH3=createSprite(200, 100, 50, 50);
  CH3.addImage ("CH1ImG",CH1IMG)
  CH3.scale = 0.2;
  CH3.velocityX =- 5;

  CH4=createSprite(300, 220, 50, 50);
  CH4.addImage ("CH1ImG",CH1IMG)
  CH4.scale = 0.2;
  CH4.velocityX = 5;
}

function draw() {

  background(bgImg);  
  drawSprites();
}