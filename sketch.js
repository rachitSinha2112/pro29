const Engine=Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


   engine = Engine.create();
   world = engine.world;

ground1=new Ground(1200,650,500,20);

 block1=new Block(1200,600);
 block2=new Block(1100,600);
 block3=new Block(1150,600);
 block4=new Block(1250,600);
 block5=new Block(1000,600);
 block6=new Block(1050,600);
 block7=new Block(1300,600);
 block8=new Block(1350,600);
 block9=new Block(1400,600);
 block10=new Block(1200,500);
 block11=new Block(1100,500);
 block12=new Block(1150,500);
 block13=new Block(1250,500);
 //block14=new Block(1000,500);
 block15=new Block(1050,500);
 block16=new Block(1300,500);
 block17=new Block(1350,500);
 block18=new Block(1200,400);
 block19=new Block(1100,400);
 block20=new Block(1250,400);
 block21=new Block(1150,400);







 
polygon1=new Polygon();

//ground2=new Ground(10,630,1500,20);

sling1 = new sling(polygon1.body,{x:200,y:600});

Engine.run(engine);
  
}


function draw() {
background("brown");

ground1.display();
//ground2.dispaly();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
//block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
polygon1.display();

}
function mouseDragged(){
   Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   sling1.fly();
}



