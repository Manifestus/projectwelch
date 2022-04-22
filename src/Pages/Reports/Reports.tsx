import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { SharedNavbar } from "../Shared/SharedNavbar";

interface IProps {}

/**
 * @author
 * @function @Reports
 **/

export const Reports: FC<IProps> = (props) => {
  return (
    <>
      <SharedNavbar />
      <Flex bgColor="#F25749" h="calc(100vh - 50 px)"></Flex>
    </>
  );
};
