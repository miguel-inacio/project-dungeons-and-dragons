import getRandomInt from './utils';
import Fighter, { SimpleFighter } from './Fighter';
import Elf from './Races/Elf';
import Race from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';

export default class Character implements Fighter {
  private readonly _race: Race;
  private readonly _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private readonly _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    let newLifePoints: number;

    if (damage > 0) {
      newLifePoints = this._lifePoints - damage;
    } else {
      newLifePoints = this._lifePoints - 1;
    }
    
    if (newLifePoints <= 0) newLifePoints = -1;

    this._lifePoints = newLifePoints;
    return newLifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints += getRandomInt(1, 10);

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    if (this._lifePoints > this.race.maxLifePoints) {
      this._lifePoints = this.race.maxLifePoints;
    }
  }

  special(enemy: SimpleFighter): void {
    const damage = this._strength + this._dexterity;
    enemy.receiveDamage(damage);
  }
}