import React from 'react';
import { TextField } from '@mui/material';
import { Container } from 'react-bootstrap';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact">
      <Container className="contact--inner">
        <h4 className="contact--header">Connect With Me</h4>
        <div className="contact--form">
          <form className="form" method="POST" name="contactForm">
            <div className="form--email--name">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="name--input"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="email--input"
              />
            </div>
            <div className="form--message">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="subject--input"
              />
              <textarea
                name="message"
                placeholder="Send Me a Message"
                className="message--input"
                rows="1"
              ></textarea>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
