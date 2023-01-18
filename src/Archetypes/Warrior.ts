import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static warriorCounter = 0;
  constructor(
    _name: string,
    _special = 0,
    _cost = 0,    
  ) {
    super(_name, _special, _cost);
    Warrior.warriorCounter += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior.warriorCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  } 
}