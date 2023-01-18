import Race from './Race';

export default class Dwarf extends Race {
  public static dwarfCounter = 0;
  private _maxLifePoints = 80;
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf.dwarfCounter += 1;
  }

  static createdRacesInstances() {
    return Dwarf.dwarfCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}