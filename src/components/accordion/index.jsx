import PropTypes from 'prop-types';
import { useState } from 'react';
import clsx from 'clsx';
// Components
import AccordionPanel from './components/accordion-panel';
// Assets
import question from 'assets/images/icons/question.svg';
import chevronDown from 'assets/images/icons/chevron-down.svg';

const Accordion = ({ items }) => {
  const [activeIdxs, setActiveIdxs] = useState([0]);

  const toggleIndex = (idx) => {
    setActiveIdxs((activeIdx) => {
      const isOpen = activeIdx.includes(idx);
      return isOpen ? [] : [idx];
    });
  };

  return (
    <>
      {items.map(({ title, content }, idx) => {
        const isOpen = activeIdxs.includes(idx);
        return (
          <div
            key={idx}
            className={clsx(
              'bg-white rounded-3xl',
              idx !== items.length - 1 && 'mb-4'
            )}
          >
            <button
              className="flex items-center w-full md:py-6 py-4 md:px-12 px-6 text-left"
              onClick={() => toggleIndex(idx)}
            >
              <img
                src={question}
                alt="question"
                className="mr-7 md:block hidden"
              />
              <h4>{title}</h4>
              <img
                src={chevronDown}
                alt="chevron"
                className={clsx(
                  'ml-auto transition duration-300',
                  isOpen && 'transform rotate-180'
                )}
              />
            </button>
            <AccordionPanel isOpen={isOpen}>
              <p className="md:px-28 px-6 font-medium pb-10">{content}</p>
            </AccordionPanel>
          </div>
        );
      })}
    </>
  );
};

Accordion.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Accordion;
