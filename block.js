class Block{
    constructor(x,y){
        this.body=Matter.Bodies.rectangle(x,y,50,70);
        World.add(world,this.body);
    }

    display(){
        
        var pos=this.body.position
        rectMode(CENTER) 
        fill("black");
        strokeWeight(2);
        stroke("white");

        rect(pos.x,pos.y,50,70);

    }
}