class Character{
  constructor(name, hp, atk, def){
    this.name = name
    this.hpPoints = hp
    this.atkPoints = atk
    this.defPoints = def
  }

  attack(enemy){
    enemy.hpPoints -= this.atkPoints - enemy.defPoints
  }
}

module.exports = Character