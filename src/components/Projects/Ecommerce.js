import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ecommerce1 from '../../img/ecommerce_1.png';
import ecommerce2 from '../../img/ecommerce_2.png';

const Ecommerce = () => {
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
            src={ecommerce2}
            alt="Ecommerce Project"
            className="project--img"
          />
        </div>
      </Col>
      <Col sm={12} lg={6} className="project--col">
        <div className="project--right">
          <div className="project--info">
            <h4 className="project--name">Ecommerce Online Store</h4>
            <p className="project--description">
              This fully responsive E-commerce store was built with Ract JS. It
              utilizes Redux for all state managment between components,
              including the shopping cart and user authentication. Firebase is
              integrated for user registraion and login functionality. Products
              are displayed on their correlated pages and React Router is used
              to navigate through the site.
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
                href="https://github.com/DaltonOtineru/e_commerce"
                className="project--github"
                target="_blank"
              >
                <i className="devicon-github-original-wordmark"></i>
              </a>
              <a
                href="https://ecommerce-online-shop.netlify.app/"
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

export default Ecommerce;
