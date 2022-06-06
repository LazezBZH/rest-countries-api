import OneLand from "../models/OneLand";

export default class GetData {
  async getLands() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log(data);
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
