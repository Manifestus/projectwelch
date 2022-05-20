import Axios from "axios";

export class ItemService {
  service = Axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 4000,
    transformResponse: [function (data) {
      return data;
    }],
  });

  //GET Items

  getItems = async () => {
    try {
      const itemsResp = await this.service
        .get("/items")
      return itemsResp.data
    } catch (error) {
      console.error(error);
    }
  };

  //GET Item

  getItem = async (uuid: string) => {
    try {
      const itemResp = await this.service
        .get(`/items/${uuid}`)
        return itemResp.data
    } catch (error) {
      console.error(error);
    }
  };
}