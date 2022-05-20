import { useEffect, useState } from "react";
import { IClient } from "../Models/Client";
import { clientService } from "../Service/Client.service";

export const ClientData = () => {
  const [clientData, setclientData] = useState<IClient[]>([]);
  useEffect(() => {
    const clientList = new clientService();
    clientList.getUsers().then((response) => {
      const clientData = JSON.parse(response);
      setclientData(clientData);
      return clientData;
    });
  }, []);
  
  return clientData;
};
