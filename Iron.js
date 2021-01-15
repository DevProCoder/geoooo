class Iron{

    constructor (x,y){
    var option = {
    'density' :2,
    'friction':1.0,
    'restitution':0.5,
    
    }
    this.rectBody=Bodies.rectangle(x,y,50,50,option)
    this.width=50;
    this.height=50;
    World.add(world,this.rectBody)
    
    
    }
    display(){
    var pos = this.rectBody.position
    var angle = this.rectBody.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    fill("brown")
     rect(0,0,this.width,this.height)
    pop();
    }
    
    
    
    }
    