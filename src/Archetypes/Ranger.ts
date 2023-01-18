import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static rangerCounter = 0;
  constructor(
    _name: string,
    _special = 0,
    _cost = 0,    
  ) {
    super(_name, _special, _cost);
    Ranger.rangerCounter += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Ranger.rangerCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  } 
}