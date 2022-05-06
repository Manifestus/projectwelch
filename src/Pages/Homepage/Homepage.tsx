import { FC, useEffect, useState } from "react";
import {
  Button,
  Flex,
} from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { BgImage } from "./Homepage.styled";
import { IClient } from "../../Models/Client";
import { clientService } from "../../Service/Client.service";
import { useNavigate } from "react-router-dom";
import { ClientSearch } from "../../Util/ClientSearch";

interface IProps {}

/**
 * @author
 * @function @Homepage
 **/

export const Homepage: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState<IClient[]>([]);
  useEffect(() => {
    const clientList = new clientService();
    clientList.getUsers().then((response) => {
      const data = JSON.parse(response);
      setData(data);
      return data;
    });
  }, []);

  const buttonStyles = {
    colorScheme: "teal",
    size: "lg",
    p: "40px 60px",
  };
  

  return (
    <>
      <Navbar />
      <ClientSearch/>
      <BgImage>
        <Flex h="500px" flexDirection="column" justifyContent="space-between">
          <Button
            {...buttonStyles}
            onClick={() => {
              navigate("/client");
            }}
          >
            Clients
          </Button>
          <Button {...buttonStyles}>Make an order</Button>
          <Button {...buttonStyles} onClick={() => navigate("/reports")}>
            Reports
          </Button>
        </Flex>
      </BgImage>
    </>
  );
};
