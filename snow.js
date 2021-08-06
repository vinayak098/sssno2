class Snow {
    constructor(x, y,r) {
        var options = {
            restitution: 0.2,
            
 
        }
        this.r = r
       this.image = loadImage("snow5.webp")
       this.body = Bodies.circle(x,y,r,options)
       World.add(world,this.body)
    }
    display() {

        
        push();
        translate(this.body.position.x,this,body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        noStroke();
        pop();
    }

};