const Character = require("./Character");

class Mage extends Character{
  constructor(name, hp, atk, magic, def){
    super(name,hp,atk,def)
    this.magicPoints = magic
  }

  attack(enemy){
    enemy.hpPoints -= ((this.atkPoints + this.magicPoints) - enemy.defPoints)
  }

  heal(target){
    target.hpPoints += this.magicPoints * 2
  }
}

module.exports = Mage