import React from 'react';

import { Container } from 'react-bootstrap';
import './Skills.scss';

const Skills = () => {
  return (
    <section className="skills">
      <Container className="skills--wrap">
        <h3 className="skills--title">Skills</h3>
        <div className="skills--inner">
          <div className="icon--box">
            <i class="devicon-html5-plain skill--icon"></i>
            <p className="icon--name">HTML5</p>
          </div>
          <div className="icon--box">
            <i class="devicon-css3-plain skill--icon"></i>
            <p className="icon--name">CSS3</p>
          </div>
          <div className="icon--box">
            <i class="devicon-javascript-plain skill--icon"></i>
            <p className="icon--name">JavaScript</p>
          </div>
          <div className="icon--box">
            <i class="devicon-react-original skill--icon"></i>
            <p className="icon--name">React</p>
          </div>

          <div className="icon--box">
            <i class="devicon-redux-original skill--icon"></i>
            <p className="icon--name">Redux</p>
          </div>
          <div className="icon--box">
            <i class="devicon-bootstrap-plain skill--icon"></i>
            <p className="icon--name">Bootstrap</p>
          </div>
          <div className="icon--box">
            <i class="devicon-git-plain skill--icon"></i>
            <p className="icon--name">Git</p>
          </div>
          <div className="icon--box">
            <i class="devicon-npm-original-wordmark skill--icon"></i>
            <p className="icon--name">NPM</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
