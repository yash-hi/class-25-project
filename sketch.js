const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dn1,dn2,dn3;
var paper;
var ground;
var bin,binImage;

function preload(){
binImage=loadImage("dustbingreen.png");  
}

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;

bin=createSprite(600,620);
bin.addImage(binImage);
bin.scale=0.45;

dn1 = new Dustbin(520,680,20,260);
dn2 = new Dustbin(600,680,140,15);
dn3 = new Dustbin(680,680,20,260);

paper =  new Paper(50,698,70);

ground = new Ground(600,height,1200,30);

Engine.run(engine);
}

function draw() {
background("white");
rectMode(CENTER);

dn1.display();
dn3.display();
dn2.display();

ground.display();
paper.display();

drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW)
Matter.Body.applyForce(paper.body,paper.body.position,{x:710,y:-710})
}


