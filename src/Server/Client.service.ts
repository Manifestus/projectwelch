import { Axios } from "axios";
import { IClient } from "../Models/Client";

export class clientService {
  clientsServer = new Axios({
    baseURL: "https://projectwelchbe.herokuapp.com",
    timeout: 4000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  });

  //GET Clients

  getUsers = async () => {
    try {
      const clientsResp = await this.clientsServer
        .get("/clients")
        .then(() => {});
      console.log(clientsResp);
    } catch (error) {
      console.error(error);
    }
  };

  //GET Client

  getUser = async (uuid: string) => {
    try {
      const clientResp = await this.clientsServer
        .get("/clients")
        .then(() => {});
    } catch (error) {
      console.error(error);
    }
  };

  //POST Client

  postClient = async (clientData: IClient) => {
    try {
      const clientInfo = await this.clientsServer.post("/clients", clientData);
    } catch (error) {
      console.error(error);
    }
  };

  //PATCH Client

  patchClient = async (clientData: IClient) => {
    try {
      const clientPatch = await this.clientsServer.patch(
        "/clients",
        clientData
      );
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE Client

  deleteClient = async (clientData: IClient, uuid: string) => {
    try {
      const clientDelete = await this.clientsServer.delete(`/clients/${uuid}`);
    } catch (error) {
      console.error(error);
    }
  };
}
