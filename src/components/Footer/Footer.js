import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { RiFilePaper2Fill } from 'react-icons/ri';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer--inner">
        <Button
          href="https://github.com/DaltonOtineru"
          className="footer--btn footer--github"
          target="_blank"
        >
          <i className="devicon-github-original footer--icon"></i>
          GitHub
        </Button>

        <Button
          href="https://www.linkedin.com/in/dotineru"
          className="footer--btn footer--linkedin"
          target="_blank"
        >
          <i className="devicon-linkedin-plain footer--icon"></i>
          LinkedIn
        </Button>
        <Button
          href="https://resume.creddle.io/resume/47x9hso76l9"
          className="footer--btn footer--resume"
          target="_blank"
        >
          <RiFilePaper2Fill className="footer--icon" /> Resume
        </Button>
      </Container>
    </div>
  );
};

export default Footer;
