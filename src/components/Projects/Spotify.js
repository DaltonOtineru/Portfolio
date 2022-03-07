import React from 'react';
import { Row, Col } from 'react-bootstrap';
import spotify from '../../img/readme_spotify.png';

const Spotify = () => {
  return (
    <Row className="project--row">
      <Col sm={12} lg={6} className="project--col">
        <div className="project--img--div">
          <img
            src={spotify}
            alt="spotify web api application"
            className="project--img"
          />
        </div>
      </Col>
      <Col sm={12} lg={6} className="project--col">
        <div className="project--right">
          <div className="project--info">
            <h4 className="project--name">Spotify Web application</h4>
            <p className="project--description">
              This web application was built with React JS, and pulls in artist
              and track data from the Spotify Web API. The user has the ability
              to search for specific artists or tracks, as well as listen to
              them. Axios is used for all interaction between the API and the
              application. The application utilizes the Spotify client
              credentials authorization flow to request for an access token and
              receive back the requested data.
            </p>
            <div className="project--tech">
              <h5 className="project--tech--header">Technologies Used</h5>
              <div className="project--icon--box">
                <i className="devicon-react-original project--icon"></i>
                <i className="devicon-javascript-plain project--icon"></i>
                <i className="devicon-css3-plain project--icon"></i>
              </div>
            </div>
            <div className="project--links">
              <a
                href="https://github.com/DaltonOtineru"
                className="project--github"
              >
                <i className="devicon-github-original-wordmark"></i>
              </a>
              <a
                href="https://spotify-clone-daltonotineru.vercel.app/"
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

export default Spotify;
