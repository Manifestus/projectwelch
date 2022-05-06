import { FC } from "react";
import { Flex, Img } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IProps {}

/**
* @author
* @function @SharedNavbar

**/

export const SharedNavbar: FC<IProps> = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        width={"100%"}
        h="50px"
        bgColor="#392D43"
        justifyContent="space-between"
      >
        <Img src="/images/2560px-Hot_Topic_logo.svg.png" bgColor="#392D43" />
        <Img
          src="/images/home.png"
          justifyContent="flex-end"
          onClick={() => navigate("/")}
        />
      </Flex>
    </>
  );
};
