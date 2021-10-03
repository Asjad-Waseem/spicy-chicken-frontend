import PropTypes from 'prop-types';
import Accordion from 'components/accordion';
// Assets
import feather from 'assets/images/icons/feather.svg';
import background from './images/background.svg';
// Data
import { items } from './data';

const Faq = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-center lg:mb-8 mb-4">FAQ</h2>
      <div className="relative">
        <img
          src={background}
          alt="background"
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 -z-1"
        />
        <div className="relative container px-4">
          <img
            src={feather}
            alt="feather"
            className="absolute -right-14 -top-8 transform rotate-90 z-1 md:block hidden"
          />
          <div className="max-w-6xl mx-auto">
            <Accordion items={items} />
          </div>
          <img
            src={feather}
            alt="feather"
            className="absolute -left-20 top-1/2 transform -translate-y-1/2 rotate-180 z-1 md:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

Faq.propTypes = {
  className: PropTypes.string,
};

export default Faq;
