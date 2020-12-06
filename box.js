class Box{
    constructor(x,y,width,height){
        var option={
            restitution:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    
    }
    display(){
     //   fill(230);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }

}