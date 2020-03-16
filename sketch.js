//MY SLINGSHOT//
const{Engine, World, Bodies, MouseConstraint, Mouse, Constraint, Composites} = Matter;
var world, engine;
let ground;
let bird;
var mouseConstraint;
var base1, base2;
var sling;
var topBoundary, leftBoundary, rightBoundary;
var score = 0;

function setup(){
	
    createCanvas(windowWidth,windowHeight);	
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height-25, width, 50);
    bird = new Bird(200, 300, 20);



    base1 = new Base(width-736, height-254, 300, 10);
    base2 = new Base(width-736, height-454, 300, 10);

    leftBoundary = new Boundary(-50,350,50,900);
    rightBoundary = new Boundary(width-6,350,50,900);
    topBoundary = new Boundary(600,-50,1200,100);

    sling = new Slingshot(bird.body, {x:width-1236, y:height-454});


    const mouse = Mouse.create(canvas.elt);

	var options = {
		mouse: mouse
	}
	
    mouseConstraint = MouseConstraint.create(engine, options);
    World.add(world, mouseConstraint);
}

function draw(){
    background(30,30,30);
    Engine.update(engine);

    textSize(20);
    fill(255);
    text("Score  " + score,500,50);

    ground.display();
    bird.display();
    
    base1.display();
    base2.display();
    leftBoundary.display();
    rightBoundary.display();
    topBoundary.display();
    sling.display();
    console.log(score);
}

function mouseReleased(){
    setTimeout(() =>{
        sling.fly();
    },15);
    
}

function keyPressed(){
    if(keyCode === 32){
        World.remove(world, bird.body);
        bird = new Bird(200, 300, 20);
        sling.attach(bird.body);
    }
}
