import PropTypes from 'prop-types';
import clsx from 'clsx';
// Assets
import { ReactComponent as Egg } from 'assets/images/icons/egg.svg';
import squere from 'assets/images/icons/squere.svg';

const StepsList = ({ steps, className }) => {
  return (
    <div className={className}>
      {steps.map(({ title, text }, idx) => {
        return (
          <div className="flex mb-3.5" key={idx}>
            <h3 className="md:block hidden w-full max-w-250 pb-6 leading-9">
              {title}
            </h3>
            <div className="flex flex-col items-center md:pl-3 md:pr-0 pr-4">
              <Egg />
              <div
                className="flex-1"
                style={{
                  width: '3px',
                  backgroundImage: `url('${squere}')`,
                  backgroundSize: '3px 15px',
                  backgroundRepeat: 'repeat-y',
                }}
              ></div>
            </div>
            <div
              className={clsx(
                'md:flex-1 md:pl-10',
                idx !== steps.length - 1 && 'pb-12'
              )}
            >
              <h3 className="pb-2 md:hidden block leading-9 -mt-1">{title}</h3>
              <p className="text-white leading-7 whitespace-pre-line">{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

StepsList.propTypes = {
  steps: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default StepsList;
