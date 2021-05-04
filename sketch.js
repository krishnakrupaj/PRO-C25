const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world
var bbi,bb2,bb3,paper,ground

function preload() {
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-5,width,10);
	var options = {
		'restitution':0.8,
		'friction':1,
		'density':1.4,
		'isStatic':true
	}

	paper = new Paper();
	bb1 = new BinBox(864-15,285,160,20);
	bb2 = Bodies.rectangle(935-15,232,20,100,options);
	bb3 = Bodies.rectangle(728+50,232,20,100,options);
	World.add(world,bb2);
	World.add(world,bb3);
  
  Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);	
  background("cyan");

  Engine.update(engine);  

  rectMode(CENTER);
  rect(bb2.position.x,bb2.position.y,20,100);
  rect(bb3.position.x,bb3.position.y,20,100);

  ground.display();
  paper.display();
  bb1.display();  
  
  
    
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-45});
	}
}