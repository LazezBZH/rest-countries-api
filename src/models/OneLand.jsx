export default class OneLand {
  flag;
  name;
  nativeName;
  population;
  region;
  subRegion;
  capital;
  domain;
  currencies;
  languages;
  border;

  constructor(data) {
    this.flag = data.flags.svg;
    this.name = data.name.official;
    this.name = data.name.nativeName.lastChild.common;
    this.population = data.population;
    this.region = data.region;
    this.subRegion = data.subRegion;
    this.capital = data.capital;
    this.domain = data.tld;
    this.currencies = data.currencies;
    this.languages = data.languages;
    this.border = data.borders;
  }
}
