const MovingObject = require("./movingObject.js");

class Ship extends MovingObject {
  constructor(options) {
    super(options);
  }

  
  move(key){
    switch(key) {
  case 'left':
    this.pos = [this.pos[0]-50, this.pos[1]]   
    break;
  case 'right':
    this.pos = [this.pos[0] + 50, this.pos[1]];      
    break;
  case 'up':
    this.pos = [this.pos[0], this.pos[1]-50];      
    break;
  case 'down':
    this.pos = [this.pos[0], this.pos[1]+50];      
    break;
  default:
      console.log('bro get your shuip together')
    // code block
}
    }
};
  


// debugger;

module.exports = Ship;


