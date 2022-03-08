import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer--inner">
        <div className="footer--links">
          <Button className="footer--btn footer--github">
            <i className="devicon-github-original footer--icon"></i>
            GitHub
          </Button>
          <Button className="footer--btn footer--linkedin">
            <i className="devicon-linkedin-plain footer--icon"></i>
            LinkedIn
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
