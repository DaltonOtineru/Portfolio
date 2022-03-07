import React from 'react';
import './Projects.scss';
import { Container } from 'react-bootstrap';
import HackerNews from './HackerNews';
import Spotify from './Spotify';

const Projects = () => {
  return (
    <section className="projects">
      <Container className="projects--wrap">
        <h3 className="projects--header">Projects</h3>
        <HackerNews />
        <Spotify />
      </Container>
    </section>
  );
};

export default Projects;
