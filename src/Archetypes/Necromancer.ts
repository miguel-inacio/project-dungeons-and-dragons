import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static necromancerCounter = 0;
  constructor(
    _name: string,
    _special = 0,
    _cost = 0,    
  ) {
    super(_name, _special, _cost);
    Necromancer.necromancerCounter += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Necromancer.necromancerCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  } 
}