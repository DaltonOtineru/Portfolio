import React, { useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import { Container, Button } from 'react-bootstrap';
import './Contact.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section className="contact">
      <Container
        className="contact--inner"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        <div className="form--bg">
          <h4 className="contact--header">Contact</h4>
          <div className="contact--form">
            <form className="form" method="POST" name="contactForm">
              <div className="form--email--name">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="name--input"
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="email--input"
                  autoComplete="off"
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
                  placeholder="Message"
                  className="message--input"
                  rows="1"
                ></textarea>
              </div>
              <div className="submit--btn--box">
                <Button type="button" className="submit--btn">
                  Submit
                  <FiSend className="submit--btn--icon" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
