import PropTypes from 'prop-types';
import clsx from 'clsx';
// Components
import Paper from 'components/paper';
// Assets
import lineTop from './images/line-top.svg';
import lineBottom from './images/line-bottom.svg';
import rooster1 from 'assets/images/team/rooster-1.png';
import rooster2 from 'assets/images/team/rooster-2.png';
import rooster3 from 'assets/images/team/rooster-3.png';
import rooster4 from 'assets/images/team/rooster-4.png';

const Team = ({ className }) => {
  const classes = clsx('relative overflow-hidden', className);

  return (
    <div className={classes}>
      <img src={lineTop} alt="top-line" className="w-full -mb-0.5" />
      <div className="relative z-10 bg-black md:pt-0 pt-5">
        <div className="container px-4 text-center">
          <h2 className="text-white lg:mb-8 mb-4">The Team</h2>
          <div className="flex flex-wrap justify-around -mx-4">
            <div className="px-4">
              <Paper className="p-4 mb-8" tilt="left">
                <img src={rooster1} alt="rooster-1" />
              </Paper>
              <h4 className="mb-8 text-white">Defi Bags</h4>
            </div>
            <div className="px-4">
              <Paper className="p-4 mb-8" tilt="right">
                <img src={rooster2} alt="rooster-2" />
              </Paper>
              <h4 className="mb-8 text-white">Jalfaro</h4>
            </div>
            <div className="px-4">
              <Paper className="p-4 mb-8" tilt="left">
                <img src={rooster3} alt="rooster-3" />
              </Paper>
              <h4 className="mb-8 text-white">Brains</h4>
            </div>
            <div className="px-4">
              <Paper className="p-4 mb-8" tilt="right">
                <img src={rooster4} alt="rooster-4" />
              </Paper>
              <h4 className="mb-8 text-white">BBD</h4>
            </div>
          </div>
        </div>
      </div>
      <img
        src={lineBottom}
        alt="bottom-line"
        className="relative z-0 w-full -mt-0.5"
      />
    </div>
  );
};

Team.propTypes = {
  className: PropTypes.string,
};

export default Team;
