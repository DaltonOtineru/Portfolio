import React from 'react';
import Calendly from '../Calendly/Calendly';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import './Bottom.scss';

const Bottom = () => {
  return (
    <div className="bottom">
      <Calendly />
      <Contact />
      <Footer />
    </div>
  );
};

export default Bottom;
