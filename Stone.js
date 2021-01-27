class Stone {
    constructor(x,y,height,angle) {
        var options = {
            restitution: 0.2,
            density: 2.0,
            friction: 1.5
          }
          this.body = Bodies.rectangle(x,y,60,50,options);
          this.width = 60;
          this.height = 50;
          Matter.Body.setAngle(this.body,angle);
          World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("#ff8c00");
        rect(0,0,this.width,this.height);
        pop();
    }
}