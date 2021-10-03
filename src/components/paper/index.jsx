import PropTypes from 'prop-types';
import clsx from 'clsx';

const Paper = ({ className, children, tilt }) => {
  const classes = clsx('relative z-10', className);
  const bgClasses = clsx(
    'absolute inset-0 bg-white rounded-3xl',
    tilt === 'left' && 'transform -rotate-2',
    tilt === 'right' && 'transform rotate-2'
  );

  return (
    <div className={classes}>
      <div className={bgClasses} style={{ zIndex: -1 }} />
      {children}
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tilt: PropTypes.string,
};

export default Paper;
