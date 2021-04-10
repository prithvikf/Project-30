const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;

var holder,ball,ground;
var stand1,stand2;
var slingshot;
var polygon,polygonImage;

function preload(){
    polygonImage = loadImage("polygon.png");
}

function setup(){
    createCanvas (1200,400);  
    engine=Engine.create()
    world=engine.world;  
    
    
    ground = new Ground(600,390,1200,20);
    stand1 = new Ground(500,300,270,10)
    stand2 = new Ground(900,250,200,10)

    box1 = new Box(830,230,30,45);
    box2 = new Box(860,230,30,45);
    box3 = new Box(890,230,30,45);
    box4 = new Box(920,230,30,45);
    box5 = new Box(950,230,30,45);


    box6 = new Box(860,200,30,45);
    box7 = new Box(890,200,30,45);
    box8 = new Box(920,200,30,45);


    box9 = new Box(890,150,30,45);


    box10 = new Box(400,270,30,45);
    box11= new Box(430,270,30,45);
    box12 = new Box(460,270,30,45);
    box13 = new Box(490,270,30,45);
    box14 = new Box(520,270,30,45);
    box15 = new Box(550,270,30,45);
    box16 = new Box(580,270,30,45);
    
    
    box17 = new Box(430,250,30,45);
    box18 = new Box(460,250,30,45);
    box19 = new Box(490,250,30,45);
    box20= new Box(520,250,30,45);
    box21 = new Box(550,250,30,45);
    
    box22 = new Box(460,200,30,45);
    box23 = new Box(490,200,30,45);
    box24 = new Box(520,200,30,45);
    
    box25 = new Box(490,150,30,45);
    
    
    polygon = Bodies.circle(150,100,20);
    slingshot = new SlingShot(this.polygon,{x:100,y:100});
    
    World.add(world,polygon)






}

function draw(){
    background("black");
    Engine.update(engine)
    imageMode(CENTER)
    image(polygonImage,polygon.position.x,polygon.position.y,20,20)
    slingshot.display();
    
    fill("brown")
    ground.display();
    stand1.display();
    stand2.display();

    fill("lightblue")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    fill("lightgreen");
    box6.display();
    box7.display();
    box8.display();

    fill("red")
    box9.display();

    fill("lightred");
    box10.display();
    box11.display();
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    
    fill("lightblue");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display()

    fill("orange");
    box22.display()
    box23.display()
    box24.display()

    fill("yellow");
    box25.display()
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

