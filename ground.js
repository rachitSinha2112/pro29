class Ground{
    constructor(x,y){
        var options={
          isStatic:true
        }
        this.body=Matter.Bodies.rectangle(x,y,500,20,options);
        World.add(world,this.body);
    }

    display(){
        
        var pos=this.body.position;
        rectMode(CENTER) 
        rect(pos.x,pos.y,500,20);

    }
}