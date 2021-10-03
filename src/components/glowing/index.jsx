import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

const Glowing = ({ bg, width, height, className }) => {
  const classes = clsx(
    'absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-60 -z-1',
    bg,
    className
  );
  return (
    <div
      className={classes}
      style={{
        width,
        height,
        filter: 'blur(135px)',
      }}
    />
  );
};

Glowing.defaultProps = {
  width: '100%',
  height: '100%',
};

Glowing.propTypes = {
  bg: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};

export default Glowing;
