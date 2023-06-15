const Character = require("./Character");

class Thief extends Character{
  attack(enemy){
    enemy.hpPoints -= (this.atkPoints - enemy.defPoints) * 2
  }
}

module.exports = Thief