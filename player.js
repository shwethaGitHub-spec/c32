class Player extends BaseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.image = loadImage("sprites/Shaurya Pic.jpg");
        this.smokeImage = loadImage("sprites/smoke.png");
        this.trajectory = [];
    }

    display(){
        super.display();
        
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
      
        for(var i = 0; i<this.trajectory.length; i++){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }
    }
}