class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            
            'restitution':0.4,
            'friction':0.0,
            //'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 50;
        this.height = 50;
       this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world, this.body);

        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
       // fill("skyblue");
        rect(0, 0, this.width, this.height);
        pop();
      }
}