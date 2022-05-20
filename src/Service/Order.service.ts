import Axios from "axios";

export class OrderService {
  service = Axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 4000,
    transformResponse: [
      function (data) {
        return data;
      },
    ],
  });

  //GET Orders

  getOrders = async () => {
    try {
      const OrdersResp = await this.service.get("/orders");
      return OrdersResp.data;
    } catch (error) {
      console.error(error);
    }
  };

  //GET Order

  getOrder = async (uuid: string) => {
    try {
      const OrdersResp = await this.service.get(`/orders/${uuid}`);
      return OrdersResp.data;
    } catch (error) {
      console.error(error);
    }
  };
}
