const Engine = Matter.Engine
  const World = Matter.World 
  const Events = Matter.Events
  const Bodies = Matter.Bodies;
 

var snow = [] ;
function preload(){
  snowbg=loadImage("snow.jpg")
}
function setup() {
  createCanvas(800,1200);
  engine = Engine.create();
  world = engine.world;
  //snow.push(new Snow(200,200))
}

function draw() {
  background(snowbg);
  Engine.update(engine);
  if(frameCount % 20===0){
    snow.push(new Snow(random(0,800),20,30))
    console.log(22);
  }

  for (var k = 0; k <=snow.length;k++ ) {
    //image(this.snowbg , this.snow[k][0] , this.snow[k][1]);
   // snow[k].display();
   snow[k].display();
    console.log(12);
  }
  
}

