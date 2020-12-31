class Paper {
constructor(x,y,radius) {
var options = {
isStatic:false,    
'restitution':0.3,
'friction':0.5,
'density':1.1
}
this.x=x;
this.y=y;
this.radius=radius;
this.image=loadImage("paper.png");
this.body = Bodies.circle(x,y,radius,options);
World.add(world, this.body);
}
display(){
var pos =this.body.position;
push();
translate(pos.x, pos.y);
imageMode(CENTER);
image(this.image,0,50,this.radius,this.radius);
pop();
}
};