import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(
    private _lifePoints: number,
    private _strength: number,
  ) {
    this._lifePoints = 85;
    this._strength = 63;
  }
  
  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const newLifePoints = this._lifePoints - attackPoints;
    if (newLifePoints <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = newLifePoints;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}