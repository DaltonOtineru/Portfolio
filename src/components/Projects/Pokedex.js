import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pokemon from '../../img/pokemon_portfolio.png';

const Pokedex = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <Row
      className="project--row hacker--news"
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-delay="300"
      data-aos-once="true"
    >
      <Col sm={12} lg={6} className="project--col">
        <div className="project--img--div">
          <img src={pokemon} alt="hacker news clone" className="project--img" />
        </div>
      </Col>
      <Col sm={12} lg={6} className="project--col">
        <div className="project--right">
          <div className="project--info">
            <h4 className="project--name">Pokedex</h4>
            <p className="project--description">
              This web applcation is fully responsive, built with React.js and
              Tailwind CSS. The app generates Pokemon data utilizing the Pokemon
              API and displays the response as a paginated grid with the Pokemon
              name, image, type and color coded background correlated to the
              Pokemons typing. When the user clicks on an individual Pokemon a
              card is displayed with the Pokemons stats. The user can also
              "catch" pokemon and give them a nickname and captured date/level.
              The captured Pokemons are persisted with local storage and can be
              viewed on a separate captured pokemon page.
            </p>
            <div className="project--tech">
              <h5 className="project--tech--header">Technologies Used</h5>
              <div className="project--icon--box">
                <i className="devicon-react-original project--icon"></i>
                <i className="devicon-javascript-plain project--icon"></i>
                <i className="devicon-tailwindcss-plain project--icon"></i>
              </div>
            </div>
            <div className="project--links">
              <a
                href="https://github.com/DaltonOtineru/pokedex"
                className="project--github"
                target="_blank"
              >
                <i className="devicon-github-original-wordmark"></i>
              </a>
              <a
                href="https://gotta-catch-em-all.vercel.app/"
                className="project--site"
                target="_blank"
              >
                <i className="fa-solid fa-desktop"></i>
              </a>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Pokedex;
