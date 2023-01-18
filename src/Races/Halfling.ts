import Race from './Race';

export default class Halfling extends Race {
  public static halflingCounter = 0;
  private _maxLifePoints = 60;
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling.halflingCounter += 1;
  }

  static createdRacesInstances() {
    return Halfling.halflingCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}