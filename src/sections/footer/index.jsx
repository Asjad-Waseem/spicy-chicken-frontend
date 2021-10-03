import PropTypes from 'prop-types';
import clsx from 'clsx';
// Components
import Socials from 'components/socials';
// Assets
import { ReactComponent as Logo } from 'assets/images/logo.svg';

const Footer = ({ className }) => {
  const classes = clsx(
    'flex flex-col items-center text-center pb-16',
    className
  );

  return (
    <div className={classes}>
      <Logo className="mb-12 md:max-w-180 max-w-150" />
      <Socials className="mb-12" />
      <p className="text-10 text-white opacity-50">
        Copyright © {new Date().getFullYear()} Spicy Chiken Club
      </p>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
