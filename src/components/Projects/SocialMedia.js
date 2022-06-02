import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import twitter from '../../img/twitter.png';

const SocialMedia = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <Row
      className="project--row social--media"
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-delay="300"
      data-aos-once="true"
    >
      <Col sm={12} lg={6} className="project--col">
        <div className="project--img--div">
          <img src={twitter} alt="Ecommerce Project" className="project--img" />
        </div>
      </Col>
      <Col sm={12} lg={6} className="project--col">
        <div className="project--right">
          <div className="project--info">
            <h4 className="project--name">Social Media</h4>
            <p className="project--description">
              I built this fully responsive social media application with React
              JS. Users can create posts, like posts, and comment on posts. I
              integrated Firebase for storing and fetching all posts, comments,
              likes and user info such as profile picture and display name. The
              app also uses Firebase for user authentication to register or log
              in users. I utilized Redux to share state between components,
              including user information. I used React Router to allow users to
              view individual post pages.
              {/* This fully responsive E-commerce store was built with React JS. It
              utilizes Redux for all state managment between components,
              including the shopping cart and user authentication. Firebase is
              integrated for user registraion and login functionality. Products
              are displayed on their correlated pages and React Router is used
              to navigate through the site. */}
            </p>
            <div className="project--tech">
              <h5 className="project--tech--header">Technologies Used</h5>
              <div className="project--icon--box">
                <i className="devicon-react-original project--icon"></i>
                <i className="devicon-javascript-plain project--icon"></i>
                <i className="devicon-redux-original project--icon"></i>
                <i className="devicon-firebase-plain-wordmark project--icon"></i>
                <i className="devicon-sass-original project--icon"></i>
              </div>
            </div>
            <div className="project--links">
              <a
                href="https://github.com/DaltonOtineru/social_media"
                className="project--github"
                target="_blank"
              >
                <i className="devicon-github-original-wordmark"></i>
              </a>
              <a
                href="https://twitter-redesign.netlify.app/"
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

export default SocialMedia;
