export default class AllLands {
  flag;
  name;
  population;
  region;
  capital;

  constructor(data) {
    this.flag = data.flags.svg;
    this.name = data.name.official;
    this.population = data.population;
    this.region = data.region;
    this.capital = data.capital;
  }
}
