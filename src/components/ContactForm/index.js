import * as S from './styles'

import React from 'react'

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {firstname: "", lastname: "", email: "", message: ""}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    } 
    render() {
        return (
            <S.ContactUsForm name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="contact-name">
                    <p className="flex-col">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                    </p>
                    <p className="flex-col">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
                    </p>
                </div>
                <div className="flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="flex-col">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" value={this.state.message} onChange={this.handleChange} />
                </div>
                <button type="submit" className="contact-submit">Submit</button>
            </S.ContactUsForm>
        );
    }
}

export default ContactForm;