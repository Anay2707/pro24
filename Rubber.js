class Rubber {
    constructor(x,y,r) {

        this.x=x; 
        this.y=y;
        this.r=r;
        var options = {
            restitution: 0.5,
            density: 1.5,
            friction: 1.0
        }
        this.body = Matter.Bodies.circle(this.x,this.y,this.r,options);
        this.radius = 20;
        World.add(world,this.body);
          
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        ellipse(0,0,this.r, this.r);
        pop();
    }
}





