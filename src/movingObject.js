function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
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

