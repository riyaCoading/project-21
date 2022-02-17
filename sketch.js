const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground,left,right,topwall

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground = new Ground(200,380,400,20);
  left = new Ground(10,200,20,400)
  right = new Ground(390,200,20,400)
  topwall = new Ground(200,20,400,20)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show()
  left.show()
  right.show()
  topwall.show()
}

