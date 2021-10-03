import PropTypes from 'prop-types';
import clsx from 'clsx';
// Components
import StepsList from 'components/steps-list';
// Assets
import background from './images/background.svg';
// Data
import steps from './steps';

const Roadmap = ({ className }) => {
  const classes = clsx('relative', className);

  return (
    <div className={classes}>
      <div className="container px-4">
        <div className="text-center max-w-6xl mx-auto mb-14">
          <h2 className="lg:mb-8 mb-4">Roadmap</h2>
          <p className="text-22 text-white font-medium leading-9">
            We’re in this for the long haul. The whole Spicy Chicken team
            believes in the long-term success of the NFT market and we have bold
            goals to be the largest NFT project of all time. The above roadmap
            is not an exhaustive list, rather it is a mere glimpse into some of
            the things that we’re working on. We value all of your feedback in
            shaping the future of NFTs. Let’s make history.
          </p>
        </div>
        <div className="mx-auto max-w-7xl">
          <StepsList steps={steps} />
        </div>
      </div>
      <img
        src={background}
        alt="background"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-1"
      />
    </div>
  );
};

Roadmap.propTypes = {
  className: PropTypes.string,
};

export default Roadmap;
