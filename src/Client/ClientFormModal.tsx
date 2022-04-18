import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { IClient } from "../Models/Client";

interface IProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  isEditMode?: boolean;
  client?: IClient;
}

/**
 * @author
 * @function @ClientFormModal
 **/

export const ClientFormModal: FC<IProps> = ({
  onOpen,
  isOpen,
  onClose,
  isEditMode,
  client,
}: IProps) => {
  console.log(client);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${isEditMode ? "Edit" : "Add"} Client`}</ModalHeader>
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
            <Button onClick={onClose}>Add Client</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
