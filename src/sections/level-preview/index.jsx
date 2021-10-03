import PropTypes from 'prop-types';
import clsx from 'clsx';
// Components
import Glowing from 'components/glowing';
// Assets
import background from './images/background.svg';
import Chart from 'components/chart';
// Data
import { data } from './data';

const LevelPreview = ({ className }) => {
  const classes = clsx('relative', className);

  return (
    <div className={classes}>
      <div className="container px-4 text-center">
        <p className="p-md text-white mb-4 max-w-6xl mx-auto">
          Each level contains a certain number of traits, and will be
          represented as a total score between 2 and 15 points. These points are
          determined by which traits your Spicy Chicken has. Your points play a
          role in club benefits and for next generation rewards.
        </p>
        <div className="relative max-w-5xl mx-auto">
          <Glowing bg="bg-yellow-400" width="80%" height="60%" />
          <Chart data={data} />
        </div>
      </div>
      <img
        src={background}
        alt="background"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-1"
      />
    </div>
  );
};

LevelPreview.propTypes = {
  className: PropTypes.string,
};

export default LevelPreview;
