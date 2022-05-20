import { useEffect, useState } from "react";
import { IItem } from "../Models/Item";
import { ItemService } from "../Service/Item.service";

export const ItemData = () => {
  const [itemData, setItemData] = useState<IItem[]>([]);
  
  useEffect(() => {
    const itemList = new ItemService();
    itemList.getItems().then((response) => {
      const itemData = JSON.parse(response);
      setItemData(itemData);
      return itemData;
    });
  }, []);
  return itemData;
};
