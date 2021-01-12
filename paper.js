class Paper{
constructor(){

var options = {
    
    density : 1.2,
    restitution : 0.2,
    friction : 0.9
}

    this.body = Bodies.circle(100,660,70,options);
    this.image = loadImage("paper.png");
    this.r = 70;
   // this.height = height;
    World.add(world,this.body);





}



display(){

    
push();
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);
rectMode(CENTER);
strokeWeight(2);
stroke("white")
fill(20,50,100);
image(this.image,0,0,this.r,this.r)

pop();//20,50,100



}










}









