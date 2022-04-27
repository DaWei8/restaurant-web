import React from 'react';
import Logo from "../assets/logo.svg";
import contact from "../assets/contact.svg";
import "./ContactPage.css";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <PageHeading title='Contact Us' />

            <div className="contact-page__form-wrapper">
                <div className="contact-page__form-left">
                    <img
                        src={Logo}
                        alt="logo"
                        className="contact-page__form-left__logo"
                    />
                    <div className="contact-image-wrapper">
                        <img src={contact} alt="contact icon" className="contact-image" />
                    </div>
                </div>

                <form className="contact-page__form">
                    <div className="form-group">
                        <label for="name" className="form-group__label">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            placeholder=""
                            className="form-group__input"
                        />
                    </div>
                    <div className="form-group">
                        <label for="email" className="form-group__label">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            placeholder=""
                            className="form-group__input"
                        />
                    </div>
                    <div className="form-group">
                        <label for="message" className="form-group__label">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder=""
                            className="form-group__textarea"
                        />
                    </div>
                    <button type="submit" className="contact-page__form__submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

const PageHeading = (props) => {
    return (
        <div className='page-heading'>
            <div className='page-heading-title'>{props.title}</div>
            <div className='page-heading-line'></div>
        </div>
    )
}

export default ContactPage;