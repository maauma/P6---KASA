import React, { useState, useRef, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if(contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [children]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordeon about-accordeon accomodation-accordeon'>
      <h2 className={isOpen ? 'open' : 'closed'} onClick={toggleOpen}>
        {title}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </h2>
      <div 
        className={`content ${isOpen ? 'open' : 'closed'}`} 
        style={{minHeight: isOpen ? maxHeight : "0px"}}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;