import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Img, Wrap } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SharedNavbar } from "../Shared/SharedNavbar";

interface IProps {}

/**
 * @author
 * @function @Reports
 **/

const buttonStyles = {
  colorScheme: "purple",
  size: "lg",
  p: "40px 40px",
};

export const Reports: FC<IProps> = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <SharedNavbar />
      <Flex bgColor="#1E1A2B" h="calc(100vh - 50 px)" flexDirection="row">
        <Flex
          w="50vw"
          h="95vh"
          bgColor="#040716"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          gap="50px"
        >
          <Flex w="20vw" h="30vh">
            <Img src="/images/shopping-cart-png-icon-free-download-301446.png" />
          </Flex>
          <Wrap color="gray">Report by Items</Wrap>
          <Flex
            w="25vw"
            h="37vh"
            justifyContent="center"
            flexDir="column"
            gap="30px"
          >
            <Button
              {...buttonStyles}
              rightIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/reportshirts")}
            >
              Shirts
            </Button>
            <Button
              {...buttonStyles}
              rightIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/reportbottles")}
            >
              Bottles
            </Button>
            <Button
              {...buttonStyles}
              rightIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/reportcovers")}
            >
              Covers
            </Button>
          </Flex>
        </Flex>
        <Flex
          w="50vw"
          h="95vh"
          bgColor="#202952"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          gap="50px"
        >
          <Flex w="20vw" h="35vh" justifyContent="center" onClick={() => navigate('/reportorders')}>
            <Img src="/images/38-388379_paper-icon-png.png" />
          </Flex>
          <Wrap color="gray">Report by Order</Wrap>
        </Flex>
      </Flex>
    </>
  );
};
