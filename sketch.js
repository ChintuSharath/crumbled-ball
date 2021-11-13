
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
let engine;
let world;
var angle=60;


function setup()
{
  createCanvas(1500,400);
  
  engine = Engine.create()
  world = engine.world

  ground=new Ground(200,390,3500,20)
  right=new Ground(1300,400,20,200)
  left=new Ground(1100,400,20,200)
 

  var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
 ball=Bodies.circle(200,100,20,ball_options)
 World.add(world,ball)

 rectMode(CENTER)
 ellipseMode(RADIUS)

}


function draw() 
{
  background(51);

  ground.display()
  right.display()
  left.display()

  
  ellipse(ball.position.x,ball.position.y,20)

  Engine.update(engine)
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  }
}