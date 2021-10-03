import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
// Components
import CountdownItem from './components/countdown-item';
// Utils
import { zeroPad } from 'utils';

const Countdown = ({ date, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hrs: '00',
    mins: '00',
    secs: '00',
  });

  const handleDate = (countDownDate) => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const timeDiff = {
      days: zeroPad(Math.floor(distance / 1000 / 60 / 60 / 24)),
      hrs: zeroPad(Math.floor((distance / 1000 / 60 / 60) % 24)),
      mins: zeroPad(Math.floor((distance / 1000 / 60) % 60)),
      secs: zeroPad(Math.floor((distance / 1000) % 60)),
    };
    setTimeLeft(timeDiff);
  };

  useEffect(() => {
    const countDownDate = new Date(date).getTime();
    handleDate(countDownDate);
    const interval = setInterval(handleDate.bind(null, countDownDate), 1000);
    return () => clearInterval(interval);
  }, []);

  const classes = clsx('flex items-start justify-center', className);

  return (
    <div className={classes}>
      <CountdownItem title="days" time={timeLeft.days} />
      <p className="px-0.5 text-26 text-black" style={{ paddingTop: '3px' }}>
        :
      </p>
      <CountdownItem title="hours" time={timeLeft.hrs} />
      <p className="px-0.5 text-26 text-black" style={{ paddingTop: '3px' }}>
        :
      </p>
      <CountdownItem title="minutes" time={timeLeft.mins} />
      <p className="px-0.5 text-26 text-black" style={{ paddingTop: '3px' }}>
        :
      </p>
      <CountdownItem title="seconds" time={timeLeft.secs} />
    </div>
  );
};

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Countdown;
