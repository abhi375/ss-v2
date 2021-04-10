import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { FormField, Input } from "@/components/formFields";
import axios from "axios";
import { LogoIcon } from "@/components/Icons";

export default function SignIn() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      spaceID: "",
    },
    validationSchema: Yup.object({
      spaceID: Yup.string().required("Required"),
    }),
    onSubmit: ({ spaceID }) => {
      setLoading(true);
      let url = "https://api.samespace.com/hub/v1/space/" + spaceID;
      axios
        .get(url)
        .then((response) => {
          const { data } = response;
          setTimeout(() => {
            setLoading(false);
            setFormSubmitted(true);
            if (data.url.indexOf(".samespace.com") === -1) {
              window.location.href = "//" + data.url + "/signin";
            } else {
              if (data.cluster_version === 1) {
                window.location.href = "//" + spaceID + ".samespace.com/signin";
              } else {
                window.location.href = "//" + data.url + "/signin/" + spaceID;
              }
            }
          }, 300);
        })
        .catch((error) => {
          setTimeout(() => {
            setLoading(false);
            if (
              error.response &&
              error.response.data &&
              error.response.data.errors &&
              Array.isArray(error.response.data.errors)
            ) {
              error.response.data.errors.forEach((item) => {
                setShowErrorNotification(true);
              });
            } else {
              setShowErrorNotification(true);
            }
          }, 300);

          setTimeout(() => {
            setShowErrorNotification(false);
          }, 1200);
        });
    },
  });

  return (
    <section className="px-4 md:px-12 bg-gray-50 py-20 min-h-screen w-full h-full grid place-items-center">
      <article className="w-full max-w-[480px] bg-white rounded-lg mx-auto px-12 md:px-16 py-24 shadow-subtle">
        <div className="w-full grid place-items-center">
          <LogoIcon />
        </div>
        <div className="mt-8 mb-16 text-center text-2xl font-semibold">
          Sign in to your account
        </div>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Input
              name="spaceID"
              label="Your Space ID"
              autoFocus
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.spaceID}
              errorText={errors.spaceID}
              error={errors.spaceID && touched.spaceID}
            />
          </FormField>
          <div className="mt-2">
            <FormField>
              <button
                disabled={isLoading}
                className={`mt-8 w-full text-white transition-all px-4 py-3 font-semibold hover:shadow-inset  bg-accent rounded-full ${
                  isFormSubmitted ? "bg-green-700" : ""
                } ${isLoading ? "bg-opacity-50" : ""}`}
                type="submit"
              >
                {isFormSubmitted
                  ? "Redirecting..."
                  : isLoading
                  ? "Verifying..."
                  : "Next"}
              </button>
            </FormField>
          </div>
        </form>
        <AnimatePresence>
          {showErrorNotification && (
            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -bottom-16 bg-red-700 w-full bg-opacity-10 rounded p-2 text-red-700 flex items-center justify-center font-medium"
            >
              Invalid Space ID
            </motion.div>
          )}
        </AnimatePresence>

        <section className="mt-12 opacity-30 text-[13px] text-center">
          Copyright © {new Date().getFullYear()} Samespace, Inc.
        </section>
      </article>
    </section>
  );
}
