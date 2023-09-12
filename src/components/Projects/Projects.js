import React from 'react';
import './Projects.scss';
import { Container } from 'react-bootstrap';
import Pokedex from './Pokedex';

import Ecommerce from './Ecommerce';
import SocialMedia from './SocialMedia';
import RealEstate from './RealEstate';
import NextDemo from './Next-demo';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Container className="projects--wrap">
        <h3 className="projects--header">Projects</h3>
        <NextDemo />
        <RealEstate />
        <Ecommerce />
        <SocialMedia />
      </Container>
    </section>
  );
};

export default Projects;
