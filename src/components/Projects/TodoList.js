import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import todolist from '../../img/todo_list_portfolio.png';

const TodoList = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <Row
      className="project--row"
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-delay="300"
      data-aos-once="true"
    >
      <Col sm={12} lg={6} className="project--col">
        <div className="project--img--div">
          <img
            src={todolist}
            alt="spotify web api application"
            className="project--img"
          />
        </div>
      </Col>
      <Col sm={12} lg={6} className="project--col">
        <div className="project--right">
          <div className="project--info">
            <h4 className="project--name">To Do List</h4>
            <p className="project--description">
              This web application was built with React JS and utilizes Redux
              for all state management. Google Oauth is integrated to allow the
              user to sign into their Google account. All to do items are stored
              in a local JSON database. The user can add, edit or delete to do
              items, but they can only edit or delete an item if they're signed
              into the account which created the to do.
            </p>
            <div className="project--tech">
              <h5 className="project--tech--header">Technologies Used</h5>
              <div className="project--icon--box">
                <i className="devicon-react-original project--icon"></i>
                <i className="devicon-javascript-plain project--icon"></i>
                <i className="devicon-redux-original project--icon"></i>
                <i className="devicon-css3-plain project--icon"></i>
                <i className="devicon-google-plain project--icon"></i>
              </div>
            </div>
            <div className="project--links">
              <a
                href="https://github.com/DaltonOtineru/React-Redux-ToDo-List"
                target="_blank"
                className="project--github"
              >
                <i className="devicon-github-original-wordmark"></i>
              </a>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoList;
