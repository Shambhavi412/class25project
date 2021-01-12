
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3,dustbin4;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,450,70); 
	ground=new Ground(width/2,670,width,20);
	 dustbin1=new Dustbin(600,650); 
	 dustbin2 = new Dustbin(750,608,20,100);
	 dustbin3 = new Dustbin(550,608,20,100);
	 
	//dustbin4 = new Dustbin(650,648,200,50);

	

//console.log(paper.position.x)

	Engine.run(engine);
  
	//paper = new Paper(300,200,20);
}


function draw() {
  rectMode(CENTER);
  background(100,100,120);
  paper.display();

  dustbin1.display();
 dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
 
}


function keyPressed()
{if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:900,y:-945});
}




}
