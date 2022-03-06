import React from 'react';
import { MenuItems } from './MenuItems';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faD } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const renderLinks = () => {
    return MenuItems.map((item, index) => {
      return (
        <Nav.Link href={item.url} key={index} className={item.cName}>
          {item.title}
        </Nav.Link>
      );
    });
  };

  return (
    <Navbar className="navbar" variant="light" expand="lg">
      <Container className="navbar--container">
        <Navbar.Brand href="#home" className="navbar--logo">
          {/* <i class="fa-solid fa-d" />
          <i class="fa-solid fa-o" /> */}
          <a href="#" className="name--anchor">
            <span className="first--name">Dalton</span>
            <span className="last--name">Otineru</span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="nav--links--wrap"
        >
          <Nav className="navbar--links ">
            {renderLinks()}
            <Button type="button" className="navbar--contact">
              Get In Touch
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
