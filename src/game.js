const MovingObject = require("./movingObject");
const Asteroid = require("./asteroid");
const Ship = require("./ship");
const Bullet = require("./bullet");
const Util = require("./util");

class Game{
    constructor(){
          this.asteroids = [],
          this.bullets = [],
          this.ship = new Ship({
            pos: [200, 200],
            vel: [Math.random() * 10, Math.random() * 10],
            radius: 20,
            color: colorCalculator(),
            game: this})
    };
};


module.exports = Game;