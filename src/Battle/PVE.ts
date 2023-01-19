import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: Monster[] | Fighter[] | SimpleFighter[];
  constructor(
    player: Fighter,
    monsters: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(player);
    this._monsters = monsters;
  }

  fight(): number {
    while (this.player.lifePoints > 0 
      && this._monsters.every((monster) => monster.lifePoints > 0)) {
      this._monsters.forEach((monster) => this.player.attack(monster));
      this._monsters.forEach((monster) => monster.attack(this.player));
    }
    return super.fight();
  }
}