const MovingObject = require("./movingObject.js");
const Asteroid = require("./asteroid.js")
const Ship = require('./ship.js')

const objectArray = []
const shipArray = []



colorHash = {
    '0': 'red',
    '1': 'green',
    '2': 'blue',
    '3': 'orange'
}

colorCalculator = function(){
    let num = (Math.floor(Math.random()*4));
    color = colorHash[num.toString()];
    return color;
}

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
objectArray.push(
  new Asteroid({
    pos: [Math.random() * 400, Math.random() * 400],
    vel: [Math.random() * 10, Math.random() * 10],
    radius: 20,
    color: colorCalculator(),
    game: 'THIS IS A PLACEHOLDER'
  })
);
}



document.addEventListener("DOMContentLoaded", function() {

  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 500;
  canvasEl.height = 500;
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

const checkAllCollision = function() {
    for(let i=0; i<objectArray.length; i++){
        for(let j=i+1; j<objectArray.length; j++){
            objectArray[i].checkForCollision(objectArray[j])
        }
    }
}

document.onkeydown = function(e){
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
setInterval(() => checkAllCollision(), 100);

// setInterval(() => ctx.clearRect(0, 0, 1000, 1000), 1000);

    // debugger;

//   ctx.beginPath();
//   ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
//   ctx.strokeStyle = "green";
//   ctx.lineWidth = 5;
//   ctx.stroke();
//   ctx.fillStyle = "blue";
//   ctx.fill();

});


window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
console.log('hello')