import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordeon about-accordeon accomodation-accordeon'>
      <h2 className={isOpen ? 'open' : 'closed'} onClick={toggleOpen}>
        {title}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </h2>
      {isOpen && <div className='content'>{children}</div>}
    </div>
  );
};

export default Collapse;
