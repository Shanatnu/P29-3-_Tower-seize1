
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var ground,base1,base2;

var block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17,block18;
var block19,block20,block21;
var block22;
var block23;

var block24,block25,block26,block27;
var block28,block29,block30;
var block31;
var block32;

var polygon,slingShot,polygon_img;

function preload(){
  this.polygon_img=loadImage('polygon.png');
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
   
  

	//ground=new Ground(100,1100,600,20);
	ground = new Ground(600,height,1400,20);
	base1 = new Ground(460,400,550,10);
	base2 = new Ground(1030,300,350,10);
	//base2 = new Ground(600,height,1400,20);

	
	
	block8 = new Box(330,370,30,40);
	block9 = new Box(380,370,30,40);
	block10 = new Box(430,370,30,40);
	block11 = new Box(480,370,30,40);
	block12 = new Box(530,370,30,40);
	block13 = new Box(580,370,30,40);
	block14 = new Box(630,370,30,40);
	

	block15 = new Box(380,320,30,40);
	block16 = new Box(430,320,30,40);
	block17 = new Box(480,320,30,40);
	block18 = new Box(530,320,30,40);
	block19 = new Box(580,320,30,40);

	block20 = new Box(430,270,30,40);
	block21 = new Box(480,270,30,40);
	block22 = new Box(530,270,30,40);

	block23 = new Box(480,220,30,40);




	block24 = new Box(930,270,30,40);
	block25 = new Box(980,270,30,40);
	block26 = new Box(1030,270,30,40);
	block27 = new Box(1080,270,30,40);
	block28 = new Box(1130,270,30,40);

	block29 = new Box(980,220,30,40);
	block30 = new Box(1030,220,30,40);
	block31 = new Box(1080,220,30,40);

	block32 = new Box(1030,170,30,40);

    
	
	
	Engine.run(engine);

	polygon = Bodies.circle(50,200,20);
  //polygon = loadImage("polygon.png");
  
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
	

}

function draw() {

  background("black");
  //Add code for displaying text here!
 
  

  ground.display();
  base1.display();
  base2.display();

  strokeWeight(3);
  stroke("black");
  fill("skyblue");
  block8.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  fill("pink");
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();


  fill("cyan");
  block20.display();
  block21.display();
  block22.display();


  fill("grey");
  block23.display();

  fill("skyblue");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();


  fill("cyan");
  block29.display();
  block30.display();
  block31.display();


  fill("pink");
  block32.display();


textSize(30);
fill("lightyellow");
text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",100,50);

imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

 slingShot.display(); 
  

  

  
 // strokeWeight(3);
 // line(boy.body.position.x,boy.body.position.y,stoneObj.body.position.x,stoneObj.body.position.y);
 //this.polygon.Matter.Body.setPosition(this.polygon.x.mouseX,y.mouseY);
}
//Slingshot.fly();
function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}


function mouseReleased(){
	slingShot.fly()
}
