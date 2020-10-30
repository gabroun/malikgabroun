import * as S from './styles';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgSuccess: false,
    };
    this.encode = this.encode.bind(this);
  }

  encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }
  render() {
    return (
      <S.ContactUsForm>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            message: '',
          }}
          validate={(values) => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if (!values.firstname) {
              errors.firstname = 'First name Required';
            }
            if (!values.lastname) {
              errors.lastname = 'Last name Required';
            }
            if (!values.email || !emailRegex.test(values.email)) {
              errors.email = 'Valid Email Required';
            }
            if (!values.message) {
              errors.message = 'Message Required';
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: this.encode({ 'form-name': 'contact', ...values }),
            })
              .then(() => {
                this.setState({ msgSuccess: true });
                actions.resetForm();
              })
              .catch((e) => {
                console.log('Error', e);
              })
              .finally(() => {
                setTimeout(() => {
                  this.setState({ msgSuccess: false });
                }, 500);

                actions.setSubmitting(false);
              });
          }}
        >
          {() => (
            <Form
              name="contact"
              netlify-honeypot="bot-field"
              data-netlify={true}
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className={this.state.msgSuccess ? 'success-msg' : 'hide'}>
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
  }
}

export default ContactForm;
