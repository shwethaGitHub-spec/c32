const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg;

var backgroundImg;

var gameState = "onSling";

var score = 0;

function preload() {
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    player = new Player(300,300,80,80);

    ground = new Ground(600,590,1200,150);
    stage = new Ground(150,415,300,200);

    slab1 = new Slab(540,315,40,150);
    book1 = new Book(650,400,100,130);
    book2 = new Book(910,400,100,130);
    slab2 = new Slab(1020,315,40,150);

    slab3 = new Slab(800,220,710,30);

    slab4 = new Slab(540,20,40,150);
    book3 = new Book(650,170,100,130);
    book4 = new Book(900,170,100,130);
    slab5 = new Slab(1020,20,40,150);

    slab6 = new Slab(800,5,710,30);

    enemy1 = new Enemy1(780,400,90,90);
    enemy2 = new Enemy2(780,210,90,90);

    slingshot = new SlingShot(player.body,{x:230,y:200});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }

    push();
    strokeWeight(7);
    stroke(0);
    textSize(45);
    fill(255);
    text("Score: " + score, 950,50);
    pop();

    Engine.update(engine);

    ground.display();
    stage.display();

    player.display();

    slingshot.display();

    slab1.display();
    book1.display();
    enemy1.display();
    enemy1.score();
    book2.display();
    slab2.display();

    slab3.display();

    slab4.display();
    book3.display();
    enemy2.display();
    enemy2.score();
    book4.display();
    slab5.display();

    slab6.display();
   
    getBackgroundImage();
}

function mouseDragged(){
    Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();      
}

function keyPressed(){
    if(keyCode === 32){
        player.trajectory = [];
        Matter.Body.setPosition(player.body,{x : 230,y : 200});
        slingshot.attach(player.body);
    }
}

async function getBackgroundImage(){
    var responce = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responceJSON = await responce.json();
    var datetime = responceJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour >= 06 && hour <= 18){
        bg = "sprites/Background.jpg";
    }else{
        bg = "sprites/Background2.jpg"
    }

    backgroundImg = loadImage(bg)
}
