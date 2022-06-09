import OneLand from "../models/OneLand";

export default class GetData {
  async getLands() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log(data);
      console.log(
        "Raphaël si tu me lis: 'c'est pas bien de fouiller dans le code des autres pour voir s'ils ne mettent pas des console.log plus drôles que les tiens!"
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async getOneLand(country) {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/name/" + country
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async getOne(country) {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/name/" + country
      );
      const data = await response.json();
      return new OneLand(data);
    } catch (error) {
      console.error(error);
    }
  }
}
