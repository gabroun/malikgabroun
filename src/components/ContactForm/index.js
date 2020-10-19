import * as S from './styles'

import React from 'react'

class ContactForm extends React.Component {
    render() {
        return (
            <S.ContactUsForm name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="contact-name">
                    <p className="flex-col">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" />
                    </p>
                    <p className="flex-col">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" />
                    </p>
                </div>
                <div className="flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                </div>
                <div className="flex-col">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" />
                </div>
                <button type="submit" className="contact-submit">Submit</button>
            </S.ContactUsForm>
        );
    }
}

export default ContactForm;