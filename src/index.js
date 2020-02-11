const MovingObject = require("./movingObject.js");

const objectArray = []

objectArray.push(new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 20,
  color: "#00FF00"
}));

objectArray.push(
  new MovingObject({
    pos: [30, 70],
    vel: [20, 20],
    radius: 40,
    color: "#00FF00"
  })
);


document.addEventListener("DOMContentLoaded", function() {

  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 1000;
  canvasEl.height = 1000;

  const ctx = canvasEl.getContext("2d");
  objectArray.forEach((el) => {
      ctx.beginPath();
      ctx.arc(el.pos[0], el.pos[1], el.radius, 0, 2 * Math.PI, true);
      ctx.strokeStyle = el.color;
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.fillStyle = el.color;
      ctx.fill();
                              })


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