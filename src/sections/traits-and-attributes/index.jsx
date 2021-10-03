import PropTypes from 'prop-types';
// Components
import Paper from 'components/paper';
import Chip from 'components/chip';
// Assets
import feather from 'assets/images/icons/feather.svg';
import rooster1 from 'assets/images/roosters/inmate-rooster-1.png';
import rooster2 from 'assets/images/roosters/replaced-rooster.png';
import rooster3 from 'assets/images/roosters/soviet-rooster.png';
import rooster4 from 'assets/images/roosters/steampunk-rooster.png';

const TraitsAndAttributes = ({ className }) => {
  return (
    <div className={className}>
      <div className="relative container px-4">
        <div className="flex flex-wrap items-start justify-between -mx-4">
          <div className="relative lg:w-5/12 w-full px-2 flex flex-wrap lg:order-0 order-1">
            <div className="w-6/12 p-2">
              <Paper className="p-4" tilt="right">
                <img src={rooster1} className="w-full" alt="rooster1" />
              </Paper>
            </div>
            <div className="w-6/12 p-2">
              <Paper className="p-4" tilt="right">
                <img src={rooster2} className="w-full" alt="rooster2" />
              </Paper>
            </div>
            <div className="w-6/12 p-2">
              <Paper className="p-4" tilt="left">
                <img src={rooster3} className="w-full" alt="rooster3" />
              </Paper>
            </div>
            <div className="w-6/12 p-2">
              <Paper className="p-4" tilt="left">
                <img src={rooster4} className="w-full" alt="rooster4" />
              </Paper>
            </div>
            <img
              src={feather}
              alt="feather"
              className="absolute -bottom-20 -left-20 z-10 pointer-events-none transform -rotate-90 md:block hidden"
            />
          </div>
          <div className="lg:w-6/12 w-full lg:order-1 order-0 px-4 relative lg:mb-0 mb-4">
            <img
              src={feather}
              alt="feather"
              className="absolute -right-2 -top-2 -z-1 md:block hidden"
            />
            <h2 className="lg:mb-8 mb-4">Traits & Attributes</h2>
            <p className="p-md text-white mb-10">
              Each Spicy Chicken has been programmatically generated from 120+
              attributes across traits ranging from clothes, eyes, headgear, and
              many more. All 10,000 are uniquely spicy—but some have scarcer
              traits than others. In other words, all chickens are dope, but
              some are rarer than others. <br />
              <br />
              <span className="font-bold">
                These 120+ variations will place your Spicy Chicken in one of 5
                levels
              </span>
            </p>
            <div className="flex items-start flex-wrap">
              <Chip className="bg-green-400 md:mr-4 mr-2 md:mb-4 mb-2">
                Common - 8000
              </Chip>
              <Chip className="bg-melrose-400 md:mr-4 mr-2 md:mb-4 mb-2">
                Uncommon - 1000
              </Chip>
              <Chip className="bg-viking-400 md:mr-4 mr-2 md:mb-4 mb-2">
                Rare - 900
              </Chip>
              <Chip className="bg-koromiko-400 md:mr-4 mr-2 md:mb-4 mb-2">
                Very Rare - 90
              </Chip>
              <Chip className="bg-mulberry-400">Legendary - 10</Chip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TraitsAndAttributes.propTypes = {
  className: PropTypes.string,
};

export default TraitsAndAttributes;
