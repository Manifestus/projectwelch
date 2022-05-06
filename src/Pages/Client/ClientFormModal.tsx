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
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { FC, useMemo } from "react";
import { IClient } from "../../Models/Client";
import { clientService } from "../../Service/Client.service";
import { defineSessionSchema } from "./ClientValidationSchema";

interface IProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  onMode?: {};
  isEditMode?: boolean;
  isDeleteMode?: boolean;
  client?: IClient;
  clientServices?: clientService;
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
  isDeleteMode,
  client,
}: IProps) => {
  const initialValues = useMemo(
    () => ({
      ...(client
        ? client
        : {
            first_name: "",
            last_name: "",
            email: "",
            country: "",
            address: "",
          }),
    }),
    [client]
  );

  const form = useFormik({
    validationSchema: defineSessionSchema(),
    initialValues: initialValues,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (val) => {
      const clientServices = new clientService();
      onClose();
      if (isEditMode) {
        //patch
        clientServices.patchClient(val)
      } else {
        //post
        clientServices.postClient(val);
      }
    },
  });

  let firstNamePlaceholder: string | undefined = ''
  let lastNamePlaceholder: string | undefined = ''
  let emailPlaceholder: string | undefined = ''
  let countryPlaceholder: string | undefined = ''
  let addressPlaceholder: string | undefined = ''

  if (isEditMode) {
    firstNamePlaceholder = client?.first_name
    lastNamePlaceholder = client?.last_name
    emailPlaceholder = client?.email
    countryPlaceholder = client?.country
    addressPlaceholder = client?.address
  } else {
    
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${
            isEditMode ? "Edit" : isDeleteMode ? "Delete" : "Add"
          } Client`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="first name">First Name</FormLabel>
              <>{`${isEditMode ? "Edit" : isDeleteMode ? "Delete" : "Add"}`}</>
              <Input
                id="first_name"
                name="first_name"
                placeholder= {firstNamePlaceholder}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                defaultValue={form.values.first_name}
              />

              {form.touched?.first_name && form.errors?.first_name && (
                <FormErrorMessage>First Name is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="last name">Last Name</FormLabel>
              <Input
                id="last_name"
                name="last_name"
                placeholder={lastNamePlaceholder}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                defaultValue={form.values.last_name}
              />

              {form.touched?.last_name && form.errors?.last_name && (
                <FormErrorMessage>Last Name is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                placeholder= {emailPlaceholder}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                defaultValue={form.values.email}
              />

              {form.touched?.email && form.errors?.email && (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="country">Country</FormLabel>
              <Input
                id="country"
                name="country"
                placeholder= {countryPlaceholder}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                defaultValue={form.values.country}
              />

              {form.touched?.country && form.errors?.country && (
                <FormErrorMessage>Country is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input
                id="address"
                name="address"
                placeholder= {addressPlaceholder}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                defaultValue={form.values.address}
              />

              {form.touched?.address && form.errors?.address && (
                <FormErrorMessage>Address Name is required.</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                form.submitForm().catch((error) => console.error(error));
              }}
            >
              Add Client
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
