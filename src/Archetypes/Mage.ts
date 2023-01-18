import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static mageCounter = 0;
  constructor(
    _name: string,
    _special = 0,
    _cost = 0,    
  ) {
    super(_name, _special, _cost);
    Mage.mageCounter += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage.mageCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  } 
}