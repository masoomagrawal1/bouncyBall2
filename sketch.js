const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(600,390,1200,20);
   
    box1=new Box(200,100,50,50);
    box2=new Box(400,50,30,60);


    ball1=new Ball(400,70,20);
    ball2=new Ball(300,50,10);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("brown")
    ground1.display();

   
    fill("yellow")
    ball1.display();

    fill(190);
    ball2.display()


    fill("red")
    box1.display();

    fill("blue");
    box2.display()
    
}