
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var ground;
var right1;
var right2;

function preload()
{
	
}

function setup() {
	createCanvas(900, 900);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(450, 670, 900, 20);
	right1 = new Ground(780,610,20,100);
	right2 = new Ground(600,610 ,20,100);

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction : 0,
		density: 1.2,
	}

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(200,450,20,ball_options);
	fill("orange");
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(100);
  ellipse(ball.position.x, ball.position.y, 20);
  ground.show();
  right1.show();
  right2.show();
  fill(255);
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	//Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.1 ,y:0.1});
	Matter.Body.applyForce(ball,ball.position,{x:55,y:-55});
	}
}


