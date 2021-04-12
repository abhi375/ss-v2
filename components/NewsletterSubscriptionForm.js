import { useState } from "react";
import { Formik } from "formik";
import { HoverArrowIcon } from "@/components/Icons";
import { useCookies } from "react-cookie";
import { isBrowser } from "react-device-detect";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

export default function NewsletterSubscriptionForm() {
  const [cookies] = useCookies(["hubspotutk"]);
  const portalId = "8401088";
  const subscriptionFormID = "2b27fc43-e9d6-474d-9788-8b60f85b076f";
  const [showError, setShowError] = useState(false);

  const [isFormSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="w-full">
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          axios
            .post(
              `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${subscriptionFormID}`,
              {
                portalId,
                subscriptionFormID,
                fields: [
                  {
                    name: "email",
                    value: values.email,
                  },
                ],

                context: {
                  hutk: cookies.hubspotutk,
                  pageUri: isBrowser ? window.location.href : null,
                  pageName: document.title,
                },
              }
            )
            .then(() => {
              setTimeout(() => {
                setFormSubmitted(true);
                resetForm();
              }, 300);
            })
            .catch((error) => {
              setShowError(true);
              setTimeout(() => {
                setShowError(false);
                resetForm();
              }, 1000);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <AnimatePresence>
            {isFormSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full p-2.5 bg-green-700 bg-opacity-10 text-green-700 rounded text-center text-sm font-semibold"
              >
                Thanks for Subscribing
              </motion.div>
            ) : showError ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full p-2.5 bg-red-700 bg-opacity-10 text-red-700 rounded text-center text-sm font-semibold"
              >
                Something went wrong.
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <form
                  autoComplete="off"
                  className="w-full relative flex flex-col sm:flex-row items-center justify-between"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={`w-full rounded-full cursor-pointer py-2.5  px-3 focus:outline-none focus:border-accent bg-gray-100 ${
                      errors.email && !touched
                        ? "border-red-500"
                        : "border-transparent"
                    }`}
                  />

                  <button
                    type="submit"
                    className="px-6 py-2.5 ml-0 sm:ml-5 mt-5 sm:mt-0 w-full sm:w-auto text-white bg-accent flex items-center justify-center rounded-full font-semibold focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-10 group"
                  >
                    <span>Subscribe</span>
                    <HoverArrowIcon />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </Formik>
    </div>
  );
}
