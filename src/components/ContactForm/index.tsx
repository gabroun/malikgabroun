import * as S from "./styles";

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";

import React, { useState } from "react";

type Errors = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
};

type Data = {
  [key: string]: string;
};

type FormValue = {
  email: string;
  firstname: string;
  lastname: string;
  message: string;
};

type FormAction = {
  [key: string]: Function;
};

const ContactForm = () => {
  const [msgSuccess, setMsgSuccess] = useState(false as boolean);

  const encode = (data: Data) => {
    console.log(data);
    return Object.keys(data)
      .map(
        (key: string) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (values: FormValue, actions: FormikHelpers<FormValue>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => {
        setMsgSuccess(true);

        actions.resetForm();
      })
      .catch((e) => {
        console.log("Error", e);
      })
      .finally(() => {
        setTimeout(() => {
          setMsgSuccess(true);
        }, 500);

        actions.setSubmitting(false);
      });
  };

  return (
    <S.ContactUsForm>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        }}
        validate={(values) => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const errors = {} as Errors;
          if (!values.firstname) {
            errors.firstname = "First name Required";
          }
          if (!values.lastname) {
            errors.lastname = "Last name Required";
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Valid Email Required";
          }
          if (!values.message) {
            errors.message = "Message Required";
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          onSubmit(values, actions);
        }}
      >
        {() => (
          <Form name="contact" netlify-honeypot="bot-field" data-netlify={true}>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className={msgSuccess ? "success-msg" : "hide"}>
              <p>Submitted Successfully</p>
            </div>
            <div className="contact-name">
              <p className="flex-col">
                <label htmlFor="first name">First Name </label>
                <Field name="firstname" />
                <span className="error-msg">
                  <ErrorMessage name="firstname" />
                </span>
              </p>
              <p className="flex-col">
                <label htmlFor="last name">Last Name </label>
                <Field name="lastname" />
                <span className="error-msg">
                  <ErrorMessage name="lastname" />
                </span>
              </p>
            </div>
            <div className="flex-col">
              <label htmlFor="email">Email </label>
              <Field name="email" />
              <span className="error-msg">
                <ErrorMessage name="email" />
              </span>
            </div>
            <div className="flex-col">
              <label htmlFor="message">Message </label>
              <Field name="message" component="textarea" />
              <span className="error-msg">
                <ErrorMessage name="message" />
              </span>
            </div>
            <button type="submit" className="contact-submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </S.ContactUsForm>
  );
};

export default ContactForm;
