import React from 'react';
import './Projects.scss';
import { Container } from 'react-bootstrap';
import HackerNews from './HackerNews';
import Spotify from './Spotify';
import TodoList from './TodoList';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Container className="projects--wrap">
        <h3 className="projects--header">Projects</h3>
        <HackerNews />
        <Spotify />
        <TodoList />
      </Container>
    </section>
  );
};

export default Projects;
