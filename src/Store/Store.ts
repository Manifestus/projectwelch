import create from "zustand";
import { IClient } from "../Models/Client";

type Client = {
    client: IClient
    changeClient: (currentClient: IClient) => void,
}

const noClient:IClient = {first_name: "no", last_name: "client", email: "", client_id:"", address: "", country: ""}

export const useStore = create<Client>(set => ({
    client: noClient,
    changeClient: (currentClient) => set(() => ({client: currentClient})),
}))