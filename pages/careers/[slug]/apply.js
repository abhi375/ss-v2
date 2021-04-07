import { useState } from "react";

import { useRouter } from "next/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/Button";
import Dropzone from "react-dropzone";
import { AttachmentIcon, VisibilityIcon } from "@/components/Icons";
import Link from "next/link";

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const FORM_INITIAL_VALUES = {
  fullName: "",
  email: "",
  phone: "",
  currentCompany: "",
  portFolioURL: "",
  otherWebsite: "",
  additionalInformation: "",
  resume: "",
};

const validationSchema = Yup.object({
  fullName: Yup.string().max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid"),
  currentCompany: "",
  portFolioURL: Yup.string().url("Invalid Url"),
  otherWebsite: Yup.string().url("Invalid Url"),
  additionalInformation: "",
  resume: Yup.mixed()
    .required("Required")
    .test(
      "is-correct-file",
      "Please upload a .doc or .pdf file",
      checkIfFilesAreCorrectType
    )
    .test("is-big-file", "File size must be under 2MB", checkIfFilesAreTooBig),
});

const ALLOWED_RESUME_MIMES = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/msword",
  "application/pdf",
  "text/plain",
  "application/octet-stream",
];

export function checkIfFilesAreCorrectType(files) {
  let valid = true;
  if (files) {
    files.map((file) => {
      if (!ALLOWED_RESUME_MIMES.includes(file.type)) {
        valid = false;
      }
    });
  }
  return valid;
}

export function checkIfFilesAreTooBig(files) {
  let valid = true;
  if (files) {
    files.map((file) => {
      if (file.size > 2 * 1024 * 1024) {
        valid = false;
      }
    });
  }
  return valid;
}

export default function JobApplicationPage() {
  const router = useRouter();

  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [isSuccessful, setSuccessFul] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: FORM_INITIAL_VALUES,
    validationSchema,
    onSubmit: () => {
      setLoading(true);
      submitForm();
    },
  });

  const submitForm = async () => {
    const formData = new FormData();
    formData.append("roleName", router.query.jobPost);
    Object.keys(values).forEach((v) => {
      if (v === "resume") {
        formData.append(v, values[v][0]);
      } else {
        formData.append(v, values[v]);
      }
    });
    const data = await axios
      .post(`https://api.samespace.com/web`, formData, {
        headers: {
          "x-token": "31E66891825F41F457C8D16BB731E",
        },
      })
      .catch((err) => {
        setShowErrorBanner(true);
        setTimeout(() => {
          setShowErrorBanner(false);
        }, 5000);
      });
    setLoading(false);
    if (data) {
      setFormSubmitted(true);
      setSuccessFul(true);
    }
  };

  const dropZone = async (acceptedFiles) => {
    setFieldValue("resume", acceptedFiles);
  };

  return (
    <>
      <section className="px-12 py-16 bg-white">
        {console.log(router)}

        {!isSuccessful && (
          <div className="max-w-[560px] mx-auto">
            <Link href="/careers">
              <a className="text-accent text-lg">Back</a>
            </Link>
            <h1 className="text-4xl font-extrabold mt-4">
              {router.query.jobPost}
            </h1>
          </div>
        )}

        <div className="max-w-[560px] mx-auto mt-8">
          <AnimatePresence>
            {showErrorBanner && (
              <motion.div
                initial={{ bottom: "-100%" }}
                animate={{ bottom: "0%" }}
                exit={{ bottom: "-100%" }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="fixed left-0 right-0 bottom-0 z-40 bg-rose-800 flex items-center justify-center text-base text-white"
              >
                Something went wrong. Please try again later.
              </motion.div>
            )}
          </AnimatePresence>
          {isSuccessful ? (
            <div className="p-12 text-center w-4/6 mx-auto flex flex-col bg-white ">
              <h3 className="mb-4 text-2xl font-semibold">
                Thank you so much for your interest.
              </h3>
              <p className="text-lg opacity-70">
                We want to confirm that you are on our radar. If there is a
                match between your experience and our opportunity, we will be in
                touch.
              </p>
            </div>
          ) : (
            <form
              className="grid grid-cols-1 mx-auto place-items-center gap-8"
              onSubmit={handleSubmit}
            >
              <div className="w-full grid grid-cols-2 gap-8">
                <div className="w-full">
                  <label className="text-[13px] mb-1 inline-block opacity-60">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    required
                    onChange={handleChange}
                    className="w-full p-2 border border-solid border-black border-opacity-10"
                    onBlur={handleBlur}
                    value={values.fullName}
                  />
                </div>

                <div className="w-full">
                  <label className="text-[13px] mb-1 inline-block opacity-60">
                    Email
                  </label>
                  <input
                    name="email"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full p-2 border border-solid border-black border-opacity-10"
                    value={values.email}
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-8">
                <div className="w-full">
                  <label className="text-[13px] mb-1 inline-block opacity-60">
                    Phone
                  </label>

                  <input
                    name="phone"
                    required
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    className="w-full p-2 border border-solid border-black border-opacity-10"
                  />
                </div>

                <div className="w-full">
                  <label className="text-[13px] mb-1 inline-block opacity-60">
                    Company
                  </label>
                  <input
                    name="currentCompany"
                    className="w-full p-2 border border-solid border-black border-opacity-10"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.currentCompany}
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-8">
                <div className="w-full">
                  <label className="text-[13px] mb-1 inline-block opacity-60">
                    Website
                  </label>

                  <input
                    name="otherWebsite"
                    className="w-full p-2 border border-solid border-black border-opacity-10"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.otherWebsite}
                  />
                </div>

                <div className="w-full">
                  <label className="text-[13px] mb-1 inline-block opacity-60">
                    Social (LinkedIn, Twitter)
                  </label>
                  <input
                    name="portFolioURL"
                    className="w-full p-2 border border-solid border-black border-opacity-10"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.portFolioURL}
                  />
                </div>
              </div>

              <div className="w-full">
                <label className="text-[13px] mb-1 inline-block opacity-60">
                  Additional Information
                </label>
                <textarea
                  resize="none"
                  name="additionalInformation"
                  className="w-full p-2 border border-solid border-black border-opacity-10"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.additionalInformation}
                  error={
                    errors.additionalInformation &&
                    touched.additionalInformation
                  }
                />
              </div>

              <div className="w-full">
                <Dropzone
                  onDragOver={() => {
                    setDragOver(true);
                  }}
                  onDragLeave={() => {
                    setDragOver(false);
                  }}
                  onDrop={(acceptedFiles) => {
                    dropZone(acceptedFiles);
                    setDragOver(false);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section
                      className={`w-full  bg-opacity-5 rounded-lg border-2 border-dashed  grid place-items-center relative  break-all focus:outline-none  ${
                        errors.resume
                          ? "bg-red-600 border-red-600"
                          : "bg-accent border-accent"
                      }`}
                    >
                      <div
                        className={`overflow-hidden break-all w-full focus:outline-none h-full ${
                          values.resume ? "px-4 py-4" : "px-8 py-8"
                        }`}
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />

                        <div
                          className={`overflow-hidden ${
                            errors.resume && !values.resume
                              ? "resume--state-blank__error"
                              : errors.resume && values.resume
                              ? "resume--state-filled__error"
                              : dragOver
                              ? "resume-drag-over"
                              : values.resume
                              ? "resume--state-filled"
                              : "resume--state-blank"
                          }`}
                        >
                          {values.resume ? (
                            values.resume.map((item, index) => (
                              <div
                                className="w-full flex items-center justify-between overflow-hidden"
                                key={index}
                              >
                                <div className="w-full truncate break-all">
                                  {item.name}
                                </div>
                                <div
                                  role="show/hide"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(
                                      URL.createObjectURL(values.resume[0]),
                                      "_blank"
                                    );
                                  }}
                                  className="w-8 h-8 bg-accent bg-opacity-5 rounded-md grid place-items-center"
                                >
                                  <VisibilityIcon />
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="w-full text-center">
                              <span className="text-accent">Upload a file</span>
                              &nbsp;or drag and drop here
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="absolute text-red-600 -bottom-6 text-[13px] left-0">
                        {errors.resume}
                      </span>
                    </section>
                  )}
                </Dropzone>
              </div>

              <Button
                type="submit"
                fullWidth
                disabled={isLoading || isFormSubmitted}
                title={
                  isFormSubmitted
                    ? "Done"
                    : isLoading
                    ? "Sending..."
                    : "Submit Application"
                }
              />
            </form>
          )}
        </div>
      </section>
    </>
  );
}
