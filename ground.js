class ground{

    constructor (x,y,width,height){
    var option = {
    'density' :2,
    'friction':1.0,
    'restitution':0.5,
    isStatic:true
    }
    this.rectBody=Bodies.rectangle(x,y,width,height,option)
    this.width=width;
    this.height=height;
    World.add(world,this.rectBody)
    
    
    }
    display(){
    var pos = this.rectBody.position
    var angle = this.rectBody.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
     rect(0,0,this.width,this.height)
    pop();
    }
    
    
    
    }
    