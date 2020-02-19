const MovingObject = require("./movingObject.js");

const objectArray = []

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

for(let i=0; i<10; i++){
objectArray.push(
  new MovingObject({
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
      ctx.beginPath();
      ctx.arc(el.pos[0], el.pos[1], el.radius, 0, 2 * Math.PI, true);
      ctx.strokeStyle = el.color;
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.fillStyle = el.color;
      ctx.fill();
    })
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
setInterval(() => draw(ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)), 100);
setInterval(() => draw(), 100);
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
console.log('hello')