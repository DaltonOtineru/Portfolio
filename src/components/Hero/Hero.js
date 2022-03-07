import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <Container className="hero--wrap">
        <div className="job">
          <h1 className="job--title">Front End Developer</h1>
        </div>
        <div>
          <h3 className="hero--intro">
            I build <span className="hero--highlight">beautiful</span> web apps
            using <span className="hero--highlight">modern workflows</span>
          </h3>
        </div>
        <div className="button--box">
          <Button className="hero--btn">Hire Me</Button>
          <Button className="hero--btn--projects">Projects</Button>
          <a href="https://github.com/DaltonOtineru" target="_blank">
            <i class="devicon-github-original-wordmark github--hero--icon"></i>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
