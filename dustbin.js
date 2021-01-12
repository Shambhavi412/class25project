class Dustbin{
    constructor(x,y)
    {
    var options= {
        isStatic: true
        
        
    }
    
    
    //this.body= Bodies.rectangle(x,y,width,height,options);
    this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.height, {isStatic:true})
    //this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true}) 
    this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
     this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true}) 
     this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
    this.dustbinWidth = 200;
    this.dustbinHeight = 200
    this.wallThickness = 50;
    this.x = x;
    this.y = y;
    this.image = loadImage("dustbingreen.png")
    World.add(world,this.bottomBody);
    
    
    //World.add(world, this.body);
    
    }
    
    display()
    {
   //var pos = this.body.position;
   var posBottom=this.bottomBody.position; 
   var posLeft=this.leftWallBody.position; 
   var posRight=this.rightWallBody.position; 
        push();
        translate(posBottom.x,posBottom.y);
        //translate(posLeft.x, posLeft.y)
        //translate(posRight.x,posRight.y)
        //rotate(this.leftWallBody.angle)
        //rotate(this.rightWallBody.angle)
        rotate(this.bottomBody.angle)
    rectMode(CENTER);
    strokeWeight(2);
    stroke("white")
    fill("purple");
    image(this.image, 850,470,this.dustbinWidth, this.dustbinHeight)
//this.dustbinHeight/2
    //image(this.image,0,0,this.width,this.height);
    pop();
    
    

    }
    
    
    
    
    
    
    }