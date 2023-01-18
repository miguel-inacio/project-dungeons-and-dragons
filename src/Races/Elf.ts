import Race from './Race';

export default class Elf extends Race {
  public static elfCounter = 0;
  private _maxLifePoints = 99;
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf.elfCounter += 1;
  }

  static createdRacesInstances() {
    return Elf.elfCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}