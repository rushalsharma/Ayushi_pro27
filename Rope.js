class Rope {
    constructor(body1,body2,offsetX,offsetY){
    var options ={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:offsetX,y:offsetY},
       
    }
    this.object= Matter.Constraint.create(options);
    this.offsetX=offsetX;
        this.offsetY=offsetY;
    World.add(world,this.object);

    }
    display(){
        var posA=this.object.bodyA.position;
        var posB=this.object.bodyB.position;
        strokeWeight(3);
         var R3=posB.x+this.offsetX;
         var R4=posB.y+this.offsetY;

        stroke("black");
        line(posA.x,posA.y,R3,R4);
        
    }
}