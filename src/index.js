const MovingObject = require("./movingObject");
const Asteroid = require("./asteroid")
const Ship = require('./ship')
const Bullet = require('./bullet')
const Util = require('./util')
const Game = require('./game')

// const objectArray = []
// const shipArray = []
// const bulletArray = []

let game = new Game

for(let i=0; i<10; i++){
  // debugger;
    game.asteroids.push(
      new Asteroid({
        pos: [Math.random() * 400, Math.random() * 400],
        vel: [Math.random() * 10, Math.random() * 10],
        radius: 20,
        color: colorCalculator(),
        game: game
      })
    );
}

document.addEventListener("DOMContentLoaded", function() {

  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = gameWidth;
  canvasEl.height = gameHeight;
  const ctx = canvasEl.getContext("2d");
  
  
  const draw = function(){game.asteroids.forEach((el) => {
      el.draw(ctx)
    });
    game.bullets.forEach((el) => {
      el.draw(ctx)
    });
}
    const drawShip = function(){
        game.ship.draw(ctx)
    }
  const everythingMove = function() {game.asteroids.forEach((el) => {
      el.move();})
    game.bullets.forEach((el) => {
      el.move();
      // setInterval(() => console.log('hello'), 3000);
  })};

const shipKeys = document.onkeydown = function(e){
    e = e || window.event;
    switch(e.which || e.keyCode) {
        case 37: // left
        game.ship.move('left')
        break;

        case 38: // up
        game.ship.move("up");
        break;

        case 39: // right
        game.ship.move("right");
        break;

        case 40: // down
        game.ship.move("down");
        break;

        case 32:
        game.bullets.push(new Bullet({
          pos: game.ship.pos,
          vel: [0, -20],
          radius: 5,
          color: colorCalculator(),
          game: game
        }));
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};

setInterval(() => draw(ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)), 100);
setInterval(() => draw(), 100);
setInterval(() => drawShip(), 100)
setInterval(() => everythingMove(), 100);
// setInterval(() => checkAllCollision(), 100);

});

console.log('hello')
window.game = game