
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	plane = new Plane(500,575,width,50);

	stone = new Stone(400,50,80,80);
	rubber = new Rubber(700,50,40);
	hammer = new Hammer(500,300,70,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
	plane.display();

	stone.display();

	hammer.display();
	rubber.display(ellipse(0,0,this.r));
}



