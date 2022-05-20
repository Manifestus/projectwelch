import create from "zustand";
import { IClient } from "../Models/Client";

type Client = {
    client: IClient
    changeClient: (currentClient: IClient) => void,
}

type LabDesign = {
    itemSelection: string
    changeItemSelection: (item: string) => void
}

export type StoreState = Client & LabDesign;

const noClient:IClient = {first_name: "No", last_name: "Client", email: "", client_id:"", address: "", country: ""}

export const useStore = create<StoreState>(set => ({
    client: noClient,
    changeClient: (currentClient) => set(() => ({client: currentClient})),
    itemSelection: "",
    changeItemSelection: (state) => set(() => ({itemSelection: state}))
}))

