import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import real_estate from '../../img/portfolio_ realestateDark.png';

const RealEstate = () => {
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
            src={real_estate}
            alt="Real Estate Project"
            className="project--img"
          />
        </div>
      </Col>
      <Col sm={12} lg={6} className="project--col">
        <div className="project--right">
          <div className="project--info">
            <h4 className="project--name">Berkshire Hathaway | Real Estate</h4>
            <p className="project--description">
              This Real Estate applications was built with Next.js. I chose to
              build this with Next.js to take advantage of their powerful
              features such as image optimization, SEO benefits and Static Site
              Generation, as opposed to client side rendering. I prioritized
              building optimized, reusable components throughout the whole
              application. The user can go to specific listing pages to view the
              entire project description, pop-up image modal and a map showing
              the property location.For authentication the user can securely
              sign in using their Google, Facebook or Twitter accounts. I used
              to Tailwind CSS to style the application mobile first and ensure
              the build is fully responsive. The user can also toggle between a
              light and dark theme.
            </p>
            <div className="project--tech">
              <h5 className="project--tech--header">Technologies Used</h5>
              <div className="project--icon--box">
                <i className="devicon-react-original project--icon"></i>
                <i className="devicon-nextjs-original project--icon"></i>
                <i className="devicon-javascript-plain project--icon"></i>
                <i className="devicon-tailwindcss-plain project--icon"></i>
              </div>
            </div>
            <div className="project--links">
              <a
                href="https://github.com/DaltonOtineru/real_estate"
                className="project--github"
                target="_blank"
              >
                <i className="devicon-github-original-wordmark"></i>
              </a>
              <a
                href="https://berkshire-hathaway-six.vercel.app/"
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

export default RealEstate;
