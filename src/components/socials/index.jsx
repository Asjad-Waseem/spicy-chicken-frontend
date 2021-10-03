import PropTypes from 'prop-types';
import clsx from 'clsx';
// Assets
import { ReactComponent as Twitter } from 'assets/images/socials/twitter.svg';
import { ReactComponent as Discord } from 'assets/images/socials/discord.svg';

const Socials = ({ className }) => {
  const classes = clsx('flex items-center flex-wrap', className);

  return (
    <div className={classes}>
      <div className="flex items-center sm:mr-14 mr-10">
        <p className="text-14 font-medium text-black mr-6 sm:block hidden">
          Follow Updates on:
        </p>
        <a href="https://twitter.com/spicychickennft" target="_blank">
          <Twitter />
        </a>
      </div>
      <div className="flex items-center">
        <p className="text-14 font-medium text-black mr-6 sm:block hidden">
          For More Info:
        </p>
        <a href="https://discord.com/invite/KFWUhXeRAx" target="_blank">
          <Discord />
        </a>
      </div>
    </div>
  );
};

Socials.propTypes = {
  className: PropTypes.string,
};

export default Socials;
