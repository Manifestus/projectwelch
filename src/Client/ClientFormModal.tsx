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
import { FC, useMemo } from "react";
import { IClient } from "../Models/Client";
import { clientService } from "../Server/Client.service";
import * as Yup from "yup";
import { words as _words } from "lodash-es";

interface IProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  isEditMode?: boolean;
  client?: IClient;
  clientServices?: clientService;
}

/**
 * @author
 * @function @ClientFormModal
 **/

export const defineSessionSchema = (
  first_nameMaxWords: number = 20,
  last_nameMaxWords: number = 20,
  emailMaxWords: number = 300,
  countryMaxWords: number = 30,
  addresMaxWords: number = 100
) => {
  return Yup.object().shape({
    first_name: Yup.string()
      .required("First Name is required")
      .test(
        "isfirst_nameMaxWords",
        `First Name has amount of words is ${first_nameMaxWords}`,
        (first_name) => _words(first_name).length <= first_nameMaxWords
      ),
    last_name: Yup.string()
      .required("Last Name is required.")
      .test(
        "islast_nameMaxWords",
        `Last Name has amount of words is ${last_nameMaxWords}`,
        (last_name) => _words(last_name).length <= last_nameMaxWords
      ),
    email: Yup.string()
      .required("Email is required.")
      .test(
        "isemailMaxWords",
        `Email has amount of words is ${emailMaxWords}`,
        (email) => _words(email).length <= emailMaxWords
      ),
    country: Yup.string()
      .required("Country is required.")
      .test(
        "isAbstractMaxWords",
        `Country has amount of words is ${countryMaxWords}`,
        (country) => _words(country).length <= countryMaxWords
      ),
    address: Yup.string()
      .required("Address is required.")
      .test(
        "isAbstractMaxWords",
        `Address has amount of words is ${addresMaxWords}`,
        (address) => _words(address).length <= addresMaxWords
      ),
  });
};

export const ClientFormModal: FC<IProps> = ({
  onOpen,
  isOpen,
  onClose,
  isEditMode,
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
    onSubmit: async (val, helpers) => {
      const clientServices = new clientService();
      onClose();
      if (isEditMode) {
        //patch
      } else {
        //post
        clientServices.postClient(val);
      }
    },
  });

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
              <Input
                id="first_name"
                name="first_name"
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
