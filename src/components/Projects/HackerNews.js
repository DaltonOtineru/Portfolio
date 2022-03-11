import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hackerNews from '../../img/hacker_news_portfolio.png';

const HackerNews = () => {
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
              This web application is a fully responsive clone of the Hacker
              News web application built in React JS, utilizing the News.org
              API. All interaction with the API was done by Axios. Articles and
              all relevant information is displayed in a main news section and
              top news section on the sidebar. The application includes search
              functionality for specific articles.
            </p>
            <div className="project--tech">
              <h5 className="project--tech--header">Technologies Used</h5>
              <div className="project--icon--box">
                <i className="devicon-react-original project--icon"></i>
                <i className="devicon-javascript-plain project--icon"></i>
                <i className="devicon-css3-plain project--icon"></i>

                <i className="devicon-bootstrap-plain project--icon"></i>
              </div>
            </div>
            <div className="project--links">
              <a
                href="https://github.com/DaltonOtineru/Hacker_News"
                className="project--github"
                target="_blank"
              >
                <i className="devicon-github-original-wordmark"></i>
              </a>
              <a
                href="https://hacker-newsclone.netlify.app"
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

export default HackerNews;
