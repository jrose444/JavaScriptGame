const Asteroid = require('./asteroid')

colorCalculator = function(){
      let num = (Math.floor(Math.random()*4));
      color = colorHash[num.toString()];
      return color;
    }

colorHash = {
  "0": "red",
  "1": "green",
  "2": "blue",
  "3": "orange"
};

gameWidth = 500
gameHeight = 500

const Util = {
//   checkAllCollision: checkAllCollision = function() {
//     for(let i=0; i<objectArray.length; i++){
//         for(let j=i+1; j<objectArray.length; j++){
//             objectArray[i].checkForCollision(objectArray[j])
//         }
//     }
//   }
}



module.exports = Util