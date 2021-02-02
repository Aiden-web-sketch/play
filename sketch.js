const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Render = Matter.Render;
var engine,world;

function preload(){
  background1=loadImage("images/background.png")
}

function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(displayWidth,displayHeight);

  ground1=new Ground(displayWidth/2,0,displayWidth,20);
  ground2=new Ground(displayWidth/2,displayHeight,displayWidth,20);
  ground3=new Ground(0,displayHeight/2,20,displayHeight);
  ground4=new Ground(displayWidth,displayHeight/2,20,displayHeight);
  ground5=new Ground(displayWidth/2,displayHeight/2+500,displayWidth,20);
  pokemonball1=new Pokemonball(400,displayHeight/2,100)
  pokemon1=new Pokemon(displayWidth-400,displayHeight/1.2,300)


  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 2600,
	    height: 1700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
}

function draw() {
  
  background("green"); 
  //Engine.update(engine);
  image(background1,0,0) 
  pokemonball1.display()
  pokemon1.display()
  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ground5.display()
  
  drawSprites();
}
function keyPressed(){
  if(keyCode===LEFT_ARROW){
    camera.postion.x-=50
  }
  if(keyCode===RIGHT_ARROW){
    camera.postion.x+=50
  }
  if(keyCode===UP_ARROW){
    camera.postion.y-=50
  }
  if(keyCode===DOWN_ARROW){
    camera.postion.y+=50
  }

}
function keyPressed() {
  if (keyCode === UP_ARROW) {
  //Matter.Body.setPosition(pokemonball1.body,{x:mouseX,y:mouseY});
  //Matter.Body.setStatic(pokemonball1.body,false)
    Matter.Body.applyForce(pokemonball1.body,pokemonball1.body.position,{x:+95,y:-95})
  

}
}


