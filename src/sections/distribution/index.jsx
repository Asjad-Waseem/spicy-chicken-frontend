import PropTypes from 'prop-types';
import clsx from 'clsx';
// Assets
import cursorInfo from 'assets/images/icons/cursor-info.svg';

const Distribution = ({ className }) => {
  const classes = clsx('container px-4', className);

  return (
    <div className={classes}>
      <div className="flex flex-wrap -mx-4">
        <div className="lg:w-6/12 w-full px-4 lg:mb-0 mb-4">
          <h2 className="lg:mb-8 mb-4">Fair Distribution</h2>
          <p className="p-md font-medium text-white">
            There are no bonding curves here. Buying a Spicy Chicken costs 2
            SOL. There are no price tiers; SCC membership costs the same for
            everyone.
          </p>
        </div>
        <div className="lg:w-6/12 w-full px-4">
          <div className="bg-orange-500 rounded-3xl md:p-16 p-6 relative z-10">
            <img
              src={cursorInfo}
              alt="info"
              className="absolute right-7 top-7 -z-1"
            />
            <p className="text-white">
              Note: 100 chickens are being withheld from the sale. These will be
              used for giveaways, contests — and for the teams&apos; SCC
              memberships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Distribution.propTypes = {
  className: PropTypes.string,
};

export default Distribution;
