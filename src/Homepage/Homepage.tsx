import React, { FC } from "react";
import { Button, ChakraProvider, Flex } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { BgImage } from "./Homepage.styled";
import { useNavigate, useParams } from "react-router-dom";

interface IProps {}

/**
 * @author
 * @function @Homepage
 **/

export const Homepage: FC<IProps> = (props) => {
  const buttonStyles = {
    colorScheme: "teal",
    size: "lg",
    p: "40px 60px",
  };
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
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
