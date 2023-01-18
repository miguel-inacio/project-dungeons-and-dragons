import Race from './Race';

export default class Orc extends Race {
  public static orcCounter = 0;
  private _maxLifePoints = 74;
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc.orcCounter += 1;
  }

  static createdRacesInstances() {
    return Orc.orcCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}