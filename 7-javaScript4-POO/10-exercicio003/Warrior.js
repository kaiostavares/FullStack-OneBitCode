const Character = require("./Character");

class Warrior extends Character{
  constructor(name, hp, atk, def, shield){
    super(name,hp,atk,def)
    this.shieldPts = shield
    this.stance = 'attacking'
  }

  attack(enemy){
    if(this.stance==='attacking'){
      super.attack(enemy)
    }
  }

  switchStance(){
    if(this.stance === 'attacking'){
      this.stance = 'defending'
      this.defPoints += this.shieldPts
    } else {
      this.stance = 'attacking'
      this.defPoints -= this.shieldPts
    }
  }
}

module.exports = Warrior