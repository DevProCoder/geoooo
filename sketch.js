
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hamer1,ground1,iron1,stone1,sand1,rubber1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
hamer1 = new hammer(200,200);
iron1 = new Iron(300,350);
ground1 = new ground(300,600,12000,10);
stone1 = new stone(300,60,50);
sand1 = new sand(310,80,10);
sand2 = new sand(320,80,10);
sand3 = new sand(325,80,10);
sand4 = new sand(330,80,10);
sand5 = new sand(340,80,10);
sand6 = new sand(315,80,10);
sand7 = new sand(307,80,10);

rubber1 = new rubber(300,80,10);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hamer1.display();
  iron1.display();
  ground1.display();
  stone1.display();
  sand1.display();
  sand2.display();  
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  rubber1.display();
  drawSprites();
 
}



