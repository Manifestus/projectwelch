import { useEffect, useState } from "react";
import { IOrderItem } from "../Models/OrderItem";
import { OrderItemService } from "../Service/OrderItem";

export const OrderItemData = () => {
  const [orderItemData, setItemData] = useState<IOrderItem[]>([]);
  useEffect(() => {
    const orderItemList = new OrderItemService();
    orderItemList.getOrderItems().then((response) => {
      const orderItemData = JSON.parse(response);
      setItemData(orderItemData);
      return orderItemData;
    });
  }, []);

  return orderItemData;
};
