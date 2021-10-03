import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const AccordionPanel = ({ isOpen, children }) => {
  const content = useRef(null);

  useEffect(() => {
    const panel = content.current;
    if (isOpen) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
    return () => {
      if (isOpen) {
        panel.style.maxHeight = 0;
      }
    };
  }, [isOpen]);

  return (
    <div
      ref={content}
      className="max-h-0 overflow-hidden transition-all duration-300"
    >
      {children}
    </div>
  );
};

AccordionPanel.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default AccordionPanel;
