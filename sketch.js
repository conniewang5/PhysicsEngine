const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic: true
  }
  var ball_options = {
    restitution: 1.0
  }
  ground = Bodies.rectangle(400, 375, 800, 50, ground_options);
  World.add(world, ground);
  ball = Bodies.circle(400, 100, 20, ball_options);
  World.add(world, ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}