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
          <Button className="hero--btn">Hire Me</Button>
          <Button className="hero--btn--projects">Projects</Button>
          <a href="https://github.com/DaltonOtineru" target="_blank">
            <i class="devicon-github-original-wordmark github--hero--icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/dotineru/" target="_blank">
            <i class="devicon-linkedin-plain github--hero--icon"></i>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
