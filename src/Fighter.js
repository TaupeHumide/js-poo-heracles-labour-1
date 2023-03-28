const MAX_LIFE = 100;

class Fighter {
    constructor(namex, strength, dexterity) {
        this.namex = namex;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }
    fight(defender) {
        const damage = math.floor(math.random() * this.strenght) + 1;
        const dodge = (damage - defender.dexterity, 0);
        defender.life = math.max(defender.healt - dodge, 0);
    }
}


module.exports = Fighter;

