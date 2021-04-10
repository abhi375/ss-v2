import { AnimatePresence, motion } from "framer-motion";
import { HoverArrowIcon, IconClose } from "./Icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import { isBrowser } from "react-device-detect";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Form, FormField, Input } from "@/components/formFields";

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const emailRegExp = /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!hotmail|gmail|googlemail|yahoo|gmx|ymail|outlook|bluewin|protonmail|0-mail|027168|0815|0sg|10mail|10minutemail|11mail|123|123box|123india|123mail|123mail|123qwe|126|139|150mail|150ml|15meg4free|163|16mail|188|189|1chuan|1coolplace|1freeemail|1funplace|1internetdrive|1mail|1mail|1me|1mum|1musicrow|1netdrive|1nsyncfan|1pad|1under|1webave|1webhighway|1zhuan|2-mail|20email|20mail|212|t-online|web\.|online\.|aol\.|live\.)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/;

const portalId = "8401088";
const formId = "a5f718ac-a90a-4d28-bd25-3548b7465723";

const validationSchema = Yup.object({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .matches(emailRegExp, "Please enter a business email")
    .required("Required"),
  phoneNumber: Yup.string()
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid"),
});

export default function DemoForm({ toggleDemoForm }) {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setShowError] = useState("");
  const [cookies] = useCookies(["hubspotutk"]);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);

      axios
        .post(
          `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
          {
            portalId,
            formId,
            fields: [
              {
                name: "email",
                value: values.email,
              },
              {
                name: "firstname",
                value: values.firstname,
              },
              {
                name: "lastname",
                value: values.lastname,
              },
              {
                name: "phone",
                value: values.phoneNumber,
              },
              {
                name: "submissionpage",
                value: isBrowser ? window.location.href : document.title,
              },
              {
                name: "message",
                value: values.message,
              },
            ],

            context: {
              // hutk,
              hutk: cookies.hubspotutk,
              pageUri: isBrowser ? window.location.href : null,
              pageName: document.title,
            },
          }
        )
        .then((response) => {
          setTimeout(() => {
            setLoading(false);
            setFormSubmitted(true);

            setTimeout(() => {
              resetForm();
              setFormSubmitted(false);
              toggleDemoForm();
            }, 1000);
          }, 300);
        })
        .catch((error) => {
          setTimeout(() => {
            setLoading(false);
            setShowError(error.message);
          }, 300);
          setTimeout(() => {
            setShowError("");
          }, 1200);
        });
    },
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={toggleDemoForm}
        className="fixed inset-0 bg-black bg-opacity-40 z-50 shadow-lg"
      ></motion.div>
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="fixed top-0 right-0 bottom-0 w-[496px] bg-white z-50 shadow-lg p-8"
      >
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Get a demo</div>
          <button
            onClick={toggleDemoForm}
            className="cursor-pointer focus:outline-none w-8 h-8 grid place-items-center bg-white rounded-md hover:bg-gray-100"
          >
            <IconClose />
          </button>
        </div>

        <div className="mt-8">
          <Form onSubmit={handleSubmit} className={`overflow-auto relative`}>
            <div className={`grid gap-8 grid-cols-1`}>
              <FormField>
                <Input
                  name="firstname"
                  label="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoFocus
                  value={values.firstname}
                  errorText={errors.firstname}
                  error={errors.firstname && touched.firstname}
                />
              </FormField>
              <FormField>
                <Input
                  name="lastname"
                  label="Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                  errorText={errors.lastname}
                  error={errors.lastname && touched.lastname}
                />
              </FormField>
              <FormField>
                <Input
                  name="email"
                  label="Business Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  errorText={errors.email}
                  error={errors.email && touched.email}
                />
              </FormField>
              <FormField>
                <Input
                  name="phoneNumber"
                  label="Phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  errorText={errors.phoneNumber}
                  error={errors.phoneNumber && touched.phoneNumber}
                />
              </FormField>
              <FormField className="col-span-2">
                <Input
                  textarea
                  name="message"
                  label="Message (Optional)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
              </FormField>
              <FormField>
                <button
                  type="submit"
                  className={`text-lg group flex items-center justify-center px-9 py-3 text-white rounded-full ${
                    isFormSubmitted ? "bg-green-600" : "bg-accent"
                  } w-full md:w-full`}
                  disabled={isLoading}
                >
                  <span>
                    {isFormSubmitted
                      ? "Done"
                      : isLoading
                      ? "Sending..."
                      : "Send"}
                  </span>
                  <HoverArrowIcon />
                </button>
              </FormField>
            </div>

            <AnimatePresence>
              {error !== "" && (
                <motion.div
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full bg-red-700 bg-opacity-10 text-red-700 p-2 rounded flex items-center justify-center text-sm font-medium"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>
          </Form>
        </div>
      </motion.aside>
    </>
  );
}
