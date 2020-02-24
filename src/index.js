const MovingObject = require("./movingObject");
const Asteroid = require("./asteroid")
const Ship = require('./ship')
const Bullet = require('./bullet')
const Util = require('./util')

const objectArray = []
const shipArray = []
const bulletArray = []

shipArray.push(
  new Ship({
    pos: [200, 200],
    vel: [Math.random() * 10, Math.random() * 10],
    radius: 20,
    color: colorCalculator(),
    game: "THIS IS A PLACEHOLDER"
  })
);

for(let i=0; i<10; i++){
    debugger;
    objectArray.push(
      new Asteroid({
        pos: [Math.random() * 400, Math.random() * 400],
        vel: [Math.random() * 10, Math.random() * 10],
        radius: 20,
        color: colorCalculator(),
        game: "THIS IS A PLACEHOLDER"
      })
    );
}
document.addEventListener("DOMContentLoaded", function() {

  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = gameWidth;
  canvasEl.height = gameHeight;
  const ctx = canvasEl.getContext("2d");
  
  
  const draw = function(){objectArray.forEach((el) => {
      el.draw(ctx)
    })
}
    const drawShip = function(){
        shipArray[0].draw(ctx)
    }
const asteroidMove = function() {objectArray.forEach((el) => {
    el.move();
    // setInterval(() => console.log('hello'), 3000);
})
}

const shipKeys = document.onkeydown = function(e){
    e = e || window.event;
    switch(e.which || e.keyCode) {
        case 37: // left
        shipArray[0].move('left')
        break;

        case 38: // up
        shipArray[0].move("up");
        break;

        case 39: // right
        shipArray[0].move("right");
        break;

        case 40: // down
        shipArray[0].move("down");
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};

setInterval(() => draw(ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)), 100);
setInterval(() => draw(), 100);
setInterval(() => drawShip(), 100)
setInterval(() => asteroidMove(), 100);
// setInterval(() => checkAllCollision(), 100);

});

console.log('hello')