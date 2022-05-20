import { useEffect, useState } from "react";
import { IOrder } from "../Models/Order";
import { OrderService } from "../Service/Order.service";

export const OrderData = () => {
  const [orderData, setOrderData] = useState<IOrder[]>([]);
  useEffect(() => {
    const orderList = new OrderService();
    orderList.getOrders().then((response) => {
      const orderData = JSON.parse(response);
      setOrderData(orderData);
      return orderData;
    });
  }, []);

  return orderData;
};
