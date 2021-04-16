class Drops{
 constructor(x,y,r){
    var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':0.5
    } 
    this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);

    this.radius = r;
 }  
  display(){
    
    if(this.body.position.y > height){
      Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }  
    fill("blue");
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
  }
}