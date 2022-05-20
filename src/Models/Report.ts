import { IClient } from "./Client";
import { IItem } from "./Item";
import { IOrder } from "./Order";
import { IOrderItem } from "./OrderItem";

export interface IReport extends IClient, IOrder, IOrderItem, IItem {
  client_id: string;
  first_name: string;
  email: string;
  country: string;
  address: string;
  "orders.order_id": number;
  "orders.date": Date;
  "orders.orderitems.orderitem_id": string;
  "orders.orderitems.image": string;
  "orders.orderitems.size": string;
  "orders.orderitems.date": string;
  "orders.orderitems.text": string
  "orders.orderitems.color": string;
  "orders.orderitems.items.item_id": string;
  "orders.orderitems.items.name": string;
  "orders.orderitems.items.description": string;
  "orders.orderitems.items.cost": number;
}
