import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Input,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useStore } from "../Store/Store";
import { IClient } from "../Models/Client";
import { clientService } from "../Service/Client.service";

interface IProps {}

/**
 * @author
 * @function @ClientSearch
 **/

export const ClientSearch: FC<IProps> = (props) => {
  const currentClient = useStore();
  const [data, setData] = useState<IClient[]>([]);
  useEffect(() => {
    const clientList = new clientService();
    clientList.getUsers().then((response) => {
      const data = JSON.parse(response);
      setData(data);
      return data;
    });

    return (() => {
      setData([])
    })
  }, []);

  const [name, setName] = useState("");
  return (
    <>
      <SearchIcon mt="3" w="2vw" />
      <Input
        placeholder="No Client"
        w="97.14vw"
        onChange={(e: any) => setName(e.target.value)}
      />
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="100vw">
          {currentClient.client.first_name +
            " " +
            currentClient.client.last_name}
        </MenuButton>
        <MenuList>
          {data.map((data, index) => {
            if (data.first_name === name) {
              return (
                <MenuItem
                  key={`client ${index}`}
                  onClick={() => {
                    currentClient.changeClient(data);
                  }}
                >
                  {index + " " + data.first_name + " " + data.last_name}
                </MenuItem>
              );
            } else {
              return "";
            }
          })}
        </MenuList>
      </Menu>
    </>
  );
};
