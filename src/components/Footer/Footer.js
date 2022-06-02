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
          href="https://drive.google.com/file/d/14OZLMNV4qTMl_Q_GxXsyARnr9sn4OZn8/view?usp=sharing"
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
