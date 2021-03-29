const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){  
    var canvas = createCanvas(800,600);
    engine = Engine.create();  
    world = engine.world;

    box1= new Box(100,100,50,50)
}

function draw(){
    background(0);
   
}


