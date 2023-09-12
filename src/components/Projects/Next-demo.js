import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import next from '../../img/next_demo.png';

const NextDemo = () => {
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
          <img src={next} alt="hacker news clone" className="project--img" />
        </div>
      </Col>
      <Col sm={12} lg={6} className="project--col">
        <div className="project--right">
          <div className="project--info">
            <h4 className="project--name">Next.js 13 Demo App</h4>
            <p className="project--description">
              This web application was built with Next.js, TypeScript, Prisma,
              PostgreSQL and Tailwind CSS. I utilized new Next.js 13 features
              such as the app directory, routing, layout and API routes. I Used
              both server and client components to provide great speed and
              functionality. I took advantage of the Prisma ORM with a
              PostgreSQL database on railway to store all data. There is a pro
              plan subscription that can be purchased through stripe and managed
              through an implemented billing portal. The user can sign in with
              Google using Next Auth with OAuth 2.0. Everything is styled with
              Tailwind CSS mobile first and fully responsive for all devices.
            </p>
            <div className="project--tech">
              <h5 className="project--tech--header">Technologies Used</h5>
              <div className="project--icon--box">
                <i class="devicon-typescript-plain project--icon"></i>
                <i className="devicon-nextjs-original project--icon"></i>

                <i className="devicon-react-original project--icon"></i>
                <i class="devicon-postgresql-plain project--icon"></i>
                <i className="devicon-tailwindcss-plain project--icon"></i>

                {/* prisma icon */}
                <svg
                  fill={'#6366f1'}
                  viewBox="0.34 -0.059977834648891726 33.11668247084116 39.96397783464889"
                  xmlns="http://www.w3.org/2000/svg"
                  className="project--icon"
                  style={{ height: 44, width: 44, marginBottom: '1.5rem' }}
                >
                  <path
                    d="M32.908 30.475L19.151 1.26a2.208 2.208 0 0 0-1.88-1.257 2.183 2.183 0 0 0-2.01 1.042L.34 25.212a2.26 2.26 0 0 0 .025 2.426L7.66 38.935a2.346 2.346 0 0 0 2.635.969l21.17-6.262a2.32 2.32 0 0 0 1.457-1.258 2.27 2.27 0 0 0-.013-1.91zm-3.08 1.253L11.864 37.04c-.548.163-1.074-.312-.96-.865l6.418-30.731c.12-.575.914-.666 1.165-.134l11.881 25.23a.858.858 0 0 1-.541 1.188z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
                {/* railway icon */}
                {/* <svg
                  viewBox="0 0 1024 1024"
                  fill="#374151"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: 44, width: 44, marginBottom: '1.5rem' }}
                >
                  <path
                    d="M4.756 438.175A520.713 520.713 0 0 0 0 489.735h777.799c-2.716-5.306-6.365-10.09-10.045-14.772-132.97-171.791-204.498-156.896-306.819-161.26-34.114-1.403-57.249-1.967-193.037-1.967-72.677 0-151.688.185-228.628.39-9.96 26.884-19.566 52.942-24.243 74.14h398.571v51.909H4.756ZM783.93 541.696H.399c.82 13.851 2.112 27.517 3.978 40.999h723.39c32.248 0 50.299-18.297 56.162-40.999ZM45.017 724.306S164.941 1018.77 511.46 1024c207.112 0 385.071-123.006 465.907-299.694H45.017Z"
                    fill={'#6366f1'}
                  />
                  <path
                    d="M511.454 0C319.953 0 153.311 105.16 65.31 260.612c68.771-.144 202.704-.226 202.704-.226h.031v-.051c158.309 0 164.193.707 195.118 1.998l19.149.706c66.7 2.224 148.683 9.384 213.19 58.19 35.015 26.471 85.571 84.896 115.708 126.52 27.861 38.499 35.876 82.756 16.933 125.158-17.436 38.97-54.952 62.215-100.383 62.215H16.69s4.233 17.944 10.58 37.751h970.632A510.385 510.385 0 0 0 1024 512.218C1024.01 229.355 794.532 0 511.454 0Z"
                    fill={'#6366f1'}
                  />
                </svg> */}
              </div>
            </div>
            <div className="project--links">
              <a
                href="https://github.com/DaltonOtineru/nextjs13_demo_app/"
                className="project--github"
                target="_blank"
              >
                <i className="devicon-github-original-wordmark"></i>
              </a>
              <a
                href="https://poster-post.vercel.app/"
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

export default NextDemo;
