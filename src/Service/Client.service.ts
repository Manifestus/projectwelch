import Axios from "axios";
import { IClient } from "../Models/Client";

export class clientService {
  service = Axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 4000,
    transformResponse: [
      function (data) {
        return data;
      },
    ],
  });

  //GET Clients

  getUsers = async () => {
    try {
      const clientsResp = await this.service.get("/clients");
      return clientsResp.data;
    } catch (error) {
      console.error(error);
    }
  };

  //GET Client

  getUser = async (uuid: string) => {
    try {
      const clientResp = await this.service.get(`/clients/${uuid}`);
      return clientResp.data;
    } catch (error) {
      console.error(error);
    }
  };

  //POST Client

  postClient = async (clientData: IClient) => {
    try {
      console.log(clientData);
      const clientInfo = await this.service.post("/clients", clientData);
      console.log(clientInfo);
    } catch (error) {
      console.error(error);
    }
  };

  //PATCH Client

  patchClient = async (clientData: IClient) => {
    try {
      const clientPatch = await this.service.patch("/clients", clientData);
      console.log(clientPatch);
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE Client

  deleteClient = async (uuid: string | undefined) => {
    try {
      const clientDelete = await this.service.delete(`/clients/${uuid}`);
      console.log(clientDelete);
    } catch (error) {
      console.error(error);
    }
  };
}
