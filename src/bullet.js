const MovingObject = require("./movingObject.js");

class Bullet extends MovingObject {
  constructor(options) {
    super(options);
  }

  something() {
    console.log("hihihihihih");
  }
}

// debugger;

module.exports = Bullet;
