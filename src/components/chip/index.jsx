import PropTypes from 'prop-types';
import clsx from 'clsx';

const Chip = ({ children, className, ...oterProps }) => {
  const classes = clsx(
    'inline-flex md:px-5 px-3 md:py-3.5 py-3 leading-none md:text-22 text-18 font-bold text-white text-center rounded-md',
    className
  );

  return (
    <div className={classes} {...oterProps}>
      {children}
    </div>
  );
};

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
};

export default Chip;
