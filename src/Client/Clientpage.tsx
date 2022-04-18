import { AddIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { IClient } from "../Models/Client";
import { SharedNavbar } from "../Shared/SharedNavbar";
import { ClientFormModal } from "./ClientFormModal";

interface IProps {}

/**
 * @author
 * @function @Clientpage
 **/

//Main
export const Clientpage: FC<IProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [client, setClient] = useState<IClient | undefined>();
  const data: IClient[] = [
    {
      first_name: "Victor",
      last_name: "Figueroa",
      email: "vmfch@this.com",
      country: "Honduras",
      address: "Col. Tepesquincle",
    },
  ];
  const autoClose = () => {
    if (editMode) {
      setEditMode(false);
      setClient(undefined);
    }
    onClose();
  };
  return (
    <>
      <SharedNavbar />
      <Flex
        w="100%"
        h="calc(100vh - 50px)"
        bgColor="#0D2840"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Flex h="25rem" w="80vw" bgColor="#F2E0DF " flexDirection="column">
          <Flex w="10vw" alignSelf="end">
            <Button onClick={onOpen}>
              <AddIcon />
            </Button>
          </Flex>
          <Table variant="simple">
            <TableCaption>Client Creation Table</TableCaption>
            <Thead>
              <Tr>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                <Th>Country</Th>
                <Th>Address</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((data, index) => {
                return (
                  <Tr key={`${index}-tableRow`}>
                    <Td>{data.first_name}</Td>
                    <Td>{data.last_name}</Td>
                    <Td>{data.email}</Td>
                    <Td>{data.country}</Td>
                    <Td>{data.address}</Td>
                    <Td justifyContent="space-between">
                      <Flex w="5vw" alignSelf="end" id="editClient">
                        <Button
                          onClick={() => {
                            setEditMode(true);
                            onOpen();
                            setClient(data);
                          }}
                        >
                          <EditIcon />
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Flex>
      </Flex>
      <ClientFormModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={autoClose}
        isEditMode={editMode}
        client={client}
      />
    </>
  );
};
