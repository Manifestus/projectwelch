import { FC, useEffect, useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { BgImage } from "./Homepage.styled";
import { useNavigate } from "react-router-dom";
import { ClientSearch } from "../../Util/ClientSearch";

interface IProps {}

/**
 * @author
 * @function @Homepage
 **/

export const Homepage: FC<IProps> = (props) => {
  const navigate = useNavigate();

  const buttonStyles = {
    colorScheme: "teal",
    size: "lg",
    p: "40px 60px",
  };

  return (
    <>
      <Navbar />
      <Flex h="40px" w="100vw">
        <ClientSearch />
      </Flex>
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
          <Button {...buttonStyles} onClick={() => navigate("/checkout")}>Make an order</Button>
          <Button {...buttonStyles} onClick={() => navigate("/reports")}>
            Reports
          </Button>
        </Flex>
      </BgImage>
    </>
  );
};
