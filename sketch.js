/*var obj1;
var obj2;

function setup() {
  createCanvas(1200,800);
  obj1 = createSprite(400, 200, 50, 50);
  obj1.shapeColor = "green";
  obj2 = createSprite(200,200,80,30);
  obj2.shapeColor = "green";
  
  obj1.velocityY = 5;
  obj2.velocityY = -5;
}

function draw() {
  background(255,255,255);
  var edge = createEdgeSprites();

  //obj1.x = World.mouseX;
  //obj1.y = World.mouseY;
  
  obj2.velocityX = 5;
  obj1.velocityX = -3;


  if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2 && 
    obj2.x - obj1.x < obj1.width/2 + obj2.width/2) 
    {
      obj1.velocityX = obj1.velocityX * (-1);
      obj2.velocityX = obj2.velocityX * (-1);
    }
    if(obj2.y - obj1.y < obj1.height/2 + obj2.height/2 &&
      obj1.y - obj2.y < obj1.height/2 + obj2.height/2)  {
        obj1.velocityY = obj1.velocityY * (-1);
        obj2.velocityY = obj2.velocityY * (-1);
    } 

    /*obj1.shapeColor = "red";
    obj2.shapeColor = "red";
    obj2.velocityX = -3;
    obj1.velocityX = 3;*/
  
  /*else{
    obj1.shapeColor = "green";
    obj2.shapeColor = "green";
    obj2.velocityX = 3;
    obj1.velocityX = -3;
  }

  drawSprites();
}*/






  
var fixedRect, movingRect, obj1, obj2, obj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(200,200,80,50);
  obj1.shapeColor = "white";
  obj2 = createSprite(200,150,50,50)
  obj2.shapeColor = "pink";
  obj3 = createSprite(250,130,50,50)
  obj3.shapeColor = "orange";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
   
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
   
  /*obj3.velocityY = 3;
  obj3.velocityX = -3;

  obj1.velocityY = -3;
  obj1.velocityX = 3;*/
  /*if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - object2 < fixedRect.height/2 + movingRect.height/2
    && object2 - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }*/
  if(touching(movingRect, obj1)) {
    movingRect.shapeColor = "red";
    obj1.shapeColor = "red";
  }

  else{
    movingRect.shapeColor = "green";
    obj1.shapeColor = "green";
  }
  
  bounceOff(movingRect, fixedRect);

  drawSprites();
}

