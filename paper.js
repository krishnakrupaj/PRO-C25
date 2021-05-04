class Paper{
    constructor(){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            }
        this.body = Bodies.circle(100,340,15,options);
        World.add(world,this.body)       
        this.image=loadImage("paper.png")
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        ellipseMode(CENTER);
        fill("pink");
        circle(0,0,45) ;
        imageMode(CENTER);
        image(this.image, 0, 0,58,70);
        pop();
    }
}