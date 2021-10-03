import PropTypes from 'prop-types';
import clsx from 'clsx';
// Assets
import roosterHead from './images/rooster-head.svg';

const Welcome = ({ className }) => {
  const classes = clsx('relative container px-4', className);

  return (
    <div className={classes}>
      <div className="md:px-12 px-6 xl:pt-16 xl:pb-24 p-10 max-w-5xl bg-black rounded-3xl">
        <h2 className="text-white lg:mb-8 mb-4">
          Welcome To The Spicy Chicken Club
        </h2>
        <p className="leading-7 text-white font-medium">
          When you buy a Spicy Chicken, you’re not just buying a profile pic or
          a digital piece of art. You are gaining membership access to a club
          whose benefits and offerings will increase as the success of the
          project increases. Your Spicy Chicken can serve as your digital
          identity, and open digital doors for you.
          <br />
          <br />
          We have made it our goal to make sure utility is always offered to all
          our members. This utility will be modest at first but will expand over
          time as we continue to build.
          <br />
          <br />
          Of course, each token grants commercial rights to the art for you to
          create something with your Spicy Chicken NFT if you wish to do so.
        </p>
      </div>
      <img
        src={roosterHead}
        alt="rooster-head"
        className="absolute top-1/2 -right-10 transform -translate-y-1/2 -z-1 xl:block hidden"
      />
    </div>
  );
};

Welcome.propTypes = {
  className: PropTypes.string,
};

export default Welcome;
