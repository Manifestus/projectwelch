import Axios from "axios";

export class OrderItemService {
  service = Axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 4000,
    transformResponse: [
      function (data) {
        return data;
      },
    ],
  });

  //GET OrderItems

  getOrderItems = async () => {
    try {
      const itemsResp = await this.service.get("/orderitems");
      return itemsResp.data;
    } catch (error) {
      console.error(error);
    }
  };

  //GET OrderItem

  getOrderItem = async (uuid: string) => {
    try {
      const itemResp = await this.service.get(`/orderitems/${uuid}`);
      return itemResp.data;
    } catch (error) {
      console.error(error);
    }
  };
}
