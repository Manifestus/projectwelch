import * as Yup from "yup";
import { words as _words } from "lodash-es";

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