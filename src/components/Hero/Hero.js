import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="hero">
      <Container
        className="hero--wrap"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="500"
        data-aos-once="true"
      >
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
          <Button href="#calendly" className="hero--btn">
            Hire Me
          </Button>
          <Button href="#projects" className="hero--btn--projects">
            Projects
          </Button>
          <div className="hero--socials">
            <a
              href="https://github.com/DaltonOtineru"
              className="hero--icon--anchor"
              target="_blank"
            >
              <i className="devicon-github-original-wordmark hero--icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dotineru/"
              className="hero--icon--anchor"
              target="_blank"
            >
              <i className="devicon-linkedin-plain hero--icon"></i>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
