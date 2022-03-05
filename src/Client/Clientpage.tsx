import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { SharedNavbar } from "../Shared/SharedNavbar";

interface IProps {}

/**
* @author
* @function @Clientpage

**/

//Functions

//Add Delete Button

//Modal Add Client
const AddClient = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>+</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Client</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="first name">First Name</FormLabel>
              <Input id="first name" type="first name" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="last name">Last Name</FormLabel>
              <Input id="last name" type="last name" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="country">Country</FormLabel>
              <Input id="country" type="country" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input id="address" type="address" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button>Add Client</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

//Modal Edit Client
const EditClient = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{"✎"}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Client</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="first name">First Name</FormLabel>
              <Input id="first name" type="first name" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="last name">Last Name</FormLabel>
              <Input id="last name" type="last name" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="country">Country</FormLabel>
              <Input id="country" type="country" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input id="address" type="address" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button>Edit Client</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const DeleteClient = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{"🗑️"}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button>Delete Client</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

//Main
export const Clientpage: FC<IProps> = (props) => {
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
          <Button alignSelf="flex-end">{AddClient()}</Button>
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
              <Tr>
              <Td>Victor</Td>
              <Td>Figueroa</Td>
              <Td>vmfch@this.com</Td>
              <Td>Honduras</Td>
              <Td>Col. Tepesquincle</Td>
              <Td justifyContent='space-between'>
                
              </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </>
  );
};
