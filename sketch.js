const Engine = Matter.e                    ngine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var stand1, stand2;
var block1, block2, block3, block4, block5,  block6,  block7,  block8,  block9,  block10,  block11,  block12,  block13,  block14,  block15;
var hex1, hex2, hex3, hex4, hex5;

function setup() {
  createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750, 375, 1500, 50);
  block1 = new Block(400, 230, 50, 50);
  block2 = new Block(450, 230, 50, 50);
  block3 = new Block(500, 230, 50, 50);
  block4 = new Block(550, 230, 50, 50);
  block5 = new Block(600, 230, 50, 50);
  block6 = new Block(425, 180, 50, 50);
  block7 = new Block(475, 180, 50, 50);
  block8 = new Block(525, 180, 50, 50);
  block9 = new Block(575, 180, 50, 50);
  block10 = new Block(450, 130, 50, 50);
  block11 = new Block(500, 130, 50, 50);
  block12 = new Block(550, 130, 50, 50);
  block13 = new Block(475, 80, 50, 50);
  block14 = new Block(525, 80, 50, 50);
  block15 = new Block(500, 30, 50, 50);

  hex1 = new Block(845, 150, 50, 50);
  hex2 = new Block(895, 150, 50, 50);
  hex3 = new Block(945, 150, 50, 50);
  hex4 = new Block(870, 100, 50, 50);
  hex4 = new Block(870, 100, 50, 50);
  hex4 = new Block(870, 100, 50, 50);
  hex5 = new Block(920, 100, 50, 50);
  hex6 = new Block(895, 50, 50, 50);
  hex = new Hex(100, 100, 30);
  stand1 = new Ground(500, 270, 300, 20);
  stand2 = new Ground(900, 200, 300, 20);
  Chain = new Chain(ball.body, { x: 200, y: 250 })
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
   block1.display("red", "pink");
  block2.display("red", "pink");
  block3.display("red", "pink");
  block4.display("red", "pink");
  block5.display("red", "pink");
  block6.display("indigo", "pink");
  block7.display("indigo", "pink");
  block8.display("indigo", "pink");
  block9.display("indigo", "pink");
  block10.display("green", "pink");
  block11.display("green", "pink");
  block12.display("green", "pink");
  block13.display("orange", "pink");
  block14.display("orange", "pink");
  block15.display("saffron", "pink");
  hex1.display(rgb(229, 116, 117), "cyan")
  hex2.display(rgb(229, 116, 117), "cyan")
  hex3.display(rgb(229, 116, 117), "cyan")
  hex4.display(rgb(110, 71, 102), "cyan")
  hex5.display(rgb(110, 71, 102), "cyan")
  hex6.display(rgb(251, 189, 76), "cyan")
  sling.display("limegreen");
  stand1.display();
  stand2.display();
  hex.display("darkblue", "orange");
  textSize(35);
  fill(0);
  text("DRAG AND RELEASE THE BALL TO DESTROY THE BOXES", 150, 385)
  fill("orange");
  textSize(20);
  text("PRESS SPACE FOR A SECOND CHANCE !!",20,20)
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly()
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}