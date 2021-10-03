import PropTypes from 'prop-types';

const CountdownItem = ({ title, time }) => {
  return (
    <div className="text-center">
      <div className="flex items-center text-white md:text-26 sm:text-24 text-20 font-black leading-none">
        <div className="relative flex justify-center items-center bg-black rounded-md md:w-10 sm:w-8 w-6 md:h-12 sm:h-10 h-8 mr-0.5">
          <span className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white opacity-30 h-px w-full"></span>
          <span className="absolute">{time.split('')[0]}</span>
        </div>
        <div className="relative flex justify-center items-center bg-black rounded-md md:w-10 sm:w-8 w-6 md:h-12 sm:h-10 h-8 ">
          <span className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white opacity-30 h-px w-full"></span>
          <span className="absolute">{time.split('')[1]}</span>
        </div>
      </div>
      <span className="text-10 uppercase pt-1">{title}</span>
    </div>
  );
};

CountdownItem.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CountdownItem;
