import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
import { FC, useEffect, useState } from "react";
import { IClient } from "../../Models/Client";
import { clientService } from "../../Service/Client.service";
import { SharedNavbar } from "../Shared/SharedNavbar";
import { ClientFormModal } from "./ClientFormModal";

interface IProps {}

/**
 * @author
 * @function @Clientpage
 **/

//Main

const clientServices = new clientService()

export const Clientpage: FC<IProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const [client, setClient] = useState<IClient | undefined>();

  const [data, setData] = useState<IClient[]>([]);
  useEffect(() => {
    const clientList = new clientService()
    clientList.getUsers().then((response) => {
      const data = JSON.parse(response)
      setData(data)
      return data
    })
  }, [])

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
      <Flex w="100vw" bgColor="#F2E0DF " flexDirection="column">
        <Flex padding="5px" w="10vw" alignSelf="end">
          <Button onClick={onOpen}>
            <AddIcon />
          </Button>
        </Flex>
        <Table variant="simple">
          <TableCaption>Clients Table</TableCaption>
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
                      <Button
                        onClick={() => {
                          setDeleteMode(true);
                          clientServices.deleteClient(data.client_id)
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Flex>
      <ClientFormModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={autoClose}
        isEditMode={editMode}
        isDeleteMode={deleteMode}
        client={client}
      />
      <></>
    </>
  );
};
