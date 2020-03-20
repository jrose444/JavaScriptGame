const MovingObject = require("./movingObject.js");

class Bullet extends MovingObject {
  constructor(options) {
    super(options);
  }

  something() {
    console.log("hihihihihih");
  }

  move() {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }
}

// debugger;

module.exports = Bullet;
