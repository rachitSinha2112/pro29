class Block{
    constructor(x,y){
        var options={
            firction:0.0,
            density:0.1,
            restitution:0.4
        }
        this.body=Matter.Bodies.rectangle(x,y,50,70,options);
        World.add(world,this.body);
    }

    display(){
        
        var pos=this.body.position
        rectMode(CENTER) 
        fill("pink");
        strokeWeight(2);
        stroke("white");

        rect(pos.x,pos.y,50,70);

    }
}
