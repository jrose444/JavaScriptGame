function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.move = function move(){
   this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]

   if(this.pos[0] > 500){
       this.pos = [this.pos[0] = 0, this.pos[1]]
   } else if (this.pos[1] > 500) {
    this.pos= [this.pos[0], this.pos[1]=0]
   }
};

MovingObject.prototype.checkForCollision = function checkForCollision(object){
    const circle1 = { radius: this.radius, x: this.pos[0], y: this.pos[1] };
    const circle2 = { radius: object.radius, x: object.pos[0], y: object.pos[1] };

    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < circle1.radius + circle2.radius) {
      console.log('collision!!!!!!!!!!')
    }
}


// MovingObject.prototype.draw = function draw() {

//     const ctx = canvasEl.getContext("2d");
//     ctx.beginPath();
//     ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
//     ctx.strokeStyle = "green";
//     ctx.lineWidth = 5;
//     ctx.stroke();
//     ctx.fillStyle = "blue";
//     ctx.fill();
// };

module.exports = MovingObject;

