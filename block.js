class Block{
    constructor(x,y){
        var options={
            friction:0.0,
            
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
