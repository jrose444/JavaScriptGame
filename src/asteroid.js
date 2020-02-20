const MovingObject = require("./movingObject.js");


class Asteroid extends MovingObject {
  constructor(options) {
    super(options);
  }

  something() {
    console.log('hihihihihih');
  }

}

// debugger;

module.exports = Asteroid;


