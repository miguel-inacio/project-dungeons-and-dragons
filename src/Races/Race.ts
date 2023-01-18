export default abstract class Race {
  constructor(
    private readonly _name: string,
    private readonly _dexterity: number,
  ) { }

  public get name() {
    return this._name;
  }

  public get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
