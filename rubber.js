class rubber{

    constructor (x,y,r){
    var option = {
    'density' :2,
    'friction':1.0,
    'restitution':0.5,
    
    }
    this.rectBody=Bodies.circle(x,y,r,option)
    this.r = r
    World.add(world,this.rectBody)
    
    
    }
    display(){
    var pos = this.rectBody.position
    var angle = this.rectBody.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle)
 
     ellipse(0,0,this.r)
    pop();
    }
    
    
    
    }
    