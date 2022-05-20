import Axios from "axios";

export class ReportService {
  service = Axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 4000,
    transformResponse: [
      function (data) {
        return data;
      },
    ],
  });

  //GET Shirt Report

  getShirts = async () => {
    try {
      const shirtsResp = await this.service.get("/reports/shirts");
      return shirtsResp.data;
    } catch (error) {
      console.error(error);
    }
  };

  //GET Covers Report

  getCovers = async () => {
    try {
      const coversResp = await this.service.get("/reports/covers");
      return coversResp.data;
    } catch (error) {
      console.error(error);
    }
  };

  //GET Covers Report

  getBottles = async () => {
    try {
      const bottlesResp = await this.service.get("/reports/bottles");
      return bottlesResp.data;
    } catch (error) {
      console.error(error);
    }
  };
}
