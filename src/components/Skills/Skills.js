import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.scss';

const Skills = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="skills">
      <Container
        className="skills--wrap"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        <h3 className="skills--title">Skills</h3>
        <div className="skills--inner">
          <div className="icon--box">
            <i className="devicon-javascript-plain skill--icon"></i>
            <p className="icon--name">JavaScript</p>
          </div>
          <div className="icon--box">
            <i className="devicon-react-original skill--icon"></i>
            <p className="icon--name">React</p>
          </div>

          <div className="icon--box">
            <i className="devicon-redux-original skill--icon"></i>
            <p className="icon--name">Redux</p>
          </div>
          <div className="icon--box">
            <i className="devicon-firebase-plain skill--icon"></i>
            <p className="icon--name">Firebase</p>
          </div>
          <div className="icon--box">
            <i className="devicon-sass-original skill--icon"></i>
            <p className="icon--name">Sass</p>
          </div>
          <div className="icon--box">
            <i className="devicon-html5-plain skill--icon"></i>
            <p className="icon--name">HTML5</p>
          </div>
          <div className="icon--box">
            <i className="devicon-css3-plain skill--icon"></i>
            <p className="icon--name">CSS3</p>
          </div>
          <div className="icon--box">
            <i className="devicon-bootstrap-plain skill--icon"></i>
            <p className="icon--name">Bootstrap</p>
          </div>
          <div className="icon--box">
            <i className="devicon-git-plain skill--icon"></i>
            <p className="icon--name">Git</p>
          </div>
          <div className="icon--box">
            <i className="devicon-npm-original-wordmark skill--icon"></i>
            <p className="icon--name">NPM</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
