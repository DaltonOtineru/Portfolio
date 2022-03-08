import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { BsCalendar3 } from 'react-icons/bs';
import './Calendly.scss';

const Calendly = () => {
  return (
    <div className="calendly">
      <Container className="calendly--inner">
        <div className="calendly--title--box">
          <h4 className="calendly--title">
            Want to easily schedule a <span>phone call</span> or{' '}
            <span>interview</span>? Use the Calendly button below!
          </h4>
        </div>
        <div className="cal--button--box">
          <Button
            size="lg"
            className="calendly--button"
            href="https://calendly.com/daltonotineru/phonecallmeeting"
            target="_blank"
          >
            Schedule Interview
            <BsCalendar3 className="calendly--icon" />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Calendly;
