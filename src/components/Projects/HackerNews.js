import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import hackerNews from '../../img/hacker_news_portfolio.png';

const HackerNews = () => {
  return (
    <Row className="project--row hacker--news">
      <Col sm={12} lg={6} className="project--col">
        <div className="project--img--div">
          <img
            src={hackerNews}
            alt="hacker news clone"
            className="project--img"
          />
        </div>
      </Col>
      <Col sm={12} lg={6} className="project--col">
        <div className="project--right">
          <div className="project--info">
            <h4 className="project--name">Hacker News Clone</h4>
            <p className="project--description">
              This project is a fully responsive clone of the Hacker News web
              application built in React JS, utilizing the News.org API. All
              interaction with the API was done by Axios. Articles and all
              relevant information is displayed in a main news section and top
              news section on the sidebar. The application includes search
              functionality for specific articles.
            </p>
            <div className="project--tech">
              <h5 className="project--tech--header">Technologies Used</h5>
              <div className="project--icon--box">
                <i class="devicon-react-original project--icon"></i>
                <i class="devicon-javascript-plain project--icon"></i>
                <i class="devicon-css3-plain project--icon"></i>

                <i class="devicon-bootstrap-plain project--icon"></i>
              </div>
            </div>
            <a
              href="https://github.com/DaltonOtineru/Hacker_News"
              target="_blank"
              className="project--github"
            >
              <i class="devicon-github-original-wordmark"></i>
            </a>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default HackerNews;
