import { Flex, Table, TableCaption, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React, { FC } from "react";
import { SharedNavbar } from "../Shared/SharedNavbar";

interface IProps {}

/**
* @author
* @function @Clientpage

**/

export const Clientpage: FC<IProps> = (props) => {
  return (
    <>
      <SharedNavbar />
      <Flex w="100%" h="calc(100vh - 50px)" bgColor="#F2A922" alignItems="center" justifyContent="center">
        <Flex h="25rem" bgColor="#F2780C " flexDirection="column" justifyContent="space-between">
          <Table variant="simple">
              <TableCaption>
                Client Creation Table
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Email</Th>
                  <Th>Country</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                
              </Tbody>
          </Table>
        </Flex>
      </Flex>
    </>
  );
};
